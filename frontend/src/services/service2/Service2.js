import React, { useState } from "react";
import "./service2.css"; // Import your CSS file for styling
import NavBarSer2 from "./componentsservice2/NavBar";
import Map from "./componentsservice2/Mapser2";
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
      <NavBarSer2
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
