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
      {currentTab == "action" && (
        <>
          <div className="bg-[#0AADA4] mx-auto text-center p-3 rounded-full w-12">
            NS
          </div>
          <p className="text-center">Nuzami</p>
          <div
            className="w-full bg-[#FAFAFA] p-3 cursor-pointer flex justify-between items-center border rounded-lg border-[#D8DAE5]"
            onClick={() => setCurrentTab("editday")}
          >
            <p className="text-sm">Edit day</p>
            <IoIosArrowForward />
          </div>
          <div
            className="w-full bg-[#FAFAFA] p-3 flex cursor-pointer justify-between items-center border rounded-lg border-[#D8DAE5]"
            onClick={() => setCurrentTab("timeoff")}
          >
            <p className="text-sm">Add Time Off</p>
            <IoIosArrowForward />
          </div>
          <div
            className="w-full bg-[#FAFAFA] p-3 flex cursor-pointer justify-between items-center border rounded-lg border-[#D8DAE5]"
            onClick={() => setCurrentTab("schedule")}
          >
            <p className="text-sm">New Schedule</p>
            <IoIosArrowForward />
          </div>
        </>
      )}
      {currentTab == "editday" && (
        <div className="space-y-4">
          <p>EditDay</p>
          <div className="flex items-center gap-3">
            <p className="rounded-full w-12 h-12 flex justify-center items-center text-xl bg-[#0AADA4] text-white">
              JA
            </p>
            <div className="flex-col">
              <p className="font-semibold text-[#1D1B23]">Nuzami</p>
              <p className="text-sm text-[#999999]">51 hrs / week</p>
            </div>
          </div>
          <RadioGroup defaultValue="comfortable">
            <div className="w-full bg-[#FAFAFA] hover:bg-[#F1DEF4] text-black p-3 cursor-pointer flex items-center border rounded-lg border-[#D8DAE5] space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <label htmlFor="r1">Usual Schedule</label>
            </div>
            <div className="w-full bg-[#FAFAFA] hover:bg-[#F1DEF4] text-black p-3 cursor-pointer flex items-center border rounded-lg border-[#D8DAE5] space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <label htmlFor="r2">Day Off</label>
            </div>
            <div className="w-full bg-[#FAFAFA] hover:bg-[#F1DEF4] text-black p-3 cursor-pointer flex items-center border rounded-lg border-[#D8DAE5] space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <label htmlFor="r3">Custom hours</label>
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
      )}
      {currentTab == "timeoff" && (
        <div className="space-y-4">
          <p className="font-bold">Add time off</p>
          <div className="flex items-center gap-3">
            <p className="rounded-full w-12 h-12 flex justify-center items-center text-xl bg-[#0AADA4] text-white">
              JA
            </p>
            <div className="flex-col">
              <p className="font-semibold text-[#1D1B23]">Nuzami</p>
              <p className="text-sm text-[#999999]">51 hrs / week</p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full">
              <input
                datepicker
                type="date"
                className="border w-full p-2 rounded-md border-[#eae9e9]"
                placeholder="Select date"
              />
            </div>
            <div className="w-full">
              <input
                datepicker
                type="date"
                className="border w-full p-2 rounded-md border-[#eae9e9]"
                placeholder="Select date"
              />
            </div>
          </div>
          <Button
            variant="primary"
            className="flex items-center justify-center w-full mx-auto"
          >
            Save
          </Button>
        </div>
      )}

      {currentTab == "schedule" && <Schedule vendor={vendor} />}
    </div>
  );
};

export default UserModal;
