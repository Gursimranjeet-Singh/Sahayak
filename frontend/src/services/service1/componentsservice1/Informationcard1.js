import React, { useState, useEffect } from "react";
import "./informationcard1.css";

export default function Informationcard({ driverdata }) {
  const [selectedDriver, setSelectedDriver] = useState({}); // Initialize with an empty object

  useEffect(() => {
    console.log(driverdata);
    document.getElementById("inf2").style.display="block";
    setSelectedDriver(driverdata || {}); // Ensure that driverdata is defined, otherwise use an empty object
  }, [driverdata]);

  function handleConfirm() {
    window.alert("Thanks for availing the service");
  }

  return (
    <div className="information-card" id="unique" >
      <div className="profile-section">
        <img
          src="https://www.pikpng.com/pngl/m/16-168770_user-iconset-no-profile-picture-icon-circle-clipart.png"
          alt="Profile"
          className="profile-photo"
        />
        <div>
          <p className="driver-info">{selectedDriver.name}</p>
          <p className="driver-info">{selectedDriver.cab_name}</p>
        </div>
      </div>
      <div className="driving-info">
        <p>Driver ID: {selectedDriver.driver_id}</p>
        <p>Phone Number: {selectedDriver.phone_number}</p>
        <p className="current-location">Current Location: {selectedDriver.current_location}</p>
        <button className="confirm-button" onClick={handleConfirm}>
        Confirm
      </button>
      </div>
      
    </div>
  );
}
