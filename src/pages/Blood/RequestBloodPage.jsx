import React from "react";
import charm_quote from "../../assets/icons/charm_quote.png";
import callRedIco from "../../assets/icons/callRedIco.png";
import Rectangle from "../../assets/icons/Rectangle.png";
import RectangleImage from "../../assets/RectangleImage.png";
import GroupHand from "../../assets/icons/GroupHand.png";
import Discussion from "../../assets/icons/Discussion.png";
import emojion_handshake from "../../assets/icons/emojion_handshake.png";

const RequestBloodPage = () => {
  return (
    <div className="">
      <div className="mx-28">
        <div className="flex justify-end mt-4 text-xl font-semibold">
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={charm_quote} alt="charm_quote" className="w-10 h-10" />
        </div>
        <div
          className="flex justify-center mt-4 text-xl font-semibold"
          style={{
            fontFamily: "Poppins",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            textTransform: "capitalize",
          }}
        >
          The gift of blood is a gift
        </div>

        <div
          className="flex justify-center text-xl font-semibold"
          style={{
            fontFamily: "Poppins",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            textTransform: "capitalize",
          }}
        >
          to someone's life”
        </div>
        <div
          className="flex justify-center text-brandPrimary mt-2"
          style={{
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            textTransform: "capitalize",
          }}
        >
          John Doe
        </div>
      </div>

      
    </div>
  );
};

export default RequestBloodPage;
