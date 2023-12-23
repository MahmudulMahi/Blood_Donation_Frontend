import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ImageNews from "../../assets/newsDoctors.png";
import ConerImg from "../../assets/Rectangle 660.png";
import Pagination from "./Pagination";

export default function CampaignGallerPage() {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from({ length: 21 }, (_, i) => 2020 + i);

  const handleSearch = () => {
    // Implement your search functionality here
    console.log("Search clicked!");
    console.log("Selected Day:", selectedDay);
    console.log("Selected Month:", selectedMonth);
    console.log("Selected Year:", selectedYear);
  };

  return (
    <div>
      {/* Calendar start */}
      <div className="flex justify-end space-x-3 p-2 mt-2">
        <select
          className="border p-2 rounded-lg focus:outline-none"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          <option value="" disabled>
            Day
          </option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <select
          className="border p-2 rounded-lg focus:outline-none"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="" disabled>
            Month
          </option>
          {months.map((month, index) => (
            <option key={index} value={index + 1}>
              {month}
            </option>
          ))}
        </select>

        <select
          className="border p-2 rounded-lg focus:outline-none"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="" disabled>
            Year
          </option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <button
          className="bg-white text-brandPrimary p-3 rounded focus:outline-none"
          onClick={handleSearch}
        >
          <FaSearch />
        </button>
      </div>
      {/* Calendar End */}
      {/* DATE DESIGN */}
      <div className="flex items-center space-x-4 mt-5 mb-2">
        <div className="text-sm font-bold p-2 border rounded-lg shadow-lg">
          15/07/2022
        </div>
        <div className="flex-grow border-t text-black"></div>
      </div>
      {/* Date End */}
      {/* Gallery Start */}
      <div className="grid grid-cols-4 gap-6 mt-2 mb-2">
        <div className="shadow-2xl bg-white">
          <img
            className=" top-0 left-0 h-8 w-8 z-40 relative"
            src={ConerImg}
            alt=""
          />
          <img className="-mt-8" src={ImageNews} alt=""></img>
          <p className="bg-red-600  py-2 text-sm rounded-b-md text-center text-white">
            [For Dev]shadow only use when mouse point the specific box
          </p>
        </div>
        <div className="shadow-2xl bg-white">
          <img
            className=" top-0 left-0 h-8 w-8 z-40 relative"
            src={ConerImg}
            alt=""
          />
          <img className="-mt-8" src={ImageNews} alt=""></img>
          <p className="bg-red-600  py-2 text-sm rounded-b-md text-center text-white">
            [For Dev]shadow only use when mouse point the specific box
          </p>
        </div>
        <div className="shadow-2xl bg-white">
          <img
            className=" top-0 left-0 h-8 w-8 z-40 relative"
            src={ConerImg}
            alt=""
          />
          <img className="-mt-8" src={ImageNews} alt=""></img>
          <p className="bg-white  py-2 text-sm rounded-b-md text-center text-black">
            World Blood Donor Day 2023
          </p>
        </div>
        <div className="shadow-2xl bg-white">
          <img
            className=" top-0 left-0 h-8 w-8 z-40 relative"
            src={ConerImg}
            alt=""
          />
          <img className="-mt-8" src={ImageNews} alt=""></img>
          <p className="bg-white  py-2 text-sm rounded-b-md text-center text-black">
            World Blood Donor Day 2023
          </p>
        </div>
      </div>
      {/* Gallery End */}
      {/* DATE DESIGN */}
      <div className="flex items-center space-x-4 mt-10 mb-2">
        <div className="text-sm font-bold p-2 border rounded-lg shadow-lg">
          22/07/2022
        </div>
        <div className="flex-grow border-t text-black"></div>
      </div>
      {/* Date End */}
      {/* Gallery Start */}
      <div className="grid grid-cols-4 gap-6 mt-2 mb-8">
        <div className="shadow-2xl bg-white">
          <img
            className=" top-0 left-0 h-8 w-8 z-40 relative"
            src={ConerImg}
            alt=""
          />
          <img className="-mt-8" src={ImageNews} alt=""></img>
          <p className="bg-red-600  py-2 text-sm rounded-b-md text-center text-white">
            [For Dev]shadow only use when mouse point the specific box
          </p>
        </div>
        <div className="shadow-2xl bg-white">
          <img
            className=" top-0 left-0 h-8 w-8 z-40 relative"
            src={ConerImg}
            alt=""
          />
          <img className="-mt-8" src={ImageNews} alt=""></img>
          <p className="bg-red-600  py-2 text-sm rounded-b-md text-center text-white">
            [For Dev]shadow only use when mouse point the specific box
          </p>
        </div>
        <div className="shadow-2xl bg-white">
          <img
            className=" top-0 left-0 h-8 w-8 z-40 relative"
            src={ConerImg}
            alt=""
          />
          <img className="-mt-8" src={ImageNews} alt=""></img>
          <p className="bg-white  py-2 text-sm rounded-b-md text-center text-black">
            World Blood Donor Day 2023
          </p>
        </div>
        <div className="shadow-2xl bg-white">
          <img
            className=" top-0 left-0 h-8 w-8 z-40 relative"
            src={ConerImg}
            alt=""
          />
          <img className="-mt-8" src={ImageNews} alt=""></img>
          <p className="bg-white  py-2 text-sm rounded-b-md text-center text-black">
            World Blood Donor Day 2023
          </p>
        </div>
        <div className="shadow-2xl bg-white">
          <img
            className=" top-0 left-0 h-8 w-8 z-40 relative"
            src={ConerImg}
            alt=""
          />
          <img className="-mt-8" src={ImageNews} alt=""></img>
          <p className="bg-red-600  py-2 text-sm rounded-b-md text-center text-white">
            [For Dev]shadow only use when mouse point the specific box
          </p>
        </div>
        <div className="shadow-2xl bg-white">
          <img
            className=" top-0 left-0 h-8 w-8 z-40 relative"
            src={ConerImg}
            alt=""
          />
          <img className="-mt-8" src={ImageNews} alt=""></img>
          <p className="bg-red-600  py-2 text-sm rounded-b-md text-center text-white">
            [For Dev]shadow only use when mouse point the specific box
          </p>
        </div>
        <div className="shadow-2xl bg-white">
          <img
            className=" top-0 left-0 h-8 w-8 z-40 relative"
            src={ConerImg}
            alt=""
          />
          <img className="-mt-8" src={ImageNews} alt=""></img>
          <p className="bg-white  py-2 text-sm rounded-b-md text-center text-black">
            World Blood Donor Day 2023
          </p>
        </div>
        <div className="shadow-2xl bg-white">
          <img
            className=" top-0 left-0 h-8 w-8 z-40 relative"
            src={ConerImg}
            alt=""
          />
          <img className="-mt-8" src={ImageNews} alt=""></img>
          <p className="bg-white  py-2 text-sm rounded-b-md text-center text-black">
            World Blood Donor Day 2023
          </p>
        </div>
      </div>
      {/* Gallery End */}
      <div className="mb-5">
        <Pagination totalPages={20}/>
      </div>
    </div>
  );
}
