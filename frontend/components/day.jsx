var React = require('react');

// ASSETS
var DAYS = require('../assets/days');

// STORES
var DateStore = require('../stores/dateStore');

var Day = React.createClass({

  getInitialState: function() {
    return ({
      day: this.props.day,
      month: this.props.month,
      year: this.props.year
    });
  },

  componentDidMount: function() {
    this.dateListener = DateStore.addListener(this.updateDate);
  },

  componentWillUnmount: function() {
    this.dateListener.remove();
  },

  updateDate: function() {
    this.setState({
      month: DateStore.viewedMonth(),
      year: DateStore.viewedYear()
    });
  },

  render: function() {
    var date = new Date(this.state.month + " " + this.state.day + " " + this.state.year)
    return (
      <div className="day">
        {DAYS[date.getDay()]} {this.state.day}
      </div>
    )
  }

});

module.exports = Day;
