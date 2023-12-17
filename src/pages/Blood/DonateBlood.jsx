import React from "react";
import Navbar from "../../components/Home/Navbar";
import CarouselBanner from "../../components/Home/CarouselBanner";
import Footer from "../../components/Home/Footer";

export default function DonateBlood() {
  return (
    <div>
        <div>
        <Navbar />
      </div>
      <div className="">
        <CarouselBanner />
      </div>
      <div className="">
        Donate Blood component
      </div>
      <div className="mt-44">
        <Footer />
      </div>
    </div>
  );
}
