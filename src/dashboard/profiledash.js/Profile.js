// this is for Account Info page
import React, { Fragment } from "react";
import "./profile.css";
export default function Profile() {
  const info = [
    { id: 0, nameofitem: "Name", valueofitem: "Gursimranjeet Singh" },
    { id: 0, nameofitem: "Email", valueofitem: "Gursimranjeet@gmail.com" },
    { id: 0, nameofitem: "Contact Number", valueofitem: "42379857923" },
  ];
  function Showlistitems() {
    let listitems = info.map((items) => (
      <Fragment key={items.id}>
        <div className="infoabout">{items.nameofitem}</div>
        <div className="infovalue">{items.valueofitem}</div>
        <hr />
      </Fragment>
    ));
    return <>{listitems}</>;
  }
  return (
    <>
      <p id="headingprofile">Account Info</p>
      <div id="profileimage"></div>
      <div id="basicinfo">Basic Info</div>
      <div id="info">
        <Showlistitems />
      </div>
    </>
  );
}
