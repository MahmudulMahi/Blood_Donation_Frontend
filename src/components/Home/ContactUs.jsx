import React, { useState } from "react";
import about from "../../assets/ab.jpeg";
import axios from "axios";
import Swal from "sweetalert2";

export default function ContactUs() {

  // const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading)

  const handleContact = e => {

    e.preventDefault()
    const form = e.target

    const fullName = form.fullName.value
    const email = form.email.value
    const subject = form.subject.value
    const message = form.message.value

    if (!fullName || !email || !subject || !message) {
      alert('Please fill in all fields');
      return; // Stop further execution

    }
    else {
      setIsLoading(true);
      const contactSend = {
        name: fullName,
        email: email,
        subject: subject,
        message: message
      }
      console.log(fullName, email, subject, message)
      axios.post(`https://bloodbackend.visionarytechsolution.com/home/contact_us`, contactSend)
        .then(res => {
          Swal.fire({
            position: "top-middle",
            icon: "success",
            title: "Data save successfully",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset();
        })
        .catch(error => {
          console.log("error", error)

        })
        .finally(() => {
          setIsLoading(false); 
        });
    }
   

  }
  return (
    <div id="/contact-us" tabIndex="-1">
      <div className="grid grid-cols-2 lg:mr-40 md:mr-0 mr-0 lg:ml-20 md:ml-0 ml-0 rounded-md bg-transparent lg:-mt-[15px] md:mt-12 mt-8 lg:p-20 md:p-20 p-12 pt-0">
        {/* First Card */}
        <div className="bg-white lg:ml-6 md:ml-0 ml-0 mt-2 lg:mb-0 md:mb-0 mb-8 rounded lg:col-span-1 md:col-span-1 col-span-2">
          <div className="lg:ml-24 md:ml-0 ml-0">
            <div>
              <button className="bg-brandPrimary text-white lg:px-6 md:px-4 px-6 lg:py-4 md:py-2 py-4 rounded-md ml-2 lg:mt-0 md:mt-0 mt-0 font-bold shadow-md">
                Contact Us
              </button>
            </div>
            <p className="text-gray-600 mb-2 mt-2 text-2xl font-bold ml-2">
              You can <span className="text-brandPrimary">Connect</span> with us
            </p>
            <p className="text-gray-600 mb-4 mt-2 text-2xl font-bold ml-2">
              When Need <span className="text-brandPrimary">Help</span>!
            </p>
          </div>
          <div className="lg:border-l-[45px] md:border-l-[30px] border-l-[15px] lg:border-t-[45px] md:border-t-[30px] border-t-[15px] lg:ml-28 md:ml-0 ml-0 rounded-tl-xl rounded-bl-xl lg:rounded-br-none md:rounded-br-none rounded-br-xl border-brandPrimary bg-brandPrimary lg:mt-20 md:mt-20 mt-8 shadow-bottom flex justify-end ">
            {" "}
            <img
              src={about}
              alt="Contact Us"
              className="w-auto h-auto rounded-tl-xl rounded-bl-xl lg:rounded-br-none md:rounded-br-none rounded-br-xl"
            />
          </div>
        </div>

        {/* Second Card */}
        <div className="mb-0 rounded-md rounded-bl-none shadow-right-bottom-two lg:col-span-1 md:col-span-1 col-span-2 bg-[#E11B2266] ">
          <div className="bg-white p-6 pb-2 mb-0 rounded-md">
            <form onSubmit={handleContact} className="lg:ml-8 md:ml-8 ml-0 lg:mr-8 md:mr-8 mr-0">
              <div className="mb-6 ml-2 mr-2">
                <input
                  type="text"
                  id="fullName"
                  className="w-full lg:px-6 md:px-2 px-2 lg:py-6 md:py-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-brandPrimary shadow-bottom-right"
                  placeholder="Enter Full Name"
                />
              </div>
              {/* ---------- */}
              {isLoading && (
                <button disabled type="button" className="z-50 py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                </svg>
                Loading...
                </button>
              )}
              {/* ------------ */}
              <div className="mb-6 ml-2 mr-2">
                <input
                  type="email"
                  id="email"
                  className="w-full lg:px-6 md:px-2 px-2 lg:py-6 md:py-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-brandPrimary shadow-bottom-right"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-8 ml-2 mr-2">
                <input
                  type="text"
                  id="subject"
                  className="w-full lg:px-6 md:px-2 px-2 lg:py-6 md:py-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-brandPrimary shadow-bottom-right"
                  placeholder="Enter Subject"
                />
              </div>
              <div className="mb-2 ml-2 mr-2">
                <textarea
                  id="message"
                  rows="4"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brandPrimary shadow-bottom-right resize-none"
                  placeholder="Write Message"
                ></textarea>
              </div>

              <div className="flex justify-center mb-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-brandPrimary border-brandPrimary  text-white px-4 py-2 rounded-md "
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
