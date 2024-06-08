import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Informationcard from "./Informationcard1";

// Define custom icons with example URLs
const originIcon = new L.Icon({
  iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
  shadowSize: [50, 64],
  shadowAnchor: [4, 62]
});

const destinationIcon = new L.Icon({
  iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
  shadowSize: [50, 64],
  shadowAnchor: [4, 62]
});

const driverIcon = new L.Icon({
  iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-orange.png',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
  shadowSize: [50, 64],
  shadowAnchor: [4, 62]
});

// Import statements...

const MapComponent = ({ initialCenter = [20.5937, 78.9629], mapdata }) => {
  const mapRef = useRef(); // ref to hold the map instance
  const markersRef = useRef([]); // ref to hold the markers

  const handlecloseinfocard = () => {
    document.getElementById("infsevice2").style.display = "none";
  };

  useEffect(() => {
    // Initialize the map
    mapRef.current = L.map("my-map", {
      zoomControl: false,
    }).setView(initialCenter, 5);

    // Add tile layer to the map
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
    }).addTo(mapRef.current);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [initialCenter]);

  useEffect(() => {
    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Function to add markers
    const addMarker = (latLng, label, icon) => {
      if (latLng) {
        console.log(`Adding marker: ${label}`, latLng);
        const marker = L.marker(latLng, { icon }) // Updated to pass latLng directly
          .addTo(mapRef.current)
          .bindPopup(label)
          .openPopup();
        markersRef.current.push(marker);
        console.log(`Marker added: ${label}`, marker);
      } else {
        console.log(`No latLng provided for ${label}`);
      }
    };

    // Add origin, destination, and driver markers
    if (mapdata && mapdata.origin && mapdata.destination && mapdata.driverdata) {
      console.log("Origin:", mapdata.origin);
      addMarker([mapdata.origin.lat, mapdata.origin.lng], "Origin", originIcon);

      console.log("Destination:", mapdata.destination);
      addMarker([mapdata.destination.lat, mapdata.destination.lng], "Destination", destinationIcon);

      console.log("Driver:", mapdata.driverdata);
      addMarker([mapdata.driverdata.latitude, mapdata.driverdata.longitude], "Driver", driverIcon);
    } else {
      console.log("Invalid mapdata");
    }
  }, [mapdata]);

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
        <div id="infsevice2">
          <Informationcard closeInfoCard={handlecloseinfocard} />
        </div>
      </div>
      <div id="my-map" style={{ height: "93vh", width: "100vw", zIndex: 1 }} />
    </>
  );
};

export default MapComponent;



