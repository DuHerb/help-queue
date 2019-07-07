import React from 'react';
import './App.css';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './components/NewTicketControl'
// import Error404 from './Error404';
import { Switch, Route, HashRouter } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    }
  }

  handleAddnewTicket = newTicket => {
    let newMasterTicketList = this.state.masterTicketList.slice();
    console.log("newMasterTicketList after slice = ",newMasterTicketList);
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
