import React from "react";
import { useFormik } from "formik";
import DynamicLabel from "../../components/InputFields/DynamicLabel";
import InputFields from "../../components/InputFields/InputFields";
import TitleTopComponent from "../../components/Blood/TitleTopComponent";
import axios from "axios";

const RequestBloodPage = () => {

  const formik =useFormik({

    initialValues : {
      patientName: "",
      patientAge: "",
      phoneNumber: "",
      requestType:"",
      bloodGroup:"",
      date:"",
      donationType:"",
      transfusionBlood:"",
      district:"",
      hospital:"",
      // selectedFile:""
      
      
    },

onSubmit:async(values)=>{
  console.log("values", values)
  const isEmptyField = Object.values(values).some(value => value === "");
  
  if(isEmptyField){
    alert("Please fill in all fields before submitting.")
    return
  }
  else{
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const { latitude, longitude } = position.coords;
    console.log("lat",latitude,longitude)
    
    const bloodToSend={
      patient_name:values.patientName,
      blood_group:values.bloodGroup,
      request_donation_type:values.donationType,
      patient_age:values.patientAge,
      phone_nember:values.phoneNumber,
      urgency:values.requestType,
      hospital_name:values.hospital,
      date_when_blood_need:values.date,
      disease_name:values.transfusionBlood,
      district:values.district,
      latitude,
      longitude,
      // imeage:values.selectedFile

    }
    axios.post(`https://bloodbackend.visionarytechsolution.com/requestblood/request_blood`,bloodToSend,{
      headers:{
        'Content-Type':'application/json',
        
      },
    })
    .then(res=>{
      console.log("Data successfully posted to the server:",res.data)
    })
    .then(error =>{
      console.log("error",error)
    })

    
  }
}
})




  const urgencyOptions = [
    { label: "Low", value: "Low" },
    { label: "Medium", value: "Medium" },
    { label: "High", value: "High" },
    { label: "Urgent", value: "Urgent" },
  ];
  const handleRequestTypeChange = (selectedRequestType) => {
    formik.handleChange('requestType')(selectedRequestType);
    console.log('Selected requestType:', selectedRequestType)

  };

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
  
  const handleBloodGroupChange = (selectedBloodGroup) => {
    formik.handleChange('bloodGroup')(selectedBloodGroup);
    console.log('Selected bloodGroup:', selectedBloodGroup)

  };

  const donationTypeOptions = [
    { label: "Monetary", value: "Monetary" },
    { label: "In-Kind", value: "In-Kind" },
    { label: "Service", value: "Service" },
  ];
  const handleDonationTypeChange = (selectedDonationType) => {
    formik.handleChange('donationType')(selectedDonationType);
    console.log('Selected donationType:', selectedDonationType)

  };

  const transfusionOptions = [
    { label: "Whole Blood", value: "Whole Blood" },
    { label: "Red Blood Cells", value: "Red Blood Cells" },
    { label: "Platelets", value: "Platelets" },
    { label: "Plasma", value: "Plasma" },
  ];
  const handleTransfusionChange = (selectedTransfusion) => {
    formik.handleChange('transfusionBlood')(selectedTransfusion);
    console.log('Selected transfusionBlood:', selectedTransfusion)

  };

  const districtOptions = [
    { label: "District A", value: "District A" },
    { label: "District B", value: "District B" },
    { label: "District C", value: "District C" },
  ];
  
  const handleDistrictChange = (selectedDistrict) => {
    formik.handleChange('district')(selectedDistrict);
    console.log('Selected district:', selectedDistrict)

  };

  const hospitalOptions = [
    { label: "City Hospital", value: "City Hospital" },
    { label: "General Medical Center", value: "General Medical Center" },
    { label: "Community Health Hospital", value: "Community Health Hospital" },
  ];
  

  const handleHospitalChange = (selectedHospital) => {
    formik.handleChange('hospital')(selectedHospital);
    console.log('Selected hospital:', selectedHospital)

  };

  // const handleFileChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   console.log("Selected File:", selectedFile);
  // };
  // const handleFileChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   console.log('lllllll',selectedFile)
  //   formik.setFieldValue('selectedFile', selectedFile);
  //   console.log("Selected File:", selectedFile);
  // };

  const dateChange =(date)=>{
    formik.handleChange('date')(date)
    console.log("date",date)
  }

  return (
    <div id="/request-blood" tabIndex="-1" className="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
      {/* Top Section */}
      <TitleTopComponent secondTitle={"Blood"} thirdTitle={"Request Blood"} />
      {/* End Top Section */}

      <div className="mt-2">
        <p className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
          Please fill the following form to request blood
        </p>

        <form
          onSubmit={formik.handleSubmit}
          className="mt-4 shadow-md rounded-xl px-4 py-6 md:px-8 lg:px-12 xl:px-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <DynamicLabel label="Enter Patient Name" isRequired={true} />
              <div className="mt-1">
                <InputFields
                  id="patientName"
                  type="text"
                  placeholder="Patient Name"
                  onChange={formik.handleChange}
                  value={formik.values.patientName}
                  name="patientName"
                  className="border border-gray-400 rounded-md p-2 w-full"
                />
              </div>
            </div>

            <div className="col-span-1">
              <DynamicLabel label="Select Urgency" isRequired={true} />
              <div className="mt-1">
                <InputFields
                  id="requestType"
                  type="dropdown"
                  placeholder="Scheduling/Urgent"
                  options={urgencyOptions}
                  onChange={handleRequestTypeChange}
                  value={formik.values.requestType}
                  className="border border-gray-400 rounded-md p-2 w-full"
                  showIcon={true}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="col-span-1">
              <DynamicLabel label="Blood Group" isRequired={true} />
              <div className="mt-1">
                <InputFields
                  id="bloodGroup"
                  type="dropdown"
                  placeholder="Select"
                  options={bloodGroupOptions}
                  onChange={handleBloodGroupChange }
                  value={formik.values.bloodGroup}
                  className="border border-gray-400 rounded-md p-2 w-full"
                  showIcon={true}
                  iconColor="black"
                />
              </div>
            </div>

            <div className="col-span-1">
              <DynamicLabel
                label="Select The Date When Blood Needed"
                isRequired={true}
              />
              <div className="mt-1">
                <InputFields
             
                  
                  id="date"
                  name="date"
                  type="date"
                  field={{ value: null }}
                  onChange={dateChange}
                  value={formik.values.date}
                  placeholder="Select a date"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="col-span-1">
              <DynamicLabel label="Request Donation Type" isRequired={true} />
              <div className="mt-1">
                <InputFields
                  id="donationType"
                  type="dropdown"
                  placeholder="Select"
                  options={donationTypeOptions}
                  onChange={handleDonationTypeChange}
                  value={formik.values.donationType}
                  className="border border-gray-400 rounded-md p-2 w-full"
                  showIcon={true}
                  iconColor="black"
                />
              </div>
            </div>

            <div className="col-span-1">
              <DynamicLabel label="Disease Name" isRequired={true} />
              <div className="mt-1">
                <InputFields
                  id="transfusionBlood"
                  type="dropdown"
                  placeholder="Select"
                  options={transfusionOptions}
                  onChange={handleTransfusionChange}
                  value={formik.values.transfusionBlood}
                  className="border border-gray-400 rounded-md p-2 w-full"
                  showIcon={true}
                  iconColor="black"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="col-span-1">
              <DynamicLabel label="Patient Age" isRequired={true} />
              <div className="mt-1">
                <InputFields
                  id="patientAge"
                  type="text"
                  placeholder="Patient Age"
                  onChange={formik.handleChange}
                  value={formik.values.patientAge}
                  className="border border-gray-400 rounded-md p-2 w-full"
                />
              </div>
            </div>

            <div className="col-span-1">
              <DynamicLabel label="District" isRequired={true} />
              <div className="mt-1">
                <InputFields
                  id="district"
                  type="dropdown"
                  placeholder="Select District"
                  options={districtOptions}
                  onChange={handleDistrictChange}
                  value={formik.values.district}
                  className="border border-gray-400 rounded-md p-2 w-full"
                  showIcon={true}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="col-span-1">
              <DynamicLabel label="Phone Number" isRequired={true} />
              <div className="mt-1">
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

            <div className="col-span-1">
              <DynamicLabel label="Enter Hospital Name" isRequired={true} />
              <div className="mt-1">
                <InputFields
                  id="hospital"
                  type="dropdown"
                  placeholder="Select Hospital"
                  options={hospitalOptions}
                  onChange={handleHospitalChange}
                  value={formik.values.hospital}
                  className="border border-gray-400 rounded-md p-2 w-full"
                  showIcon={true}
                />
              </div>
            </div>
          </div>

          {/* <div className="grid grid-cols-2 gap-4 mt-1">
            <div className="col-span-1">
              <div className="mt-3">
                <label htmlFor="imageUpload">Upload Image:</label> <br />
                <input
                  type="file"
                  id="selectedFile"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  className="bg-gray-500 text-white"
                />
                <div className="border border-gray-400 px-4 py-2 w-28 rounded-lg mt-1">
                  <div
                    onClick={() =>
                      document.getElementById("selectedFile").click()
                    }
                    className="bg-gray-400 text-white rounded-md px-2 py-1 cursor-pointer"
                  >
                    Browse
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>  */}
           {/* (more form fields) */}

          <div className="flex justify-center items-center pb-4 mt-2">
            <div className="flex-grow text-center">
              <button
                type="submit"
                className="bg-brandPrimary text-white py-2 px-4 rounded-md shadow-bottom-right"
              >
                Request For Blood
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestBloodPage;
