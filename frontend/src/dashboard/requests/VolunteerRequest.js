import React, { useState, useEffect } from "react";
import axios from "axios";
import "./volunteereq.css";

export default function RequestVolunteer({ renderdata }) {
  const [myreqdata, setmyreqdata] = useState([]);

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("clientName", renderdata.Name);
    formData.append("clientEmail", renderdata.Email_Id);
    const curDate = new Date().toISOString().split("T")[0];
    formData.append("postedDate", curDate);

    const scheduledDate = formData.get("ScheduledDate").split("T")[0];
    formData.set("ScheduledDate", scheduledDate);

    const finalFormData = new URLSearchParams(formData);

    try {
      const response = await axios.post("/req/generate", finalFormData);
      for (let i = 0; i < response.data.ReqData.length; i++) {
        response.data.ReqData[i].ScheduledDate = response.data.ReqData[i].ScheduledDate.split("T")[0];
        response.data.ReqData[i].postedDate = response.data.ReqData[i].postedDate.split("T")[0];
      }
      
      setmyreqdata(response.data.ReqData);
      document.getElementById("container").style.display = "block";
    } catch (error) {
      if (error.response) {
        window.alert(error.response.data.message);
      } else {
        console.error(error);
        window.alert("Network Error: Unable to fetch data");
      }
    }
  };



  return (
    <>
      <div className="container">
        <h2 id="head1">
          Please find the form below to make a volunteer request
        </h2>
        <form id="formvolreq" onSubmit={handleSubmit}>
          <label htmlFor="cityvol">Enter Your city</label>
          <input type="text" id="cityvol" name="city" />
          <br />
          <br />
          <label htmlFor="source">Enter Your Source </label>
          <input type="text" id="source" name="Source" />
          <label htmlFor="destination">Enter Your Destination</label>
          <input type="text" id="destination" name="Destination" />
          <br />
          <br />
          <textarea
            placeholder="Enter your message"
            id="tavolreq"
            name="reqMessage"
          ></textarea>
          <label htmlFor="scheduledate">
            Enter Your Scheduled Date and time
          </label>
          <input
            type="datetime-local"
            id="scheduledate"
            name="ScheduledDate"
          />

          {/*Add suitable options */}
          <select className="options" id="selectvolreq" name="reqType">
            <option>Physical Assistance</option>
            <option>Communication and Advocacy</option>
            <option>Luggage Handling</option>
            <option>Assistance with Daily Living Tasks</option>
            <option>Assistance with Boarding and Deboarding</option>
            <option>Advocacy and Rights Awareness</option>
            <option>Emergency Preparedness</option>
            <option>Healthcare and Medical Assistance</option>
          </select>
          <button form="formvolreq">Submit</button>
        </form>
      </div>

      <div className="container" id="container" style={{ display: "none" }}>
        <h2 id="head1">Your requests</h2>
        <table className="tablevolreq">
          <thead>
            <tr>
              <th>Request Id</th>
              <th>Request Type</th>
              <th>Scheduled Date</th>
              <th>Posted Date</th>
              <th>Destination if any</th>
            </tr>
          </thead>
          <tbody>
            {myreqdata.map((req, index) => (
              <tr key={index}>
                <td>{req.ReqNo}</td>
                <td>{req.reqType}</td>
                <td>{req.ScheduledDate}</td>
                <td>{req.postedDate}</td>
                <td>{req.Destination}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
