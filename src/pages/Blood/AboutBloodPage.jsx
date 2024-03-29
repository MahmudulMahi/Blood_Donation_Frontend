import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Rectangle from "../../assets/icons/Rectangle.png"
import blarimg from "../../assets/Rectangle 370.png"
import callRedIco from "../../assets/icons/callRedIco.png"
import bloodPng from "../../assets/blood1.png"
import donatedimg1 from "../../assets/Rectangle 498.png"
import donatedimg2 from "../../assets/Rectangle 500.png"
import donatedimg3 from "../../assets/Rectangle 501.png"
import donatedimg4 from "../../assets/Stomach Care.png"
import donatedimg5 from "../../assets/bone.png"
import donatedimg6 from "../../assets/Rectangle 505.png"
import donatedimg7 from "../../assets/Rectangle 504.png"

import dropblood from "../../assets/Group 44.png"
import AboutCard from "./AboutCard";
export default function AboutBloodPage() {

  const [aboutCard, setAboutCard] = useState([])

  useEffect(() => {
    fetch('/aboutcard.json')
      .then(res => res.json())
      .then(data => setAboutCard(data))
  }, [])
  return (
    <div  className="lg:mx-28">
      {" "}
      <div className='flex flex-col md:flex-row justify-between mt-10   '>
        <div id="/about-blood" tabIndex="-1" className='lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4'>
          <h2 className='flex items-center mx-auto mt-4 text-[16px] font-semibold '><a href="#home">Home</a> <span className='text-red-700'> <IoIosArrowForward /> </span> <a href="#about">About Us</a> <span className='text-red-700'> <IoIosArrowForward /> </span> <a href="#board">Our Board</a></h2>
        </div>
        <div className='flex items-center mt-5'>


          <div className='relative'>
            <img src={Rectangle} alt="" />
            <p className=" absolute top-3 left-2 text-[#E11B22] text-[16px] font-semibold">
              Connect With Us
            </p>
          </div>
          <div>
            <img src={callRedIco} alt="" className="w-[40px] h-[40px]" />
          </div>

        </div>
      </div>
      {/* why give blood */}
      <div>
        <button className="bg-brandPrimary text-white lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md ml-2 mt-4 lg:mt-2 md:mt-2  font-bold shadow-md">
          Why Give Blood
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            aboutCard.map(card => <AboutCard key={card.id} card={card}></AboutCard>)
          }
        </div>
      </div>
      {/* Your blood donation essentials */}
      <div className=" grid grid-cols-1 lg:grid-cols-4 mt-10 md:mt-0 items-center justify-center p-5 ">
      {/* flex flex-col md:flex-col lg:flex-row gap-10 p-1 */}
        <div className="col-span-1 mr-6">
          <button className="bg-brandPrimary text-white lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md ml-2 lg:mt-2 md:mt-2 mt-0 font-bold shadow-md  text-left">
            <span className=""> Your blood</span> <br />
            donation essentials
          </button>

          <div >
            <img className=" w-full h-full   mt-12 rounded-2xl" src={blarimg} alt="" />
            {/* w-[600px] md:w-full lg:w-[600px]  md:h-[600px] h-[300px] */}
          </div>
        </div>

        <div className="col-span-3 md:pl-5  mt-8  bg-[#E11B221A] overflow-hidden rounded-xl pb-10">
        {/* h-[900px] md:h-[1250px] lg:h-[800px]  w-full lg:w-3/4  */}
          <div className="flex flex-col md:flex-col lg:flex-row items-center  gap-2 justify-center mt-8">
            <div className=" lg:w-1/4 ">
            {/* w-[100px] md:w-[150px] h-[100px] md:h-[150px] */}
              <img className=" w-[150px] h-[150px] rounded-full" src={bloodPng} alt="" />
            </div>
            <div className="w-3/4">
              <h2 className="text-[#E11B22] pb-1 md:pb-5 ">How much blood do you give when you donate?</h2>
              <p className=" ">
              {/* w-[300px] md:w-[500px] */}
                470ml. It's about 8% of the average adult's blood volume. Within 24-48 hours of donating, your body will have fully restored your blood volume.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-col lg:flex-row items-center  gap-2 justify-center mt-8">
            <div className=" lg:w-1/4 ">
              <img className=" w-[150px] h-[150px]  rounded-full" src={bloodPng} alt="" />
            </div>
            <div className="w-3/4">
              <h2 className="text-[#E11B22] pb-1 md:pb-5 ">How much blood do you give when you donate?</h2>
              <p className=" ">
              {/* w-[300px] md:w-[500px] */}
                470ml. It's about 8% of the average adult's blood volume. Within 24-48 hours of donating, your body will have fully restored your blood volume.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-col lg:flex-row items-center  gap-2 justify-center mt-8">
            <div className=" lg:w-1/4 ">
              <img className="  w-[150px] h-[150px]  rounded-full " src={bloodPng} alt="" />
            </div>
            <div className="w-3/4">
              <h2 className="text-[#E11B22] pb-1 md:pb-5 ">How much blood do you give when you donate?</h2>
              <p className=" ">
              {/* w-[300px] md:w-[500px] */}
                470ml. It's about 8% of the average adult's blood volume. Within 24-48 hours of donating, your body will have fully restored your blood volume.</p>
            </div>
          </div>
        </div>
      </div>
      {/* How your donated red blood cells help */}
      {/* w-full lg:h-[600px] md:h-[700px] h-[1360px] */}
      <div className="mt-12 bg-[#FFF]    rounded-lg  " style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
      }}>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-auto-flow gap-14 ">
          <h2>   <button className="bg-brandPrimary text-white lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md   font-bold shadow-md  mb-10 md:mb-0 p-0   ">
            How your donated <br /> Red blood cells help
          </button></h2>


          <div className="flex flex-row  items-center gap-6 lg:col-start-2 lg:pt-5 md:pt-5 ">
            <div>
              <img src={donatedimg1} alt="" />
            </div>
            <div>
              <h2 className="text-[#E11B22] font-bold text-[50px]">34%</h2>
              <p className="text-[#E11B22] mt-5">cancer and
                blood diseases</p>
            </div>
          </div>
          {/* ---------- */}
          <div className="flex flex-row   items-center gap-6 space-y-7 md:pl-5 ">
            <div>
              <img src={donatedimg2} alt="" />
            </div>
            <div>
              <h2 className="text-[#E11B22] font-bold text-[50px]">19%</h2>
              <p className="text-[#E11B22] mt-5 ">anemia and
                other needs</p>
            </div>
          </div>
          {/* ========== */}
          <div className="flex flex-row  items-center gap-6 space-y-7">
            <div>
              <img src={donatedimg3} alt="" />
            </div>
            <div>
              <h2 className="text-[#E11B22] font-bold text-[50px]">18%</h2>
              <p className="text-[#E11B22] mt-5">heart, organ and other <br />
                non-orthopedic surgeries</p>
            </div>
          </div>
          {/* =========== */}
          <div className="flex flex-row  items-center gap-6 space-y-7 md:pl-5 ">
            <div>
              <img src={donatedimg4} alt="" />
            </div>
            <div>
              <h2 className="text-[#E11B22] font-bold text-[50px]">13%</h2>
              <p className="text-[#E11B22] mt-5">stomach, kidney and <br />
                other diseases</p>
            </div>
          </div>
          {/* ========= */}
          <div className="flex flex-row  items-center gap-6 space-y-7">
            <div>
              <img src={donatedimg5} alt="" />
            </div>
            <div>
              <h2 className="text-[#E11B22] font-bold text-[50px]">34%</h2>
              <p className="text-[#E11B22] mt-5">fractures and <br />
                joint replacements</p>
            </div>
          </div>
          {/* ============= */}
          <div className="flex flex-row items-center gap-6  space-y-7 lg:pb-10 md:pb-10 md:pl-5 lg:pl-0">
            <div>
              <img src={donatedimg6} alt="" />
            </div>
            <div>
              <h2 className="text-[#E11B22] font-bold text-[50px]">4%</h2>
              <p className="text-[#E11B22] mt-5">help pregnant women, <br />
                new mothers <br />
                and young children</p>
            </div>
          </div>
          {/* ========== */}
          <div className="flex flex-row items-center gap-6 space-y-7 lg:pb-10 md:pb-10 pb-5">
            <div>
              <img src={donatedimg7} alt="" />
            </div>
            <div>
              <h2 className="text-[#E11B22] font-bold text-[50px]">2%</h2>
              <p className="text-[#E11B22] mt-5">road incidents and <br />
                other traumas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blood Types and Transfusion */}
      {/* md:h-[300px] h-[550px] relative */}

      <div className="mt-12 rounded-lg  bg-[#FFF]  w-full shadow-lg md:h-[250px] h-[550px] lg:h-[200px] relative " style={{

        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
      }}>
        <div>
        {/* absolute -top-10 */}
          <h2>   <button className="bg-brandPrimary text-white lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md   lg:mt-2 md:mt-2  font-bold shadow-md text-left mb-10 md:mb-0 absolute -top-10">
         
            Blood Types and Transfusion
          </button></h2>
        </div>
        {/*  */}
        <div className="absolute top-10 ml-2 pl-5 ">
          <p>There are very specific ways in which blood types must be matched for a safe transfusion. The right blood transfusion can mean the difference between life and death. Use the interactive graphic below to learn more about matching blood types for transfusions.
            Also, Rh-negative blood is given to Rh-negative patients, and Rh-positive or Rh-negative blood may be given to Rh-positive patients. The rules for plasma are the reverse.</p>

          <li className="mt-5 text-sm">The universal red cell donor has Type O negative blood.</li>
          <li className="text-sm">The universal red cell donor has Type O negative blood.</li>
        </div>
      </div>

      {/* total blood supply */}
      <div className="mt-12 mb-8 rounded-lg  bg-[#FFF]  w-full md:h-[500px] h-[800px] relative  shadow-2xl " style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
      }}>
        <div>
          <h2>   <button className="bg-brandPrimary text-white lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md  mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left mb-10 md:mb-0 absolute -top-10">
            Total Blood Supply of World Bangladesh
          </button></h2>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 text-center ">

          <div className="flex flex-col items-center mt-10 ">
            <div >
              <h2>O Positive</h2>
              <p>(O+)</p>
            </div>
            <div>
              <img className="w-[70px]" src={dropblood} alt="" />
              <h2 className="-mt-14 text-white text-2xl">29%</h2>
            </div>
          </div>
          {/* ------------ */}
          <div className="flex flex-col items-center mt-10 ">
            <div >
              <h2>O Positive</h2>
              <p>(O+)</p>
            </div>
            <div>
              <img className="w-[70px]" src={dropblood} alt="" />
              <h2 className="-mt-14 text-white text-2xl">29%</h2>
            </div>
          </div>
          {/* ----------- */}
          <div className="flex flex-col items-center mt-10">
            <div >
              <h2>O Positive</h2>
              <p>(O+)</p>
            </div>
            <div>
              <img className="w-[70px]" src={dropblood} alt="" />
              <h2 className="-mt-14 text-white text-2xl">29%</h2>
            </div>
          </div>
          {/* ------------ */}

          <div className="flex flex-col items-center mt-10">
            <div >
              <h2>O Positive</h2>
              <p>(O+)</p>
            </div>
            <div>
              <img className="w-[70px]" src={dropblood} alt="" />
              <h2 className="-mt-14 text-white text-2xl">29%</h2>
            </div>
          </div>
          {/* ----------- */}
          <div className="flex flex-col items-center mt-10">
            <div >
              <h2>O Positive</h2>
              <p>(O+)</p>
            </div>
            <div>
              <img className="w-[70px]" src={dropblood} alt="" />
              <h2 className="-mt-14 text-white text-2xl">29%</h2>
            </div>
          </div>
          {/* ------------- */}
          <div className="flex flex-col items-center mt-10">
            <div >
              <h2>O Positive</h2>
              <p>(O+)</p>
            </div>
            <div>
              <img className="w-[70px]" src={dropblood} alt="" />
              <h2 className="-mt-14 text-white text-2xl">29%</h2>
            </div>
          </div>
          {/* ----------- */}
          <div className="flex flex-col items-center mt-10">
            <div >
              <h2>O Positive</h2>
              <p>(O+)</p>
            </div>
            <div>
              <img className="w-[70px]" src={dropblood} alt="" />
              <h2 className="-mt-14 text-white text-2xl">29%</h2>
            </div>
          </div>
          {/* ---------- */}
          <div className="flex flex-col items-center mt-10">
            <div >
              <h2>O Positive</h2>
              <p>(O+)</p>
            </div>
            <div>
              <img className="w-[70px]" src={dropblood} alt="" />
              <h2 className="-mt-14 text-white text-2xl ">29%</h2>
            </div>
          </div>
        </div>
        {/* ======== */}
      </div>

    </div>



  );
}



