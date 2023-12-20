import React from "react";
import Navbar from "../../components/Home/Navbar";
import CarouselBanner from "../../components/Home/CarouselBanner";
import Footer from "../../components/Home/Footer";
import DonateBloodPage from "./DonateBloodPage";

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
        <DonateBloodPage></DonateBloodPage>
      </div>
      <div className="mt-44">
        <Footer />
      </div>
    </div>
  );
}
