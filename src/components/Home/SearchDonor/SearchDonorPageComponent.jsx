import React from "react";
import TitleTopComponent from "../../Blood/TitleTopComponent";
import donor_card_icon from "../../../assets/donor_card_icon.jpeg";
import donor_card_icon3 from "../../../assets/donor_card_icon3.jpeg";
import donor_card_icon2 from "../../../assets/donor_card_icon2.jpeg";
import DonorCardComponent from "../../DonorCardComponent";

const SearchDonorPageComponent = () => {
  return (
    <div className="mx-28">
      <div>
        <TitleTopComponent secondTitle={"Blood"} thirdTitle={"Request Blood"} />
      </div>

      <div>
        <h2 className="font-bold text-brandPrimary text-3xl">
          Personalized Donor
        </h2>
      </div>

      <div className="my-4">
        <hr className="border-t-[2px] border-[#44444480]" />
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-3 border-r border-[#44444480] pb-4 h-full flex flex-col">
          <div className="mr-[25px] rounded-xl shadow-top-right-left-bottom-lg h-full flex-grow mt-4">
            <div className="mx-4">
              <div className="ml-6 pt-[20px]">
                <p className="font-semibold text-[#444]">Area</p>
              </div>

              <div className="my-4">
                <hr className="border-t-[1px] border-[#44444480]" />
              </div>

              <div className="mt-0 ml-[8px]">
                {/* start */}
                <div className="flex items-center px-4 py-0">
                  <div>
                    <input
                      type="checkbox"
                      className="border-2 border-[#444444] rounded-sm custom-checkbox"
                    />
                  </div>
                  <div className="ml-2 flex justify-center items-center">
                    <p className="text-sm text-[#444444]">Area</p>
                  </div>
                </div>
                {/* end */}
                <div className="flex items-center px-4 py-4">
                  <div>
                    <input
                      type="checkbox"
                      className="border-2 border-[#444444] rounded-sm custom-checkbox"
                      checked
                    />
                  </div>
                  <div className="ml-2 flex justify-center items-center">
                    <p className="text-sm text-[#444444]">Area</p>
                  </div>
                </div>
                {/* end */}
                <div className="flex items-center px-4 pb-2 pt-0">
                  <div>
                    <input
                      type="checkbox"
                      className="border-2 border-[#444444] rounded-sm custom-checkbox"
                    />
                  </div>
                  <div className="ml-2 flex justify-center items-center">
                    <p className="text-sm text-[#444444]">Area</p>
                  </div>
                </div>
                {/* end */}
                <div className="flex items-center px-4 pb-2 pt-2">
                  <div>
                    <input
                      type="checkbox"
                      className="border-2 border-[#444444] rounded-sm custom-checkbox"
                      checked
                    />
                  </div>
                  <div className="ml-2 flex justify-center items-center">
                    <p className="text-sm text-[#444444]">Area</p>
                  </div>
                </div>
                {/* end */}
                <div className="flex items-center px-4 pb-2 pt-2">
                  <div>
                    <input
                      type="checkbox"
                      className="border-2 border-[#444444] rounded-sm custom-checkbox"
                    />
                  </div>
                  <div className="ml-2 flex justify-center items-center">
                    <p className="text-sm text-[#444444]">Area</p>
                  </div>
                </div>
                {/* end */}
                <div className="flex items-center px-4 pb-2 pt-2">
                  <div>
                    <input
                      type="checkbox"
                      className="border-2 border-[#444444] rounded-sm custom-checkbox"
                      checked
                    />
                  </div>
                  <div className="ml-2 flex justify-center items-center">
                    <p className="text-sm text-[#444444]">Area</p>
                  </div>
                </div>
                {/* end */}
                <div className="flex items-center px-4 pb-2 pt-2">
                  <div>
                    <input
                      type="checkbox"
                      className="border-2 border-[#444444] rounded-sm custom-checkbox"
                    />
                  </div>
                  <div className="ml-2 flex justify-center items-center">
                    <p className="text-sm text-[#444444]">Area</p>
                  </div>
                </div>
                {/* end */}
                <div className="flex items-center px-4 pb-16 pt-2">
                  <div>
                    <input
                      type="checkbox"
                      className="border-2 border-[#444444] rounded-sm custom-checkbox"
                      checked
                    />
                  </div>
                  <div className="ml-2 flex justify-center items-center">
                    <p className="text-sm text-[#444444]">Area</p>
                  </div>
                </div>
                {/* end */}
              </div>
            </div>
          </div>
        </div>
        {/* half */}
        <div className="col-span-9 p-4 px-6 pt-1">
          <div className=" ">
            <div className="flex justify-between items-center">
              <div className="">
                <p className="text-[#444] font-semibold">
                  People With <span className="text-brandPrimary">A+</span>{" "}
                  Positive Blood Group Found Near You
                </p>
                <p className="text-[#44444480] mt-2">Showing 9999 Results</p>
              </div>
              <div className="flex justify-left items-center gap-2">
                <div>
                  <input
                    type="checkbox"
                    className="border-2 border-[#444444] rounded-sm custom-checkbox"
                  />
                </div>
                <div>
                  <div className="bg-brandPrimary rounded-md text-white px-4 py-1 font-semibold flex justify-between items-center gap-4">
                    <div className="text-lg">Send Message</div>

                    <div className="border-l-[0.2px] border-white p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20.34 9.32001L6.34 2.32001C5.78749 2.04502 5.16362 1.94712 4.55344 2.03966C3.94326 2.1322 3.37646 2.41068 2.93033 2.83712C2.48421 3.26357 2.18046 3.81723 2.0605 4.42262C1.94054 5.02801 2.0102 5.65566 2.26 6.22001L4.66 11.59C4.71446 11.7198 4.74251 11.8592 4.74251 12C4.74251 12.1408 4.71446 12.2802 4.66 12.41L2.26 17.78C2.0567 18.2367 1.97076 18.737 2.00998 19.2354C2.0492 19.7337 2.21235 20.2144 2.48459 20.6337C2.75682 21.053 3.12953 21.3976 3.56883 21.6362C4.00812 21.8748 4.50009 21.9999 5 22C5.46823 21.9953 5.92949 21.886 6.35 21.68L20.35 14.68C20.8466 14.4302 21.264 14.0473 21.5557 13.5741C21.8474 13.1009 22.0018 12.5559 22.0018 12C22.0018 11.4441 21.8474 10.8992 21.5557 10.4259C21.264 9.9527 20.8466 9.56982 20.35 9.32001H20.34ZM19.45 12.89L5.45 19.89C5.26617 19.9783 5.05973 20.0082 4.85839 19.9759C4.65705 19.9435 4.47041 19.8503 4.32352 19.7089C4.17662 19.5674 4.07648 19.3844 4.03653 19.1844C3.99658 18.9845 4.01873 18.777 4.1 18.59L6.49 13.22C6.52094 13.1483 6.54766 13.0748 6.57 13H13.46C13.7252 13 13.9796 12.8946 14.1671 12.7071C14.3546 12.5196 14.46 12.2652 14.46 12C14.46 11.7348 14.3546 11.4804 14.1671 11.2929C13.9796 11.1054 13.7252 11 13.46 11H6.57C6.54766 10.9252 6.52094 10.8517 6.49 10.78L4.1 5.41001C4.01873 5.22297 3.99658 5.01556 4.03653 4.81558C4.07648 4.6156 4.17662 4.43261 4.32352 4.29115C4.47041 4.1497 4.65705 4.05654 4.85839 4.02416C5.05973 3.99178 5.26617 4.02174 5.45 4.11001L19.45 11.11C19.6138 11.1939 19.7513 11.3214 19.8473 11.4785C19.9433 11.6355 19.994 11.816 19.994 12C19.994 12.1841 19.9433 12.3645 19.8473 12.5216C19.7513 12.6786 19.6138 12.8061 19.45 12.89Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*send message button end */}
            <div className="my-4">
              <hr className="border-t-[1px] border-[#44444480]" />
            </div>
            {/* horizontal end */}

            {/* START DONOR CARD */}
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <DonorCardComponent
                  image={donor_card_icon}
                  donorName="MD. Salaudding Ayub"
                  donorAddress="Adabor, Dhaka"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.“ "
                  bloodGroup="A+"
                  age="25"
                  weight="58"
                  height="5 Feet 7 inch"
                  extraColumnLeft=""
                  extraColumnRight=""
                />
              </div>
              <div className="col-span-1">
                <DonorCardComponent
                  image={donor_card_icon3}
                  donorName="MD. Salaudding Ayub"
                  donorAddress="Adabor, Dhaka"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.“ "
                  bloodGroup="A+"
                  age="25"
                  weight="58"
                  height="5 Feet 7 inch"
                  extraColumnLeft=""
                  extraColumnRight=""
                />
              </div>
              <div className="col-span-1 last-child-gap-0">
                <DonorCardComponent
                  image={donor_card_icon2}
                  donorName="MD. Salaudding Ayub"
                  donorAddress="Adabor, Dhaka"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.“ "
                  bloodGroup="A+"
                  age="25"
                  weight="58"
                  height="5 Feet 7 inch"
                  extraColumnLeft=""
                  extraColumnRight=""
                />
              </div>
            </div>
            {/* end 1st three */}
            <div className="grid grid-cols-3 gap-4 mt-5">
              <div className="col-span-1">
                <DonorCardComponent
                  image={donor_card_icon}
                  donorName="MD. Salaudding Ayub"
                  donorAddress="Adabor, Dhaka"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.“ "
                  bloodGroup="A+"
                  age="25"
                  weight="58"
                  height="5 Feet 7 inch"
                  extraColumnLeft=""
                  extraColumnRight=""
                />
              </div>
              <div className="col-span-1">
                <DonorCardComponent
                  image={donor_card_icon3}
                  donorName="MD. Salaudding Ayub"
                  donorAddress="Adabor, Dhaka"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.“ "
                  bloodGroup="A+"
                  age="25"
                  weight="58"
                  height="5 Feet 7 inch"
                  extraColumnLeft=""
                  extraColumnRight=""
                />
              </div>
              <div className="col-span-1 last-child-gap-0">
                <DonorCardComponent
                  image={donor_card_icon2}
                  donorName="MD. Salaudding Ayub"
                  donorAddress="Adabor, Dhaka"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.“ "
                  bloodGroup="A+"
                  age="25"
                  weight="58"
                  height="5 Feet 7 inch"
                  extraColumnLeft=""
                  extraColumnRight=""
                />
              </div>
            </div>
            {/* end 2nd three */}
            <div className="grid grid-cols-3 gap-4 mt-5">
              <div className="col-span-1">
                <DonorCardComponent
                  image={donor_card_icon}
                  donorName="Robiul Islam"
                  donorAddress="Adabor, Dhaka"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.“ "
                  bloodGroup="A+"
                  age="25"
                  weight="58"
                  height="5 Feet 7 inch"
                  extraColumnLeft=""
                  extraColumnRight=""
                />
              </div>
              <div className="col-span-1">
                <DonorCardComponent
                  image={donor_card_icon3}
                  donorName="MD. Junaid Rahman"
                  donorAddress="Adabor, Dhaka"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.“ "
                  bloodGroup="A+"
                  age="25"
                  weight="58"
                  height="5 Feet 7 inch"
                  extraColumnLeft=""
                  extraColumnRight=""
                />
              </div>
              <div className="col-span-1 last-child-gap-0">
                <DonorCardComponent
                  image={donor_card_icon2}
                  donorName="MD. Salaudding Ayub"
                  donorAddress="Adabor, Dhaka"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.“ "
                  bloodGroup="A+"
                  age="25"
                  weight="58"
                  height="5 Feet 7 inch"
                  extraColumnLeft=""
                  extraColumnRight=""
                />
              </div>
            </div>
            {/* end 3rd card */}
            <div className="grid grid-cols-3 gap-4 mt-5">
              <div className="col-span-1">
                <DonorCardComponent
                  image={donor_card_icon}
                  donorName="MD. Salaudding Ayub"
                  donorAddress="Adabor, Dhaka"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.“ "
                  bloodGroup="A+"
                  age="25"
                  weight="58"
                  height="5 Feet 7 inch"
                  extraColumnLeft=""
                  extraColumnRight=""
                />
              </div>
              <div className="col-span-1">
                <DonorCardComponent
                  image={donor_card_icon3}
                  donorName="MD. Salaudding Ayub"
                  donorAddress="Adabor, Dhaka"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.“ "
                  bloodGroup="A+"
                  age="25"
                  weight="58"
                  height="5 Feet 7 inch"
                  extraColumnLeft=""
                  extraColumnRight=""
                />
              </div>
              <div className="col-span-1 last-child-gap-0">
                <DonorCardComponent
                  image={donor_card_icon2}
                  donorName="MD. Salaudding Ayub"
                  donorAddress="Adabor, Dhaka"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.“ "
                  bloodGroup="A+"
                  age="25"
                  weight="58"
                  height="5 Feet 7 inch"
                  extraColumnLeft=""
                  extraColumnRight=""
                />
              </div>
            </div>
            {/* end 4rth card */}
            {/* end 4rth card */}
            {/* END DONOR CARD */}
            {/* end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDonorPageComponent;
