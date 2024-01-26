import React, { Component } from "react";
export default class Informationcard extends Component {
  render() {
    return (
      <>
        <div
          className="search"
          style={{ display: "flex", alignItems: "center", width: "90%" }}
        >
          <i className="fa fa-search" />
          <input type="text" placeholder="Search Here" />
          <button type="submit">Search</button>
        </div>

        <div
          id="header"
          style={{ display: "flex", gap: "1rem", padding: "8px 16px 8px 16px" }}
        >
          <div>
            <img src="" alt="erroe" />
          </div>
          <div >
            <div style={{ display: "flex"}}>
              <h3>details.properties.name</h3>
              <h3>| ವಿಜಯನಗರ</h3>
            </div>
            <div style={{ display: "flex" }}>
              <h4>type</h4>
              <button style={{margin:'auto'}}>
                <i
                  class="fa-solid fa-x"
                  style={{
                    color: "#e3e1e5",
                    backgroundColor: "white !important",
                  }}
                ></i>
              </button>
            </div>
          </div>
        </div>

        <h2>Fully wheelchair accessible</h2>

        <div id="addninf">
          <h3>Address here</h3>
          
        </div>

        <div id="features" style={{ display: "flex", flexDirection: "column" }}>
          
          <a href="">Report Problem</a>
          <a
            href={`https://www.google.com/maps?q=${12.9709559},${77.5374044}`}
            target="_blank"
          >
            Open in Google Maps
          </a>
          <a href="">Report Problem</a>
        </div>
       
        <h3>Licence</h3>
      </>
    );
  }
}
