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

  handleConfirmation = () => {
    this.setState({formVisible: true});
  }

  render(){
    return(
      this.state.formVisible ? <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation}/> : <ConfirmationQuestions onHandleConfirmation = {this.handleConfirmation}/>
    )
  }
}