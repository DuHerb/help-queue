import React from 'react';
import PropTypes from 'prop-types';

export default function ConfirmationQuestions(props) {
  return (
    <div>
      <p>
        have you got through all the steps?
      </p>
      <button onClick={props.onHandleConfirmation}>yes</button>
    </div>
  )
}

ConfirmationQuestions.propTypes = {
  onHandleConfirmation: PropTypes.func
}