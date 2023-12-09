import React, { useState } from "react";
import map from "../../assets/map.jpeg";

const testimonials = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    clientName: "John Doe",
    imageSrc: map,
  },
  {
    id: 2,
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
    <div>
      <div className="mt-0 flex justify-center items-center">
        <div className="w-72">
          <div className="bg-brandPrimary text-white px-1 py-1 rounded-md text-center font-semibold h-12">
            <div className="mt-2">What Our Clients Think</div>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 border rounded-md shadow-md mr-32 ml-32 h-60">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-4">
            <img
              src={testimonials[activeIndex].imageSrc}
              alt={testimonials[activeIndex].clientName}
              className="w-32 h-32 rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-brandPrimary font-semibold text-lg mb-2">
              {testimonials[activeIndex].clientName}
            </p>
            <p className="text-gray-800">{testimonials[activeIndex].content}</p>
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
