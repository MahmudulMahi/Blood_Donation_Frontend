import React, { useState } from "react";
import map from "../../assets/map.jpeg";
import RedVector from "../../assets/icons/RedVector.png";

const testimonials = [
  {
    id: 1,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make “",
    clientName: "Name Of the User",
    imageSrc: map,
  },
  {
    id: 2,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to“",
    clientName: "Jane Smith",
    imageSrc: map,
  },
  // Add more testimonials as needed
];

export default function ClientsThink() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePagination = (index) => {
    setActiveIndex(index);
  };

  const totalPages = testimonials.length;

  return (
    <div className="lg:mx-24 md:mx-28 mx-28">
      <div className="mt-0 flex justify-center items-center">
        <div className="w-72">
          <div className="bg-brandPrimary rounded-md text-white px-1 py-1 text-center font-semibold h-12">
            <div className="mt-2">What Our Clients Think</div>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4">
        <div className="roundedTopLeftandBottomRight shadow-top-right-left-bottom-lg pb-12 pt-4">
          <div className="flex items-center justify-between py-4 mx-6">
            <div className="flex flex-col text-left">
              <div>
                <p
                  className="text-[#555] font-semibold mb-2 pl-8"
                  style={{
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  {testimonials[activeIndex].clientName}
                </p>
              </div>
              <div
                className="pr-52 pl-8 text-left text-5xl text-[#555] "
                style={{
                  fontFamily: "Poppins",
                }}
              >
                ❝
              </div>
              <div className="pr-52 pl-[55px] text-left -mt-[26px]">
                <p className="text-gray-800 text-md">
                  {testimonials[activeIndex].content}
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 -mt-32">
              <div className="">
                <img
                  src={testimonials[activeIndex].imageSrc}
                  alt="ClientImage"
                  className="w-48 h-48 rounded-full"
                />
                <div className="flex -mt-48 ml-36">
                  {" "}
                  <img
                    src={RedVector}
                    alt="ClientImage"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination at the bottom */}
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={() =>
              handlePagination((activeIndex - 1 + totalPages) % totalPages)
            }
            className="mx-1 px-2 py-1 text-brandPrimary"
          >
            {"<"}
          </button>
          <div className="mx-1 px-2 py-1 text-brandPrimary">
            {`${activeIndex + 1}/${totalPages}`}
          </div>
          <button
            onClick={() => handlePagination((activeIndex + 1) % totalPages)}
            className="mx-1 px-2 py-1 text-brandPrimary"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
