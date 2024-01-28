import React, { Component } from "react";
import "./informationcard.css";
export default class Informationcard extends Component {
  logopath() {
    switch (this.props.markerdetails.type) {
      case "healthcare.hospital":
        return "hospitallogo.png";
      case "healthcare.pharmacy":
        return "pharmacylogo.png";
      case "public_transport.train":
        return "trainlogo.png";
      case "public_transport.bus":
        return "buslogo.jpeg";
      case "public_transport.subway":
        return "metrologo.png";
        case "catering.restaurant":
          return "restaurantlogo.jpeg";
      case "building.catering":
        return "restaurantlogo.jpeg";
        case "accommodation.hotel":
          return "hotellogo.png";
default:
  return "hospitallogo.png"
    }
  }
  render() {
    const { closeInfoCard, markerdetails } = this.props;
  
    return (
      <>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            padding: "8px 16px 8px 16px",
            marginTop: "2rem",
          }}
        >
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/${this.logopath()}`}
              alt="error"
              height={20}
              width={20}
            />
            {/* logic must be based on the type of place */}
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <p style={{ fontSize: "2rem", color: "black" }}>
                {markerdetails.name}
              </p>
              <button id="closecard" onClick={closeInfoCard}>
                <i
                  className="fa-solid fa-x"
                  style={{
                    color: "#c8c5ca",
                    backgroundColor: "white !important",
                  }}
                ></i>
              </button>
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ fontSize: "1.6rem", color: "black" }}>
                {markerdetails.type ? markerdetails.type.split(".")[1].toUpperCase() : 'undefined'}
              </p>
            </div>
          </div>
        </div>
  
        <p
          style={{
            backgroundColor: "rgb(251, 250, 249)",
            border: "2px solid rgba(206, 210, 215, 0.7)",
            color: "rgb(70, 117, 0)",
            fontWeight: "700",
            width: "90%",
            textAlign: "center",
            padding: "1rem",
            marginBottom: "3rem",
          }}
        >
          {markerdetails.accessibility === 'wheelchair.yes' ? "Fully Wheelchair Accessible" : "Partial Wheelchair Accessible"}
        </p>
  
        <div id="addninf">
          <p style={{ fontSize: "1.1rem", color: "black" }}>
            {markerdetails.address}
          </p>
        </div>
  
        <div id="features">
          <a className="featureslist" href="">
            Report Problem
          </a>
          <a
            className="featureslist"
            href={`https://www.google.com/maps?q=${markerdetails.lat},${markerdetails.lng}`}
            target="_blank"
          >
            Open in Google Maps
          </a>
          <a className="featureslist" href="">
            Report Problem
          </a>
        </div>
  
        <p style={{ fontSize: "1.2rem" }}>
          {markerdetails.licence + "report"}
        </p>
      </>
    );
  }
}  