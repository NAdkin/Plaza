import "./App.css";
//import React from 'react';
import { useState, React } from "react";
//const [detail, setDetail] = useState();

import plazaevents from "./events.json";

//const events = EVENTS[0];

// const plazaevents = local_events;

function GetEvents() {
  fetch("./events.json")
    .then((response) => response.json())
    .then((data) => console.log(data));
}



// function EventGen({ plazaevent }) {
//   return (
//     <div className="event-card">
//       <h1>{plazaevent.title}</h1>
//       <p>{plazaevent.price}</p>
//       <p>{plazaevent.description}</p>
//       <p>{plazaevent.datetime}</p>
//       <p>{plazaevent.duration}</p>
//     </div>
//   );
// }

function App() {
  const [detail, setDetail] = useState();

  function Api_call() {
    fetch({
      url: "http://127.0.0.1:5000/api_test"
      // mode: "cors",
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   "Content-Type": "application/json",
      // },
    }).then((response) => response.text()).then(data => setDetail(data.hello)); // not sure this hook is needed
  }

  return (
    <div className="App">
      <p>Plaza</p>
      {plazaevents.data.map((plazaevent) => (
        <div className="event-card">
          <h1>{plazaevent.title}</h1>
          <p>{plazaevent.price}</p>
          <p>{plazaevent.description}</p>
          <p>{plazaevent.datetime}</p>
          <p>{plazaevent.duration}</p>
        </div>
      ))}

      <button onClick={Api_call}>Call</button>

      <p>{detail}</p>
    </div>
  );
}

export default App;
