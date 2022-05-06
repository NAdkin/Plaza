import './App.css';
//import React from 'react';
//import { useState , React} from 'react'

function EventGen({ event }) {

  return(<div className="event-card">
            <h1>{event.title}</h1>
            <p>{event.price}</p>
            <p>{event.description}</p>
            <p>{event.datetime}</p>
            <p>{event.duration}</p>


          </div>)

}


function App({ events }) {
 // const [detail, setDetail] = useState()

  return (
    <div className="App">
      {events.map(event => (
      
        <div className="event-card">
            <h1>{event.title}</h1>
            <p>{event.price}</p>
            <p>{event.description}</p>
            <p>{event.datetime}</p>
            <p>{event.duration}</p>


          </div>
        
        
        
        ))}
      

    </div>
  );
}

export default App;
