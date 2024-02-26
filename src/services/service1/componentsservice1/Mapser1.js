import React, { useState } from "react";
import axios from "axios";
import Map from "./Map1";
import Search from "./Search1";

export default function Mapser1() {
  const [origincoord, setorigincoord] = useState(null);
  const [destcoord, setdestcoord] = useState(null);

 const setoriginanddest = (or, dest) => {
    setorigincoord(or);
    console.log(or)
    setdestcoord(dest);
    console.log(dest)
      handleoriginanddest();
  };
  const handleoriginanddest=async()=>{
    try{
      const dataorigin=await axios.get(`https://api.geoapify.com/v2/places?categories=public_transport.subway,public_transport.bus&conditions=wheelchair&filter=circle:${origincoord.lng},${origincoord.lat},2000&bias=proximity:77.5909242,12.933659&lang=en&limit=20&apiKey=0876b6ee31314d32bdb95b30155c6ba3`)
      const datadest=await axios.get(`https://api.geoapify.com/v2/places?categories=public_transport.subway,public_transport.bus&conditions=wheelchair&filter=circle:${destcoord.lng},${destcoord.lat},2000&bias=proximity:77.5909242,12.933659&lang=en&limit=20&apiKey=0876b6ee31314d32bdb95b30155c6ba3`)
    console.log(dataorigin)
    console.log(datadest)
    if(dataorigin.data.features.length>0&&datadest.data.features.length>0){

    }
    else{
      window.alert("Sorry we are currently not providing service for desired locations");
    }
    
    }
    catch(e){
      console.error(e);
    }
  }

  return (
    <>
      {/* <Map apidata={apidata} /> */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1000,
          width: "100%",
        }}
      >
        
          {/* Ensure setoriginanddest is passed as a prop */}
          <Search setoriginanddest={setoriginanddest} />
        
      </div>
    </>
  );
}
