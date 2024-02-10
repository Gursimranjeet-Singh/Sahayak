import React, { Component } from "react";
import Map from "./Map";
import Search from "./Search2";

export default class Maps2 extends Component {

  constructor() {
    super();
    this.state = {
      apidata: [],
      boundingBox: {}, // Add a state property to store the bounding box
    };
  }

  handlecloseinfocard = () => {
    document.getElementById("infsevice2").style.display = "none";
  }

  handleSearch = (boundingBox) => {
    console.log("Bounding box in Maps2", boundingBox);
    this.setState(
      {
        boundingBox,
      },
      () => {
        this.fetchData();
      }
    );
  };

  async fetchData() {
    try {
      const { boundingBox } = this.state;
  
      // Check if boundingBox is available
      if (boundingBox && boundingBox.west && boundingBox.south && boundingBox.east && boundingBox.north) {
        const { west, south, east, north } = boundingBox;
  
        const response = await fetch(
          `https://api.geoapify.com/v2/places?categories=healthcare.hospital,public_transport.train,public_transport.subway,public_transport.bus,healthcare.pharmacy,accommodation.hotel,catering.restaurant&conditions=wheelchair&filter=rect:${west},${south},${east},${north}&limit=200&country=IN&apiKey=bcd1dd82c5d4489d85f0d5b5936461cd`
        );
        
  
        const apidata = await response.json();
        console.log("Fetched data:", apidata);
  
        // Check if apidata has features property before setting it
        if (apidata && apidata.features) {
          this.setState({
            apidata: apidata.features,
          });
        }
      } else {
        console.error("Bounding box is not properly defined");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  

  render() {
    const { apidata } = this.state;
    console.log("Filtered API data", apidata);

    return (
      <>
        <Map valuesearch={this.handleSearch} apidata={apidata} />
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
          <Search valuesearch={this.handleSearch} />
        </div>
      </div>
      </>
    );
  }
}
