import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./pages/header/Navbar";
import Footer from "./pages/footer/Footer";
import Contact from "./pages/contact/Contact";
import Dashboard from "./dashboard/Dashboard";
import Service1 from "./services/service1/Service1";
import Service2 from "./services/service2/Service2";
import Service3 from "./services/service3/Service3";

function App() {
  // const [TITLE,setTITLE]=useState("We Work For People In Need");
  // setInterval(()=>{
  //   if(TITLE==="We Work For People In Need"){
  //     setTITLE("Shayak Foundation");
  //     document.title=TITLE;
  //   }
  //   else if(TITLE==="Shayak Foundation"){
  //     setTITLE("Shayak Foundation");
  //     document.title=TITLE;
  //   }
  // },1000);

  const [TITLE, setTITLE] = useState("Sahayak Foundation");

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (TITLE === "Sahayak Foundation") {
        setTITLE("We Work For People In Need");
      } else {
        setTITLE("Sahayak Foundation");
      }
    }, 5000);

    return () => clearTimeout(intervalId);
  }, [TITLE]);

  useEffect(() => {
    document.title = TITLE;
  }, [TITLE]);

  return (
    <Router>
      <Routes>
        <Route path="dashboard/*" element={<Dashboard />} /> {/* for route dashboard and all components inside it*/}
        <Route
          path="/*"  /* for all components having link like /somethingh*/
          element={
            <>
              <Navbar />
              <Routes>
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
              <Footer />
            </>
          }
        />
        <Route
          path="/service/*"
          element={
            <Routes>
              {/* <Route path="/service1" element={<Service1 />} />
        <Route path="/service2" element={<Service2 />} />
        <Route path="/service3" element={<Service3 />} /> */}
            </Routes>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
