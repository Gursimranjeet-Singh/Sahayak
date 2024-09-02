import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function DashHeader() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.post("/logout");
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("PersonType");
      window.alert(response.data.message);
      navigate("/");
    } catch (err) {
      window.alert("Error logging out!!");
    }
  };
  return (
    <div id="headdash">
      <span>Sahayak Account</span>
      <div style={{ marginLeft: "auto" }}>
        <Link className="homedashbtn" to="/">
          Home
        </Link>
        <Link className="homedashbtn" to="/contact">
          Contact
        </Link>
        <Link className="homedashbtn" to="/service1">
          Service1
        </Link>
        <Link className="homedashbtn" to="/service2">
          Service2
        </Link>
        <button className="homedashbtn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
