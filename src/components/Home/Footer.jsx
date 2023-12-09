import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdAddLocation, MdBloodtype, MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#E11B22] text-left ml-auto mr-auto text-white ">
        <div className="p-10 bg-[#E11B22] max-w-[2036px] ml-auto mr-auto">
          <div className=" mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-2">
              <div className="mb-5 col-span-2">
                <h4 className="text-2xl pb-4 text-white">
                  {/* <img
                    style={{ width: "60%" }}
                    src=""
                    alt="Easywire logo"
                  /> */}
                </h4>
                <p className="text-white ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime, neque non dolorem officia dolore saepe deserunt in
                  perferendis natus nesciunt enim incidunt libero fugiat
                  pariatur architecto maiores expedita quia ipsum! <br />
                  {/* <strong>Email:</strong>info@gmail.com <br /> */}
                </p>
                <br />
                <p className="font-bold">Connected with us on</p>

                <div className="text-xl text-[#E11B22] mb-2">
                  <Link
                    to=""
                    className="w-10 h-10 rounded-full bg-white hover:bg-white hover:text-black mx-1 inline-block pt-1"
                  >
                    <FaFacebookF className="ml-auto mr-auto  mt-1.5"></FaFacebookF>{" "}
                  </Link>
                  <Link
                    to=""
                    className="w-10 h-10 rounded-full bg-white hover:bg-white hover:text-black mx-1 inline-block pt-1"
                  >
                    <AiOutlineTwitter className="ml-auto mr-auto  mt-1.5"></AiOutlineTwitter>{" "}
                  </Link>
                  <Link
                    to=""
                    className="w-10 h-10 rounded-full bg-white hover:bg-white hover:text-black mx-1 inline-block pt-1"
                  >
                    <AiOutlineInstagram className="ml-auto mr-auto  mt-1.5"></AiOutlineInstagram>{" "}
                  </Link>
                  <Link
                    to=""
                    className="w-10 h-10 rounded-full  bg-white hover:bg-white hover:text-black mx-1 inline-block pt-1"
                  >
                    <FaLinkedinIn className="ml-auto mr-auto  mt-1.5"></FaLinkedinIn>{" "}
                  </Link>
                </div>
              </div>

              <div className="mb-5 col-span-2">
                <h4 className="pb-4 text-white "> About us</h4>
                <p className="text-white  flex mb-2">
                  <span>
                    <MdBloodtype className="mt-1 w-6" />
                  </span>{" "}
                  About
                </p>
                <p className="text-white  flex mb-2">
                  {" "}
                  <span>
                    <MdBloodtype className="mt-1 w-6" />
                  </span>
                  Our Blood{" "}
                </p>
                <p className="text-white  flex mb-2">
                  <span>
                    <MdBloodtype className="mt-1 w-6" />
                  </span>
                  ISO 2008 Certificate
                </p>

                <p className="mt-6 font-bold">Any suggestions? </p>
                <p className="mt-4 text-xs">
                  Freel Free to share your thoughts
                </p>
                <form action="flex flex-row flex-wrap">
                  <br />
                  <input
                    type="text"
                    className="text-gray-500 w-full p-2 focus:border-yellow-500 border border-white rounded-md"
                    placeholder=""
                    id=""
                  />
                  {/* <button className="p-2 w-1/3 p-2 bg-[#4d6391] text-white hover:bg-yellow-500 ">
                    Subscribe
                  </button> */}
                </form>
              </div>
              <div className="mb-5 col-span-2">
                <h4 className="text-white font-bold">Blood</h4>
                <p className="flex mb-2">
                  <MdBloodtype className="mt-1" /> Request Blood
                </p>
                <p className="flex mb-2">
                  <MdBloodtype className="mt-1" /> Why Give Blood
                </p>
                <p className="flex mb-2">
                  <MdBloodtype className="mt-1" /> Learm About Blood
                </p>
                <p className="flex mb-2">
                  <MdBloodtype className="mt-1" /> Health and Eligibility
                </p>
                <p className="flex mb-2">
                  <MdBloodtype className="mt-1" /> Know the Risks
                </p>
              </div>

              <div className="mb-5 col-span-2">
                <h4 className="pb-4 text-white">Donor</h4>
                <p className="flex mb-2">
                  <MdBloodtype className="mt-1" />
                  Donate Blood
                </p>
                <p className="flex mb-2">
                  <MdBloodtype className="mt-1" />
                  Donate Money
                </p>
                <p className="flex mb-2">
                  <MdBloodtype className="mt-1" />
                  Donate Blood Donate
                </p>
                <p className="flex mb-2">
                  <MdBloodtype className="mt-1" />
                  Donate and Aftercare
                </p>
              </div>

              <div className="mb-5 col-span-1">
                <h4 className="pb-4 text-white">Campaige</h4>
                <p className="flex mb-2">
                  <MdBloodtype className="mt-1" />
                  News
                </p>
                <p className="flex mb-2">
                  <MdBloodtype className="mt-1" />
                  Event
                </p>
                <p className="flex mb-2">
                  <MdBloodtype className="mt-1" />
                  Stories
                </p>
                <p className="flex mb-2">
                  <MdBloodtype className="mt-1" />
                  Gallery
                </p>
              </div>

              <div className="mb-5 col-span-2">
                <h4 className="pb-4 text-white">Contact Info</h4>
                <div className="grid grid-cols-11 mb-2">
                  <p className="mb-2">
                    <FiPhoneCall className="mt-1" />
                  </p>
                  <div className="flex mb-2 col-span-10">
                    +8801234-56790 <br />
                    +8801234-56790
                  </div>
                </div>

                <div className="grid grid-cols-11 mb-2">
                  <p className="mb-2">
                    <MdEmail className="mt-1" />
                  </p>
                  <div className="flex mb-2 col-span-10">
                    info@visionary.con <br />
                    vts@gamil.com
                  </div>
                </div>

                <div className="grid grid-cols-11 mb-2">
                  <p className="mb-2">
                    <MdAddLocation className="mt-1" />
                  </p>
                  <div className="flex mb-2 col-span-10">
                    House no -123,Dhaka <br />
                    Bangladesh
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs font-bold">
          Terms and Conditions | Privacy Policy
        </p>
      </div>
      <hr className="" />
    </div>
  );
};

export default Footer;
