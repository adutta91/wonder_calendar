var React = require('react');

// STORES
var DateStore = require('../stores/dateStore');

// COMPONENTS
var Month = require('./month');

var MONTHS = require('../assets/months');

var Calendar = React.createClass({

  getInitialState: function() {
    return ({
      month: DateStore.viewedMonth(),
      year: DateStore.viewedYear()
    });
  },

  componentDidMount: function() {
    this.dateListener = DateStore.addListener(this.updateDate);
  },

  componentWillUnmount: function() {
    this.dateListener.remove()
  },

  updateDate: function() {
    this.setState({
      month: DateStore.viewedMonth(),
      year: DateStore.viewedYear()
    });
  },

  render: function() {
    return (
      <div className="calendar">
        <Month month="May" year={this.state.year} />
      </div>
    );
  }

});

module.exports = Calendar;
