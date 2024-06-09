import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import Informationcard from "./Informationcard1";

// Define custom icons with example URLs
const originIcon = new L.Icon({
  iconUrl: process.env.PUBLIC_URL + "Markers/origin.png",
  iconSize: [45, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  // shadowSize: [50, 64],
  // shadowAnchor: [4, 62]
});

const destinationIcon = new L.Icon({
  iconUrl: process.env.PUBLIC_URL + "Markers/origin.png",
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],

  // shadowSize: [50, 64],
  // shadowAnchor: [4, 62]
});

const driverIcon = new L.Icon({
  iconUrl:process.env.PUBLIC_URL + "Markers/driver.png",
  iconSize: [38, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],

  // shadowSize: [50, 64],
  // shadowAnchor: [4, 62]
});

const MapComponent = ({ initialCenter = [20.5937, 78.9629], mapdata }) => {
  const mapRef = useRef(); // ref to hold the map instance
  const markersRef = useRef([]); // ref to hold the markers
  const routeRef = useRef(); // ref to hold the route instance

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
    // Clear existing markers and route
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    if (routeRef.current) {
      mapRef.current.removeLayer(routeRef.current);
    }

    // Function to add markers
    const addMarker = (latLng, label, icon) => {
      if (latLng) {
        console.log(`Adding marker: ${label}`, latLng);
        const marker = L.marker(latLng, { icon })
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

    // Add route
    if (mapdata && mapdata.origin && mapdata.destination) {
      routeRef.current = L.Routing.control({
        waypoints: [
          L.latLng(mapdata.origin.lat, mapdata.origin.lng),
          L.latLng(mapdata.destination.lat, mapdata.destination.lng)
        ],
        lineOptions: {
          styles: [
            {
              color: 'black',
              opacity: 0.8,
              weight: 6
            }
          ]
        }
      }).addTo(mapRef.current);
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
        <div id="inf2" style={{display:"none"}}>
          <Informationcard closeInfoCard={handlecloseinfocard} driverdata={mapdata.driverdata} />
        </div>
      </div>
      <div id="my-map" style={{ height: "93vh", width: "100vw", zIndex: 1 }} />
    </>
  );
};

export default MapComponent;




