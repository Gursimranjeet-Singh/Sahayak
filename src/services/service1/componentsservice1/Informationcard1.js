import React, { Component } from "react";
import "./informationcard1.css"

export default class Informationcard extends Component {

  render() {
    
  
    return (
      <>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            padding: "8px 16px 8px 16px",
            marginTop: "1rem",
          }}
        >
          <div >
            <img
              // src={`${process.env.PUBLIC_URL}/${this.logopath()}`}
              alt="error"
              height={40}
              width={60}
            />
           
          </div>
          <div style={{width:'100%'}}>
            <div style={{ display: "flex" }}>
              <p style={{ fontSize: "2rem", color: "black",fontFamily:'garamond',fontWeight:'800',textDecoration:'underline' }}>
                {/* {markerdetails.name} */} name
              </p>
              <button id="closecard"  style={{marginLeft: "auto",}}>
                <i
                  className="fa-solid fa-x"
                  style={{
                    color: "#c8c5ca",
                    backgroundColor: "white !important",
                    
                  }}
                ></i>
              </button>
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ fontSize: "1.6rem", color: "black" ,fontWeight:700}}>
               type {/* {markerdetails.type ? markerdetails.type.split(".")[1].toUpperCase() : 'undefined'} */}
              </p>
            </div>
          </div>
        </div>
  
        <p
          style={{
            backgroundColor: "rgb(251, 250, 249)",
            border: "2px solid rgba(206, 210, 215, 0.7)",
            // color: markerdetails.accessibility === 'wheelchair.yes' ?"rgb(70, 117, 0)":'#ff000099',
            fontWeight: "700",
            width: "90%",
            textAlign: "center",
            margin:'auto',
            padding: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          accessibility
          {/* {markerdetails.accessibility === 'wheelchair.yes' ? "Fully Wheelchair Accessible" : "Partial Wheelchair Accessible"} */}
        </p>
  
        <div id="addninf">
          <p style={{ fontSize: "1.3rem", color: "black" }}>
            {/* {markerdetails.address} */}
          </p>
        </div>
  
        <div id="features">
         
          <a
            className="featureslist"
            // href={`https://www.google.com/maps?q=${markerdetails.lat},${markerdetails.lng}`}
            target="_blank"
          >
            Open in Google Maps
          </a>
          <a className="featureslist" href="">
            Report Problem
          </a>
        </div>
        <div style={{marginTop:'auto'}}>
          {/* {markerdetails.licence} */}licence
          </div>
  
        
      </>
    );
  }
}