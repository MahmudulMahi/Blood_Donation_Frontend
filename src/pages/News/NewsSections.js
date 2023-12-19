import TitleTopComponent from "../../components/Blood/TitleTopComponent";
import React, { useEffect } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css"; // Choose a theme that fits your design
import "flatpickr/dist/l10n/default";
import { useState } from "react";

function NewsSections() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (dates) => {
    setSelectedDate(dates[0]);
  };

  return (
    <div className="mx-28">
      <div>
        <TitleTopComponent
          secondTitle={"Blood"}
          thirdTitle={"Learn About Blood"}
        />
      </div>

      <div className="mt-6">
        <button className="bg-brandPrimary text-[18px] text-white py-3 px-4 rounded-lg ml-0">
          Why do We Campaign?
        </button>
        <div className="about-blood-div-border pb-8 -mt-6 rounded-lg">
          <div className="p-8 pb-0 text-[12px] pt-10">
            <p>
              We need to make sure there is the right blood available for
              patients throughout the year. To do this we run local and national
              campaigns to encourage:{" "}
            </p>
          </div>

          <div className="pl-8 pr-8 pt-2 text-[12px]">
            <li className="text-justify">
              people to sign up as blood donors and start saving lives
            </li>
            <li>
              existing donors to continue donating to help us keep blood stocks
              healthy
            </li>
            <li>Organize a World Blood Donor Day celebration.</li>
            <li>
              Improve the infrastructure for blood donation and blood donor
              care.
            </li>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className="text-center">
        <button className="bg-brandPrimary text-[18px] text-white py-3 px-8 rounded-lg  items-center ml-auto mr-auto ">
          News
        </button>

        <hr className="-mt-6"></hr>
      </div>

      <div className="flex justify-between">
        <div></div>

        <div className=" justify-end ">
          <label
            htmlFor="datetimePicker"
            className="block text-sm font-medium text-gray-700"
          >
            Select Date and Time
          </label>
          <Flatpickr
            id="datetimePicker"
            className="form-input p-2 border rounded mt-1"
            value={selectedDate}
            onChange={handleDateChange}
            options={{
              enableTime: true,
              dateFormat: "Y-m-d H:i",
              // Add more options as needed
            }}
          />
        </div>
      
      </div>


      <div className="">
        <button className="bg-white text-[18px] text-black shadow-2xl py-3 px-8 rounded-lg  items-center ml-auto mr-auto ">
        December
        </button>

        <hr className="-mt-6"></hr>
      </div>
    </div>
  );
}

export default NewsSections;
