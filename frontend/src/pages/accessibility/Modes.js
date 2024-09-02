import {React, useState} from "react";
export default function Mode(){
    const [showmode,setshowmode]=useState(false);
    const handleShowMode = () => {
        setshowmode(!showmode);
      }
    
      const Graymode=()=> {
        const currentFilter = document.body.style.filter;
        if (currentFilter.includes("grayscale")) {
          document.body.style.filter = "grayscale(0%)";
        } else {
          document.body.style.filter = "grayscale(100%)";
        }
      }
    
      const Darkmode=()=> {
        const currentFilter = document.body.style.filter;
        if (currentFilter.includes("invert")) {
          document.body.style.filter = "invert(0%)";
        } else {
          document.body.style.filter = "invert(100%)";
        }
      }
    
      const Brightmode=()=> {
        const currentFilter = document.body.style.filter;
        if (currentFilter.includes("brightness")) {
          document.body.style.filter = "brightness(100%)";
        } else {
          document.body.style.filter = "brightness(150%)";
        }
      }
    
      const Lightmode=()=> {
        const currentFilter = document.body.style.filter;
        if (currentFilter.includes("opacity")) {
          document.body.style.filter = "opacity(100%)";
        } else {
          document.body.style.filter = "opacity(70%)";
        }
      }
      

    return(
       <>
       <div>
          <button id="changemode" onClick={handleShowMode}>
            <i
              className="fa fa-wheelchair fa-3x"
              aria-hidden="true"
              style={{ color: "#005fa7", left: "97vw" }}
            ></i>
          </button>
        </div>
        { showmode && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <button className="showmodebtn" onClick={ Graymode}>
              Gray Mode
            </button>
          </div>
          <div>
            <button className="showmodebtn" onClick={ Darkmode}>
              Dark Mode
            </button>
          </div>
          <div>
            <button className="showmodebtn" onClick={ Brightmode}>
              Bright Mode
            </button>
          </div>
          <div>
            <button className="showmodebtn" onClick={ Lightmode}>
              Light Mode
            </button>
          </div>
        </div>
      )}
      </>
    );

    
}