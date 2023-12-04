import React from "react";
import ManHospitalBed from "../../assets/ManHospitalBed.png";

const NeedHelpSection = () => {
  return (
    <div
      className="lg:h-[400px] md:h-[400px] h-[1000px] object-fit bg-[#E11B22B2] overflow-hidden lg:mt-[100px] md:mt-[750px] mt-[1200px]"
      style={{
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* start */}
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 md:w-11/12 mx-auto">
        <div className="ml-12 flex">
          <div className="h-[400px] bg-[#EA5F64]">
            <img
              src={ManHospitalBed}
              alt="ManHospitalBed"
              className="object-cover h-[400px] w-[500px]"
            />
          </div>

          <div className="clipPathContainer bg-[#EA5F64] opacity-70 w-28 h-full -ml-[85px] zindex"></div>
        </div>

        <div className="capitalize ">
          <div className="my-24 ">
            <div>
              <h1 className="text-white mt-4 font-bold text-[18px]">
                Name needs your help
              </h1>
              <p className="mt-4 text-white text-justify w-[400px] font-semibold">
                Help patients like Name by Donating? If you want you can make a
                visit to ensure either Your donations need those or not.
              </p>
            </div>

            <div className="flex mt-8">
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
