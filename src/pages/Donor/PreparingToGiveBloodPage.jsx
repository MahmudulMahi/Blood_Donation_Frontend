import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Rectangle from "../../assets/icons/Rectangle.png"
import callRedIco from "../../assets/icons/callRedIco.png"
import { IoMdArrowDropdown } from "react-icons/io";

const PreparingToGiveBloodPage = () => {
  return (
    <div className='lg:mx-28'>
      <div className='flex flex-col md:flex-row justify-between mt-10   '>
        <div className='lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4'>
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

      <button className="bg-brandPrimary text-white lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md ml-2 mt-4 lg:mt-2 md:mt-2  font-bold shadow-md w-full ">
        <div className='flex items-center justify-center '>
          <div className=''>
            Preparing to give blood
          </div>
          <div className='absolute right-3 lg:right-32 text-2xl' >
            <IoMdArrowDropdown />
          </div>
        </div>
      </button>

      <div className="mt-12 rounded-lg  bg-[#FFF]  w-full md:h-[300px] h-[800px] relative p-1 " style={{

        boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
      }}>
        <div>
          <h2>   <button className="bg-[#e11b221a] w-[200px] text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md ml-2 mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left mb-10 md:mb-0 absolute -top-10 text-2xl">
            Eat
          </button></h2>
        </div>

        <div className="absolute top-10 ml-2 p-10">
          <p>Eating regularly before donating will help to keep your blood sugar levels stable. This is important so that you don’t feel lightheaded or dizzy after your donation. Having a snack before you donate can help maintain these blood sugar levels. Ensuring that your diet contains foods rich in iron - such as meats and green leafy vegetables - will help to keep you feeling well during and after donation.</p>
        </div>
      </div>

      {/* ------------drink----- */}
      <div className="mt-12 rounded-lg  bg-[#FFF]  w-full md:h-[300px] h-[800px] relative p-1 " style={{

boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
}}>
<div>
  <h2>   <button className="bg-[#e11b221a] w-[200px] text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md ml-2 mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left mb-10 md:mb-0 absolute -top-10 text-2xl">
  Drink
  </button></h2>
</div>

<div className="absolute top-10 ml-2 p-10">
  <p> <span className='mb-3 block' > Almost half of the blood that you donate is made up of water. The fluids that you lose during donation can cause a drop in blood pressure – causing you to feel faint and dizzy.</span>

<span className='mb-3 block'>
To help prevent this from happening we ask you to drink 500ml of water immediately before you donate - we’ll give this to you before you donate. Please help us reduce our plastic usage by bringing your own refillable bottle.
</span>

<span className='mb-3 block'>
It’s also important to ensure that you are well hydrated in the days leading up to your donation. This will help to compensate for the fluids lost during donation, and will help to bring your blood volume levels back to normal.
</span>

It is essential to avoid alcohol before and after donating as this may affect hydration levels and delay recovery.</p>
</div>
</div>

{/* ----------Were------- */}
<div className="mt-12 rounded-lg  bg-[#FFF]  w-full md:h-[300px] h-[800px] relative p-1 " style={{

boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
}}>
<div>
  <h2>   <button className="bg-[#e11b221a] w-[200px] text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md ml-2 mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left mb-10 md:mb-0 absolute -top-10 text-2xl">
  Were
  </button></h2>
</div>

<div className="absolute top-10 ml-2 p-10">
  <p> <span className='mb-3 block' > Almost half of the blood that you donate is made up of water. The fluids that you lose during donation can cause a drop in blood pressure – causing you to feel faint and dizzy.</span>

<span className='mb-3 block'>
To help prevent this from happening we ask you to drink 500ml of water immediately before you donate - we’ll give this to you before you donate. Please help us reduce our plastic usage by bringing your own refillable bottle.
</span>

<span className='mb-3 block'>
It’s also important to ensure that you are well hydrated in the days leading up to your donation. This will help to compensate for the fluids lost during donation, and will help to bring your blood volume levels back to normal.
</span>

It is essential to avoid alcohol before and after donating as this may affect hydration levels and delay recovery.</p>
</div>
</div>
{/* ---------distract-------- */}
<div className="mt-12 rounded-lg  bg-[#FFF]  w-full md:h-[300px] h-[800px] relative p-1 " style={{

boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
}}>
<div>
  <h2>   <button className="bg-[#e11b221a] w-[200px] text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md ml-2 mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left mb-10 md:mb-0 absolute -top-10 text-2xl">
 Distract
  </button></h2>
</div>

<div className="absolute top-10 ml-2 p-10">
  <p> <span className='mb-3 block' > Almost half of the blood that you donate is made up of water. The fluids that you lose during donation can cause a drop in blood pressure – causing you to feel faint and dizzy.</span>

<span className='mb-3 block'>
To help prevent this from happening we ask you to drink 500ml of water immediately before you donate - we’ll give this to you before you donate. Please help us reduce our plastic usage by bringing your own refillable bottle.
</span>

<span className='mb-3 block'>
It’s also important to ensure that you are well hydrated in the days leading up to your donation. This will help to compensate for the fluids lost during donation, and will help to bring your blood volume levels back to normal.
</span>

It is essential to avoid alcohol before and after donating as this may affect hydration levels and delay recovery.</p>
</div>
</div>
{/* -----------sleep-------- */}
<div className="mt-12 rounded-lg  bg-[#FFF]  w-full md:h-[300px] h-[800px] relative p-1 " style={{

boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
}}>
<div>
  <h2>   <button className="bg-[#e11b221a] w-[200px] text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md ml-2 mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left mb-10 md:mb-0 absolute -top-10 text-2xl">
 Distract
  </button></h2>
</div>

<div className="absolute top-10 ml-2 p-10">
  <p> <span className='mb-3 block' > Almost half of the blood that you donate is made up of water. The fluids that you lose during donation can cause a drop in blood pressure – causing you to feel faint and dizzy.</span>

<span className='mb-3 block'>
To help prevent this from happening we ask you to drink 500ml of water immediately before you donate - we’ll give this to you before you donate. Please help us reduce our plastic usage by bringing your own refillable bottle.
</span>

<span className='mb-3 block'>
It’s also important to ensure that you are well hydrated in the days leading up to your donation. This will help to compensate for the fluids lost during donation, and will help to bring your blood volume levels back to normal.
</span>

It is essential to avoid alcohol before and after donating as this may affect hydration levels and delay recovery.</p>
</div>
</div>
<button className="bg-brandPrimary text-white lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md ml-2 mt-4 lg:mt-2 md:mt-2  font-bold shadow-md w-full ">
        <div className='flex items-center justify-center '>
          <div className=''>
          Day of the donation
          </div>
          <div className='absolute right-3 lg:right-32 text-2xl' >
            <IoMdArrowDropdown />
          </div>
        </div>
      </button>

      <button className="bg-brandPrimary text-white lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md ml-2 mt-4 lg:mt-2 md:mt-2  font-bold shadow-md w-full ">
        <div className='flex items-center justify-center '>
          <div className=''>
          After giving  blood
          </div>
          <div className='absolute right-3 lg:right-32 text-2xl' >
            <IoMdArrowDropdown />
          </div>
        </div>
      </button>

      <button className="bg-brandPrimary text-white lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md ml-2 mt-4 lg:mt-2 md:mt-2  font-bold shadow-md w-full ">
        <div className='flex items-center justify-center '>
          <div className=''>
          tips that might help
          </div>
          <div className='absolute right-3 lg:right-32 text-2xl' >
            <IoMdArrowDropdown />
          </div>
        </div>
      </button>

    </div>

  );
};

export default PreparingToGiveBloodPage;