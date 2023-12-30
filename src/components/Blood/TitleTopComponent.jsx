import React from "react";
import callRedIco from "../../assets/icons/callRedIco.png";
import Rectangle from "../../assets/icons/Rectangle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const TitleTopComponent = ({ secondTitle, thirdTitle, fourthTitle }) => {
  return (
    <div className="">
      <div className="lg:h-20 md:h-20 h-16 flex justify-between items-center lg:mx-28 md:mx-10 mx-3 lg:mt-0 md:mt-0 mt-2">
        <div className="lg:text-base md:text-base text-[11px]">
          <p className="font-semibold">
            Home{" "}
            <span className="text-brandPrimary px-[2px]">
              <FontAwesomeIcon icon={faAngleRight} />
            </span>{" "}
            {secondTitle}{" "}
            <span className="text-brandPrimary px-[2px]">
              <FontAwesomeIcon icon={faAngleRight} />
            </span>{" "}
            {thirdTitle}
            {/* <span className="text-brandPrimary px-[2px]">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>{" "} */}
            {/* {fourthTitle} */}
          </p>
        </div>

        {/* START RIGHT */}
        {/* start for small */}
        <div className="flex justify-end mt-2 text-xl font-semibold lg:hidden md:hidden">
          <div className="">
            <img src={Rectangle} alt="" className="lg:w-32 md:w-32 w-28 h-10" />
          </div>
          <div className="lg:-ml-[133px] md:-ml-[133px] -ml-[95px] lg:mt-[6px] md:mt-[7px] mt-[4px] ">
            <p className="font-bold text-brandPrimary lg:text-[14px] md:text-[14px] text-[10px]">
              Connect With Us
            </p>
          </div>
          <div className="mt-1 lg:ml-3 md:ml-3 ml-2">
            <div className="rounded-full text-white">
              <div className="">
                <img
                  src={callRedIco}
                  alt=""
                  className="w-[30px] h-[30px] hover:rotate-90 hover:shadow-sm hover:rounded-full transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
        {/* end for small */}
        {/* start for lasrge */}
        <div className="lg:flex md:flex justify-end text-xl font-semibold hidden">
          <img src={Rectangle} alt="Rectengle" />
          <p className="-ml-[140px] mt-[10px] font-bold text-brandPrimary text-[14px]">
            Connect With Us
          </p>
          <div className="mt-1 ml-6">
            <div className="rounded-full text-white">
              <div className="">
                <img
                  src={callRedIco}
                  alt="callRedio"
                  className="w-[40px] h-[40px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END top*/}
    </div>
  );
};

export default TitleTopComponent;
