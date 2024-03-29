import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import callRedIco from "../../assets/icons/callRedIco.png";
import Rectangle from "../../assets/icons/Rectangle.png";
import DonateBloodCard from "./DonateBloodCard";
import GiveBloodFollowingOption from "./GiveBloodFollowingOption";
import { Link, useLocation } from "react-router-dom";
const DonateBloodPage = () => {
  const location = useLocation();
  return (
    <div className="lg:mx-28">
      <div className="flex flex-col md:flex-row justify-between mt-10   ">
        <div className="lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4">
          <h2 className="flex items-center mx-auto mt-4 text-[16px] font-semibold ">
            <a href="#home">Home</a>{" "}
            <span className="text-red-700">
              {" "}
              <IoIosArrowForward />{" "}
            </span>{" "}
            <a href="#about">About Us</a>{" "}
            <span className="text-red-700">
              {" "}
              <IoIosArrowForward />{" "}
            </span>{" "}
            <a href="#board">Our Board</a>
          </h2>
        </div>
        <div className="flex items-center mt-5">
          <div className="relative">
            <img src={Rectangle} alt="" />
            <p className=" absolute top-3 left-2 text-[#E11B22] text-[16px] font-semibold">
              Connect With Us
            </p>
          </div>
          <div>
            <img src={callRedIco} alt="" className="w-[40px] h-[40px]" />
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to="/donate-blood">
        <button
          type="button"
          className={`outline-none border border-gray-200   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2dark:hover:bg-red-700  w-36 md:mr-10 ${location.pathname === '/donate-blood' ? 'bg-red-700 text-white' : 'bg-white text-black' }`}
          // className="focus:outline-none text-white bg-red-700  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2dark:hover:bg-red-700  w-36 md:mr-10 "
        >
          Urgent
        </button>
        </Link>
        <Link to="/donate-blood/schedule">
        <button
          type="button"
          className={`outline-none border border-gray-200   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2dark:hover:bg-red-700  w-36 md:mr-10 ${location.pathname === '/donate-blood/schedule' ? 'bg-red-700 text-white' : 'bg-white text-black' }`}
        >
          Schedule
        </button>
        </Link>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-4 ">
        <div className="col-span-1  place-content-center lg:place-content-start w-full ">
          <DonateBloodCard></DonateBloodCard>
        </div>
        <div className="col-span-3 ml-7">
          <h2 className="text-lg font-bold mt-5">
            You Can Give Blood in the Following Options
          </h2>
          <GiveBloodFollowingOption></GiveBloodFollowingOption>
        </div>
      </div>
    </div>
  );
};

export default DonateBloodPage;
