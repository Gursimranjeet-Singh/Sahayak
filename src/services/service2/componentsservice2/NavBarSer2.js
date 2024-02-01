import React, { Component } from "react";
import { Link } from "react-router-dom";
import './navbarser2.css'

export default class NavBarSer2 extends Component {
  handleShowMode = () => {
    this.setState((prevState) => ({ showmode: !prevState.showmode }));
  }
  
  
   Graymode() {
    const currentFilter = document.body.style.filter;
    if (currentFilter.includes('grayscale')) {
      document.body.style.filter = 'grayscale(0%)';
    } else {
      document.body.style.filter = 'grayscale(100%)';
    }
  }
  
   Darkmode() {
    const currentFilter = document.body.style.filter;
    if (currentFilter.includes('invert')) {
      document.body.style.filter = 'invert(0%)';
    } else {
      document.body.style.filter = 'invert(100%)';
    }
  }
  
   Brightmode() {
    const currentFilter = document.body.style.filter;
    if (currentFilter.includes('brightness')) {
      document.body.style.filter = 'brightness(100%)';
    } else {
      document.body.style.filter = 'brightness(150%)';
    }
  }
  
   Lightmode() {
    const currentFilter = document.body.style.filter;
    if (currentFilter.includes('opacity')) {
      document.body.style.filter = 'opacity(100%)';
    } else {
      document.body.style.filter = 'opacity(70%)';
    }
  }
  constructor(){
    super();
    this.state={
      showmode: false,
    };
  }
  
  
  
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: "white",
            height: "7vh",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            color: "black",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="error"
            height={40}
            width={40}
            style={{ marginLeft: "2rem" }}

          />
          <h1 style={{ fontWeight: "900",fontSize:'3rem',color:'#005fa7' }}>Sahayak </h1>
          <h3
            style={{
              marginLeft: "auto",
              fontFamily: "garamond",
              fontWeight: "700",
              color:'#005fa7'
            }}
          >
            Find wheelchair accessible places at your desired location
          </h3>
          <Link
            style={{
              border: "none",
              backgroundColor: "#005fa7",
              color: "white ",
              textDecoration: "none",
              padding: "0.5rem",
              borderRadius: "1rem",
              fontSize: "1.5rem",
              marginLeft: "auto",
              marginRight: "4rem",
            }}
            to={"/"}
          >
            Home
          </Link>
        </div>
        <div>
        <button id="changemode"  onClick={this.handleShowMode}><i class="fa fa-wheelchair fa-3x" aria-hidden="true" style={{color:"#005fa7",left:'97vw'}}></i></button>
      </div>
      {this.state.showmode && <div  style={{display:'flex',justifyContent:"center"}}>
        <div><button className="showmodebtn" onClick={this.Graymode}>Gray Mode</button></div>
        <div><button  className="showmodebtn" onClick={this.Darkmode}>Dark Mode</button></div>
        <div><button  className="showmodebtn" onClick={this.Brightmode}>Bright Mode</button></div>
        <div><button  className="showmodebtn" onClick={this.Lightmode}>Light Mode</button></div>
        
        </div>}
      </>
    );
  }
}
