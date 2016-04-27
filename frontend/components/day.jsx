var React = require('react');

// ASSETS
var DAYS = require('../assets/days');

// STORES
var DateStore = require('../stores/dateStore');
var EventStore = require('../stores/eventStore');

// COMPONENTS
var Event = require('./event.jsx');

// MODAL
var Modal = require('boron/OutlineModal');
var AddEventModal = require('./modals/addEventModal');

var Day = React.createClass({

  getInitialState: function() {
    return ({
      events: EventStore.getEvents(this.props.month + " " + this.props.day + " " + this.props.year),
      day: this.props.day,
      month: this.props.month,
      year: this.props.year
    });
  },

  componentDidMount: function() {
    this.dateListener = DateStore.addListener(this.updateDate);
    this.eventListener = EventStore.addListener(this.updateEvents);
  },

  componentWillUnmount: function() {
    this.dateListener.remove();
    this.eventListener.remove();
  },

  updateDate: function() {
    this.setState({
      month: DateStore.viewedMonth(),
      year: DateStore.viewedYear()
    });
  },

  updateEvents: function() {
    this.setState({events: EventStore.getEvents(this.state.month + " " + this.state.day + " " + this.state.year)});
  },

  getEvents: function() {
    if (this.state.events) {
      return this.state.events.map(function(evnt, idx) {
        return (<Event title={evnt.title}
                      description={evnt.description}
                      startTime={evnt.startTime}
                      endTime={evnt.endTime}
                      key={idx}/>)
      });
    } else {
      return (<div/>)
    }
  },

  showModal: function(){
    this.refs.modal.show();
  },

  hideModal: function(){
    this.refs.modal.hide();
  },

  render: function() {
    var date = new Date(this.state.month + " " + this.state.day + " " + this.state.year)
    return (
      <div className="day" onClick={this.showModal}>
        {DAYS[date.getDay()]} {this.state.day}
        {this.getEvents()}
        <Modal ref="modal">
          <AddEventModal
            day={this.state.day}
            month={this.state.month}
            year={this.state.year}
            modalCallback={this.hideModal}/>
          <button className="modalButton" onClick={this.hideModal}>Close</button>
        </Modal>
      </div>
    )
  }

});

module.exports = Day;
