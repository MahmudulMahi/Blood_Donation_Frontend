import React from "react";
import carouselBanner from "../../../assets/carouselBanner.jpg";
import location from "../../../assets/ion_location.svg";
import loading from "../../../assets/eos-icons_loading.svg";
import location2 from "../../../assets/ion_location2.svg";

export default function DonorCarousel() {
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
          <div className="h-[500px]  items-start  justify-start ml-32 mr-32 text-white -mt-10"></div>
          <div className="flex justify-center ml-32 mr-32 text-white mb-20 -mt-60 ">
          <div className="bg-gray-100 bg-opacity-70 p-3 rounded flex items-center ml-2">
              {/* New input field and search button */}
              <div className="bg-white  rounded">
                {/* Input field for zip code */}
                <input
                  type="text"
                  placeholder="Enter your zip code"
                  className="text-white px-4 py-2 border-none rounded"
                />
              </div>
              {/* Search button */}
              <button className="bg-brandPrimary text-white px-4 py-2 rounded ml-6">
                Search
              </button>
            </div>
            <div className="ml-4 text-white mt-6">
            Or
            </div>
            <div className="bg-gray-100 bg-opacity-70 p-3 rounded flex items-center ml-4">
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
