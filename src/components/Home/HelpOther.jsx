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
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 md:w-11/12 mx-auto lg:pl-12 pl-4 lg:pr-12 pr-4 mt-8 gap-8">
        {/* star  t */}
        <div className="flex justify-center h-[455px] overflow-hidden">
          <div className="relative flex flex-col bg-[#F3A4A7] shadow-md rounded-2xl w-full">
            <div className="m-4">
              <div className="flex">
                <div className="lg:w-[240px] md:w-[300px] w-[180px] lg:h-[240px] md:h-[260px] h-[240px] overflow-hidden rounded-2xl bg-white">
                  <img
                    src={BloodHandFirst}
                    alt="img-blur-shadow"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="m-[22px] lg:ml-[22px] md:ml-[18px] ml-[18px] mr-[0px] lg:w-[350px] md:w-[473px] w-[250px] lg:h-[155px] md:h-[175px] h-[155px] overflow-hidden rounded-2xl bg-white -mt-[0px]">
                  <img
                    src={BloodHandSecond}
                    alt="img-blur-shadow"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex">
                <div className="lg:mt-[22px] md:mt-[17px] mt-[22px] lg:w-[350px] md:w-[400px] w-[350px] lg:h-40 md:h-[148px] h-40 overflow-hidden rounded-2xl bg-white">
                  <img
                    src={BloodHandFour}
                    alt="img-blur-shadow"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:ml-[22px] md:ml-[18px] ml-[18px] lg:w-[240px] md:w-[380px] w-[240px] lg:h-[247px] md:h-[227px] h-[247px] overflow-hidden rounded-2xl bg-white -mt-[65px]">
                  <img
                    src={BloodHandFive}
                    alt="BloodHandFirst"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:ml-[257px] md:ml-[315px] ml-[185px] lg:w-[80px] md:w-[80px] w-[53px] lg:h-[60px] h-[70px] overflow-hidden rounded-2xl bg-white lg:-mt-[242px] -mt-[248px] md:-mt-[234px]">
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

        <div className="hidden lg:block md:block">
          <div className="flex justify-center lg:h-[455px] md:h-full h-[455px] overflow-hidden">
            <div className="relative flex flex-col bg-white shadow-md rounded-2xl w-full">
              <div className="m-4">
                {/* start */}
                <div className="flex mt-[10px]">
                  <div>
                    <div
                      className="lg:w-[100px] md:w-[150px] w-[100px] lg:h-[100px] md:h-[150px] h-[100px] flex items-center justify-center rounded-full border-[10px] border-[#EA5F64] bg-brandPrimary"
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
                  <div className="flex flex-col lg:w-[500px] md:w-[580px] w-[500px] ml-8 justify-center text-justify">
                    <div className="flex items-center space-x-[385px] lg:space-x-[273px]">
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
                      <span className="text-brandPrimary font-bold">
                        &#8594;
                      </span>
                    </div>

                    <div className="lg:mt-3 md:mt-1 mt-3">
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
                      className="lg:w-[100px] md:w-[150px] w-[100px] lg:h-[100px] md:h-[150px] h-[100px] flex items-center justify-center rounded-full border-[10px] border-[#EA5F64] bg-brandPrimary"
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
                  <div className="flex flex-col lg:w-[500px] md:w-[580px] w-[500px] ml-8 justify-center">
                    <div className="flex items-center space-x-[408px] lg:space-x-[295px]">
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
                      <span className="text-brandPrimary font-bold">
                        &#8594;
                      </span>
                    </div>

                    <div className="lg:mt-3 md:mt-1 mt-3">
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
                      className="lg:w-[100px] md:w-[150px] w-[100px] lg:h-[100px] md:h-[150px] h-[100px]w-[100px] h-[100px] flex items-center justify-center rounded-full border-[10px] border-[#EA5F64] bg-brandPrimary"
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
                  <div className="flex flex-col lg:w-[500px] md:w-[580px] w-[500px] ml-8 justify-center">
                    <div className="flex items-center space-x-[428px] lg:space-x-[315px]">
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
                      <span className="text-brandPrimary font-bold">
                        &#8594;
                      </span>
                    </div>

                    <div className="lg:mt-3 md:mt-1 mt-3">
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
        </div>

        {/* Here START for small device */}
        <div className="lg:hidden md:hidden">
          <div className="flex justify-center h-[350px] overflow-hidden">
            <div className="relative flex flex-col bg-white shadow-md rounded-2xl w-full border-4 border-[#EA5F64]">
              <div className="m-4 mt-8">
                {/* start */}
                <div className="">
                  <div
                    className="w-full"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="w-[150px] h-[150px] flex items-center justify-center rounded-full border-[15px] border-[#EA5F64] bg-brandPrimary"
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
                  <div className="w-[410px] justify-center text-justify mt-8">
                    <div className="flex items-center space-x-[155px]">
                      <h2
                        className="font-semibold"
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 600,
                          textTransform: "capitalize",
                        }}
                      >
                        Become a Blood Donor
                      </h2>
                      <span className="text-brandPrimary font-bold">
                        &#8594;
                      </span>
                    </div>

                    <div className="lg:mt-3 md:mt-1 mt-3">
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
          {/* end 1 */}
          <div className="flex justify-center h-[350px] overflow-hidden mt-[15px]">
            <div className="relative flex flex-col bg-white shadow-md rounded-2xl w-full border-4 border-[#EA5F64]">
              <div className="m-4 mt-8">
                {/* start */}
                <div className="">
                  <div
                    className="w-full"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="w-[150px] h-[150px] flex items-center justify-center rounded-full border-[15px] border-[#EA5F64] bg-brandPrimary"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={HelpObject2}
                        alt="HelpObject2"
                        className="w-[40px] h-[40px] p-1  object-cover"
                      />
                    </div>
                  </div>
                  {/* gelo */}
                  <div className="w-[410px] justify-center text-justify mt-8">
                    <div className="flex items-center space-x-[185px]">
                      <h2
                        className="font-semibold"
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 600,
                          textTransform: "capitalize",
                        }}
                      >
                        Become a Volunteer
                      </h2>
                      <span className="text-brandPrimary font-bold">
                        &#8594;
                      </span>
                    </div>

                    <div className="lg:mt-3 md:mt-1 mt-3">
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
          {/* end 2 */}
          <div className="flex justify-center h-[350px] overflow-hidden">
            <div className="relative flex flex-col bg-white shadow-md rounded-2xl w-full border-4 border-[#EA5F64] mt-[15px]">
              <div className="m-4 mt-8">
                {/* start */}
                <div className="">
                  <div
                    className="w-full"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="w-[150px] h-[150px] flex items-center justify-center rounded-full border-[15px] border-[#EA5F64] bg-brandPrimary"
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
                  {/* gelo */}
                  <div className="w-[410px] justify-center text-justify mt-8">
                    <div className="flex items-center space-x-[210px]">
                      <h2
                        className="font-semibold"
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 600,
                          textTransform: "capitalize",
                        }}
                      >
                        Make A Donation
                      </h2>
                      <span className="text-brandPrimary font-bold">
                        &#8594;
                      </span>
                    </div>

                    <div className="lg:mt-3 md:mt-1 mt-3">
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
          {/* end 3 */}
        </div>
        {/* Here END for small device */}

        {/* end */}
      </div>
    </div>
  );
};

export default HelpOther;
