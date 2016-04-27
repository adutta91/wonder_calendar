// REACT
var React = require('react');
var ReactDOM = require('react-dom');

// UTIL
var DateUtil = require('./util/dateUtil');

// STORES
var DateStore = require('./stores/dateStore');

var CalendarApp = React.createClass({

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

  render: function() {
    return (
      <div>
        {this.state.date}
      </div>
    )
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector("#root");
  ReactDOM.render(<CalendarApp />, root);
});
