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

const UserModal = () => {
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
        </>}

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

      {currentTab == 'timeing' &&
        <form>
          <div className="w-full space-y-3 lg:w-1/2">
            <div className="flex items-center gap-10">
              <li className="w-full list-none">
                <div className="flex items-center">
                  <input
                    id="list-radio-license1"
                    type="checkbox"
                    value=""
                    name="list-radio"
                    className=""
                  />
                  <label
                    htmlFor="list-radio-license"
                    className="w-full text-sm font-medium text-gray-900 ms-2 "
                  >
                    Monday
                  </label>
                </div>
              </li>
              <div className="flex items-center gap-3">
                <Select>
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
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="23:30" />
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
            <div className="flex items-center gap-10">
              <li className="w-full list-none">
                <div className="flex items-center">
                  <input
                    id="list-radio-license2"
                    type="checkbox"
                    value=""
                    name="list-radio"
                    className=""
                  />
                  <label
                    htmlFor="list-radio-license"
                    className="w-full text-sm font-medium text-gray-900 ms-2 "
                  >
                    Tuesday
                  </label>
                </div>
              </li>
              <div className="flex items-center gap-3">
                <Select>
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
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="23:30" />
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
            <div className="flex items-center gap-10">
              <li className="w-full list-none">
                <div className="flex items-center">
                  <input
                    id="list-radio-license3"
                    type="checkbox"
                    value=""
                    name="list-radio"
                    className=""
                  />
                  <label
                    htmlFor="list-radio-license"
                    className="w-full text-sm font-medium text-gray-900 ms-2 "
                  >
                    Wednesday
                  </label>
                </div>
              </li>
              <div className="flex items-center gap-3">
                <Select>
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
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="23:30" />
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
            <div className="flex items-center gap-10">
              <li className="w-full list-none">
                <div className="flex items-center">
                  <input
                    id="list-radio-license4"
                    type="checkbox"
                    value=""
                    name="list-radio"
                    className=""
                  />
                  <label
                    htmlFor="list-radio-license"
                    className="w-full text-sm font-medium text-gray-900 ms-2 "
                  >
                    Thursday
                  </label>
                </div>
              </li>
              <div className="flex items-center gap-3">
                <Select>
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
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="23:30" />
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
            <div className="flex items-center gap-10">
              <li className="w-full list-none">
                <div className="flex items-center">
                  <input
                    id="list-radio-license5"
                    type="checkbox"
                    value=""
                    name="list-radio"
                    className=""
                  />
                  <label
                    htmlFor="list-radio-license"
                    className="w-full text-sm font-medium text-gray-900 ms-2 "
                  >
                    Friday
                  </label>
                </div>
              </li>
              <div className="flex items-center gap-3">
                <Select>
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
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="23:30" />
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
            <div className="flex items-center gap-10">
              <li className="w-full list-none">
                <div className="flex items-center">
                  <input
                    id="list-radio-license6"
                    type="checkbox"
                    value=""
                    name="list-radio"
                    className=""
                  />
                  <label
                    htmlFor="list-radio-license"
                    className="w-full text-sm font-medium text-gray-900 ms-2 "
                  >
                    Saturday
                  </label>
                </div>
              </li>
              <div className="flex items-center gap-3">
                <Select>
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
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="23:30" />
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
            <div className="flex items-center gap-10">
              <li className="w-full list-none">
                <div className="flex items-center">
                  <input
                    id="list-radio-license7"
                    type="checkbox"
                    value=""
                    name="list-radio"
                    className=""
                  />
                  <label
                    htmlFor="list-radio-license"
                    className="w-full text-sm font-medium text-gray-900 ms-2 "
                  >
                    Sunday
                  </label>
                </div>
              </li>
              <div className="flex items-center gap-3">
                <Select>
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
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="23:30" />
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
          </div>
          <Button variant="primary" className="w-full mx-auto">
            Save
          </Button>
        </form>
      }

      {currentTab == 'schedule' &&
        <Schedule />}
    </div>
  );
};

export default UserModal;
