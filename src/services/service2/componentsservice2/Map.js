// Map.js
import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Informationcard from "./Informationcard";
import Search from "./Search";

const MapComponent = ({ initialCenter = [20.5937, 78.9629], valuesearch, apidata }) => {
  const [locations, setLocations] = useState([]);

  const handleMarkerClick = (location) => {
    console.log("Marker clicked:", location);
    document.getElementById("service2").style.display = "block";
    // Add your logic for handling marker click here
  };

  const handleapidata = (apidata) => {
    console.log("apidata in handleapidata");
    if (apidata && Array.isArray(apidata)) {
      return apidata.map((element) => ({
        id: element.properties.id,
        lat: element.geometry.coordinates[1],
        lng: element.geometry.coordinates[0],
        name: element.properties.name,
      }));
    } else {
      console.error("Invalid apidata format:", apidata);
      return [];
    }
  };

  // Use useEffect to handle changes in apidata
  useEffect(() => {
    console.log("apidata changed");
    if (apidata) {
      const newLocations = handleapidata(apidata);
      setLocations(newLocations);
    }
  }, [apidata]);

  useEffect(() => {
    console.log("Map Component - useEffect");

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

    const map = L.map("my-map").setView(initialCenter || [20.5937, 78.9629], 5);

    L.tileLayer(isRetina ? retinaUrl : baseUrl, {
      attribution:
        'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors',
      maxZoom: 20,
      id: "osm-bright",
    }).addTo(map);

    if (map) {
      console.log("Adding Markers to Map");
      locations.forEach((location) => {
        console.log("Adding Marker:", location);
        const marker = L.marker([location.lat, location.lng], { icon: customIcon })
          .addTo(map)
          .on("click", () => handleMarkerClick(location));
      });
    }

    return () => {
      console.log("Cleaning up Map");
      if (map) {
        map.remove();
      }
    };
  }, [initialCenter, locations, handleMarkerClick]); // dependencies can include locations if you want to trigger this effect on location changes

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
        <div id="searchservice2">
          <Search valuesearch={valuesearch} />
        </div>
        <div id="infsevice2">
          <Informationcard />
        </div>
      </div>
      <div
        id="my-map"
        style={{ height: "90vh", width: "100vw", zIndex: 1 }}
      />
    </>
  );
};

export default MapComponent;


