import React from "react";

export default function KnowTheRiskPage() {
  return (
    <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-28">
      <div className="mt-10 mb-6">
        <div className="text-white bg-brandPrimary rounded-md w-full md:w-1/2 lg:w-1/4 xl:w-1/6 md:ml-4 lg:ml-10 p-4">
          <p>Know The Risks</p>
        </div>

        <div className="md:ml-10 md:mr-20 rounded-md -mt-6 z-30 shadow-lg border border-gray-300 border-t-0 border-l-0">
          <br></br>
          <p className="p-2 text-sm">
            We want to make sure you’re comfortable and safe when you give blood
            and plasma. Most reactions are minor but we want you to be informed
            to make decisions that are right for you and to provide you with
            advice to help reduce the chance of a reaction.
          </p>
        </div>
      </div>
      <div className="mt-20 mb-5">
        <div>
          <div className="text-white bg-brandPrimary rounded-md w-full md:w-3/4 lg:w-3/6 xl:w-3/6 mx-auto p-4 relative text-center">
            <p>What type of Reaction might I have after I donate blood?</p>
          </div>

          <div className="md:ml-10 md:mr-20 rounded-md -mt-6 z-30 shadow-lg border border-gray-300 border-t-0 border-l-0">
            <div>
              <div className="flex items-center mt-8 p-2">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-brandPrimary  mr-4 text-white ">
                  1
                </div>
                <div className="flex-grow">
                  <p className="text-sm">
                    The likelihood will depend on your sex, age, and whether you
                    are donating blood, plasma or platelets.
                  </p>
                </div>
              </div>
              <div className="flex items-center p-2">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-brandPrimary  mr-4 text-white ">
                  2
                </div>
                <div className="flex-grow">
                  <p className="text-sm">
                    Plasma and platelet donations generally have higher
                    likelihood because it takes longer as we return your red
                    cells and for plasma, infuse saline to help replace the
                    fluid you have lost.
                  </p>
                </div>
              </div>
              <div className="flex items-center p-2">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-brandPrimary  mr-4 text-white ">
                  3
                </div>
                <div className="flex-grow">
                  <p className="text-sm">
                    In general, the risk is higher if you're younger, haven't
                    donated blood before or are fairly new to donating, and/or
                    female.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-5">
        <div className="text-center text-lg md:text-xl lg:text-2xl font-semibold mb-2 mr-4 md:mr-16 text-gray-700">
          "When giving blood, the chances of having a reaction are very low."
        </div>

        <div className="md:ml-10 md:mr-20 rounded-md shadow-lg border border-gray-300 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            <div className="p-4">
              <p className="text-lg font-bold text-brandPrimary">
                {" "}
                VERY COMMON
              </p>
              <p className="text-sm mt-2 font-semibold">(More than 1 in 10)</p>
              <ul className="list-disc pl-6 mt-2">
                <li className="text-xs">Minor bruising</li>
              </ul>
            </div>
            <div className="p-4">
              <p className="text-lg font-bold text-brandPrimary"> COMMON</p>
              <p className="text-sm mt-2 font-semibold">
                (1 in 10 to 1 in 100)
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="text-xs">Feeling faint</li>
              </ul>
            </div>
            <div className="p-4">
              <p className="text-lg font-bold text-brandPrimary"> UNCOMMON</p>
              <p className="text-sm mt-2 font-semibold">
                (1 in 100 to 1 in 1000)
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="text-xs">Large bruise</li>
                <li className="text-xs">Fainting1</li>
                <li className="text-xs">Nerve irritation</li>
                <li className="text-xs">Painful arm</li>
                <li className="text-xs">
                  Swelling or pain in arm from fluid leaking into tissues
                </li>
                <li className="text-xs">Mild citrate reaction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 mb-5">
        <div className="md:ml-10 md:mr-20 rounded-md shadow-lg border border-gray-300 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            <div className="col-span-1 p-4">
              <p className="text-lg font-bold text-brandPrimary"> RARE</p>
              <p className="text-sm mt-2 font-semibold">
                (1 in 1000 to 1 in 10000)
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="text-xs">Delayed bleeding</li>
                <li className="text-xs">Localized allergic reaction</li>
                <li className="text-xs">
                  Any event requiring outside medical care
                </li>
                <li className="text-xs">Moderate citrate reaction</li>
              </ul>
            </div>
            <div className="col-span-1 p-4">
              <p className="text-lg font-bold text-brandPrimary">VERY RARE</p>
              <p className="text-sm mt-2 font-semibold">
                (1 in 10000 to 1 in 100000(1 Lakh))
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="text-xs">Piercing of an artery</li>
                <li className="text-xs">Local inflammation of the vein</li>
                <li className="text-xs">Chest pain</li>
              </ul>
            </div>
            <div className="col-span-1 p-4">
              <p className="text-lg font-bold text-brandPrimary">
                Extreme Rare
              </p>
              <p className="text-sm mt-2 font-semibold">
                (1 in 100000(1 Lakh) to 1 in 1000000(10 Lakh))
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="text-xs">Cellulitis (skin infection)</li>
                <li className="text-xs">
                  Nerve injury causing a prolonged period of pain or weakness
                </li>
                <li className="text-xs">
                  {" "}
                  Clot in the deep veins of the arm (uncommonly, the clot may
                  travel to the lungs which may rarely cause significant
                  symptoms)
                </li>
                <li className="text-xs">
                  Symptoms from the return of damaged red cells
                </li>
                <li className="text-xs">Severe citrate reaction</li>
              </ul>
              <p className="text-sm mt-6 font-semibold">
                (Less than 1 in 1000000(1 Lakh))
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="text-xs">
                  Major allergic reaction (anaphylaxis)
                </li>
                <li className="text-xs">Major blood vessel or tendon injury</li>
                <li className="text-xs">
                  {" "}
                  Symptoms from the return of clotted blood.
                </li>
                <li className="text-xs">
                  Symptoms from air entering the vein.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-6">
        <div className="text-white bg-brandPrimary rounded-md w-full md:w-1/6 md:ml-10 p-3">
          <p>Reaction Symptoms</p>
        </div>

        <div className="md:ml-10 md:mr-20 rounded-md -mt-6 z-30 shadow-lg border border-gray-300 border-t-0 border-l-0 ">
          <br></br>
          <div className="ml-4 p-4">
            <p className="text-lg font-semibold text-brandPrimary">
              {" "}
              FEELING FAINT OR FAINTING
            </p>
            <p className=" mt-2 text-sm">
              Feeling faint may include feeling dizzy, light-headed, hot,
              sweaty, and/or nauseous. It can happen during donation, straight
              after donating or after leaving the donor centre. Only a small
              proportion of donors actually faint which can cause an injury.
            </p>
          </div>
          <div className="ml-4 p-4">
            <p className="text-lg font-semibold text-brandPrimary">BRUISING</p>
            <p className=" mt-2 text-sm">
              Small bruises will generally resolve in a few days. Occasionally
              larger bruises can develop and be uncomfortable for several days
              and take several weeks to resolve.
            </p>
          </div>
          <div className="ml-4 p-4">
            <p className="text-lg font-semibold text-brandPrimary">
              PLASMA AND PLATELETS RISKS
            </p>
            <p className=" mt-2 text-sm">
              When you donate plasma and platelets, citrate is added to stop the
              blood clotting as we collect it, and a small amount is returned to
              you with your red cells. You might experience a mild sensitivity
              to the citrate because of its effects on calcium and magnesium,
              which can include chills, tingling of the lips or tongue, or a
              metallic taste. Moderate symptoms are uncommon and include
              tingling of hands or feet, shivering and muscle twitching.
            </p>
            <br></br>
            <p className=" mt-2 text-sm">
              The following are very rare events. A life-threatening reaction
              can occur but the likelihood of an event occurring is minimized by
              our safety protocols:
            </p>
            <ul class="list-disc p-2 mt-2">
              <li class="text-sm">
                Severe reaction to citrate: can include muscle contractions or
                spasms, seizures, breathing difficulties or disturbance of heart
                rhythm.
              </li>
              <li class="text-sm">
                Damage to red cells in the machine: if returned to you in a
                large volume, it can cause blood in the urine, fevers and back
                pain. If you are healthy, there are no long-term side-effects
                from return of damaged red cells.
              </li>
              <li class="text-sm">
                Disruption to the delivery of citrate causing clotting in the
                tubing: if returned to you, this may cause blocking of a blood
                vessel. Symptoms can include dizziness, breathlessness,
                coughing, chest pain or limb swelling.
              </li>
              <li class="text-sm">
                Entry of air into the collection line: if returned to you (air
                embolus), can cause blockage to blood vessels resulting in
                symptoms such as breathlessness or chest pain.{" "}
              </li>
            </ul>
          </div>
          <div className="ml-4 p-4">
            <p className="text-lg font-semibold text-brandPrimary">
              ARE THERE RISKS TO BEING A FREQUENT PLATELET DONOR?
            </p>
            <p className=" mt-2 text-sm">
              The amount of citrate returned to you during a platelet donation
              is higher than returned for a donation where just plasma is
              collected. Citrate causes a temporary drop in calcium, but studies
              have not consistently shown any long-term bone health effects in
              frequent platelet donors. Some studies have shown a reduction in a
              specific type of white cell (lymphocyte) in some frequent platelet
              donors. Further research is underway, but to date there is no
              confirmed evidence of long term consequences for health.
            </p>
          </div>
          <div className="ml-4 p-4">
            <p className="text-lg font-semibold text-brandPrimary uppercase">
              Other needle-related reactions explained
            </p>
            <p className=" mt-2 text-sm">
              As we already know needle normally used one time and then it
              discarded as it done by ext=perts. so the following cases will be
              very unlikely to occur:
            </p>
            <ul class="list-disc p-2 mt-2">
              <li class="text-sm">
                Nerve irritation: Transient shooting arm pain or pins and
                needles in the arm or hand
              </li>
              <li class="text-sm">
                Localized allergic reaction: Redness and swelling near needle
                site
              </li>
              <li class="text-sm">
                Piercing of an artery: If the needle goes into an artery instead
                of a vein, the flow is under high pressure and there is a much
                higher likelihood of bruising if any blood leaks into
                surrounding tissues.
              </li>
              <li class="text-sm">
                Local inflammation of the vein: Tenderness and redness in the
                area of the vein usually occurring several days after donation.
              </li>
              <li class="text-sm">
                Cellulitis: Infection of the skin usually causing redness,
                swelling, pain and warmth in the area affected, which generally
                occurs 1-2 days after donation.
              </li>
              <li class="text-sm">
                Nerve injury: Damage to nerves can lead to pain, pins and
                needles and occasionally weakness in the arm.
              </li>
              <li class="text-sm">
                Major blood vessel or tendon injury: Injury which may cause
                prolonged discomfort or impaired function and/or may require
                surgery to correct
              </li>
            </ul>
          </div>
          <div className="ml-4 p-4">
            <p className="text-lg font-semibold text-brandPrimary uppercase">
              Allergic reactions
            </p>
            <p className=" mt-2 text-sm">
              A localised reaction (e.g. redness, swelling, itching) can occur
              as a result of an allergy to materials or solutions used when you
              donate blood. Very rarely, severe allergic reactions can occur
              causing symptoms such as, breathlessness, wheezing, facial
              swelling, difficulty swallowing, and/or swollen tongue. This can
              be life-threatening and requires emergency treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
