import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Map from './Map';
import Loading from './Loading';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
        const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events');
        const { events } = await res.json();

        setEventData(events);
        setLoading(false)
        };

    fetchEvents();
    console.log(eventData )
  }, []); 

  return (
    <div className="App">
      <Header />
     {!loading  ? <Map  eventData={eventData}/> : <Loading/>}
      <Footer />
    </div>
  );
}

export default App;
