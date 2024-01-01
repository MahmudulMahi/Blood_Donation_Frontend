import React from "react";
import Navbar from "../../components/Home/Navbar";
import CarouselBanner from "../../components/Home/CarouselBanner";
import Footer from "../../components/Home/Footer";
import DonateBloodPage from "./DonateBloodPage";
import DonorCarousel from "../../components/Home/Carousel/DonorCarousel";


export default function DonateBlood() {
  return (
    <div>
        <div>
        <Navbar />
      </div>
      <div className="">
        <DonorCarousel />
      </div>
      <div className="mx-24">
        <DonateBloodPage></DonateBloodPage>
      </div> 
      <div className="mt-44">
        <Footer />
      </div>
    </div>
  );
}
