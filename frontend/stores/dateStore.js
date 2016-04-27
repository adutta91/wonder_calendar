var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');

// assets
var DAYS = require('../assets/days');
var MONTHS = require('../assets/months');

var DateStore = new Store(Dispatcher);

var _year = new Date(Date.now()).getFullYear();
var _month = new Date(Date.now()).getMonth();
var _day = new Date(Date.now()).getDay();
var _date = new Date(Date.now()).getDate();
var _hour = new Date(Date.now()).getHours();
var _minute = new Date(Date.now()).getMinutes();

var _viewedMonth = _month;
var _viewedYear = _year;


DateStore.currentDate = function() {
  return (
    DAYS[_day] + " " + MONTHS[_month] + " " + _date + ", " + _year
  )
};

DateStore.viewedMonth = function() {
  return MONTHS[_viewedMonth];
};

DateStore.viewedYear = function() {
  return _viewedYear;
};

DateStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "SET_DATE":
      resetDate(payload.date);
      DateStore.__emitChange();
      break;
    case "SET_VIEW":
      setViewed(payload.delta);
      DateStore.__emitChange();
      break;
    case "RESET_VIEW":
      resetViewed(payload.month);
      DateStore.__emitChange();
      break;
  }
};

var setViewed = function(delta) {
  _viewedMonth += delta;
  if (_viewedMonth > 11) {
    _viewedMonth = 0;
    _viewedYear += 1;
  } else if (_viewedMonth < 0) {
    _viewedMonth = 11;
    _viewedYear -= 1;
  }
};

var resetViewed = function(month) {
  _viewedMonth = new Date(Date.now()).getMonth();
};

var resetDate = function(date) {
  _year = new Date(date).getFullYear();
  _month = new Date(date).getMonth();
  _day = new Date(date).getDay();
  _date = new Date(date).getDate();
  _hour = new Date(date).getHours();
  _minute = new Date(date).getMinutes();
};

module.exports = DateStore;
