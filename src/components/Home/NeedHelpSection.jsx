import React from "react";
import ManHospitalBed from "../../assets/ManHospitalBed.png";

const NeedHelpSection = () => {
  return (
    <div
      className="lg:h-[400px] md:h-[400px] h-[680px] object-fit bg-[#E85E63] lg:opacity-90 md:opacity-90 opacity-90 overflow-hidden lg:mt-[120px] md:mt-[750px] mt-[1200px]"
      style={{
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* start */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mx-auto lg:ml-16 md:ml-0 ml-0 lg:mr-20 md:mr-4 mr-2">
        <div className="lg:ml-12 md:ml-12 ml-6 lg:mt-0 md:mt-0 mt-4 mr-0 flex">
          <div className="bg-subbrandPrimary overflow-hidden transition-all duration-500 origin-center hover:origin-top">
            <img
              src={ManHospitalBed}
              alt="ManHospitalBed"
              className="object-cover h-[400px] w-full rounded-bl-xl rounded-tl-xl"
            />
          </div>

          <div className="clipPathContainer bg-[#EA5F64] opacity-70 w-36 h-full lg:-ml-[80px] md:-ml-[65px] -ml-[70px] zindex"></div>
        </div>

        <div className="capitalize lg:m-8 m-0">
          <div className="lg:my-24 md:my-24 my-8 lg:ml-0 md:ml-2 ml-0 ">
            <div>
              <h1 className="text-white mt-4 font-bold text-[18px] lg:text-left md:text-left text-center">
                Name needs your help
              </h1>
              <p className="mt-4 text-white text-justify font-semibold lg:ml-0 md:ml-0 ml-16 lg:mr-36 mr-16">
                Help patients like Name by Donating? If you want you can make a
                visit to ensure either Your donations need those or not.
              </p>
            </div>

            <div className="flex mt-8 lg:justify-start md:justify-start justify-center">
              <button
                className="text-right align-end text-xs text-brandPrimary font-semibold bg-white py-[8px] px-8 rounded-lg"
                type="button"
                data-ripple-light="true"
              >
                Learn more &#8594;
              </button>
            </div>
          </div>
        </div>
        {/* end 1*/}
      </div>
    </div>
  );
};

export default NeedHelpSection;
