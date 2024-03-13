import React from "react";
import {Link} from "react-router-dom"
export default function DashHeader() {
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
      </div>
    </div>
  );
}
