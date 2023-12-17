import React from "react";

<<<<<<< HEAD
import dropblood from "../../assets/Group 271.png"
import AboutCard from "./AboutCard";
=======
>>>>>>> 72bcc52c5fb19fab5ee4415ff1e4ade07541277d
export default function AboutBloodPage() {
  return (
    <div>
      {" "}
      <div className="ml-auto mr-auto">
        <div className="mt-10 mb-4 md:w-10/12 ml-auto mr-auto md:p-0 p-2">
          <div className="text-white bg-brandPrimary rounded-md md:w-1/6 w-full  p-4 ">
            <p>learn About Blood</p>
          </div>
          <div
            className=" rounded-md -mt-6 z-30 shadow-lg ml-auto mr-auto p-4"
            // style={{ boxShadow: "rgba(2, 0, 0.77, 0.35) 0px 5px 15px" }}
          >
            <br></br>
            <p className="p-2 text-sm">
              Blood is a specialized body fluid. It has four main components:
              plasma, red blood cells, white blood cells, and platelets. Blood
              has many different functions, including:
            </p>
            <div className="font-bold p-4 text-xs -mt-2">
              <li>
                transporting oxygen and nutrients to the lungs and tissues
              </li>
              <li>forming blood clots to prevent excess blood loss</li>
              <li>carrying cells and antibodies that fight infection</li>
              <li>
                bringing waste products to the kidneys and liver, which filter
                and clean the blood
              </li>

              <li>regulating body temperature</li>
            </div>
          </div>
        </div>

        <div className="md:p-0 p-2">
          <p className="text-center font-bold text-xl mt-10">
            <span className="text-bold text-2xl">“</span> Every Blood Is
            different <span className="text-bold text-2xl">“</span>{" "}
          </p>
        </div>
<<<<<<< HEAD
      </div>

      {/* total blood supply */}
      <div className="mt-12  bg-[#FFF]  w-full md:h-[700px] h-[1100px] relative p-1 shadow-2xl " style={{
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
      }}>
        <div>
          <h2>   <button className="bg-brandPrimary text-white lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md ml-2 mt-4 lg:mt-2 md:mt-2  font-bold shadow-md text-left mb-10 md:mb-0 absolute -top-10">
            Total Blood Supply of World Bangladesh
          </button></h2>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 text-center">
          <div className="flex flex-col items-center">
            <div >
              <h2>O Positive</h2>
              <p>(O+)</p>
            </div>
            <div className="relative">
              <img className="relative" src={dropblood} alt="" />
             
            </div>
            <div className="absolute  ">
                <p className=" text-2xl ">0.2%</p>
            </div>
          </div>
          {/* ------------ */}
          <div className="flex flex-col items-center">
            <div >
              <h2>A Positive</h2>
              <p>(A+)</p>
            </div>
            <div className="relative">
              <img className="relative" src={dropblood} alt="" />
             
            </div>
            <div className="absolute  ">
                <p className=" text-2xl ">0.2%</p>
            </div>
          </div>
          {/* ----------- */}
          <div className="flex flex-col items-center">
            <div >
              <h2>B Positive</h2>
              <p>(B+)</p>
            </div>
            <div className="relative">
              <img className="relative" src={dropblood} alt="" />
             
            </div>
            <div className="absolute  ">
                <p className=" text-2xl ">0.2%</p>
            </div>
          </div>
          {/* ------------ */}

          <div className="flex flex-col items-center">
            <div >
              <h2>AB Positive</h2>
              <p>(AB+)</p>
            </div>
            <div className="relative">
              <img className="relative" src={dropblood} alt="" />
             
            </div>
            <div className="absolute  ">
                <p className=" text-2xl ">0.2%</p>
            </div>
          </div>
          {/* ----------- */}
          <div className="flex flex-col items-center">
            <div >
              <h2>O Negative</h2>
              <p>(O-)</p>
            </div>
            <div className="relative">
              <img className="relative" src={dropblood} alt="" />
             
            </div>
            <div className="absolute bottom-[115px]  md:bottom-[210px] ">
                <p className=" text-2xl text-white">0.2%</p>
            </div>
          </div>
          {/* ------------- */}
          <div className="flex flex-col items-center">
            <div >
              <h2>A Negative</h2>
              <p>(A-)</p>
            </div>
            <div className="relative">
              <img className="relative" src={dropblood} alt="" />
             
            </div>
            <div className="absolute bottom-[115px]  md:bottom-[210px] ">
                <p className=" text-2xl text-white">0.2%</p>
            </div>
          </div>
          {/* ----------- */}
          <div className="flex flex-col items-center">
            <div >
              <h2>B Negative</h2>
              <p>(B-)</p>
            </div>
            <div className="relative">
              <img className="relative" src={dropblood} alt="" />
             
            </div>
            <div className="absolute bottom-[115px]  md:bottom-[210px] ">
                <p className=" text-2xl text-white">0.2%</p>
            </div>
          </div>
          {/* ---------- */}
          <div className="flex flex-col items-center ">
            <div >
              <h2>AB Negative</h2>
              <p>(AB-)</p>
              
            </div>
            <div className="relative">
              <img className="relative" src={dropblood} alt="" />
             
            </div>
            <div className="absolute bottom-[115px]  md:bottom-[210px] ">
                <p className=" text-2xl text-white">0.2%</p>
            </div>
            
=======

        <div className="mt-10 mb-4 md:w-10/12 ml-auto mr-auto md:p-0 p-2">
          <div className="text-white bg-brandPrimary rounded-md md:w-2/6 w-full  p-4 ">
            <p>How Blood Type Is Determined</p>
          </div>
          <div
            className=" rounded-md -mt-6 z-30 shadow-lg ml-auto mr-auto p-4"
            // style={{ boxShadow: "rgba(2, 0, 0.77, 0.35) 0px 5px 15px" }}
          >
            <br></br>
            <p className="p-2 text-sm">
              Blood types are determined by the presence or absence of certain
              antigens – substances that can trigger an immune response if they
              are foreign to the body. Since some antigens can trigger a
              patient's immune system to attack the transfused blood, safe blood
              transfusions depend on careful blood typing and cross-matching.{" "}
              <span className="font-bold">
                {" "}
                Do you know what blood type is safe for you if you need a
                transfusion?
              </span>
            </p>
            <p className="p-2 text-sm mt-4">
              There are four major blood groups determined by the presence or
              absence of two antigens, A and B, on the surface of red blood
              cells. In addition to the A and B antigens, there is a protein
              called the Rh factor, which can be either present (+) or absent
              (–), creating the 8 most common blood types
              <span className="text-red-700">
                (A+, A-, B+, B-, O+, O-, AB+, AB-).
              </span>
            </p>
>>>>>>> 72bcc52c5fb19fab5ee4415ff1e4ade07541277d
          </div>
        </div>
      </div>
    </div>
  );
}
