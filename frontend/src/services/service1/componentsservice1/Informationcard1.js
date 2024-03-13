import React, { Component } from "react";
import "./informationcard1.css";
import axios from "axios";

export default class Informationcard extends Component {
  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            borderBottom: "1rem solid white",
          }}
        >
          <button style={{ border: "none", backgroundColor: "none" }}>
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              height={30}
              width={30}
            />
          </button>
          <button style={{ border: "none", backgroundColor: "none" }}>
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              height={30}
              width={30}
            />
          </button>
          <button
            style={{ border: "none", backgroundColor: "none" }}
        // onClick={/*handlecabrequest*/}
          >
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              height={30}
              width={30}
            />
          </button>
        </div>
        <div
          style={{
            border: "2px solid black",
            marginTop: "2rem",
            width: "90%",
            height: "80%",

            backgroundColor: "white",
          }}
        >
          {/* this is one sample content the no of such should be added using map function so that all results can be incoporated */}
          {/* <ScheduleCard /> */}
          <MetroCard />
        </div>
      </>
    );
  }
}

export function MetroCard() {
  {
    // data.map((dataelement) => {
    return (
      <div
        style={{
          width: "100%",
          border: "2px solid red",
          padding: "1rem",
          overflow: "scroll",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            height={20}
            width={20}
          />
          <h4 style={{ fontWeight: "3rem", fontFamily: "garamond" }}>time</h4>
          <a
            href="" /*{`https://www.google.com/maps?q=${/markerdetails.lat},${markerdetails.lng}`}*/
            target="_blank"
          >
            <i class="fa-solid fa-location-dot"></i>
          </a>
        </div>

        <h4 style={{ fontWeight: "3rem", fontFamily: "garamond" }}>
          12:00-05:33
        </h4>
        <div>
          Scheduled at 05:00 from Mysore Road statelite bus or metro station
        </div>
      </div>
    );
    // });
  }
}


// export function UberRequestForm() {
//   const [responseMessage, setResponseMessage] = useState('');

//   const handleUberRequest = async () => {
//     try {
//       const response = await axios.post('/uber/request', {
//         // Include any necessary parameters for the Uber request
//         product_id: "uberX",
//         start_latitude: 37.774929,
//         start_longitude: -122.419416,
//         end_latitude: 37.871853,
//         end_longitude: -122.258423,
//         seat_count: 1,
//       });
//       setResponseMessage(response.data.message);
//     } catch (error) {
//       console.error('Error:', error);
//       setResponseMessage('Error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleUberRequest}>Request Uber</button>
//       {responseMessage && <p>{responseMessage}</p>}
//     </div>
//   );
// }



