import React from "react";
import Navbar from "../components/Home/Navbar";
import CarouselBanner from "../components/Home/CarouselBanner";
import AboutProject from "../components/Home/AboutProject";
import ConnectWithUs from "../components/Home/ConnectWithUs";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="">
        {" "}
        <CarouselBanner />
      </div>
      <div className="">
        {" "}
        <AboutProject />
      </div>
      {/* <div><ConnectWithUs/></div> */}

      <div className="">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
