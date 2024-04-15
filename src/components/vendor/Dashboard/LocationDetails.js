import Button from "@/components/ui/button";
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

const LocationDetails = () => {
  return (
    <div className="space-y-4 ">
      <p className="text-2xl font-semibold">Location Details</p>
      <div className="w-full p-3 space-y-4 bg-white rounded-xl">
        <div className="w-full space-y-1 text-left">
          <label htmlFor="country" className="label_text">
            Address line 1*
          </label>
          <input
            name="Address line 1*"
            className="input_field"
            placeholder="Street 420, Addington"
            pattern="[a-zA-Z0-9]{3,}"
            // pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'
            required
          />
          <input type="hidden" name="device_type" />
        </div>
        <div className="w-full space-y-1 text-left">
          <label htmlFor="country" className="label_text">
            Address line 2
          </label>
          <input
            name="Address line 2"
            className="input_field"
            placeholder="Type here..."
          />
        </div>
        <div className="flex items-center gap-3">
          <Select className="z-20">
            <SelectTrigger className="">
              <SelectValue placeholder="London" />
            </SelectTrigger>
            <SelectContent className="z-20">
              <SelectGroup className="z-20">
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
              <SelectValue placeholder="London" />
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
              <SelectValue placeholder="London" />
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
        <Button variant="primary">Update</Button>
      </div>
    </div>
  );
};

export default LocationDetails;
