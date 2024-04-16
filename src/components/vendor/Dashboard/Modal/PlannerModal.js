import Button from "@/components/ui/button";
import Label from "@/components/ui/form/label";
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
const PlannerModal = () => {
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-center">
        <Button variant="secondary">Appointment</Button>
        <Button variant="disable">Block</Button>
      </div>
      <div className="flex flex-col w-full gap-3 lg:flex-row">
        <div className="w-full space-y-1 text-left ">
          <Label htmlFor="first_name" text="Mobile Number" />
          <input
            type="text"
            name="first_name"
            className="input_field"
            placeholder="Enter Mobile Number"
            pattern="[A-Za-z]{4,20}"
          />
        </div>
        <div className="w-full space-y-1 text-left ">
          <Label htmlFor="last_name" text="E-mail" />
          <input
            type="text"
            name="last_name"
            className="input_field"
            placeholder="Enter E-mail"
            pattern="[A-Za-z]{4,20}"
          />
        </div>
        <div className="w-full space-y-1 text-left ">
          <Label htmlFor="first_name" text="Mobile Number" />
          <input
            type="text"
            name="first_name"
            className="input_field"
            placeholder="Enter Mobile Number"
            pattern="[A-Za-z]{4,20}"
          />
        </div>
        <div className="w-full space-y-1 text-left ">
          <Label htmlFor="last_name" text="E-mail" />
          <input
            type="text"
            name="last_name"
            className="input_field"
            placeholder="Enter E-mail"
            pattern="[A-Za-z]{4,20}"
          />
        </div>
      </div>
      <div className="w-full space-y-1 text-left ">
        <Label htmlFor="first_name" text="Select service" />
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Swedish massage" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center w-full gap-3 space-y-1 text-left">
        <div>
          <Label htmlFor="first_name" text="Date" />
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Swedish massage" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="first_name" text="Time" />
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Swedish massage" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="first_name" text="Duration" />
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Swedish massage" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="first_name" text="Team member" />
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Swedish massage" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="first_name" text="Add a note (Optional)" />
        <textarea
          id="message"
          rows="4"
          className="input_field"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button variant="disable">Cancel</Button>
        <Button variant="primary">Save</Button>
      </div>
    </div>
  );
};

export default PlannerModal;
