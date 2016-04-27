var DateActions = require('../actions/dateActions');

var DateUtil = {
  setDate: function() {
    DateActions.setDate(Date.now());
  },

  changeMonth: function(delta) {
    DateActions.changeViewedMonth(delta);
  },

  resetDate: function() {
    DateActions.resetViewedMonth();
  }

};

module.exports = DateUtil;
