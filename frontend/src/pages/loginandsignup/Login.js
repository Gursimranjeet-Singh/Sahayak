import React from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import "./loginandsignup.css";
export default function Login({handleisLoggedIn,setLoginDataForRender}) {

 const Navigate=useNavigate();

  const handleloginsubmit=async(e)=>{
    e.preventDefault();
    const fd=new FormData(e.target);
    const params = new URLSearchParams(fd);
    try{
      const data=await axios.post("/login-form",params,{
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      
      // console.log("type of prop is"+handleisLoggedIn)
      // console.log("data is "+data) 
       if(data.data.message==='Login successful'){
        // console.log("inside if of verification")
        // console.log(data)
        // console.log(data.data.user)

        localStorage.setItem("userData", JSON.stringify(data.data.user));
        handleisLoggedIn();
        setLoginDataForRender(data.data.user);
        Navigate("/dashboard")
       }
       else{
        window.alert("Cant Authenticate please try again..");
       }
    }
    catch(err){
      console.log("error:"+err)
      window.alert("Cant Authenticate please try again..");
    }
  }
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
          height: "68vh",
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
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            margin: "2rem",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="error"
            height={35}
            width={35}
          />
          <h3 style={{ fontWeight: "600", fontSize: "2rem" }}>SAHAYAK</h3>
        </div>
        <h2 style={{ color: "rgb(61,81,181)", fontWeight: "600" }}>
          Hi,Welcome Back
        </h2>
        <h4 style={{ color: "rgb(111 112 114)" }}>
          Enter your credentials to continue
        </h4>
        <form id="my-form1" onSubmit={handleloginsubmit} >
          <div
            style={{
              backgroundColor: "rgb(238,242,246)",
              border: "2px solid black",
              width: "20vw",
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
              id="email"
              className="username"
              name="email"
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
              marginTop:"1rem",
              backgroundColor: "rgb(238,242,246)",
              border: "2px solid black",
              width: "20vw",
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
              type="text"
              id="Password"
              name="password"
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
        </form>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ display: "flex", marginLeft: "5%", gap: "0.4rem" }}>
            <input type="checkbox" />
            <h4>Keep me logged in</h4>
          </div>

          <Link
            to=""
            style={{
              textDecoration: "none",
              color: "rgb(61,81,181)",
              fontSize: "1.5rem",
              marginLeft: "auto",
              marginRight: "5%",
            }}
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          form="my-form1"
          style={{
            backgroundColor: "rgb(61,81,181)",
            color: "white",
            width: "80%",
            padding: "0.5rem",
          }}
        >
          SignIn
        </button>
        <hr style={{ color: "rgb(111 112 114)" }} />
        <Link
          to="/signup"
          style={{
            fontWeight: "600",
            fontSize: "1.5rem",
            color: "black",
            textDecoration: "none  ",
          }}
        >
          Don't have an account?
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