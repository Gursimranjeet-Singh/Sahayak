import React, { useState, useEffect } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/home/Home";
import "./volunteerdash.css";
import axios from "axios";
import Profile from "../profiledash.js/Profile.js";
import Support from "../supportandcomplaint/Support.js";
import RequestDisplay from "./components/RequestDisplay.js";
import Mode from "../../pages/accessibility/Modes";
import Header from "./VolDashHead.js"; //

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

        setloginData(response.data.user);
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
            <Link to="/dashboardVolunteer">
              <button className="divleftdash">Account Info</button>
            </Link>
            <Link to="/dashboardVolunteer/request">
              <button className="divleftdash">Check Volunteer Request </button>
            </Link>
            <Link to="/dashboardVolunteer/supportandcomplaint">
              <button className="divleftdash">Support & Complaint</button>
            </Link>
          </div>
          <div id="rightcontentdash">
            <Routes>
              <Route path="/" element={<Profile renderdata={loginData} />} />
              <Route path="/supportandcomplaint" element={<Support />} />
              <Route path="/request" element={<RequestDisplay renderdata={loginData} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
