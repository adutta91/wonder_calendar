var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');

var EventStore = new Store(Dispatcher);

var getStoredEvents = function() {
  if (localStorage['wonderCalendarEvents']) {
    return JSON.parse(localStorage['wonderCalendarEvents']);
  } else {
    return {};
  }
};

var _events = getStoredEvents();

EventStore.getEvents = function(date) {
  return _events[date];
};

EventStore.getEventById = function(date, id) {
  var event = {};
  if (_events[date]) {    
    _events[date].forEach(function(evnt) {
      if (evnt.id === id) {
        event = evnt;
      }
    });
  }
  return event;
};

EventStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "ADD_EVENT":
      addEvent(payload.evnt);
      EventStore.__emitChange();
      break;
    case "EDIT_EVENT":
      editEvent(payload.evnt);
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
    endTime: evnt.endTime,
    id: _events[date] ? _events[date].length : 0
  };
  if (_events[date]) {
    _events[date].push(eventInfo)
  } else {
    _events[date] = [eventInfo];
  }
  localStorage['wonderCalendarEvents'] = JSON.stringify(_events);
};

var editEvent = function(evnt) {
  var date = evnt.month + " " + evnt.day + " " + evnt.year
  var eventInfo = {
    title: evnt.title,
    description: evnt.description,
    startTime: evnt.startTime,
    endTime: evnt.endTime,
    id: evnt.id
  };

  _events[date] = _events[date].map(function(event) {
    if (event.id === evnt.id) {
      return evnt;
    } else {
      return event;
    }
  });

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
