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
      const response = await OpenCageGeocode.geocode({ q: searchdata, key: apiKey });
      const { geometry } = response.results[0];
      console.log(geometry);

      // Pass the coordinates to the parent component
      this.props.valuesearch(geometry);
    } catch (error) {
      console.error("Error geocoding:", error);
    }
  };

  render() {
    const {valuesearch}=this.props;
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


