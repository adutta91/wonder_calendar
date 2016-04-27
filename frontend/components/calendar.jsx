var React = require('react');

// STORES
var DateStore = require('../stores/dateStore');

// UTIL
var DateUtil = require('../util/dateUtil');

// COMPONENTS
var Month = require('./month');

// ASSETS
var MONTHS = require('../assets/months');
var DAYS = require('../assets/days');

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

  prevMonth: function(event) {
    event.preventDefault();
    DateUtil.changeMonth(-1);
  },

  nextMonth: function() {
    event.preventDefault();
    DateUtil.changeMonth(1);
  },

  updateDate: function() {
    this.setState({
      month: DateStore.viewedMonth(),
      year: DateStore.viewedYear()
    });
  },

  getWeekdays: function() {
    return Object.keys(DAYS).map(function(dayNum) {
      return (<div key={dayNum}>{DAYS[dayNum]}</div>)
    });
  },

  render: function() {
    return (
      <div className="calendar">
        <div className="navigationWrapper">
          <img src="app/assets/images/arrow_left.png" className="prevMonth" onClick={this.prevMonth}/>
          <div>{this.state.month}, {this.state.year}</div>
          <img src="app/assets/images/arrow_right.png" className="nextMonth" onClick={this.nextMonth}/>
        </div>
        <div className="weekDayHeader"> {this.getWeekdays()} </div>
        <Month month={this.state.month} year={this.state.year} />
      </div>
    );
  }

});

module.exports = Calendar;
