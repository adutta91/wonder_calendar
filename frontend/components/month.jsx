var React = require('react');

// COMPONENTS
var Day = require('./day');

// ASSETS
var MONTHS = require('../assets/months');

var Month = React.createClass({

  getInitialState: function() {
    return ({
      month: this.props.month,
      year: this.props.year
    });
  },

  getDays: function() {
    var days = Array.apply(null, Array(31)).map(function (_, i) { return i + 1; });
    var month = this.state.month;
    var year = this.state.year;
    return days.map(function(dayNumber) {
      var date = new Date(month + " " + dayNumber + " " + year);
      if (MONTHS[date.getMonth()] === month) {
        console.log(dayNumber);
        return (
          <Day day={dayNumber} month={MONTHS[date.getMonth()]} year={date.getFullYear()} key={dayNumber}/>
        )
      }
    });
  },

  render: function() {
    return (
      <div className="month">
        {this.getDays()}
      </div>
    )
  }
});

module.exports = Month;
