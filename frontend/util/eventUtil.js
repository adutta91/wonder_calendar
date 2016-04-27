var EventActions = require('../actions/eventActions');

var EventUtil = {
  addEvent: function(evnt) {
    EventActions.addEvent(evnt);
  },

  editEvent: function(evnt) {
    EventActions.editEvent(evnt);
  }
};

module.exports = EventUtil;
