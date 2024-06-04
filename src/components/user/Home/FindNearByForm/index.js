import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

import { Button, SearchInput, TimePickerInput } from "@/components";
import { DatePicker } from "./datepicker";

const FindNearByForm = () => {
  const searchNearyBy = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log("searching nearby");
  };
  return (
    <div className="relative flex items-center justify-center w-full">
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold text-center md:font-bold md:text-5xl">
          Find Nearby{" "}
          <span className="text-primary_color">Hair Treatments</span>
        </h1>
        <form
          className="bg-white mx-auto lg:rounded-full rounded-2xl shadow-lg lg:border-[0.2rem] lg:border-[#e2e2e2] flex justify-around items-center gap-2 lg:flex-row flex-col w-full px-3 py-[0.4rem]"
          onSubmit={(e) => searchNearyBy(e)}
        >
          <SearchInput />
          <div className="flex-grow flex-shrink-0 min-h-[1rem] w-[2px] bg-neutral-400"></div>
          <DatePicker className="p-3" />
          <div className="flex-grow flex-shrink-0 min-h-[1rem] w-[2px] bg-neutral-400"></div>
          <div className="flex items-center w-full gap-1">
            <IoTimeOutline className="text-xl" />
            {/* <input
              datepicker="true"
              type="time"
              placeholder="Select time"
              className="w-full outline-none "
            /> */}
            <TimePickerInput />
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
          <Button type="submit" variant="primary">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FindNearByForm;
