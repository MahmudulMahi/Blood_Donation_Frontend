import navEarthLogoWhite from "../../assets/icons/navEarthLogoWhite.png";
import ion_location from "../../assets/icons/ion_location-outline.png";
import mdi_email from "../../assets/icons/mdi_email-fast-outline.png";
import navEarthLogo from "../../assets/icons/navEarthLogo.png";
import instagram from "../../assets/icons/ei_sc-instagram.png";
import twitter from "../../assets/icons/formkit_twitter.png";
import pinterest from "../../assets/icons/bi_pinterest.png";
import facebook from "../../assets/icons/bi_facebook.png";
import gg_phone from "../../assets/icons/gg_phone.png";
import React, { useState, useEffect } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import logo from "../../assets/mainLogo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    { link: "Home", path: "/", id: 1 },
    {
      link: "About Us",
      path: "",
      id: 2,
      optionList: [
        { name: "About", path: "/about" },
        { name: "Our Team", path: "/our-team" },
        { name: "ISO 2008 Certified", path: "/iso-2008-certified" },
      ],
    },
    {
      link: "Blood",
      path: "",
      id: 3,
      optionList: [
        { name: "Request Blood", path: "/request-blood", id: 1 },
        { name: "About Blood", path: "/about-blood", id: 2 },
        // { name: "Why Give Blood", path: "/about", id: 3 },
        { name: "Learn About Blood", path: "/learn-about-blood", id: 4 },
        {
          name: "Health And Eligibility",
          path: "/blood/health-and-eligibility",
          id: 5,
        },
        {
          name: "Know The Risks",
          path: "/blood/know-the-risk",
          id: 6,
        },
      ],
    },
    {
      link: "Donor",
      path: "",
      id: 4,
      optionList: [
        { name: "Donate Blood", path: "/donate-blood", id: 1 },
        { name: "First Time Blood Donation", path: "/first-time-blood", id: 2 },
      ],
    },
    {
      link: "Campaign",
      path: "",
      id: 5,
      optionList: [
        { name: "News", path: "/news", id: 1 },
        // { name: "Event", path: "/.." },
        { name: "Gallery", path: "/campaign-gallery-all", id: 2 },
        { name: "Stories", path: "/stories", id: 3 },
      ],
    },

    {
      link: "Contact",
      path: "/contact-us",
      id: 6,
    },
    {
      link: "Login",
      path: "/login",
      id: 7,
    },
  ];

  const [activeModal, setActiveModal] = useState(null);

  const openModal = (id) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  console.log("Active Modal", activeModal);
  const index = 1;

  return (
    <div className="w-full md:bg-transparent  fixed top-0 left-0 right-0 inline-block zindexnav ">
      <div className="h-full ">
        {/* start */}
        <div
          className={`hidden lg:grid lg:grid-cols-12  md:grid md:grid-cols-12 items-center lg:bg-brandPrimary md:bg-[#242424] bg-[#242424] h-6  ${
            isSticky
              ? "sticky top-0 left-0 right-0 bg-[#242424] duration-300"
              : "bg-[#242424]"
          }`}
        >
          <div className="col-span-9">
            <div
              className={`hidden lg:grid lg:grid-cols-12 md:grid md:grid-cols-12 items-center bg-[#242424] h-6 ${
                isSticky
                  ? "sticky top-0 left-0 right-0 bg-[#242424] duration-300"
                  : "bg-[#242424]"
              }`}
            >
              <div
                className="col-span-4 text-white flex items-left justify-left lg:pl-28 md:pl-12 pl-0"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "11px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                <img src={gg_phone} alt="" className="text-white w-3 h-3" />
                <p className="ml-[13px]">+12736781789</p>
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
                <img src={mdi_email} alt="" className="text-white w-3 h-3" />
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
                <img src={ion_location} alt="" className="text-white w-3 h-3" />
                <p className="ml-2">demo,demo,,demo,demo,demo,demo</p>
              </div>
            </div>
          </div>
          <div
            className={`col-span-3 hidden lg:grid lg:grid-cols-12 md:grid md:grid-cols-12 items-right bg-brandPrimary h-6 lg:pr-28 md:pr-0 pr-0 ${
              isSticky
                ? "sticky top-0 left-0 right-0 bg-brandPrimary duration-300"
                : ""
            }`}
          >
            <div
              className="col-span-12 text-white flex items-center justify-center space-x-3  lg:ml-[115px]  md:ml-0 ml-0"
              style={{
                fontFamily: "Poppins",
                fontSize: "11px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              <a href="/">
                <img src={facebook} alt="Facebook" className="w-3 h-3" />
              </a>
              <a href="/">
                <img src={twitter} alt="Twitter" className="w-3 h-3" />
              </a>
              <a href="/">
                <img src={instagram} alt="Instagram" className="w-3 h-3" />
              </a>
              <a href="/">
                <img src={pinterest} alt="Printerest" className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar START */}
      <div>
        <header className="zindexnav h-[50px] bg-white ">
          <nav
            className={`lg:px-14 md:px-14 px-14 h-full ${
              isSticky
                ? "sticky top-0 left-0 right-0 bg-[white] duration-300 rounded-bl-lg shadow-md"
                : `border-b-0 ${activeModal ? "border-b-0" : ""}`
            }`}
          >
            <div className="flex justify-between items-center text-base lg:gap-8 md:gap-0 gap-8 h-full lg:px-[55px] md:px-0 px-0 ">
              <div
                className="border-[1px] border-gray-400 h-full pl-2 pr-2 overflow-hidden"
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
                  {/* <span className="text-[#263238]">Demo</span> */}
                </a>
              </div>

              {/* nav itmes for large devices */}
              <ul className="md:flex hidden font-semibold h-full text-sm gap-5">
                <div className="flex justify-center items-center cursor-pointer">
                  {navItems.map(({ id, link, path }, index) => (
                    <div
                      key={path}
                      className="relative grouph-full"
                      onMouseEnter={() => openModal(id)}
                      onMouseLeave={closeModal}
                    >
                      <Link
                        to={path}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        className={`block text-gray-900 hover:text-brandPrimary lg:px-4 md:px-2 px-4 lg:py-4 md:py-4 py-5 border-r rounded-b-sm ${
                          index < navItems.length - 1 ? "" : "border-r-0"
                        } LinkWithBorder`}
                        style={{
                          cursor: "pointer",
                          display: "inline-block",
                          lineHeight: "1rem",
                        }}
                      >
                        {link}
                      </Link>

                      {/* Modal Start */}
                      {activeModal === id && (
                        <div>
                          {navItems?.[activeModal - 1]?.optionList && (
                            <div
                              className={`absolute transform -translate-x-2/2 top-full mt-[0px] ${
                                index === 1
                                  ? "lg:-left-4 md:-left-0 -left-4"
                                  : ""
                              }`}
                              style={{ width: "calc(300% - 27px)" }}
                            >
                              <div className="bg-white max-w-md mx-auto rounded-b-sm w-56 border border-t-0 shadow-xl">
                                <ul className="p-3 ">
                                  {navItems?.[activeModal - 1]?.optionList?.map(
                                    (val, index) => (
                                      <li
                                        className="hover:bg-red-200 py-1 pl-1 text-xs rounded-sm"
                                        key={val.path}
                                      >
                                        <button
                                          className={`text-gray-900 hover:text-brandPrimary ${
                                            index > 0 ? "mt-2" : ""
                                          }`}
                                          onClick={() => {
                                            navigate(val.path);
                                            closeModal();
                                          }}
                                        >
                                          {val?.name}
                                        </button>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Modal End */}
                    </div>
                  ))}
                </div>

                <div className="hidden lg:flex md:flex items-center">
                  <Link
                    to="/home/search-donor"
                    className="hidden lg:flex md:flex items-center hover:text-gray-900"
                  >
                    <button className="bg-brandPrimary border font-normal hover:border-black hover:bg-brandPrimary rounded-full text-white py-1 px-2 transition-all duration-300">
                      Search Donor
                    </button>
                  </Link>
                </div>
              </ul>

              {/* button's for large devices */}

              <div className="space-x-6 hidden lg:flex items-center">
                <div
                  className="rounded-full hover:bg-brandPrimary p-1"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <img
                    src={isHovered ? navEarthLogoWhite : navEarthLogo}
                    alt="logo"
                    className="w-6 inline-block items-center rounded-full"
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
              className={`space-y-4 px-4 mt-[70px] py-7 bg-[#e11b22b3] overflow-y-auto ${
                isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
              }`}
            >
              {navItems.map(({ link, path, optionList, id }) => (
                <div key={id} className="relative group">
                  <Link
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    className="block text-gray90 text-white first:font-medium text-center hover:border-r hover:border-white"
                  >
                    {link}
                  </Link>
                  {optionList && optionList.length > 0 && (
                    <div className="left-0 top-full bg-[#e11b22b3] py-2 px-4 mt-2 rounded-md shadow-lg max-h-48 overflow-y-auto">
                      {optionList.map(
                        ({ name, path: optionPath, id: optionId }) => (
                          <Link
                            key={optionId}
                            to={optionPath}
                            className="block text-white hover:text-gray90 py-1"
                          >
                            {name}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
