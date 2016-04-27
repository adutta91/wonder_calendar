var DateActions = require('../actions/dateActions');

var DateUtil = {
  setDate: function() {
    DateActions.setDate(Date.now());
  }
};

module.exports = DateUtil;
