import React from "react";
import axios from "axios"
import {Link} from "react-router-dom"
export default function DashHeader() {
  const handleLogout=async()=>{
    try{
      const status=await axios.post("/user/Logout");

    }
    catch(err){
      console.error("error occured "+err)
    }
  }
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
