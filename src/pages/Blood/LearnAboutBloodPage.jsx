import React, { useState } from "react";
import TitleTopComponent from "../../components/Blood/TitleTopComponent";

export default function LearnAboutBloodPage() {
  // State to manage the fill color of the blood bag
  const [fillColor, setFillColor] = useState("#E11B22");

  // Function to handle the click event and change the fill color
  const emptyBloodBag = () => {
    setFillColor("white");
  };

  return (
    <div className="">
      <div>
        <TitleTopComponent
          secondTitle={"Blood"}
          thirdTitle={"Learn About Blood"}
        />
      </div>

      <div className="lg:mx-28 md:mx-28 mx-3">
        <div className="mt-2">
          <button className="bg-brandPrimary text-[18px] text-white lg:py-3 md:py-3 py-2 lg:px-4 md:px-4 px-3 rounded-lg ml-0">
            Learn About Blood
          </button>
          <div className="about-blood-div-border pb-8 -mt-6 rounded-lg">
            <div className="p-8 pb-0 lg:text-[12px] md:text-[12px] text-[13px] lg:pl-8 md:pl-8 pl-4">
              <p className="text-justify">
                Blood is a specialized body fluid. It has four main components:
                plasma, red blood cells, white blood cells, and platelets. Blood
                has many different functions, including:
              </p>
            </div>

            <div>
              <ul className="text-[12px] lg:pl-12 lg:ml-0 md:ml-0 ml-12 pl-0 mt-2 font-semibold ul-li">
                <li className="">
                  transporting oxygen and nutrients to the lungs and tissues
                </li>

                <li>forming blood clots to prevent excess blood loss</li>

                <li>carrying cells and antibodies that fight infection</li>

                <li>
                  bringing waste products to the kidneys and liver, which filter
                  and clean the blood
                </li>

                <li>regulating body temperature</li>
              </ul>
            </div>

            <div className="lg:px-8 md:px-8 px-4 lg:text-[12px] md:text-[12px] text-[13px] lg:mt-2 md:mt-2 mt-0">
              <p className="text-justify">
                The blood that runs through the veins, arteries, and capillaries
                is known as whole blood, a mixture of about 55 percent plasma
                and 45 percent blood cells. About 7 to 8 percent of your total
                body weight is blood. An average-sized man has about 12 pints of
                blood in his body, and an average-sized woman has about nine
                pints.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center lg:mt-8 md:mt-8 mt-6 text-[#444] lg:text-[20px] md:text-[20px] text-[17px] font-bold">
          “Every Blood Is Different“
        </div>

        <div className="lg:mt-6 md:mt-6 mt-3">
          <button className="bg-brandPrimary text-[18px] text-white lg:py-3 md:py-3 py-2 lg:px-4 md:px-4 px-3 rounded-lg ml-0">
            How Blood Type Is Determined
          </button>
          <div className="about-blood-div-border pb-8 -mt-6 rounded-lg">
            <div className="p-8 pb-0 pt-10 lg:text-[12px] md:text-[12px] text-[13px] lg:pl-8 md:pl-8 pl-4">
              <p className="text-justify">
                Blood types are determined by the presence or absence of certain
                antigens–substances that can trigger an immune response if they
                are foreign to the body. Since some antigens can trigger a
                patient's immune system to attack the transfused blood, safe
                blood transfusions depend on careful blood typing and
                cross-matching.{" "}
                <span className="font-semibold text-justify">
                  Do you know what blood type is safe for you if you need a
                  transfusion?
                </span>
              </p>
            </div>

            <div className="lg:px-8 md:px-8 px-4 lg:text-[12px] md:text-[12px] text-[13px] lg:pt-8 md:pt-8 pt-4">
              <p className="text-justify">
                There are four major blood groups determined by the presence or
                absence of two antigens, A and B, on the surface of red blood
                cells. In addition to the A and B antigens, there is a protein
                called the Rh factor, which can be either present (+) or absent
                (–), creating the 8 most common blood types (A+, A-, B+, B-, O+,
                O-, AB+, AB-).
              </p>
            </div>
          </div>
        </div>

        <div className="about-blood-div-border-two mt-12 pb-28">
          <div className="flex justify-center items-center mt-8 text-[#444] font-semibold">
            Click on a blood type below to learn more
          </div>

          <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-3 gap-4 mt-4">
            <div className="lg:col-span-3 md:col-span-3 col-span-3 ">
              <div className="flex flex-col lg:justify-end md:justify-end justify-center lg:items-end md:items-end items-center lg:mt-28 md:mt-28 mt-4">
                <div>
                  <button className="bg-brandPrimary rounded-full lg:text-[18px] md:text-[18px] text-[24px] font-semibold text-center text-white px-6 py-2 learn-about-blood-button-border lg:w-36 md:w-36 w-96">
                    Group A
                  </button>
                </div>
                <div className="lg:mt-6 md:mt-6 mt-8">
                  <button className="rounded-full lg:text-[18px] md:text-[18px] text-[24px] font-semibold text-center text-[#44444480] px-6 py-2 learn-about-blood-button-border lg:w-36 md:w-36 w-96">
                    Group B
                  </button>
                </div>

                <div className="lg:mt-6 md:mt-6 mt-8">
                  <button className="rounded-full lg:text-[18px] md:text-[18px] text-[24px] font-semibold text-center text-[#44444480] px-6 py-2 learn-about-blood-button-border lg:w-36 md:w-36 w-96">
                    Group AB
                  </button>
                </div>
                <div className="lg:mt-6 md:mt-6 mt-8">
                  <button className="rounded-full lg:text-[18px] md:text-[18px] text-[24px] font-semibold text-center text-[#44444480] px-6 py-2 learn-about-blood-button-border lg:w-36 md:w-36 w-96">
                    Group O
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 md:col-span-6 col-span-3 mt-8 border">
              <div className="flex justify-center mt-8 mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="383"
                  height="348"
                  viewBox="0 0 383 348"
                  fill="none"
                >
                  <path
                    d="M341.062 320.75V35.75C341.062 16 325.062 0 305.312 0H77.0625C57.3125 0 41.3125 16 41.3125 35.75V320.75H0V348.062H382.437V320.75H341.062ZM51.4375 35.875C51.4375 22.3125 62.4375 11.3125 76 11.3125H306.437C320 11.3125 331 22.3125 331 35.875V320.75H51.4375V35.875Z"
                    fill="#E11B22"
                    fill-opacity="0.4"
                  />
                </svg>
              </div>

              <div className="flex -mt-[418px] ml-[198px]">
                <div className="ml-3">
                  <div className="-mt-[14px] -ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="116"
                      height="15"
                      viewBox="0 0 116 15"
                      fill="none"
                    >
                      <path
                        d="M115.562 7.25C115.562 11.25 112.313 14.5 108.313 14.5H7.9375C3.9375 14.5 0.6875 11.25 0.6875 7.25C0.6875 3.25 3.9375 0 7.9375 0H108.25C112.312 0 115.562 3.25 115.562 7.25Z"
                        fill="#E11B22"
                        fill-opacity="0.1"
                      />
                    </svg>
                  </div>

                  <div className="-mt-[1px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="85"
                      height="359"
                      viewBox="0 0 85 359"
                      fill="none"
                    >
                      <path
                        d="M42.125 358.688C18.875 358.688 0 339.813 0 316.563V0.5625H84.1875V316.625C84.25 339.813 65.375 358.688 42.125 358.688Z"
                        fill="#91B8DB"
                        fill-opacity="0.4"
                      />
                    </svg>

                    <div className="-mt-[285px] ml-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="65"
                        height="275"
                        viewBox="0 0 65 275"
                        fill="none"
                      >
                        <path
                          d="M32.1875 274.813C14.4375 274.813 0 260.376 0 242.626V3.41641C0 2.14183 1.17619 1.18664 2.42841 1.42435C5.28671 1.96695 10.0944 2.78567 13.6554 2.9093C20.766 3.15615 24.6308 0.843079 31.7459 0.938417C38.0824 1.02332 41.4892 2.8877 47.8263 2.9093C52.3664 2.92477 58.6103 1.96256 61.982 1.37709C63.2245 1.16135 64.375 2.11386 64.375 3.37493V242.626C64.375 260.376 49.9375 274.813 32.1875 274.813Z"
                          fill="#FF0000"
                        />
                      </svg>

                      <div className="-mt-[255px] rounded-full ml-[5px]">
                        <p className="text-[12px] text-white font-semibold">
                          Red Cells
                        </p>
                      </div>
                      <div className="mt-[30px] rounded-full ml-[19px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          {/* Your SVG content */}
                          <circle cx="12.5" cy="12.5" r="10" fill="#fff" />

                          {/* Add text in the middle of the SVG */}
                          <text
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fill="#000000"
                            fontSize="10"
                            fontFamily="Arial"
                            fontWeight="600"
                          >
                            A
                          </text>
                        </svg>
                      </div>
                      {/* 1st blood img */}
                      <div className="mt-[80px] ml-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="30"
                          viewBox="0 0 26 30"
                          fill="none"
                        >
                          <path
                            d="M0.603027 16.2967C0.603027 18.6717 2.54052 20.6092 4.91552 20.6092C7.29052 20.6092 9.22802 18.6717 9.22802 16.2967C9.22802 13.9217 7.29052 11.9842 4.91552 11.9842C2.54052 11.9217 0.603027 13.8592 0.603027 16.2967ZM11.728 9.29674C11.728 13.1092 14.853 16.2342 18.6655 16.2342C22.478 16.2342 25.603 13.1092 25.603 9.29674C25.603 5.48424 22.478 2.35924 18.6655 2.35924C14.853 2.35924 11.728 5.48424 11.728 9.29674ZM0.603027 26.4217C0.603027 27.6092 1.54052 28.6092 2.79052 28.6092C4.04052 28.6092 4.97802 27.6092 4.97802 26.4217C4.97802 25.2342 3.97802 24.2342 2.79052 24.2342C1.60302 24.2342 0.603027 25.2342 0.603027 26.4217ZM4.97802 3.92174C4.97802 5.79674 6.47803 7.29675 8.35303 7.29675C10.228 7.29675 11.728 5.79674 11.728 3.92174C11.728 2.04674 10.228 0.546734 8.35303 0.546734C6.47803 0.484234 4.97802 2.04674 4.97802 3.92174ZM9.29052 24.9217C9.29052 27.2967 11.228 29.2342 13.603 29.2342C15.978 29.2342 17.9155 27.2967 17.9155 24.9217C17.9155 22.5467 15.978 20.6092 13.603 20.6092C11.228 20.6092 9.29052 22.5467 9.29052 24.9217Z"
                            fill="#990005"
                          />
                        </svg>
                      </div>
                      <div className="-mt-20 ml-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="29"
                          viewBox="0 0 26 29"
                          fill="none"
                        >
                          <path
                            d="M25.603 13.0294C25.603 10.6544 23.6655 8.71694 21.2905 8.71694C18.9155 8.71694 16.978 10.6544 16.978 13.0294C16.978 15.4044 18.9155 17.3419 21.2905 17.3419C23.6655 17.4044 25.603 15.4669 25.603 13.0294ZM14.478 20.0294C14.478 16.2169 11.353 13.0919 7.54053 13.0919C3.72803 13.0919 0.603027 16.2169 0.603027 20.0294C0.603027 23.8419 3.72803 26.9669 7.54053 26.9669C11.353 26.9669 14.478 23.8419 14.478 20.0294ZM25.603 2.90444C25.603 1.71694 24.6655 0.716927 23.4155 0.716927C22.1655 0.716927 21.228 1.71694 21.228 2.90444C21.228 4.09194 22.228 5.09193 23.4155 5.09193C24.603 5.09193 25.603 4.09194 25.603 2.90444ZM21.228 25.4044C21.228 23.5294 19.728 22.0294 17.853 22.0294C15.978 22.0294 14.478 23.5294 14.478 25.4044C14.478 27.2794 15.978 28.7794 17.853 28.7794C19.728 28.8419 21.228 27.2794 21.228 25.4044ZM16.9155 4.40443C16.9155 2.02943 14.978 0.091938 12.603 0.091938C10.228 0.091938 8.29054 2.02943 8.29054 4.40443C8.29054 6.77943 10.228 8.71694 12.603 8.71694C14.978 8.71694 16.9155 6.77943 16.9155 4.40443Z"
                            fill="#990005"
                          />
                        </svg>
                      </div>
                      <div className="mt-16 ml-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="30"
                          viewBox="0 0 26 30"
                          fill="none"
                        >
                          <path
                            d="M25.875 16.3143C25.875 18.6893 23.9375 20.6268 21.5625 20.6268C19.1875 20.6268 17.25 18.6893 17.25 16.3143C17.25 13.9393 19.1875 12.0018 21.5625 12.0018C23.9375 11.9393 25.875 13.8768 25.875 16.3143ZM14.75 9.31432C14.75 13.1268 11.625 16.2518 7.8125 16.2518C4 16.2518 0.875 13.1268 0.875 9.31432C0.875 5.50182 4 2.37682 7.8125 2.37682C11.625 2.37682 14.75 5.50182 14.75 9.31432ZM25.875 26.4393C25.875 27.6268 24.9375 28.6268 23.6875 28.6268C22.4375 28.6268 21.5 27.6268 21.5 26.4393C21.5 25.2518 22.5 24.2518 23.6875 24.2518C24.875 24.2518 25.875 25.2518 25.875 26.4393ZM21.5 3.93932C21.5 5.81432 20 7.31432 18.125 7.31432C16.25 7.31432 14.75 5.81432 14.75 3.93932C14.75 2.06432 16.25 0.564312 18.125 0.564312C20 0.501812 21.5 2.06432 21.5 3.93932ZM17.1875 24.9393C17.1875 27.3143 15.25 29.2518 12.875 29.2518C10.5 29.2518 8.56251 27.3143 8.56251 24.9393C8.56251 22.5643 10.5 20.6268 12.875 20.6268C15.25 20.6268 17.1875 22.5643 17.1875 24.9393Z"
                            fill="#990005"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2nd  */}
                <div className="ml-8">
                  <div className="-mt-[14px] -ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="116"
                      height="15"
                      viewBox="0 0 116 15"
                      fill="none"
                    >
                      <path
                        d="M115.562 7.25C115.562 11.25 112.313 14.5 108.313 14.5H7.9375C3.9375 14.5 0.6875 11.25 0.6875 7.25C0.6875 3.25 3.9375 0 7.9375 0H108.25C112.312 0 115.562 3.25 115.562 7.25Z"
                        fill="#E11B22"
                        fill-opacity="0.1"
                      />
                    </svg>
                  </div>

                  <div className="-mt-[1px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="85"
                      height="359"
                      viewBox="0 0 85 359"
                      fill="none"
                    >
                      <path
                        d="M42.125 358.688C18.875 358.688 0 339.813 0 316.563V0.5625H84.1875V316.625C84.25 339.813 65.375 358.688 42.125 358.688Z"
                        fill="#91B8DB"
                        fill-opacity="0.4"
                      />
                    </svg>
                  </div>
                  {/* second one */}

                  {/* main one */}
                  <div className="ml-[10px] -mt-[285px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="65"
                      height="274"
                      viewBox="0 0 65 274"
                      fill="none"
                    >
                      <path
                        d="M32.1875 273.812C14.4375 273.812 0 259.375 0 241.625V2.37836C0 1.11586 1.15348 0.163678 2.39661 0.384014C5.49152 0.932571 10.9558 1.80384 14.964 1.90838C22.0693 2.0937 25.9469 0.00212873 33.0544 0.0901989C39.3825 0.16861 42.8067 1.97857 49.1348 1.90838C53.2307 1.86295 58.8197 0.964572 61.966 0.396579C63.2129 0.171479 64.375 1.12525 64.375 2.39231V241.625C64.375 259.375 50 273.812 32.1875 273.812Z"
                        fill="#FFE875"
                      />
                    </svg>
                  </div>

                  <div className="-mt-[253px] ml-4 zindex-blood-animation">
                    <div className=" rounded-full ml-[5px] ">
                      <p className="text-[12px] font-semibold">Plasma</p>
                    </div>
                    <div className="mt-[30px] rounded-full ml-[15px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        {/* Your SVG content */}
                        <circle cx="12.5" cy="12.5" r="10" fill="#444" />

                        {/* Add text in the middle of the SVG */}
                        <text
                          x="50%"
                          y="50%"
                          dominantBaseline="middle"
                          textAnchor="middle"
                          fill="#fff"
                          fontSize="10"
                          fontFamily="Arial"
                          fontWeight="600"
                        >
                          B
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-3 col-span-3">
              <div className="text-[#444444] flex flex-col justify-start items-start mt-36">
                <p className="text-[24px] font-semibold">Group A</p>

                <p className="text-[14px] mt-8 border mr-12 font-semibold">
                  has only the A antigen on red cells (and B antibody in the
                  plasma)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
        {/* START RED ANIMATION */}
        <div className="about-blood-div-border-two mt-12 pb-28 extraHere">
          <div className="flex justify-center items-center mt-8 text-[#444] font-semibold">
            Click on a blood type below to learn more
          </div>

          <div className="mt-6 grid grid-cols-12 gap-1 px-20">
            <div className="col-span-3">
              <div className="">
                <p className="text-[#444] ml-16 mr-10 font-bold text-[16px]">
                  Donor
                </p>
              </div>
            </div>
            <div className="col-span-6"></div>
            <div className="col-span-3">
              <div className="">
                <p className="text-[#444] ml-16 mr-10 font-bold text-[16px]">
                  RECIPIENT
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-12 gap-1 px-20">
            <div className="col-span-2 border border-white flex flex-col pl-16">
              {/* start 1st line of 1st blood bag */}
              <div
                className="mr-6"
                style={{ position: "relative", width: "90px", height: "58px" }}
              >
                {/* Main SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="48"
                  viewBox="0 0 75 70"
                  fill="none"
                  className="zindextwo"
                  style={{
                    position: "absolute",
                    left: "46%",
                    top: "49%",
                    transform: "translate(-20%, -50%)",
                  }}
                >
                  <path
                    d="M14.0438 70H60.8567L74.9005 55V50H68.6588V52.2333L60.0921 61.3833C58.9217 62.6333 57.3457 63.3333 55.6917 63.3333H21.2842C19.0528 63.3333 16.9775 62.05 15.8695 59.9667L14.0282 56.5333C13.1076 54.8167 11.8436 53.3333 10.3144 52.2167C9.89311 51.8833 9.61223 51.3833 9.61223 50.8167L9.61223 19.1833C9.61223 18.6167 9.89311 18.1167 10.3144 17.8C11.8436 16.6667 13.1076 15.1833 14.0282 13.4667L15.8695 10.0333C16.9775 7.95 19.0528 6.66667 21.2842 6.66667L55.6917 6.66667C57.3457 6.66667 58.9217 7.36667 60.0921 8.61667L69.1894 18.3333H74.9005V15L60.8567 0L14.0438 0L7.80214 11.6667L3.02723 14.7167C1.15472 15.9333 0 18.1 0 20.4333L0 49.5667C0 51.9 1.15472 54.0667 3.02723 55.2833L7.80214 58.3333L14.0438 70Z"
                    fill="#F2F2F2"
                  />
                </svg>
                {/* main white end */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="48"
                  viewBox="0 0 75 35"
                  fill="none"
                  style={{
                    position: "absolute",
                    left: "46%",
                    top: "70%",
                    transform: "translate(-20%, -50%)",
                  }}
                >
                  <path
                    d="M14.0438 35L60.8567 35L74.9005 20V15H68.6588V17.2333L60.0921 26.3833C58.9217 27.6333 57.3457 28.3333 55.6917 28.3333L21.2842 28.3333C19.0528 28.3333 16.9775 27.05 15.8695 24.9667L14.0282 21.5333C13.1076 19.8167 11.8436 18.3333 10.3144 17.2167C9.89311 16.8833 9.61223 16.3833 9.61223 15.8167L9.61223 0L0 0L0 14.5667C0 16.9 1.15472 19.0667 3.02723 20.2833L7.80214 23.3333L14.0438 35Z"
                    fill="#CCCCCC"
                  />
                </svg>
                {/* main white black end */}

                {/* jhapsa side erta */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="16"
                  viewBox="0 0 7 16"
                  fill="none"
                  style={{
                    position: "absolute",
                    left: "84.5%",
                    top: "50%",
                    transform: "translate(-20%, -50%)",
                  }}
                >
                  <path
                    d="M0.658691 15.666L0.658691 0.666016L6.9004 0.666016L6.9004 15.666H0.658691Z"
                    fill="#8BAAE8"
                  />
                </svg>
                {/* end main jhapsa ta */}
                {/* start dots svg */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="5"
                  viewBox="0 0 7 7"
                  fill="none"
                  style={{
                    position: "absolute",
                    left: "48%",
                    top: "23%",
                  }}
                  className="zindexOne animate-pulse"
                >
                  <path
                    d="M6.74708 3.66732C6.74708 5.50827 5.34983 7.00065 3.62623 7.00065C1.90263 7.00065 0.505371 5.50827 0.505371 3.66732C0.505371 1.82637 1.90263 0.333984 3.62623 0.333984C5.34983 0.333984 6.74708 1.82637 6.74708 3.66732Z"
                    fill="#F27979"
                  />
                </svg>
                {/* end dot 1 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                  style={{
                    position: "absolute",
                    left: "58%",
                    top: "22%",
                  }}
                  className="zindexOne animate-ping"
                >
                  <path
                    d="M3.3296 1.66667C3.3296 2.58714 2.63097 3.33333 1.76917 3.33333C0.907367 3.33333 0.20874 2.58714 0.20874 1.66667C0.20874 0.746192 0.907367 0 1.76917 0C2.63097 0 3.3296 0.746192 3.3296 1.66667Z"
                    fill="#73020C"
                  />
                </svg>
                {/* end dot 2 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="5"
                  viewBox="0 0 5 6"
                  fill="none"
                  style={{
                    position: "absolute",
                    left: "72%",
                    top: "23%",
                  }}
                  className="zindexOne animate-pulse"
                >
                  <path
                    d="M4.8346 3.16602C4.8346 4.54673 3.78666 5.66602 2.49396 5.66602C1.20126 5.66602 0.15332 4.54673 0.15332 3.16602C0.15332 1.7853 1.20126 0.666016 2.49396 0.666016C3.78666 0.666016 4.8346 1.7853 4.8346 3.16602Z"
                    fill="#F27979"
                  />
                </svg>
                {/* end dot 3 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="6"
                  viewBox="0 0 7 8"
                  fill="none"
                  style={{
                    position: "absolute",
                    left: "78%",
                    top: "31%",
                  }}
                  className="zindexOne animate-pulse"
                >
                  <path
                    d="M7.00856 3.96615C7.00856 5.8071 5.6113 7.29948 3.8877 7.29948C2.1641 7.29948 0.766846 5.8071 0.766846 3.96615C0.766846 2.1252 2.1641 0.632813 3.8877 0.632813C5.6113 0.632813 7.00856 2.1252 7.00856 3.96615Z"
                    fill="#73020C"
                  />
                </svg>
                {/* end dot 4  */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="4"
                  viewBox="0 0 6 5"
                  fill="none"
                  style={{
                    position: "absolute",
                    left: "78%",
                    top: "46%",
                  }}
                  className="zindexOne animate-ping"
                >
                  <path
                    d="M5.53822 2.5C5.53822 3.88071 4.49028 5 3.19757 5C1.90487 5 0.856934 3.88071 0.856934 2.5C0.856934 1.11929 1.90487 0 3.19757 0C4.49028 0 5.53822 1.11929 5.53822 2.5Z"
                    fill="#F27979"
                  />
                </svg>
                {/* end dot 5 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3"
                  height="3"
                  viewBox="0 0 4 4"
                  fill="none"
                  style={{
                    position: "absolute",
                    left: "77%",
                    top: "60%",
                  }}
                  className="zindexOne animate-pulse"
                >
                  <path
                    d="M3.41724 1.66667C3.41724 2.58714 2.71861 3.33333 1.85681 3.33333C0.995014 3.33333 0.296387 2.58714 0.296387 1.66667C0.296387 0.746192 0.995014 0 1.85681 0C2.71861 0 3.41724 0.746192 3.41724 1.66667Z"
                    fill="#73020C"
                  />
                </svg>
                {/* end dot 6 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="5"
                  viewBox="0 0 5 6"
                  fill="none"
                  style={{
                    position: "absolute",
                    left: "76%",
                    top: "67%",
                  }}
                  className="zindexOne animate-pulse"
                >
                  <path
                    d="M4.97767 3.16602C4.97767 4.54673 3.92973 5.66602 2.63703 5.66602C1.34433 5.66602 0.296387 4.54673 0.296387 3.16602C0.296387 1.7853 1.34433 0.666016 2.63703 0.666016C3.92973 0.666016 4.97767 1.7853 4.97767 3.16602Z"
                    fill="#73020C"
                  />
                </svg>
                {/* end dot 7 */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="5"
                  viewBox="0 0 6 6"
                  fill="none"
                  style={{
                    position: "absolute",
                    left: "67%",
                    top: "71%",
                  }}
                  className="zindexOne animate-ping"
                >
                  <path
                    d="M5.61488 2.83398C5.61488 4.2147 4.56694 5.33398 3.27424 5.33398C1.98153 5.33398 0.933594 4.2147 0.933594 2.83398C0.933594 1.45327 1.98153 0.333984 3.27424 0.333984C4.56694 0.333984 5.61488 1.45327 5.61488 2.83398Z"
                    fill="#F27979"
                  />
                </svg>
                {/* end dot 8 */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 7 8"
                  fill="none"
                  style={{
                    position: "absolute",
                    left: "58%",
                    top: "71%",
                  }}
                  className="zindexOne animate-pulse"
                >
                  <path
                    d="M6.38819 3.76693C6.38819 5.60788 4.99094 7.10026 3.26734 7.10026C1.54374 7.10026 0.146484 5.60788 0.146484 3.76693C0.146484 1.92598 1.54374 0.433594 3.26734 0.433594C4.99094 0.433594 6.38819 1.92598 6.38819 3.76693Z"
                    fill="#73020C"
                  />
                </svg>
                {/* end dot 9 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="6"
                  viewBox="0 0 7 8"
                  fill="none"
                  style={{
                    position: "absolute",
                    left: "49%",
                    top: "68%",
                  }}
                  className="zindexOne animate-ping"
                >
                  <path
                    d="M6.38819 3.76693C6.38819 5.60788 4.99094 7.10026 3.26734 7.10026C1.54374 7.10026 0.146484 5.60788 0.146484 3.76693C0.146484 1.92598 1.54374 0.433594 3.26734 0.433594C4.99094 0.433594 6.38819 1.92598 6.38819 3.76693Z"
                    fill="#73020C"
                  />
                </svg>
                {/* end dot 10 */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="5"
                  viewBox="0 0 5 6"
                  fill="none"
                  style={{
                    position: "absolute",
                    left: "44%",
                    top: "50%",
                  }}
                  className="zindexOne animate-pulse"
                >
                  <path
                    d="M4.72523 3.16602C4.72523 4.54673 3.67729 5.66602 2.38459 5.66602C1.09189 5.66602 0.0439453 4.54673 0.0439453 3.16602C0.0439453 1.7853 1.09189 0.666016 2.38459 0.666016C3.67729 0.666016 4.72523 1.7853 4.72523 3.16602Z"
                    fill="#F27979"
                  />
                </svg>
                {/* end dot 11 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                  style={{
                    position: "absolute",
                    left: "45%",
                    top: "37%",
                  }}
                  className="zindexOne animate-ping"
                >
                  <path
                    d="M3.7251 2.00065C3.7251 2.92113 3.02648 3.66732 2.16468 3.66732C1.30288 3.66732 0.604248 2.92113 0.604248 2.00065C0.604248 1.08018 1.30288 0.333984 2.16468 0.333984C3.02648 0.333984 3.7251 1.08018 3.7251 2.00065Z"
                    fill="#73020C"
                  />
                </svg>
                {/* end dot 12 */}
                {/* End dots svg */}

                {/* start main blood bag */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="53"
                  height="40"
                  viewBox="0 0 71 58"
                  fill="none"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "49%",
                    transform: "translate(-20%, -50%)",
                  }}
                >
                  <path
                    d="M12.2843 57.3327H46.6917C48.3458 57.3327 49.9218 56.6327 51.0921 55.3827L59.6589 46.2327V43.9994H70.5819V35.666H59.6589V20.666H70.5819V12.3327L60.1894 12.3327L51.0921 2.61602C49.9218 1.36602 48.3458 0.666016 46.6917 0.666016L12.2843 0.666016C10.0529 0.666016 7.97752 1.94935 6.86962 4.03268L5.02831 7.46602C4.10766 9.18268 2.84372 10.666 1.3145 11.7993C0.893181 12.116 0.612305 12.616 0.612305 13.1827L0.612305 44.816C0.612305 45.3827 0.893181 45.8827 1.3145 46.216C2.84372 47.3327 4.10766 48.816 5.02831 50.5327L6.86962 53.966C7.97752 56.0494 10.0529 57.3327 12.2843 57.3327Z"
                    fill="#E11B22"
                  />
                </svg>

                {/* Smaller SVG positioned to the right */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 34 34"
                  fill="none"
                  style={{ position: "absolute", left: "47px", top: "17px" }} // Adjust the position as per your requirement
                >
                  <path
                    d="M0.406494 17.0007C0.406494 26.2007 7.39721 33.6673 16.0108 33.6673C24.6243 33.6673 31.615 26.2007 31.615 17.0007C31.615 7.80065 24.6243 0.333984 16.0108 0.333984C7.39721 0.333984 0.406494 7.80065 0.406494 17.0007Z"
                    fill="#F2F2F2"
                  />
                </svg>

                {/* Add text in the middle of the SVG */}
                <text
                  style={{
                    position: "absolute",
                    left: "50px",
                    top: "14px",
                    color: "#E11B22",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  O
                </text>

                {/* Your new SVG */}
                {/* here under black half start */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="36"
                  viewBox="0 0 66 53"
                  fill="none"
                  className="zindexZero"
                  style={{
                    position: "absolute",
                    left: "47px",
                    top: "19px",
                    transform: "translate(-20%, -20%)",
                  }}
                >
                  <path
                    d="M7.28417 52.3329H41.6916C43.3456 52.3329 44.9217 51.6329 46.092 50.3829L54.6587 41.2329V38.9996H65.5817V30.6663H54.6587V15.6663H65.5817V7.33294L55.1893 7.33294L48.417 0.0996094V24.7996C48.417 36.3163 39.663 45.6663 28.8805 45.6663H0.106201L1.86948 48.9663C2.97739 51.0496 5.05276 52.3329 7.28417 52.3329Z"
                    fill="#B01B1B"
                  />
                </svg>
                {/* Your new SVG blue color*/}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="9"
                  viewBox="0 0 7 11"
                  fill="none"
                  style={{ position: "absolute", left: "83px", top: "15px" }} // Adjust the position as per your requirement
                  className="zindexOne"
                >
                  <path
                    d="M0 11H3.5C5.425 11 7 9.58571 7 7.85714L7 3.14286C7 1.41429 5.425 0 3.5 0L0 0L0 1.57143L0 9.42857L0 11Z"
                    fill="#3D71D9"
                  />
                </svg>
                {/* Your new SVG blue color*/}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="9"
                  viewBox="0 0 7 11"
                  fill="none"
                  style={{ position: "absolute", left: "83px", top: "31px" }} // Adjust the position as per your
                  className="zindexOne"
                >
                  <path
                    d="M0 11H3.5C5.425 11 7 9.58571 7 7.85714L7 3.14286C7 1.41429 5.425 0 3.5 0L0 0L0 1.57143L0 9.42857L0 11Z"
                    fill="#3D71D9"
                  />
                </svg>
                {/* Your new 2 SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="5"
                  viewBox="0 0 6 5"
                  fill="none"
                  style={{ position: "absolute", left: "95%", top: "17px" }} // Adjust the position as per your requirement
                  className="zindexZero"
                >
                  <path
                    d="M0.823486 5L0.823486 0L5.50477 0V5H0.823486Z"
                    fill="#666666"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="12"
                  viewBox="0 0 15 15"
                  fill="none"
                  style={{ position: "absolute", left: "93%", top: "24px" }} // Adjust the position as per your requirement
                  className="zindexZero"
                >
                  <path
                    d="M0 13.4134C0 12.5008 1.18623 11.8269 2.08639 11.8269C3.88427 11.8269 5.22005 10.0862 5.22005 8.26332V6.61066C5.22005 2.9655 8.14487 0 11.74 0L13.37 0C14.2702 0 15 0.739981 15 1.65266C15 2.56535 14.2702 3.17312 13.37 3.17312L11.74 3.30533C9.94214 3.30533 8.48003 4.78777 8.48003 6.61066V8.26332C8.48003 11.9085 5.15994 15 1.56479 15C0.664629 15 0 14.3261 0 13.4134Z"
                    fill="#E11B22"
                  />
                </svg>

                {/* here start red lines */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="850"
                  height="100"
                  viewBox="0 0 100 100"
                  style={{ position: "absolute", left: "95px", top: "24px" }}
                  className="zindexZero"
                >
                  {/* Inline CSS for the pulsating animation */}
                  <style>
                    {`
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    `}
                  </style>

                  {/* The path that represents the line */}
                  <path
                    id="motionPath"
                    d="M0.202148 1.5131C0.202148 1.5131 248 1.51303 412.5 1.51172C577 1.51041 903.202 124.513 903.202 124.513"
                    fill="none"
                    stroke="#E11B22"
                    strokeOpacity="0.3"
                    strokeWidth="3"
                  />

                  {/* The red ball that will move along the path */}
                  <circle
                    id="movingBall"
                    cx="1"
                    cy="1.5135" // Adjusted slightly below the line to ensure visibility
                    r="5"
                    fill="#E11B22"
                    style={{
                      animation: "pulse 1s infinite alternate", // Apply the pulsating animation
                    }}
                    className="zindextwo"
                  >
                    {/* Animation to move the ball along the path */}
                    <animateMotion
                      dur="10s" // Increased duration to slow down the movement
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#motionPath" />
                    </animateMotion>
                  </circle>
                </svg>

                {/* end red line 1 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="894"
                  height="112"
                  viewBox="0 0 904 126"
                  fill="none"
                  style={{ position: "absolute", left: "55%", top: "24px" }}
                  className="zindexZero"
                >
                  {/* Inline CSS for the pulsating animation */}
                  <style>
                    {`
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    `}
                  </style>

                  {/* The path that represents the line */}
                  <path
                    d="M0.202148 1.5131C0.202148 1.5131 248 1.51303 412.5 1.51172C577 1.51041 903.202 124.513 903.202 124.513"
                    stroke="#E11B22"
                    strokeOpacity="0.4"
                    strokeWidth="3"
                  />

                  {/* The red ball that will move along the path */}
                  <circle
                    cx="0"
                    cy="1.5131"
                    r="5"
                    fill="#E11B22"
                    className="zindextwo"
                    style={{
                      animation: "pulse 1s infinite alternate", // Apply the pulsating animation
                    }}
                  >
                    {/* Animation to move the ball along the path */}
                    <animateMotion
                      dur="8s" // Increased duration to slow down the movement
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#motionPath" />
                    </animateMotion>
                  </circle>
                </svg>

                {/* end red line 2 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="800"
                  height="220"
                  viewBox="0 0 904 247"
                  fill="none"
                  style={{ position: "absolute", left: "108%", top: "22px" }}
                  className="zindexZero"
                >
                  {/* Pulsating animation */}
                  <style>
                    {`
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    `}
                  </style>

                  {/* The path that represents the line */}
                  <path
                    id="motionPath2"
                    d="M0.123535 1.77108C0.123535 1.77108 238.124 1.77077 423.624 1.76758C609.123 1.76438 902.623 245.27 902.623 245.27"
                    stroke="#E11B22"
                    strokeOpacity="0.4"
                    strokeWidth="3"
                  />

                  {/* The red ball that will move along the path */}
                  <circle
                    cx="0.123535"
                    cy="1.77108"
                    r="5"
                    fill="#E11B22"
                    className="zindextwo"
                    style={{
                      animation: "pulse 1s infinite alternate",
                    }}
                  >
                    {/* Animation to move the ball along the path */}
                    <animateMotion
                      dur="10s"
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#motionPath2" />
                    </animateMotion>
                  </circle>
                </svg>

                {/* end  red line 3*/}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="874"
                  height="336"
                  viewBox="0 0 905 367"
                  fill="none"
                  style={{ position: "absolute", left: "80%", top: "22px" }} // Adjust the position as per your requirement
                  className="zindexZero"
                >
                  {/* Pulsating animation */}
                  <style>
                    {`
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    `}
                  </style>
                  {/* The path that represents the line */}
                  <path
                    id="motionPath3"
                    d="M0.123047 1.77303C0.123047 1.77303 238.124 1.77272 423.623 1.76953C609.123 1.76634 903.5 365.5 903.5 365.5"
                    stroke="#E11B22"
                    stroke-opacity="0.4"
                    stroke-width="3"
                  />

                  {/* The red ball that will move along the path */}
                  <circle
                    cx="0.123535"
                    cy="1.77108"
                    r="5"
                    fill="#E11B22"
                    className="zindextwo"
                    style={{
                      animation: "pulse 1s infinite alternate",
                    }}
                  >
                    {/* Animation to move the ball along the path */}
                    <animateMotion
                      dur="10s"
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#motionPath3" />
                    </animateMotion>
                  </circle>
                </svg>
                {/* end red line 4*/}
              </div>
              {/* end first blood bag 1 */}

              {/* here remove */}
              <div className="mt-8">
                <div
                  className="mr-6"
                  style={{
                    position: "relative",
                    width: "90px",
                    height: "58px",
                  }}
                >
                  {/* Main SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="48"
                    viewBox="0 0 75 70"
                    fill="none"
                    className="zindextwo"
                    style={{
                      position: "absolute",
                      left: "46%",
                      top: "49%",
                      transform: "translate(-20%, -50%)",
                    }}
                  >
                    <path
                      d="M14.0438 70H60.8567L74.9005 55V50H68.6588V52.2333L60.0921 61.3833C58.9217 62.6333 57.3457 63.3333 55.6917 63.3333H21.2842C19.0528 63.3333 16.9775 62.05 15.8695 59.9667L14.0282 56.5333C13.1076 54.8167 11.8436 53.3333 10.3144 52.2167C9.89311 51.8833 9.61223 51.3833 9.61223 50.8167L9.61223 19.1833C9.61223 18.6167 9.89311 18.1167 10.3144 17.8C11.8436 16.6667 13.1076 15.1833 14.0282 13.4667L15.8695 10.0333C16.9775 7.95 19.0528 6.66667 21.2842 6.66667L55.6917 6.66667C57.3457 6.66667 58.9217 7.36667 60.0921 8.61667L69.1894 18.3333H74.9005V15L60.8567 0L14.0438 0L7.80214 11.6667L3.02723 14.7167C1.15472 15.9333 0 18.1 0 20.4333L0 49.5667C0 51.9 1.15472 54.0667 3.02723 55.2833L7.80214 58.3333L14.0438 70Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                  {/* main white end */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="48"
                    viewBox="0 0 75 35"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "46%",
                      top: "70%",
                      transform: "translate(-20%, -50%)",
                    }}
                  >
                    <path
                      d="M14.0438 35L60.8567 35L74.9005 20V15H68.6588V17.2333L60.0921 26.3833C58.9217 27.6333 57.3457 28.3333 55.6917 28.3333L21.2842 28.3333C19.0528 28.3333 16.9775 27.05 15.8695 24.9667L14.0282 21.5333C13.1076 19.8167 11.8436 18.3333 10.3144 17.2167C9.89311 16.8833 9.61223 16.3833 9.61223 15.8167L9.61223 0L0 0L0 14.5667C0 16.9 1.15472 19.0667 3.02723 20.2833L7.80214 23.3333L14.0438 35Z"
                      fill="#CCCCCC"
                    />
                  </svg>
                  {/* main white black end */}

                  {/* jhapsa side erta */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="16"
                    viewBox="0 0 7 16"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "84.5%",
                      top: "50%",
                      transform: "translate(-20%, -50%)",
                    }}
                  >
                    <path
                      d="M0.658691 15.666L0.658691 0.666016L6.9004 0.666016L6.9004 15.666H0.658691Z"
                      fill="#8BAAE8"
                    />
                  </svg>
                  {/* end main jhapsa ta */}
                  {/* start dots svg */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="5"
                    viewBox="0 0 7 7"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "48%",
                      top: "23%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M6.74708 3.66732C6.74708 5.50827 5.34983 7.00065 3.62623 7.00065C1.90263 7.00065 0.505371 5.50827 0.505371 3.66732C0.505371 1.82637 1.90263 0.333984 3.62623 0.333984C5.34983 0.333984 6.74708 1.82637 6.74708 3.66732Z"
                      fill="#F27979"
                    />
                  </svg>
                  {/* end dot 1 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "58%",
                      top: "22%",
                    }}
                    className="zindexOne animate-ping"
                  >
                    <path
                      d="M3.3296 1.66667C3.3296 2.58714 2.63097 3.33333 1.76917 3.33333C0.907367 3.33333 0.20874 2.58714 0.20874 1.66667C0.20874 0.746192 0.907367 0 1.76917 0C2.63097 0 3.3296 0.746192 3.3296 1.66667Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 2 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="5"
                    viewBox="0 0 5 6"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "72%",
                      top: "23%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M4.8346 3.16602C4.8346 4.54673 3.78666 5.66602 2.49396 5.66602C1.20126 5.66602 0.15332 4.54673 0.15332 3.16602C0.15332 1.7853 1.20126 0.666016 2.49396 0.666016C3.78666 0.666016 4.8346 1.7853 4.8346 3.16602Z"
                      fill="#F27979"
                    />
                  </svg>
                  {/* end dot 3 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="6"
                    viewBox="0 0 7 8"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "78%",
                      top: "31%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M7.00856 3.96615C7.00856 5.8071 5.6113 7.29948 3.8877 7.29948C2.1641 7.29948 0.766846 5.8071 0.766846 3.96615C0.766846 2.1252 2.1641 0.632813 3.8877 0.632813C5.6113 0.632813 7.00856 2.1252 7.00856 3.96615Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 4  */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="4"
                    viewBox="0 0 6 5"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "78%",
                      top: "46%",
                    }}
                    className="zindexOne animate-ping"
                  >
                    <path
                      d="M5.53822 2.5C5.53822 3.88071 4.49028 5 3.19757 5C1.90487 5 0.856934 3.88071 0.856934 2.5C0.856934 1.11929 1.90487 0 3.19757 0C4.49028 0 5.53822 1.11929 5.53822 2.5Z"
                      fill="#F27979"
                    />
                  </svg>
                  {/* end dot 5 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3"
                    height="3"
                    viewBox="0 0 4 4"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "77%",
                      top: "60%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M3.41724 1.66667C3.41724 2.58714 2.71861 3.33333 1.85681 3.33333C0.995014 3.33333 0.296387 2.58714 0.296387 1.66667C0.296387 0.746192 0.995014 0 1.85681 0C2.71861 0 3.41724 0.746192 3.41724 1.66667Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 6 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="5"
                    viewBox="0 0 5 6"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "76%",
                      top: "67%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M4.97767 3.16602C4.97767 4.54673 3.92973 5.66602 2.63703 5.66602C1.34433 5.66602 0.296387 4.54673 0.296387 3.16602C0.296387 1.7853 1.34433 0.666016 2.63703 0.666016C3.92973 0.666016 4.97767 1.7853 4.97767 3.16602Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 7 */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="5"
                    viewBox="0 0 6 6"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "67%",
                      top: "71%",
                    }}
                    className="zindexOne animate-ping"
                  >
                    <path
                      d="M5.61488 2.83398C5.61488 4.2147 4.56694 5.33398 3.27424 5.33398C1.98153 5.33398 0.933594 4.2147 0.933594 2.83398C0.933594 1.45327 1.98153 0.333984 3.27424 0.333984C4.56694 0.333984 5.61488 1.45327 5.61488 2.83398Z"
                      fill="#F27979"
                    />
                  </svg>
                  {/* end dot 8 */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 7 8"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "58%",
                      top: "71%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M6.38819 3.76693C6.38819 5.60788 4.99094 7.10026 3.26734 7.10026C1.54374 7.10026 0.146484 5.60788 0.146484 3.76693C0.146484 1.92598 1.54374 0.433594 3.26734 0.433594C4.99094 0.433594 6.38819 1.92598 6.38819 3.76693Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 9 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="6"
                    viewBox="0 0 7 8"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "49%",
                      top: "68%",
                    }}
                    className="zindexOne animate-ping"
                  >
                    <path
                      d="M6.38819 3.76693C6.38819 5.60788 4.99094 7.10026 3.26734 7.10026C1.54374 7.10026 0.146484 5.60788 0.146484 3.76693C0.146484 1.92598 1.54374 0.433594 3.26734 0.433594C4.99094 0.433594 6.38819 1.92598 6.38819 3.76693Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 10 */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="5"
                    viewBox="0 0 5 6"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "44%",
                      top: "50%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M4.72523 3.16602C4.72523 4.54673 3.67729 5.66602 2.38459 5.66602C1.09189 5.66602 0.0439453 4.54673 0.0439453 3.16602C0.0439453 1.7853 1.09189 0.666016 2.38459 0.666016C3.67729 0.666016 4.72523 1.7853 4.72523 3.16602Z"
                      fill="#F27979"
                    />
                  </svg>
                  {/* end dot 11 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "45%",
                      top: "37%",
                    }}
                    className="zindexOne animate-ping"
                  >
                    <path
                      d="M3.7251 2.00065C3.7251 2.92113 3.02648 3.66732 2.16468 3.66732C1.30288 3.66732 0.604248 2.92113 0.604248 2.00065C0.604248 1.08018 1.30288 0.333984 2.16468 0.333984C3.02648 0.333984 3.7251 1.08018 3.7251 2.00065Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 12 */}
                  {/* End dots svg */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="53"
                    height="40"
                    viewBox="0 0 71 58"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "49%",
                      transform: "translate(-20%, -50%)",
                    }}
                  >
                    <path
                      d="M12.2843 57.3327H46.6917C48.3458 57.3327 49.9218 56.6327 51.0921 55.3827L59.6589 46.2327V43.9994H70.5819V35.666H59.6589V20.666H70.5819V12.3327L60.1894 12.3327L51.0921 2.61602C49.9218 1.36602 48.3458 0.666016 46.6917 0.666016L12.2843 0.666016C10.0529 0.666016 7.97752 1.94935 6.86962 4.03268L5.02831 7.46602C4.10766 9.18268 2.84372 10.666 1.3145 11.7993C0.893181 12.116 0.612305 12.616 0.612305 13.1827L0.612305 44.816C0.612305 45.3827 0.893181 45.8827 1.3145 46.216C2.84372 47.3327 4.10766 48.816 5.02831 50.5327L6.86962 53.966C7.97752 56.0494 10.0529 57.3327 12.2843 57.3327Z"
                      fill="#E11B22"
                    />
                  </svg>

                  {/* Smaller SVG positioned to the right */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 34 34"
                    fill="none"
                    style={{ position: "absolute", left: "47px", top: "17px" }} // Adjust the position as per your requirement
                  >
                    <path
                      d="M0.406494 17.0007C0.406494 26.2007 7.39721 33.6673 16.0108 33.6673C24.6243 33.6673 31.615 26.2007 31.615 17.0007C31.615 7.80065 24.6243 0.333984 16.0108 0.333984C7.39721 0.333984 0.406494 7.80065 0.406494 17.0007Z"
                      fill="#F2F2F2"
                    />
                  </svg>

                  {/* Add text in the middle of the SVG */}
                  <text
                    style={{
                      position: "absolute",
                      left: "50px",
                      top: "14px",
                      color: "#E11B22",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    A
                  </text>

                  {/* Your new SVG */}
                  {/* here under black half start */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="36"
                    viewBox="0 0 66 53"
                    fill="none"
                    className="zindexZero"
                    style={{
                      position: "absolute",
                      left: "47px",
                      top: "19px",
                      transform: "translate(-20%, -20%)",
                    }}
                  >
                    <path
                      d="M7.28417 52.3329H41.6916C43.3456 52.3329 44.9217 51.6329 46.092 50.3829L54.6587 41.2329V38.9996H65.5817V30.6663H54.6587V15.6663H65.5817V7.33294L55.1893 7.33294L48.417 0.0996094V24.7996C48.417 36.3163 39.663 45.6663 28.8805 45.6663H0.106201L1.86948 48.9663C2.97739 51.0496 5.05276 52.3329 7.28417 52.3329Z"
                      fill="#B01B1B"
                    />
                  </svg>
                  {/* Your new SVG blue color*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="9"
                    viewBox="0 0 7 11"
                    fill="none"
                    style={{ position: "absolute", left: "83px", top: "15px" }} // Adjust the position as per your requirement
                    className="zindexOne"
                  >
                    <path
                      d="M0 11H3.5C5.425 11 7 9.58571 7 7.85714L7 3.14286C7 1.41429 5.425 0 3.5 0L0 0L0 1.57143L0 9.42857L0 11Z"
                      fill="#3D71D9"
                    />
                  </svg>
                  {/* Your new SVG blue color*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="9"
                    viewBox="0 0 7 11"
                    fill="none"
                    style={{ position: "absolute", left: "83px", top: "31px" }} // Adjust the position as per your
                    className="zindexOne"
                  >
                    <path
                      d="M0 11H3.5C5.425 11 7 9.58571 7 7.85714L7 3.14286C7 1.41429 5.425 0 3.5 0L0 0L0 1.57143L0 9.42857L0 11Z"
                      fill="#3D71D9"
                    />
                  </svg>
                  {/* Your new 2 SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="5"
                    viewBox="0 0 6 5"
                    fill="none"
                    style={{ position: "absolute", left: "95%", top: "17px" }} // Adjust the position as per your requirement
                    className="zindexZero"
                  >
                    <path
                      d="M0.823486 5L0.823486 0L5.50477 0V5H0.823486Z"
                      fill="#666666"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="12"
                    viewBox="0 0 15 15"
                    fill="none"
                    style={{ position: "absolute", left: "93%", top: "24px" }} // Adjust the position as per your requirement
                    className="zindexZero"
                  >
                    <path
                      d="M0 13.4134C0 12.5008 1.18623 11.8269 2.08639 11.8269C3.88427 11.8269 5.22005 10.0862 5.22005 8.26332V6.61066C5.22005 2.9655 8.14487 0 11.74 0L13.37 0C14.2702 0 15 0.739981 15 1.65266C15 2.56535 14.2702 3.17312 13.37 3.17312L11.74 3.30533C9.94214 3.30533 8.48003 4.78777 8.48003 6.61066V8.26332C8.48003 11.9085 5.15994 15 1.56479 15C0.664629 15 0 14.3261 0 13.4134Z"
                      fill="#E11B22"
                    />
                  </svg>

                  {/* here start red lines */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="882"
                    height="80"
                    viewBox="0 0 100 100"
                    fill="none"
                    style={{ position: "absolute", left: "30%", top: "25px" }} // Adjust the position as per your requirement
                    className="zindexZero"
                  >
                    <path
                      d="M0.202148 1.5131C0.202148 1.5131 248 1.51303 412.5 1.51172C577 1.51041 903.202 124.513 903.202 124.513"
                      stroke="#E11B22"
                      stroke-opacity="0.4"
                      stroke-width="3"
                    />
                  </svg>

                  {/* end red line 1 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="800"
                    height="220"
                    viewBox="0 0 904 247"
                    fill="none"
                    style={{ position: "absolute", left: "108%", top: "23px" }} // Adjust the position as per your requirement
                    className="zindexZero"
                  >
                    <path
                      d="M0.123535 1.77108C0.123535 1.77108 238.124 1.77077 423.624 1.76758C609.123 1.76438 902.623 245.27 902.623 245.27"
                      stroke="#E11B22"
                      stroke-opacity="0.5"
                      stroke-width="3"
                    />
                  </svg>
                  {/* end  red line 2*/}
                </div>
              </div>
              {/* end second blood bag 2 */}
              <div className="mt-8">
                <div
                  className="mr-6"
                  style={{
                    position: "relative",
                    width: "90px",
                    height: "58px",
                  }}
                >
                  {/* Main SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="48"
                    viewBox="0 0 75 70"
                    fill="none"
                    className="zindextwo"
                    style={{
                      position: "absolute",
                      left: "46%",
                      top: "49%",
                      transform: "translate(-20%, -50%)",
                    }}
                  >
                    <path
                      d="M14.0438 70H60.8567L74.9005 55V50H68.6588V52.2333L60.0921 61.3833C58.9217 62.6333 57.3457 63.3333 55.6917 63.3333H21.2842C19.0528 63.3333 16.9775 62.05 15.8695 59.9667L14.0282 56.5333C13.1076 54.8167 11.8436 53.3333 10.3144 52.2167C9.89311 51.8833 9.61223 51.3833 9.61223 50.8167L9.61223 19.1833C9.61223 18.6167 9.89311 18.1167 10.3144 17.8C11.8436 16.6667 13.1076 15.1833 14.0282 13.4667L15.8695 10.0333C16.9775 7.95 19.0528 6.66667 21.2842 6.66667L55.6917 6.66667C57.3457 6.66667 58.9217 7.36667 60.0921 8.61667L69.1894 18.3333H74.9005V15L60.8567 0L14.0438 0L7.80214 11.6667L3.02723 14.7167C1.15472 15.9333 0 18.1 0 20.4333L0 49.5667C0 51.9 1.15472 54.0667 3.02723 55.2833L7.80214 58.3333L14.0438 70Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                  {/* main white end */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="48"
                    viewBox="0 0 75 35"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "46%",
                      top: "70%",
                      transform: "translate(-20%, -50%)",
                    }}
                  >
                    <path
                      d="M14.0438 35L60.8567 35L74.9005 20V15H68.6588V17.2333L60.0921 26.3833C58.9217 27.6333 57.3457 28.3333 55.6917 28.3333L21.2842 28.3333C19.0528 28.3333 16.9775 27.05 15.8695 24.9667L14.0282 21.5333C13.1076 19.8167 11.8436 18.3333 10.3144 17.2167C9.89311 16.8833 9.61223 16.3833 9.61223 15.8167L9.61223 0L0 0L0 14.5667C0 16.9 1.15472 19.0667 3.02723 20.2833L7.80214 23.3333L14.0438 35Z"
                      fill="#CCCCCC"
                    />
                  </svg>
                  {/* main white black end */}

                  {/* jhapsa side erta */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="16"
                    viewBox="0 0 7 16"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "84.5%",
                      top: "50%",
                      transform: "translate(-20%, -50%)",
                    }}
                  >
                    <path
                      d="M0.658691 15.666L0.658691 0.666016L6.9004 0.666016L6.9004 15.666H0.658691Z"
                      fill="#8BAAE8"
                    />
                  </svg>
                  {/* end main jhapsa ta */}
                  {/* start dots svg */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="5"
                    viewBox="0 0 7 7"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "48%",
                      top: "23%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M6.74708 3.66732C6.74708 5.50827 5.34983 7.00065 3.62623 7.00065C1.90263 7.00065 0.505371 5.50827 0.505371 3.66732C0.505371 1.82637 1.90263 0.333984 3.62623 0.333984C5.34983 0.333984 6.74708 1.82637 6.74708 3.66732Z"
                      fill="#F27979"
                    />
                  </svg>
                  {/* end dot 1 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "58%",
                      top: "22%",
                    }}
                    className="zindexOne animate-ping"
                  >
                    <path
                      d="M3.3296 1.66667C3.3296 2.58714 2.63097 3.33333 1.76917 3.33333C0.907367 3.33333 0.20874 2.58714 0.20874 1.66667C0.20874 0.746192 0.907367 0 1.76917 0C2.63097 0 3.3296 0.746192 3.3296 1.66667Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 2 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="5"
                    viewBox="0 0 5 6"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "72%",
                      top: "23%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M4.8346 3.16602C4.8346 4.54673 3.78666 5.66602 2.49396 5.66602C1.20126 5.66602 0.15332 4.54673 0.15332 3.16602C0.15332 1.7853 1.20126 0.666016 2.49396 0.666016C3.78666 0.666016 4.8346 1.7853 4.8346 3.16602Z"
                      fill="#F27979"
                    />
                  </svg>
                  {/* end dot 3 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="6"
                    viewBox="0 0 7 8"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "78%",
                      top: "31%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M7.00856 3.96615C7.00856 5.8071 5.6113 7.29948 3.8877 7.29948C2.1641 7.29948 0.766846 5.8071 0.766846 3.96615C0.766846 2.1252 2.1641 0.632813 3.8877 0.632813C5.6113 0.632813 7.00856 2.1252 7.00856 3.96615Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 4  */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="4"
                    viewBox="0 0 6 5"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "78%",
                      top: "46%",
                    }}
                    className="zindexOne animate-ping"
                  >
                    <path
                      d="M5.53822 2.5C5.53822 3.88071 4.49028 5 3.19757 5C1.90487 5 0.856934 3.88071 0.856934 2.5C0.856934 1.11929 1.90487 0 3.19757 0C4.49028 0 5.53822 1.11929 5.53822 2.5Z"
                      fill="#F27979"
                    />
                  </svg>
                  {/* end dot 5 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3"
                    height="3"
                    viewBox="0 0 4 4"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "77%",
                      top: "60%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M3.41724 1.66667C3.41724 2.58714 2.71861 3.33333 1.85681 3.33333C0.995014 3.33333 0.296387 2.58714 0.296387 1.66667C0.296387 0.746192 0.995014 0 1.85681 0C2.71861 0 3.41724 0.746192 3.41724 1.66667Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 6 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="5"
                    viewBox="0 0 5 6"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "76%",
                      top: "67%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M4.97767 3.16602C4.97767 4.54673 3.92973 5.66602 2.63703 5.66602C1.34433 5.66602 0.296387 4.54673 0.296387 3.16602C0.296387 1.7853 1.34433 0.666016 2.63703 0.666016C3.92973 0.666016 4.97767 1.7853 4.97767 3.16602Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 7 */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="5"
                    viewBox="0 0 6 6"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "67%",
                      top: "71%",
                    }}
                    className="zindexOne animate-ping"
                  >
                    <path
                      d="M5.61488 2.83398C5.61488 4.2147 4.56694 5.33398 3.27424 5.33398C1.98153 5.33398 0.933594 4.2147 0.933594 2.83398C0.933594 1.45327 1.98153 0.333984 3.27424 0.333984C4.56694 0.333984 5.61488 1.45327 5.61488 2.83398Z"
                      fill="#F27979"
                    />
                  </svg>
                  {/* end dot 8 */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 7 8"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "58%",
                      top: "71%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M6.38819 3.76693C6.38819 5.60788 4.99094 7.10026 3.26734 7.10026C1.54374 7.10026 0.146484 5.60788 0.146484 3.76693C0.146484 1.92598 1.54374 0.433594 3.26734 0.433594C4.99094 0.433594 6.38819 1.92598 6.38819 3.76693Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 9 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="6"
                    viewBox="0 0 7 8"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "49%",
                      top: "68%",
                    }}
                    className="zindexOne animate-ping"
                  >
                    <path
                      d="M6.38819 3.76693C6.38819 5.60788 4.99094 7.10026 3.26734 7.10026C1.54374 7.10026 0.146484 5.60788 0.146484 3.76693C0.146484 1.92598 1.54374 0.433594 3.26734 0.433594C4.99094 0.433594 6.38819 1.92598 6.38819 3.76693Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 10 */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="5"
                    viewBox="0 0 5 6"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "44%",
                      top: "50%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M4.72523 3.16602C4.72523 4.54673 3.67729 5.66602 2.38459 5.66602C1.09189 5.66602 0.0439453 4.54673 0.0439453 3.16602C0.0439453 1.7853 1.09189 0.666016 2.38459 0.666016C3.67729 0.666016 4.72523 1.7853 4.72523 3.16602Z"
                      fill="#F27979"
                    />
                  </svg>
                  {/* end dot 11 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "45%",
                      top: "37%",
                    }}
                    className="zindexOne animate-ping"
                  >
                    <path
                      d="M3.7251 2.00065C3.7251 2.92113 3.02648 3.66732 2.16468 3.66732C1.30288 3.66732 0.604248 2.92113 0.604248 2.00065C0.604248 1.08018 1.30288 0.333984 2.16468 0.333984C3.02648 0.333984 3.7251 1.08018 3.7251 2.00065Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 12 */}
                  {/* End dots svg */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="53"
                    height="40"
                    viewBox="0 0 71 58"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "49%",
                      transform: "translate(-20%, -50%)",
                    }}
                  >
                    <path
                      d="M12.2843 57.3327H46.6917C48.3458 57.3327 49.9218 56.6327 51.0921 55.3827L59.6589 46.2327V43.9994H70.5819V35.666H59.6589V20.666H70.5819V12.3327L60.1894 12.3327L51.0921 2.61602C49.9218 1.36602 48.3458 0.666016 46.6917 0.666016L12.2843 0.666016C10.0529 0.666016 7.97752 1.94935 6.86962 4.03268L5.02831 7.46602C4.10766 9.18268 2.84372 10.666 1.3145 11.7993C0.893181 12.116 0.612305 12.616 0.612305 13.1827L0.612305 44.816C0.612305 45.3827 0.893181 45.8827 1.3145 46.216C2.84372 47.3327 4.10766 48.816 5.02831 50.5327L6.86962 53.966C7.97752 56.0494 10.0529 57.3327 12.2843 57.3327Z"
                      fill="#E11B22"
                    />
                  </svg>

                  {/* Smaller SVG positioned to the right */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 34 34"
                    fill="none"
                    style={{ position: "absolute", left: "47px", top: "17px" }} // Adjust the position as per your requirement
                  >
                    <path
                      d="M0.406494 17.0007C0.406494 26.2007 7.39721 33.6673 16.0108 33.6673C24.6243 33.6673 31.615 26.2007 31.615 17.0007C31.615 7.80065 24.6243 0.333984 16.0108 0.333984C7.39721 0.333984 0.406494 7.80065 0.406494 17.0007Z"
                      fill="#F2F2F2"
                    />
                  </svg>

                  {/* Add text in the middle of the SVG */}
                  <text
                    style={{
                      position: "absolute",
                      left: "50px",
                      top: "14px",
                      color: "#E11B22",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    B
                  </text>

                  {/* Your new SVG */}
                  {/* here under black half start */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="36"
                    viewBox="0 0 66 53"
                    fill="none"
                    className="zindexZero"
                    style={{
                      position: "absolute",
                      left: "47px",
                      top: "19px",
                      transform: "translate(-20%, -20%)",
                    }}
                  >
                    <path
                      d="M7.28417 52.3329H41.6916C43.3456 52.3329 44.9217 51.6329 46.092 50.3829L54.6587 41.2329V38.9996H65.5817V30.6663H54.6587V15.6663H65.5817V7.33294L55.1893 7.33294L48.417 0.0996094V24.7996C48.417 36.3163 39.663 45.6663 28.8805 45.6663H0.106201L1.86948 48.9663C2.97739 51.0496 5.05276 52.3329 7.28417 52.3329Z"
                      fill="#B01B1B"
                    />
                  </svg>
                  {/* Your new SVG blue color*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="9"
                    viewBox="0 0 7 11"
                    fill="none"
                    style={{ position: "absolute", left: "83px", top: "15px" }} // Adjust the position as per your requirement
                    className="zindexOne"
                  >
                    <path
                      d="M0 11H3.5C5.425 11 7 9.58571 7 7.85714L7 3.14286C7 1.41429 5.425 0 3.5 0L0 0L0 1.57143L0 9.42857L0 11Z"
                      fill="#3D71D9"
                    />
                  </svg>
                  {/* Your new SVG blue color*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="9"
                    viewBox="0 0 7 11"
                    fill="none"
                    style={{ position: "absolute", left: "83px", top: "31px" }} // Adjust the position as per your
                    className="zindexOne"
                  >
                    <path
                      d="M0 11H3.5C5.425 11 7 9.58571 7 7.85714L7 3.14286C7 1.41429 5.425 0 3.5 0L0 0L0 1.57143L0 9.42857L0 11Z"
                      fill="#3D71D9"
                    />
                  </svg>
                  {/* Your new 2 SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="5"
                    viewBox="0 0 6 5"
                    fill="none"
                    style={{ position: "absolute", left: "95%", top: "17px" }} // Adjust the position as per your requirement
                    className="zindexZero"
                  >
                    <path
                      d="M0.823486 5L0.823486 0L5.50477 0V5H0.823486Z"
                      fill="#666666"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="12"
                    viewBox="0 0 15 15"
                    fill="none"
                    style={{ position: "absolute", left: "93%", top: "24px" }} // Adjust the position as per your requirement
                    className="zindexZero"
                  >
                    <path
                      d="M0 13.4134C0 12.5008 1.18623 11.8269 2.08639 11.8269C3.88427 11.8269 5.22005 10.0862 5.22005 8.26332V6.61066C5.22005 2.9655 8.14487 0 11.74 0L13.37 0C14.2702 0 15 0.739981 15 1.65266C15 2.56535 14.2702 3.17312 13.37 3.17312L11.74 3.30533C9.94214 3.30533 8.48003 4.78777 8.48003 6.61066V8.26332C8.48003 11.9085 5.15994 15 1.56479 15C0.664629 15 0 14.3261 0 13.4134Z"
                      fill="#E11B22"
                    />
                  </svg>

                  {/* here start red lines */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="882"
                    height="80"
                    viewBox="0 0 100 100"
                    fill="none"
                    style={{ position: "absolute", left: "30%", top: "24px" }} // Adjust the position as per your requirement
                    className="zindexZero"
                  >
                    <path
                      d="M0.202148 1.5131C0.202148 1.5131 248 1.51303 412.5 1.51172C577 1.51041 903.202 124.513 903.202 124.513"
                      stroke="#E11B22"
                      stroke-opacity="0.3"
                      stroke-width="3"
                    />
                  </svg>

                  {/* end red line 1 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="894"
                    height="112"
                    viewBox="0 0 904 126"
                    fill="none"
                    style={{ position: "absolute", left: "55%", top: "24px" }} // Adjust the position as per your requirement
                    className="zindexZero"
                  >
                    <path
                      d="M0.202148 1.5131C0.202148 1.5131 248 1.51303 412.5 1.51172C577 1.51041 903.202 124.513 903.202 124.513"
                      stroke="#E11B22"
                      stroke-opacity="0.4"
                      stroke-width="3"
                    />
                  </svg>
                  {/* end red line 2 */}
                </div>
              </div>
              <div className="mt-8">
                <div
                  className="mr-6"
                  style={{
                    position: "relative",
                    width: "90px",
                    height: "58px",
                  }}
                >
                  {/* Main SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="48"
                    viewBox="0 0 75 70"
                    fill="none"
                    className="zindextwo"
                    style={{
                      position: "absolute",
                      left: "46%",
                      top: "49%",
                      transform: "translate(-20%, -50%)",
                    }}
                  >
                    <path
                      d="M14.0438 70H60.8567L74.9005 55V50H68.6588V52.2333L60.0921 61.3833C58.9217 62.6333 57.3457 63.3333 55.6917 63.3333H21.2842C19.0528 63.3333 16.9775 62.05 15.8695 59.9667L14.0282 56.5333C13.1076 54.8167 11.8436 53.3333 10.3144 52.2167C9.89311 51.8833 9.61223 51.3833 9.61223 50.8167L9.61223 19.1833C9.61223 18.6167 9.89311 18.1167 10.3144 17.8C11.8436 16.6667 13.1076 15.1833 14.0282 13.4667L15.8695 10.0333C16.9775 7.95 19.0528 6.66667 21.2842 6.66667L55.6917 6.66667C57.3457 6.66667 58.9217 7.36667 60.0921 8.61667L69.1894 18.3333H74.9005V15L60.8567 0L14.0438 0L7.80214 11.6667L3.02723 14.7167C1.15472 15.9333 0 18.1 0 20.4333L0 49.5667C0 51.9 1.15472 54.0667 3.02723 55.2833L7.80214 58.3333L14.0438 70Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                  {/* main white end */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="48"
                    viewBox="0 0 75 35"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "46%",
                      top: "70%",
                      transform: "translate(-20%, -50%)",
                    }}
                  >
                    <path
                      d="M14.0438 35L60.8567 35L74.9005 20V15H68.6588V17.2333L60.0921 26.3833C58.9217 27.6333 57.3457 28.3333 55.6917 28.3333L21.2842 28.3333C19.0528 28.3333 16.9775 27.05 15.8695 24.9667L14.0282 21.5333C13.1076 19.8167 11.8436 18.3333 10.3144 17.2167C9.89311 16.8833 9.61223 16.3833 9.61223 15.8167L9.61223 0L0 0L0 14.5667C0 16.9 1.15472 19.0667 3.02723 20.2833L7.80214 23.3333L14.0438 35Z"
                      fill="#CCCCCC"
                    />
                  </svg>
                  {/* main white black end */}

                  {/* jhapsa side erta */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="16"
                    viewBox="0 0 7 16"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "84.5%",
                      top: "50%",
                      transform: "translate(-20%, -50%)",
                    }}
                  >
                    <path
                      d="M0.658691 15.666L0.658691 0.666016L6.9004 0.666016L6.9004 15.666H0.658691Z"
                      fill="#8BAAE8"
                    />
                  </svg>
                  {/* end main jhapsa ta */}
                  {/* start dots svg */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="5"
                    viewBox="0 0 7 7"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "48%",
                      top: "23%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M6.74708 3.66732C6.74708 5.50827 5.34983 7.00065 3.62623 7.00065C1.90263 7.00065 0.505371 5.50827 0.505371 3.66732C0.505371 1.82637 1.90263 0.333984 3.62623 0.333984C5.34983 0.333984 6.74708 1.82637 6.74708 3.66732Z"
                      fill="#F27979"
                    />
                  </svg>
                  {/* end dot 1 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "58%",
                      top: "22%",
                    }}
                    className="zindexOne animate-ping"
                  >
                    <path
                      d="M3.3296 1.66667C3.3296 2.58714 2.63097 3.33333 1.76917 3.33333C0.907367 3.33333 0.20874 2.58714 0.20874 1.66667C0.20874 0.746192 0.907367 0 1.76917 0C2.63097 0 3.3296 0.746192 3.3296 1.66667Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 2 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="5"
                    viewBox="0 0 5 6"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "72%",
                      top: "23%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M4.8346 3.16602C4.8346 4.54673 3.78666 5.66602 2.49396 5.66602C1.20126 5.66602 0.15332 4.54673 0.15332 3.16602C0.15332 1.7853 1.20126 0.666016 2.49396 0.666016C3.78666 0.666016 4.8346 1.7853 4.8346 3.16602Z"
                      fill="#F27979"
                    />
                  </svg>
                  {/* end dot 3 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="6"
                    viewBox="0 0 7 8"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "78%",
                      top: "31%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M7.00856 3.96615C7.00856 5.8071 5.6113 7.29948 3.8877 7.29948C2.1641 7.29948 0.766846 5.8071 0.766846 3.96615C0.766846 2.1252 2.1641 0.632813 3.8877 0.632813C5.6113 0.632813 7.00856 2.1252 7.00856 3.96615Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 4  */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="4"
                    viewBox="0 0 6 5"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "78%",
                      top: "46%",
                    }}
                    className="zindexOne animate-ping"
                  >
                    <path
                      d="M5.53822 2.5C5.53822 3.88071 4.49028 5 3.19757 5C1.90487 5 0.856934 3.88071 0.856934 2.5C0.856934 1.11929 1.90487 0 3.19757 0C4.49028 0 5.53822 1.11929 5.53822 2.5Z"
                      fill="#F27979"
                    />
                  </svg>
                  {/* end dot 5 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3"
                    height="3"
                    viewBox="0 0 4 4"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "77%",
                      top: "60%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M3.41724 1.66667C3.41724 2.58714 2.71861 3.33333 1.85681 3.33333C0.995014 3.33333 0.296387 2.58714 0.296387 1.66667C0.296387 0.746192 0.995014 0 1.85681 0C2.71861 0 3.41724 0.746192 3.41724 1.66667Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 6 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="5"
                    viewBox="0 0 5 6"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "76%",
                      top: "67%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M4.97767 3.16602C4.97767 4.54673 3.92973 5.66602 2.63703 5.66602C1.34433 5.66602 0.296387 4.54673 0.296387 3.16602C0.296387 1.7853 1.34433 0.666016 2.63703 0.666016C3.92973 0.666016 4.97767 1.7853 4.97767 3.16602Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 7 */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="5"
                    viewBox="0 0 6 6"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "67%",
                      top: "71%",
                    }}
                    className="zindexOne animate-ping"
                  >
                    <path
                      d="M5.61488 2.83398C5.61488 4.2147 4.56694 5.33398 3.27424 5.33398C1.98153 5.33398 0.933594 4.2147 0.933594 2.83398C0.933594 1.45327 1.98153 0.333984 3.27424 0.333984C4.56694 0.333984 5.61488 1.45327 5.61488 2.83398Z"
                      fill="#F27979"
                    />
                  </svg>
                  {/* end dot 8 */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 7 8"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "58%",
                      top: "71%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M6.38819 3.76693C6.38819 5.60788 4.99094 7.10026 3.26734 7.10026C1.54374 7.10026 0.146484 5.60788 0.146484 3.76693C0.146484 1.92598 1.54374 0.433594 3.26734 0.433594C4.99094 0.433594 6.38819 1.92598 6.38819 3.76693Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 9 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="6"
                    viewBox="0 0 7 8"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "49%",
                      top: "68%",
                    }}
                    className="zindexOne animate-ping"
                  >
                    <path
                      d="M6.38819 3.76693C6.38819 5.60788 4.99094 7.10026 3.26734 7.10026C1.54374 7.10026 0.146484 5.60788 0.146484 3.76693C0.146484 1.92598 1.54374 0.433594 3.26734 0.433594C4.99094 0.433594 6.38819 1.92598 6.38819 3.76693Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 10 */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="5"
                    viewBox="0 0 5 6"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "44%",
                      top: "50%",
                    }}
                    className="zindexOne animate-pulse"
                  >
                    <path
                      d="M4.72523 3.16602C4.72523 4.54673 3.67729 5.66602 2.38459 5.66602C1.09189 5.66602 0.0439453 4.54673 0.0439453 3.16602C0.0439453 1.7853 1.09189 0.666016 2.38459 0.666016C3.67729 0.666016 4.72523 1.7853 4.72523 3.16602Z"
                      fill="#F27979"
                    />
                  </svg>
                  {/* end dot 11 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "45%",
                      top: "37%",
                    }}
                    className="zindexOne animate-ping"
                  >
                    <path
                      d="M3.7251 2.00065C3.7251 2.92113 3.02648 3.66732 2.16468 3.66732C1.30288 3.66732 0.604248 2.92113 0.604248 2.00065C0.604248 1.08018 1.30288 0.333984 2.16468 0.333984C3.02648 0.333984 3.7251 1.08018 3.7251 2.00065Z"
                      fill="#73020C"
                    />
                  </svg>
                  {/* end dot 12 */}
                  {/* End dots svg */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="53"
                    height="40"
                    viewBox="0 0 71 58"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "49%",
                      transform: "translate(-20%, -50%)",
                    }}
                  >
                    <path
                      d="M12.2843 57.3327H46.6917C48.3458 57.3327 49.9218 56.6327 51.0921 55.3827L59.6589 46.2327V43.9994H70.5819V35.666H59.6589V20.666H70.5819V12.3327L60.1894 12.3327L51.0921 2.61602C49.9218 1.36602 48.3458 0.666016 46.6917 0.666016L12.2843 0.666016C10.0529 0.666016 7.97752 1.94935 6.86962 4.03268L5.02831 7.46602C4.10766 9.18268 2.84372 10.666 1.3145 11.7993C0.893181 12.116 0.612305 12.616 0.612305 13.1827L0.612305 44.816C0.612305 45.3827 0.893181 45.8827 1.3145 46.216C2.84372 47.3327 4.10766 48.816 5.02831 50.5327L6.86962 53.966C7.97752 56.0494 10.0529 57.3327 12.2843 57.3327Z"
                      fill="#E11B22"
                    />
                  </svg>

                  {/* Smaller SVG positioned to the right */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 34 34"
                    fill="none"
                    style={{ position: "absolute", left: "47px", top: "17px" }} // Adjust the position as per your requirement
                  >
                    <path
                      d="M0.406494 17.0007C0.406494 26.2007 7.39721 33.6673 16.0108 33.6673C24.6243 33.6673 31.615 26.2007 31.615 17.0007C31.615 7.80065 24.6243 0.333984 16.0108 0.333984C7.39721 0.333984 0.406494 7.80065 0.406494 17.0007Z"
                      fill="#F2F2F2"
                    />
                  </svg>

                  {/* Add text in the middle of the SVG */}
                  <text
                    style={{
                      position: "absolute",
                      left: "50px",
                      top: "18px",
                      color: "#E11B22",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    AB
                  </text>

                  {/* Your new SVG */}
                  {/* here under black half start */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="36"
                    viewBox="0 0 66 53"
                    fill="none"
                    className="zindexZero"
                    style={{
                      position: "absolute",
                      left: "47px",
                      top: "19px",
                      transform: "translate(-20%, -20%)",
                    }}
                  >
                    <path
                      d="M7.28417 52.3329H41.6916C43.3456 52.3329 44.9217 51.6329 46.092 50.3829L54.6587 41.2329V38.9996H65.5817V30.6663H54.6587V15.6663H65.5817V7.33294L55.1893 7.33294L48.417 0.0996094V24.7996C48.417 36.3163 39.663 45.6663 28.8805 45.6663H0.106201L1.86948 48.9663C2.97739 51.0496 5.05276 52.3329 7.28417 52.3329Z"
                      fill="#B01B1B"
                    />
                  </svg>
                  {/* Your new SVG blue color*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="9"
                    viewBox="0 0 7 11"
                    fill="none"
                    style={{ position: "absolute", left: "83px", top: "15px" }} // Adjust the position as per your requirement
                    className="zindexOne"
                  >
                    <path
                      d="M0 11H3.5C5.425 11 7 9.58571 7 7.85714L7 3.14286C7 1.41429 5.425 0 3.5 0L0 0L0 1.57143L0 9.42857L0 11Z"
                      fill="#3D71D9"
                    />
                  </svg>
                  {/* Your new SVG blue color*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="9"
                    viewBox="0 0 7 11"
                    fill="none"
                    style={{ position: "absolute", left: "83px", top: "31px" }} // Adjust the position as per your
                    className="zindexOne"
                  >
                    <path
                      d="M0 11H3.5C5.425 11 7 9.58571 7 7.85714L7 3.14286C7 1.41429 5.425 0 3.5 0L0 0L0 1.57143L0 9.42857L0 11Z"
                      fill="#3D71D9"
                    />
                  </svg>
                  {/* Your new 2 SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="5"
                    viewBox="0 0 6 5"
                    fill="none"
                    style={{ position: "absolute", left: "95%", top: "17px" }} // Adjust the position as per your requirement
                    className="zindexZero"
                  >
                    <path
                      d="M0.823486 5L0.823486 0L5.50477 0V5H0.823486Z"
                      fill="#666666"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="12"
                    viewBox="0 0 15 15"
                    fill="none"
                    style={{ position: "absolute", left: "93%", top: "24px" }} // Adjust the position as per your requirement
                    className="zindexZero"
                  >
                    <path
                      d="M0 13.4134C0 12.5008 1.18623 11.8269 2.08639 11.8269C3.88427 11.8269 5.22005 10.0862 5.22005 8.26332V6.61066C5.22005 2.9655 8.14487 0 11.74 0L13.37 0C14.2702 0 15 0.739981 15 1.65266C15 2.56535 14.2702 3.17312 13.37 3.17312L11.74 3.30533C9.94214 3.30533 8.48003 4.78777 8.48003 6.61066V8.26332C8.48003 11.9085 5.15994 15 1.56479 15C0.664629 15 0 14.3261 0 13.4134Z"
                      fill="#E11B22"
                    />
                  </svg>

                  {/* here start red lines */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1580"
                    height="116"
                    viewBox="0 0 90 90"
                    fill="none"
                    style={{
                      position: "absolute",
                      left: "-635px",
                      top: "24px",
                    }} // Adjust the position as per your requirement
                    className="zindexZero"
                  >
                    <path
                      d="M0.202148 1.5131C0.202148 1.5131 248 1.51303 412.5 1.51172C577 1.51041 903.202 124.513 903.202 124.513"
                      stroke="#E11B22"
                      stroke-opacity="0.3"
                      stroke-width="3"
                    />
                  </svg>

                  {/* end red line 1 */}
                </div>
              </div>
              {/* end third blood bag 3 */}

              {/* here remove end */}
            </div>
            <div className="col-span-8"></div>
            <div className="col-span-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  {/* Your SVG content */}
                  <circle cx="12.5" cy="12.5" r="10" fill="#E11B22" />

                  {/* Add text in the middle of the SVG */}
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="7"
                    fontFamily="Arial"
                    fontWeight="500"
                  >
                    O
                  </text>
                </svg>
              </div>
              {/* end O */}
              <div className="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  {/* Your SVG content */}
                  <circle cx="12.5" cy="12.5" r="10" fill="#E11B22" />

                  {/* Add text in the middle of the SVG */}
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="7"
                    fontFamily="Arial"
                    fontWeight="500"
                  >
                    A
                  </text>
                </svg>
              </div>
              {/* end A */}
              <div className="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  {/* Your SVG content */}
                  <circle cx="12.5" cy="12.5" r="10" fill="#E11B22" />

                  {/* Add text in the middle of the SVG */}
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="7"
                    fontFamily="Arial"
                    fontWeight="500"
                  >
                    B
                  </text>
                </svg>
              </div>
              {/* end B*/}
              <div className="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  {/* Your SVG content */}
                  <circle cx="12.5" cy="12.5" r="10" fill="#E11B22" />

                  {/* Add text in the middle of the SVG */}
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="7"
                    fontFamily="Arial"
                    fontWeight="500"
                  >
                    AB
                  </text>
                </svg>
              </div>
              {/* end AB*/}
            </div>
          </div>
        </div>
        {/* END RED ANIMATION */}
      </div>

      <div className="pb-96"></div>
    </div>
  );
}
