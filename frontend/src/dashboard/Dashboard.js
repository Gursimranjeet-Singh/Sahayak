import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
import "./dashboard.css";
import axios from "axios";
import Profile from "./profiledash.js/Profile.js";
import Emergency from "./emergency/Emergency.js";
import Support from "./supportandcomplaint/Support.js";
import Mode from "../pages/accessibility/Modes";
import Header from "./DashHeader.js";
import RequestVolunteer from "./requests/VolunteerRequest.js"
import RequestVolunteerStatus from "./requests/RequestStatus.js"


export default function Dashboard() {
  const [loginData, setloginData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem("accesstoken");
      if (!accessToken) {
        navigate("/login");
        return;
      }
      try {
        const response = await axios.get("/protected", {
          headers: { authorization: `Bearer ${accessToken}` },
        });
        if(localStorage.getItem("PersonType")==="volunteer"){
          navigate("/dashboardVolunteer",response.data.user) ;
          //to get data for dashboard volunteer you can temp put it in cookies once retrieved then delete it
        }
        else{
          setloginData(response.data.user);
        }
      } catch (error) {
        if (error.response) {
          window.alert(error.response.data.message);
        } else {
          console.error(error);
          window.alert("Network Error: Unable to fetch data");
        }
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <Header />
        <div style={{ marginTop: "1rem" }}>
          <Mode />
        </div>
        <div id="maincontent">
          <div id="leftnavdash">
            <Link to="/dashboard">
              <button className="divleftdash">Account Info</button>
            </Link>
            <Link to="/dashboard/emergency">
              <button className="divleftdash">
                Emergency Contact Information
              </button>
            </Link>
            <Link to="/dashboard/requests">
              <button className="divleftdash">Create Volunteer Request</button>
            </Link>
            <Link to="/dashboard/request/status">
              <button className="divleftdash">Check Request Status</button>
            </Link>
            <Link to="/dashboard/supportandcomplaint">
              <button className="divleftdash">Support & Complaint</button>
            </Link>
          </div>
          <div id="rightcontentdash">
            <Routes>
              <Route path="/" element={<Profile renderdata={loginData} />} />
              <Route path="/requests" element={<RequestVolunteer renderdata={loginData}/>} /> 
              <Route path="/request/status" element={<RequestVolunteerStatus  renderdata={loginData}/>} /> 
              {/* <Route path="/" element={<Profile />} /> for assistance request history */}
              <Route path="/supportandcomplaint" element={<Support />} />
              <Route
                path="/emergency"
                element={<Emergency renderdata={loginData} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
