import React from "react";
import { useFormik } from "formik";
import DynamicLabel from "../../components/InputFields/DynamicLabel";
import InputFields from "../../components/InputFields/InputFields";
import TitleTopComponent from "../../components/Blood/TitleTopComponent";

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
  ];

  const transfusionOptions = [
    { label: "Whole Blood", value: "Whole Blood" },
    { label: "Red Blood Cells", value: "Red Blood Cells" },
    { label: "Platelets", value: "Platelets" },
    { label: "Plasma", value: "Plasma" },
  ];

  const districtOptions = [
    { label: "District A", value: "District A" },
    { label: "District B", value: "District B" },
    { label: "District C", value: "District C" },
  ];

  const hospitalOptions = [
    { label: "City Hospital", value: "City Hospital" },
    { label: "General Medical Center", value: "General Medical Center" },
    { label: "Community Health Hospital", value: "Community Health Hospital" },
  ];

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected File:", selectedFile);
  };

  return (
    <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
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
                  field={{ value: null }}
                  onChange={formik.handleChange}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
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
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
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
          {/* ... (more form fields) */}

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
