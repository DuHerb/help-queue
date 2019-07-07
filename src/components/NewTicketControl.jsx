import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    }
  }

  // handleClick = () => {
  //   this.setState({formVisible: true});
  //   console.log('formVisible status = ' + this.state.formVisible);
  // }

  render(){
    return(
      this.state.formVisible ? <NewTicketForm/> : <ConfirmationQuestions/>
    )
  }
}