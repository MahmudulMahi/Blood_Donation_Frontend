import React from "react";
import Navbar from "../../components/Home/Navbar";
import CarouselBanner from "../../components/Home/CarouselBanner";
import Footer from "../../components/Home/Footer";
import ha1 from "../../assets/HAE/hae1.svg";
import ha2 from "../../assets/HAE/hae2.svg";
import ha3 from "../../assets/HAE/hae3.svg";
import ha4 from "../../assets/HAE/hae4.svg";
import ha5 from "../../assets/HAE/hae5.svg";
import ha6 from "../../assets/HAE/hae6.svg";
import ha7 from "../../assets/HAE/hae7.svg";

export default function HealthAndEligibility() {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="">
        <CarouselBanner />
      </div>
      {/* Page Start */}
      <div>
        <div className="mx-28">
          <div className="w-full h-20 flex justify-between items-center">
            <div>
              <p className="font-semibold">
                {" "}
                Home <span className="text-brandPrimary">&gt;</span> Blood{" "}
                <span className="text-brandPrimary">&gt;</span> Health And
                Eligibility
              </p>
            </div>
          </div>
          <div className="mt-10 mb-6">
            <div className="text-white bg-brandPrimary rounded-md w-2/6 md:ml-10 p-4">
              <p>Why Eligibility Required For Blood Donation</p>
            </div>
            <div className="md:ml-10 md:mr-20 rounded-md -mt-6 z-30 shadow-lg border border-gray-300 border-t-0 border-l-0">
              <br></br>
              <p className="p-2 text-sm">
                You may be wondering if you can donate blood. Donating blood is
                safe and easy to do, but there are a few basic requirements to
                donate blood.If you're in good health and meet the general
                eligibility blood donation requirements, then you are likely
                able to give blood.
                <br />
                <br />
                Blood donors are needed every day to save lives. Please review
                the additional eligibility information below if you have
                questions about health conditions, HIV risk, medications, travel
                and more. If you don’t meet the blood donation requirements
                today or receive a deferral, we encourage you to come back and
                try again. You will likely be eligible to donate blood in the
                future..
                <br />
                <br /> Why are there requirements to donate blood? Eligibility
                requirements are important to help ensure the safety of both the
                blood donor and blood recipient.
                <br />
                <br />
                The Food and Drug Administration (FDA) has established blood
                donation requirements to keep the blood supply safe from
                bloodborne diseases and also keep patients safe from anything in
                a donor’s blood (such as a medication) that could harm them.
                These blood donation requirements also protect donors by making
                sure they are physically able to safely donate
              </p>
            </div>
          </div>

          <div className="mt-20 mb-5">
            <div className="text-center text-xl font-semibold mb-2 mr-16 text-gray-700">
              Transform The Lives Of Patient In Need By Donating Blood Today
            </div>
            <div>
              <div className="text-white bg-brandPrimary rounded-md w-2/6 md:ml-80 p-4 relative">
                <p>How we thought of establishing this website</p>
              </div>
              <div className="md:ml-10 md:mr-20 rounded-md -mt-6 z-30 shadow-lg border bg-red-100 border-gray-300 border-t-0 border-l-0">
                <div className="grid grid-cols-4 gap-4 ">
                  {/* First Column */}
                  <div className="col-span-1 text-center mt-20">
                    <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-12 h-12 bg-brandPrimary rounded-full">
                        <img
                          className="w-11 h-11 object-cover rounded-full  mx-auto"
                          src={ha1} // Replace with your image source
                          alt="Image 3"
                        />
                      </div>
                    </div>
                    <p className="text-center text-sm font-semibold">
                      Must be at least 16 years <br /> old
                    </p>
                  </div>

                  {/* Second Column */}
                  <div className="col-span-1 text-center mt-20">
                    <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-12 h-12 bg-brandPrimary rounded-full">
                        <img
                          className="w-11 h-11 object-cover rounded-full  mx-auto"
                          src={ha2} // Replace with your image source
                          alt="Image 3"
                        />
                      </div>
                    </div>
                    <p className="text-center text-sm font-semibold">
                      Weight at least <br /> 50kg (110 pounds)
                    </p>
                  </div>

                  {/* Third Column */}
                  <div className="col-span-1 text-center mt-20">
                    <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-12 h-12 bg-brandPrimary rounded-full">
                        <img
                          className="w-11 h-11 object-cover rounded-full  mx-auto"
                          src={ha3} // Replace with your image source
                          alt="Image 3"
                        />
                      </div>
                    </div>
                    <p className="text-center text-sm font-semibold">
                      Be in good general health
                    </p>
                  </div>

                  {/* Fourth Column */}
                  <div className="col-span-1 text-center mt-20">
                    <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-12 h-12 bg-brandPrimary rounded-full">
                        <img
                          className="w-11 h-11 object-cover rounded-full  mx-auto"
                          src={ha4} // Replace with your image source
                          alt="Image 3"
                        />
                      </div>
                    </div>
                    <p className="text-center text-sm font-semibold">
                      Bring your ID
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3  mb-8">
                  {/* First Column */}
                  <div className="col-span-1 text-center mt-20">
                    <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-12 h-12 bg-brandPrimary rounded-full">
                        <img
                          className="w-11 h-11 object-cover rounded-full  mx-auto"
                          src={ha5} // Replace with your image source
                          alt="Image 3"
                        />
                      </div>
                    </div>
                    <p className="text-center text-sm font-semibold">
                      Eat within 2 hours ahead of <br /> your donation
                    </p>
                  </div>

                  {/* Second Column */}
                  <div className="col-span-1 text-center mt-20">
                    <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-12 h-12 bg-brandPrimary rounded-full">
                        <img
                          className="w-11 h-11 object-cover rounded-full  mx-auto"
                          src={ha6} // Replace with your image source
                          alt="Image 3"
                        />
                      </div>
                    </div>
                    <p className="text-center text-sm font-semibold">
                      Drink plenty of non- <br /> alcoholic liquids
                    </p>
                  </div>

                  {/* Third Column */}
                  <div className="col-span-1 text-center mt-20">
                    <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-12 h-12 bg-brandPrimary rounded-full">
                        <img
                          className="w-11 h-11 object-cover rounded-full  mx-auto"
                          src={ha7} // Replace with your image source
                          alt="Image 3"
                        />
                      </div>
                    </div>

                    <p className="text-center text-sm font-semibold">
                      Wait eight weeks between <br />
                      whole blood donations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* next section */}
          <div className="mt-20 mb-5">
            <div className="text-white bg-brandPrimary rounded-md w-1/6 md:ml-10 p-3 relative">
              <p className="font-bold">Basic Eligibility</p>
            </div>
          </div>
          {/* Next section end */}
        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}
