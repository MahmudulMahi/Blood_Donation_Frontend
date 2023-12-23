import React from "react";
import mailDocttor from "../../../assets/male-doctor-hands-measuring-tension-patient 7.png";
import doctorDoing from "../../../assets/doctor-doing-their-work-pediatrics-office 1.png";
import video from "../../../assets/Vector.png";
const NewsDSection = () => {
  return (
    <div className="mx-28">
      <div className="mt-6 ">
        <div className="text-center">
          <button className="text-center bg-brandPrimary text-[18px] text-white py-3 px-4 rounded-lg mx-auto  ml-auto mr-auto">
            World Blood Donor Day 2023
          </button>
        </div>

        <div className="about-blood-div-border pb-4 -mt-6 rounded-lg">
          <div className="p-8 pb-0 text-[12px] pt-10">
            <p>Give blood, give plasma, share life, share often.</p>
            <p>
              The slogan for 2023 World Blood Donor Day campaign, celebrated on
              14 June 2023, is “Give blood, give plasma, share life, share
              often.” It focuses on patients requiring life-long transfusion
              support and underlines the role every single person can play, by
              giving the valuable gift of blood or plasma. It also highlights
              the importance of giving blood or plasma regularly to create a
              safe and sustainable supply of blood and blood products that can
              be always available, all over the world, so that all patients in
              need can receive timely treatment.
            </p>
            <p>The objectives are to:</p>
          </div>

          <div className="pl-8 pr-8 pt-2 text-[12px]">
            <li className="text-justify">
              celebrate and thank individuals who donate blood and encourage
              more people to become new donors;
            </li>
            <li>
              encourage people in good health to donate blood regularly, as
              often as is safe and possible, to transform the quality of life
              for transfusion dependent patients and help to build a secure
              blood supply in all countries in the world;
            </li>
            <li>
              highlight the critical roles of voluntary non-remunerated regular
              blood and plasma donations in achieving universal access to safe
              blood products for all populations; and
            </li>
            <li>
              mobilize support at national, regional and global levels among
              governments and development partners to invest in, strengthen and
              sustain national blood programmes.
            </li>
          </div>
          <p className="p-8 text-[12px] -mt-4">
            More information about the campaign
          </p>

          <div className="relative">
            <img
              className=" items-center ml-auto mr-auto w-2/6"
              src={mailDocttor}
              alt=""
            ></img>
            
          </div>

          <div className="p-8">
            <p className="text-[12px]">
              Every single donation is a precious lifesaving gift and repeat
              donation is the key to building a safe and sustainable blood
              supply
            </p>
            <p className="text-[12px]">
              In many countries, blood services face the challenge of making
              sufficient blood available, while also ensuring its quality and
              safety. Lack access to safe blood and blood products – especially
              in low- and middle-income countries, impacts on all patients,
              including those requiring regular transfusion. One of WHO
              strategies is to assist low- and middle-income countries in
              improving the availability and quality of human plasma, including
              optimizing the utilization of the plasma recovered from whole
              blood donations, and increasing patients’ access to the
              life-saving plasma protein therapies.
            </p>
            <p className="text-[12px]">Focus of this year’s campaign</p>
            <p className="text-[12px] mt-2">
              The slogan for 2023 World Blood Donor Day campaign is “Give blood,
              give plasma, share life, share often.” It focuses on patients
              requiring life-long transfusion support and underlines the role
              every single person can play, by giving the valuable gift of blood
              or plasma. It also highlights the importance of giving blood or
              plasma regularly to create a safe and sustainable supply of blood
              and blood products that can be always available, all over the
              world, so that all patients in need can receive timely treatment.
            </p>
            <p className="text-[12px] mt-2">The objectives are to:</p>
            <li className="text-[12px] mt-2">
              celebrate and thank individuals who donate blood and encourage
              more people to become new donors;
            </li>
            <li className="text-[12px] mt-2">
              encourage people in good health to donate blood regularly, as
              often as is safe and possible, to transform the quality of life
              for transfusion dependent patients and help to build a secure
              blood supply in all countries in the world;
            </li>
            <li className="text-[12px] mt-2">
              highlight the critical roles of voluntary non-remunerated regular
              blood and plasma donations in achieving universal access to safe
              blood products for all populations; and
            </li>
            <li className="text-[12px] mt-2">
              mobilize support at national, regional and global levels among
              governments and development partners to invest in, strengthen and
              sustain national blood programmes.
            </li>

            <p className="text-[12px] mt-2">
              Activities that would help promote the slogan of this year’s World
              Blood Donor Day may include donor appreciation ceremonies, social
              networking campaigns, special media broadcasts, social media posts
              featuring individual blood donors with the slogan, meetings and
              workshops, musical and artistic events to thank blood donors, and
              coloring the iconic monuments red or yellow. Countries are
              encouraged to disseminate to various media outlets stories of
              people, in particular transfusion-dependent patients, whose lives
              have been saved through blood or plasma donation as a way of
              motivating blood and plasma donation.
            </p>

            <p className="text-[12px] mt-2">
              Host country for World Blood Donor Day 2023
            </p>
            <p className="text-[12px] mt-2">
              The host country for the global event of World Blood Donor Day
              2023 is Algeria through its National Blood Transfusion Service.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 bg-red-700 mt-6">
          <div className="col-span-1 text-justify">
            <p className="font-bold text-white p-8 text-[14px]">
              What Our Happy clients say!
            </p>
            <div className="flex justify-between">
              <p></p>
              <p className="text-white -mt-4 mr-8 text-[12px]">Client’s Name</p>
            </div>
            <p className="text-[12px] p-8 text-white -mt-8">
              The slogan for the 2023 World Blood Donor Day campaign is “Give
              blood, give plasma, share life, share often.” It focuses on
              patients requiring life-long transfusion support and underlines
              the role every single person can play, by giving the valuable gift
              of blood or plasma
            </p>
            <p className="bg-white text-black w-24 ml-8 text-center py-1 cursor-pointer rounded-md">
              Read More
            </p>
          </div>
          <div className="col-span-2 ">
            <img
              className=" items-center ml-auto mr-auto w-full md:h-72"
              style={{
                clipPath: "polygon(10% 0% , 100% 0%, 100% 100%, 0% 100%)",
              }}
              src={doctorDoing}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDSection;
