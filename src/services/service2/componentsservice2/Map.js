import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Informationcard from "./Informationcard";
import Search from "./Search";

const MapComponent = ({
  initialCenter = [20.5937, 78.9629],
  valuesearch,
  apidata,
}) => {
  const handlecloseinfocard = () => {
    document.getElementById("service2").style.display = "none";
  };

  const [selectedMarker, setSelectedMarker] = useState([]);
  const [locations, setLocations] = useState([]);
  const mapRef = useRef(); // Create a ref to hold the map instance

  const handleMarkerClick = (location) => {
    console.log("Marker clicked:", location);
    console.log("Marker clicked:", location);
    document.getElementById("service2").style.display = "block";
    document.getElementById("infsevice2").style.display = "block";
    console.log("location details are ");
    console.log(location);
    setSelectedMarker(location);

    // Add your logic for handling marker click here
  };

  const handleapidata = (apidata) => {
    console.log("apidata in handleapidata");
    if (apidata && Array.isArray(apidata)) {
      return apidata.map((element) => ({
        id: element.geometry.coordinates[1],
        lat: element.geometry.coordinates[1],
        lng: element.geometry.coordinates[0],
        name: element.properties.name,
        address:
          element.properties.address_line1 + element.properties.address_line2,
        accessibility: element.properties.categories[3],
        type: element.properties.categories[1],
        licence:
          element.properties.datasource.licence +
          " " +
          element.properties.datasource.attribution,
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

    const bounds =
      locations.length > 0
        ? L.latLngBounds(locations.map((loc) => [loc.lat, loc.lng]))
        : null;

    // Create the map and store the reference
    mapRef.current = L.map("my-map").setView(
      initialCenter || [20.5937, 78.9629],
      5
    );

    if (bounds) {
      // Fit the map to the bounds with padding
      mapRef.current.fitBounds(bounds, { padding: [50, 50] });
    } else {
      // Use a default center and zoom level if no markers are present
      mapRef.current.setView([20.5937, 78.9629], 5);
    }

    L.tileLayer(isRetina ? retinaUrl : baseUrl, {
      attribution:
        'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors',
      maxZoom: 20,
      id: "osm-bright",
    }).addTo(mapRef.current);

    if (mapRef.current) {
      console.log("Adding Markers to Map");
      locations.forEach((location) => {
        console.log("Adding Marker:", location);
        // Inside the useEffect block
        const mapTypeToDisplay = (type) => {
          const typeMap = {
            "healthcare.hospital": "Hospital",
            "healthcare.pharmacy": "Pharmacy",
            "accommodation.hotel": "Hotel",
            "public_transport": "Public Transport",
            "public_transport.subway": "Subway",
            "public_transport.train": "Train",
            "public_transport.bus": "Bus",
            "catering.restaurant": "Restaurant",
            "catering": "Catering",
            "building.transportation": "Transportation",
            "wheelchair": "Hospital",
            "commercial.health": "Health",
            "commercial.health_and_beauty.health": "Health and Beauty",
            // Add more mappings as needed
          };

          // Use the mapping or return the original type if not found
          return typeMap[type] || type;
        };

        // Inside the useEffect block
        const marker = L.marker([location.lat, location.lng], {
          icon: customIcon,
        })
          .addTo(mapRef.current)
          .on("click", () => handleMarkerClick(location));

        // Format the type for display using the mapping function
        const formattedType = mapTypeToDisplay(location.type);

        // Add a Tooltip to the marker to display the formatted type on hover
        marker.bindTooltip(formattedType, {
          permanent: false, // Set to false to show on hover
          direction: "top",
          opacity: 0.7,
        });
      });
    }

    return () => {
      console.log("Cleaning up Map");
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [initialCenter, locations]); // dependencies can include locations if you want to trigger this effect on location changes

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
        <div id="infsevice2" style={{ display: "none" }}>
          <Informationcard
            closeInfoCard={handlecloseinfocard}
            markerdetails={selectedMarker}
          />
        </div>
      </div>
      <div id="my-map" style={{ height: "90vh", width: "100vw", zIndex: 1 }} />
    </>
  );
};

export default MapComponent;
