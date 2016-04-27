// REACT
var React = require('react');
var ReactDOM = require('react-dom');

// UTIL
var DateUtil = require('./util/dateUtil');

// STORES
var DateStore = require('./stores/dateStore');
var EventStore = require('./stores/eventStore');

// COMPONENTS
var Calendar = require('./components/calendar');

var WonderApp = React.createClass({

  getInitialState: function() {
    return ({
      date: DateStore.currentDate()
    });
  },

  componentDidMount: function() {
    this.dateListener = DateStore.addListener(this.updateDate);
  },

  componentWillUnmount: function() {
    this.dateListener.remove();
  },

  updateDate: function() {
    this.setState({ date: DateStore.currentDate() });
  },

  resetDate: function() {
    DateUtil.resetDate();
  },

  render: function() {
    return (
      <div className="app">
        <div className="currentDate" onClick={this.resetDate}>{this.state.date}</div>
        <Calendar />
      </div>
    )
  }
});

document.addEventListener("DOMContentLoaded", function() {
  window.EventStore = EventStore;
  var root = document.querySelector("#root");
  ReactDOM.render(<WonderApp />, root);
});
