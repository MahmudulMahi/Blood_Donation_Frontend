import React from "react";
import CarouselBanner from "../components/Home/CarouselBanner";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import ContactUs from "../components/Home/ContactUs";
import AboutBloodDonation from "./AboutUsSections/AboutBloodDonation";

export default function AboutUs() {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="">
        <CarouselBanner />
      </div>
      <div className="">
        <AboutBloodDonation />
      </div>
      <div className="">
        <ContactUs />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
