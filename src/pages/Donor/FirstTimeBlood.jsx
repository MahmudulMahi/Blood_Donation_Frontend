import React from "react";
import Navbar from "../../components/Home/Navbar";
import CarouselBanner from "../../components/Home/CarouselBanner";
import Footer from "../../components/Home/Footer";
import TitleTopComponent from "../../components/Blood/TitleTopComponent";

export default function FirstTimeBlood() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="">
        <CarouselBanner />
      </div>{" "}
      {/* First Time Blood Donation Page start */}
      <div className="mx-28">
        <div>
          <TitleTopComponent
            secondTitle={"Donor"}
            thirdTitle={"First Time Blood donation"}
          />
        </div>
        <div className="mt-10 mb-6">
          <div className="text-white bg-brandPrimary rounded-md w-2/6 md:ml-10 p-4">
            <p>Why Donate Your Blood?</p>
          </div>
          <div className="md:ml-10 md:mr-20 rounded-md -mt-6 z-30 shadow-lg border border-gray-300 border-t-0 border-l-0">
            <br></br>
            <p className="p-4 text-sm">
              There are different reasons people decide to give blood, all of
              them important. In fact, in the time it takes you to read this,
              someone in the Bangladesh needs blood. The medical demand for
              blood in Bangladesh is nine lakh bags(900,000) annually which
              means in every minute 2 blood bags are needed. And that blood can
              only come from volunteer donors like you.
              <br />
              <br />
              Whatever your motivation, when you donate blood you are giving
              hope to hospital patients – and their family and friends. You’re
              making sure a child doesn’t grow up without a parent, a husband
              doesn’t become a widower, a young woman’s father can walk her down
              the aisle at her wedding, and many more.
            </p>
          </div>
        </div>
        <div className="mt-20 mb-5">
          <div className="text-center text-xl font-semibold mb-2 mr-16 text-gray-700">
            "One pint can save three lives"
          </div>
          <div className="text-white bg-brandPrimary rounded-md w-2/6 md:ml-10 p-4">
            <p>The Benefits of Donating Blood</p>
          </div>
          <div className="md:ml-10 md:mr-20 rounded-md -mt-6 z-30 shadow-lg border border-gray-300 border-t-0 border-l-0">
            <br></br>
            <p className="p-4 text-sm">
              Did you know that when you give blood, there are benefits for you,
              too? We conduct a pre-donation screening that ensures your safety
              and the safety of the blood supply for patients – and as a bonus,
              provides you with valuable health information:
            </p>
            <ul class="list-disc p-2 mt-1 ml-6 mb-2">
              <li class="text-sm">One donation can save up to 3 lives!</li>
              <li class="text-sm">Find out your blood type.</li>
              <li class="text-sm">
                Get a mini-physical: We take your temperature, pulse and blood
                pressure and check your hemoglobin level every time you come to
                donate.
              </li>
              <li class="text-sm">
                We screen each completed donation for more than a dozen
                infectious diseases. If your donation tests positive, we will
                confidentially let you know.
              </li>
              <li class="text-sm">
                Completed donations are checked for cholesterol levels. And
                occasionally we offer additional screenings such as COVID-19
                antibodies.
              </li>
              <li class="text-sm">
                All of this information is kept in your secure, private online
                donor account so you can easily reference it at any time.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 mb-5">
          <div className="text-white bg-brandPrimary rounded-md w-2/6 md:ml-10 p-4">
            <p>How Do You Know if You Can Donate?</p>
          </div>
          <div className="md:ml-10 md:mr-20 rounded-md -mt-6 z-30 shadow-lg border border-gray-300 border-t-0 border-l-0">
            <br></br>
            <p className="p-4 text-sm">
              In general, you can donate blood if you:
            </p>
            <ul class="list-disc p-2 mt-1 ml-6 mb-1">
              <li class="text-sm">
                Are at least 18 years old (16 & 17 years old with parental
                permission); no upper age limit.
              </li>
              <li class="text-sm">Weigh at least 110 pounds.</li>
              <li class="text-sm">
                Are in good general health and feeling well the day of your
                donation.
              </li>
            </ul>
            <p className="mt-2 text-sm p-4">
              For More Information about Health & Eligibility please visit page{" "}
              <span className="text-brandPrimary">
                Blood/Health And Eligibility
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* First Time Blood Donation Page End */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
