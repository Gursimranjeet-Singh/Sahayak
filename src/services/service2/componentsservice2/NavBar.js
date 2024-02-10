import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Mode from "../../../pages/accessibility/Modes.js";

export default class NavBarSer2 extends Component {


  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: "white",
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
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="error"
            height={40}
            width={40}
            style={{ marginLeft: "2rem" }}
          />
          <h1 style={{ fontWeight: "900", fontSize: "3rem", color: "#005fa7" }}>
            Sahayak{" "}
          </h1>
          <h3
            style={{
              marginLeft: "auto",
              fontFamily: "garamond",
              fontWeight: "700",
              color: "#005fa7",
            }}
          >
            {this.props.description}
          </h3>
          <div style={{marginLeft:'auto'}}>
            <Link
              style={{
                border: "none",
                backgroundColor: "#005fa7",
                color: "white ",
                textDecoration: "none",
                padding: "0.5rem",
                borderRadius: "1rem",
                fontSize: "1.5rem",              
                marginRight: "1rem",
              }}
              to={"/"}
            >
              Home
            </Link>
            <Link
              style={{
                border: "none",
                backgroundColor: "#005fa7",
                color: "white ",
                textDecoration: "none",
                padding: "0.5rem",
                borderRadius: "1rem",
                fontSize: "1.5rem",
                marginRight: "1rem",
              }}
              to={"/contact"}
            >
              Contact
            </Link>
            <Link
              style={{
                border: "none",
                backgroundColor: "#005fa7",
                color: "white ",
                textDecoration: "none",
                padding: "0.5rem",
                borderRadius: "1rem",
                fontSize: "1.5rem",
                marginRight: "1rem",
              }}
              to={"/dashboard"}
            >
              Dash Board
            </Link>
            <Link
              style={{
                border: "none",
                backgroundColor: "#005fa7",
                color: "white ",
                textDecoration: "none",
                padding: "0.5rem",
                borderRadius: "1rem",
                fontSize: "1.5rem",
                marginRight: "1rem",
              }}
              to={`/service/${this.props.service}`}
            >
              {this.props.service}
            </Link>
          </div>
        </div>
       
        <Mode/>
      </>
    );
  }
}
