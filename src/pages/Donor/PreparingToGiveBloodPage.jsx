import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Rectangle from "../../assets/icons/Rectangle.png"
import callRedIco from "../../assets/icons/callRedIco.png"
import { IoMdArrowDropdown } from "react-icons/io";

const PreparingToGiveBloodPage = () => {
  const [isshow, setisshow] = useState(false)
  const [isshowHours, setisshowHours] = useState(false)
  const [isshowDay, setisshowDay] = useState(false)
  const [isshowAfter, setisshowAfter] = useState(false)
  return (
    <div className='lg:mx-28 '>
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

      <button onClick={() => setisshow(!isshow)} className="bg-brandPrimary text-white lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md  lg:mt-8 md:mt-5 mt-3  font-bold shadow-md w-full ">
        <div className='flex items-center justify-center '>
          <div className=''>
            Preparing to give blood
          </div>
          <div className='absolute right-3 lg:right-32 text-2xl' >
            {isshow ? "" : <IoMdArrowDropdown />}
          </div>
        </div>
      </button>

      {isshow ?
        <div className="mt-12 rounded-lg  bg-[#FFF]  w-full  relative p-1 " style={{

          boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
        }}>
          <div>
            <h2>   <button className="bg-[#e11b221a]  w-full md:w-2/6  p-4 text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md  mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left   absolute -top-10 left-0 text-2xl">
              Eat
            </button></h2>
          </div>

          <div className="ml-2 p-2 md:p-10 md:ml-10 md:mr-20 rounded-md -mt-6">
            <p className='mt-24 md:mt-14 lg:mt-7'>Eating regularly before donating will help to keep your blood sugar levels stable. This is important so that you don’t feel lightheaded or dizzy after your donation. Having a snack before you donate can help maintain these blood sugar levels. Ensuring that your diet contains foods rich in iron - such as meats and green leafy vegetables - will help to keep you feeling well during and after donation.</p>
          </div>
        </div>



        : ""}


      {isshow ?
        <div className="mt-12 rounded-lg  bg-[#FFF]  w-full  relative p-1 " style={{

          boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
        }}>
          <div>
            <h2>   <button className="bg-[#e11b221a]  w-full md:w-2/6  p-4 text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md  mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left   absolute -top-10 left-0 text-2xl">
              Drink
            </button></h2>
          </div>

          <div className="ml-2 p-2 md:p-10 md:ml-10 md:mr-20 rounded-md -mt-6">
            <p className='mt-24 md:mt-14 lg:mt-7'> <span className='mb-3 block' > Almost half of the blood that you donate is made up of water. The fluids that you lose during donation can cause a drop in blood pressure – causing you to feel faint and dizzy.</span>

              <span className='mb-3 block'>
                To help prevent this from happening we ask you to drink 500ml of water immediately before you donate - we’ll give this to you before you donate. Please help us reduce our plastic usage by bringing your own refillable bottle.
              </span>

              <span className='mb-3 block'>
                It’s also important to ensure that you are well hydrated in the days leading up to your donation. This will help to compensate for the fluids lost during donation, and will help to bring your blood volume levels back to normal.
              </span>

              It is essential to avoid alcohol before and after donating as this may affect hydration levels and delay recovery.</p>
          </div>
        </div>
        : ""}


      {isshow ?
        <div className="mt-12 rounded-lg  bg-[#FFF]  w-full  relative p-1 " style={{

          boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
        }}>
          <div>
            <h2>   <button className="bg-[#e11b221a]  w-full md:w-2/6  p-4 text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md  mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left   absolute -top-10 left-0 text-2xl">
              Exercise
            </button></h2>
          </div>

          <div className="ml-2 p-2 md:p-10 md:ml-10 md:mr-20 rounded-md -mt-6">
            <p className='mt-24 md:mt-14 lg:mt-7'> <span className='mb-3 block' > Avoid doing any vigorous exercise or heavy lifting the day of your donation – both before and after you’ve donated.</span>

              <span className='mb-3 block'>
                Keeping your body in a rested state is important to give it a chance to replenish the fluids lost during donation, which will help you avoid feeling dizzy or lightheaded and keep you well. Light exercise such as walking is fine, but please make sure that you are fully recovered and hydrated prior to your donation.
              </span>

            </p>
          </div>
        </div>
        : ""}

      {isshow ?
        <div className="mt-12 rounded-lg  bg-[#FFF]  w-full  relative p-1" style={{

          boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
        }}>
          <div>
            <h2>   <button className="bg-[#e11b221a]  w-full md:w-2/6  p-4 text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md  mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left   absolute -top-10 left-0 text-2xl">
              Wear
            </button></h2>
          </div>

          <div className="ml-2 p-2 md:p-10 md:ml-10 md:mr-20 rounded-md -mt-6">
            <p className='mt-24 md:mt-14 lg:mt-7'> <span className='mb-3 block' > We will need to roll up your sleeve past your elbow when you donate – to allow easy access to your veins. To make sure that you are comfortable, please wear clothing with loose sleeves</span>

              <span className='mb-3 block'>
                While not required, please consider wearing a face covering to protect others. Face masks are available if you would like to wear one. Just ask one of our staff.
              </span>

              .</p>
          </div>
        </div>
        : ""}

      {isshow ?
        <div className="mt-12 rounded-lg  bg-[#FFF]  w-full  relative p-1 " style={{

          boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
        }}>
          <div>
            <h2>   <button className="bg-[#e11b221a]  w-full md:w-2/6  p-4 text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md  mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left   absolute -top-10 left-0 text-2xl">
              Distract
            </button></h2>
          </div>

          <div className="ml-2 p-2 md:p-10 md:ml-10 md:mr-20 rounded-md -mt-6">
            <p className='mt-24 md:mt-14 lg:mt-7'> <span className='mb-3 block' > It is normal to feel nervous when you come along to donate – particularly if this is your first time. Our friendly and helpful staff will put you at ease straightaway.</span>

              <span className='mb-3 block'>
                Distraction is key. You could bring a book to read or listen to some music while you donate.
              </span>

              <span className='mb-3 block'>
                We also ask donors to undertake something called ‘applied muscle tension’ or AMT. This is a simple behavioural technique that helps to maintain blood pressure, and so stops you from feeling faint or unwell. It is also a brilliant distraction technique! AMT involves tensing and relaxing the body’s major muscles during the donation process. A favourite of ours is clenching and unclenching your buttock muscles (no joke!).
              </span>


              Further information about this will be available at your donation, or simply ask a member of staff who will be happy to advise you further.</p>
          </div>
        </div>
        : ""}


      {isshow ?
        <div className="mt-12 rounded-lg  bg-[#FFF]  w-full  relative p-1 " style={{

          boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
        }}>
          <div>
            <h2>   <button className="bg-[#e11b221a]  w-full md:w-2/6  p-4 text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md  mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left   absolute -top-10 left-0 text-2xl">
              Know
            </button></h2>
          </div>

          <div className="ml-2 p-2 md:p-10 md:ml-10 md:mr-20 rounded-md -mt-6">
            <p className='mt-24 md:mt-14 lg:mt-7'> <span className='mb-3 block' > Once you’ve made the decision to donate and made the effort to go along to your appointment, you want to be sure that you can actually donate.</span>

              <span className='mb-3 block'>
                Although most people can donate, there are some restrictions - depending on things like your health, medication, and whether you've been abroad recently.
              </span>

              <span className='mb-3 block'>
                If you have any specific queries about your eligibility to give blood you can search our Health and Eligibility for advice or call us on 0300 123 23 23.
              </span>

            </p>
          </div>
        </div>
        : ""}

      {isshow ?
        <div className="mt-12 rounded-lg  bg-[#FFF]  w-full  relative p-1  " style={{

          boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
        }}>
          <div>
            <h2>   <button className="bg-[#e11b221a]  w-full md:w-2/6  p-4 text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md  mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left   absolute -top-10 left-0 text-2xl">
              Exercise
            </button></h2>
          </div>

          <div className="ml-2 p-2 md:p-10 md:ml-10 md:mr-20 rounded-md -mt-6">
            <p className='mt-24 md:mt-14 lg:mt-7'> <span className='mb-3 block' > Almost half of the blood that you donate is made up of water. The fluids that you lose during donation can cause a drop in blood pressure – causing you to feel faint and dizzy.</span>

              <span className='mb-3 block'>
                To help prevent this from happening we ask you to drink 500ml of water immediately before you donate - we’ll give this to you before you donate. Please help us reduce our plastic usage by bringing your own refillable bottle.
              </span>

              <span className='mb-3 block'>
                It’s also important to ensure that you are well hydrated in the days leading up to your donation. This will help to compensate for the fluids lost during donation, and will help to bring your blood volume levels back to normal.
              </span>

              It is essential to avoid alcohol before and after donating as this may affect hydration levels and delay recovery.</p>
          </div>
        </div>
        : ""}
      <button onClick={() => setisshowHours(!isshowHours)} className="bg-brandPrimary text-white lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md   lg:mt-8 md:mt-5 mt-3  font-bold shadow-md w-full ">
        <div className='flex items-center justify-center '>
          <div className=''>
            Hours and locations
          </div>
          <div className='absolute right-3 lg:right-32 text-2xl' >
            {isshowHours ? "" : <IoMdArrowDropdown />}
          </div>
        </div>
      </button>
      {isshowHours ?
        <div className="mt-12 rounded-lg  bg-[#FFF]  w-full  relative p-1 " style={{

          boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
        }}>
          <div>
            <h2>   <button className="bg-[#e11b221a]  w-full md:w-2/6  p-4 text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md  mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left   absolute -top-10 left-0 text-2xl">
              Hours and locations
            </button></h2>
          </div>

          <div className="ml-2 p-2 md:p-10 md:ml-10 md:mr-20 rounded-md -mt-6">
            <p className='mt-24 md:mt-14 lg:mt-7'> <span className='mb-3 block' > You can search for a donor center to find the best place to donate, whether you're home or away.</span>

              <span className='mb-3 block'>
                We've listed 'donation type' in the website, if you're unsure what you can donate.
              </span>

              <span className='mb-3 block'>
                In some donor centers, you can donate blood only. In other centers, you can donate blood or plasma – or platelets, if you're male and have previously donated plasma.
              </span>

              On our donor center pages, you can find:</p>
            <li>hours and locations of your nearest donor center</li>
            <li>a map and directions, if you need, from Google Maps</li>
            <li>tips for parking, and more.</li>
            <p>If you're ready to donate, or looking to book another donation, you can then 'check availability' to find the time that best suits you.</p>
          </div>
        </div>
        : ""}
      {/* ------------ */}
      {isshowHours ?
        <div className="mt-12 rounded-lg  bg-[#FFF]  w-full  relative p-1 " style={{

          boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
        }}>
          <div>
            <h2>   <button className="bg-[#e11b221a]  w-full md:w-2/6  p-4 text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md  mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left   absolute -top-10 left-0 text-2xl">
              Keep your bandage on
            </button></h2>
          </div>

          <div className="ml-2 p-2 md:p-10 md:ml-10 md:mr-20 rounded-md -mt-6">
            <p className='mt-24 md:mt-14 lg:mt-7'> <span className='mb-3 block' > You can reduce the risk of bruising by keeping the bandage on your arm for 2 hours after donating, and by avoiding heavy lifting and strenuous use of your arm for the next 24 hours.</span>

              <span className='mb-3 block'>
                If a bruise is causing any kind of discomfort, try the following:
              </span>

            </p>
            <li>Keep the bandage on your arm for the next 4 hours.</li>
            <li>Hold a cold pack wrapped in a clean cloth over the bruise. Only do this for 15 minutes at a time, 3-4 times in the first 24-48 hours.</li>
            <li>After 48 hours, apply a hot pack wrapped in a clean cloth. Do this for 15 minutes at a time, 3-4 times a day.</li>
            <li>Use mild pain relievers like paracetamol (not aspirin or anti-inflammatory medications like ibuprofen which may make bruising worse).</li>
            <li>If you're bleeding from where the needle went in, simply apply pressure and raise your arm.</li>
            <p>If your bruise is causing severe pain, numbness, inflammation, stiffness or swelling, call us on 02387734617346 to talk to one of our medical officers.</p>
          </div>
        </div>
        : ""}

      <button onClick={() => setisshowDay(!isshowDay)} className="bg-brandPrimary text-white lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md   lg:mt-8 md:mt-5 mt-3  font-bold shadow-md w-full ">
        <div className='flex items-center justify-center '>
          <div className=''>
            Day of the donation
          </div>
          <div className='absolute right-3 lg:right-32 text-2xl' >
            {isshowDay ? "" : <IoMdArrowDropdown />}
          </div>
        </div>
      </button>

      {/* ------------- */}
      {isshowDay ?
        <div className="mt-12 rounded-lg  bg-[#FFF]  w-full  relative p-1 " style={{

          boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
        }}>
          <div>
            <h2>   <button className="bg-[#e11b221a]  w-full md:w-2/6  p-4 text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md  mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left   absolute -top-10 left-0 text-2xl">
              Welcome and preparation
            </button></h2>
          </div>

          <div className="ml-2 p-2 md:p-10 md:ml-10 md:mr-20 rounded-md -mt-6">
            <p className='mt-24 md:mt-14 lg:mt-7'> <span className='mb-3 block' > Before donating blood, please eat regular meals, drink plenty of fluid (non-alcoholic) and avoid vigorous exercise or exertion.</span>

              <span className='mb-3 block'>
                We will provide 500ml of fluid just before you donate. By drinking this over about 5 minutes, it will help with your wellbeing during and after donation.
              </span>

              <span className='mb-3 block'>
                Remember to bring your completed Donor Safety Check form with you, if you received one from us in the post. If you ever need to cancel a donation appointment we ask that you give us 3 days’ notice so that we can offer your appointment to another donor. You can easily cancel or reschedule your existing appointments by logging in to you or using the Online Account or  Blood Donation App.
              </span>
              <span className='mb-3 block'>
                We will provide 500ml of fluid just before you donate. By drinking this over about 5 minutes, it will help with your wellbeing during and after donation.
              </span>

            </p>

          </div>
        </div>
        : ""}

      {/* ------------- */}
     {isshowDay ?
       <div className="mt-12 rounded-lg  bg-[#FFF]  w-full  relative p-1 " style={{

        boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
      }}>
        <div>
          <h2>   <button className="bg-[#e11b221a]  w-full md:w-2/6  p-4 text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md  mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left   absolute -top-10 left-0 text-2xl">
            Health screening
          </button></h2>
        </div>

        <div className="ml-2 p-2 md:p-10 md:ml-10 md:mr-20 rounded-md -mt-6">
          <p className='mt-24 md:mt-14 lg:mt-7'> <span className='mb-3 block' > You will be called for private health screening, where a donor carer will confirm your identity. It’s critical that we guarantee an accurate link between you, your Donor Safety Check and your donation.</span>

            <span className='mb-3 block'>
              We must ensure that it's safe for you to donate and your donation is safe for a patient to receive. We’ll ask some confidential questions based on your completed Donor Safety Check.
            </span>

            <span className='mb-3 block'>
              There is a period of time from contact with any infection to detecting markers in the laboratory. We trust your honesty when answering these personal questions. This will ensure your blood is safe to transfuse to patients.
            </span>
            <span className='mb-3 block'>
              You may be referred to a registered nurse for certain medical queries: their uniforms have red piping on the collar and cuffs. An explanation will always be provided if you are not able to donate. You will be advised when you can donate, and we’ll encourage you to make an appointment before you leave (the team are only able to book future appointments for the venue they are currently at).
            </span>
            <span className='mb-3 block'>
              For your wellbeing, we must ensure you have enough hemoglobin(iron)  in your blood before donating. Your test involves us taking a small blood drop from your finger to firstly test your iron levels by dropping the blood into a vial of copper sulphate solution. If the blood sinks to the bottom in a set time, you can give blood.
            </span>
            <span className='mb-3 block'>
              If the blood floats or takes too long to sink, we will offer you a further test using a Hemicube machine. This test requires a drop of blood from your fingertip which is tested in the machine to give your hemoglobin level. Your hemoglobin result helps us decide if you are able to give blood or if you need to wait some time before returning to donate blood.
            </span>

          </p>

        </div>
      </div>
     :""}

  {isshowDay ?
        <div className="mt-12 rounded-lg  bg-[#FFF]  w-full  relative p-1 " style={{

          boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
        }}>
          <div>
            <h2>   <button className="bg-[#e11b221a]  w-full md:w-2/6  p-4 text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md  mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left   absolute -top-10 left-0 text-2xl">
              Your donation
            </button></h2>
          </div>
  
          <div className="ml-2 p-2 md:p-10 md:ml-10 md:mr-20 rounded-md -mt-6">
            <p className='mt-24 md:mt-14 lg:mt-7'> <span className='mb-3 block' > When you are comfortable on the chair, you will be asked your name, address and date of birth again.</span>
  
              <span className='mb-3 block'>
                Blood bags and sample tubes are labelled with unique donor identification numbers. All collection equipment is single use and sterile; only one blood bag is filled with your donation.
              </span>
  
              <span className='mb-3 block'>
                A blood pressure cuff will be placed on your arm to maintain a small amount of pressure during your donation. The cuff is not used to measure blood pressure.
              </span>
              <span className='mb-3 block'>
                Your arm will be thoroughly examined to find a suitable vein. If we're unable to draw blood first time, we will not make a second attempt on a less suitable vein - this is to keep all our donors safe.
              </span>
              <span className='mb-3 block'>
                We will then use an antiseptic sponge to clean your arm. This kills normal bacteria (germs) on the skin. You will see staff cleaning their hands frequently, using hand wipes or gels.
                Donors are advised to do applied muscle tension exercises during donation. This is to maintain blood pressure and promote wellbeing during and after donation.
              </span>
              <span className='mb-3 block'>
                Following needle insertion you should be comfortable during your donation. If you experience any discomfort or pain please alert a member of staff.
              </span>
              <span className='mb-3 block'>
                An agitator scale constantly weighs and measures your donation. It will stop automatically when your donation is complete. Donor carers will be available to you throughout your donation.
              </span>
              <span className='mb-3 block'>
  
                You may hear beeping noises from the agitator, these inform us of the progress of your donation. A full donation is 470ml and will usually take between 5 and 10 minutes.
              </span>
              <span className='mb-3 block'>
  
  
                If you require assistance or have any concerns, please make us aware by raising your non-donation arm. After donation, the needle will be removed and a sterile dressing applied to your arm.
              </span>
              <span className='mb-3 block'>
  
                We advise that you leave the pressure roll on for 30 minutes and the plaster dressing on for 6 hours. Please avoid using this arm to push on or to carry anything heavy.
              </span>
              <span className='mb-3 block'>
  
                We will give you a card at the end of your donation with important care advice. Donors are also asked to apply additional pressure to the venepuncture site while waiting for their drink at the refreshment area.
              </span>
  
            </p>
  
          </div>
        </div>
  :""}


 {isshowDay ?
       <div className="mt-12 rounded-lg  bg-[#FFF]  w-full  relative p-1 " style={{

        boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px",
        zIndex: 1
      }}>
        <div>
          <h2>   <button className="bg-[#e11b221a]  w-full md:w-2/6  p-4 text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md  mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left   absolute -top-10 left-0 text-2xl">
            At Home
          </button></h2>
        </div>

        <div className="ml-2 p-2 md:p-10 md:ml-10 md:mr-20 rounded-md -mt-6 ">
          <p className='mt-24 md:mt-14 lg:mt-7 '> <span className='mb-3 block' >If you become unwell (other than a cold or cold-sore) within 2 weeks following your donation, or if you believe there is a reason your blood should not be given to a patient, please call our donor helpline on 0300 123 23 23.</span>

          </p>

        </div>
      </div>
 :""}

      <button onClick={() => setisshowAfter(!isshowAfter)} className=" bg-brandPrimary text-white lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md   lg:mt-8 md:mt-5 mt-3  font-bold shadow-md w-full ">
        <div className='flex items-center justify-center  '>
          <div className=''>
            After giving blood
          </div>
          <div className='absolute right-3 lg:right-32 text-2xl' >
            {isshowAfter? "":<IoMdArrowDropdown />}
          </div>
        </div>
      </button>

   {isshowAfter ?
       <div className="mt-12 rounded-lg  bg-[#FFF]  w-full  relative p-1 " style={{

        boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
      }}>
        <div>
          <h2>   <button className="bg-[#e11b221a]  w-full md:w-2/6  p-4 text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md  mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left   absolute -top-10 left-0 text-2xl">
            After giving blood
          </button></h2>
        </div>

        <div className="ml-2 p-2 md:p-10 md:ml-10 md:mr-20 rounded-md -mt-6">
          <p className='mt-24 md:mt-14 lg:mt-7 '> <span className='mb-3 block' >During a blood donation we take 470ml of blood, which is just under a pint.</span>
            <span className='mb-3 block' >
              Your donation is transported to one of the blood centers where it is tested and processed before being issued to hospitals.</span>
          </p>

        </div>
      </div>
   :""}

  {isshowAfter ?
        <div className="mt-12 rounded-lg  bg-[#FFF]  w-full  relative p-1 " style={{
          // lg:h-[280px] md:h-[380px] h-[620px]
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
        }}>
          <div>
            <h2>   <button className="bg-[#e11b221a]  w-full md:w-2/6  p-4 text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md  mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left   absolute -top-10 left-0 text-2xl">
              What to do after donating blood?
            </button></h2>
          </div>
  
          <div className="  ml-2 p-2 md:p-10 md:ml-10 md:mr-20 rounded-md -mt-6">
            <p className='mt-24 md:mt-14 lg:mt-7 '> <span className='mb-3 block' >To help you stay well after you have given blood, we advise you to:</span>
  
            </p>
            <li>keep the pressure dressing on your arm for about 30 minutes after you have given blood, and the plaster on for 6 hours</li>
            <li>rest for a short time after giving blood</li>
            <li>eat and drink – you will be encouraged to have at least 2 drinks and a snack before you leave</li>
            <li>avoid using the donation arm to carry anything very heavy for the rest of the day</li>
            <li>avoid having a hot bath after you have given blood</li>
  
            <p>If you need further advice or experience any prolonged after effects from your donation please ring 0300 123 23 23.</p>
  
          </div>
        </div>
  :""}
  { isshowAfter ?
        <div className="mt-12 rounded-lg  bg-[#FFF]   relative p-1 mb-5 " style={{

          boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px"
        }}>
          <div>
            <h2>   <button className="bg-[#e11b221a]  w-full md:w-2/6  p-4 text-black lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md  mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left   absolute -top-10 left-0 text-2xl">
              Feeling unwell after giving blood
            </button></h2>
          </div>
  
          <div className="ml-2 p-2 md:p-10 md:ml-10 md:mr-20 rounded-md -mt-6">
            <p className='mt-24 md:mt-14 lg:mt-7'> <span className='mb-3 block' > If you Feel faint (light headed or dizzy, hot, sweating, trembling, shaky or nauseous) lie down immediately, rest until you feel better and drink plenty of fluid.</span>
  
              <span className='mb-3 block'>
                Any bruising is usually harmless and will disappear over time. Read Know the risks page to know more.
              </span>
  
              <span className='mb-3 block'>
                If bleeding recurs, sit down, raise your arm and press on the area where the blood is coming from for at least 5 minutes.
              </span>
              <span className='mb-3 block'>
                If you become unwell (other than a cold or cold-sore) within 2 weeks following your donation, or if you believe there is a reason your blood should not be transfused to a patient, please call our donor helpline on 0300 123 23 23..
              </span>
  
  
            </p>
  
          </div>
        </div>
  :""}

    </div>

  );
};

export default PreparingToGiveBloodPage;