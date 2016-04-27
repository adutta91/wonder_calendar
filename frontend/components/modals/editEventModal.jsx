var React = require('react');

// UTIL
var EventUtil = require('../../util/eventUtil');

var EditEventModal = React.createClass({

  getInitialState: function() {
    return ({
      title: this.props.title,
      description: this.props.description,
      startTime: this.props.startTime,
      endTime: this.props.endTime,
      day: this.props.day,
      month: this.props.month,
      year: this.props.year,
      id: this.props.id
    });
  },

  updateTitle: function(event) {
    this.setState({ title: event.currentTarget.value});
  },

  updateStartTime: function(event) {
    this.setState({ startTime: event.currentTarget.value});
  },

  updateEndTime: function(event) {
    this.setState({ endTime: event.currentTarget.value});
  },

  updateDescription: function(event) {
    this.setState({ description: event.currentTarget.value});
  },

  editEvent: function(event) {
    EventUtil.editEvent({
      title: this.state.title,
      description: this.state.description,
      startTime: parseInt(this.state.startTime),
      endTime: parseInt(this.state.endTime),
      day: this.state.day,
      month: this.state.month,
      year: this.state.year,
      id: this.state.id
    });
    this.props.modalCallback();
  },

  render: function() {
    return (
      <div className="modal">
        <h2>{this.state.month} {this.state.day}, {this.state.year}</h2>
        <div>
            <label htmlFor="title">Title: </label>
            <br/>
            <input type="text"
                   id="title"
                   value={this.state.title}
                   onChange={this.updateTitle}/>
            <br/>

            <label htmlFor="startTime">Start: </label>
            <br/>
            <input type="text"
                   id="startTime"
                   value={this.state.startTime}
                   onChange={this.updateStartTime}/>
            <br/>

            <label htmlFor="endTime">End: </label>
            <br/>
            <input type="text"
                   id="endTime"
                   value={this.state.endTime}
                   onChange={this.updateEndTime}/>
            <br/>

            <label htmlFor="description">Description: </label>
            <br/>
            <textarea id="description"
                      value={this.state.description}
                      onChange={this.updateDescription}
                      rows="10" cols="30">
            </textarea>
            <br/>
           <div className="modalSubmitButton" onClick={this.editEvent}>Edit</div>
        </div>
      </div>
    )
  }
});

module.exports = EditEventModal;
