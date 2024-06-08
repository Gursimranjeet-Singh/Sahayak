import React, { useState } from "react";

import "./search1.css";

export default function Search(props) {
  const [Origin, setOrigin] = useState("");
  const [Destination, setDestination] = useState("");

  const handleFromInputChange = (e) => {
    setOrigin(e.target.value);
  };

  const handleToInputChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSearchClick =  () => {
  props.valuesearch(Origin, Destination);
  }

  return (
    <div className="search-container">
      <div className="search-fields">
        <div className="search-field">
          <label>From Destination</label>
          <input
            type="text"
            placeholder="Enter starting location"
            value={Origin}
            onChange={handleFromInputChange}
          />
        </div>
        <div className="search-field">
          <label>To Destination</label>
          <input
            type="text"
            placeholder="Enter destination"
            value={Destination}
            onChange={handleToInputChange}
          />
        </div>
      </div>
      <button
        className="search-button"
        type="submit"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
}
