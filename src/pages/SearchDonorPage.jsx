import React from "react";
import CarouselBanner from "../components/Home/CarouselBanner";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import SearchDonorPageComponent from "../components/Home/SearchDonor/SearchDonorPageComponent";

const SearchDonorPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="">
        <CarouselBanner />
      </div>
      <div className="">
        <SearchDonorPageComponent />
      </div>
      <div className="mt-44">
        <Footer />
      </div>
    </div>
  );
};

export default SearchDonorPage;
