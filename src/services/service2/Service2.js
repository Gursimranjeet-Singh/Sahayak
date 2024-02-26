// React component for Enhanced Accessibility Information UI

import React, { useState } from "react";
import "./service2.css"; // Import your CSS file for styling
import NavBarSer2 from "./componentsservice2/NavBar";
import Map from "./componentsservice2/Mapser2";
import Login from "../../pages/loginandsignup/Login"
import { array } from "prop-types";
import Signup from "../../pages/loginandsignup/Signup"


function Service2() {
  //sample data for information card
   


  // to close information card when cross icon is clicked
  
 

  return (
    <>
      <NavBarSer2 description='Find wheelchair accessible places at your desired location' service="Service1" />
      <div id="contetnservice2">
        <div id="mapsevice2">
          <Map />
        </div>
        
      </div>
      {/* <Login/> */}
      {/* <Signup/> */}
    </>
  );
}

export default Service2;
