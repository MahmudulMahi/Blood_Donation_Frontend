import React from "react";
import bg from "../../assets/TotalReviews.png";
import blood from "../../assets/ReviewsTotal/Layer_1.png";
import Nofitication from "../../assets/ReviewsTotal/notifications.png";
import Handsheke from "../../assets/ReviewsTotal/handshake.png";
import pepicons from "../../assets/ReviewsTotal/pepicons.png";

function TotalReviews() {
  return (
    <div
      class="bg-no-repeat bg-center bg-cover h-screen md:max-h-56 overflow-hidden ml-auto mr-auto"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4   max-w-[1536px] container ml-auto mr-auto">
        <div className="text-center ml-auto mr-auto content-center mt-16">
          <img
            className="w-16 h-16 rounded-full p-4 border-2 border-red-700 text-center justify-center ml-auto mr-auto"
            src={blood}
            alt="Logo"
          />
          <p className="text-red-700 font-bold">123 k</p>
          <p className=" text-xl font-bold">Total Donors</p>
        </div>

        
        <div className="text-center ml-auto mr-auto content-center mt-16">
          <img
            className="w-16 h-16 rounded-full p-4 border-2 border-red-700 text-center justify-center ml-auto mr-auto"
            src={Nofitication}
            alt="Logo"
          />
          <p className="text-red-700 font-bold">123 k</p>
          <p className=" text-xl font-bold">Blood Request</p>
        </div>



        <div className="text-center ml-auto mr-auto content-center mt-16">
          <img
            className="w-16 h-16 rounded-full p-4 border-2 border-red-700 text-center justify-center ml-auto mr-auto"
            src={Handsheke}
            alt="Logo"
          />
          <p className="text-red-700 font-bold">123 k</p>
          <p className=" text-xl font-bold"> Happy Recipient </p>
        </div>



        <div className="text-center ml-auto mr-auto content-center mt-16">
          <img
            className="w-16 h-16 rounded-full p-4 border-2 border-red-700 text-center justify-center ml-auto mr-auto"
            src={pepicons}
            alt="Logo"
          />
          <p className="text-red-700 font-bold">123 k</p>
          <p className=" text-xl font-bold"> Volunteers </p>
        </div>


      </div>
    </div>
  );
}

export default TotalReviews;
