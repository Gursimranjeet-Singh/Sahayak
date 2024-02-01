import React, { useState } from "react";
import "./Navbar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // const [show1, setShow1] = useState(false);
  const [showmode,setshowmode]=useState(false);
  function handleShowMode(){
    setshowmode(!showmode);
  }
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
      <nav id="navbar" >
        {/* top nav bar */}
        <div id="topnav">
          {/* log and image */}
          <div id="lefttopnav">
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="error"
              height={10}
              width={10}
            />
            <p href="" >{props.webpagename} </p>
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
        <div id="bottomnav">
          {/* home etc */}
          <div id="leftbottomnav">
            <li>
              <Link className="astylenavbar" to="/">Home</Link>
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
                  <Link className="astylenavbar" to="/service/service2">
                    <li>Transportation Guider</li>
                  </Link>
                  <Link className="astylenavbar" to="service/service2">
                    <li>Accessible Locations</li>
                  </Link>
                  <Link className="astylenavbar" to="/service/service2">
                    <li>Assistance for Transportation</li>
                  </Link>
                </ul>
              )}
            </div>

            <li>
              <Link className="astylenavbar" to="/contact">Contact Us</Link>
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
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/dashboard/emergency">
                    Emergency Contact Information
                  </Link>
                </li>
                <li>
                  <a  href="">Assistance Request History</a>
                </li>
                <li>
                  <a href="">User Preferences</a>
                </li>
                <li>
                  <Link to="dashboard/supportandcomplaint">
                    Support & Complaint
                  </Link>
                </li>
                <li>
                  <a href="">Logout</a>
                </li>
              </ul>
            )}
          </div>
        </div>
        {/* <div className="search" style={{width:'100vw'}}>
              
              <input type="text" placeholder="Search Here" style={{width:'70vw'}}/>
              <button type="submit">Search</button>
            </div> */}
      </nav>
      <div>
        <button id="changemode"  onClick={handleShowMode}><i class="fa fa-wheelchair fa-3x" aria-hidden="true" style={{color:"#005fa7"}}></i></button>
      </div>
      {showmode && <div  style={{display:'flex',justifyContent:"center"}}>
        <div><button className="showmodebtn" onClick={Graymode}>Gray Mode</button></div>
        <div><button  className="showmodebtn" onClick={Darkmode}>Dark Mode</button></div>
        <div><button  className="showmodebtn" onClick={Brightmode}>Bright Mode</button></div>
        <div><button  className="showmodebtn" onClick={Lightmode}>Light Mode</button></div>
        
        </div>}
    </>
  );
}
function Graymode() {
  const currentFilter = document.body.style.filter;
  if (currentFilter.includes('grayscale')) {
    document.body.style.filter = 'grayscale(0%)';
  } else {
    document.body.style.filter = 'grayscale(100%)';
  }
}

function Darkmode() {
  const currentFilter = document.body.style.filter;
  if (currentFilter.includes('invert')) {
    document.body.style.filter = 'invert(0%)';
  } else {
    document.body.style.filter = 'invert(100%)';
  }
}

function Brightmode() {
  const currentFilter = document.body.style.filter;
  if (currentFilter.includes('brightness')) {
    document.body.style.filter = 'brightness(100%)';
  } else {
    document.body.style.filter = 'brightness(150%)';
  }
}

function Lightmode() {
  const currentFilter = document.body.style.filter;
  if (currentFilter.includes('opacity')) {
    document.body.style.filter = 'opacity(100%)';
  } else {
    document.body.style.filter = 'opacity(70%)';
  }
}




Navbar.defaultProps = {
  logo: "Enter url here",
  webpagename: "WebPage Name Here",
};

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  webpagename: PropTypes.string.isRequired,
};
