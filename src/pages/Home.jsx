import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Navbar from "../components/Home/Navbar";
import CarouselBanner from "../components/Home/CarouselBanner";
import AboutProject from "../components/Home/AboutProject";
import TotalSection from "../components/Home/TotalSection";
import HelpOther from "../components/Home/HelpOther";
import NeedHelpSection from "../components/Home/NeedHelpSection";
import ContactUs from "../components/Home/ContactUs";
import ClientsThink from "../components/Home/ClientsThink";
import MobileApp from "../components/Home/MobileApp";
import Footer from "../components/Home/Footer";
import { useFormik } from "formik";

const AnimatedComponent = ({ children, delay }) => {
  const props = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    config: { duration: 500 },
    delay,
  });

  return <animated.div style={props}>{children}</animated.div>;
};

const Home = () => {
  const [visibleSections, setVisibleSections] = useState({
    carouselBanner: false,
    aboutProject: false,
    totalSection: false,
    helpOther: false,
    needHelpSection: false,
    contactUs: false,
    clientsThink: false,
    mobileApp: false,
    footer: false,
  });

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
  
    const sectionIds = [
      "carouselBanner",
      "aboutProject",
      "totalSection",
      "helpOther",
      "needHelpSection",
      "contactUs",
      "clientsThink",
      "mobileApp",
      "footer",
    ];
  
    const visibleSectionsCopy = { ...visibleSections };
  
    sectionIds.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
  
      if (sectionElement) {
        const sectionOffset = sectionElement.offsetTop;
  
        if (scrollPosition > sectionOffset && !visibleSections[sectionId]) {
          visibleSectionsCopy[sectionId] = true;
          setVisibleSections(visibleSectionsCopy);
        }
      }
    });
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSections]);

  const initialValues = {
    fullName: 'John Doe',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      // handleSubmit(values);
    },
  });

  return (
    <div className="overflow-hidden">
      <Navbar />
      <AnimatedComponent>
        <CarouselBanner id="carouselBanner" />
      </AnimatedComponent>
      <AnimatedComponent delay={visibleSections.aboutProject ? 0 : 1000}>
        <AboutProject id="aboutProject" />
      </AnimatedComponent>
      <AnimatedComponent delay={visibleSections.totalSection ? 0 : 1000}>
        <TotalSection id="totalSection" />
      </AnimatedComponent>
      <AnimatedComponent delay={visibleSections.helpOther ? 0 : 1000}>
        <HelpOther id="helpOther" />
      </AnimatedComponent>
      <AnimatedComponent delay={visibleSections.needHelpSection ? 0 : 1000}>
        <NeedHelpSection id="needHelpSection" />
      </AnimatedComponent>
      <AnimatedComponent delay={visibleSections.contactUs ? 0 : 1000}>
        <ContactUs id="contactUs" />
      </AnimatedComponent>
      <AnimatedComponent delay={visibleSections.clientsThink ? 0 : 1000}>
        <ClientsThink id="clientsThink" />
      </AnimatedComponent>
      <AnimatedComponent delay={visibleSections.mobileApp ? 0 : 1000}>
        <MobileApp id="mobileApp" />
      </AnimatedComponent>
      <AnimatedComponent delay={visibleSections.footer ? 0 : 1000}>
        <Footer id="footer" />
      </AnimatedComponent>
    </div>
  );
};

export default Home;
