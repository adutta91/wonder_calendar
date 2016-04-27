var React = require('react');

// ASSETS
var DAYS = require('../assets/days');

// STORES
var DateStore = require('../stores/dateStore');

// MODAL
var Modal = require('boron/OutlineModal');
var AddEventModal = require('./modals/addEventModal');

var Day = React.createClass({

  getInitialState: function() {
    return ({
      day: this.props.day,
      month: this.props.month,
      year: this.props.year
    });
  },

  componentDidMount: function() {
    this.dateListener = DateStore.addListener(this.updateDate);
  },

  componentWillUnmount: function() {
    this.dateListener.remove();
  },

  updateDate: function() {
    this.setState({
      month: DateStore.viewedMonth(),
      year: DateStore.viewedYear()
    });
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
        <Modal ref="modal">
          <AddEventModal day={this.state.day} month={this.state.month} year={this.state.year}/>
          <button className="modalButton" onClick={this.hideModal}>Close</button>
        </Modal>
      </div>
    )
  }

});

module.exports = Day;
