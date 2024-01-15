import React from "react";
import "./footer.css";

const style = {
  fontSize: "2rem",
  fontWeight: 700,
};
export default function Footer() {
  return (
    <div id="footer">
      <div id="socialmedia">
        <a href="">
          <i className="fa-brands fa-facebook" style={{ color: "#ffffff" }}></i>
        </a>

        <a href="">
          <i
            className="fa-brands fa-square-x-twitter"
            style={{ color: "#ffffff" }}
          ></i>
        </a>

        <a href="">
          <i className="fa-brands fa-linkedin" style={{ color: "#ffffff" }}></i>
        </a>

        <a href="">
          <i
            className="fa-brands fa-square-github"
            style={{ color: "#ffffff" }}
          ></i>
        </a>
      </div>
      <div id="links">
        <div id="profilef">
          <div style={style}>Dashboard</div>
          <div>
            <a href=" ">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Emergency Contact Service
            </a>
          </div>
          <div>
            <a href=" ">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Assistance Request History
            </a>
          </div>
          <div>
            <a href=" ">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              User Preference
            </a>
          </div>
          <div>
            <a href=" ">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Logout
            </a>
          </div>
        </div>
        <div id="ourservicesf">
          <div style={style}>Service</div>
          <div>
            <a href="">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Service1
            </a>
          </div>
          <div>
            <a href="">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Service2
            </a>
          </div>
          <div>
            <a href="">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Service3
            </a>
          </div>
        </div>
        <div id="tripplannerf">
          <div style={style}>Trip Planner</div>
          <div>
            <a href=" ">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Plan Your Trip
            </a>
          </div>
          <div>
            <a href=" ">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Book Your Trip
            </a>
          </div>
          <div>
            <a href=" ">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Manage Your Trip
            </a>
          </div>
        </div>
        <div id="contactf">
          <div style={style}>Contact Us</div>
          <div>
            <a href=" ">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Direct Mail
            </a>
          </div>
          <div>
            <a href=" ">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Call Us
            </a>
          </div>
          <div>
            <a href=" ">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Contact Page
            </a>
          </div>
        </div>
        
      </div>
      <div id="copy">
        Copyright © 2024 Samarthyam India. All Rights Reserved. Powered By
        Gursimranjeet Web Pvt Ltd.
      </div>
    </div>
  );
}
