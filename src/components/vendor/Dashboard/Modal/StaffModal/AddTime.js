import { DatePicker } from "@/components/user/Home/FindNearByForm/datepicker";
import React from "react";

const AddTime = () => {
  return (
    <div className="space-y-4">
      <p>Add time off</p>
      <div className="flex flex-col w-full gap-3 lg:flex-row">
        <div className="border w-max rounded-md border-[#eae9e9]">
          <div class="relative max-w-sm">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
            <input
              datepicker
              type="text"
              className=""
              placeholder="Select date"
            />
          </div>
        </div>
        <div className="border w-max rounded-md border-[#eae9e9]">
          <DatePicker />
        </div>
      </div>
    </div>
  );
};

export default AddTime;
