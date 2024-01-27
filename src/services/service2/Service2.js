// React component for Enhanced Accessibility Information UI

import React, { useState } from "react";
import "./service2.css"; // Import your CSS file for styling
import NavBarSer2 from "./componentsservice2/NavBarSer2";
import Map from "./componentsservice2/Maps2";
import Informationcard from "./componentsservice2/Informationcard";
import Search from "./componentsservice2/Search";

function Service2() {
  // to close information card when cross icon is clicked
  function closeInfoCard() {
    document.getElementById("service2").style.display = "none";
  }

  return (
    <>
      <NavBarSer2 />
      <div id="contetnservice2">
        <div id="mapsevice2">
          <Map />
        </div>
        <div id="service2">
          <div id="searchservice2">
            <Search />
          </div>
          <div id="infsevice2">
            <Informationcard closeInfoCard={closeInfoCard} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Service2;
