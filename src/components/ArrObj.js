import { useState } from "react";

const ArrObj = () => {
  const ticketsList = [
    {
      id: 1,
      name: "one",
      address: "bangalore",
      fare: 40,
    },
    {
      id: 2,
      name: "two",
      address: "bombay",
      fare: 30,
    },
    {
      id: 3,
      name: "three",
      address: "chennai",
      fare: 20,
    },
    {
      id: 4,
      name: "four",
      address: "bangalore",
      fare: 10,
    },
  ];

  const [tickets, setTickets] = useState(ticketsList);

  return (
    <>
      <p>ArrObj</p>
      {tickets.map((ticket) => {
        return (
          <ul key={ticket.id}>
            <li>ID      : {ticket.name}</li>
            <li>Address : {ticket.address}</li>
            <li>Fare    : {ticket.fare}</li>
          </ul>
        );
      })}
    </>
  );
};

export default ArrObj;
