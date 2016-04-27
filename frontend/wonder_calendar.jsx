// REACT
var React = require('react');
var ReactDOM = require('react-dom');

var CalendarApp = React.createClass({
  render: function() {
    return (
      <div>
        Hello, I'm a calendar
      </div>
    )
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector("#root");
  ReactDOM.render(<CalendarApp />, root);
});
