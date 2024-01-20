import React from "react";
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
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} /> // /* means any
        route after /dashboard will be accepted after dashboard if you dont
        mention this it will only accept / .if you mention address as /emergency
        it wont accept as only / is accepted
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </>
          }
        />
        <Route
          path="/service/*"
          element={
            <Routes>
              <Route path="/service1" element={<Service1 />} />
              <Route path="/service2" element={<Service2 />} />
              <Route path="/service3" element={<Service3 />} />
            </Routes>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
