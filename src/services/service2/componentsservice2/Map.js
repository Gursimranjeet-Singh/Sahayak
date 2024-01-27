import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Informationcard from "./Informationcard";
import Search from "./Search";

const MapComponent = ({ initialCenter }) => {
  
  const [locations, setLocations] = useState([
    { id: 1, lat: 20.5937, lng: 78.9629, name: "Location 1" },
    { id: 2, lat: 20, lng: 78.29, name: "Location 2" },
    { id: 3, lat: 20.57, lng: 77.9, name: "Location 3***" },
    // Add more locations as needed
  ]);

  const handleMarkerClick = (location) => {
    console.log("Marker clicked:", location);
    document.getElementById("service2").style.display = "block";
    // Add your logic for handling marker click here
  };

  useEffect(() => {
    const apiKey = "bcd1dd82c5d4489d85f0d5b5936461cd";
    const isRetina = L.Browser.retina;
    const baseUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${apiKey}`;
    const retinaUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey=${apiKey}`;

    const customIcon = new L.Icon({
      iconUrl: `${process.env.PUBLIC_URL}/MapMarker.png`,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    const map = L.map("my-map").setView(initialCenter || [20.5937, 78.9629], 10);

    L.tileLayer(isRetina ? retinaUrl : baseUrl, {
      attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors',
      maxZoom: 20,
      id: 'osm-bright',
    }).addTo(map);

    if (map) {
      locations.forEach((location) => {
        const marker = L.marker([location.lat, location.lng], { icon: customIcon })
          .addTo(map)
          .on("click", () => handleMarkerClick(location));

        // marker.bindPopup(`<b>${location.name}</b><br>Lat: ${location.lat}, Lng: ${location.lng}`);
      });
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [initialCenter, locations]);

  function closeInfoCard() {
    console.log("Close button clicked");
    document.getElementById("service2").style.display = "none";
  }

  return (
    <>
      <div id="service2" style={{ position: "absolute", top: 0, left: 0, zIndex: 1000, width: "100%" }}>
        <div id="searchservice2">
          <Search />
        </div>
        <div id="infsevice2">
          <Informationcard closeInfoCard={closeInfoCard}/>
        </div>
      </div>
      <div id="my-map" style={{ height: "90vh", width: "100vw", zIndex: 1 }} />
    </>
  );
};

export default MapComponent;
