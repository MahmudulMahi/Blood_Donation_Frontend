import React from "react";
import { IoCallOutline, IoMedicalOutline } from "react-icons/io5";

export default function AboutProject() {
  return (
    <div className="mt-80">
      <br></br>
      <div className="flex justify-end mt-4 text-xl font-semibold">
        <div className="">
          <p
            className="text-brandPrimary border-2 border-red-500 rounded-full px-4 py-2 shadow-md text-sm"
          >
            Contact with Us
          </p>
        </div>
        <div className=" ml-2 mr-4">
          <div className="rounded-full border border-brandPrimary border-rounded p-2 bg-brandPrimary text-white">
            <IoCallOutline className="text-xl" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 text-xl font-semibold">
        The gift of blood is a gift
      </div>

      <div className="flex justify-center text-xl font-semibold">
        to someone's life”
      </div>
      <div className="flex justify-center text-l text-brandPrimary font-semibold">
        John Doe
      </div>
      <div className="flex justify-center mt-12  space-x-8">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl border border-pink-300"
          >
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                alt="img-blur-shadow"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                UI/UX Review Check
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to "Naviglio" where you can enjoy the main
                night life in Barcelona.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="select-none rounded-lg bg-brandPrimary hover:bg-transparent hover:border-brandPrimary hover:text-brandPrimary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
