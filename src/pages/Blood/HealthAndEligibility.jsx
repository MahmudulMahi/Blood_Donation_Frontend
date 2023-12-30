import React, { useState } from "react";
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
import TitleTopComponent from "../../components/Blood/TitleTopComponent";

export default function HealthAndEligibility() {
  const [items, setItems] = useState([
    {
      number: 1,
      title: "Basic eligibility requirements for blood donation",
      details: [
        "Must be at least 16 years old (16- and some 17-year-olds must bring a signed permission form from a parent or guardian, if required by state or school).",
        "Weigh at least 110 pounds. Certain height/weight criteria may apply for donors 22 years old or younger. For specific requirements in your area, please call 877-258-4825.",
        "Be in good general health.",
        "For your safety and to ensure a positive donation experience, make sure you eat within two hours ahead of your donation. Drink plenty of water that day and 24 to 48 hours beforehand. Feel free to help yourself to something to eat and drink in our refreshment area.",
        "Bring your ID—something with your name and one of the following: date of birth, donor ID number or your photo.",
        "You must wait eight weeks between whole blood donations. Learn more about specific intervals for other types of donation.",
        "You should not be under the influence of alcohol or recreational drugs at the time of donation.",
      ],
    },
    {
      number: 2,
      title: "Requirements for source plasma",
      details: [
        "Unlike plasma that is donated specifically for patient transfusion, source plasma is collected and used to develop lifesaving medicines and therapies for patients with neurological disorders, immune deficiencies, bleeding disorders and more.Source plasma donors have specific eligibility requirements. Please call us at 877-258-4825 for more information.",
      ],
    },
    {
      number: 3,
      title: "COVID-19",
      details: [
        "COVID-19 is the disease caused by the SARS-CoV-2 coronavirus. Before donating blood, please refer to your state’s or public health agency’s guidelines for COVID-19 testing and quarantining.",
        "Whatever your COVID-19 vaccination status, you may still give blood or platelets. If you have received a COVID-19 vaccine or booster, you may give blood or platelets any time after your vaccination if you meet all general blood donation eligibility criteria.",
        "Do not come to donate if you have symptoms of COVID-19 or are subject to quarantine after close contact with individuals diagnosed with or suspected of having COVID-19 infection. If you’ve had COVID-19 more than 10 days ago and your symptoms are resolving, you are eligible to donate.",
        "Please do NOT donate or enter a any facility if you are not feeling well. Blood donors are NOT tested for active coronavirus infection.",
      ],
    },
  ]);
  const [dynamicItems, setDynamicItems] = useState([
    {
      number: 1,
      title: "Health conditions that impact blood donation",
      details: [
        "Most health conditions are acceptable and you may be eligible to donate if you meet all other requirements. If you have any questions, please call us at 877-258-4825,",
        "Breastfeeding: Female donors who are breastfeeding are eligible to donate.",
        "Cancer: If you have a history of basal cell or squamous cell skin cancer, or in situ breast or cervix cancer, you are eligible to donate once you've completed your treatment. Those with lymphoma or leukemia are permanently deferred from donating blood (however, eligibility criteria for adult survivors of childhood leukemia who were diagnosed when they were 18 years old or younger may vary). All other types of cancer will be assessed at the time of donation, but 12 months must have passed since the last treatment and you must be considered cancer-free at the time of donation.",
        "Colds/Flu: You are not eligible if you are not feeling well and healthy the day of donation. You may donate after you recover and are symptom-free.",
        "Diabetes: If you have diabetes (type I or II), you are eligible to donate. If you have any questions, please call us at 877-258-4825.",
        "Heart Disease: If you have a history of heart disease or heart attacks, you may be eligible to donate provided 6 months have elapsed from the incident and other specific criteria have been met. Please contact us for additional information.",
        "Hemochromatosis/Polycythemia: If you are diagnosed with hereditary hemochromatosis or polycythemia, please check with us first.",
      ],
    },
    {
      number: 2,
      title: "HIV/AIDS risk factors",
      details: [
        "All potential donors will be screened using a series of questions that assess individual risk of HIV, regardless of gender or sexual orientation.",
        "Detail 2: Details on HIV/AIDS risk factor 2",
        "Detail 3: Additional details",
      ],
    },
    {
      number: 3,
      title:
        "Donating blood if you have tattoos, piercings, permanent make-up & acupuncture",
      details: [
        "Tattoos/Permanent Make-up/Micro-blading: These are acceptable and the donor is not deferred if the tattoo, permanent make-up or micro-blading was performed in a state-regulated shop, using sterile needles and single-use ink.",
        "Ear/Body Piercing/Branding: You are eligible to donate if a piercing or branding was performed using single-use equipment. Otherwise, we’ll ask you to wait 3 months before donating. Note: Piercings done at Claire’s stores and similar establishments are acceptable.",
        "Acupuncture/Dry-needling: You are eligible if t he procedure was performed using single-use equipment. Otherwise, we’ll ask you to wait 3 months before donating.",
      ],
    },
    {
      number: 4,
      title: "Travel restrictions due to malaria risk areas",
      details: [
        "Most travel is acceptable. There are certain countries and popular travel destinations that are malaria risk areas. If you've traveled to these areas, we'll ask you to wait 3 months before you donate. Please call 800-289-4923, with any questions about your recent travel.",
      ],
    },
    {
      number: 5,
      title: "Travel/Residency criteria",
      details: [
        "Variant Creutzfeldt-Jakob Disease (vCJD), known as mad cow disease, is an infectious disease whose potential for transmission by transfusion is believed to be waning. As of Aug. 16, 2022, deferrals ended for individuals who spent time in the United Kingdom or Europe.",
      ],
    },
  ]);

  const handleToggle = (index) => {
    const updatedItems = [...items];
    updatedItems[index].expanded = !updatedItems[index].expanded;
    setItems(updatedItems);
  };
  const handleToggleDetails = (index) => {
    const updatedDynamicItems = [...dynamicItems];
    updatedDynamicItems[index].isExpanded =
      !updatedDynamicItems[index].isExpanded;
    setDynamicItems(updatedDynamicItems);
  };

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
        <div className="mx-4 md:mx-10 lg:mx-20 xl:mx-28">
          <div>
          <TitleTopComponent secondTitle={"Blood"} thirdTitle={"Health And Eligibility"} />
        </div>
          <div className="mt-10 mb-6">
            <div className="text-white bg-brandPrimary rounded-md w-full md:w-2/3 lg:w-1/2 xl:w-2/6 mx-auto md:ml-10 p-4">
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
            <div className="text-center text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mr-16 text-gray-700">
              Transform The Lives Of Patient In Need By Donating Blood Today
            </div>

            <div>
              <div className="text-white bg-brandPrimary rounded-md md:w-2/6 md:ml-96 p-4 relative mt-5">
                <p className="text-center md:text-left">
                  How we thought of establishing this website
                </p>
              </div>

              <div className="md:ml-10 md:mr-20 rounded-md md:-mt-6 lg:-mt-6  z-30 shadow-lg border bg-red-100 border-gray-300 border-t-0 border-l-0 ">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {/* First Column */}
                  <div className="col-span-1 text-center sm:mt-20">
                    <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-12 h-12 bg-brandPrimary rounded-full">
                        <img
                          className="w-11 h-11 object-cover rounded-full mx-auto"
                          src={ha1} // Replace with your image source
                          alt="Image 3"
                        />
                      </div>
                    </div>
                    <p className="text-center text-xs sm:text-sm font-semibold">
                      Must be at least 16 years old
                    </p>
                  </div>

                  {/* Second Column */}
                  <div className="col-span-1 text-center sm:mt-20">
                    <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-12 h-12 bg-brandPrimary rounded-full">
                        <img
                          className="w-11 h-11 object-cover rounded-full mx-auto"
                          src={ha2} // Replace with your image source
                          alt="Image 3"
                        />
                      </div>
                    </div>
                    <p className="text-center text-xs sm:text-sm font-semibold">
                      Weight at least 50kg (110 pounds)
                    </p>
                  </div>

                  {/* Third Column */}
                  <div className="col-span-1 text-center sm:mt-20">
                    <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-12 h-12 bg-brandPrimary rounded-full">
                        <img
                          className="w-11 h-11 object-cover rounded-full mx-auto"
                          src={ha3} // Replace with your image source
                          alt="Image 3"
                        />
                      </div>
                    </div>
                    <p className="text-center text-xs sm:text-sm font-semibold">
                      Be in good general health
                    </p>
                  </div>

                  {/* Fourth Column */}
                  <div className="col-span-1 text-center sm:mt-20">
                    <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-12 h-12 bg-brandPrimary rounded-full">
                        <img
                          className="w-11 h-11 object-cover rounded-full mx-auto"
                          src={ha4} // Replace with your image source
                          alt="Image 3"
                        />
                      </div>
                    </div>
                    <p className="text-center text-xs sm:text-sm font-semibold">
                      Bring your ID
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 mb-8">
                  {/* First Column */}
                  <div className="col-span-1 text-center sm:mt-20">
                    <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-12 h-12 bg-brandPrimary rounded-full">
                        <img
                          className="w-11 h-11 object-cover rounded-full mx-auto"
                          src={ha5} // Replace with your image source
                          alt="Image 3"
                        />
                      </div>
                    </div>
                    <p className="text-center text-xs sm:text-sm font-semibold">
                      Eat within 2 hours ahead of your donation
                    </p>
                  </div>

                  {/* Second Column */}
                  <div className="col-span-1 text-center sm:mt-20">
                    <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-12 h-12 bg-brandPrimary rounded-full">
                        <img
                          className="w-11 h-11 object-cover rounded-full mx-auto"
                          src={ha6} // Replace with your image source
                          alt="Image 3"
                        />
                      </div>
                    </div>
                    <p className="text-center text-xs sm:text-sm font-semibold">
                      Drink plenty of non-alcoholic liquids
                    </p>
                  </div>

                  {/* Third Column */}
                  <div className="col-span-1 text-center sm:mt-20">
                    <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-12 h-12 bg-brandPrimary rounded-full">
                        <img
                          className="w-11 h-11 object-cover rounded-full mx-auto"
                          src={ha7} // Replace with your image source
                          alt="Image 3"
                        />
                      </div>
                    </div>
                    <p className="text-center text-xs sm:text-sm font-semibold">
                      Wait eight weeks between whole blood donations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* next section */}
          <div className="mt-10 mb-5">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:ml-10 md:mr-20 mt-4 rounded-md shadow-lg border bg-red-100 border-gray-300 p-4`}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white font-bold mr-4">
                    {item.number}
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-lg">{item.title}</p>
                  </div>
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-brandPrimary cursor-pointer text-white`}
                    onClick={() => handleToggle(index)}
                  >
                    {item.expanded ? "-" : "+"}
                  </div>
                </div>
                {item.expanded && (
                  <div className="ml-4 mt-2 md:ml-6">
                    <ul className="list-disc list-inside pl-4 text-sm font-serif">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="mb-1">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Next section end */}
          {/* last section start */}
          <div className="mt-10 mb-10">
            <div className="text-center text-xl font-semibold mb-2 mr-2 md:mr-16 text-gray-700">
              Other Factors That Can Impact Eligibility
            </div>

            <div className="text-white bg-brandPrimary rounded-md w-full md:w-2/6 md:ml-10 p-4 mt-4">
              <p>Additional Eligibility Requirements</p>
            </div>

            <div className="md:ml-10 md:mr-20 rounded-md -mt-6 z-30 shadow-lg border border-gray-300 border-t-0 border-l-0 ">
              <br></br>
              <p className="p-2 text-sm">
                If you're in good health and meet the general eligibility
                criteria, then you are likely able to give blood. Even if you’ve
                donated before, you may have specific questions about
                eligibility if you recently got a tattoo, traveled abroad or
                take certain medications.<br></br>
                If you were told previously that you were disqualified from
                donating blood you might be able to now.
              </p>
            </div>
            {dynamicItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ml-4 sm:ml-6 md:ml-10 mr-4 sm:mr-6 md:mr-20 rounded-md shadow-lg border bg-red-100 border-gray-300 mt-4 p-4 `}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white font-bold mr-2 sm:mr-4">
                    {item.number}
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-lg">{item.title}</p>
                  </div>
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-brandPrimary cursor-pointer text-white`}
                    onClick={() => handleToggleDetails(index)}
                  >
                    {item.isExpanded ? "-" : "+"}
                  </div>
                </div>
                {item.isExpanded && (
                  <div className="ml-4 sm:ml-6 md:ml-16 mt-2">
                    <ul className="list-disc list-inside pl-6 text-sm font-serif">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="mb-1">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* last section end */}
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
