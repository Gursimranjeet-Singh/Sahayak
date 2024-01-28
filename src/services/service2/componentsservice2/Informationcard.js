import React, { Component } from "react";
import './informationcard.css'
export default class Informationcard extends Component {
 
  render() {
    const{closeInfoCard,markerdetails}=this.props
      
    
    return (
      <>
        

        <div
          
          style={{ display: "flex", gap: "1rem",
           padding: "8px 16px 8px 16px",
         marginTop:'2rem'
        }}
        >
          <div>
            <img src="" alt="error" height={20} width={20}/>{/*logic must be based on the type of place*/}
          </div>
          <div >
            <div style={{ display: "flex"}}>
              <p style={{fontSize:'2rem',color:"black"}}>{this.props.markerdetails.name+'name'}</p>
                <button id="closecard" onClick={this.props.closeInfoCard} >
                  <i
                    className="fa-solid fa-x"
                    style={{
                      color: "#c8c5ca",
                      backgroundColor: "white !important"
                      
                    }}
                  ></i>
                </button>
              
            </div>
            <div style={{ display: "flex" }}>
              <p style={{fontSize:'1.6rem',
            color:'black'}}>{this.props.markerdetails.type+'type'}</p>
            </div>
          </div>
        </div>

        <p style={{backgroundColor:'rgb(251, 250, 249)',
    border: '2px solid rgba(206, 210, 215, 0.7)',
    color:'rgb(70, 117, 0)',
    fontWeight:'700',
    width:'90%',
    textAlign:'center',
    padding:'1rem',
    marginBottom:'3rem'
    }}>
        {this.props.markerdetails.accessibility+'accessibility'}</p>

        <div id="addninf">
          <p style={{fontSize:'1.1rem',
        color:'black'
        }}>{this.props.markerdetails.address}</p>
          
        </div>

        <div id="features" >
          
          <a className="featureslist" href="" >Report Problem</a>
          <a className="featureslist"
            href={`https://www.google.com/maps?q=${this.props.markerdetails.lat},${this.props.markerdetails.lng}`}
            target="_blank"
          >
            Open in Google Maps
          </a>
          <a className="featureslist" href="">Report Problem</a>
        </div>
       
        <p style={{fontSize:'1.2rem'}}>{this.props.markerdetails.licence+'report'}</p>
      </>
    );
  }
}
