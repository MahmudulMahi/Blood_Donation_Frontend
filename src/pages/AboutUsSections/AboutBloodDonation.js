import React from "react";
import ImageBlood from "../../assets/blood.jpeg";
import ImageBlood1 from "../../assets/blood1.png";

function AboutBloodDonation() {
  return (
    <div className="max-w-[2036px] ml-auto mr-auto">
      <div className="grid grid-cols-4  mx-auto mt-4">
        <div className="col-span-1 bg-brandPrimary md:ml-10 rounded-md ">
          <p className="font-bold mb-8 mt-4 text-white ml-6">
            About Blood Donation
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4">
        <div></div>

        <div
          className="col-span-3 -mt-10  rounded-md mr-20 "
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <p className=" p-2 text-sm">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="text-white bg-brandPrimary rounded-md w-2/6 md:ml-10 p-4">
          <p>How we thought of establishing this website</p>
        </div>
        <div
          className="md:ml-10 md:mr-20 rounded-md -mt-6 z-30 shadow-lg"
          // style={{ boxShadow: "rgba(2, 0, 0.77, 0.35) 0px 5px 15px" }}
        >
          <br></br>
          <p className="p-2 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like)
          </p>
        </div>
      </div>

      {/* blood image sectons */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5  mt-10 text-sx ml-8 mr-8">
        <div className="shadow-2xl p-4 text-16 rounded-sm">
          <div className="zindexnav relative">
            <p className="p-4 zindexnav bg-brandPrimary rounded-md font-bold text-white w-2/4 ">
              Our Mission
            </p>
          </div>
          <div class="relative -mt-14">
            <div className=" z-100 relative zindex  overflow-hidden rounded-2xl">
              <img
                class="h-52 w-4/6 rounded-2xl overflow-hidden zindex mt-2 transition-transform transform-gpu scale-100 translate-y-8 translate-x-4"
                src={ImageBlood1}
                alt=""
              />
            </div>
            <div className=" z-0 relative">
              <img
                class="w-4/6 rounded-2xl h-44 h bg-black  -mt-40 ml-14  stransition-transform transform-gpu scale-100"
                src={ImageBlood}
                alt=""
              />
            </div>
          </div>

          <p className="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.“
          </p>
          <p className="mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.“
          </p>
        </div>

        <div className="shadow-2xl p-4 text-16 rounded-sm">
          <div className="zindexnav relative">
            <p className="p-4 zindexnav bg-brandPrimary rounded-md font-bold text-white w-2/4 ">
              Our Mission
            </p>
          </div>
          <div class="relative -mt-14">
            <div className=" z-100 relative zindex  overflow-hidden rounded-2xl">
              <img
                class="h-52 w-4/6 rounded-2xl overflow-hidden zindex mt-2 transition-transform transform-gpu scale-100 translate-y-8 translate-x-4"
                src={ImageBlood1}
                alt=""
              />
            </div>
            <div className=" z-0 relative">
              <img
                class="w-4/6 rounded-2xl h-44 h bg-black  -mt-40 ml-14  stransition-transform transform-gpu scale-100"
                src={ImageBlood}
                alt=""
              />
            </div>
          </div>

          <p className="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.“
          </p>
          <p className="mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.“
          </p>
        </div>

        <div className="shadow-2xl p-4 text-16 rounded-sm">
          <div className="zindexnav relative">
            <p className="p-4 zindexnav bg-brandPrimary rounded-md font-bold text-white w-2/4 ">
              Our Mission
            </p>
          </div>
          <div class="relative -mt-14">
            <div className=" z-100 relative zindex  overflow-hidden rounded-2xl">
              <img
                class="h-52 w-4/6 rounded-2xl overflow-hidden zindex mt-2 transition-transform transform-gpu scale-100 translate-y-8 translate-x-4"
                src={ImageBlood1}
                alt=""
              />
            </div>
            <div className=" z-0 relative">
              <img
                class="w-4/6 rounded-2xl h-44 h bg-black  -mt-40 ml-14  stransition-transform transform-gpu scale-100"
                src={ImageBlood}
                alt=""
              />
            </div>
          </div>

          <p className="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.“
          </p>
          <p className="mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.“
          </p>
        </div>
      </div>
      
    
    </div>
  );
}

export default AboutBloodDonation;
