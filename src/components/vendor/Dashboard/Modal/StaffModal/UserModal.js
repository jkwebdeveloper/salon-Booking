import Button from "@/components/ui/button";
import Label from "@/components/ui/form/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const UserModal = () => {
  const [editDay, setEditDay] = useState(false);
  const [addTime, setAddTime] = useState(false);
  return (
    <div className="w-full space-y-3">
      {/* <div className="space-y-4">
          <p>Add time off</p>
        </div> */}

      {editDay === true ? (
        <div className="space-y-4">
          <p>editDay</p>
          <RadioGroup defaultValue="comfortable">
            <div className="w-full bg-[#FAFAFA] text-black p-3 cursor-pointer flex items-center border rounded-lg border-[#D8DAE5] space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <label htmlFor="r1">Default</label>
            </div>
            <div className="w-full bg-[#FAFAFA] text-black p-3 cursor-pointer flex items-center border rounded-lg border-[#D8DAE5] space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <label htmlFor="r2">Comfortable</label>
            </div>
            <div className="w-full bg-[#FAFAFA] text-black p-3 cursor-pointer flex items-center border rounded-lg border-[#D8DAE5] space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <label htmlFor="r3">Compact</label>
            </div>
          </RadioGroup>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="first_name" text="From" />
              <input
                type="text"
                name="first_name"
                className="input_field"
                placeholder="Enter From"
                pattern="[A-Za-z]{4,20}"
              />
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="last_name" text="To" />
              <input
                type="text"
                name="last_name"
                className="input_field"
                placeholder="Enter To"
                pattern="[A-Za-z]{4,20}"
              />
            </div>
          </div>
          <Button variant="primary" className="w-full mx-auto">
            Save
          </Button>
        </div>
      ) : (
        <>
          <div className="bg-[#0AADA4] mx-auto text-center p-3 rounded-full w-12">
            NS
          </div>
          <p className="text-center">Nuzami</p>
          <div
            className="w-full bg-[#FAFAFA] p-3 cursor-pointer flex justify-between items-center border rounded-lg border-[#D8DAE5]"
            onClick={() => setEditDay(true)}
          >
            <p className="text-sm">Edit day</p>
            <IoIosArrowForward />
          </div>
          <div
            className="w-full bg-[#FAFAFA] p-3 flex cursor-pointer justify-between items-center border rounded-lg border-[#D8DAE5]"
            onClick={() => setAddTime(true)}
          >
            <p className="text-sm">Add Time Off</p>
            <IoIosArrowForward />
          </div>
          <div className="w-full bg-[#FAFAFA] p-3 flex cursor-pointer justify-between items-center border rounded-lg border-[#D8DAE5]">
            <p className="text-sm">New Schedule</p>
            <IoIosArrowForward />
          </div>
        </>
      )}
    </div>
  );
};

export default UserModal;
