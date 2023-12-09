import React, { useEffect } from "react";
import Navbar from "../components/Home/Navbar";
import CarouselBanner from "../components/Home/CarouselBanner";

import TotalReviews from "../components/Home/TotalReviews";

import AboutProject from "../components/Home/AboutProject";

import HelpOther from "../components/Home/HelpOther";
import TotalSection from "../components/Home/TotalSection";
import NeedHelpSection from "../components/Home/NeedHelpSection";
import ContactUs from "../components/Home/ContactUs";
import ClientsThink from "../components/Home/ClientsThink";
import MobileApp from "../components/Home/MobileApp";
import Footer from "../components/Home/Footer";

import InputFields from "../components/InputFields/InputFields";
import { useFormik } from "formik";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this effect runs only once after mount



  const initialValues = {
    fullName: 'John Doe',
    // Add more fields and their initial values as needed
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      // handleSubmit(values);
    },
  });
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="">
        <CarouselBanner />
      </div>
      <div className="">
        <AboutProject />
      </div>
      <div className="">
        <TotalSection />
      </div>
      <div className="">
        <HelpOther />
      </div>
      <div className="">
        <NeedHelpSection />
      </div>
      <div className="mt-12">
        <ContactUs />
      </div>
      <div className="mt-12">
        <ClientsThink />
      </div>
      <div className="mt-12">
        <MobileApp />
      </div>
      <div className="">
        <Footer />
      </div>

      <InputFields
                      type="text"
                      placeholder="Enter full name"
                      onChange={formik.handleChange}
                    />
    </div>

    
  );
};

export default Home;
