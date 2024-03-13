import React, { useState } from "react";
import OpenCageGeocode from "opencage-api-client";
import "./search2.css";

export default function Search(props) {
  //seting state for search data
  const [searchdata, setsearchdata] = useState("");

  //e is event object reponsible for handling input change so that state can be modified
  const handleInputChange = (e) => {
    setsearchdata(e.target.value);
  };

  const handleSearchClick = async (category) => {
    // OpenCage Geocoding API
    const apiKey = "40fd0b6abd2445e8a61504acc6c59ad0";

    // Use OpenCage Geocoding API to get coordinates for the entered location
    try {
      const response = await OpenCageGeocode.geocode({
        q: searchdata,
        key: apiKey,
      });
      //execution from here will only follow until you recieve promise from .geocode since you have used await and declaring function as asyn is imp when using await

      // console.log(response);//response format

      // Checking if the response contains results
      if (response.results && response.results.length > 0) {
        const result = response.results[0];
        const boundingBox = result.bounds;

        // Check if the boundingBox property is available
        if (boundingBox) {
          const { southwest, northeast } = boundingBox;
          const boundingBoxObj = {
            west: southwest.lng,
            south: southwest.lat,
            east: northeast.lng,
            north: northeast.lat,
          };

          console.log("Bounding Box:", boundingBoxObj); //shows the boundary coordinates

          // Passing the bounding box to the parent component
          props.valuesearch(boundingBoxObj, category);
        } else {
          console.error("Bounding box is undefined");
        }
      } else {
        window.alert("Please enter a valid locatoin");

        console.error("No results found in the response");
      }
    } catch (error) {
      console.error("Error fetching bounding box:", error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="search" style={{ display: "flex", alignItems: "center" }}>
        <i className="fa fa-search" />
        <input
          type="text"
          placeholder="Search Here"
          style={{ width: "90%" }}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={() => handleSearchClick("public_transport.subway,public_transport.bus,catering.restaurant,amenity.toilet,healthcare.hospital,education,accommodation.hotel,healthcare.pharmacy")}>
          Search
        </button>
      </div>
      <hr />
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button
          className="search2btn"
          onClick={() => {
            handleSearchClick("public_transport.subway");
          }}
        >
          <img src={process.env.PUBLIC_URL + "/metrologo.png"} /> Metro
        </button>
        <button
          className="search2btn"
          onClick={() => {
            handleSearchClick("public_transport.bus");
          }}
        >
          <img src={process.env.PUBLIC_URL + "/buslogo.png"} />
          Bus
        </button>
        <button
          className="search2btn"
          onClick={() => {
            handleSearchClick("catering.restaurant");
          }}
        >
          <img src={process.env.PUBLIC_URL + "/resturantlogo.png"} />
          Restaurant
        </button>
        <button
          className="search2btn"
          onClick={() => {
            handleSearchClick("amenity.toilet");
          }}
        >
          <img src={process.env.PUBLIC_URL + "/restroomlogo.png"} />
          Toilet
        </button>
      </div>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button
          className="search2btn"
          onClick={() => {
            handleSearchClick("healthcare.hospital");
          }}
        >
          <img src={process.env.PUBLIC_URL + "/hospitallogo.png"}/>
          Hospital
        </button>
        <button
          className="search2btn"
          onClick={() => {
            handleSearchClick("education");
          }}
        >
          <img src={process.env.PUBLIC_URL + "/educationlogo.png"} />
          Education
        </button>
        <button
          className="search2btn"
          onClick={() => {
            handleSearchClick("accommodation.hotel");
          }}
        >
          <img src={process.env.PUBLIC_URL + "/hotellogo.png"} />
          Hotel
        </button>
        <button
          className="search2btn"
          onClick={() => {
            handleSearchClick("healthcare.pharmacy");
          }}
        >
          <img src={process.env.PUBLIC_URL + "/pharmacylogo.png"} />
          Pharmacy
        </button>
      </div>
      <hr />
    </div>
  );
}
