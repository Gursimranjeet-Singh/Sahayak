import React, { Component } from "react";
import OpenCageGeocode from "opencage-api-client";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchdata: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ searchdata: e.target.value });
  };

  handleSearchClick = async () => {
    const { searchdata } = this.state;
  
    // Specify your OpenCage Geocoding API key here
    const apiKey = "40fd0b6abd2445e8a61504acc6c59ad0";
  
    // Use OpenCage Geocoding API to get coordinates for the entered location
    try {
      const response = await OpenCageGeocode.geocode({
        q: searchdata,
        key: apiKey,
      });
  
      // Check if the response contains results
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
  
          console.log("Bounding Box:", boundingBoxObj);
  
          // Pass the bounding box to the parent component
          this.props.valuesearch(boundingBoxObj);
        } else {
          console.error("Bounding box is undefined");
        }
      } else {
        console.error("No results found in the response");
      }
    } catch (error) {
      console.error("Error fetching bounding box:", error);
    }
  };
  
  

  render() {
    return (
      <>
        <div
          className="search"
          style={{ display: "flex", alignItems: "center", width: "90%" }}
        >
          <i className="fa fa-search" />
          <input
            type="text"
            placeholder="Search Here"
            value={this.state.searchdata}
            onChange={this.handleInputChange}
          />
          <button type="submit" onClick={this.handleSearchClick}>
            Search
          </button>
        </div>
      </>
    );
  }
}

