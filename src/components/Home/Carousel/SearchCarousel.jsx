import React from "react";
import carouselBanner from "../../../assets/carouselBanner.jpg";
import location from "../../../assets/ion_location.svg";
import loading from "../../../assets/eos-icons_loading.svg";
import location2 from "../../../assets/ion_location2.svg"

export default function SearchCarousel() {
  return (
    <div className="">
      <div className="w-full pt-[52px] bg-white">
        <div
          className="pt-0 object-fit border border-black w-full"
          style={{
            backgroundImage: `url(${carouselBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
        >
          <div className="h-[500px] flex flex-col items-start  justify-start ml-32 mr-32 text-white -mt-10">
            <div className="text-xl font-bold mb-2 mt-60">
              Check Donor Near You
            </div>

            <div className="bg-gray-100 bg-opacity-70 p-4 w-full rounded flex items-center space-x-4">
              {/* Blood Group Dropdown */}
              <select className="border rounded p-2 focus:outline-none  focus:border-brandPrimary w-80 text-black">
                <option value="" disabled selected hidden>
                  Enter Blood Group
                </option>
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                {/* Add more blood group options as needed */}
              </select>

              {/* District Dropdown */}
              <select className="border rounded p-2 focus:outline-none focus:border-brandPrimary w-56 text-black">
                <option value="" disabled selected hidden>
                  Select District
                </option>
                <option>District 1</option>
                <option>District 2</option>
                <option>District 3</option>
                {/* Add more district options as needed */}
              </select>

              {/* Hospital Name Dropdown */}
              <select className="border rounded p-2 focus:outline-none focus:border-brandPrimary w-56 text-black">
                <option value="" disabled selected hidden>
                  Hospital Name
                </option>
                <option>Hospital 1</option>
                <option>Hospital 2</option>
                <option>Hospital 3</option>
                {/* Add more hospital options as needed */}
              </select>

              {/* Range Dropdown */}
              <select className="border rounded p-2 focus:outline-none focus:border-brandPrimary w-56 text-black">
                <option value="" disabled selected hidden>
                  Range N
                </option>
                <option>0-5 km</option>
                <option>5-10 km</option>
                <option>10-20 km</option>
                {/* Add more range options as needed */}
              </select>

              {/* Search Now Button */}
              <button className="bg-brandPrimary text-white rounded p-2">
                Search Now
              </button>
            </div>
          </div>
          <div className="flex justify-end ml-32 mr-32 text-white mb-20 -mt-28">
            <div className="bg-gray-100 bg-opacity-70 p-3 rounded flex items-center">
              <div className="bg-brandPrimary p-2 rounded">
                <img
                  src={location}
                  alt="location"
                  className="w-8 h-8 border-2 border-brandPrimary rounded"
                />
              </div>
            </div>
            <div className="ml-2 text-white mt-6">
              Click Here To Open Your Location
            </div>
            <div className="bg-gray-100 bg-opacity-70 p-3 rounded flex items-center ml-2">
              <div className="bg-brandPrimary p-2 rounded">
                <img
                  src={loading}
                  alt="location"
                  className="w-8 h-8 border-2 border-brandPrimary rounded"
                />
              </div>
            </div>
            <div className="bg-gray-100 bg-opacity-70 p-3 rounded flex items-center ml-3">
              <div className="bg-white p-2 rounded">
                <img
                  src={location2}
                  alt="location"
                  className="w-8 h-8 border-2 border-white rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div
          className="bg-[#e11b22b3] h-10 w-full -mt-[10px] text-white overflow-hidden"
          style={{
            fontFamily: "Poppins",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              whiteSpace: "nowrap",
              animation: "scrollText 60s linear infinite",
            }}
          >
            Note: To donate blood you have to be more than 16 years old. Note:
            To donate blood you have to be more than 16 years old. Note: To
            donate blood you have to be more than 16 years old.
          </p>
        </div>
      </div>
    </div>
  );
}
