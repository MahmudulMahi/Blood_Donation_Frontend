import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Rectangle from "../../assets/icons/Rectangle.png"
import callRedIco from "../../assets/icons/callRedIco.png"
import profail from "../../assets/map.jpeg"

const AboutFounder = () => {
  return (
    <div className='lg:mr-40 md:mr-0 mr-40 lg:ml-20 md:ml-0 ml-20 rounded-md bg-white lg:mt-12 md:mt-12 mt-12 p-20 pt-0'>
      <div className='flex'>
        <h2 className='flex items-center mt-4 text-xl font-semibold'><a href="#home">Home</a> <span className='text-red-700'> <IoIosArrowForward /> </span> <a href="#about">About Us</a> <span className='text-red-700'> <IoIosArrowForward /> </span> <a href="#board">Our Board</a></h2>
      </div>
      <div className='flex md:justify-end mt-4'>
        <div className="flex  text-xl font-semibold">
          <img src={Rectangle} alt="" />
          <p className="-ml-[140px] mt-[10px] font-bold text-brandPrimary text-[14px]">
            Connect With Us
          </p>
          <div className="mt-1 ml-6 mr-4">
            <div className="rounded-full text-white">
              <div className="">
                <img src={callRedIco} alt="" className="w-[40px] h-[40px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-rows lg:grid-cols-3 gap-5'>
        <div className='col-span-1'>
        <button className="bg-brandPrimary text-white lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md ml-2 mt-2 font-bold shadow-md ">
        About Founder
            </button>

        <p className='font-bold text-2xl mt-3 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

        <img className='mt-8 rounded-lg' src={profail} alt="" />
        </div>
        <div className='col-span-2 bg-white h-[200px] lg:h-[600px] w-[200px] lg:w-[1000px] mt-20 shadow-2xl rounded-2xl p-8 '>
          <p className='pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>

          <p className='text-red-600 pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <p>             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <p className='text-red-600 pb-5 pt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <p>             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;