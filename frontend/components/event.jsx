var React = require('react');

// MODAL
var Modal = require('boron/OutlineModal');
var EditEventModal = require('./modals/editEventModal');

// STORES
var EventStore = require('../stores/eventStore');

var Event = React.createClass({

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

  componentDidMount: function() {
    this.eventListener = EventStore.addListener(this.updateEvent);
  },

  componentWillUnmount: function() {
    this.eventListener.remove();
  },

  updateEvent: function() {
    var date = this.state.month + " " + this.state.day + " " + this.state.year;
    var newEvent = EventStore.getEventById(date, this.state.id)
    this.setState({
      title: newEvent.title,
      description: newEvent.description,
      startTime: newEvent.startTime,
      endTime: newEvent.endTime,
      day: newEvent.day,
      month: newEvent.month,
      year: newEvent.year,
      id: newEvent.id
    });
  },

  showModal: function(event){
    event.stopPropagation();
    this.refs.modal.show();
  },

  hideModal: function(){
    this.refs.modal.hide();
  },

  render: function() {

    return (
      <div className="eventModule" onClick={this.showModal}>
        {this.state.title}:  {this.state.startTime} - {this.state.endTime}
        <Modal className="modalWindow" ref="modal">
          <img src="app/assets/images/close.png" className="modalButton" onClick={this.hideModal}/>
          <EditEventModal title={this.state.title}
                          description={this.state.description}
                          startTime={this.state.startTime}
                          endTime={this.state.endTime}
                          day={this.state.day}
                          month={this.state.month}
                          year={this.state.year}
                          id={this.state.id}
                          modalCallback={this.hideModal}/>
        </Modal>
      </div>
    )
  }
});

module.exports = Event;
