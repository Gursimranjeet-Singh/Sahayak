// React component for Enhanced Accessibility Information UI

import React, { useState } from 'react';
import './service2.css'; // Import your CSS file for styling
import  NavBarSer2  from './componentsservice2/NavBarSer2';
import Map from './componentsservice2/Maps2';
import Informationcard from './componentsservice2/Informationcard';

function Service2() {
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


