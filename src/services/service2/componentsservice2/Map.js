import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Informationcard from "./Informationcard";
import Search from "./Search";

//custom marker
const customIcon = new L.Icon({
  iconUrl: "path/to/your/icon.png", // Specify the path to your custom icon image
  iconSize: [32, 32], // Set the size of the icon
  iconAnchor: [16, 32], // Set the anchor point of the icon
  popupAnchor: [0, -32], // Set the popup anchor point
});

const MapComponent = ({ initialCenter }) => {
  const [locations, setLocations] = useState([
    { id: 1, lat: 20.5937, lng: 78.9629, name: "Location 1" },
    {id: 1, lat: 20, lng: 78.29, name: "Location 2"},
    {id: 1, lat: 20.57, lng: 77.9, name: "Location 3***"},
    // Add more locations as needed
  ]);
  const [newMap, setNewMap] = useState(null);

  const handleMarkerClick = (location) => {
    // logic for handling marker click here
    console.log("Marker clicked:", location);
    // Example: Open an information card for the clicked location
    document.getElementById("service2").style.display = "block";
  };

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

    // Check if newMap is not null before adding markers
    if (map) {
      locations.forEach((location) => {
        const marker = L.marker([location.lat, location.lng])
          .addTo(map)
          .on("click", () => handleMarkerClick(location));
      });
    }

    // Cleanup when the component unmounts
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [initialCenter, locations]);

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


