import React from "react";
import loginImg from "../assets/loginImg.png";
import bloodIcon from "../assets/Group 44.svg";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
      <div
        className="hidden lg:flex lg:w-1/2 bg-cover relative"
        style={{ backgroundImage: `url(${loginImg})`, backgroundSize: "cover" }}
      >
        <div className="absolute top-4 left-4 flex items-center">
          <img src={bloodIcon} alt="Icon" className="w-6 h-6 mr-2" />
          <p className="text-brandPrimary font-semibold">Blood Donation</p>
        </div>
      </div>
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
            Blood Donation
          </h1>
        </div>
        <div className="mb-1  flex justify-center">
          <h1 className="text-xl lg:text-2xl font-semibold text-black mb-2 lg:mb-4">
            Log-In
          </h1>
        </div>
        <div className="flex justify-center">
          <form className="space-y-4 w-full max-w-md  ">
            <div className="flex flex-col">
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="border-b-2 border-r-2 border-gray-200 p-2 focus:outline-none rounded focus:shadow-outline-brandPrimary"
              />
            </div>
            <div className="flex flex-col mt-4">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="border-b-2 border-r-2 border-gray-200 p-2 focus:outline-none rounded focus:shadow-outline-brandPrimary"
              />
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
            <div className="flex justify-center">
              <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-transparent hover:text-brandPrimary border hover:border-brandPrimary hover:font-semibold">
                Login
              </button>
            </div>
            <div className="text-brandPrimary text-center mt-2">
              Don't have an account?{" "}
              <a
                href="/registration"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/registration");
                }}
                className="underline hover:blue-400"
              >
                Sign up from here
              </a>
            </div>
          </form>
        </div>
      </div>
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
