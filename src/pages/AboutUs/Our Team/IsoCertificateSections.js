import React from "react";
import images1 from "../../../assets/bloodLogo.jpg";
import images2 from "../../../assets/bloodlogo2.png";
import TitleTopComponent from "../../../components/Blood/TitleTopComponent";

function IsoCertificateSections() {
  return (
    <div className="mx-28">
       <div>
          <TitleTopComponent secondTitle={"About Us"} thirdTitle={"iso-2008-certified"} />
        </div>
      <p className="p-2 md:w-1/6 w-full bg-red-700 rounded-md font-bold text-white mt-2">
        ISO 2008 Certified
      </p>
      <div >
        <img
          className="rounded-md p-2 mt-2 w-3/4 ml-auto mr-auto max-w-full"
          src={images1}
          alt=""
        ></img>
      </div>
      <div className="mb-4 mt-2">
        <img
          className="rounded-md p-2 mt-2 md:w-2/5 ml-auto mr-auto max-w-full"
          src={images2}
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default IsoCertificateSections;
