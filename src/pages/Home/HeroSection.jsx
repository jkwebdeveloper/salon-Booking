import Image from "next/image";
import React from "react";
import Banner from "../../../public/static/images/banner.jpg";
import { FaSearch } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Herosection = () => {
  return (
    <div className="w-full">
      <Image
        src={Banner}
        className=" relative object-cover w-full 2xl:h-[75vh]  h-[90vh]"
      />
      <div className="flex absolute justify-center top-2/4 items-center w-full">
        <div className="space-y-4">
          <h1 className="font-bold text-5xl text-center">
            Find Nearby{" "}
            <span className="text-primary_color">Hair Treatments</span>
          </h1>
          <form className="bg-white rounded-full border-8 border-[#d3d3d3] flex justify-around items-center gap-2 lg:flex-row lg:w-full flex-col w-full px-3 py-4">
            <div className="gap-3 flex items-center w-1/2">
              <FaSearch className="text-2xl" />
              <input
                datepicker
                type="text"
                placeholder="Search by Treatment or Salon"
                className="outline-none after:block after:bg-black after:w-[1px] after:h-10 after:mx-auto after:my-2"
              />
            </div>
            <div className="gap-3 flex items-center w-full">
              {/* <CiCalendarDate className="text-2xl" /> */}
              <input
                datepicker
                type="date"
                placeholder="Select date"
                className="outline-none"
              />
            </div>
            <div className="gap-3 flex items-center w-full">
              <IoTimeOutline className="text-2xl" />
              <input
                datepicker
                type="time"
                placeholder="Select time"
                className="outline-none"
              />
            </div>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
