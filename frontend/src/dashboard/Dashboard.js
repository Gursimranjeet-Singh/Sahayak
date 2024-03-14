import { useState,useEffect } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import "./dashboard.css";
import Profile from "./profiledash.js/Profile.js";
import Emergency from "./emergency/Emergency.js";
import Support from "./supportandcomplaint/Support.js";
import Mode from "../pages/accessibility/Modes";
import Header from "./DashHeader.js";
import Login from "../pages/loginandsignup/Login.js";
import Signup from "../pages/loginandsignup/Signup.js";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({});

  const handleisLoggedIn = () => {
    console.log("isLoggedIn"+"  "+isLoggedIn)
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true); // Store isLoggedIn state in localStorage
  };

  const setLoginDataForRender = (data) => {
    setLoginData(data);
  };

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Header />
          <div style={{ marginTop: '1rem' }}>
            <Mode />
          </div>
          <div id="maincontent">
            <div id="leftnavdash">
              <Link to="/dashboard">
                <button className="divleftdash">Account Info</button>
              </Link>
              <Link to="/dashboard/emergency">
                <button className="divleftdash">Emergency Contact Information</button>
              </Link>
              <Link to="/dashboard/supportandcomplaint">
                <button className="divleftdash">Support & Complaint</button>
              </Link>
            </div>
            <div id="rightcontentdash">
              <Routes>
                <Route path="/" element={<Profile renderdata={loginData}/>} />
                {/* <Route path="/" element={<Profile />} /> for preferences*/}
                {/* <Route path="/" element={<Profile />} /> for assistance request history */}
                <Route path="/supportandcomplaint" element={<Support />} />
                <Route path="/emergency" element={<Emergency renderdata={loginData}/>} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        
        <Login  handleisLoggedIn={handleisLoggedIn} setLoginDataForRender={setLoginDataForRender}  />
      
      
      )}
    </div>
  );
}
