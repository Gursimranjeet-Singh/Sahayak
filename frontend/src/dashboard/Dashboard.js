import { useState } from "react";
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
  const [isLoggedIn, setIsLoggedIn] = useState(true);
 

  function handleisLoggedIn() {
    setIsLoggedIn(!isLoggedIn);
  }

 

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
                <Route path="/" element={<Profile />} />
                {/* <Route path="/" element={<Profile />} /> for preferences*/}
                {/* <Route path="/" element={<Profile />} /> for assistance request history */}
                <Route path="/supportandcomplaint" element={<Support />} />
                <Route path="/emergency" element={<Emergency />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
      )}
    </div>
  );
}
