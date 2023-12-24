import React, { useState } from "react";
import RegLayer from "../assets/regLayer.jpg";
import bloodIcon from "../assets/Group 44.svg";
import group from "../assets/Group.svg";
import navEarthLogo from "../assets/icons/navEarthLogo.png";
import DynamicLabel from "../components/InputFields/DynamicLabel";
import InputFields from "../components/InputFields/InputFields";
import { useFormik, Formik, Form } from "formik";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";

const Registration = () => {
  const initialDays = Array.from({ length: 30 }, (_, index) => index + 1);

  const initialValues = {
    fullName: "",
    lastName: "",
    phoneNumber: 0,
    dayID: initialDays[0],
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };

  // End Input Field
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const daysOptions = Array.from({ length: 31 }, (_, index) => ({
    label: (index + 1).toString(),
    value: index + 1,
  }));

  // For months
  const monthsOptions = Array.from({ length: 12 }, (_, index) => ({
    label: (index + 1).toString(),
    value: index + 1,
  }));

  // For years (adjust the length and value as needed)
  const yearsOptions = Array.from({ length: 10 }, (_, index) => ({
    label: (2023 + index).toString(),
    value: 2023 + index,
  }));

  const bloodGroupOptions = [
    { label: "A+", value: "A+" },
    { label: "A-", value: "A-" },
    { label: "B+", value: "B+" },
    { label: "B-", value: "B-" },
    { label: "AB+", value: "AB+" },
    { label: "AB-", value: "AB-" },
    { label: "O+", value: "O+" },
    { label: "O-", value: "O-" },
  ];

  const districtOptions = [
    { label: "District 1", value: "District 1" },
    { label: "District 2", value: "District 2" },
    { label: "District 3", value: "District 3" },
  ];

  const areaOptions = [
    { label: "Area 1", value: "Area 1" },
    { label: "Area 2", value: "Area 2" },
    { label: "Area 3", value: "Area 3" },
  ];

  const genderOptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // This is equivalent to history.goBack()
  };

  const handleLogin = () => {
    navigate("/login"); // Navigate to the "/login" path
    console.log("Cliekd Back")
  };

  return (
    <div className="bg-white">
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${RegLayer})`,
          backgroundSize: "cover",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="absolute w-full h-full bg-white opacity-95 px-48 pt-0">
          <div className="">
            {/* start */}
            <div className="absolute top-0 left-0 h-full px-48 pt-2 flex w-full">
              <div className="flex w-full h-20">
                <div className="flex justify-center">
                  {" "}
                  <div className="w-10 h-16 flex justify-center">
                    {" "}
                    <img
                      src={bloodIcon}
                      alt="Icon"
                      className="w-auto h-full mr-2"
                    />
                  </div>
                  <div className="">
                    <p className="text-brandPrimary text-xl font-semibold mt-2 ml-1">
                      Blood <br /> Donation
                    </p>
                  </div>
                </div>

                <div className="flex justify-end w-full items-center">
                  <img
                    src={navEarthLogo}
                    alt="logo"
                    className="w-6 h-6 inline-block items-center rounded-full"
                  />
                </div>
              </div>
            </div>
            {/* end */}

            {/* start upload img */}
            <div className="flex justify-center mt-8">
              <div className="flex flex-col">
                <div className="w-24 h-24 overflow-hidden">
                  <label htmlFor="imageInput">
                    <div className="w-full h-full object-cover cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"   onClick={handleImageChange}>
                      {selectedImage ? (
                        <img
                          src={selectedImage}
                          alt="upload img"
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <img
                          src={group}
                          alt="Rounded Icon"
                          className="w-full h-full object-cover rounded-full "
                        />
                      )}
                    </div>
                  </label>

                  <input
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
                <div
                  className="text-[#44444480] mt-2 text-center"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  Upload Image
                </div>
              </div>
            </div>
            {/* end upload img */}

            <form onSubmit={formik.handleSubmit}>
              <div className="w-full mt-4">
                <div className="grid grid-cols-12 gap-4 h-auto">
                  <div className="col-span-2 flex items-center">
                    <DynamicLabel label="Full Name" isRequired={true} />
                  </div>
                  <div className="col-span-3 zindexnav">
                    <InputFields
                      id="fullName"
                      type="text"
                      placeholder="Full name"
                      onChange={formik.handleChange}
                      className="border border-gray-400 rounded-md p-2 w-full"
                    />
                  </div>
                  <div className="col-span-2 zindexnav">
                    <InputFields
                      id="lastName"
                      type="text"
                      placeholder="Last name"
                      onChange={formik.handleChange}
                      className="border border-gray-400 rounded-md p-2 w-full"
                    />
                  </div>
                  <div className="col-span-2 flex items-center">
                    <DynamicLabel label="Phone Number" isRequired={true} />
                  </div>
                  <div className="col-span-3 zindexnav">
                    <InputFields
                      id="phoneNumber"
                      type="text"
                      placeholder="Enter Phone Number"
                      onChange={(e) =>
                        formik.setFieldValue("phoneNumber", e.value)
                      }
                      className="border border-gray-400 rounded-md p-2 w-full"
                    />
                  </div>
                </div>
                {/* END 1 */}
                <div className="grid grid-cols-12 gap-4 h-auto mt-2">
                  <div className="col-span-2 flex items-center">
                    <DynamicLabel label="Date of Birth" isRequired={true} />
                  </div>
                  <div className="col-span-5 zindexnav">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1">
                        <InputFields
                          type="dropdown"
                          placeholder="Day"
                          options={daysOptions}
                          onChange={formik.handleChange}
                          className="border border-gray-400 rounded-md p-2 w-full zindexnav"
                          showIcon={true}
                        />
                      </div>
                      <div className="col-span-1">
                        <InputFields
                          type="month"
                          placeholder="Month"
                          options={monthsOptions}
                          onChange={formik.handleChange}
                          className="border border-gray-400 rounded-md p-2 w-full zindexnav"
                          showIcon={true}
                          iconColor="black"
                        />
                      </div>
                      <div className="col-span-1">
                        <InputFields
                          type="month"
                          placeholder="Year"
                          options={yearsOptions}
                          onChange={formik.handleChange}
                          className="border border-gray-400 rounded-md p-2 w-full zindexnav"
                          showIcon={true}
                          iconColor="black"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2 flex items-center">
                    <DynamicLabel label="Email Address" isRequired={false} />
                  </div>
                  <div className="col-span-3 zindexnav">
                    <InputFields
                      id="email"
                      type="text"
                      placeholder="Enter Email Address"
                      onChange={(e) =>
                        formik.setFieldValue("phoneNumber", e.value)
                      }
                      className="border border-gray-400 rounded-md p-2 w-full"
                    />
                  </div>
                </div>
                {/* end 2 */}
                <div className="grid grid-cols-12 gap-4 h-auto mt-2">
                  <div className="col-span-2 flex items-center">
                    <DynamicLabel label="Blood Group" isRequired={true} />
                  </div>
                  <div className="col-span-5 zindexnav">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1">
                        <InputFields
                          type="dropdown"
                          placeholder="Select"
                          options={bloodGroupOptions}
                          onChange={formik.handleChange}
                          className="border border-gray-400 rounded-md p-2 w-full zindexnav"
                          showIcon={true}
                          iconColor="black"
                        />
                      </div>
                      <div className="col-span-1"></div>
                      <div className="col-span-1"></div>
                    </div>
                  </div>

                  <div className="col-span-2 flex items-center">
                    <DynamicLabel label="NID" isRequired={false} />
                  </div>
                  <div className="col-span-3 zindexnav">
                    <InputFields
                      id="email"
                      type="text"
                      placeholder="Enter NID Number"
                      onChange={(e) =>
                        formik.setFieldValue("phoneNumber", e.value)
                      }
                      className="border border-gray-400 rounded-md p-2 w-full"
                    />
                  </div>
                </div>
                {/* end 3 */}
                <div className="grid grid-cols-12 gap-4 h-auto mt-2">
                  <div className="col-span-2 flex items-start">
                    <DynamicLabel label="Last Donate Date" isRequired={true} />
                  </div>
                  <div className="col-span-5 zindexnav">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1">
                        <InputFields
                          type="dropdown"
                          placeholder="Day"
                          options={daysOptions}
                          onChange={formik.handleChange}
                          className="border border-gray-400 rounded-md p-2 w-full zindexnav"
                          showIcon={true}
                        />
                      </div>
                      <div className="col-span-1">
                        <InputFields
                          type="month"
                          placeholder="Month"
                          options={monthsOptions}
                          onChange={formik.handleChange}
                          className="border border-gray-400 rounded-md p-2 w-full zindexnav"
                          showIcon={true}
                          iconColor="black"
                        />
                      </div>
                      <div className="col-span-1">
                        <InputFields
                          type="month"
                          placeholder="Year"
                          options={yearsOptions}
                          onChange={formik.handleChange}
                          className="border border-gray-400 rounded-md p-2 w-full zindexnav"
                          showIcon={true}
                          iconColor="black"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2 flex">
                    <DynamicLabel label="Address" isRequired={false} />
                  </div>
                  <div className="col-span-3 zindexnav">
                    <InputFields
                      type="textarea"
                      placeholder="Enter Address"
                      onChange={formik.handleChange}
                      className="border border-gray-400 rounded-md p-2 w-full"
                      style={{
                        minHeight: "80px",
                        maxHeight: "80px",
                        resize: "none",
                      }}
                    />
                  </div>
                </div>
                {/* end 4*/}
                <div className="grid grid-cols-12 gap-4 h-auto mt-2">
                  <div className="col-span-2 flex items-start">
                    <DynamicLabel label="Height & Weight" isRequired={true} />
                  </div>
                  <div className="col-span-5 zindexnav">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1">
                        <InputFields
                          id="feet"
                          type="text"
                          placeholder="Feet"
                          onChange={formik.handleChange}
                          className="border border-gray-400 rounded-md p-2 w-full"
                        />
                      </div>
                      <div className="col-span-1">
                        <InputFields
                          id="inch"
                          type="text"
                          placeholder="Inch"
                          onChange={formik.handleChange}
                          className="border border-gray-400 rounded-md p-2 w-full"
                        />
                      </div>
                      <div className="col-span-1"></div>
                    </div>
                  </div>

                  <div className="col-span-2 flex"></div>
                  <div className="col-span-3 zindexnav">
                    <div className="grid grid-cols-4 gap-3">
                      <div className="col-span-2">
                        <InputFields
                          type="dropdown"
                          placeholder="Select District"
                          options={districtOptions}
                          onChange={formik.handleChange}
                          className="border border-gray-400 rounded-md p-2 w-full"
                        />
                      </div>
                      <div className="col-span-2">
                        <InputFields
                          type="dropdown"
                          placeholder="Select Area"
                          options={areaOptions}
                          onChange={formik.handleChange}
                          className="border border-gray-400 rounded-md p-2 w-full"
                          disabled
                        />
                      </div>
                      <div className="col-span-1"></div>
                    </div>
                  </div>
                </div>
                {/* end 5 */}
                <div className="grid grid-cols-12 gap-4 h-auto mt-2">
                  <div className="col-span-2 flex items-center">
                    <DynamicLabel label="Age" isRequired={true} />
                  </div>
                  <div className="col-span-5 zindexnav">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1">
                        <InputFields
                          id="year"
                          type="text"
                          placeholder="Years"
                          onChange={formik.handleChange}
                          className="border border-gray-400 rounded-md p-2 w-full"
                        />
                      </div>
                      <div className="col-span-1"></div>
                      <div className="col-span-1"></div>
                    </div>
                  </div>

                  <div className="col-span-2 flex"></div>
                  <div className="col-span-3 zindexnav">
                    <div className="grid grid-cols-4 gap-3">
                      <div className="col-span-2"></div>
                      <div className="col-span-2"></div>
                      <div className="col-span-1"></div>
                    </div>
                  </div>
                </div>
                {/* end 6 */}
                <div className="grid grid-cols-12 gap-4 h-auto mt-2">
                  <div className="col-span-2 flex items-center">
                    <DynamicLabel label="Gender" isRequired={true} />
                  </div>
                  <div className="col-span-5 zindexnav">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2">
                        <InputFields
                          type="dropdown"
                          placeholder="Select"
                          options={genderOptions}
                          onChange={formik.handleChange}
                          className="border border-gray-400 rounded-md p-2 w-full"
                        />
                      </div>
                      <div className="col-span-1"></div>
                    </div>
                  </div>

                  <div className="col-span-2 flex"></div>
                  <div className="col-span-3 zindexnav">
                    <div className="grid grid-cols-4 gap-3">
                      <div className="col-span-2"></div>
                      <div className="col-span-2"></div>
                      <div className="col-span-1"></div>
                    </div>
                  </div>
                </div>
                {/* end 7 */}
                <div className="grid grid-cols-12 gap-4 h-auto mt-2">
                  <div className="col-span-2 flex items-center">
                    <DynamicLabel label="Any Disease" isRequired={false} />
                  </div>
                  <div className="col-span-5 zindexnav">
                    <InputFields
                      type="dropdown"
                      placeholder="Select"
                      options={genderOptions}
                      onChange={formik.handleChange}
                      className="border border-gray-400 rounded-md p-2 w-full"
                    />
                  </div>

                  <div className="col-span-2 flex"></div>
                  <div className="col-span-3 zindexnav">
                    <div className="grid grid-cols-4 gap-3">
                      <div className="col-span-2"></div>
                      <div className="col-span-2"></div>
                      <div className="col-span-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex-grow text-center zindexnav">
                  {" "}
                  {/* New container for center alignment */}
                  <button
                    type="submit"
                    className="bg-brandPrimary text-white py-2 px-4 rounded-md shadow-bottom-right"
                  >
                    Register
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleLogin}
                  className="text-brandPrimary py-2 px-4 rounded-md border border-brandPrimary hover:bg-brandPrimary hover:text-white cursor-pointer zindexnav"
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
