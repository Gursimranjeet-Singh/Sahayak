import React, { Component } from "react";
import "./informationcard2.css";

export default function Informationcard({ markerdetails, closeInfoCard }) {
  function logopath() {
    switch (markerdetails.type) {
      case "healthcare.hospital":
        return "hospitallogo.png";
      case "healthcare.pharmacy":
        return "pharmacylogo.png";
      case "public_transport.train":
        return "trainlogo.png";
      case "public_transport.bus":
        return "buslogo.png";
      case "public_transport.subway":
        return "metrologo.png";
      case "catering.restaurant":
        return "resturantlogo.png";
      case "building.catering":
        return "resturantlogo.png";
      case "accommodation.hotel":
        return "hotellogo.png";
      case  "amenity.toilet"  :
        return "restroomlogo.png"
      case "education.school":
        return "educationlogo.png";  
      default:
        return "hospitallogo.png";
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          padding: "8px 16px 8px 16px",
          marginTop: "1rem",
        }}
      >
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/${logopath()}`}
            alt="error"
            height={40}
            width={60}
          />
          {/* logic must be based on the type of place */}
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex" }}>
            <p
              style={{
                fontSize: "2rem",
                color: "black",
                fontFamily: "garamond",
                fontWeight: "800",
                textDecoration: "underline",
              }}
            >
              {markerdetails.name}
            </p>
            <button
              id="closecard"
              onClick={closeInfoCard}
              style={{ marginLeft: "auto" }}
            >
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
            <p style={{ fontSize: "1.6rem", color: "black", fontWeight: 700 }}>
              {markerdetails.type
                ? markerdetails.type.split(".")[1].toUpperCase()
                : "undefined"}
            </p>
          </div>
        </div>
      </div>

      <p
        style={{
          backgroundColor: "rgb(251, 250, 249)",
          border: "2px solid rgba(206, 210, 215, 0.7)",
          color:
            markerdetails.accessibility === "wheelchair.yes"
              ? "rgb(70, 117, 0)"
              : "#ff000099",
          fontWeight: "700",
          width: "90%",
          textAlign: "center",
          margin: "auto",
          padding: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        {markerdetails.accessibility === "wheelchair.yes"
          ? "Fully Wheelchair Accessible"
          : "Partial Wheelchair Accessible"}
      </p>

      <div id="addninf">
        <p style={{ fontSize: "1.3rem", color: "black" }}>
          {markerdetails.address}
        </p>
      </div>

      <div id="features">
        {/* <a className="featureslist" href="">
            
          </a> */}
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
      <div style={{ marginTop: "auto" }}>{markerdetails.licence}</div>
    </>
  );
}
