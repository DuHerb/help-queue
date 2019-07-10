import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Moment from 'react-moment';

function Ticket(props) {


  // function displayTimeOpen(timeOpen) {
  //   return moment(timeOpen).from(new Moment(), true);
    
    
  // }

  return (
    
    <div>
    <h3>{props.location} - {props.names}</h3>
    <h4>{props.formattedWaitTime}</h4>
    <p><em>{props.issue}</em></p>
    <hr/>
  </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  // issue: PropTypes.instanceOf(Moment).isRequired
}

export default Ticket;