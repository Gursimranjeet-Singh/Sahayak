import React from "react";
import { useLocation } from "react-router-dom";

const style = {
  backgroundColor: '#005fa7',
  height: '5vh',
};

export default function Locatepages() {
  const location = useLocation();

  return (
    <div className="container" style={style}>
      <p>You are here: {location.pathname}</p>
    </div>
  );
}
