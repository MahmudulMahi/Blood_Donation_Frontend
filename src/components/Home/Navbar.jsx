import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import navEarthLogo from "../../assets/icons/navEarthLogo.png";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import gg_phone from "../../assets/icons/gg_phone.png";
import mdi_email from "../../assets/icons/mdi_email-fast-outline.png";
import ion_location from "../../assets/icons/ion_location-outline.png";
import facebook from "../../assets/icons/bi_facebook.png";
import twitter from "../../assets/icons/formkit_twitter.png";
import instagram from "../../assets/icons/ei_sc-instagram.png";
import pinterest from "../../assets/icons/bi_pinterest.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  //navItems array
  const navItems = [
    { link: "Home", path: "home" },
    { link: "About Us", path: "aboutUs" },
    { link: "Blood", path: "blood" },
    { link: "Donor", path: "donor" },
    { link: "Campaign", path: "campaign" },
    { link: "Contact", path: "contact" },
  ];
  return (
    <div className="w-full md:bg-transparent fixed top-0 left-0 right-0 inline-block zindexnav">
      <div className="h-full ">
        {/* start */}
        <div
          className={`hidden lg:grid lg:grid-cols-12 items-center bg-[#242424] h-8 ${
            isSticky
              ? "sticky top-0 left-0 right-0 bg-[#242424] duration-300"
              : "bg-[#242424]"
          }`}
        >
          <div className="col-span-9">
            <div
              className={`hidden lg:grid lg:grid-cols-12 items-center bg-[#242424] h-8 ${
                isSticky
                  ? "sticky top-0 left-0 right-0 bg-[#242424] duration-300"
                  : "bg-[#242424]"
              }`}
            >
              <div
                className="col-span-4 text-white flex items-center justify-center"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "11px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                <img src={gg_phone} alt="" className="text-white w-4 h-4" />
                <p className="ml-2">+12736781789</p>
              </div>

              <div
                className="col-span-4 text-white flex items-center justify-center border-l border-white"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "11px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                <img src={mdi_email} alt="" className="text-white w-4 h-4" />
                <p className="ml-2">blooddonate217@gmail.com</p>
              </div>

              <div
                className="col-span-4 text-white flex items-center justify-center border-l border-white"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "11px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                <img src={ion_location} alt="" className="text-white w-4 h-4" />
                <p className="ml-2">
                  demo,demo,,demo,demo,demo,demo,,demo,demo
                </p>
              </div>
            </div>
          </div>
          <div
            className={`col-span-3 hidden lg:grid lg:grid-cols-12 items-center bg-brandPrimary h-8 ${
              isSticky
                ? "sticky top-0 left-0 right-0 bg-brandPrimary duration-300"
                : ""
            }`}
          >
            <div
              className="col-span-12 text-white flex items-center justify-center space-x-3"
              style={{
                fontFamily: "Poppins",
                fontSize: "11px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              <a href="/">
                <img src={facebook} alt="Facebook" className="w-4 h-4" />
              </a>
              <a href="/">
                <img src={twitter} alt="Twitter" className="w-4 h-4" />
              </a>
              <a href="/">
                <img src={instagram} alt="Instagram" className="w-4 h-4" />
              </a>
              <a href="/">
                <img src={pinterest} alt="Printerest" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar */}

      <div>
        <header className="zindexnav h-[70px] bg-white">
          <nav
            className={`lg:px-14 px-14 h-full ${
              isSticky
                ? "sticky top-0 left-0 right-0 bg-[white] duration-300"
                : ""
            }`}
          >
            <div className="flex justify-between items-center text-base gap-8 h-full ">
              <div
                className="border-[1px] border-black h-[70px] pl-2 pr-2"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a
                  href="/"
                  className="text-2xl font-semibold flex items-center space-x-3"
                >
                  <div className="">
                    <img
                      src={logo}
                      alt="logo"
                      className="w-16 h-16 inline-block items-center"
                    />
                  </div>
                  <span className="text-[#263238]">Demo</span>
                </a>
              </div>

              {/* nav itmes for large devices */}
              <ul className="md:flex space-x-6 hidden font-semibold">
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {navItems.map(({ link, path }, index) => (
                    <Link
                      to={path}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      key={path}
                      className={`block text-gray90 hover:text-brandPrimary pl-4 pr-4 pt-[26px] pb-[26px] border-r ${
                        index < navItems.length - 1 ? "" : ""
                      } LinkWithBorder`}
                      style={{
                        cursor: "pointer",
                        display: "inline-block",
                        lineHeight: "1rem",
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </div>

                <div className="hidden lg:flex items-center">
                  <a
                    href="/"
                    className="hidden lg:flex items-center hover:text-gray-900"
                  >
                    <button className=" bg-brandPrimary border font-normal hover:border-black hover:bg-brandPrimary rounded-full text-white py-2 px-4 transition-all duration-300">
                      Search Donor
                    </button>
                  </a>
                </div>
              </ul>

              {/* button's for large devices */}

              <div className="space-x-6 hidden lg:flex items-center">
                <div className="rounded-full hover:bg-red-100 p-1">
                  <img
                    src={navEarthLogo}
                    alt="logo"
                    className="w-6 inline-block items-center"
                  />
                </div>
                <div>
                  <div className="w-full bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group">
                    <div className="flex flex-col gap-1.5 overflow-hidden">
                      <span className="w-8 h-[2px] bg-textGrey inline-block translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-brandPrimary"></span>
                      <span className="w-8 h-[2px] bg-textGrey inline-block group-hover group-hover:bg-brandPrimary duration-300"></span>
                      <span className="w-8 h-[2px] bg-textGrey inline-block translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-brandPrimary"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu button for only mobile device */}
              <div className="md:hidden">
                <button
                  className="text-neutralDGrey focus:outline-none focus:text-gray-500"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? (
                    <FaXmark className="h-6 w-6" />
                  ) : (
                    <FaBars className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            {/* nav items for mobile devices */}
            <div
              className={`space-y-4 px-4 mt-[70px] py-7 bg-[#e11b22b3] ${
                isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
              }`}
            >
              {navItems.map(({ link, path }) => (
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={path}
                  className="block text-gray90 text-white first:font-medium text-center hover:border-r hover:border-white"
                >
                  {link}
                </Link>
              ))}
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
