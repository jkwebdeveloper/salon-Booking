import React from "react";
import { FaSearch } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "../ui/button";

const FindNearByForm = () => {
  return (
    <div className="relative flex items-center justify-center w-full">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-center md:font-bold md:text-5xl">
          Find Nearby{" "}
          <span className="text-primary_color">Hair Treatments</span>
        </h1>
        <div className="bg-white mx-auto lg:rounded-full rounded-2xl shadow-lg lg:border-8 lg:border-[#e2e2e2] flex justify-around items-center gap-2 lg:flex-row flex-col md:w-[100%] w-full px-3 py-4">
          <div className="flex items-center w-full gap-3">
            <FaSearch className="text-2xl" />
            <input
              datepicker="true"
              type="text"
              placeholder="Search by Treatment or Salon"
              className="w-full outline-none"
            />
          </div>
          <span className="bg-opacity-40 bg-gray-400 lg:h-6 lg:w-[1px] w-full h-[1px] "></span>
          <div className="flex items-center w-full gap-3">
            {/* <CiCalendarDate className="text-2xl" /> */}
            <input
              datepicker="true"
              type="date"
              placeholder="Select date"
              className="w-full outline-none"
            />
          </div>
          <span className="bg-opacity-40 bg-gray-400 lg:h-6 lg:w-[1px] w-full h-[1px] "></span>
          <div className="flex items-center w-full gap-3">
            <IoTimeOutline className="text-2xl" />
            <input
              datepicker="true"
              type="time"
              placeholder="Select time"
              className="w-full outline-none "
            />
          </div>
          <span className="bg-opacity-40 bg-gray-400 lg:h-6 lg:w-[1px] w-full h-[1px] "></span>
          <div className="flex items-center w-full gap-3">
            <CiLocationOn className="text-2xl" />
            <input
              type="text"
              placeholder="Search locations"
              className="outline-none"
            />
          </div>
          <Button variant="primary">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default FindNearByForm;
