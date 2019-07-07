import React from 'react';
import './App.css';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './components/NewTicketControl'
// import Error404 from './Error404';
import { Switch, Route, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <HashRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={TicketList} />
          <Route path='/newticket' component={NewTicketControl} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
