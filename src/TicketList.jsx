import React from 'react';
import Ticket from './Ticket';


function TicketList({ticketList}){
  console.log(ticketList);
  
  return (
      
      <div>
      <hr/>
      {Object.keys(ticketList).map(function(ticketId) {
        var ticket = ticketList[ticketId];
        return <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={ticketId}
          ticketId={ticketId}
        />;
      })}
    </div>
  )
}

export default TicketList;