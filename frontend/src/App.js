import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

import Contact from "./pages/contact/Contact";
import Dashboard from "./dashboard/Dashboard";
import Service1 from "./services/service1/Service1";
import Service2 from "./services/service2/Service2";
import Service3 from "./services/service3/Service3";
import Login from "./pages/loginandsignup/Login";
import Signup from "./pages/loginandsignup/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/service1" element={<Service1 />} />
                <Route path="/service2" element={<Service2 />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
