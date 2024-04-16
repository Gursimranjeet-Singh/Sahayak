import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const style = {
  fontSize: "2rem",
  fontWeight: 700,
};
export default function Footer() {
  return (
    <div id="footer">
      <div id="socialmedia">
        <a className="styleafooteri" href="" target="_blank">
          <i className="fa-brands fa-facebook" style={{ color: "#ffffff" }}/>
        </a>

        <a className="styleafooteri" href="">
          <i
            className="fa-brands fa-square-x-twitter"
            style={{ color: "#ffffff" }}
          ></i>
        </a>

        <a className="styleafooteri" href="" target="_blank">
          <i className="fa-brands fa-linkedin" style={{ color: "#ffffff" }}></i>
        </a>

        <a
          className="styleafooteri"
          href="https://github.com/Gursimranjeet-Singh/Sahayak"
          target="_blank"
        >
          <i
            className="fa-brands fa-square-github"
            style={{ color: "#ffffff" }}
          />
        </a>
      </div>
      <div id="links">
        <div id="profilef">
          <div style={style}>Dashboard</div>
          <div>
            <Link className="styleafooter" to="/dashboard">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Show Me My Profile
            </Link>
          </div>
          <div>
            <Link className="styleafooter" to="dashboard/emergency">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Emergency Contact Service
            </Link>
          </div>

          <div>
            <Link className="styleafooter" to="/dashboard/requests ">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Assistance Request
            </Link>
          </div>
        </div>
        <div id="ourservicesf">
          <div style={style}>Service</div>
          <div>
            <Link className="styleafooter" to="/service2">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Accessible Locations Finder
            </Link>
          </div>
          <div>
            <Link className="styleafooter" to="/dasboardVolunteer">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Volunteer !Help Others
            </Link>
          </div>
          <div>
            <Link className="styleafooter" to="/dashboard/requests">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Create a assistance request
            </Link>
          </div>
          <div>
            <Link className="styleafooter" to="/dashboard/request/status">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Check Status of assistance Request
            </Link>
          </div>
          {/* <div>
            <Link className='styleafooter' to="/service/service3">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Service3
            </Link>
          </div> */}
        </div>
        {/* <div id="tripplannerf">
          <div style={style}>Trip Planner</div>
          <div>
            <a className='styleafooter'href=" ">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Plan Your Trip
            </a>
          </div>
          <div>
            <a className='styleafooter'href=" ">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Book Your Trip
            </a>
          </div>
          <div>
            <a className='styleafooter'href=" ">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Manage Your Trip
            </a>
          </div>
        </div> */}
        <div id="contactf">
          <div style={style}>Contact Us</div>
          <div>
            <Link className="styleafooter" to="contact">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Contact Page
            </Link>
          </div>
          <div>
            <a
              className="styleafooter"
              href="mailto:gursimranjeet2004@email.com"
            >
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Direct Mail
            </a>
          </div>
          <div>
            <a className="styleafooter" href="tel:+3423432">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Call Us
            </a>
          </div>
          <div>
            <a className="styleafooter" href="tel:+3423432">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Call Us
            </a>
          </div>
          <div>
            <Link className="styleafooter" to="/dashboard/supportandcomplaint">
              <i
                className="fa-sharp fa-solid fa-caret-down fa-rotate-270"
                style={{ color: "#263754" }}
              ></i>
              Support and Complaint
            </Link>
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
