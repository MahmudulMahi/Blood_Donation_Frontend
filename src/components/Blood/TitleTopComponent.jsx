import React from 'react'
import callRedIco from "../../assets/icons/callRedIco.png";
import Rectangle from "../../assets/icons/Rectangle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const TitleTopComponent = ({secondTitle,thirdTitle}) => {
  return (
    <div>
       <div className="w-full h-20 flex justify-between items-center">
          <div>
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
            </p>
          </div>

          {/* START RIGHT */}
          <div className="flex justify-end text-xl font-semibold">
            <img src={Rectangle} alt="" />
            <p className="-ml-[140px] mt-[10px] font-bold text-brandPrimary text-[14px]">
              Connect With Us
            </p>
            <div className="mt-1 ml-6 mr-4">
              <div className="rounded-full text-white">
                <div className="">
                  <img src={callRedIco} alt="" className="w-[40px] h-[40px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END top*/}
    </div>
  )
}

export default TitleTopComponent
