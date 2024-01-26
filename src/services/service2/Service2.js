// React component for Enhanced Accessibility Information UI

import React, { useState } from 'react';
import './service2.css'; // Import your CSS file for styling
import  NavBarSer2  from './componentsservice2/NavBarSer2';
import Map from './componentsservice2/Maps2';
import Informationcard from './componentsservice2/Informationcard';

const Service2 = () => {
  const [selectedStation, setSelectedStation] = useState(null);

  const stations = [
    {
      id: 1,
      name: 'Station A',
      accessibility: {
        wheelchairAccessible: true,
        elevatorAvailable: true,
        rampAvailable: false,
        audioAnnouncements: true,
      },
    },
    {
      id: 2,
      name: 'Station B',
      accessibility: {
        wheelchairAccessible: true,
        elevatorAvailable: false,
        rampAvailable: true,
        audioAnnouncements: true,
      },
    },
    // Add more stations as needed
  ];

  
  return (
    <>
    <NavBarSer2/>
    <div id='contetnservice2' >
      <div id='mapsevice2'><Map/></div>
      <div id='infsevice2'><Informationcard/></div>
    
    </div>
   
    </>
  );
};

export default Service2;


