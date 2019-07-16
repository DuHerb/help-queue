import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <h1>Help Queue</h1>
      <Link to='/'>Home</Link><br/>
      <Link to='/newTicket'>New Ticket</Link><hr/>
    </>
  );
}

export default Header;