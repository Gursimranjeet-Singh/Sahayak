import React  from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import "./dashboard.css";
import Profile from "./profiledash.js/Profile.js";
import Emergency from "./emergency/Emergency.js";
import Support from "./supportandcomplaint/Support.js";
import Mode from "../pages/accessibility/Modes";
import Header from "./DashHeader.js";


export default function Dashboard({loginData}) {
 
  return (
    <div>
     
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
    
        
       
    </div>
  );
}
