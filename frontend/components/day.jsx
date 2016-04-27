var React = require('react');


var Day = React.createClass({

  getInitialState: function() {
    return ({
      day: this.props.day,
      month: this.props.month,
      year: this.props.year
    });
  },

  render: function() {
    return (
      <div className="day">
        {this.state.day} {this.state.month}
      </div>
    )
  }

});

module.exports = Day;
