import React from 'react';
import { Link }from 'react-router-dom';
import Moment from 'react-moment';

function Header() {
  const date = new Date();
  return (
    <>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link><br/>
      <Link to="/newticket">New Ticket</Link>
      <div>
        <p>Today is <Moment format="dddd">{date}</Moment></p>
      </div>
      
    </>
  );
}

export default Header;