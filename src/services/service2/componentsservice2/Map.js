import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Informationcard from "./Informationcard";
import Search from "./Search";

const MapComponent = ({ initialCenter }) => {
  const [newMap, setNewMap] = useState(null);

  useEffect(() => {
    const apiKey = "bcd1dd82c5d4489d85f0d5b5936461cd";
    const isRetina = L.Browser.retina;
    const baseUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${apiKey}`;
    const retinaUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey=${apiKey}`;

    // Create a new map instance and store it in the state
    const map = L.map("my-map").setView(initialCenter || [20.5937, 78.9629], 10);
    setNewMap(map);

    L.tileLayer(isRetina ? retinaUrl : baseUrl, {
      attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors',
      maxZoom: 20,
      id: 'osm-bright',
    }).addTo(map);

    // Cleanup when the component unmounts
    return () => {
      if (newMap) {
        newMap.remove();
      }
    };
  }, [initialCenter]);

  return (
    <>
      <div id="service2" style={{ position: "absolute", top: 0, left: 0, zIndex: 1000, width: "100%" }}>
        <div id="searchservice2">
          <Search />
        </div>
        <div id="infsevice2">
          <Informationcard />
        </div>
      </div>
      <div id="my-map" style={{ height: "90vh", width: "100vw", zIndex: 1 }} />
    </>
  );
};

export default MapComponent;
