import React from "react";
import iconPlay from "../../assets/iconPlay.png";
import carouselBanner from "../../assets/carouselBanner.jpg";
import { Carousel } from "flowbite-react";

const CarouselBanner = () => {
  return (
    <div className="">
      <div className="w-full pt-[52px] bg-white">
        <div
          className="pt-0 object-fit border border-black w-full"
          style={{
            backgroundImage: `url(${carouselBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%", // Ensure the image covers the full width
          }}
        >
          <div className="px-4 lg:px-14 h-full">
            <Carousel className="w-full inline-block  mx-auto h-screen">
              <div
                className="my-28 md:my-8 py-12 px-16 flex flex-col md:flex-row-reverse items-center justify-between gap-12"
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  lineHeight: "normal",
                  textTransform: "capitalize",
                }}
              >
                <div>{/* <img src={banner} alt="banner1" /> */}</div>
                <div className="md:w-1/2">
                  <h1
                    className="text-5xl font-semibold mb-4 text-white md:w-3/4 leading-snug"
                    style={{
                      fontSize: "40px",
                      fontWeight: 700,
                    }}
                  >
                    The gift of blood is a gift to someone's life
                  </h1>
                  <p
                    className="text-white text-base mb-8"
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.“
                  </p>
                </div>
              </div>
              {/* end */}
              <div className="my-28 md:my-8 py-12 px-16 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                <div>{/* <img src={banner2} alt="banner1" /> */}</div>
                <div
                  className="md:w-1/2"
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    lineHeight: "normal",
                  }}
                >
                  <h1
                    className="text-5xl font-semibold mb-4 text-white md:w-3/4 leading-snug"
                    style={{
                      fontSize: "40px",
                      fontWeight: 700,
                    }}
                  >
                    The gift of blood is a gift to someone's life
                  </h1>
                  <p
                    className="text-white text-base mb-8"
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                  </p>
                </div>
              </div>
            </Carousel>

            {/* <div className="-mt-[25px] flex justify-center">
              <img src={iconPlay} alt="" />
            </div> */}
          </div>
        </div>
      </div>

      <div className="">
        <div
          className="bg-[#e11b22b3] h-10 w-full -mt-[10px] text-white overflow-hidden"
          style={{
            fontFamily: "Poppins",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              whiteSpace: "nowrap",
              animation: "scrollText 60s linear infinite",
            }}
          >
            Note: To donate blood you have to be more than 16 years old. Note:
            To donate blood you have to be more than 16 years old. Note: To
            donate blood you have to be more than 16 years old.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselBanner;
