import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBarSer2 extends Component {
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: "#f5f5f5",
            height: "7vh",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            color: "black",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/logo512.png"}
            alt="error"
            height={40}
            width={40}
            style={{ marginLeft: "2rem" }}

          />
          <h1 style={{ fontWeight: "900",fontSize:'3rem' }}>Sahayak </h1>
          <h3
            style={{
              marginLeft: "auto",
              fontFamily: "garamond",
              fontWeight: "700",
            }}
          >
            Find wheelchair accessible places at your desired location
          </h3>
          <Link
            style={{
              border: "none",
              backgroundColor: "#005fa7",
              color: "white ",
              textDecoration: "none",
              padding: "0.5rem",
              borderRadius: "1rem",
              fontSize: "1.5rem",
              marginLeft: "auto",
              marginRight: "4rem",
            }}
            to={"/"}
          >
            Home
          </Link>
        </div>
      </>
    );
  }
}
