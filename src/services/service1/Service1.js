import React, { useState } from 'react';
import Informationcard1 from './componentsservice1/Informationcard1';
import './service1.css';

import NavBarSer1 from "../service2/componentsservice2/NavBar";
import Mapser1 from './componentsservice1/Mapser1';
export default function Service1(){
  return(
    <>
    <NavBarSer1 description='Find shortest transportation accessible path between locations ' service="Service2" />

      <div
        id="service1"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1000,
          width: "100%",
        }}
      >
        
          <Mapser1/>
        
        
        <div id="infsevice1"
        //  style={{ display: "none" }}
         >
          <Informationcard1/>
        </div>
      </div>
      </>
   
  );
}



