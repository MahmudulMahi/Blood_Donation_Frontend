import React from "react";
import TitleTopComponent from "../../components/Blood/TitleTopComponent";

export default function LearnAboutBloodPage() {
  return (
    <div className="mx-28">
      <div>
        <TitleTopComponent
          secondTitle={"Blood"}
          thirdTitle={"Learn About Blood"}
          
        />
      </div>

      <div className="mt-2">
        <button className="bg-brandPrimary text-[18px] text-white py-3 px-4 rounded-lg ml-0">
          Learn About Blood
        </button>
        <div className="about-blood-div-border pb-8 -mt-6 rounded-lg">
          <div className="p-8 pb-0 text-[12px] pt-10">
            <p>
              Blood is a specialized body fluid. It has four main components:
              plasma, red blood cells, white blood cells, and platelets. Blood
              has many different functions, including:
            </p>
          </div>

          <div>
            <ul className="text-[12px] pl-12 mt-2 font-semibold ul-li">
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

          <div className="pl-8 pr-8 mt-2 text-[12px]">
            <p className="text-justify">
              The blood that runs through the veins, arteries, and capillaries
              is known as whole blood, a mixture of about 55 percent plasma and
              45 percent blood cells. About 7 to 8 percent of your total body
              weight is blood. An average-sized man has about 12 pints of blood
              in his body, and an average-sized woman has about nine pints.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8 text-[#444] text-[20px] font-bold">
        “Every Blood Is Different“
      </div>

      <div className="mt-6">
        <button className="bg-brandPrimary text-[18px] text-white py-3 px-4 rounded-lg ml-0">
          How Blood Type Is Determined
        </button>
        <div className="about-blood-div-border pb-8 -mt-6 rounded-lg">
          <div className="p-8 pb-0 text-[12px] pt-10">
            <p>
              Blood types are determined by the presence or absence of certain
              antigens – substances that can trigger an immune response if they
              are foreign to the body. Since some antigens can trigger a
              patient's immune system to attack the transfused blood, safe blood
              transfusions depend on careful blood typing and cross-matching.{" "}
              <span className="font-semibold">
                Do you know what blood type is safe for you if you need a
                transfusion?
              </span>
            </p>
          </div>

          <div className="pl-8 pr-8 pt-8 text-[12px]">
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
        <div className="flex justify-center items-center mt-8 text-[#444] font-bold">
          Click on a blood type below to learn more
        </div>

        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className="col-span-3">
            <div className="flex flex-col justify-end items-end mt-28 ">
              <div>
                <p className="bg-brandPrimary rounded-full text-[18px] text-center text-white px-6 py-2 learn-about-blood-button-border w-36">
                  Group A 
                </p>
              </div>
              <div className="mt-6">
                <p className="rounded-full text-[18px] text-center text-[#44444480] px-6 py-2 learn-about-blood-button-border w-36">
                  Group B
                </p>
              </div>

              <div className="mt-6">
                <p className="rounded-full text-[18px] text-center text-[#44444480] px-6 py-2 learn-about-blood-button-border w-36">
                  Group AB
                </p>
              </div>
              <div className="mt-6">
                <p className="rounded-full text-[18px] text-center text-[#44444480] px-6 py-2 learn-about-blood-button-border w-36">
                  Group O
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6 mt-8">
            <div className="flex justify-center mt-8 mb-8 ">
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

            <div className="flex -mt-[418px] ml-[135px]">
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
          <div className="col-span-3">
            <div className="text-[#444444] flex flex-col justify-start items-start mt-36">
              <p className="text-[24px] font-semibold">Group A</p>

              <p className="text-[14px] mt-8 font-semibold">has only the A antigen on red cells (and B antibody in the plasma)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-96"></div>
    </div>
  );
}
