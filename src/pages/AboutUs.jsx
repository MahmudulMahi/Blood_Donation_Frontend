import React from "react";
import CarouselBanner from "../components/Home/CarouselBanner";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import AboutFounder from "../components/About/AboutFounder";

export default function AboutUs() {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="">
        <CarouselBanner />
      </div>
      <div>
        <AboutFounder></AboutFounder>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
