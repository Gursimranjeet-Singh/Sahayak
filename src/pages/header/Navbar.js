import React, { useState } from "react";
import "./Navbar.css";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  // let width=window.innerWidth;
  // const [show, setShow] = useState(false);
  // if(width<600&&width>450){
  //   ()=>{
  //     setShow(true);
  //   }
  // }
  // else{
  //   ()=>{
  //     setShow(false);
  //   }
  // }
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
        <div id="topnav" >
          {/* log and image */}
          <div id="lefttopnav">
            <img
              src={process.env.PUBLIC_URL + "/logo512.png"}
              alt="error"
              height={10}
              width={10}
            />
            <p href="">{props.webpagename}</p>
          </div>
          {/* search bar */}
          <div id="righttopnav">
            <div className="search">
              <i className="fa fa-search" />
              <input type="text" placeholder="Search Here" />
              <button type="submit">Search</button>
            </div>
          </div>
        </div>

        {/* bottom nav bar */}
        <div id="bottomnav" >
          {/* home etc */}
          <div id="leftbottomnav">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <div
              id="plan"
              onMouseEnter={() => handleMouseEnter(setShow1)}
              onMouseLeave={() => handleMouseLeave(setShow1)}
            >
              <li>
                Trip Guider{" "}
                <i
                  className="fa-sharp fa-solid fa-caret-down"
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
            </div> */}
            <div
              id="ourservices"
              onMouseEnter={() => handleMouseEnter(setShow2)}
              onMouseLeave={() => handleMouseLeave(setShow2)}
            >
              <li>
                Our Services{" "}
                <i
                  className="fa-sharp fa-solid fa-caret-down"
                  style={{ color: "black" }}
                ></i>
              </li>
              {show2 && (
                <ul
                  onMouseEnter={() => handleMouseEnter(setShow2)}
                  onMouseLeave={() => handleMouseLeave(setShow2)}
                >
                  <Link to="/service/service1"><li>Service 1</li></Link>
                  <Link to="/service/service2"><li>Service 2</li></Link>
                  <Link to="/service/service3"><li>Service 3</li></Link>
               
                  
                </ul>
              )}
            </div>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </div>
          {/* account dashboard */}
          <div id="rightbottomnav">
            <img
              alt="error"
              src={process.env.PUBLIC_URL + "/defaultprofile.jpg"}
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
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/dashboard/emergency">Emergency Contact Information</Link></li>
                <li><a href="">Assistance Request History</a></li>
                <li><a href="">User Preferences</a></li>
                <li><Link to="dashboard/supportandcomplaint">Support & Complaint</Link></li>
                <li><a href="">Logout</a></li>
              </ul>
            )}
          </div>
        </div>
        {/* <div className="search" style={{width:'100vw'}}>
              
              <input type="text" placeholder="Search Here" style={{width:'70vw'}}/>
              <button type="submit">Search</button>
            </div> */}
        
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
