import React, { useState } from "react";
import "./service1.css"; // Import your CSS file for styling
import NavBarSer1 from "./componentsservice1/NavBar";
import Map from "./componentsservice1/Mapser1";
import Login from "../../pages/loginandsignup/Login";
import Signup from "../../pages/loginandsignup/Signup";

function Service2() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleShowAlert = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <NavBarSer1
        description="Find wheelchair accessible places at your desired location"
        service="Service1"
      />
      {showAlert && (
        <div id="alert">
          <p>{alertMessage}</p>
          <span className="close-btn" onClick={handleCloseAlert}>&times;</span>
        </div>
      )}

      <div id="contetnservice2">
        <div id="mapsevice2">
          <Map showAlert={handleShowAlert} />
        </div>
      </div>
      {/* <Login/> */}
      {/* <Signup/> */}
    </>
  );
}

export default Service2;
