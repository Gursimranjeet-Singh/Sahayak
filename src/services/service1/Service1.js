import React, { useState } from 'react';
import Informationcard1 from './componentsservice1/Informationcard1';
import './service1.css';
import Search1 from "./componentsservice1/Search1"
import NavBarSer1 from "../service2/componentsservice2/NavBar";
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
        
          <Search1/>
        
        
        <div id="infsevice1"
        //  style={{ display: "none" }}
         >
          <Informationcard1/>
        </div>
      </div>
      </>
   
  );
}



