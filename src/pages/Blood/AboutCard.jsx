import React from 'react';

const AboutCard = ({card}) => {
  const {image,icon,title,details}=card
  return (
   

    <div className="flex justify-center mt-12 space-x-2 hover:-translate-y-5 hover:border-b-4 rounded-xl hover:border-brandPrimary hover:rounded-xl transition-all duration-300 m-10 border">
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl border border-brandPrimary">
      <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img
          src={image}
          alt="img-blur-shadow"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="w-full -mt-[40px] zindex"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className=" w-[100px]"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={icon}
            alt="emojion_handshake"
            className="w-[100px] h-[100px] p-1"
          />
        </div>
      </div>

      <div className="p-6 -mt-2">
        <h5
          className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center"
          style={{
            fontFamily: "Poppins",
          }}
        >
        {title}
        </h5>
        <p
          className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text- mt-4 text-justify"
          style={{
            fontFamily: "Poppins",
          }}
        >
       {details}
        </p>
      </div>

      <div
        className="justify-end mt-4"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
        }}
      >
    
      </div>
    </div>
  </div>
    


  );
};

export default AboutCard;

