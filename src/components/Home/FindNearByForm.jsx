import React from "react";
import { FaSearch } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const FindNearByForm = () => {
  return (
    <div className="flex relative justify-center items-center w-full">
      <div className="space-y-4">
        <h1 className="md:font-bold md:text-5xl font-semibold text-2xl text-center">
          Find Nearby{" "}
          <span className="text-primary_color">Hair Treatments</span>
        </h1>
        <div className="bg-white mx-auto lg:rounded-full rounded-2xl shadow-lg lg:border-8 lg:border-[#e2e2e2] flex justify-around items-center gap-2 lg:flex-row flex-col md:w-[100%] w-full px-3 py-4">
          <div className="gap-3 flex items-center w-full">
            <FaSearch className="text-2xl" />
            <input
              datepicker
              type="text"
              placeholder="Search by Treatment or Salon"
              className="outline-none w-full"
            />
          </div>
          <span className="bg-opacity-40 bg-gray-400 lg:h-6 lg:w-[1px] w-full h-[1px] "></span>
          <div className="gap-3 flex items-center w-full">
            {/* <CiCalendarDate className="text-2xl" /> */}
            <input
              datepicker
              type="date"
              placeholder="Select date"
              className="outline-none w-full"
            />
          </div>
          <span className="bg-opacity-40 bg-gray-400 lg:h-6 lg:w-[1px] w-full h-[1px] "></span>
          <div className="gap-3 flex items-center w-full">
            <IoTimeOutline className="text-2xl" />
            <input
              datepicker
              type="time"
              placeholder="Select time"
              className="outline-none w-full "
            />
          </div>
          <span className="bg-opacity-40 bg-gray-400 lg:h-6 lg:w-[1px] w-full h-[1px] "></span>
          <div className="gap-3 flex items-center w-full">
            <CiLocationOn className="text-2xl" />
            <input
              type="text"
              placeholder="Search locations"
              className="outline-none"
            />
          </div>
          <button
            type="button"
            className="primary_button px-4 w-full hover:bg-blue_button/80 active:scale-90 transition"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindNearByForm;
