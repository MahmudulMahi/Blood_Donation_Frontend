import React from "react";
import loginImg from "../assets/loginImg.png";
import bloodIcon from "../assets/Group 44.svg";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
      {/* Left Part with Image (Hidden on Small Screens) */}
      <div
        className="hidden lg:flex lg:w-1/2 bg-cover relative"
        style={{ backgroundImage: `url(${loginImg})`, backgroundSize: "cover" }}
      >
        {/* Icon and Project Name */}
        <div className="absolute top-4 left-4 flex items-center">
          <img src={bloodIcon} alt="Icon" className="w-6 h-6 mr-2" />
          <p className="text-brandPrimary font-semibold">Blood Donation</p>
        </div>
      </div>

      {/* Right Part with Login Form */}
      <div className="lg:w-1/2 p-4 lg:p-10 flex flex-col justify-center">
        <div className="mb-1 flex justify-center ">
          {" "}
          <img src={bloodIcon} alt="Icon" className="w-6 h-6 mr-2" />
        </div>

        <div className="flex justify-center">
          <h1 className="text-xl lg:text-2xl font-semibold text-red-400">
            Welcome To
          </h1>
        </div>
        <div className="mb-1 flex justify-center">
          <h1 className="text-xl lg:text-2xl font-semibold text-brandPrimary mb-2 lg:mb-4">
            Bolood Donation
          </h1>
        </div>
        <div className="mb-1  flex justify-center">
          <h1 className="text-xl lg:text-2xl font-semibold text-black mb-2 lg:mb-4">
            Login
          </h1>
        </div>
        <div className="flex justify-center">
        <form className="space-y-4 w-full max-w-md  ">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-500 mb-1">
              Username
            </label>
            <input type="text" id="username" className="border-b-2 border-l-2 border-gray-300 p-2 focus:outline-none focus:shadow-outline" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-500 mb-1">
              Password
            </label>
            <input type="password" id="password" className="border-b-2 border-l-2 border-gray-300 p-2 focus:outline-none focus:shadow-outline" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remindMe" className="mr-2" />
              <label htmlFor="remindMe" className="text-gray-500">
                Remind me
              </label>
            </div>
            <a href="#" className="text-red-500">
              Forget Password?
            </a>
          </div>

          <button className="bg-red-500 text-white py-2 px-4 hover:bg-opacity-75 transition-all duration-300">
            Login
          </button>
        </form>
        </div>
        


      </div>

      {/* Left Part with Image (Visible on Small Screens) */}
      <div
        className="lg:hidden w-full bg-cover"
        style={{
          backgroundImage: 'url("your-image-url.jpg")',
          height: "200px",
        }}
      ></div>
    </div>
  );
};

export default Login;
