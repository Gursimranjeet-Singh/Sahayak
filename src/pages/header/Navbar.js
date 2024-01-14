import React, { useState } from "react";
import "./Navbar.css";
import PropTypes from "prop-types";


export default function Navbar(props) {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  function handleMouseEnter(setshow) {
    setshow(true);
  }

  function handleMouseLeave(setshow) {
    setshow(false);
  }

  return (
    <>
      <nav id="navbar">
        {/* top nav bar */}
        <div id="topnav" style={{ border: "2px solid red" }}>
          {/* log and image */}
          <div id="lefttopnav">
            <img src={process.env.PUBLIC_URL + '/logo512.png'} alt="error" height={10} width={10} />
            <p href="">{props.webpagename}</p>
          </div>
          {/* search bar */}
          <div id="righttopnav">
            <div id="search">
              <i className="fa fa-search" />
              <input type="text" placeholder="Have a question? Ask Now" />
              <button type="submit">Search</button>
            </div>
          </div>
        </div>

        {/* bottom nav bar */}
        <div id="bottomnav" style={{ border: "2px solid blue" }}>
          {/* home etc */}
          <div id="leftbottomnav">
            <li>
              <a href="">Home</a>
            </li>
            <div
              id="plan"
              onMouseEnter={() => handleMouseEnter(setShow1)}
              onMouseLeave={() => handleMouseLeave(setShow1)}
            >
              <li>
                Trip Guider{" "}
                <i
                  class="fa-sharp fa-solid fa-caret-down"
                  style={{ color: "black" }}
                ></i>
              </li>
              {show1 && (
                <ul
                  onMouseEnter={() => handleMouseEnter(setShow1)}
                  onMouseLeave={() => handleMouseLeave(setShow1)}
                >
                  <li>Bus Trip</li>
                  <li>Metro Trip</li>
                  <li>Train Trip</li>
                  <li>Cab Trip</li>
                </ul>
              )}
            </div>
            <div
              id="ourservices"
              onMouseEnter={() => handleMouseEnter(setShow2)}
              onMouseLeave={() => handleMouseLeave(setShow2)}
            >
              <li>
                Our Services{" "}
                <i
                  class="fa-sharp fa-solid fa-caret-down"
                  style={{ color: "black" }}
                ></i>
              </li>
              {show2 && (
                <ul
                  onMouseEnter={() => handleMouseEnter(setShow2)}
                  onMouseLeave={() => handleMouseLeave(setShow2)}
                >
                  <li>Service 1</li>
                  <li>Service 2</li>
                  <li>Service 3</li>
                  <li>Service 4</li>
                </ul>
              )}
            </div>

            <li>
              <a href="">Contact Us</a>
            </li>
          </div>
          {/* account dashboard */}
          <div id="rightbottomnav">
            <img
              alt="error"
              src={process.env.PUBLIC_URL + '/defaultprofile.jpg'}
              height={40}
              width={40}
              onMouseEnter={() => handleMouseEnter(setShow3)}
              onMouseLeave={() => handleMouseLeave(setShow3)}
            />
            {show3 && (
              <ul
                onMouseEnter={() => handleMouseEnter(setShow3)}
                onMouseLeave={() => handleMouseLeave(setShow3)}
              >
                <li>Dashboard</li>
                <li>Emergency Contact Information</li>
                <li>Assistance Request History</li>
                <li>User Preferences</li>
                <li>Logout</li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.defaultProps = {
  logo: "Enter url here",
  webpagename: "WebPage Name Here",
};

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  webpagename: PropTypes.string.isRequired,
};
