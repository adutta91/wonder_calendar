var React = require('react');

// ASSETS
var DAYS = require('../assets/days');
var MONTHS = require('../assets/months');

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
    var newMonth = DateStore.viewedMonth();
    var newYear = DateStore.viewedYear();
    this.setState({
      month: newMonth,
      year: newYear,
      events: EventStore.getEvents(newMonth + " " + this.state.day + " " + newYear)
    });
  },

  updateEvents: function() {
    this.setState({events: EventStore.getEvents(this.state.month + " " + this.state.day + " " + this.state.year)});
  },

  getEvents: function() {
    var that = this;
    if (this.state.events) {
      return this.state.events.map(function(evnt) {
        return (<Event title={evnt.title}
                      description={evnt.description}
                      startTime={evnt.startTime}
                      endTime={evnt.endTime}
                      day={that.state.day}
                      month={that.state.month}
                      year={that.state.year}
                      key={evnt.id}
                      id={evnt.id}/>)
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

  getClassname: function() {
    var currentDate = new Date(Date.now());
    if ((currentDate.getDate() === this.state.day && MONTHS[currentDate.getMonth()] === this.state.month) && currentDate.getFullYear() === this.state.year) {
      return "today"
    } else {
      return "day"
    }
  },

  render: function() {
    var date = new Date(this.state.month + " " + this.state.day + " " + this.state.year)
    return (
      <div className={this.getClassname()} onClick={this.showModal}>
        <div className="dayLabel">{this.state.day}</div>
        <div className="eventContainer">
          {this.getEvents()}
        </div>
        <Modal className="modalWindow" ref="modal">
          <img src="app/assets/images/close.png" className="modalButton" onClick={this.hideModal}/>
          <AddEventModal
            day={this.state.day}
            month={this.state.month}
            year={this.state.year}
            modalCallback={this.hideModal}/>
        </Modal>
      </div>
    )
  }

});

module.exports = Day;
