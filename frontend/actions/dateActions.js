var Dispatcher = require('../dispatcher/dispatcher');

var DateActions = {
  setDate: function(date) {
    Dispatcher.dispatch({
      actionType: "SET_DATE",
      date: date
    });
  },

  changeViewedMonth: function(delta) {
    Dispatcher.dispatch({
      actionType: "SET_VIEW",
      delta: delta
    });
  }
};

module.exports = DateActions;
