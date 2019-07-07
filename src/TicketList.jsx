import React from 'react';
import Ticket from './Ticket';


function TicketList(props){
  console.log(props.ticketList);
  
  return (
    <div>
      <hr/>
      {props.ticketList.map((ticket) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={ticket.id} />
        )}
    </div>
  )
}

export default TicketList;