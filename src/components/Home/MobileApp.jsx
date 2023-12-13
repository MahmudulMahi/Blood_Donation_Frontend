import React from "react";
import bloodImg from "../../assets/blood.png";
import scan from "../../assets/scan.jpeg";
import scan2 from "../../assets/scan-2.jpeg";

export default function MobileApp() {
  return (
    <div className="bg-red-100 shadow-lg rounded-md overflow-hidden sm:h-auto md:h-auto lg:h-100 mt-6 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-1 px-12 py-12">
          <img
            src={scan} // Replace with the actual image source
            alt="Left Image"
            className="rounded-full border-2 border-brandPrimary w-60 h-60"
          />
        </div>
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-1 text-center my-8 mx-4  sm:my-0 md:my-0 lg:my-0 ">
          <h1 className="text-xl font-bold text-brandPrimary text-left pl-8 mt-8">
            Download Mobile App
          </h1>
          <ul className="text-black mt-4 list-disc pl-4 flex flex-col">
            <li className="flex items-center">
              <img src={bloodImg} alt="Blood Icon" className="w-8 h-8 mr-2" />
              <span className="mb-5">Track Your Blood Donations</span>
            </li>
            <li className="flex items-center ">
              <img src={bloodImg} alt="Blood Icon" className="w-8 h-8 mr-2" />
              <span className="mb-5">Stay Updated on Special Promotions</span>
            </li>
            <li className="flex items-center">
              <img src={bloodImg} alt="Blood Icon" className="w-8 h-8 mr-2" />
              <span className="mb-5">Find and Map Local Blood Drives</span>
            </li>
            <li className="flex items-center">
              <img src={bloodImg} alt="Blood Icon" className="w-8 h-8 mr-2" />
              <span className="mb-5">Easy Appointment Scheduling</span>
            </li>
          </ul>

          <div className="mr-52 h-20">
            <button className="bg-red-600 text-white px-4 py-2 rounded-full">
              Download Mobile App
            </button>
          </div>
        </div>
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-1 px-12 py-12">
          <img
            src={scan2} // Replace with the actual image source
            alt="Left Image"
            className="rounded-full border-2 border-brandPrimary w-60 h-60"
          />
        </div>
      </div>
    </div>
  );
}
