var Dispatcher = require('../dispatcher/dispatcher');

var EventActions = {
  addEvent: function(evnt) {
    Dispatcher.dispatch({
      actionType: "ADD_EVENT",
      payload: evnt
    });
  }
};

module.exports = EventActions;
