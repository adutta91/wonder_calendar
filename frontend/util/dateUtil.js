var DateActions = require('../actions/dateActions');

var DateUtil = {
  setDate: function() {
    DateActions.setDate(Date.now());
  },

  changeMonth: function(delta) {
    DateActions.changeViewedMonth(delta);
  }

};

module.exports = DateUtil;
