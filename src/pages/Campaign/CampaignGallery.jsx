import React from "react";
import Navbar from "../../components/Home/Navbar";
import CarouselBanner from "../../components/Home/CarouselBanner";
import Footer from "../../components/Home/Footer";
import CampaignGallerPage from "./CampaignGallerPage";
import TitleTopComponent from "../../components/Blood/TitleTopComponent";
import GalleryTab from "./GalleryTab";

export default function CampaignGallery() {
  return (
    <div>
      {" "}
      <div>
        <Navbar />
      </div>
      <div className="">
        <CarouselBanner />
      </div>
      <div className="mx-28">
        <div>
          <TitleTopComponent
            secondTitle={"Campaign"}
            thirdTitle={"Gallery"}
            fourthTitle={"All"}
          />
        </div>{" "}
        <GalleryTab />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
