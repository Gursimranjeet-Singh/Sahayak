import React, { useState } from "react";
import { Fragment } from "react";
import "./emergency.css";

function Emergency({ renderdata }) {
  const info = [
    {
      id: 0,
      nameofdept: "National Disability Helpline",
      valueofitem: "94155 78606",
    },
    { id: 1, nameofdept: "Police", valueofitem: "100" },
    { id: 2, nameofdept: "Ambulance", valueofitem: "108" },
    {
      id: 3,
      nameofdept: "Department of Empowerment of Persons with Disabilities",
      valueofitem: "24364391",
    },
  ];
  function Showlistitems() {
    let listitems = info.map((items) => (
      <Fragment key={items.id}>
        <div className="emercontactname">{items.nameofdept}</div>
        <div className="emercontactphoneno">
          <button className="emergencybtn">
            <a className="astyleemer" href={"tel:+" + items.valueofitem}>
              Contact Here
            </a>
          </button>
        </div>
        <hr />
      </Fragment>
    ));
    return <>{listitems}</>;
  }
  return (
    <>
      <p id="headingemergency">Emergency Contact</p>
      <div className="basicinfoemercontact">Basic Info Personal Contact</div>

      <div id="emercontact">
        <div className="emercontacts">
          <div className="emercontactname">
            Name
            <p>Member 1</p>
          </div>
          <div className="emercontactphoneno">
            <button className="emergencybtn ">
              <a
                className="astyleemer"
                href={`tel:${renderdata.Emergency_Contact1}`}
              >
                Contact Here
              </a>
            </button>
          </div>
          <hr />
        </div>
        <div className="emercontacts">
          <div className="emercontactname">
            Name
            <p>Member 2</p>
          </div>

          <div className="emercontactphoneno">
            <button className="emergencybtn">
              <a className="astyleemer" href={`tel:${renderdata.Emergency_Contact2}`}>
                Contact Here
              </a>
            </button>
          </div>
          <hr />
        </div>
      </div>
      <div className="basicinfoemercontact">Government Helpline</div>
      <Showlistitems />
    </>
  );
}

export default Emergency;
