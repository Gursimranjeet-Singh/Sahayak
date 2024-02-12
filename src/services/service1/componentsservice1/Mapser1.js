import React, { Component } from "react";
import Map from "./Map1";
import Search from "./Search1";

export default class Maps2 extends Component {

  constructor() {
    super();
    this.state = {
      apidata: [],
      boundingBox1: {}, // Add a state property to store the bounding box
      boundingBox2: {},
      src1:{},
      src2:{},
    };
  }

  handlecloseinfocard = () => {
    document.getElementById("infsevice2").style.display = "none";
  }

  handleSearch = (boundingBox1,boundingBox2) => {//will be manipulted by search1.js
    console.log("Bounding box in Maps2", boundingBox1 );
    console.log("Bounding box in Maps2", boundingBox2);
    this.setState(
      {
        boundingBox1,
        boundingBox2,
      }
      
    );
  };
   findaccessiblepath=(src1,src2)=>{
      this.setState(
        {
            src1:src1,
            src2:src2,
        },
        () => {//callback function
            this.fetchData();
          }

      )

   }


//   async fetchData() {
//     try {
//       const { boundingBox1,boundingBox2 } = this.state;
  
//       // Check if boundingBox is available
//       if (boundingBox && boundingBox.west && boundingBox.south && boundingBox.east && boundingBox.north) {
//         const { west, south, east, north } = boundingBox;
  
//         const response = await fetch(
//           `https://api.geoapify.com/v2/places?categories=healthcare.hospital,public_transport.train,public_transport.subway,public_transport.bus,healthcare.pharmacy,accommodation.hotel,catering.restaurant&conditions=wheelchair&filter=rect:${west},${south},${east},${north}&limit=200&country=IN&apiKey=bcd1dd82c5d4489d85f0d5b5936461cd`
//         );
        
  
//         const apidata = await response.json();
//         console.log("Fetched data:", apidata);
  
//         // Check if apidata has features property before setting it
//         if (apidata && apidata.features) {
//           this.setState({
//             apidata: apidata.features,
//           });
//         }
//       } else {
//         console.error("Bounding box is not properly defined or no data for the information from api");
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }
  

  render() {
    const { apidata } = this.state;
    console.log("Filtered API data", apidata);

    return (
      <>
        <Map  apidata={apidata} />
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
