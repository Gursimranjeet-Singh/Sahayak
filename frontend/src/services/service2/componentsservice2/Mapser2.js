import React, { useState } from "react";
import Map from "./Map2";
import Search from "./Search2";
import { func, object } from "prop-types";

export default function Maps2() {

const [apidata,setapidata]=useState([]);
// const [boundingBox,setboundingBox]=useState({});


  const handlecloseinfocard = () => {
    document.getElementById("infsevice2").style.display = "none";
  }

  const handleSearch = (BoundingBox,category) => {
   
    fetchData(BoundingBox,category);
      
    
  };

  async function  fetchData(boundingBox,category) {
    try {
      
      
      console.log("Bounding box in Maps2", boundingBox);
      // Check if boundingBox is available
      if (boundingBox && boundingBox.west && boundingBox.south && boundingBox.east && boundingBox.north) {
        const { west, south, east, north } = boundingBox;

        const response = await fetch(
          `https://api.geoapify.com/v2/places?categories=${category}&conditions=wheelchair&filter=rect:${west},${south},${east},${north}&limit=200&country=IN&apiKey=bcd1dd82c5d4489d85f0d5b5936461cd`
        );
        
  
        const apidata = await response.json();
        console.log("Fetched data:", apidata);
  
        // Check if apidata has features property before setting it
        if (apidata && apidata.features) {
          
            setapidata(apidata.features);
          
        }
      } else {
        console.error("Bounding box is not properly defined or no data for the information from api");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  


   
    console.log("Filtered API data", apidata);

    return (
      <>
        <Map  apidata={apidata} valuesearch={handleSearch}/>
        <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1000,
          width: "100%",
        }}
      >
        {/* search component is placed here so that the searched data direclty comes to maps2 component where api call for locations can be made */}
        <div id="searchservice2">
          <Search valuesearch={handleSearch} />
        </div>
      </div>
      </>
    );
  }

