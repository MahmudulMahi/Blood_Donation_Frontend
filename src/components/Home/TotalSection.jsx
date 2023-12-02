import React from "react";
import carouselBanner from "../../assets/card.png";
import TotalDonors from "../../assets/icons/TotalDonors.png";
import TotalBell from "../../assets/icons/TotalBell.png";
import handShake from "../../assets/icons/handShake.png";
import users from "../../assets/icons/users.png";

const TotalSection = () => {
  return (
    <div
      className="lg:h-[330px] md:h-[615px] h-[1200px] object-fit lg:mt-[120px] md:mt-[800px] mt-[1460px]"
      style={{
        backgroundImage: `url(${carouselBanner})`,
        backgroundSize: "auto",
        backgroundPosition: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      {/* start */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto h-300px pt-[40px] gap-12 lg:gap-0">
        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="w-36 h-36 border-[5px] border-[#E55A5F] flex justify-center rounded-full"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={TotalDonors} alt="" />
          </div>
          <div
            className="text-center"
            style={{
              fontFamily: "Poppins",
              fontSize: "24px",
              fontStyle: "normal",
              lineHeight: "normal",
              textTransform: "capitalize",
            }}
          >
            <h1
              className="text-brandPrimary mt-6"
              style={{
                fontWeight: 800,
              }}
            >
              123 k
            </h1>
            <p
              className="mt-6"
              style={{
                fontWeight: 600,
              }}
            >
              Total Donors
            </p>
          </div>
        </div>
        {/* end 1*/}
        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="w-36 h-36 border-[5px] border-[#E55A5F] flex justify-center rounded-full"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={TotalBell} alt="TotalBell" />
          </div>
          <div
            className="text-center"
            style={{
              fontFamily: "Poppins",
              fontSize: "24px",
              fontStyle: "normal",
              lineHeight: "normal",
              textTransform: "capitalize",
            }}
          >
            <h1
              className="text-brandPrimary mt-6"
              style={{
                fontWeight: 800,
              }}
            >
              123 k
            </h1>
            <p
              className="mt-6"
              style={{
                fontWeight: 600,
              }}
            >
              Blood Request
            </p>
          </div>
        </div>
        {/* end 2*/}
        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="w-36 h-36 border-[5px] border-[#E55A5F] flex justify-center rounded-full"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={handShake} alt="handShake" />
          </div>
          <div
            className="text-center"
            style={{
              fontFamily: "Poppins",
              fontSize: "24px",
              fontStyle: "normal",
              lineHeight: "normal",
              textTransform: "capitalize",
            }}
          >
            <h1
              className="text-brandPrimary mt-6"
              style={{
                fontWeight: 800,
              }}
            >
              123 k
            </h1>
            <p
              className="mt-6"
              style={{
                fontWeight: 600,
              }}
            >
              Happy Recipient
            </p>
          </div>
        </div>
        {/* end 3*/}
        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="w-36 h-36 border-[5px] border-[#E55A5F] flex justify-center rounded-full"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={users} alt="users" />
          </div>
          <div
            className="text-center"
            style={{
              fontFamily: "Poppins",
              fontSize: "24px",
              fontStyle: "normal",
              lineHeight: "normal",
              textTransform: "capitalize",
            }}
          >
            <h1
              className="text-brandPrimary mt-6"
              style={{
                fontWeight: 800,
              }}
            >
              123 k
            </h1>
            <p
              className="mt-6"
              style={{
                fontWeight: 600,
              }}
            >
              Volunteers
            </p>
          </div>
        </div>
      </div>
      {/* end 4*/}
    </div>
  );
};

export default TotalSection;
