import React, { useEffect, useState } from "react";
import Map from "./Map1";
import Search from "./Search1";
import OpenCageGeocode from "opencage-api-client";
import { func, object } from "prop-types";

export default function Maps2() {

  const [completedata,setcompletedata]=useState({});

  const data = {
    drivers: [
      {
        name: "Rohan",
        driver_id: "D2345678",
        cab_name: "KA01AB1234",
        phone_number: "9872453219",
        current_location: "MG Road, Bangalore",
        latitude: 12.9743,
        longitude: 77.6139,
      },
      {
        name: "Harish",
        driver_id: "D1234567",
        cab_name: "KA02CD4567",
        phone_number: "9987845329",
        current_location: "Indiranagar, Bangalore",
        latitude: 12.9733,
        longitude: 77.6405,
      },
      {
        name: "Mukesh",
        driver_id: "D3456789",
        cab_name: "KA03EF7890",
        phone_number: "9898567123",
        current_location: "Koramangala, Bangalore",
        latitude: 12.9352,
        longitude: 77.6245,
      },
      {
        name: "Pradeep",
        driver_id: "D4567890",
        cab_name: "KA04GH1234",
        phone_number: "9885791236",
        current_location: "Whitefield, Bangalore",
        latitude: 12.9698,
        longitude: 77.7499,
      },
      {
        name: "Dhruv",
        driver_id: "D4567891",
        cab_name: "KA05IJ4567",
        phone_number: "9876298676",
        current_location: "JP Nagar, Bangalore",
        latitude: 12.9063,
        longitude: 77.5852,
      },
      {
        name: "Harsh",
        driver_id: "D5678901",
        cab_name: "KA06KL7890",
        phone_number: "9862978676",
        current_location: "Electronic City, Bangalore",
        latitude: 12.8342,
        longitude: 77.6668,
      },
      {
        name: "Shubham",
        driver_id: "D6789012",
        cab_name: "KA07MN1234",
        phone_number: "9879877896",
        current_location: "Jayanagar, Bangalore",
        latitude: 12.9274,
        longitude: 77.5971,
      },
      {
        name: "kailash",
        driver_id: "D7890123",
        cab_name: "KA08OP4567",
        phone_number: "9458986890",
        current_location: "Yelahanka, Bangalore",
        latitude: 13.1007,
        longitude: 77.5963,
      },
      {
        name: "Vijay",
        driver_id: "D8901234",
        cab_name: "KA09QR7890",
        phone_number: "9878972345",
        current_location: "Hebbal, Bangalore",
        latitude: 13.0359,
        longitude: 77.5971,
      },
      {
        name: "Bhupendra",
        driver_id: "D9012345",
        cab_name: "KA10ST1234",
        phone_number: "9080902345",
        current_location: "HSR Layout, Bangalore",
        latitude: 12.9081,
        longitude: 77.6476,
      },
    ],
  };

  const handleSearch = (Origin, Destination) => {
    getdata(Origin,Destination);
  };

  async function getdata(Origin,Destination){

    const apiKey = "40fd0b6abd2445e8a61504acc6c59ad0";

    try {
      const origindataResponse = await OpenCageGeocode.geocode({
        q: Origin,
        key: apiKey,
      });
      const origindata = origindataResponse.results[0].geometry; // lat, lng

      const destinationdataResponse = await OpenCageGeocode.geocode({
        q: Destination,
        key: apiKey,
      });
      const destinationdata = destinationdataResponse.results[0].geometry;

      if (origindata && destinationdata) {
       let index=0;
       let value=10000;
       for(let i=0;i<10;i++){
          if(calculateDistance(origindata.lat,origindata.lng,data.drivers[i].latitude,data.drivers[i].longitude)<value)
            index=i;
          }
          setcompletedata({origin:origindata,destination:destinationdata,driverdata:data.drivers[index]});
       }



       else {
        window.alert("Please enter valid locations");
        console.error("No results found in the response");
      }
    }
    catch (error) {
      console.error("Error fetching bounding boxes:", error);
    }
  }
 
    

  function calculateDistance(lat0,lon0,lat20,lon20) {
    const lat1 = lat0;
    const lat2 = lat20;
    const lon1 = lon0;
    const lon2 = lon20;
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180; // Convert degrees to radians
    const dLon = (lon2 - lon1) * Math.PI / 180; // Convert degrees to radians
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  }

  return (
    <>
      <Map mapdata={completedata} valuesearch={handleSearch} />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1000,
          width: "100%",
        }}
      >
        {/* search component is placed here so that the searched data directly comes to maps2 component where api call for locations can be made */}
        <div id="searchservice2">
          <Search valuesearch={handleSearch} />
        </div>
      </div>
    </>
  );
}


