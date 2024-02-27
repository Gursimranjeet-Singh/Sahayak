import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import PropTypes from "prop-types";
import Mode from "../accessibility/Modes";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const navigate = useNavigate();
  const  [searchdata,setsearchdata]=useState("");
  const handleonChange=(e)=>{
    setsearchdata(e.target.value);
    console.log(e.target.value);
  }
  const handleSearchData=()=>{
    console.log("sdhfkjsdahfkjsdh");
    navigate(searchresult(searchdata));
    
  }
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
              <input type="text" className="textNavbar" placeholder="Search Here" onChange={handleonChange} />
              <button type="submit" onClick={handleSearchData}>Search</button>
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
                  <Link className="astylenavbar" to="/service/service1">
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
            {/* <li>
              <Link className="astylenavbar" to="/services/serivce1">Transportation Guider</Link>
            </li><li>
              <Link className="astylenavbar" to="/services/serivce2">Accessible Locations</Link>
            </li> */}
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
      <Mode/>
    </>
  );
}

function searchresult(searchdata) {
  console.log('inside component 2');

  if (searchdata.trim() !== "") {
    searchdata = searchdata.toLowerCase().trim();
    //remove spaces and convert to lowercase

    if (/service/.test(searchdata) || /ser.+1/.test(searchdata)||/tran.+/.test(searchdata)) {
      // for service and service1
      return "/service/service1";
    }
    else if(/ser.+2/.test(searchdata)||/access.+/.test(searchdata)||/loc.+/.test(searchdata)){
      return "/service/service2";
    }
    else if(/cont.+/.test(searchdata)){
      return "/contact";
    }
    else if (/da.+|pr.+/.test(searchdata)) {
      return "/dashboard";
    }
    else if(/emer.+/){
      return "/dashboard/emergency";
    }
    else if(/su.+/){
      return "dashboard/supportandcomplaint";
    }
    else if(/comp.+/){
      return "dashboard/supportandcomplaint";
    }
     else {
      console.error("No matching case found");
      return "";
    }
  } else {
    console.error("Empty value, nothing to search");
    return "";
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
