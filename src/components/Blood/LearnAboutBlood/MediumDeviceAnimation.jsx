import React, { useState } from "react";

const MediumDeviceAnimation = () => {
  // State to manage the fill color of the blood bag
  // const [fillColor, setFillColor] = useState("#E11B22");

  // Function to handle the click event and change the fill color
  // const emptyBloodBag = () => {
  //   setFillColor("white");
  // };

  // start blood group button state and functions
  const [buttonAStyle, setButtonAStyle] = useState({
    backgroundColor: "bg-brandPrimary",
    textColor: "text-white",
  });

  const [buttonBStyle, setButtonBStyle] = useState({
    backgroundColor: "bg-white",
    textColor: "text-[#44444480]",
  });

  const [buttonABStyle, setButtonABStyle] = useState({
    backgroundColor: "bg-white",
    textColor: "text-[#44444480]",
  });

  const [buttonOStyle, setButtonOStyle] = useState({
    backgroundColor: "bg-white",
    textColor: "text-[#44444480]",
  });

  const [showGroupASVG, setShowGroupASVG] = useState(true); //group A svg state
  const [showGroupBSVG, setShowGroupBSVG] = useState(false); //group B svg state
  const [showGroupABSVG, setShowGroupABSVG] = useState(false); //group AB svg state
  const [showGroupOSVG, setShowGroupOSVG] = useState(false); //group O svg state

  const handleGroupAClick = () => {
    setButtonAStyle({
      backgroundColor: "bg-brandPrimary",
      textColor: "text-white",
    });
    setShowGroupASVG(true);
    setShowGroupBSVG(false);
    setShowGroupABSVG(false);
    setShowGroupOSVG(false);
    // Reset other button styles if needed
    resetOtherStyles("A");
  };

  const handleGroupBClick = () => {
    setButtonBStyle({
      backgroundColor: "bg-brandPrimary",
      textColor: "text-white",
    });
    setShowGroupBSVG(true);
    setShowGroupASVG(false);
    setShowGroupABSVG(false);
    setShowGroupOSVG(false);
    resetOtherStyles("B");
  };

  const handleGroupABClick = () => {
    setButtonABStyle({
      backgroundColor: "bg-brandPrimary",
      textColor: "text-white",
    });
    setShowGroupABSVG(true);
    setShowGroupBSVG(false);
    setShowGroupASVG(false);
    setShowGroupOSVG(false);
    resetOtherStyles("AB");
  };

  const handleGroupOClick = () => {
    setButtonOStyle({
      backgroundColor: "bg-brandPrimary",
      textColor: "text-white",
    });
    setShowGroupABSVG(false);
    setShowGroupBSVG(false);
    setShowGroupASVG(false);
    setShowGroupOSVG(true);
    resetOtherStyles("O");
  };

  const resetOtherStyles = (currentGroup) => {
    if (currentGroup !== "A") {
      setButtonAStyle({
        backgroundColor: "bg-white",
        textColor: "text-[#44444480]",
      });
    }
    if (currentGroup !== "B") {
      setButtonBStyle({
        backgroundColor: "bg-white",
        textColor: "text-[#44444480]",
      });
    }
    if (currentGroup !== "AB") {
      setButtonABStyle({
        backgroundColor: "bg-white",
        textColor: "text-[#44444480]",
      });
    }
    if (currentGroup !== "O") {
      setButtonOStyle({
        backgroundColor: "bg-white",
        textColor: "text-[#44444480]",
      });
    }
  };
  // end blood group button state and functions

  // Start Blood Bag Animation Handle
  const [showBloodGoing, setShowBloodGoing] = useState(false); //BloodGoing state
  const [showBloodGoing2, setShowBloodGoing2] = useState(false); //BloodGoing 2 state
  const [showBloodGoing3, setShowBloodGoing3] = useState(false); //BloodGoing 3 state
  const [showBloodGoing4, setShowBloodGoing4] = useState(false); //BloodGoing 4 state

  const handleBloodGoing = () => {
    setShowBloodGoing(true);
    setShowBloodGoing2(false);
    setShowBloodGoing3(false);
    setShowBloodGoing4(false);
  };
  const handleBloodGoing2 = () => {
    setShowBloodGoing(false);
    setShowBloodGoing2(true);
    setShowBloodGoing3(false);
    setShowBloodGoing4(false);
  };
  const handleBloodGoing3 = () => {
    setShowBloodGoing(false);
    setShowBloodGoing2(false);
    setShowBloodGoing3(true);
    setShowBloodGoing4(false);
  };
  const handleBloodGoing4 = () => {
    setShowBloodGoing(false);
    setShowBloodGoing2(false);
    setShowBloodGoing3(false);
    setShowBloodGoing4(true);
  };

  console.log("showBloodGoing", showBloodGoing);
  // End Blood Bag Animation Handle
  return (
    <div>
      <div className="mt-4 lg:grid grid-cols-12 gap-1 px-20 md:hidden hidden">
        <div className="col-span-2 border border-white flex flex-col pl-16">
          {/* start 1st line of 1st blood bag */}
          <div
            className="mr-6"
            style={{ position: "relative", width: "90px", height: "58px" }}
          >
            {/* Main SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="48"
              viewBox="0 0 75 70"
              fill="none"
              className="zindextwo cursor-pointer"
              style={{
                position: "absolute",
                left: "46%",
                top: "49%",
                transform: "translate(-20%, -50%)",
              }}
              onClick={handleBloodGoing}
            >
              <path
                d="M14.0438 70H60.8567L74.9005 55V50H68.6588V52.2333L60.0921 61.3833C58.9217 62.6333 57.3457 63.3333 55.6917 63.3333H21.2842C19.0528 63.3333 16.9775 62.05 15.8695 59.9667L14.0282 56.5333C13.1076 54.8167 11.8436 53.3333 10.3144 52.2167C9.89311 51.8833 9.61223 51.3833 9.61223 50.8167L9.61223 19.1833C9.61223 18.6167 9.89311 18.1167 10.3144 17.8C11.8436 16.6667 13.1076 15.1833 14.0282 13.4667L15.8695 10.0333C16.9775 7.95 19.0528 6.66667 21.2842 6.66667L55.6917 6.66667C57.3457 6.66667 58.9217 7.36667 60.0921 8.61667L69.1894 18.3333H74.9005V15L60.8567 0L14.0438 0L7.80214 11.6667L3.02723 14.7167C1.15472 15.9333 0 18.1 0 20.4333L0 49.5667C0 51.9 1.15472 54.0667 3.02723 55.2833L7.80214 58.3333L14.0438 70Z"
                fill="#F2F2F2"
              />
            </svg>
            {/* main white end */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="48"
              viewBox="0 0 75 35"
              fill="none"
              style={{
                position: "absolute",
                left: "46%",
                top: "70%",
                transform: "translate(-20%, -50%)",
              }}
            >
              <path
                d="M14.0438 35L60.8567 35L74.9005 20V15H68.6588V17.2333L60.0921 26.3833C58.9217 27.6333 57.3457 28.3333 55.6917 28.3333L21.2842 28.3333C19.0528 28.3333 16.9775 27.05 15.8695 24.9667L14.0282 21.5333C13.1076 19.8167 11.8436 18.3333 10.3144 17.2167C9.89311 16.8833 9.61223 16.3833 9.61223 15.8167L9.61223 0L0 0L0 14.5667C0 16.9 1.15472 19.0667 3.02723 20.2833L7.80214 23.3333L14.0438 35Z"
                fill="#CCCCCC"
              />
            </svg>
            {/* main white black end */}

            {/* jhapsa side erta */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="16"
              viewBox="0 0 7 16"
              fill="none"
              style={{
                position: "absolute",
                left: "84.5%",
                top: "50%",
                transform: "translate(-20%, -50%)",
              }}
            >
              <path
                d="M0.658691 15.666L0.658691 0.666016L6.9004 0.666016L6.9004 15.666H0.658691Z"
                fill="#8BAAE8"
              />
            </svg>
            {/* end main jhapsa ta */}
            {/* start dots svg */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 7 7"
              fill="none"
              style={{
                position: "absolute",
                left: "48%",
                top: "23%",
              }}
              className="zindexOne animate-pulse"
            >
              <path
                d="M6.74708 3.66732C6.74708 5.50827 5.34983 7.00065 3.62623 7.00065C1.90263 7.00065 0.505371 5.50827 0.505371 3.66732C0.505371 1.82637 1.90263 0.333984 3.62623 0.333984C5.34983 0.333984 6.74708 1.82637 6.74708 3.66732Z"
                fill="#F27979"
              />
            </svg>
            {/* end dot 1 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              style={{
                position: "absolute",
                left: "58%",
                top: "22%",
              }}
              className="zindexOne animate-ping"
            >
              <path
                d="M3.3296 1.66667C3.3296 2.58714 2.63097 3.33333 1.76917 3.33333C0.907367 3.33333 0.20874 2.58714 0.20874 1.66667C0.20874 0.746192 0.907367 0 1.76917 0C2.63097 0 3.3296 0.746192 3.3296 1.66667Z"
                fill="#73020C"
              />
            </svg>
            {/* end dot 2 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="5"
              viewBox="0 0 5 6"
              fill="none"
              style={{
                position: "absolute",
                left: "72%",
                top: "23%",
              }}
              className="zindexOne animate-pulse"
            >
              <path
                d="M4.8346 3.16602C4.8346 4.54673 3.78666 5.66602 2.49396 5.66602C1.20126 5.66602 0.15332 4.54673 0.15332 3.16602C0.15332 1.7853 1.20126 0.666016 2.49396 0.666016C3.78666 0.666016 4.8346 1.7853 4.8346 3.16602Z"
                fill="#F27979"
              />
            </svg>
            {/* end dot 3 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="6"
              viewBox="0 0 7 8"
              fill="none"
              style={{
                position: "absolute",
                left: "78%",
                top: "31%",
              }}
              className="zindexOne animate-pulse"
            >
              <path
                d="M7.00856 3.96615C7.00856 5.8071 5.6113 7.29948 3.8877 7.29948C2.1641 7.29948 0.766846 5.8071 0.766846 3.96615C0.766846 2.1252 2.1641 0.632813 3.8877 0.632813C5.6113 0.632813 7.00856 2.1252 7.00856 3.96615Z"
                fill="#73020C"
              />
            </svg>
            {/* end dot 4  */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="4"
              viewBox="0 0 6 5"
              fill="none"
              style={{
                position: "absolute",
                left: "78%",
                top: "46%",
              }}
              className="zindexOne animate-ping"
            >
              <path
                d="M5.53822 2.5C5.53822 3.88071 4.49028 5 3.19757 5C1.90487 5 0.856934 3.88071 0.856934 2.5C0.856934 1.11929 1.90487 0 3.19757 0C4.49028 0 5.53822 1.11929 5.53822 2.5Z"
                fill="#F27979"
              />
            </svg>
            {/* end dot 5 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="3"
              viewBox="0 0 4 4"
              fill="none"
              style={{
                position: "absolute",
                left: "77%",
                top: "60%",
              }}
              className="zindexOne animate-pulse"
            >
              <path
                d="M3.41724 1.66667C3.41724 2.58714 2.71861 3.33333 1.85681 3.33333C0.995014 3.33333 0.296387 2.58714 0.296387 1.66667C0.296387 0.746192 0.995014 0 1.85681 0C2.71861 0 3.41724 0.746192 3.41724 1.66667Z"
                fill="#73020C"
              />
            </svg>
            {/* end dot 6 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="5"
              viewBox="0 0 5 6"
              fill="none"
              style={{
                position: "absolute",
                left: "76%",
                top: "67%",
              }}
              className="zindexOne animate-pulse"
            >
              <path
                d="M4.97767 3.16602C4.97767 4.54673 3.92973 5.66602 2.63703 5.66602C1.34433 5.66602 0.296387 4.54673 0.296387 3.16602C0.296387 1.7853 1.34433 0.666016 2.63703 0.666016C3.92973 0.666016 4.97767 1.7853 4.97767 3.16602Z"
                fill="#73020C"
              />
            </svg>
            {/* end dot 7 */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 6 6"
              fill="none"
              style={{
                position: "absolute",
                left: "67%",
                top: "71%",
              }}
              className="zindexOne animate-ping"
            >
              <path
                d="M5.61488 2.83398C5.61488 4.2147 4.56694 5.33398 3.27424 5.33398C1.98153 5.33398 0.933594 4.2147 0.933594 2.83398C0.933594 1.45327 1.98153 0.333984 3.27424 0.333984C4.56694 0.333984 5.61488 1.45327 5.61488 2.83398Z"
                fill="#F27979"
              />
            </svg>
            {/* end dot 8 */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 7 8"
              fill="none"
              style={{
                position: "absolute",
                left: "58%",
                top: "71%",
              }}
              className="zindexOne animate-pulse"
            >
              <path
                d="M6.38819 3.76693C6.38819 5.60788 4.99094 7.10026 3.26734 7.10026C1.54374 7.10026 0.146484 5.60788 0.146484 3.76693C0.146484 1.92598 1.54374 0.433594 3.26734 0.433594C4.99094 0.433594 6.38819 1.92598 6.38819 3.76693Z"
                fill="#73020C"
              />
            </svg>
            {/* end dot 9 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="6"
              viewBox="0 0 7 8"
              fill="none"
              style={{
                position: "absolute",
                left: "49%",
                top: "68%",
              }}
              className="zindexOne animate-ping"
            >
              <path
                d="M6.38819 3.76693C6.38819 5.60788 4.99094 7.10026 3.26734 7.10026C1.54374 7.10026 0.146484 5.60788 0.146484 3.76693C0.146484 1.92598 1.54374 0.433594 3.26734 0.433594C4.99094 0.433594 6.38819 1.92598 6.38819 3.76693Z"
                fill="#73020C"
              />
            </svg>
            {/* end dot 10 */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="5"
              viewBox="0 0 5 6"
              fill="none"
              style={{
                position: "absolute",
                left: "44%",
                top: "50%",
              }}
              className="zindexOne animate-pulse"
            >
              <path
                d="M4.72523 3.16602C4.72523 4.54673 3.67729 5.66602 2.38459 5.66602C1.09189 5.66602 0.0439453 4.54673 0.0439453 3.16602C0.0439453 1.7853 1.09189 0.666016 2.38459 0.666016C3.67729 0.666016 4.72523 1.7853 4.72523 3.16602Z"
                fill="#F27979"
              />
            </svg>
            {/* end dot 11 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              style={{
                position: "absolute",
                left: "45%",
                top: "37%",
              }}
              className="zindexOne animate-ping"
            >
              <path
                d="M3.7251 2.00065C3.7251 2.92113 3.02648 3.66732 2.16468 3.66732C1.30288 3.66732 0.604248 2.92113 0.604248 2.00065C0.604248 1.08018 1.30288 0.333984 2.16468 0.333984C3.02648 0.333984 3.7251 1.08018 3.7251 2.00065Z"
                fill="#73020C"
              />
            </svg>
            {/* end dot 12 */}
            {/* End dots svg */}

            {/* start main blood bag */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="40"
              viewBox="0 0 71 58"
              fill="none"
              style={{
                position: "absolute",
                left: "50%",
                top: "49%",
                transform: "translate(-20%, -50%)",
              }}
              onClick={handleBloodGoing}
              className="cursor-pointer"
            >
              <path
                d="M12.2843 57.3327H46.6917C48.3458 57.3327 49.9218 56.6327 51.0921 55.3827L59.6589 46.2327V43.9994H70.5819V35.666H59.6589V20.666H70.5819V12.3327L60.1894 12.3327L51.0921 2.61602C49.9218 1.36602 48.3458 0.666016 46.6917 0.666016L12.2843 0.666016C10.0529 0.666016 7.97752 1.94935 6.86962 4.03268L5.02831 7.46602C4.10766 9.18268 2.84372 10.666 1.3145 11.7993C0.893181 12.116 0.612305 12.616 0.612305 13.1827L0.612305 44.816C0.612305 45.3827 0.893181 45.8827 1.3145 46.216C2.84372 47.3327 4.10766 48.816 5.02831 50.5327L6.86962 53.966C7.97752 56.0494 10.0529 57.3327 12.2843 57.3327Z"
                fill="#E11B22"
              />
            </svg>

            {/* Smaller SVG positioned to the right */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 34 34"
              fill="none"
              style={{ position: "absolute", left: "47px", top: "17px" }} // Adjust the position as per your requirement
              onClick={handleBloodGoing}
              className="cursor-pointer"
            >
              <path
                d="M0.406494 17.0007C0.406494 26.2007 7.39721 33.6673 16.0108 33.6673C24.6243 33.6673 31.615 26.2007 31.615 17.0007C31.615 7.80065 24.6243 0.333984 16.0108 0.333984C7.39721 0.333984 0.406494 7.80065 0.406494 17.0007Z"
                fill="#F2F2F2"
              />
            </svg>

            {/* Add text in the middle of the SVG */}
            <text
              style={{
                position: "absolute",
                left: "50px",
                top: "14px",
                color: "#E11B22",
                fontSize: "20px",
                fontWeight: "600",
              }}
              onClick={handleBloodGoing}
              className="cursor-pointer"
            >
              O
            </text>

            {/* Your new SVG */}
            {/* here under black half start */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="36"
              viewBox="0 0 66 53"
              fill="none"
              className="zindexZero"
              style={{
                position: "absolute",
                left: "47px",
                top: "19px",
                transform: "translate(-20%, -20%)",
              }}
            >
              <path
                d="M7.28417 52.3329H41.6916C43.3456 52.3329 44.9217 51.6329 46.092 50.3829L54.6587 41.2329V38.9996H65.5817V30.6663H54.6587V15.6663H65.5817V7.33294L55.1893 7.33294L48.417 0.0996094V24.7996C48.417 36.3163 39.663 45.6663 28.8805 45.6663H0.106201L1.86948 48.9663C2.97739 51.0496 5.05276 52.3329 7.28417 52.3329Z"
                fill="#B01B1B"
              />
            </svg>
            {/* Your new SVG blue color*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="9"
              viewBox="0 0 7 11"
              fill="none"
              style={{ position: "absolute", left: "83px", top: "15px" }} // Adjust the position as per your requirement
              className="zindexOne"
            >
              <path
                d="M0 11H3.5C5.425 11 7 9.58571 7 7.85714L7 3.14286C7 1.41429 5.425 0 3.5 0L0 0L0 1.57143L0 9.42857L0 11Z"
                fill="#3D71D9"
              />
            </svg>
            {/* Your new SVG blue color*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="9"
              viewBox="0 0 7 11"
              fill="none"
              style={{ position: "absolute", left: "83px", top: "31px" }} // Adjust the position as per your
              className="zindexOne"
            >
              <path
                d="M0 11H3.5C5.425 11 7 9.58571 7 7.85714L7 3.14286C7 1.41429 5.425 0 3.5 0L0 0L0 1.57143L0 9.42857L0 11Z"
                fill="#3D71D9"
              />
            </svg>
            {/* Your new 2 SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 6 5"
              fill="none"
              style={{ position: "absolute", left: "95%", top: "17px" }} // Adjust the position as per your requirement
              className="zindexZero"
            >
              <path
                d="M0.823486 5L0.823486 0L5.50477 0V5H0.823486Z"
                fill="#666666"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="12"
              viewBox="0 0 15 15"
              fill="none"
              style={{ position: "absolute", left: "93%", top: "24px" }} // Adjust the position as per your requirement
              className="zindexZero"
            >
              <path
                d="M0 13.4134C0 12.5008 1.18623 11.8269 2.08639 11.8269C3.88427 11.8269 5.22005 10.0862 5.22005 8.26332V6.61066C5.22005 2.9655 8.14487 0 11.74 0L13.37 0C14.2702 0 15 0.739981 15 1.65266C15 2.56535 14.2702 3.17312 13.37 3.17312L11.74 3.30533C9.94214 3.30533 8.48003 4.78777 8.48003 6.61066V8.26332C8.48003 11.9085 5.15994 15 1.56479 15C0.664629 15 0 14.3261 0 13.4134Z"
                fill="#E11B22"
              />
            </svg>

            {/* here start red lines */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="800"
              height="100"
              viewBox="0 0 1000 100"
              style={{ position: "absolute", left: "95px", top: "-24px" }}
              className="zindexZero"
            >
              {/* Inline CSS for the pulsating animation */}
              <style>
                {`
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
    `}
              </style>

              {/* The path that represents the straight line */}
              <path
                id="motionPath0"
                d="M0 50 L1000 50" // Straight line from (0, 50) to (1000, 50)
                fill="none"
                stroke="#E11B22"
                strokeOpacity="0.3"
                strokeWidth="3"
              />

              {/* The red ball that will move along the path */}
              {showBloodGoing && (
                <circle
                  id="movingBall"
                  cx="1"
                  cy="1" // Positioned at y-coordinate 50 to align with the straight line
                  r="5"
                  fill="#E11B22"
                  style={{
                    animation: "pulse 1s infinite alternate", // Apply the pulsating animation
                  }}
                  className="zindextwo"
                >
                  {/* Animation to move the ball along the path */}
                  <animateMotion
                    dur="10s" // Increased duration to slow down the movement
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath href="#motionPath0" />
                  </animateMotion>
                </circle>
              )}
            </svg>

            {/* end red line 1 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="894"
              height="112"
              viewBox="0 0 904 126"
              fill="none"
              style={{ position: "absolute", left: "55%", top: "24px" }}
              className="zindexZero"
            >
              {/* Inline CSS for the pulsating animation */}
              <style>
                {`
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    `}
              </style>

              {/* The path that represents the line */}
              <path
                id="motionPath1"
                d="M0.202148 1.5131C0.202148 1.5131 248 1.51303 412.5 1.51172C577 1.51041 903.202 124.513 903.202 124.513"
                stroke="#E11B22"
                strokeOpacity="0.4"
                strokeWidth="3"
              />

              {/* The red ball that will move along the path */}
              {showBloodGoing && (
                <circle
                  id="movingBall"
                  cx="1"
                  cy="1"
                  r="5"
                  fill="#E11B22"
                  className="zindextwo"
                  style={{
                    animation: "pulse 1s infinite alternate", // Apply the pulsating animation
                  }}
                >
                  {/* Animation to move the ball along the path */}
                  <animateMotion
                    dur="10s" // Increased duration to slow down the movement
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath href="#motionPath1" />
                  </animateMotion>
                </circle>
              )}
            </svg>

            {/* end red line 2 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="800"
              height="220"
              viewBox="0 0 904 247"
              fill="none"
              style={{ position: "absolute", left: "108%", top: "22px" }}
              className="zindexZero"
            >
              {/* Pulsating animation */}
              <style>
                {`
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    `}
              </style>

              {/* The path that represents the line */}
              <path
                id="motionPath2"
                d="M0.123535 1.77108C0.123535 1.77108 238.124 1.77077 423.624 1.76758C609.123 1.76438 902.623 245.27 902.623 245.27"
                stroke="#E11B22"
                strokeOpacity="0.4"
                strokeWidth="3"
              />

              {/* The red ball that will move along the path */}
              {showBloodGoing && (
                <circle
                  cx="1"
                  cy="1"
                  r="5"
                  fill="#E11B22"
                  className="zindextwo"
                  style={{
                    animation: "pulse 1s infinite alternate",
                  }}
                >
                  {/* Animation to move the ball along the path */}
                  <animateMotion
                    dur="10s"
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath href="#motionPath2" />
                  </animateMotion>
                </circle>
              )}
            </svg>

            {/* end  red line 3*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="864"
              height="326"
              viewBox="0 0 905 367"
              fill="none"
              style={{ position: "absolute", left: "70%", top: "24px" }} // Adjust the position as per your requirement
              className="zindexZero"
            >
              {/* Pulsating animation */}
              <style>
                {`
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    `}
              </style>
              {/* The path that represents the line */}
              <path
                id="motionPath3"
                d="M0.123047 1.77303C0.123047 1.77303 238.124 1.77272 423.623 1.76953C609.123 1.76634 903.5 365.5 903.5 365.5"
                stroke="#E11B22"
                stroke-opacity="0.4"
                stroke-width="3"
              />

              {/* The red ball that will move along the path */}
              {showBloodGoing && (
                <circle
                  cx="1"
                  cy="1"
                  r="5"
                  fill="#E11B22"
                  className="zindextwo"
                  style={{
                    animation: "pulse 1s infinite alternate",
                  }}
                >
                  {/* Animation to move the ball along the path */}
                  <animateMotion
                    dur="10s"
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath href="#motionPath3" />
                  </animateMotion>
                </circle>
              )}
            </svg>
            {/* end red line 4*/}
          </div>
          {/* end first blood bag 1 */}

          {/* here remove start */}

          <div className="mt-12">
            <div
              className="mr-6"
              style={{
                position: "relative",
                width: "90px",
                height: "58px",
              }}
            >
              {/* Main SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="48"
                viewBox="0 0 75 70"
                fill="none"
                className="zindextwo cursor-pointer"
                style={{
                  position: "absolute",
                  left: "46%",
                  top: "49%",
                  transform: "translate(-20%, -50%)",
                }}
                onClick={handleBloodGoing2}
              >
                <path
                  d="M14.0438 70H60.8567L74.9005 55V50H68.6588V52.2333L60.0921 61.3833C58.9217 62.6333 57.3457 63.3333 55.6917 63.3333H21.2842C19.0528 63.3333 16.9775 62.05 15.8695 59.9667L14.0282 56.5333C13.1076 54.8167 11.8436 53.3333 10.3144 52.2167C9.89311 51.8833 9.61223 51.3833 9.61223 50.8167L9.61223 19.1833C9.61223 18.6167 9.89311 18.1167 10.3144 17.8C11.8436 16.6667 13.1076 15.1833 14.0282 13.4667L15.8695 10.0333C16.9775 7.95 19.0528 6.66667 21.2842 6.66667L55.6917 6.66667C57.3457 6.66667 58.9217 7.36667 60.0921 8.61667L69.1894 18.3333H74.9005V15L60.8567 0L14.0438 0L7.80214 11.6667L3.02723 14.7167C1.15472 15.9333 0 18.1 0 20.4333L0 49.5667C0 51.9 1.15472 54.0667 3.02723 55.2833L7.80214 58.3333L14.0438 70Z"
                  fill="#F2F2F2"
                />
              </svg>
              {/* main white end */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="48"
                viewBox="0 0 75 35"
                fill="none"
                style={{
                  position: "absolute",
                  left: "46%",
                  top: "70%",
                  transform: "translate(-20%, -50%)",
                }}
              >
                <path
                  d="M14.0438 35L60.8567 35L74.9005 20V15H68.6588V17.2333L60.0921 26.3833C58.9217 27.6333 57.3457 28.3333 55.6917 28.3333L21.2842 28.3333C19.0528 28.3333 16.9775 27.05 15.8695 24.9667L14.0282 21.5333C13.1076 19.8167 11.8436 18.3333 10.3144 17.2167C9.89311 16.8833 9.61223 16.3833 9.61223 15.8167L9.61223 0L0 0L0 14.5667C0 16.9 1.15472 19.0667 3.02723 20.2833L7.80214 23.3333L14.0438 35Z"
                  fill="#CCCCCC"
                />
              </svg>
              {/* main white black end */}

              {/* jhapsa side erta */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="16"
                viewBox="0 0 7 16"
                fill="none"
                style={{
                  position: "absolute",
                  left: "84.5%",
                  top: "50%",
                  transform: "translate(-20%, -50%)",
                }}
                className="cursor-pointer"
                onClick={handleBloodGoing}
              >
                <path
                  d="M0.658691 15.666L0.658691 0.666016L6.9004 0.666016L6.9004 15.666H0.658691Z"
                  fill="#8BAAE8"
                />
              </svg>
              {/* end main jhapsa ta */}
              {/* start dots svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 7 7"
                fill="none"
                style={{
                  position: "absolute",
                  left: "48%",
                  top: "23%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M6.74708 3.66732C6.74708 5.50827 5.34983 7.00065 3.62623 7.00065C1.90263 7.00065 0.505371 5.50827 0.505371 3.66732C0.505371 1.82637 1.90263 0.333984 3.62623 0.333984C5.34983 0.333984 6.74708 1.82637 6.74708 3.66732Z"
                  fill="#F27979"
                />
              </svg>
              {/* end dot 1 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                style={{
                  position: "absolute",
                  left: "58%",
                  top: "22%",
                }}
                className="zindexOne animate-ping cursor-pointer"
                onClick={handleBloodGoing}
              >
                <path
                  d="M3.3296 1.66667C3.3296 2.58714 2.63097 3.33333 1.76917 3.33333C0.907367 3.33333 0.20874 2.58714 0.20874 1.66667C0.20874 0.746192 0.907367 0 1.76917 0C2.63097 0 3.3296 0.746192 3.3296 1.66667Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 2 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="5"
                viewBox="0 0 5 6"
                fill="none"
                style={{
                  position: "absolute",
                  left: "72%",
                  top: "23%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M4.8346 3.16602C4.8346 4.54673 3.78666 5.66602 2.49396 5.66602C1.20126 5.66602 0.15332 4.54673 0.15332 3.16602C0.15332 1.7853 1.20126 0.666016 2.49396 0.666016C3.78666 0.666016 4.8346 1.7853 4.8346 3.16602Z"
                  fill="#F27979"
                />
              </svg>
              {/* end dot 3 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 7 8"
                fill="none"
                style={{
                  position: "absolute",
                  left: "78%",
                  top: "31%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M7.00856 3.96615C7.00856 5.8071 5.6113 7.29948 3.8877 7.29948C2.1641 7.29948 0.766846 5.8071 0.766846 3.96615C0.766846 2.1252 2.1641 0.632813 3.8877 0.632813C5.6113 0.632813 7.00856 2.1252 7.00856 3.96615Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 4  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="4"
                viewBox="0 0 6 5"
                fill="none"
                style={{
                  position: "absolute",
                  left: "78%",
                  top: "46%",
                }}
                className="zindexOne animate-ping"
              >
                <path
                  d="M5.53822 2.5C5.53822 3.88071 4.49028 5 3.19757 5C1.90487 5 0.856934 3.88071 0.856934 2.5C0.856934 1.11929 1.90487 0 3.19757 0C4.49028 0 5.53822 1.11929 5.53822 2.5Z"
                  fill="#F27979"
                />
              </svg>
              {/* end dot 5 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="3"
                viewBox="0 0 4 4"
                fill="none"
                style={{
                  position: "absolute",
                  left: "77%",
                  top: "60%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M3.41724 1.66667C3.41724 2.58714 2.71861 3.33333 1.85681 3.33333C0.995014 3.33333 0.296387 2.58714 0.296387 1.66667C0.296387 0.746192 0.995014 0 1.85681 0C2.71861 0 3.41724 0.746192 3.41724 1.66667Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 6 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="5"
                viewBox="0 0 5 6"
                fill="none"
                style={{
                  position: "absolute",
                  left: "76%",
                  top: "67%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M4.97767 3.16602C4.97767 4.54673 3.92973 5.66602 2.63703 5.66602C1.34433 5.66602 0.296387 4.54673 0.296387 3.16602C0.296387 1.7853 1.34433 0.666016 2.63703 0.666016C3.92973 0.666016 4.97767 1.7853 4.97767 3.16602Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 7 */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 6 6"
                fill="none"
                style={{
                  position: "absolute",
                  left: "67%",
                  top: "71%",
                }}
                className="zindexOne animate-ping"
              >
                <path
                  d="M5.61488 2.83398C5.61488 4.2147 4.56694 5.33398 3.27424 5.33398C1.98153 5.33398 0.933594 4.2147 0.933594 2.83398C0.933594 1.45327 1.98153 0.333984 3.27424 0.333984C4.56694 0.333984 5.61488 1.45327 5.61488 2.83398Z"
                  fill="#F27979"
                />
              </svg>
              {/* end dot 8 */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 7 8"
                fill="none"
                style={{
                  position: "absolute",
                  left: "58%",
                  top: "71%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M6.38819 3.76693C6.38819 5.60788 4.99094 7.10026 3.26734 7.10026C1.54374 7.10026 0.146484 5.60788 0.146484 3.76693C0.146484 1.92598 1.54374 0.433594 3.26734 0.433594C4.99094 0.433594 6.38819 1.92598 6.38819 3.76693Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 9 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 7 8"
                fill="none"
                style={{
                  position: "absolute",
                  left: "49%",
                  top: "68%",
                }}
                className="zindexOne animate-ping"
              >
                <path
                  d="M6.38819 3.76693C6.38819 5.60788 4.99094 7.10026 3.26734 7.10026C1.54374 7.10026 0.146484 5.60788 0.146484 3.76693C0.146484 1.92598 1.54374 0.433594 3.26734 0.433594C4.99094 0.433594 6.38819 1.92598 6.38819 3.76693Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 10 */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="5"
                viewBox="0 0 5 6"
                fill="none"
                style={{
                  position: "absolute",
                  left: "44%",
                  top: "50%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M4.72523 3.16602C4.72523 4.54673 3.67729 5.66602 2.38459 5.66602C1.09189 5.66602 0.0439453 4.54673 0.0439453 3.16602C0.0439453 1.7853 1.09189 0.666016 2.38459 0.666016C3.67729 0.666016 4.72523 1.7853 4.72523 3.16602Z"
                  fill="#F27979"
                />
              </svg>
              {/* end dot 11 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                style={{
                  position: "absolute",
                  left: "45%",
                  top: "37%",
                }}
                className="zindexOne animate-ping"
              >
                <path
                  d="M3.7251 2.00065C3.7251 2.92113 3.02648 3.66732 2.16468 3.66732C1.30288 3.66732 0.604248 2.92113 0.604248 2.00065C0.604248 1.08018 1.30288 0.333984 2.16468 0.333984C3.02648 0.333984 3.7251 1.08018 3.7251 2.00065Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 12 */}
              {/* End dots svg */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="40"
                viewBox="0 0 71 58"
                fill="none"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "49%",
                  transform: "translate(-20%, -50%)",
                }}
              >
                <path
                  d="M12.2843 57.3327H46.6917C48.3458 57.3327 49.9218 56.6327 51.0921 55.3827L59.6589 46.2327V43.9994H70.5819V35.666H59.6589V20.666H70.5819V12.3327L60.1894 12.3327L51.0921 2.61602C49.9218 1.36602 48.3458 0.666016 46.6917 0.666016L12.2843 0.666016C10.0529 0.666016 7.97752 1.94935 6.86962 4.03268L5.02831 7.46602C4.10766 9.18268 2.84372 10.666 1.3145 11.7993C0.893181 12.116 0.612305 12.616 0.612305 13.1827L0.612305 44.816C0.612305 45.3827 0.893181 45.8827 1.3145 46.216C2.84372 47.3327 4.10766 48.816 5.02831 50.5327L6.86962 53.966C7.97752 56.0494 10.0529 57.3327 12.2843 57.3327Z"
                  fill="#E11B22"
                />
              </svg>

              {/* Smaller SVG positioned to the right */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 34 34"
                fill="none"
                style={{ position: "absolute", left: "47px", top: "17px" }} // Adjust the position as per your requirement
              >
                <path
                  d="M0.406494 17.0007C0.406494 26.2007 7.39721 33.6673 16.0108 33.6673C24.6243 33.6673 31.615 26.2007 31.615 17.0007C31.615 7.80065 24.6243 0.333984 16.0108 0.333984C7.39721 0.333984 0.406494 7.80065 0.406494 17.0007Z"
                  fill="#F2F2F2"
                />
              </svg>

              {/* Add text in the middle of the SVG */}
              <text
                style={{
                  position: "absolute",
                  left: "50px",
                  top: "14px",
                  color: "#E11B22",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                A
              </text>

              {/* Your new SVG */}
              {/* here under black half start */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="36"
                viewBox="0 0 66 53"
                fill="none"
                className="zindexZero"
                style={{
                  position: "absolute",
                  left: "47px",
                  top: "19px",
                  transform: "translate(-20%, -20%)",
                }}
              >
                <path
                  d="M7.28417 52.3329H41.6916C43.3456 52.3329 44.9217 51.6329 46.092 50.3829L54.6587 41.2329V38.9996H65.5817V30.6663H54.6587V15.6663H65.5817V7.33294L55.1893 7.33294L48.417 0.0996094V24.7996C48.417 36.3163 39.663 45.6663 28.8805 45.6663H0.106201L1.86948 48.9663C2.97739 51.0496 5.05276 52.3329 7.28417 52.3329Z"
                  fill="#B01B1B"
                />
              </svg>
              {/* Your new SVG blue color*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="9"
                viewBox="0 0 7 11"
                fill="none"
                style={{ position: "absolute", left: "83px", top: "15px" }} // Adjust the position as per your requirement
                className="zindexOne"
              >
                <path
                  d="M0 11H3.5C5.425 11 7 9.58571 7 7.85714L7 3.14286C7 1.41429 5.425 0 3.5 0L0 0L0 1.57143L0 9.42857L0 11Z"
                  fill="#3D71D9"
                />
              </svg>
              {/* Your new SVG blue color*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="9"
                viewBox="0 0 7 11"
                fill="none"
                style={{ position: "absolute", left: "83px", top: "31px" }} // Adjust the position as per your
                className="zindexOne"
              >
                <path
                  d="M0 11H3.5C5.425 11 7 9.58571 7 7.85714L7 3.14286C7 1.41429 5.425 0 3.5 0L0 0L0 1.57143L0 9.42857L0 11Z"
                  fill="#3D71D9"
                />
              </svg>
              {/* Your new 2 SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 6 5"
                fill="none"
                style={{ position: "absolute", left: "95%", top: "17px" }} // Adjust the position as per your requirement
                className="zindexZero"
              >
                <path
                  d="M0.823486 5L0.823486 0L5.50477 0V5H0.823486Z"
                  fill="#666666"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                viewBox="0 0 15 15"
                fill="none"
                style={{ position: "absolute", left: "93%", top: "24px" }} // Adjust the position as per your requirement
                className="zindexZero"
              >
                <path
                  d="M0 13.4134C0 12.5008 1.18623 11.8269 2.08639 11.8269C3.88427 11.8269 5.22005 10.0862 5.22005 8.26332V6.61066C5.22005 2.9655 8.14487 0 11.74 0L13.37 0C14.2702 0 15 0.739981 15 1.65266C15 2.56535 14.2702 3.17312 13.37 3.17312L11.74 3.30533C9.94214 3.30533 8.48003 4.78777 8.48003 6.61066V8.26332C8.48003 11.9085 5.15994 15 1.56479 15C0.664629 15 0 14.3261 0 13.4134Z"
                  fill="#E11B22"
                />
              </svg>

              {/* here start red lines */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="800"
                height="100"
                viewBox="0 0 1000 100"
                style={{ position: "absolute", left: "95px", top: "-24px" }}
                className="zindexZero"
              >
                {/* Inline CSS for the pulsating animation */}
                <style>
                  {`
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
    `}
                </style>

                {/* The path that represents the straight line */}
                <path
                  id="motionPath0"
                  d="M0 50 L1000 50" // Straight line from (0, 50) to (1000, 50)
                  fill="none"
                  stroke="#E11B22"
                  strokeOpacity="0.3"
                  strokeWidth="3"
                />

                {/* The red ball that will move along the path */}
                {showBloodGoing2 && (
                  <circle
                    id="movingBall"
                    cx="1"
                    cy="1" // Positioned at y-coordinate 50 to align with the straight line
                    r="5"
                    fill="#E11B22"
                    style={{
                      animation: "pulse 1s infinite alternate", // Apply the pulsating animation
                    }}
                    className="zindextwo"
                  >
                    {/* Animation to move the ball along the path */}
                    <animateMotion
                      dur="10s" // Increased duration to slow down the movement
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#motionPath0" />
                    </animateMotion>
                  </circle>
                )}
              </svg>

              {/* end red line 1 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="800"
                height="220"
                viewBox="0 0 904 247"
                fill="none"
                style={{ position: "absolute", left: "108%", top: "23px" }} // Adjust the position as per your requirement
                className="zindexZero"
              >
                {/* Inline CSS for the pulsating animation */}
                <style>
                  {`
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
    `}
                </style>
                <path
                  id="motionPath2"
                  d="M0.123535 1.77108C0.123535 1.77108 238.124 1.77077 423.624 1.76758C609.123 1.76438 902.623 245.27 902.623 245.27"
                  stroke="#E11B22"
                  stroke-opacity="0.5"
                  stroke-width="3"
                />
                {/* The red ball that will move along the path */}
                {showBloodGoing2 && (
                  <circle
                    id="movingBall"
                    cx="1"
                    cy="1" // Positioned at y-coordinate 50 to align with the straight line
                    r="5"
                    fill="#E11B22"
                    style={{
                      animation: "pulse 1s infinite alternate", // Apply the pulsating animation
                    }}
                    className="zindextwo"
                  >
                    {/* Animation to move the ball along the path */}
                    <animateMotion
                      dur="10s" // Increased duration to slow down the movement
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#motionPath2" />
                    </animateMotion>
                  </circle>
                )}
              </svg>
              {/* end  red line 2*/}
            </div>
          </div>
          {/* end second blood bag 2 */}

          <div className="mt-12">
            <div
              className="mr-6"
              style={{
                position: "relative",
                width: "90px",
                height: "58px",
              }}
            >
              {/* Main SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="48"
                viewBox="0 0 75 70"
                fill="none"
                className="zindextwo cursor-pointer"
                style={{
                  position: "absolute",
                  left: "46%",
                  top: "49%",
                  transform: "translate(-20%, -50%)",
                }}
                onClick={handleBloodGoing3}
              >
                <path
                  d="M14.0438 70H60.8567L74.9005 55V50H68.6588V52.2333L60.0921 61.3833C58.9217 62.6333 57.3457 63.3333 55.6917 63.3333H21.2842C19.0528 63.3333 16.9775 62.05 15.8695 59.9667L14.0282 56.5333C13.1076 54.8167 11.8436 53.3333 10.3144 52.2167C9.89311 51.8833 9.61223 51.3833 9.61223 50.8167L9.61223 19.1833C9.61223 18.6167 9.89311 18.1167 10.3144 17.8C11.8436 16.6667 13.1076 15.1833 14.0282 13.4667L15.8695 10.0333C16.9775 7.95 19.0528 6.66667 21.2842 6.66667L55.6917 6.66667C57.3457 6.66667 58.9217 7.36667 60.0921 8.61667L69.1894 18.3333H74.9005V15L60.8567 0L14.0438 0L7.80214 11.6667L3.02723 14.7167C1.15472 15.9333 0 18.1 0 20.4333L0 49.5667C0 51.9 1.15472 54.0667 3.02723 55.2833L7.80214 58.3333L14.0438 70Z"
                  fill="#F2F2F2"
                />
              </svg>
              {/* main white end */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="48"
                viewBox="0 0 75 35"
                fill="none"
                style={{
                  position: "absolute",
                  left: "46%",
                  top: "70%",
                  transform: "translate(-20%, -50%)",
                }}
              >
                <path
                  d="M14.0438 35L60.8567 35L74.9005 20V15H68.6588V17.2333L60.0921 26.3833C58.9217 27.6333 57.3457 28.3333 55.6917 28.3333L21.2842 28.3333C19.0528 28.3333 16.9775 27.05 15.8695 24.9667L14.0282 21.5333C13.1076 19.8167 11.8436 18.3333 10.3144 17.2167C9.89311 16.8833 9.61223 16.3833 9.61223 15.8167L9.61223 0L0 0L0 14.5667C0 16.9 1.15472 19.0667 3.02723 20.2833L7.80214 23.3333L14.0438 35Z"
                  fill="#CCCCCC"
                />
              </svg>
              {/* main white black end */}

              {/* jhapsa side erta */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="16"
                viewBox="0 0 7 16"
                fill="none"
                style={{
                  position: "absolute",
                  left: "84.5%",
                  top: "50%",
                  transform: "translate(-20%, -50%)",
                }}
              >
                <path
                  d="M0.658691 15.666L0.658691 0.666016L6.9004 0.666016L6.9004 15.666H0.658691Z"
                  fill="#8BAAE8"
                />
              </svg>
              {/* end main jhapsa ta */}
              {/* start dots svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 7 7"
                fill="none"
                style={{
                  position: "absolute",
                  left: "48%",
                  top: "23%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M6.74708 3.66732C6.74708 5.50827 5.34983 7.00065 3.62623 7.00065C1.90263 7.00065 0.505371 5.50827 0.505371 3.66732C0.505371 1.82637 1.90263 0.333984 3.62623 0.333984C5.34983 0.333984 6.74708 1.82637 6.74708 3.66732Z"
                  fill="#F27979"
                />
              </svg>
              {/* end dot 1 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                style={{
                  position: "absolute",
                  left: "58%",
                  top: "22%",
                }}
                className="zindexOne animate-ping"
              >
                <path
                  d="M3.3296 1.66667C3.3296 2.58714 2.63097 3.33333 1.76917 3.33333C0.907367 3.33333 0.20874 2.58714 0.20874 1.66667C0.20874 0.746192 0.907367 0 1.76917 0C2.63097 0 3.3296 0.746192 3.3296 1.66667Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 2 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="5"
                viewBox="0 0 5 6"
                fill="none"
                style={{
                  position: "absolute",
                  left: "72%",
                  top: "23%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M4.8346 3.16602C4.8346 4.54673 3.78666 5.66602 2.49396 5.66602C1.20126 5.66602 0.15332 4.54673 0.15332 3.16602C0.15332 1.7853 1.20126 0.666016 2.49396 0.666016C3.78666 0.666016 4.8346 1.7853 4.8346 3.16602Z"
                  fill="#F27979"
                />
              </svg>
              {/* end dot 3 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 7 8"
                fill="none"
                style={{
                  position: "absolute",
                  left: "78%",
                  top: "31%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M7.00856 3.96615C7.00856 5.8071 5.6113 7.29948 3.8877 7.29948C2.1641 7.29948 0.766846 5.8071 0.766846 3.96615C0.766846 2.1252 2.1641 0.632813 3.8877 0.632813C5.6113 0.632813 7.00856 2.1252 7.00856 3.96615Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 4  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="4"
                viewBox="0 0 6 5"
                fill="none"
                style={{
                  position: "absolute",
                  left: "78%",
                  top: "46%",
                }}
                className="zindexOne animate-ping"
              >
                <path
                  d="M5.53822 2.5C5.53822 3.88071 4.49028 5 3.19757 5C1.90487 5 0.856934 3.88071 0.856934 2.5C0.856934 1.11929 1.90487 0 3.19757 0C4.49028 0 5.53822 1.11929 5.53822 2.5Z"
                  fill="#F27979"
                />
              </svg>
              {/* end dot 5 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="3"
                viewBox="0 0 4 4"
                fill="none"
                style={{
                  position: "absolute",
                  left: "77%",
                  top: "60%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M3.41724 1.66667C3.41724 2.58714 2.71861 3.33333 1.85681 3.33333C0.995014 3.33333 0.296387 2.58714 0.296387 1.66667C0.296387 0.746192 0.995014 0 1.85681 0C2.71861 0 3.41724 0.746192 3.41724 1.66667Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 6 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="5"
                viewBox="0 0 5 6"
                fill="none"
                style={{
                  position: "absolute",
                  left: "76%",
                  top: "67%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M4.97767 3.16602C4.97767 4.54673 3.92973 5.66602 2.63703 5.66602C1.34433 5.66602 0.296387 4.54673 0.296387 3.16602C0.296387 1.7853 1.34433 0.666016 2.63703 0.666016C3.92973 0.666016 4.97767 1.7853 4.97767 3.16602Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 7 */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 6 6"
                fill="none"
                style={{
                  position: "absolute",
                  left: "67%",
                  top: "71%",
                }}
                className="zindexOne animate-ping"
              >
                <path
                  d="M5.61488 2.83398C5.61488 4.2147 4.56694 5.33398 3.27424 5.33398C1.98153 5.33398 0.933594 4.2147 0.933594 2.83398C0.933594 1.45327 1.98153 0.333984 3.27424 0.333984C4.56694 0.333984 5.61488 1.45327 5.61488 2.83398Z"
                  fill="#F27979"
                />
              </svg>
              {/* end dot 8 */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 7 8"
                fill="none"
                style={{
                  position: "absolute",
                  left: "58%",
                  top: "71%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M6.38819 3.76693C6.38819 5.60788 4.99094 7.10026 3.26734 7.10026C1.54374 7.10026 0.146484 5.60788 0.146484 3.76693C0.146484 1.92598 1.54374 0.433594 3.26734 0.433594C4.99094 0.433594 6.38819 1.92598 6.38819 3.76693Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 9 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 7 8"
                fill="none"
                style={{
                  position: "absolute",
                  left: "49%",
                  top: "68%",
                }}
                className="zindexOne animate-ping"
              >
                <path
                  d="M6.38819 3.76693C6.38819 5.60788 4.99094 7.10026 3.26734 7.10026C1.54374 7.10026 0.146484 5.60788 0.146484 3.76693C0.146484 1.92598 1.54374 0.433594 3.26734 0.433594C4.99094 0.433594 6.38819 1.92598 6.38819 3.76693Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 10 */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="5"
                viewBox="0 0 5 6"
                fill="none"
                style={{
                  position: "absolute",
                  left: "44%",
                  top: "50%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M4.72523 3.16602C4.72523 4.54673 3.67729 5.66602 2.38459 5.66602C1.09189 5.66602 0.0439453 4.54673 0.0439453 3.16602C0.0439453 1.7853 1.09189 0.666016 2.38459 0.666016C3.67729 0.666016 4.72523 1.7853 4.72523 3.16602Z"
                  fill="#F27979"
                />
              </svg>
              {/* end dot 11 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                style={{
                  position: "absolute",
                  left: "45%",
                  top: "37%",
                }}
                className="zindexOne animate-ping"
              >
                <path
                  d="M3.7251 2.00065C3.7251 2.92113 3.02648 3.66732 2.16468 3.66732C1.30288 3.66732 0.604248 2.92113 0.604248 2.00065C0.604248 1.08018 1.30288 0.333984 2.16468 0.333984C3.02648 0.333984 3.7251 1.08018 3.7251 2.00065Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 12 */}
              {/* End dots svg */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="40"
                viewBox="0 0 71 58"
                fill="none"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "49%",
                  transform: "translate(-20%, -50%)",
                }}
              >
                <path
                  d="M12.2843 57.3327H46.6917C48.3458 57.3327 49.9218 56.6327 51.0921 55.3827L59.6589 46.2327V43.9994H70.5819V35.666H59.6589V20.666H70.5819V12.3327L60.1894 12.3327L51.0921 2.61602C49.9218 1.36602 48.3458 0.666016 46.6917 0.666016L12.2843 0.666016C10.0529 0.666016 7.97752 1.94935 6.86962 4.03268L5.02831 7.46602C4.10766 9.18268 2.84372 10.666 1.3145 11.7993C0.893181 12.116 0.612305 12.616 0.612305 13.1827L0.612305 44.816C0.612305 45.3827 0.893181 45.8827 1.3145 46.216C2.84372 47.3327 4.10766 48.816 5.02831 50.5327L6.86962 53.966C7.97752 56.0494 10.0529 57.3327 12.2843 57.3327Z"
                  fill="#E11B22"
                />
              </svg>

              {/* Smaller SVG positioned to the right */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 34 34"
                fill="none"
                style={{ position: "absolute", left: "47px", top: "17px" }} // Adjust the position as per your requirement
              >
                <path
                  d="M0.406494 17.0007C0.406494 26.2007 7.39721 33.6673 16.0108 33.6673C24.6243 33.6673 31.615 26.2007 31.615 17.0007C31.615 7.80065 24.6243 0.333984 16.0108 0.333984C7.39721 0.333984 0.406494 7.80065 0.406494 17.0007Z"
                  fill="#F2F2F2"
                />
              </svg>

              {/* Add text in the middle of the SVG */}
              <text
                style={{
                  position: "absolute",
                  left: "50px",
                  top: "14px",
                  color: "#E11B22",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                B
              </text>

              {/* Your new SVG */}
              {/* here under black half start */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="36"
                viewBox="0 0 66 53"
                fill="none"
                className="zindexZero"
                style={{
                  position: "absolute",
                  left: "47px",
                  top: "19px",
                  transform: "translate(-20%, -20%)",
                }}
              >
                <path
                  d="M7.28417 52.3329H41.6916C43.3456 52.3329 44.9217 51.6329 46.092 50.3829L54.6587 41.2329V38.9996H65.5817V30.6663H54.6587V15.6663H65.5817V7.33294L55.1893 7.33294L48.417 0.0996094V24.7996C48.417 36.3163 39.663 45.6663 28.8805 45.6663H0.106201L1.86948 48.9663C2.97739 51.0496 5.05276 52.3329 7.28417 52.3329Z"
                  fill="#B01B1B"
                />
              </svg>
              {/* Your new SVG blue color*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="9"
                viewBox="0 0 7 11"
                fill="none"
                style={{ position: "absolute", left: "83px", top: "15px" }} // Adjust the position as per your requirement
                className="zindexOne"
              >
                <path
                  d="M0 11H3.5C5.425 11 7 9.58571 7 7.85714L7 3.14286C7 1.41429 5.425 0 3.5 0L0 0L0 1.57143L0 9.42857L0 11Z"
                  fill="#3D71D9"
                />
              </svg>
              {/* Your new SVG blue color*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="9"
                viewBox="0 0 7 11"
                fill="none"
                style={{ position: "absolute", left: "83px", top: "31px" }} // Adjust the position as per your
                className="zindexOne"
              >
                <path
                  d="M0 11H3.5C5.425 11 7 9.58571 7 7.85714L7 3.14286C7 1.41429 5.425 0 3.5 0L0 0L0 1.57143L0 9.42857L0 11Z"
                  fill="#3D71D9"
                />
              </svg>
              {/* Your new 2 SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 6 5"
                fill="none"
                style={{ position: "absolute", left: "95%", top: "17px" }} // Adjust the position as per your requirement
                className="zindexZero"
              >
                <path
                  d="M0.823486 5L0.823486 0L5.50477 0V5H0.823486Z"
                  fill="#666666"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                viewBox="0 0 15 15"
                fill="none"
                style={{ position: "absolute", left: "93%", top: "24px" }} // Adjust the position as per your requirement
                className="zindexZero"
              >
                <path
                  d="M0 13.4134C0 12.5008 1.18623 11.8269 2.08639 11.8269C3.88427 11.8269 5.22005 10.0862 5.22005 8.26332V6.61066C5.22005 2.9655 8.14487 0 11.74 0L13.37 0C14.2702 0 15 0.739981 15 1.65266C15 2.56535 14.2702 3.17312 13.37 3.17312L11.74 3.30533C9.94214 3.30533 8.48003 4.78777 8.48003 6.61066V8.26332C8.48003 11.9085 5.15994 15 1.56479 15C0.664629 15 0 14.3261 0 13.4134Z"
                  fill="#E11B22"
                />
              </svg>

              {/* here start red lines */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="800"
                height="100"
                viewBox="0 0 1000 100"
                style={{ position: "absolute", left: "95px", top: "-24px" }}
                className="zindexZero"
              >
                {/* Inline CSS for the pulsating animation */}
                <style>
                  {`
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
    `}
                </style>

                {/* The path that represents the straight line */}
                <path
                  id="motionPath0"
                  d="M0 50 L1000 50" // Straight line from (0, 50) to (1000, 50)
                  fill="none"
                  stroke="#E11B22"
                  strokeOpacity="0.3"
                  strokeWidth="3"
                />

                {/* The red ball that will move along the path */}
                {showBloodGoing3 && (
                  <circle
                    id="movingBall"
                    cx="1"
                    cy="1" // Positioned at y-coordinate 50 to align with the straight line
                    r="5"
                    fill="#E11B22"
                    style={{
                      animation: "pulse 1s infinite alternate", // Apply the pulsating animation
                    }}
                    className="zindextwo"
                  >
                    {/* Animation to move the ball along the path */}
                    <animateMotion
                      dur="10s" // Increased duration to slow down the movement
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#motionPath0" />
                    </animateMotion>
                  </circle>
                )}
              </svg>

              {/* end red line 1 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="894"
                height="112"
                viewBox="0 0 904 126"
                fill="none"
                style={{ position: "absolute", left: "55%", top: "24px" }} // Adjust the position as per your requirement
                className="zindexZero"
              >
                {/* Inline CSS for the pulsating animation */}
                <style>
                  {`
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
    `}
                </style>
                <path
                  id="motionPath1"
                  d="M0.202148 1.5131C0.202148 1.5131 248 1.51303 412.5 1.51172C577 1.51041 903.202 124.513 903.202 124.513"
                  stroke="#E11B22"
                  stroke-opacity="0.4"
                  stroke-width="3"
                />
                {/* The red ball that will move along the path */}
                {showBloodGoing3 && (
                  <circle
                    id="movingBall"
                    cx="1"
                    cy="1" // Positioned at y-coordinate 50 to align with the straight line
                    r="5"
                    fill="#E11B22"
                    style={{
                      animation: "pulse 1s infinite alternate", // Apply the pulsating animation
                    }}
                    className="zindextwo"
                  >
                    {/* Animation to move the ball along the path */}
                    <animateMotion
                      dur="10s" // Increased duration to slow down the movement
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#motionPath1" />
                    </animateMotion>
                  </circle>
                )}
              </svg>
              {/* end red line 2 */}
            </div>
          </div>
          {/* end third blood bag 3 */}

          <div className="mt-12">
            <div
              className="mr-6"
              style={{
                position: "relative",
                width: "90px",
                height: "58px",
              }}
            >
              {/* Main SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="48"
                viewBox="0 0 75 70"
                fill="none"
                className="zindextwo"
                style={{
                  position: "absolute",
                  left: "46%",
                  top: "49%",
                  transform: "translate(-20%, -50%)",
                }}
                onClick={handleBloodGoing4}
              >
                <path
                  d="M14.0438 70H60.8567L74.9005 55V50H68.6588V52.2333L60.0921 61.3833C58.9217 62.6333 57.3457 63.3333 55.6917 63.3333H21.2842C19.0528 63.3333 16.9775 62.05 15.8695 59.9667L14.0282 56.5333C13.1076 54.8167 11.8436 53.3333 10.3144 52.2167C9.89311 51.8833 9.61223 51.3833 9.61223 50.8167L9.61223 19.1833C9.61223 18.6167 9.89311 18.1167 10.3144 17.8C11.8436 16.6667 13.1076 15.1833 14.0282 13.4667L15.8695 10.0333C16.9775 7.95 19.0528 6.66667 21.2842 6.66667L55.6917 6.66667C57.3457 6.66667 58.9217 7.36667 60.0921 8.61667L69.1894 18.3333H74.9005V15L60.8567 0L14.0438 0L7.80214 11.6667L3.02723 14.7167C1.15472 15.9333 0 18.1 0 20.4333L0 49.5667C0 51.9 1.15472 54.0667 3.02723 55.2833L7.80214 58.3333L14.0438 70Z"
                  fill="#F2F2F2"
                />
              </svg>
              {/* main white end */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="48"
                viewBox="0 0 75 35"
                fill="none"
                style={{
                  position: "absolute",
                  left: "46%",
                  top: "70%",
                  transform: "translate(-20%, -50%)",
                }}
              >
                <path
                  d="M14.0438 35L60.8567 35L74.9005 20V15H68.6588V17.2333L60.0921 26.3833C58.9217 27.6333 57.3457 28.3333 55.6917 28.3333L21.2842 28.3333C19.0528 28.3333 16.9775 27.05 15.8695 24.9667L14.0282 21.5333C13.1076 19.8167 11.8436 18.3333 10.3144 17.2167C9.89311 16.8833 9.61223 16.3833 9.61223 15.8167L9.61223 0L0 0L0 14.5667C0 16.9 1.15472 19.0667 3.02723 20.2833L7.80214 23.3333L14.0438 35Z"
                  fill="#CCCCCC"
                />
              </svg>
              {/* main white black end */}

              {/* jhapsa side erta */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="16"
                viewBox="0 0 7 16"
                fill="none"
                style={{
                  position: "absolute",
                  left: "84.5%",
                  top: "50%",
                  transform: "translate(-20%, -50%)",
                }}
              >
                <path
                  d="M0.658691 15.666L0.658691 0.666016L6.9004 0.666016L6.9004 15.666H0.658691Z"
                  fill="#8BAAE8"
                />
              </svg>
              {/* end main jhapsa ta */}
              {/* start dots svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 7 7"
                fill="none"
                style={{
                  position: "absolute",
                  left: "48%",
                  top: "23%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M6.74708 3.66732C6.74708 5.50827 5.34983 7.00065 3.62623 7.00065C1.90263 7.00065 0.505371 5.50827 0.505371 3.66732C0.505371 1.82637 1.90263 0.333984 3.62623 0.333984C5.34983 0.333984 6.74708 1.82637 6.74708 3.66732Z"
                  fill="#F27979"
                />
              </svg>
              {/* end dot 1 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                style={{
                  position: "absolute",
                  left: "58%",
                  top: "22%",
                }}
                className="zindexOne animate-ping"
              >
                <path
                  d="M3.3296 1.66667C3.3296 2.58714 2.63097 3.33333 1.76917 3.33333C0.907367 3.33333 0.20874 2.58714 0.20874 1.66667C0.20874 0.746192 0.907367 0 1.76917 0C2.63097 0 3.3296 0.746192 3.3296 1.66667Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 2 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="5"
                viewBox="0 0 5 6"
                fill="none"
                style={{
                  position: "absolute",
                  left: "72%",
                  top: "23%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M4.8346 3.16602C4.8346 4.54673 3.78666 5.66602 2.49396 5.66602C1.20126 5.66602 0.15332 4.54673 0.15332 3.16602C0.15332 1.7853 1.20126 0.666016 2.49396 0.666016C3.78666 0.666016 4.8346 1.7853 4.8346 3.16602Z"
                  fill="#F27979"
                />
              </svg>
              {/* end dot 3 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 7 8"
                fill="none"
                style={{
                  position: "absolute",
                  left: "78%",
                  top: "31%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M7.00856 3.96615C7.00856 5.8071 5.6113 7.29948 3.8877 7.29948C2.1641 7.29948 0.766846 5.8071 0.766846 3.96615C0.766846 2.1252 2.1641 0.632813 3.8877 0.632813C5.6113 0.632813 7.00856 2.1252 7.00856 3.96615Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 4  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="4"
                viewBox="0 0 6 5"
                fill="none"
                style={{
                  position: "absolute",
                  left: "78%",
                  top: "46%",
                }}
                className="zindexOne animate-ping"
              >
                <path
                  d="M5.53822 2.5C5.53822 3.88071 4.49028 5 3.19757 5C1.90487 5 0.856934 3.88071 0.856934 2.5C0.856934 1.11929 1.90487 0 3.19757 0C4.49028 0 5.53822 1.11929 5.53822 2.5Z"
                  fill="#F27979"
                />
              </svg>
              {/* end dot 5 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="3"
                viewBox="0 0 4 4"
                fill="none"
                style={{
                  position: "absolute",
                  left: "77%",
                  top: "60%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M3.41724 1.66667C3.41724 2.58714 2.71861 3.33333 1.85681 3.33333C0.995014 3.33333 0.296387 2.58714 0.296387 1.66667C0.296387 0.746192 0.995014 0 1.85681 0C2.71861 0 3.41724 0.746192 3.41724 1.66667Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 6 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="5"
                viewBox="0 0 5 6"
                fill="none"
                style={{
                  position: "absolute",
                  left: "76%",
                  top: "67%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M4.97767 3.16602C4.97767 4.54673 3.92973 5.66602 2.63703 5.66602C1.34433 5.66602 0.296387 4.54673 0.296387 3.16602C0.296387 1.7853 1.34433 0.666016 2.63703 0.666016C3.92973 0.666016 4.97767 1.7853 4.97767 3.16602Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 7 */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 6 6"
                fill="none"
                style={{
                  position: "absolute",
                  left: "67%",
                  top: "71%",
                }}
                className="zindexOne animate-ping"
              >
                <path
                  d="M5.61488 2.83398C5.61488 4.2147 4.56694 5.33398 3.27424 5.33398C1.98153 5.33398 0.933594 4.2147 0.933594 2.83398C0.933594 1.45327 1.98153 0.333984 3.27424 0.333984C4.56694 0.333984 5.61488 1.45327 5.61488 2.83398Z"
                  fill="#F27979"
                />
              </svg>
              {/* end dot 8 */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 7 8"
                fill="none"
                style={{
                  position: "absolute",
                  left: "58%",
                  top: "71%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M6.38819 3.76693C6.38819 5.60788 4.99094 7.10026 3.26734 7.10026C1.54374 7.10026 0.146484 5.60788 0.146484 3.76693C0.146484 1.92598 1.54374 0.433594 3.26734 0.433594C4.99094 0.433594 6.38819 1.92598 6.38819 3.76693Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 9 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 7 8"
                fill="none"
                style={{
                  position: "absolute",
                  left: "49%",
                  top: "68%",
                }}
                className="zindexOne animate-ping"
              >
                <path
                  d="M6.38819 3.76693C6.38819 5.60788 4.99094 7.10026 3.26734 7.10026C1.54374 7.10026 0.146484 5.60788 0.146484 3.76693C0.146484 1.92598 1.54374 0.433594 3.26734 0.433594C4.99094 0.433594 6.38819 1.92598 6.38819 3.76693Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 10 */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="5"
                viewBox="0 0 5 6"
                fill="none"
                style={{
                  position: "absolute",
                  left: "44%",
                  top: "50%",
                }}
                className="zindexOne animate-pulse"
              >
                <path
                  d="M4.72523 3.16602C4.72523 4.54673 3.67729 5.66602 2.38459 5.66602C1.09189 5.66602 0.0439453 4.54673 0.0439453 3.16602C0.0439453 1.7853 1.09189 0.666016 2.38459 0.666016C3.67729 0.666016 4.72523 1.7853 4.72523 3.16602Z"
                  fill="#F27979"
                />
              </svg>
              {/* end dot 11 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                style={{
                  position: "absolute",
                  left: "45%",
                  top: "37%",
                }}
                className="zindexOne animate-ping"
              >
                <path
                  d="M3.7251 2.00065C3.7251 2.92113 3.02648 3.66732 2.16468 3.66732C1.30288 3.66732 0.604248 2.92113 0.604248 2.00065C0.604248 1.08018 1.30288 0.333984 2.16468 0.333984C3.02648 0.333984 3.7251 1.08018 3.7251 2.00065Z"
                  fill="#73020C"
                />
              </svg>
              {/* end dot 12 */}
              {/* End dots svg */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="40"
                viewBox="0 0 71 58"
                fill="none"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "49%",
                  transform: "translate(-20%, -50%)",
                }}
              >
                <path
                  d="M12.2843 57.3327H46.6917C48.3458 57.3327 49.9218 56.6327 51.0921 55.3827L59.6589 46.2327V43.9994H70.5819V35.666H59.6589V20.666H70.5819V12.3327L60.1894 12.3327L51.0921 2.61602C49.9218 1.36602 48.3458 0.666016 46.6917 0.666016L12.2843 0.666016C10.0529 0.666016 7.97752 1.94935 6.86962 4.03268L5.02831 7.46602C4.10766 9.18268 2.84372 10.666 1.3145 11.7993C0.893181 12.116 0.612305 12.616 0.612305 13.1827L0.612305 44.816C0.612305 45.3827 0.893181 45.8827 1.3145 46.216C2.84372 47.3327 4.10766 48.816 5.02831 50.5327L6.86962 53.966C7.97752 56.0494 10.0529 57.3327 12.2843 57.3327Z"
                  fill="#E11B22"
                />
              </svg>

              {/* Smaller SVG positioned to the right */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 34 34"
                fill="none"
                style={{ position: "absolute", left: "47px", top: "17px" }} // Adjust the position as per your requirement
              >
                <path
                  d="M0.406494 17.0007C0.406494 26.2007 7.39721 33.6673 16.0108 33.6673C24.6243 33.6673 31.615 26.2007 31.615 17.0007C31.615 7.80065 24.6243 0.333984 16.0108 0.333984C7.39721 0.333984 0.406494 7.80065 0.406494 17.0007Z"
                  fill="#F2F2F2"
                />
              </svg>

              {/* Add text in the middle of the SVG */}
              <text
                style={{
                  position: "absolute",
                  left: "50px",
                  top: "18px",
                  color: "#E11B22",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                AB
              </text>

              {/* Your new SVG */}
              {/* here under black half start */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="36"
                viewBox="0 0 66 53"
                fill="none"
                className="zindexZero"
                style={{
                  position: "absolute",
                  left: "47px",
                  top: "19px",
                  transform: "translate(-20%, -20%)",
                }}
              >
                <path
                  d="M7.28417 52.3329H41.6916C43.3456 52.3329 44.9217 51.6329 46.092 50.3829L54.6587 41.2329V38.9996H65.5817V30.6663H54.6587V15.6663H65.5817V7.33294L55.1893 7.33294L48.417 0.0996094V24.7996C48.417 36.3163 39.663 45.6663 28.8805 45.6663H0.106201L1.86948 48.9663C2.97739 51.0496 5.05276 52.3329 7.28417 52.3329Z"
                  fill="#B01B1B"
                />
              </svg>
              {/* Your new SVG blue color*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="9"
                viewBox="0 0 7 11"
                fill="none"
                style={{ position: "absolute", left: "83px", top: "15px" }} // Adjust the position as per your requirement
                className="zindexOne"
              >
                <path
                  d="M0 11H3.5C5.425 11 7 9.58571 7 7.85714L7 3.14286C7 1.41429 5.425 0 3.5 0L0 0L0 1.57143L0 9.42857L0 11Z"
                  fill="#3D71D9"
                />
              </svg>
              {/* Your new SVG blue color*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="9"
                viewBox="0 0 7 11"
                fill="none"
                style={{ position: "absolute", left: "83px", top: "31px" }} // Adjust the position as per your
                className="zindexOne"
              >
                <path
                  d="M0 11H3.5C5.425 11 7 9.58571 7 7.85714L7 3.14286C7 1.41429 5.425 0 3.5 0L0 0L0 1.57143L0 9.42857L0 11Z"
                  fill="#3D71D9"
                />
              </svg>
              {/* Your new 2 SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 6 5"
                fill="none"
                style={{ position: "absolute", left: "95%", top: "17px" }} // Adjust the position as per your requirement
                className="zindexZero"
              >
                <path
                  d="M0.823486 5L0.823486 0L5.50477 0V5H0.823486Z"
                  fill="#666666"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                viewBox="0 0 15 15"
                fill="none"
                style={{ position: "absolute", left: "93%", top: "24px" }} // Adjust the position as per your requirement
                className="zindexZero"
              >
                <path
                  d="M0 13.4134C0 12.5008 1.18623 11.8269 2.08639 11.8269C3.88427 11.8269 5.22005 10.0862 5.22005 8.26332V6.61066C5.22005 2.9655 8.14487 0 11.74 0L13.37 0C14.2702 0 15 0.739981 15 1.65266C15 2.56535 14.2702 3.17312 13.37 3.17312L11.74 3.30533C9.94214 3.30533 8.48003 4.78777 8.48003 6.61066V8.26332C8.48003 11.9085 5.15994 15 1.56479 15C0.664629 15 0 14.3261 0 13.4134Z"
                  fill="#E11B22"
                />
              </svg>

              {/* here start red lines */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="800"
                height="100"
                viewBox="0 0 1000 100"
                style={{ position: "absolute", left: "95px", top: "-24px" }}
                className="zindexZero"
              >
                {/* Inline CSS for the pulsating animation */}
                <style>
                  {`
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
    `}
                </style>

                {/* The path that represents the straight line */}
                <path
                  id="motionPath0"
                  d="M0 50 L1000 50" // Straight line from (0, 50) to (1000, 50)
                  fill="none"
                  stroke="#E11B22"
                  strokeOpacity="0.3"
                  strokeWidth="3"
                />

                {/* The red ball that will move along the path */}
                {showBloodGoing4 && (
                  <circle
                    id="movingBall"
                    cx="1"
                    cy="1" // Positioned at y-coordinate 50 to align with the straight line
                    r="5"
                    fill="#E11B22"
                    style={{
                      animation: "pulse 1s infinite alternate", // Apply the pulsating animation
                    }}
                    className="zindextwo"
                  >
                    {/* Animation to move the ball along the path */}
                    <animateMotion
                      dur="10s" // Increased duration to slow down the movement
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#motionPath0" />
                    </animateMotion>
                  </circle>
                )}
              </svg>

              {/* end red line 1 */}
            </div>
          </div>

          {/* end third blood bag 4 */}

          {/* here remove end */}
        </div>
        <div className="col-span-8"></div>
        <div className="col-span-2 h-96 -ml-1">
          <div className="-mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 25 25"
              fill="none"
            >
              {/* Your SVG content */}
              <circle cx="12.5" cy="12.5" r="10" fill="#E11B22" />

              {/* Add text in the middle of the SVG */}
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#fff"
                fontSize="7"
                fontFamily="Arial"
                fontWeight="500"
              >
                O
              </text>
            </svg>
          </div>
          {/* end O */}
          <div className="mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 25 25"
              fill="none"
            >
              {/* Your SVG content */}
              <circle cx="12.5" cy="12.5" r="10" fill="#E11B22" />

              {/* Add text in the middle of the SVG */}
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#fff"
                fontSize="7"
                fontFamily="Arial"
                fontWeight="500"
              >
                A
              </text>
            </svg>
          </div>
          {/* end A */}
          <div className="mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 25 25"
              fill="none"
            >
              {/* Your SVG content */}
              <circle cx="12.5" cy="12.5" r="10" fill="#E11B22" />

              {/* Add text in the middle of the SVG */}
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#fff"
                fontSize="7"
                fontFamily="Arial"
                fontWeight="500"
              >
                B
              </text>
            </svg>
          </div>
          {/* end B*/}
          <div className="mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 25 25"
              fill="none"
            >
              {/* Your SVG content */}
              <circle cx="12.5" cy="12.5" r="10" fill="#E11B22" />

              {/* Add text in the middle of the SVG */}
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#fff"
                fontSize="7"
                fontFamily="Arial"
                fontWeight="500"
              >
                AB
              </text>
            </svg>
          </div>
          {/* end AB*/}
        </div>
      </div>
    </div>
  );
};

export default MediumDeviceAnimation;
