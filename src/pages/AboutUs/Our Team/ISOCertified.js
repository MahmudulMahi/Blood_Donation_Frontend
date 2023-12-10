import React from "react";
import Navbar from "../../../components/Home/Navbar";
import CarouselBanner from "../../../components/Home/CarouselBanner";
import Footer from "../../../components/Home/Footer";
import IsoCertificateSections from "./IsoCertificateSections";

const ISOCertified = () => {
  return (
    <div>
      <Navbar />
      <CarouselBanner />
      {/* Page Component */}
      <IsoCertificateSections></IsoCertificateSections>
      <Footer />
    </div>
  );
};

export default ISOCertified;
