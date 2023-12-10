import React from "react";
import about from "../../assets/ab.jpeg";

export default function ContactUs() {
  return (
    <div>
      <div className="grid grid-cols-2 lg:mr-40 md:mr-0 mr-0 lg:ml-20 md:ml-0 ml-0 rounded-md bg-transparent lg:-mt-[15px] md:mt-12 mt-0 lg:p-20 md:p-20 p-12 pt-0">
        {/* First Card */}
        <div className="bg-white lg:ml-6 md:ml-0 ml-0 mt-2 lg:mb-0 md:mb-0 mb-8 rounded lg:col-span-1 md:col-span-1 col-span-2">
          <div className="lg:ml-24 md:ml-0 ml-0">
            <button className="bg-brandPrimary text-white lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md ml-2 lg:mt-2 md:mt-2 mt-0 font-bold shadow-md">
              Contact Us
            </button>
            <p className="text-gray-600 mb-2 mt-2 text-2xl font-bold ml-2">
              You can <span className="text-brandPrimary">Connect</span> with us
            </p>
            <p className="text-gray-600 mb-4 mt-2 text-2xl font-bold ml-2">
              When Need <span className="text-brandPrimary">Help</span>!
            </p>
          </div>
          <div className="lg:border-l-[45px] md:border-l-[30px] border-l-[15px] lg:border-t-[45px] md:border-t-[30px] border-t-[15px] lg:ml-28 md:ml-0 ml-0 rounded-tl-xl rounded-bl-xl lg:rounded-br-none md:rounded-br-none rounded-br-xl border-brandPrimary bg-brandPrimary lg:mt-20 md:mt-20 mt-8 shadow-bottom flex justify-end ">
            {" "}
            <img
              src={about}
              alt="Contact Us"
              className="w-auto h-auto rounded-tl-xl rounded-bl-xl lg:rounded-br-none md:rounded-br-none rounded-br-xl"
            />
          </div>
        </div>

        {/* Second Card */}
        <div className="mb-0 rounded-md rounded-bl-none shadow-right-bottom-two lg:col-span-1 md:col-span-1 col-span-2 bg-[#E11B2266] ">
          <div className="bg-white p-6 pb-2 mb-0 rounded-md">
            <form className="lg:ml-8 md:ml-8 ml-0 lg:mr-8 md:mr-8 mr-0">
              <div className="mb-6 ml-2 mr-2">
                <input
                  type="text"
                  id="fullName"
                  className="w-full lg:px-6 md:px-2 px-2 lg:py-6 md:py-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-brandPrimary shadow-bottom-right"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="mb-6 ml-2 mr-2">
                <input
                  type="email"
                  id="email"
                  className="w-full lg:px-6 md:px-2 px-2 lg:py-6 md:py-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-brandPrimary shadow-bottom-right"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-8 ml-2 mr-2">
                <input
                  type="text"
                  id="subject"
                  className="w-full lg:px-6 md:px-2 px-2 lg:py-6 md:py-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-brandPrimary shadow-bottom-right"
                  placeholder="Enter Subject"
                />
              </div>
              <div className="mb-2 ml-2 mr-2">
                <textarea
                  id="message"
                  rows="4"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brandPrimary shadow-bottom-right resize-none"
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
