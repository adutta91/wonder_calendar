var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');

var EventStore = new Store(Dispatcher);

var _events = {};

EventStore.getEvents = function(date) {
  return _events[date];
};

EventStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "ADD_EVENT":
      addEvent(payload.evnt);
      EventStore.__emitChange();
      break;
  }
};

var addEvent = function(evnt) {
  var date = evnt.month + " " + evnt.day + " " + evnt.year
  var eventInfo = {
    title: evnt.title,
    description: evnt.description,
    startTime: evnt.startTime,
    endTime: evnt.endTime
  };
  if (_events[date]) {
    _events[date].push(eventInfo)
  } else {
    _events[date] = [eventInfo];
  }
  localStorage['wonderCalendarEvents'] = JSON.stringify(_events);
};

var conflictsWith = function(evnt1, evnt2) {
  if (evnt1.startTime < evnt2.endTime && evnt1.startTime > evnt2.startTime) {
    return true;
  } else if (evnt1.endTime > evnt2.startTime && evnt1.endTime < evnt2.endTime) {
    return true;
  } else {
    return false;
  }
};

module.exports = EventStore;
