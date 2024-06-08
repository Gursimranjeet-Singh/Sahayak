import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Informationcard from "./Informationcard1";


const MapComponent = ({ initialCenter = [20.5937, 78.9629] }) => {
  const mapRef = useRef(); // ref to hold the map instance


  const handlecloseinfocard = () => {
    document.getElementById("infsevice2").style.display = "none";
  };

  useEffect(() => {
    mapRef.current = L.map("my-map", {
      zoomControl: false
    }).setView(
      initialCenter,
      5
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">'
    }).addTo(mapRef.current);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [initialCenter]);

  return (
    <>
      <div
        id="service2"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1000,
          width: "100%",
        }}
      >
        
        <div id="infsevice2" style={{  }}>{/* for info card display or not*/}
          <Informationcard
            closeInfoCard={handlecloseinfocard}
           
          />
        </div>
      </div>
      <div id="my-map" style={{ height: "93vh", width: "100vw", zIndex: 1 }} />
    </>
  );
};

export default MapComponent;
