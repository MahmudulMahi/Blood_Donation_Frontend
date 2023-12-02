import React from "react";
import BloodHandFirst from "../../assets/BloodHandFirst.png";
import BloodHandSecond from "../../assets/BloodHandSecond.png";
import BloodHandThree from "../../assets/BloodHandThree.png";
import BloodHandFour from "../../assets/BloodHandFour.png";
import BloodHandFive from "../../assets/BloodHandFive.png";
import HelpObject1 from "../../assets/icons/HelpObject1.png";
import HelpObject2 from "../../assets/icons/HelpObject2.png";
import HelpObject3 from "../../assets/icons/HelpObject3.png";

const HelpOther = () => {
  return (
    <div className="h-[450px] mt-20">
      <div>
        <h2
          className=" text-center"
          style={{
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            textTransform: "capitalize",
          }}
        >
          Making your ways to help others
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto lg:pl-12 pl-4 lg:pr-12 pr-4 mt-8 gap-8">
        {/* star  t */}
        <div className="flex justify-center h-[455px] overflow-hidden">
          <div className="relative flex flex-col bg-[#F3A4A7] shadow-md rounded-2xl w-full">
            <div className="m-4">
              <div className="flex">
                <div className="w-[240px] h-[240px] overflow-hidden rounded-2xl bg-white">
                  <img
                    src={BloodHandFirst}
                    alt="img-blur-shadow"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="m-[22px] mr-[0px] w-[350px] h-[155px] overflow-hidden rounded-2xl bg-white -mt-[0px]">
                  <img
                    src={BloodHandSecond}
                    alt="img-blur-shadow"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex">
                <div className="mt-[22px] w-[350px] h-40 overflow-hidden rounded-2xl bg-white">
                  <img
                    src={BloodHandFour}
                    alt="img-blur-shadow"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-[22px] w-[240px] h-[247px] overflow-hidden rounded-2xl bg-white -mt-[65px]">
                  <img
                    src={BloodHandFive}
                    alt="BloodHandFirst"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:ml-[260px] ml-[115px] lg:w-[90px] w-[53px] lg:h-[60px] h-[70px] overflow-hidden rounded-2xl bg-white lg:-mt-[242px] -mt-[248px]">
                <img
                  src={BloodHandThree}
                  alt="BloodHandFirst"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* end */}

        <div className="flex justify-center h-[455px] overflow-hidden">
          <div className="relative flex flex-col bg-white shadow-md rounded-2xl w-full">
            <div className="m-4">
              {/* start */}
              <div className="flex mt-[10px]">
                <div>
                  <div
                    className="w-[100px] h-[100px] flex items-center justify-center rounded-full border-[10px] border-[#EA5F64] bg-brandPrimary"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={HelpObject1}
                      alt="HelpObject1"
                      className="w-[40px] h-[40px] p-1  object-cover"
                    />
                  </div>
                </div>
                {/* gelo */}
                <div className="flex flex-col w-[500px] ml-8 justify-center">

                  <div className="flex items-center space-x-[272px]">
                    <h2
                      className="font-semibold"
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        textTransform: "capitalize",
                      }}
                    >
                       Become a Blood Donor
                    </h2>
                    <span className="text-brandPrimary font-bold">&#8594;</span>
                  </div>

                  <div className="mt-3">
                    <p
                      className="text-justify"
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                        textTransform: "capitalize",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      standard dummy Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* end */}
              <div className="flex mt-[50px]">
                <div>
                  <div
                    className="w-[100px] h-[100px] flex items-center justify-center rounded-full border-[10px] border-[#EA5F64] bg-brandPrimary"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={HelpObject2}
                      alt="HelpObject1"
                      className="w-[40px] h-[40px] p-1  object-cover"
                    />
                  </div>
                </div>
                {/* gelo 2*/}
                <div className="flex flex-col w-[500px] ml-8 justify-center">
                  <div className="flex items-center space-x-[295px]">
                    <h2
                      className="font-semibold"
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        textTransform: "capitalize",
                      }}
                    >
                      Become a Volunteer
                    </h2>
                    <span className="text-brandPrimary font-bold">&#8594;</span>
                  </div>

                  <div className="mt-3">
                    <p
                      className="text-justify"
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                        textTransform: "capitalize",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      standard dummy Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* end */}
              <div className="flex mt-[50px]">
                <div>
                  <div
                    className="w-[100px] h-[100px] flex items-center justify-center rounded-full border-[10px] border-[#EA5F64] bg-brandPrimary"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={HelpObject3}
                      alt="HelpObject3"
                      className="w-[40px] h-[40px] p-1  object-cover"
                    />
                  </div>
                </div>
                {/* gelo 3*/}
                <div className="flex flex-col w-[500px] ml-8 justify-center">
                  <div className="flex items-center space-x-[315px]">
                    <h2
                      className="font-semibold"
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        textTransform: "capitalize",
                      }}
                    >
                      Make A Donation
                    </h2>
                    <span className="text-brandPrimary font-bold">&#8594;</span>
                  </div>

                  <div className="mt-3">
                    <p
                      className="text-justify"
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                        textTransform: "capitalize",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      standard dummy Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default HelpOther;
