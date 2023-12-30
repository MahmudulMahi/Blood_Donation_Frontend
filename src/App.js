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
import HealthAndEligibility from "./pages/Blood/HealthAndEligibility";
import SearchDonorPage from "./pages/SearchDonorPage";
import DonateBlood from "./pages/Blood/DonateBlood";
import KnowTheRisk from "./pages/Blood/KnowTheRisk";

import News from "./pages/News/News";
import LearnAboutBlood from "./pages/LearnAboutBlood";
import CampaignGallery from "./pages/Campaign/CampaignGallery";
import NewsDetails from "./pages/News/NewsDetailsSectons/NewsDetails";
import Stories from "./pages/Stories/Stories";
import FirstTimeBlood from "./pages/Donor/FirstTimeBlood";
import ContactUs from "./components/Home/ContactUs";
import ContactUsPage from "./pages/ContactUsPage";

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
        <Route path="/blood/health-and-eligibility" element={<HealthAndEligibility />}></Route>
        <Route path="/home/search-donor" element={<SearchDonorPage />}></Route>
        <Route path="/donate-blood" element={<DonateBlood />}></Route>
        <Route path="/blood/know-the-risk" element={<KnowTheRisk />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/learn-about-blood" element={<LearnAboutBlood />}></Route>
        <Route path="/campaign-gallery-all" element={<CampaignGallery />}></Route>
        <Route path="/details" element={<NewsDetails />}></Route>
        <Route path="/stories" element={<Stories/>}></Route>
        <Route path="/first-time-blood" element={<FirstTimeBlood/>}></Route>
        <Route path="/contact-us" element={<ContactUsPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
