import { useState } from "react";
import axios from "axios";
import OpenCageGeocode from "opencage-api-client";
export default function Search1({setoriginanddest}) {
  const [searchdata1, setsearchdata1] = useState("");
  const [searchdata2, setsearchdata2] = useState("");

  const search1handleOnChange = (e) => {
    setsearchdata1(e.target.value);
  };

  const search2handleOnChange = (e) => {
    setsearchdata2(e.target.value);
  
  };

  const handleSearchData = async () => {

  if(searchdata1&&searchdata2){
    try {
      const searcheddata1= await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${searchdata1}&key=40fd0b6abd2445e8a61504acc6c59ad0&countrycode=in&limit=1`);
      const searcheddata2= await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${searchdata2}&key=40fd0b6abd2445e8a61504acc6c59ad0&countrycode=in&limit=1`);
      
 
      if(searcheddata1.data.results.length>0&&searcheddata2.data.results.length>0){
        let origin=searcheddata1.data.results[0].geometry
        let destination=searcheddata2.data.results[0].geometry
        //for setting value in parent component
       setoriginanddest(origin,destination);
       
      }
      else{
        window.alert("Please enter valid location Try using full address")
      }
          
  
    } 
    catch (error) {
      console.error("Error fetching bounding box:", error);
    }
  }
  else{
    window.alert("Please donot leave field empty!!")
  }  
  };


  return (
    <>
      <div id="searchservice1">
      <div style={{   display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',}}>  
        <div
          className="search "
          style={{
            display: "flex",
            alignItems: "center",
            width: "90%",
            width: "15vw",
          }}
        >
          <i className="fa fa-search" />
          <input
            type="text"
            onChange={search1handleOnChange}
            value={searchdata1}
            placeholder="Enter Start"
          />
        </div>

        <div
          className="search"
          style={{
            display: "flex",
            alignItems: "center",
            width: "90%",
            width: "15vw",
          }}
        >
          <i className="fa fa-search" />
          <input
            type="text"
            onChange={search2handleOnChange}
            value={searchdata2}
            placeholder="Enter Destination"
          />
        </div>
      </div>  
      <div style={{display:'flex',justifyContent:"center",marginTop:'1rem'}}>
      <button  type="submit" onClick={handleSearchData} style={{ border: 'none',
  backgroundColor: '#005fa7',
  color: 'white',
  padding: '0.3rem',
  height: '3rem',
  width: '7rem',
  fontSize: '1.5rem',}}>
        Search
      </button>
      </div>
      
      </div>
    </>
  );
}
