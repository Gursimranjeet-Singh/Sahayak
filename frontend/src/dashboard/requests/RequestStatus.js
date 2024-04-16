import React, { useState, useEffect } from "react";
import axios from "axios"; // Add axios import statement
import "./requeststatus.css";

export default function RequestStatus({ renderdata }) {
  const [reqdata, setReqData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.post("/req/search/client", { email: renderdata.Email_Id });
      setReqData(res.data.reqData);
      
    } catch (error) {
      if (error.response) {
        window.alert(error.response.data.message);
      } else {
        console.error(error);
        window.alert("Network Error: Unable to fetch data");
      }
    }
  };
  useEffect(() => {

    fetchData(); 
  }, []); 

  return (
    <div className="container">
      <h2 id="heading1">
        Please find the assistance with respect to your request
      </h2>

      <div className="request-details">
        <h2 id="heading2">Your request</h2>
        <table className="tablereqstatus">
          <thead>
            <tr>
              <th>Request Id</th>
              <th>Volunteer Name</th>
              <th>Contact Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {reqdata.map((req, index) => (
              <tr key={index}> 
                <td>{req.ReqNo}</td> 
                <td>{req.nameVol}</td>
                <td>
                  <a href={`tel:+91${req.contactVol}`}>{req.contactVol}</a> 
                </td>
                <td>
                  <a href={`mailto:${req.mailVol}`}>{req.mailVol}</a>
                </td>
                <td>Message</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
