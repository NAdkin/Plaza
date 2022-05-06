import './App.css';
//import React from 'react';
//import { useState , React} from 'react'

import plazaevents from './events.json';

//const events = EVENTS[0];

// const plazaevents = local_events;

function GetEvents(){
  fetch('./events.json')
  .then(response => response.json())
  .then(data => console.log(data));

}

function EventGen({ plazaevent }) {

  return(<div className="event-card">
            <h1>{plazaevent.title}</h1>
            <p>{plazaevent.price}</p>
            <p>{plazaevent.description}</p>
            <p>{plazaevent.datetime}</p>
            <p>{plazaevent.duration}</p>


          </div>)

}


function App() {
 // const [detail, setDetail] = useState()

//var plazaevent = plazaevents[0];

  return (

    
    <div className="App">
        <p>Plaza</p>
        <h1>Hello</h1>

      {plazaevents.data.map(plazaevent => (
      
        <div className="event-card">
            <h1>{plazaevent.title}</h1>
            <p>{plazaevent.price}</p>
            <p>{plazaevent.description}</p>
            <p>{plazaevent.datetime}</p>
            <p>{plazaevent.duration}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
