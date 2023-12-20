import React from "react";
import charm_quote from "../../assets/icons/charm_quote.png";
import callRedIco from "../../assets/icons/callRedIco.png";
import Rectangle from "../../assets/icons/Rectangle.png";
import RectangleImage from "../../assets/RectangleImage.png";
import GroupHand from "../../assets/icons/GroupHand.png";
import Discussion from "../../assets/icons/Discussion.png";
import emojion_handshake from "../../assets/icons/emojion_handshake.png";

export default function AboutProject() {
  return (
    <div className="lg:mx-[88px] md:mx-28 mx-12">
    <div className="">
        <div className="flex justify-end mt-4 text-xl font-semibold">
          <img src={Rectangle} alt="" className="w-36 h-12"/>
          <p className="lg:-ml-[133px] md:-ml-[133px] -ml-[124px] lg:mt-[6px] md:mt-[7px] mt-[6px] font-bold text-brandPrimary lg:text-[14px] md:text-[14px] text-[12px]">
            Connect With Us
          </p>
          <div className="mt-1 lg:ml-3 md:ml-3 ml-5 mr-4">
            <div className="rounded-full text-white">
              <div className="">
                <img src={callRedIco} alt="" className="w-[40px] h-[40px] hover:rotate-90 hover:shadow-sm hover:rounded-full transition-all duration-500" />
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

      {/* About */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-12 md:mt-0 mt-8 gap-3 mx-[23px]">
        <div className="flex justify-center mt-10 space-x-2 hover:-translate-y-5 hover:border-b-4 rounded-lg hover:border-brandPrimary hover:rounded-xl transition-all duration-300 my-10 border">
          <div className="relative flex flex-col text-gray-700 bg-white learn-more-div-border  rounded-lg border border-brandPrimary">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img
                src={RectangleImage}
                alt="img-blur-shadow"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="w-full -mt-[40px] zindex"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="w-[70px] h-[70px] flex items-center justify-center rounded-full border-[2px] border-brandPrimary bg-white"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={GroupHand}
                  alt="GroupHand"
                  className="w-[40px] h-[40px] p-1"
                />
              </div>
            </div>

            <div className="p-6 pb-0 -mt-4">
              <h5
                className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Am I Eligible To Donate Blood?
              </h5>
              <p
                className="block font-sans text-md antialiased font-light leading-relaxed text-inherit text- mt-2 text-justify"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.“
              </p>
            </div>

            <div
              className="justify-end mt-0"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <div className="flex p-4">
                <button
                  className="text-right align-end text-xs text-brandPrimary ml-6 font-semibold"
                  type="button"
                  data-ripple-light="true"
                >
                  Learn more &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end 1*/}
        <div className="flex justify-center mt-10 space-x-2 hover:-translate-y-5 hover:border-b-4 rounded-lg hover:border-brandPrimary hover:rounded-xl transition-all duration-300 my-10 border">
          <div className="relative flex flex-col text-gray-700 bg-white learn-more-div-border  rounded-lg border border-brandPrimary">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img
                src={RectangleImage}
                alt="img-blur-shadow"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="w-full -mt-[40px] zindex"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="w-[70px] h-[70px] flex items-center justify-center rounded-full border-[2px] border-brandPrimary bg-white"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={emojion_handshake}
                  alt="emojion_handshake"
                  className="w-[40px] h-[40px] p-1"
                />
              </div>
            </div>

            <div className="p-6 pb-0 -mt-4">
              <h5
                className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                How The Donation Helps
              </h5>
              <p
                className="block font-sans text-md antialiased font-light leading-relaxed text-inherit text- mt-2 text-justify"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.“
              </p>
            </div>

            <div
              className="justify-end "
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <div className="flex p-4">
                <button
                  className="text-right align-end text-xs text-brandPrimary ml-6 font-semibold"
                  type="button"
                  data-ripple-light="true"
                >
                  Learn more &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end 2 */}
        <div className="flex justify-center mt-10 space-x-2 hover:-translate-y-5 hover:border-b-4 rounded-lg hover:border-brandPrimary hover:rounded-xl transition-all duration-300 my-10 border">
          <div className="relative flex flex-col text-gray-700 bg-white learn-more-div-border  rounded-lg border border-brandPrimary">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img
                src={RectangleImage}
                alt="img-blur-shadow"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="w-full -mt-[40px] zindex"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="w-[70px] h-[70px] flex items-center justify-center rounded-full border-[2px] border-brandPrimary bg-white"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={Discussion}
                  alt="Discussion"
                  className="w-[40px] h-[40px] p-1"
                />
              </div>
            </div>

            <div className="p-6 pb-0 -mt-4">
              <h5
                className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                About Blood
              </h5>
              <p
                className="block font-sans text-md antialiased font-light leading-relaxed text-inherit text- mt-2 text-justify"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.“
              </p>
            </div>

            <div
              className="justify-end"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <div className="flex p-4">
                <button
                  className="text-right align-end text-xs text-brandPrimary ml-6 font-semibold"
                  type="button"
                  data-ripple-light="true"
                >
                  Learn more &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end 3*/}
      </div>
      {/* end */}
    </div>
  );
}
