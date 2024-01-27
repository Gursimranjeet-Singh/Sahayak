import React, { Component } from "react";
import Map from "./Map";

export default class Maps2 extends Component {
  constructor() {
    super();
    this.state = {
      apidata: [],
      searchdata: {},
    };
  }

  handlesearch = (valuesearch) => {
    console.log("searchdata in maps2");//
    console.log(valuesearch);//
    this.setState({
      searchdata: valuesearch,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    // Check if the searchdata has changed
    if (this.state.searchdata !== prevState.searchdata) {
      console.log("componentDidUpdate");
      const { searchdata } = this.state;
      console.log(searchdata);

      // Ensure that searchdata is not empty and has lng and lat properties
      if (searchdata && searchdata.lng && searchdata.lat) 
        {
        this.fetchData(searchdata);
      }
    }
  }

  async fetchData(searchdata) {
    try {
      const { lng, lat } = searchdata;
      const radiusMeters = 5000; // Adjust the radius as needed

      const response = await fetch(`https://api.geoapify.com/v2/places?categories=public_transport&conditions=wheelchair&filter=circle:${lng},${lat},${radiusMeters}&limit=200&country=IN&apiKey=bcd1dd82c5d4489d85f0d5b5936461cd`);
      
      const apidata = await response.json();
      console.log("bangalore");
      console.log(apidata);
      this.setState({
        apidata: apidata.features.map((element) => element.properties),
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    return (
      <>
       
        <Map valuesearch={this.handlesearch} />
      </>
    );
  }
}
