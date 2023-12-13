import React from "react";
import TitleTopComponent from "../../Blood/TitleTopComponent";

const SearchDonorPageComponent = () => {
  return (
    <div className="mx-28">
      <div>
        <TitleTopComponent secondTitle={"Blood"} thirdTitle={"Request Blood"} />
      </div>

      <div>
        <h2 className="font-bold text-brandPrimary text-3xl">
          Personalized Donor
        </h2>
      </div>

      <div className="my-4">
        <hr className="border-t-[2px] border-[#44444480]" />
      </div>

      <div className="grid grid-cols-12 gap-4 border border-black h-96">
        <div className="col-span-3 border-black ">
          <div className="border border-blue-800 h-80 mr-[25px] mt-6 rounded-xl shadow-top-right-left-bottom-lg">
            <div className="h-full border border-pink-600 mx-4">
              <div className="ml-6">
                <p className="font-bold text-[#444]">Area</p>
              </div>

              <div className="my-4">
                <hr className="border-t-[1px] border-[#44444480]" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-9 border border-red-700"></div>
      </div>
    </div>
  );
};

export default SearchDonorPageComponent;
