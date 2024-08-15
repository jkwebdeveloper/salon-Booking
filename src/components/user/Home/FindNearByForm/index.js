import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

import { Button, SearchInput, TimePickerInput } from "@/components";
import { DatePicker } from "./datepicker";
import { format } from "date-fns";

const FindNearByForm = () => {

  const [formItems, setFormItems] = React.useState({
    categories: "",
    search: "",
    date: format(new Date(), 'yyyy-MM-dd'),
    lat: "",
    long: "",
  });
  const searchNearyBy = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const time = form.get("Hour");
    const url = `/find-near-by-services?categories=${formItems.categories}&date=${formItems.date}&time=${time}&lat=${formItems.lat || null}&long=${formItems.long || null}`;
    // const resp = await POST.request({ url:'/find-near-by-services', form });
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
          <SearchInput formItems={formItems} setFormItems={setFormItems} />
          <div className="flex-grow lg:block hidden flex-shrink-0 min-h-[1rem] w-[2px] bg-neutral-400"></div>
          <DatePicker className="w-full" onSelect={e => setFormItems({ ...formItems, date: format(e, 'yyyy-MM-dd') })} />
          <div className="flex-grow lg:block hidden flex-shrink-0 min-h-[1rem] w-[2px] bg-neutral-400"></div>
          <div className="flex items-center w-full gap-1">
            <IoTimeOutline className="text-xl" />
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
