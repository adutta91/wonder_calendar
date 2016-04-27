var Dispatcher = require('../dispatcher/dispatcher');

var DateActions = {
  setDate: function(date) {
    Dispatcher.dispatch({
      actionType: "SET_DATE",
      date: date
    });
  }
};

module.exports = DateActions;
