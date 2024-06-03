import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components";

const Schedule = ({ vendor }) => {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const timeing = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ];
  return (
    <>
      <div className="w-full space-y-3 lg:w-1/2">
        <div className="flex items-center gap-10">
          <li className="w-full list-none">
            <div className="flex items-center">
              <input
                id="list-radio-license"
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
                id="list-radio-license"
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
                id="list-radio-license"
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
                id="list-radio-license"
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
                id="list-radio-license"
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
                id="list-radio-license"
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
                id="list-radio-license"
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
      <Button
        variant="primary"
        className="flex items-center justify-center w-full mx-auto"
      >
        Save
      </Button>
    </>
  );
};

export default Schedule;
