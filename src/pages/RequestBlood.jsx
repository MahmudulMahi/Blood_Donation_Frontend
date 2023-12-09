import React from "react";
import CarouselBanner from "../components/Home/CarouselBanner";
import RequestBloodPage from "./Blood/RequestBloodPage";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

const RequestBlood = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="">
        <CarouselBanner />
      </div>
      <div className="">
        <RequestBloodPage />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default RequestBlood;
