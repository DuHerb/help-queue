import React from 'react';
import './App.css';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './components/NewTicketControl'
// import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      // masterTicketList: { stuff: 'stuff'},
      selectedTicket: null
    }
  }
  
  // handleAddnewTicket = newTicket => {
  //   let newMasterTicketList = this.state.masterTicketList.slice();
  //   console.log("newMasterTicketList after slice = ",newMasterTicketList);
  //   newMasterTicketList.push(newTicket);
  //   this.setState({masterTicketList: newMasterTicketList});
  // }

  render(){
    // console.log(props)
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.props.masterTicketList}/>} />
          <Route path='/newticket' render={ ()=><NewTicketControl/>} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    masterTicketList: state
  }
}

export default withRouter(connect(mapStateToProps)(App));
