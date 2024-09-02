import React, { useEffect, useState } from "react";
import axios from "axios";
import "./requestdisplay.css";

export default function DashboardVolunteer({ renderdata }) {
  const [ReqData, setReqData] = useState([]);

  async function handleSubmit(reqNo) {
    try {
      const res = await axios.post("/req/connect", {
        ReqNo: reqNo,
        nameVol: renderdata.Name,
        contactVol: renderdata.Contact_Number,
        mailVol: renderdata.Email_Id,
      });
      window.alert(res.data.message);
    } catch (err) {
      if (err.response) {
        window.alert(err.response.data.message);
      } else {
        console.error(err);
        window.alert("Network Error: Unable to fetch data");
      }
    }
  }
  

  const getReqData = async () => {
    try {
      const res = await axios.post("/req/search/volunteer", {
        location: localStorage.getItem("city"),
      });
      setReqData(res.data.data);
      console.log(res.data.data);
    } catch (err) {
      if (err.response) {
        window.alert(err.response.data.message);
        window.history.back();
      } else {
        console.error(err);
        window.alert("Network Error: Unable to fetch data");
        window.history.back();
      }
    }
  };

  function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    axios
      .get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=40fd0b6abd2445e8a61504acc6c59ad0&countrycode=in&limit=1`
      )
      .then((response) => {
        console.log(response.data);
        const city = response.data.results[0].components.county;
        if (city) {
          localStorage.setItem("city", city.split(" ")[0]);
          getReqData();
        } else {
          console.error("City not found in API response");
        }
      })
      .catch((error) => {
        console.error("Error fetching city:", error.message);
      });
  }

  function errorCallback(error) {
    console.error("Error getting location:", error.message);
    window.alert(
      "We need your location to continue with services! Please give location access before availing service"
    );
    window.history.back();
  }

  useEffect(() => {
    const city = localStorage.getItem("city");
    if (!city) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      getReqData();
    }
  }, []);

  return (
    <>
      <h2 className="container head1">We are Delighted You Are Here!</h2>
      <h2 className="container head1">Please continue Your Good Work</h2>
      <div className="container" id="container">
        <h2 className="head1">Available Requests Near You</h2>
        <table className="tablevolreq">
          <thead>
            <tr>
              <th>Unique Request Id</th>
              <th>Client Email</th>
              <th>Request Type</th>
              <th>Message</th>
              <th>Scheduled Date</th>
              <th>Posted Date</th>
              <th>Source</th>
              <th>Destination</th>
            </tr>
          </thead>
          <tbody>
            {ReqData.map((req, index) => (
              <tr key={index}>
                <td>{req.ReqNo}</td>
                <td>{req.clientEmail}</td>
                <td>{req.reqType}</td>
                <td>{req.reqMessage}</td>
                <td>{req.ScheduledDate.split("T")[0]}</td>
                <td>{req.postedDate.split("T")[0]}</td>
                <td>{req.Source}</td>
                <td>{req.Destination}</td>
                <div class="table-cell">
                  <button
                    className="accept-btn"
                    onClick={() => handleSubmit(req.ReqNo)}
                  >
                    Accept
                  </button>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
