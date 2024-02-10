import React, { useEffect, useState } from "react";
import RegLayer from "../assets/regLayer.jpg";
import bloodIcon from "../assets/Group 44.svg";
import group from "../assets/Group.svg";
import navEarthLogo from "../assets/icons/navEarthLogo.png";
import DynamicLabel from "../components/InputFields/DynamicLabel";
import InputFields from "../components/InputFields/InputFields";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Registration = () => {
  const currentYear = new Date().getFullYear();
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  // const [error,setError]=useState('')

  const [disease, setDisease] = useState([])
  useEffect(() => {
    axios.get(`https://bloodbackend.visionarytechsolution.com/auth/all_disease`)
      .then(res => {
        setDisease(res.data)
        console.log(res.data)
      })
  }, [])



  const initialDays = Array.from({ length: 30 }, (_, index) => index + 1);
  const initialLastDays = Array.from({ length: 30 }, (_, index) => index + 1);
  const initialMonth = Array.from({ length: 12 }, (_, index) => index + 1);
  const initialLastMonth = Array.from({ length: 12 }, (_, index) => index + 1);
  const initialYear = Array.from({ length: 50 }, (_, index) => index + 1);
  const initialLastYear = Array.from({ length: 2023 }, (_, index) => index + 1);



  const formik = useFormik({
    initialValues: {
      fullName: "",
      lastName: "",
      phoneNumber: "",
      dayID: initialDays[0],
      email: "",
      month: initialMonth[0],
      year: initialYear[0],
      bloodgroup: "",
      nid: "",
      lastday: initialLastDays[0],
      lastmonth: initialLastMonth[0],
      lastyear: initialLastYear[0],
      address: "",
      feet: "",
      inch: "",
      age: "",
      disease: "",
      password: "",
      weight: "",
      gender: ""

    },

    onSubmit: (values) => {
      // reset error
      // setError('')
      console.log("values", values)
      const isEmptyField = Object.values(values).some(value => value === "");

      if (isEmptyField) {
        alert("Please fill in all fields before submitting.");
        formik.setErrors({});
        return;

      }
      else{
    
      const dataToSend = {


        first_name: values.fullName,
        last_name: values.lastName,
        password: values.password,
        email: values.email,
        dob: `${values.year}-${values.month}-${values.dayID}`,
        blood_group: values.bloodgroup,
        last_donate_date: `${values.lastyear}-${values.lastmonth}-${values.lastday}`,
        height: values.feet + values.inch,
        age: values.age,
        phone_number: values.phoneNumber,
        nid: values.nid,
        address: values.address,
        any_disease: values.disease,
        weight: values.weight,
        gender: values.gender


      };
    
  

      axios.post(`https://bloodbackend.visionarytechsolution.com/auth/register`, dataToSend, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          console.log('Data successfully posted to the server:', response.data);
         
          if(response.data.id){
            Swal.fire({
              position: "top-middle",
              icon: "success",
              title: "Registration Successfully",
              showConfirmButton: false,
              timer: 1500
            });
          }
          formik.resetForm();
         
        })
        .catch(error => {
          console.log(error)
          // Swal.fire({
          //   icon: "error",
          //   title: "Oops...",
          //   text: "Something went wrong!",
          //   footer: '<a href="#">Why do I have this issue?</a>'
          // });
          // setError(error.message)
        });

      }
    }

  });
  // setBirthDate(formik.values.dob);
  // const today = new Date();
  // const dob = new Date(birthDate);
  // const diff = today - dob;
  // const ageInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  // setAge(ageInYears);


  const handleDayChange = (selectedDay) => {
    formik.handleChange('dayID')(selectedDay);
    console.log('Selected Day:', selectedDay);
  };
  const handleLastDayChange = (selectedLastDay) => {
    formik.handleChange('lastday')(selectedLastDay);
    console.log('Selected Day:', selectedLastDay);
  };


  const handleMonthChange = (selectedMonth) => {
    formik.handleChange('month')(selectedMonth);
    console.log('Selected Month:', selectedMonth);
  };
  const handleLastMonthChange = (selectedLastMonth) => {
    formik.handleChange('lastmonth')(selectedLastMonth);
    console.log('Selected Month:', selectedLastMonth);
  };


  const handleYearChange = (selectedYear) => {
    formik.handleChange('year')(selectedYear);
    console.log('Selected Year:', selectedYear);
  };
  const handleLastYearChange = (selectedLastYear) => {
    formik.handleChange('lastyear')(selectedLastYear);
    console.log('Selected Year:', selectedLastYear);
  };
  const handleBloodChange = (selectedBlood) => {
    formik.handleChange('bloodgroup')(selectedBlood);
    console.log('Selected blood:', selectedBlood)

  };
  const handleDistrictChange = (selectedDistrict) => {
    formik.handleChange('district')(selectedDistrict);
    console.log('Selected Year:', selectedDistrict)

  };
  const handleGenderChange = (selectedGender) => {
    formik.handleChange('gender')(selectedGender);
    console.log('Selected Year:', selectedGender)

  };
  const handleDiseaseChange = (selectedDisease) => {
    formik.handleChange('disease')(selectedDisease);
    console.log('Selected disease:', selectedDisease)

  };



  const [selectedImageFile, setSelectedImageFile] = useState(null);






  const [selectedImage, setSelectedImage] = useState(null);




  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    setSelectedImageFile(file)
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };


  const daysOptions = Array.from({ length: 31 }, (_, index) => ({
    label: (index + 1).toString(),
    value: index + 1,
  }));

  // const daysLastOptions = Array.from({ length: 31 }, (_, index) => ({
  //   label: (index + 1).toString(),
  //   value: index + 1,
  // }));
  const daysLastOptions = Array.from({ length: 31 }, (_, index) => ({
    label: (index + 1).toString(),
    value: index + 1,
  }));




  const monthsOptions = Array.from({ length: 12 }, (_, index) => ({
    label: (index + 1).toString(),
    value: index + 1,
  }));
  const monthsLastOptions = Array.from({ length: 12 }, (_, index) => ({
    label: (index + 1).toString(),
    value: index + 1,
  }));



  const yearsOptions = Array.from({ length: currentYear - 1970 + 1 }, (_, index) => ({
    label: (1970 + index).toString(),
    value: 1970 + index,
  }));
  const yearsLastOptions = Array.from({ length: currentYear - 2023 + 1 }, (_, index) => ({
    label: (2023 + index).toString(),
    value: 2023 + index,
  }));


  const bloodGroupOptions = [
    { label: "null", value: "null" },
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
    { label: "Dhaka", value: "Dhaka" },
    { label: "Rajshahi", value: "Rajshahi" },
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


  const diseaseOptions = disease.map(aDisease => ({ key: aDisease.id, label: aDisease.name, value: aDisease.id }));






  const navigate = useNavigate();


  const handleBack = () => {
    navigate(-1); // This is equivalent to history.goBack()
  };


  const handleLogin = () => {
    navigate("/login"); // Navigate to the "/login" path
    console.log("Cliekd Back");
  };




  return (
    <div className="">
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${RegLayer})`,
          backgroundSize: "cover",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="absolute w-full h-full bg-white opacity-95 px-4 pt-0 sm:px-8 md:px-16 lg:px-32 xl:px-48">
          <div className="relative">
            {/* Header */}
            <div className="absolute top-0 left-0 h-full px-4 sm:px-8 w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center">
                  <div className="w-10 h-16 flex justify-center">
                    <img
                      src={bloodIcon}
                      alt="Icon"
                      className="w-auto h-full mr-2"
                    />
                  </div>
                  <div>
                    <p className="text-brandPrimary text-xl font-semibold mt-2 ml-1">
                      Blood <br /> Donation
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <img
                    src={navEarthLogo}
                    alt="logo"
                    className="w-6 h-6 inline-block items-center rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Upload Image */}
            <div className="flex justify-center mt-8">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 overflow-hidden">
                  <label htmlFor="imageInput">
                    <div
                      className="w-full h-full object-cover cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
                    // onClick={handleImageChange}
                    >
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
                          className="w-full h-full object-cover rounded-full"
                        />
                      )}
                    </div>
                  </label>

                  <input
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    className="hidden"
                  // onChange={handleImageChange}
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

            <form onSubmit={formik.handleSubmit}>
              {/* {formik.errors && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          Please fill out all fields before submitting.
        </div>
          )} */}
          {/* {
            error && <p className="text-red-600">{error}</p>
          } */}
           {age !== null && (
        <p>Your age is: {age} years</p>
      )}
              <div className="w-full mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 h-auto">
                  <div className="col-span-2 flex items-center">
                    <DynamicLabel label="Full Name" isRequired={true} />
                  </div>
                  <div className="col-span-3 zindexnav">
                    <InputFields
                      id="fullName"
                      type="text"
                      placeholder="First Name"
                      onChange={formik.handleChange}
                      value={formik.values.fullName}
                      className="border border-gray-400 rounded-md p-2 w-full"
                    />
                  </div>
                  <div className="col-span-2 zindexnav">
                    <InputFields
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                      className="border border-gray-400 rounded-md p-2 w-full"
                    />
                  </div>
                  {/* __________ */}
                  {/* <div className="col-span-2 zindexnav">
                      <InputFields
                        id="password"
                        type="text"
                        placeholder="Last name"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className="border border-gray-400 rounded-md p-2 w-full"
                      />
                    </div> */}
                  <div className="col-span-2 flex items-center">
                    <DynamicLabel label="Phone Number" isRequired={true} />
                  </div>
                  <div className="col-span-3 zindexnav">
                    <InputFields
                      id="phoneNumber"
                      type="text"
                      placeholder="Enter Phone Number"
                      onChange={formik.handleChange}
                      value={formik.values.phoneNumber}
                      className="border border-gray-400 rounded-md p-2 w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 h-auto mt-2">
                  <div className="col-span-2 flex items-center">
                    <DynamicLabel label="Date of Birth" isRequired={true} />
                  </div>
                  <div className="col-span-5 zindexnav">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1">
                        <InputFields
                          id="dayID"
                          type="dropdown"
                          placeholder="Day"
                          options={daysOptions}
                          onChange={handleDayChange}
                          value={formik.values.dayID}
                          className="border border-gray-400 rounded-md p-2 w-full zindexnav"
                          showIcon={true}

                        />
                        <p>Day</p>
                      </div>
                      <div className="col-span-1">
                        <InputFields
                          type="dropdown"
                          id="month"
                          placeholder="Month"
                          options={monthsOptions}
                          onChange={handleMonthChange}
                          value={formik.values.month}
                          name='month'
                          className="border border-gray-400 rounded-md p-2 w-full zindexnav"
                          showIcon={true}
                          iconColor="black"
                        />
                        <p>Month</p>
                      </div>
                      <div className="col-span-1">
                        <InputFields
                          id="year"
                          type="dropdown"
                          placeholder="Year"
                          options={yearsOptions}
                          onChange={handleYearChange}
                          value={formik.values.year}
                          name='year'
                          className="border border-gray-400 rounded-md p-2 w-full zindexnav"
                          showIcon={true}
                          iconColor="black"
                        />
                        <p>year</p>
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
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      name='email'
                      className="border border-gray-400 rounded-md p-2 w-full"
                    />
                  </div>


                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 h-auto mt-2">
                  <div className="col-span-2 flex items-center">
                    <DynamicLabel label="Blood Group" isRequired={true} />
                  </div>
                  <div className="col-span-5 zindexnav">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1">
                        <InputFields
                          id="bloodgroup"
                          type="dropdown"
                          placeholder="Select"
                          options={bloodGroupOptions}
                          onChange={handleBloodChange}
                          value={formik.values.bloodgroup}
                          name='bloodgroup'
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
                    <DynamicLabel label=" password" isRequired={false} />
                  </div>
                  <div className="col-span-3 zindexnav">
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      name='password'
                      className="border border-gray-400 rounded-md p-2 w-full"
                    />
                  </div>
                  {/* <div className="col-span-2 flex items-center">
                      <DynamicLabel label="NID" isRequired={false} />
                    </div>
                    <div className="col-span-3 zindexnav">
                      <InputFields
                        id="nid"
                        type="text"
                        placeholder="Enter NID Number"
                        onChange={formik.handleChange}
                        value={formik.values.nid}
                        name='nid'
                        className="border border-gray-400 rounded-md p-2 w-full"
                      />
                    </div> */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 h-auto mt-2">
                  <div className="col-span-2 flex items-start">
                    <DynamicLabel label="Last Donate Date" isRequired={true} />
                  </div>
                  <div className="col-span-5 zindexnav">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1">
                        <InputFields
                          id="lastday"
                          type="dropdown"
                          placeholder="Day"
                          options={daysLastOptions}
                          onChange={handleLastDayChange}
                          value={formik.values.lastday}
                          name='day'
                          className="border border-gray-400 rounded-md p-2 w-full zindexnav"
                          showIcon={true}
                        />
                        <p>Day</p>
                      </div>
                      <div className="col-span-1">
                        <InputFields
                          type="dropdown"
                          id="lastmonth"
                          placeholder="Month"
                          options={monthsLastOptions}
                          onChange={handleLastMonthChange}
                          value={formik.values.lastmonth}
                          name='month'
                          className="border border-gray-400 rounded-md p-2 w-full zindexnav"
                          showIcon={true}
                          iconColor="black"
                        />
                        <p>month</p>
                      </div>
                      <div className="col-span-1  ">
                        <InputFields
                          type="dropdown"
                          id="lastyear"
                          placeholder="Year"
                          options={yearsLastOptions}
                          onChange={handleLastYearChange}
                          value={formik.values.lastyear}
                          name='year'
                          className="border  border-gray-400 rounded-md p-2 w-full zindexnav"
                          showIcon={true}
                          iconColor="black"
                        />
                        <p>Year</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2 flex">
                      <DynamicLabel label="Address" isRequired={false} />
                    </div>
                  <div className="col-span-3 zindexnav">
                      <InputFields
                        id="address"
                        type="text"
                        placeholder="Enter Address"
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        className="border border-gray-400 rounded-md p-2 w-full"
                        style={{
                          minHeight: "80px",
                          maxHeight: "80px",
                          resize: "none",
                        }}
                      />
                    </div>
                  {/* <div className="col-span-2 flex items-center">
                    <DynamicLabel label=" password" isRequired={false} />
                  </div> */}
                  {/* <div className="col-span-3 zindexnav">
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      name='password'
                      className="border border-gray-400 rounded-md p-2 w-full"
                    />
                  </div> */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 h-auto mt-2">
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
                          value={formik.values.feet}
                          name='feet'
                          className="border border-gray-400 rounded-md p-2 w-full"
                        />
                      </div>
                      <div className="col-span-1">
                        <InputFields
                          id="inch"
                          type="text"
                          placeholder="Inch"
                          onChange={formik.handleChange}
                          value={formik.values.inch}
                          name='inch'
                          className="border border-gray-400 rounded-md p-2 w-full"
                        />
                      </div>
                      {/* <div className="col-span-2 flex items-start">
                      <DynamicLabel label="Height & Weight" isRequired={true} />
                    </div> */}
                      <div className="col-span-1">

                        <InputFields
                          id="weight"
                          type="text"
                          placeholder="weight"
                          onChange={formik.handleChange}
                          value={formik.values.weight}
                          name='weight'
                          className="border border-gray-400 rounded-md p-2 w-full"
                        />
                      </div>
                    </div>
                  </div>


                  <div className="col-span-2 flex"></div>
                  <div className="col-span-3 zindexnav">
                    <div className="grid grid-cols-4 gap-3">
                      <div className="col-span-2">
                        <InputFields
                          type="dropdown"
                          id="district"
                          placeholder="Select District"
                          options={districtOptions}
                          onChange={handleDistrictChange}
                          value={formik.values.district}
                          className="border border-gray-400 rounded-md p-2 w-full"
                        />
                      </div>
                      <div className="col-span-2">
                        <InputFields
                          type="dropdown"
                          placeholder="Select Area"
                          options={areaOptions}
                          onChange={formik.handleChange}
                          name='area'
                          className="border border-gray-400 rounded-md p-2 w-full"
                          disabled
                        />
                      </div>
                      <div className="col-span-1"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 h-auto mt-2">
                  <div className="col-span-2 flex items-center">
                    <DynamicLabel label="Age" isRequired={true} />
                  </div>
                  <div className="col-span-5 zindexnav">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1">
                        <InputFields
                          id="age"
                          type="text"
                          placeholder="Years"
                          onChange={formik.handleChange}
                          value={formik.values.age}
                          name='age'
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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 h-auto mt-2">
                  <div className="col-span-2 flex items-center">
                    <DynamicLabel label="Gender" isRequired={true} />
                  </div>
                  <div className="col-span-5 zindexnav">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2">
                        <InputFields
                          type="dropdown"
                          id="gender"
                          placeholder="Select"
                          options={genderOptions}
                          onChange={handleGenderChange}
                          value={formik.values.gender}

                          className="border border-gray-400 rounded-md p-2 w-full"
                        />
                      </div>
                      <div className="col-span-1"></div>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center">
                    <DynamicLabel label="NID" isRequired={false} />
                  </div>
                  <div className="col-span-3 zindexnav">
                    <InputFields
                      id="nid"
                      type="text"
                      placeholder="Enter NID Number"
                      onChange={formik.handleChange}
                      value={formik.values.nid}
                      name='nid'
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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 h-auto mt-2">
                  <div className="col-span-2 flex items-center">
                    <DynamicLabel label="Any Disease" isRequired={true} />
                  </div>
                  <div className="col-span-5 zindexnav">
                    <InputFields
                      id="disease"
                      type="dropdown"

                      placeholder="Select"
                      options={diseaseOptions}
                      onChange={handleDiseaseChange}
                      value={formik.values.disease}
                      name='disease'
                      className="border border-gray-400 rounded-md p-2 w-full"

                      showIcon={true}
                      iconColor="black"
                    />
                  </div>
                  <div className="col-span-1"></div>                 
             
                </div>
              </div>
 


              <div className="flex justify-center mt-5">
                <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-transparent hover:text-brandPrimary border hover:border-brandPrimary hover:font-semibold z-10">
                  Registration
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
