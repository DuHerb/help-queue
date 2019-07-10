import React from 'react';
import './App.css';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './components/NewTicketControl'
// import Error404 from './Error404';
import { Switch, Route, HashRouter } from 'react-router-dom';
import moment from 'moment'
import Moment from 'react-moment';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    }
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(()=>
    this.updateTicketElapsedWaitTime(),
    1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    console.log('check');
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) => ticket.formattedWaitTime = (moment(ticket.timeOpen).fromNow()));
    //moment(ticket.timeOpen).from(new Moment())
    this.setState({masterTicketList: newMasterTicketList})
    
  }

  handleAddnewTicket = newTicket => {
    let newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = moment(newTicket.timeOpen).fromNow();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render(){
    return (
      <div>
        <HashRouter>
          <Header/>
          <Switch>
            <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList}/>} />
            <Route path='/newticket' render={ ()=><NewTicketControl onNewTicketCreation={this.handleAddnewTicket}/>} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
