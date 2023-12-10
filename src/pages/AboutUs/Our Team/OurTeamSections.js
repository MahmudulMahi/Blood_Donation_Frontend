import React from "react";
import locations from "../../../assets/locations.jpeg";
import locations1 from "../../../assets/locations-1.png";

function OurTeamSections() {
  return (
    <div className="w-11/12 ml-auto mr-auto">
      <p className="p-2 md:w-1/6 w-full bg-red-700 rounded-md font-bold text-white  mt-6">
        About Founder
      </p>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-2">
        <div className="md:col-span-1 w-full ">
          <p className="text-bold  p-2 text-xl font-bold">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <img
            className="rounded-md p-2 mt-2 w-full"
            src={locations}
            alt=""
          ></img>
        </div>

        <div
          className="col-span-3 bg-white  rounded-md p-4"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>

          <p className="mt-4 text-red-600">
            {" "}
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </p>

          <p className="mt-2">
            {" "}
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <p className="mt-2">
            {" "}
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <p className="mt-2">
            {" "}
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
      </div>

      <div>
        <p className="p-2 md:w-1/6 w-full bg-red-700 rounded-md font-bold text-white  mt-10">
          Executive Committee
        </p>
        <div className="grid md:grid-cols-4 grid-cols-1 mt-4 gap-4 ">
          <div className="rounded-md shadow-2xl">
            <img
              className="rounded-md p-2 mt-2 w-full"
              src={locations1}
              alt=""
            ></img>
            <hr></hr>
            <p className="p-2">lorem ipsum is best text</p>
            <p className="text-red-700 p-2 -mt-1">Chief Executive Officer</p>
          </div>

          <div className="rounded-md md:mt-20 shadow-2xl">
            <img
              className="rounded-md p-2 mt-2 w-full"
              src={locations1}
              alt=""
            ></img>
            <hr></hr>
            <p className="p-2">lorem ipsum is best text</p>
            <p className="text-red-700 p-2 -mt-1">Chief Executive Officer</p>
          </div>

          <div className="rounded-md shadow-2xl ">
            <img
              className="rounded-md p-2 mt-2 w-full"
              src={locations1}
              alt=""
            ></img>
            <hr></hr>
            <p className="p-2">lorem ipsum is best text</p>
            <p className="text-red-700 p-2 -mt-1">Chief Executive Officer</p>
          </div>

          <div className="rounded-md md:mt-20 shadow-2xl">
            <img
              className="rounded-md p-2 mt-2 w-full"
              src={locations1}
              alt=""
            ></img>
            <hr></hr>
            <p className="p-2">lorem ipsum is best text</p>
            <p className="text-red-700 p-2 -mt-1">Chief Executive Officer</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid md:grid-cols-4 grid-cols-1 mt-4 gap-4 ">
          <div className="rounded-md shadow-2xl">
            <img
              className="rounded-md p-2 mt-2 w-full"
              src={locations1}
              alt=""
            ></img>
            <hr></hr>
            <p className="p-2">lorem ipsum is best text</p>
            <p className="text-red-700 p-2 -mt-1">Chief Executive Officer</p>
          </div>

          <div className="rounded-md md:mt-20 shadow-2xl">
            <img
              className="rounded-md p-2 mt-2 w-full"
              src={locations1}
              alt=""
            ></img>
            <hr></hr>
            <p className="p-2">lorem ipsum is best text</p>
            <p className="text-red-700 p-2 -mt-1">Chief Executive Officer</p>
          </div>

          <div className="rounded-md shadow-2xl ">
            <img
              className="rounded-md p-2 mt-2 w-full"
              src={locations1}
              alt=""
            ></img>
            <hr></hr>
            <p className="p-2">lorem ipsum is best text</p>
            <p className="text-red-700 p-2 -mt-1">Chief Executive Officer</p>
          </div>

          <div className="rounded-md md:mt-20 shadow-2xl">
            <img
              className="rounded-md p-2 mt-2 w-full"
              src={locations1}
              alt=""
            ></img>
            <hr></hr>
            <p className="p-2">lorem ipsum is best text</p>
            <p className="text-red-700 p-2 -mt-1">Chief Executive Officer</p>
          </div>
        </div>
      </div>

      {/* seced image sections */}

      <div className="mt-16">
        <p className="p-2 md:w-1/6 w-full bg-red-700 rounded-md font-bold text-white  mt-10">
          Volunteer
        </p>
        <div className="grid md:grid-cols-4 grid-cols-1 mt-4 gap-4 ">
          <div className="rounded-md shadow-2xl">
            <img
              className="rounded-md p-2 mt-2 w-full"
              src={locations1}
              alt=""
            ></img>
            <hr></hr>
            <p className="p-2">lorem ipsum is best text</p>
            <p className="text-red-700 p-2 -mt-1">Chief Executive Officer</p>
          </div>

          <div className="rounded-md md:mt-20 shadow-2xl">
            <img
              className="rounded-md p-2 mt-2 w-full"
              src={locations1}
              alt=""
            ></img>
            <hr></hr>
            <p className="p-2">lorem ipsum is best text</p>
            <p className="text-red-700 p-2 -mt-1">Chief Executive Officer</p>
          </div>

          <div className="rounded-md shadow-2xl ">
            <img
              className="rounded-md p-2 mt-2 w-full"
              src={locations1}
              alt=""
            ></img>
            <hr></hr>
            <p className="p-2">lorem ipsum is best text</p>
            <p className="text-red-700 p-2 -mt-1">Chief Executive Officer</p>
          </div>

          <div className="rounded-md md:mt-20 shadow-2xl">
            <img
              className="rounded-md p-2 mt-2 w-full"
              src={locations1}
              alt=""
            ></img>
            <hr></hr>
            <p className="p-2">lorem ipsum is best text</p>
            <p className="text-red-700 p-2 -mt-1">Chief Executive Officer</p>
          </div>
        </div>
      </div>

      <div>
        <div className="grid md:grid-cols-4 grid-cols-1 mt-4 gap-4 ">
          <div className="rounded-md shadow-2xl">
            <img
              className="rounded-md p-2 mt-2 w-full"
              src={locations1}
              alt=""
            ></img>
            <hr></hr>
            <p className="p-2">lorem ipsum is best text</p>
            <p className="text-red-700 p-2 -mt-1">Chief Executive Officer</p>
          </div>

          <div className="rounded-md md:mt-20 shadow-2xl">
            <img
              className="rounded-md p-2 mt-2 w-full"
              src={locations1}
              alt=""
            ></img>
            <hr></hr>
            <p className="p-2">lorem ipsum is best text</p>
            <p className="text-red-700 p-2 -mt-1">Chief Executive Officer</p>
          </div>

          <div className="rounded-md shadow-2xl ">
            <img
              className="rounded-md p-2 mt-2 w-full"
              src={locations1}
              alt=""
            ></img>
            <hr></hr>
            <p className="p-2">lorem ipsum is best text</p>
            <p className="text-red-700 p-2 -mt-1">Chief Executive Officer</p>
          </div>

          <div className="rounded-md md:mt-20 shadow-2xl">
            <img
              className="rounded-md p-2 mt-2 w-full"
              src={locations1}
              alt=""
            ></img>
            <hr></hr>
            <p className="p-2">lorem ipsum is best text</p>
            <p className="text-red-700 p-2 -mt-1">Chief Executive Officer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeamSections;
