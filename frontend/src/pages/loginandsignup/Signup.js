import { React, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import "./loginandsignup.css";
import { func } from "prop-types";
export default function Signup() {
 const navigate=useNavigate();
  const handlesignupsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const params = new URLSearchParams(formData); 

    try {
      const response = await axios.post("/user/signup-form", params);
      window.alert(response.data.message);
      navigate("/login");

    } catch (error) {
      window.alert(error.response.data.message);
    }
  };

  return (
    <div
      id="logincontent"
      style={{
        backgroundColor: "rgb(238,242,246)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "28vw",
          backgroundColor: "white",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0.7rem",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1.5rem",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="error"
            height={35}
            width={35}
          />
          <h3
            style={{
              color: "rgb(61,81,181)",
              fontWeight: "900",
              fontSize: "2rem",
            }}
          >
            SAHAYAK
          </h3>
        </div>
        <h2 style={{ color: "rgb(61,81,181)", fontWeight: "600" }}>Sign up</h2>

        <form
          onSubmit={handlesignupsubmit}
          id="my-form"
          action="/signup-form"
          method="post"
        >
          <div style={{ display: "flex", gap: "1rem" }}>
            <div
              style={{
                backgroundColor: "rgb(238,242,246)",
                border: "2px solid black",
                width: "90%",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                borderRadius: "0.5rem",
              }}
            >
              <label htmlFor="flname" style={{ color: "rgb(111 112 114)" }}>
                Name
              </label>

              <input
                type="text"
                id="flname"
                name="Name"
                className="username"
                style={{
                  border: "none",
                  backgroundColor: "rgb(238,242,246)",
                  fontSize: "1.5rem",
                  width: "100%",
                  fontWeight: "500",
                }}
                required
              />
            </div>

            <div
              style={{
                backgroundColor: "rgb(238,242,246)",
                border: "2px solid black",
                width: "90%",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                borderRadius: "0.5rem",
              }}
            >
              <label htmlFor="cn" style={{ color: "rgb(111 112 114)" }}>
                Contact No
              </label>

              <input
                type="tel"
                className="username"
                name="Contact_Number"
                id="lname"
                style={{
                  border: "none",
                  backgroundColor: "rgb(238,242,246)",
                  fontSize: "1.5rem",
                  width: "100%",
                  fontWeight: "500",
                }}
                required
                pattern="[0-9]{10}"
                title="Please enter a 10-digit phone number"
              />
            </div>
          </div>

          <div
            style={{
              marginTop: "1rem",
              backgroundColor: "rgb(238,242,246)",
              border: "2px solid black",
              width: "90%",
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              borderRadius: "0.5rem",
            }}
          >
            <label htmlFor="email" style={{ color: "rgb(111 112 114)" }}>
              Email Id
            </label>

            <input
              type="text"
              className="username"
              id="email"
              name="Email_Id"
              style={{
                border: "none",
                backgroundColor: "rgb(238,242,246)",
                fontSize: "1.5rem",
                width: "100%",
                fontWeight: "500",
              }}
              required
            />
          </div>

          <div
            style={{
              marginTop: "1rem",
              backgroundColor: "rgb(238,242,246)",
              border: "2px solid black",
              width: "90%",
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              borderRadius: "0.5rem",
            }}
          >
            <label htmlFor="Password" style={{ color: "rgb(111 112 114)" }}>
              Password
            </label>

            <input
              type="password"
              id="Password"
              name="Password"
              style={{
                border: "none",
                backgroundColor: "rgb(238,242,246)",
                fontSize: "1.5rem",
                width: "100%",
                fontWeight: "500",
              }}
              required
            />
          </div>
          <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
            <div
              style={{
                backgroundColor: "rgb(238,242,246)",
                border: "2px solid black",
                width: "90%",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                borderRadius: "0.5rem",
              }}
            >
              <label htmlFor="emrc1" style={{ color: "rgb(111 112 114)" }}>
                Emergency Contact 1
              </label>

              <input
                type="text"
                id="emrc1"
                name="Emergency_Contact1"
                className="username"
                style={{
                  border: "none",
                  backgroundColor: "rgb(238,242,246)",
                  fontSize: "1.5rem",
                  width: "100%",
                  fontWeight: "500",
                }}
                required
                pattern="[0-9]{10}"
                title="Please enter a 10-digit phone number"
              />
            </div>

            <div
              style={{
                backgroundColor: "rgb(238,242,246)",
                border: "2px solid black",
                width: "90%",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                borderRadius: "0.5rem",
              }}
            >
              <label htmlFor="emrc2" style={{ color: "rgb(111 112 114)" }}>
                Emergency Contact 2
              </label>

              <input
                type="tel"
                className="username"
                name="Emergency_Contact2"
                id="emrc2"
                style={{
                  border: "none",
                  backgroundColor: "rgb(238,242,246)",
                  fontSize: "1.5rem",
                  width: "100%",
                  fontWeight: "500",
                }}
                required
                pattern="[0-9]{10}"
                title="Please enter a 10-digit phone number"
              />
            </div>
          </div>
        <div style={{ display: "flex", width: "100%",marginTop:"1rem" }}>
          <div style={{ display: "flex", marginLeft: "5%", gap: "0.4rem" }}>
            <label htmlFor="client" style={{ color: "rgb(111 112 114)",fontSize:"1.3rem" }}>
              Client
            </label>
            <input type="radio" name="PersonType" value="client" checked id="client"/>
            <label htmlFor="volun" style={{ color: "rgb(111 112 114)",fontSize:"1.3rem" }}>
              Volunteer
            </label>
            <input type="radio" name="PersonType" value="volunteer" id="volun" />
          </div>
        </div>
        </form>
        <div style={{ display: "flex", width: "100%" }}>
        <div style={{ display: "flex", marginLeft: "5%", gap: "0.4rem" }}>
              <h4><a href="/" style={{textDecoration:"none",color:"#005fa7"}}>Move to Home</a></h4>
            </div>
        </div>

        <button
          type="submit"
          form="my-form"
          style={{
            backgroundColor: "rgb(61,81,181)",
            color: "white",
            width: "80%",
            padding: "0.5rem",
          }}
        >
          SignUp
        </button>
        <hr style={{ color: "rgb(111 112 114)" }} />
        <Link
          to="/login"
          style={{
            fontWeight: "600",
            fontSize: "1.5rem",
            color: "black",
            textDecoration: "none  ",
          }}
        >
          Already have an account?
        </Link>
      </div>
      <div
        style={{
          backgroundColor: "rgb(61,81,181)",
          color: "white",
          fontWeight: "500",
        }}
      >
        Copyright © 2024 Sahayak India. All Rights Reserved. Powered By
        Gursimranjeet Web Pvt Ltd.
      </div>
    </div>
  );
}
