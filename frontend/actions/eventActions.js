var Dispatcher = require('../dispatcher/dispatcher');

var EventActions = {
  addEvent: function(evnt) {
    Dispatcher.dispatch({
      actionType: "ADD_EVENT",
      evnt: evnt
    });
  },

  editEvent: function(evnt) {
    Dispatcher.dispatch({
      actionType: "EDIT_EVENT",
      evnt: evnt
    });
  }
};

module.exports = EventActions;
