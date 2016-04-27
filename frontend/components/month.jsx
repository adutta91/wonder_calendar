var React = require('react');

// COMPONENTS
var Day = require('./day');

// STORES
var DateStore = require('../stores/dateStore');
var EventStore = require('../stores/eventStore');

// ASSETS
var MONTHS = require('../assets/months');

var Month = React.createClass({

  getInitialState: function() {
    return ({
      month: this.props.month,
      year: this.props.year
    });
  },

  componentDidMount: function() {
    this.dateListener = DateStore.addListener(this.updateView);
    this.eventListener = DateStore.addListener(this.updateView);
  },

  componentWillUnmount: function() {
    this.dateListener.remove();
    this.eventListener.remove();
  },

  updateView: function() {
    this.setState({
      month: DateStore.viewedMonth(),
      year: DateStore.viewedYear()
    });
  },

  bufferDays: function() {
    var day = new Date(this.state.month + " 1 " + this.state.year).getDay();
    var bufferDays = [];
    for (var i = 0; i < day; i++) {
      bufferDays.push(<div className="bufferDay" key={"bufferDay" + i}/>)
    }
    return bufferDays;
  },

  getDays: function() {
    var days = Array.apply(null, Array(31)).map(function (_, i) { return i + 1; });
    var month = this.state.month;
    var year = this.state.year;
    return days.map(function(dayNumber) {
      var date = new Date(month + " " + dayNumber + " " + year);
      if (MONTHS[date.getMonth()] === month) {
        return (
          <Day day={dayNumber} month={MONTHS[date.getMonth()]} year={date.getFullYear()} key={dayNumber}/>
        )
      }
    });
  },

  render: function() {
    return (
      <div className="month">
        {this.bufferDays()}
        {this.getDays()}
      </div>
    )
  }
});

module.exports = Month;
