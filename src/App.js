import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import RequestBlood from "./pages/RequestBlood";
import OurTeam from "./pages/AboutUs/Our Team/OurTeam";
import ISOCertified from "./pages/AboutUs/Our Team/ISOCertified";
import AboutBlood from "./pages/AboutBlood";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/request-blood" element={<RequestBlood/>}></Route>
        <Route path="/about-blood" element={<AboutBlood/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/our-team" element={<OurTeam />}></Route>
        <Route path="/iso-2008-certified" element={<ISOCertified />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
       
      </Routes>
    </Router>
  );
}

export default App;
