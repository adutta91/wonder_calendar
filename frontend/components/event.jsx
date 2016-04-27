var React = require('react');

// MODAL
var Modal = require('boron/OutlineModal');
var EditEventModal = require('./modals/editEventModal');


var Event = React.createClass({

  getInitialState: function() {
    return ({
      title: this.props.title,
      description: this.props.description,
      startTime: this.props.startTime,
      endTime: this.props.endTime
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
        <Modal ref="modal">
          <EditEventModal/>
          <button className="modalButton" onClick={this.hideModal}>Close</button>
        </Modal>
      </div>
    )
  }
});

module.exports = Event;
