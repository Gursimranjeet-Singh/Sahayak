// this is for Account Info page
import React, { Fragment } from "react";
import "./profile.css";
export default function Profile({ renderdata }) {
  // below information to be get from login page database just for ui reference
  const info = [
    { id: 0, nameofitem: "Name", valueofitem: renderdata.Name },
    { id: 1, nameofitem: "Email", valueofitem: renderdata.Email_Id },
    {
      id: 2,
      nameofitem: "Contact Number",
      valueofitem: renderdata.Contact_Number,
    },
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
