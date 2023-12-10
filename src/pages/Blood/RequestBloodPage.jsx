import React from "react";
import callRedIco from "../../assets/icons/callRedIco.png";
import Rectangle from "../../assets/icons/Rectangle.png";
import { useFormik } from "formik";
import DynamicLabel from "../../components/InputFields/DynamicLabel";
import InputFields from "../../components/InputFields/InputFields";

const RequestBloodPage = () => {
  const initialValues = {
    patientName: "",
    patientAge: "",
    phoneNumber: "",
    lastName: "",

    // Add more fields and their initial values as needed
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

  const urgencyOptions = [
    { label: "Low", value: "Low" },
    { label: "Medium", value: "Medium" },
    { label: "High", value: "High" },
    { label: "Urgent", value: "Urgent" },
  ];

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

  const donationTypeOptions = [
    { label: "Monetary", value: "Monetary" },
    { label: "In-Kind", value: "In-Kind" },
    { label: "Service", value: "Service" },
    // Add additional donation types as needed
  ];

  const transfusionOptions = [
    { label: "Whole Blood", value: "Whole Blood" },
    { label: "Red Blood Cells", value: "Red Blood Cells" },
    { label: "Platelets", value: "Platelets" },
    { label: "Plasma", value: "Plasma" },
    // Add additional transfusion types as needed
  ];

  const districtOptions = [
    { label: "District A", value: "District A" },
    { label: "District B", value: "District B" },
    { label: "District C", value: "District C" },
    // Add additional districts as needed
  ];

  const hospitalOptions = [
    { label: "City Hospital", value: "City Hospital" },
    { label: "General Medical Center", value: "General Medical Center" },
    { label: "Community Health Hospital", value: "Community Health Hospital" },
    // Add additional hospital names as needed
  ];

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    // Handle the selected file as needed
    console.log("Selected File:", selectedFile);
  };

  return (
    <div className="">
      <div className="mx-28">
        {/* start */}
        <div className="w-full h-20 flex justify-between items-center">
          <div>
            <p className="font-semibold">
              {" "}
              Home <span className="text-brandPrimary">&gt;</span> Blood{" "}
              <span className="text-brandPrimary">&gt;</span> Request Blood
            </p>
          </div>

          {/* START RIGHT */}
          <div className="flex justify-end text-xl font-semibold">
            <img src={Rectangle} alt="" />
            <p className="-ml-[140px] mt-[10px] font-bold text-brandPrimary text-[14px]">
              Connect With Us
            </p>
            <div className="mt-1 ml-6 mr-4">
              <div className="rounded-full text-white">
                <div className="">
                  <img src={callRedIco} alt="" className="w-[40px] h-[40px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END top*/}
        <div className="mt-2">
          <p
            className="text-center"
            style={{
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              textTransform: "capitalize",
            }}
          >
            Please fill the following form to request blood
          </p>

          <form
            onSubmit={formik.handleSubmit}
            className="mt-4 shadow-bottom-left-right rounded-xl"
          >
            <div className="mx-4 my-4">
              <div className="grid grid-cols-2 gap-4 ">
                <div className="col-span-1">
                  <DynamicLabel label="Enter Patient Name" isRequired={true} />
                  <div className="mt-1">
                    <InputFields
                      id="patientName"
                      type="text"
                      placeholder="Patient Name"
                      onChange={formik.handleChange}
                      className="border border-gray-400 rounded-md p-2 w-full"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <DynamicLabel label="Select Urgency" isRequired={true} />
                  <div className="mt-1">
                    <InputFields
                      type="dropdown"
                      placeholder="Scheduling/Urgent"
                      options={urgencyOptions}
                      onChange={formik.handleChange}
                      className="border border-gray-400 rounded-md p-2 w-full"
                      showIcon={true}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="col-span-1">
                  <DynamicLabel label="Blood Group" isRequired={true} />
                  <div className="mt-1">
                    <InputFields
                      type="dropdown"
                      placeholder="Select"
                      options={bloodGroupOptions}
                      onChange={formik.handleChange}
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
                      type="date"
                      id="datePicker"
                      field={{ value: null }} // Pass an initial value if needed
                      onChange={formik.handleChange}
                      placeholder="Select a date"
                      className="w-full "
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="col-span-1">
                  <DynamicLabel
                    label="Request Donation Type"
                    isRequired={true}
                  />
                  <div className="mt-1">
                    <InputFields
                      type="dropdown"
                      placeholder="Select"
                      options={donationTypeOptions}
                      onChange={formik.handleChange}
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
                      type="dropdown"
                      placeholder="Select"
                      options={transfusionOptions}
                      onChange={formik.handleChange}
                      className="border border-gray-400 rounded-md p-2 w-full"
                      showIcon={true}
                      iconColor="black"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="col-span-1">
                  <DynamicLabel label="Patient Age" isRequired={true} />
                  <div className="mt-1">
                    <InputFields
                      id="patientAge"
                      type="text"
                      placeholder="Patient Age"
                      onChange={formik.handleChange}
                      className="border border-gray-400 rounded-md p-2 w-full"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <DynamicLabel label="District" isRequired={true} />
                  <div className="mt-1">
                    <InputFields
                      type="dropdown"
                      placeholder="Select District"
                      options={districtOptions}
                      onChange={formik.handleChange}
                      className="border border-gray-400 rounded-md p-2 w-full"
                      showIcon={true}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="col-span-1">
                  <DynamicLabel label="Phone Number" isRequired={true} />
                  <div className="mt-1">
                    <InputFields
                      id="phoneNumber"
                      type="text"
                      placeholder="Enter Phone Number"
                      onChange={formik.handleChange}
                      className="border border-gray-400 rounded-md p-2 w-full"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <DynamicLabel label="Enter Hospital Name" isRequired={true} />
                  <div className="mt-1">
                    <InputFields
                      type="dropdown"
                      placeholder="Select Hospital"
                      options={hospitalOptions}
                      onChange={formik.handleChange}
                      className="border border-gray-400 rounded-md p-2 w-full"
                      showIcon={true}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-1">
                <div className="col-span-1">
                <div className="mt-3">
                <label htmlFor="imageUpload">Upload Image:</label> <br />
                <input
                  type="file"
                  id="imageUpload"
                  name="image"
                  accept="image/*" // Set accepted file types (in this case, images)
                  onChange={handleFileChange}
                  style={{ display: "none" }} // Hide the default file input style
                  className="bg-gray-500 text-white"
                />
                <div className="border border-gray-400 px-4 py-2 w-28 rounded-lg mt-1">
                  <button
                    onClick={() =>
                      document.getElementById("imageUpload").click()
                    }
                    className="bg-gray-400 text-white rounded-md px-2 py-1 cursor-pointer"
                  >
                    Browse
                  </button>
                </div>
              </div>
                </div>
                <div className="col-span-1"></div>
              </div>
              {/* end */}

              <div className="flex justify-center items-center pb-4">
                <div className="flex-grow text-center">
                  {" "}
                  {/* New container for center alignment */}
                  <button
                    type="submit"
                    className="bg-brandPrimary text-white py-2 px-4 rounded-md shadow-bottom-right"
                  >
                    Request For Blood
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default RequestBloodPage;
