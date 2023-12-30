import React from "react";
import Navbar from "../components/Home/Navbar";
import CarouselBanner from "../components/Home/CarouselBanner";
import Footer from "../components/Home/Footer";
import ContactUs from "../components/Home/ContactUs";
import TitleTopComponent from "../components/Blood/TitleTopComponent";

export default function ContactUsPage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="">
        <CarouselBanner />
      </div>
      <div className="mx-4 md:mx-10 lg:mx-20 xl:mx-28">
        <TitleTopComponent secondTitle={"Contact"} thirdTitle={"Contact Us"} />
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
