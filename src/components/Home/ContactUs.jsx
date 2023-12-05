import React from "react";
import about from "../../assets/ab.jpeg";

export default function ContactUs() {
  return (
    <div>
      <div className="grid grid-cols-2 lg:mr-40 md:mr-0 mr-40 lg:ml-20 md:ml-0 ml-20 rounded-md bg-white lg:mt-12 md:mt-12 mt-12 p-20 pt-0">
        {/* First Card */}
        <div className="bg-white lg:ml-6 md:ml-0 ml-6 mt-2 mb-8 rounded col-span-1">
          <div className="lg:ml-24 md:ml-0 ml-24">
            <button className="bg-brandPrimary text-white lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md ml-2 mt-2 font-bold shadow-md">
              Contact Us
            </button>
            <p className="text-gray-600 mb-2 mt-2 text-2xl font-bold ml-2">
              You can <span className="text-brandPrimary">Connect</span> with us
            </p>
            <p className="text-gray-600 mb-4 mt-2 text-2xl font-bold ml-2">
              When Need <span className="text-brandPrimary">Help</span>!
            </p>
          </div>
          <div className="lg:border-l-[45px] md:border-l-[30px] border-l-[45px] lg:border-t-[45px] md:border-t-[30px] border-t-[45px] lg:ml-28 md:ml-0 ml-28 rounded-tl-xl rounded-bl-xl border-brandPrimary bg-brandPrimary mt-20 shadow-bottom flex justify-end ">
            {" "}
            <img
              src={about}
              alt="Contact Us"
              className="w-auto h-auto rounded-tl-xl rounded-bl-xl"
            />
          </div>
        </div>

        {/* Second Card */}
        <div className="mb-8 rounded-md rounded-bl-none shadow-right-bottom-two col-span-1 bg-[#E11B2266] ">
          <div className="bg-white p-6 pb-2 mb-0 rounded-md">
            <form className="ml-8 mr-8">
              <div className="mb-6 ml-2 mr-2">
                <input
                  type="text"
                  id="fullName"
                  className="w-full lg:px-6 md:px-2 px-6 lg:py-6 md:py-4 py-6 border border-[#00000080] rounded-lg focus:outline-none focus:border-brandPrimary shadow-bottom-right"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="mb-6 ml-2 mr-2">
                <input
                  type="email"
                  id="email"
                  className="w-full lg:px-6 md:px-2 px-6 lg:py-6 md:py-4 py-6 border border-[#00000080] rounded-lg focus:outline-none focus:border-brandPrimary shadow-bottom-right"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-8 ml-2 mr-2">
                <input
                  type="text"
                  id="subject"
                  className="w-full lg:px-6 md:px-2 px-6 lg:py-6 md:py-4 py-6 border border[#00000080] rounded-lg focus:outline-none focus:border-brandPrimary shadow-bottom-right"
                  placeholder="Enter Subject"
                />
              </div>
              <div className="mb-2 ml-2 mr-2">
                <textarea
                  id="message"
                  rows="4"
                  class="w-full px-4 py-2 border border[#00000080] rounded-lg focus:outline-none focus:border-brandPrimary shadow-bottom-right resize-none"
                  placeholder="Write Message"
                ></textarea>
              </div>

              <div className="flex justify-center mb-2">
                <button
                  type="submit"
                  className="bg-brandPrimary border-brandPrimary  text-white px-4 py-2 rounded-md "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
