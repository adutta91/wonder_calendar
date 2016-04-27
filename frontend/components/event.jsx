var React = require('react');

var Event = React.createClass({

  getInitialState: function() {
    return ({
      title: this.props.title,
      description: this.props.description,
      startTime: this.props.startTime,
      endTime: this.props.endTime
    });
  },

  render: function() {
    return (
      <div>
        {this.state.title} {this.state.startTime} - {this.state.endTime}
      </div>
    )
  }
});

module.exports = Event;
