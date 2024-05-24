import Button from "@/components/ui/button";
import Label from "@/components/ui/form/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/user/Home/FindNearByForm/datepicker";
import Schedule from "./Schedule";

const UserModal = ({ setUserModal, vendor }) => {
  const [currentTab, setCurrentTab] = useState("action");
  return (
    <div className="w-full space-y-3">
      {currentTab == 'action'
        && <>
          <div className="bg-[#0AADA4] mx-auto text-center p-3 rounded-full w-12">
            NS
          </div>
          <p className="text-center">Nuzami</p>
          <div
            className="w-full bg-[#FAFAFA] p-3 cursor-pointer flex justify-between items-center border rounded-lg border-[#D8DAE5]"
            onClick={() => setCurrentTab('editday')}
          >
            <p className="text-sm">Edit day</p>
            <IoIosArrowForward />
          </div>
          <div
            className="w-full bg-[#FAFAFA] p-3 flex cursor-pointer justify-between items-center border rounded-lg border-[#D8DAE5]"
            onClick={() => setCurrentTab('timeoff')}
          >
            <p className="text-sm">Add Time Off</p>
            <IoIosArrowForward />
          </div>
          <div className="w-full bg-[#FAFAFA] p-3 flex cursor-pointer justify-between items-center border rounded-lg border-[#D8DAE5]"
            onClick={() => setCurrentTab('schedule')}
          >
            <p className="text-sm">New Schedule</p>
            <IoIosArrowForward />
          </div>
        </>}
      {
        currentTab == 'editday'
        && <div className="space-y-4">
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
              <Select>
                <label className="w-full text-sm font-medium text-gray-900 ms-2 ">
                  From
                </label>
                <SelectTrigger className="">
                  <SelectValue placeholder="09:00" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Select>
                <label class="w-full ms-2 text-sm font-medium text-gray-900 ">
                  To
                </label>
                <SelectTrigger className="">
                  <SelectValue placeholder="09:00" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button variant="primary" className="w-full mx-auto">
            Save
          </Button>
        </div>
      }
      {currentTab == 'timeoff'
        && <div className="space-y-4">
          <p>Add time off</p>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="">
              <input
                datepicker
                type="date"
                className="border p-2 w-max rounded-md border-[#eae9e9]"
                placeholder="Select date"
              />
            </div>
            <div className="">
              <input
                datepicker
                type="date"
                className="border p-2 w-max rounded-md border-[#eae9e9]"
                placeholder="Select date"
              />
            </div>
          </div>
        </div>
      }

      {currentTab == 'schedule' &&
        <Schedule vendor={vendor} />}
    </div>
  );
};

export default UserModal;
