/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import bloodImg from "../../assets/blood.png";
import scan from "../../assets/scan.jpeg";
import scan2 from "../../assets/scan-2.jpeg";

export default function MobileApp() {
  return (
    <div className="bg-red-100 shadow-lg rounded-md overflow-hidden sm:h-auto md:h-auto lg:h-auto my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:mx-12">
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-1 px-12 py-12">
          <img
            src={scan}
            alt="Left Image"
            className="rounded-full border-2 border-brandPrimary w-72 h-72"
          />
        </div>
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-1 text-center my-8 mx-6 sm:my-0 md:my-0 lg:my-0 pt-8">
          <h1 className="text-xl font-bold text-brandPrimary text-left pl-8 mt-8">
            Download Mobile App
          </h1>
          <ul className="text-black mt-5 list-disc pl-4 flex flex-col ul-li-no-button">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="20"
                viewBox="0 0 15 25"
                fill="none"
              >
                <path
                  d="M12.0404 8.24752C9.66067 4.91899 8.60866 2.08814 8.00617 0.399099C7.81541 -0.133033 7.1827 -0.133033 6.99383 0.399099C6.39134 2.08814 5.33933 4.91899 2.95958 8.24752C1.4694 10.333 0 13.3857 0 16.3932C0 21.525 3.24666 25 7.5 25C11.7533 25 15 21.5228 15 16.3932C15 13.2672 13.5306 10.333 12.0404 8.24752Z"
                  fill="#E5322E"
                />
                <path
                  d="M9.57167 15.912C10.771 13.3095 10.601 10.763 11.5491 11.2219C12.8372 11.8488 14.2632 15.0696 13.7287 17.9888C13.3472 20.07 12.1157 21.3303 10.5462 20.7292C9.27892 20.2445 8.49134 18.256 9.57167 15.912Z"
                  fill="#FF6050"
                />
              </svg>
              <span className="ml-3">Track Your Blood Donations</span>
            </li>
            <li className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="20"
                viewBox="0 0 15 25"
                fill="none"
              >
                <path
                  d="M12.0404 8.24752C9.66067 4.91899 8.60866 2.08814 8.00617 0.399099C7.81541 -0.133033 7.1827 -0.133033 6.99383 0.399099C6.39134 2.08814 5.33933 4.91899 2.95958 8.24752C1.4694 10.333 0 13.3857 0 16.3932C0 21.525 3.24666 25 7.5 25C11.7533 25 15 21.5228 15 16.3932C15 13.2672 13.5306 10.333 12.0404 8.24752Z"
                  fill="#E5322E"
                />
                <path
                  d="M9.57167 15.912C10.771 13.3095 10.601 10.763 11.5491 11.2219C12.8372 11.8488 14.2632 15.0696 13.7287 17.9888C13.3472 20.07 12.1157 21.3303 10.5462 20.7292C9.27892 20.2445 8.49134 18.256 9.57167 15.912Z"
                  fill="#FF6050"
                />
              </svg>
              <span className="ml-3">Stay Updated on Special Promotions</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="20"
                viewBox="0 0 15 25"
                fill="none"
              >
                <path
                  d="M12.0404 8.24752C9.66067 4.91899 8.60866 2.08814 8.00617 0.399099C7.81541 -0.133033 7.1827 -0.133033 6.99383 0.399099C6.39134 2.08814 5.33933 4.91899 2.95958 8.24752C1.4694 10.333 0 13.3857 0 16.3932C0 21.525 3.24666 25 7.5 25C11.7533 25 15 21.5228 15 16.3932C15 13.2672 13.5306 10.333 12.0404 8.24752Z"
                  fill="#E5322E"
                />
                <path
                  d="M9.57167 15.912C10.771 13.3095 10.601 10.763 11.5491 11.2219C12.8372 11.8488 14.2632 15.0696 13.7287 17.9888C13.3472 20.07 12.1157 21.3303 10.5462 20.7292C9.27892 20.2445 8.49134 18.256 9.57167 15.912Z"
                  fill="#FF6050"
                />
              </svg>
              <span className="ml-3">Find and Map Local Blood Drives</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="20"
                viewBox="0 0 15 25"
                fill="none"
              >
                <path
                  d="M12.0404 8.24752C9.66067 4.91899 8.60866 2.08814 8.00617 0.399099C7.81541 -0.133033 7.1827 -0.133033 6.99383 0.399099C6.39134 2.08814 5.33933 4.91899 2.95958 8.24752C1.4694 10.333 0 13.3857 0 16.3932C0 21.525 3.24666 25 7.5 25C11.7533 25 15 21.5228 15 16.3932C15 13.2672 13.5306 10.333 12.0404 8.24752Z"
                  fill="#E5322E"
                />
                <path
                  d="M9.57167 15.912C10.771 13.3095 10.601 10.763 11.5491 11.2219C12.8372 11.8488 14.2632 15.0696 13.7287 17.9888C13.3472 20.07 12.1157 21.3303 10.5462 20.7292C9.27892 20.2445 8.49134 18.256 9.57167 15.912Z"
                  fill="#FF6050"
                />
              </svg>
              <span className="ml-3">Easy Appointment Scheduling</span>
            </li>

            <li> <div className="w-full bg-red-600 px-8 mt-4 rounded-xl">
            <button className=" text-white py-2 rounded-full">
              Download Mobile App
            </button>
          </div></li>
          </ul>

         
        </div>
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-1 px-12 py-12">
          <img
            src={scan2} // Replace with the actual image source
            alt="Left Image"
            className="rounded-full border-2 border-brandPrimary w-72 h-72"
          />
        </div>
      </div>
    </div>
  );
}
