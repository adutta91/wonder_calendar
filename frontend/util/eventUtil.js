var EventActions = require('../actions/eventActions');

var EventUtil = {
  addEvent: function(evnt) {
    EventActions.addEvent(evnt);
  }
};

module.exports = EventUtil;
