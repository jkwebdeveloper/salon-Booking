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

const EditServiceModal = () => {
  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col w-full gap-3 lg:flex-row">
        <div className="w-full space-y-1 text-left ">
          <Label htmlFor="first_name" text="Treatment" />
          <input
            type="text"
            name="first_name"
            className="input_field"
            placeholder="Enter Mobile Number"
            pattern="[A-Za-z]{4,20}"
          />
        </div>
        <div className="w-full space-y-1 text-left ">
          <Label htmlFor="last_name" text="Service Title" />
          <input
            type="text"
            name="last_name"
            className="input_field"
            placeholder="Enter Service Title"
            pattern="[A-Za-z]{4,20}"
          />
        </div>
      </div>
      <div className="flex items-center w-full gap-3 space-y-1 text-left">
        <div className="w-full space-y-1 text-left ">
          <Label htmlFor="last_name" text="Pricing level name *" />
          <input
            type="text"
            name="last_name"
            className="input_field"
            placeholder="Couples Massage for 2 hours"
            pattern="[A-Za-z]{4,20}"
          />
        </div>
        <div>
          <Label htmlFor="first_name" text="Duration *" />
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="1 hr 60 min" />
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
        <div className="w-full space-y-1 text-left ">
          <Label htmlFor="last_name" text="Price *" />
          <input
            type="text"
            name="last_name"
            className="input_field"
            placeholder="£369"
            pattern="[A-Za-z]{4,20}"
          />
        </div>
        <div className="w-full space-y-1 text-left ">
          <Label htmlFor="last_name" text="Sale Price *" />
          <input
            type="text"
            name="last_name"
            className="input_field"
            placeholder="£369"
            pattern="[A-Za-z]{4,20}"
          />
        </div>
      </div>
      <div className="flex items-center w-full gap-3 space-y-1 text-left">
        <div className="w-full space-y-1 text-left ">
          <Label htmlFor="last_name" text="Pricing level name *" />
          <input
            type="text"
            name="last_name"
            className="input_field"
            placeholder="Couples Massage for 2 hours"
            pattern="[A-Za-z]{4,20}"
          />
        </div>
        <div>
          <Label htmlFor="first_name" text="Duration *" />
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="1 hr 60 min" />
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
        <div className="w-full space-y-1 text-left ">
          <Label htmlFor="last_name" text="Price *" />
          <input
            type="text"
            name="last_name"
            className="input_field"
            placeholder="£369"
            pattern="[A-Za-z]{4,20}"
          />
        </div>
        <div className="w-full space-y-1 text-left ">
          <Label htmlFor="last_name" text="Sale Price *" />
          <input
            type="text"
            name="last_name"
            className="input_field"
            placeholder="£369"
            pattern="[A-Za-z]{4,20}"
          />
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
      <div>
        <li class="w-full list-none">
          <div class="flex items-center">
            <input
              id="list-radio-license"
              type="checkbox"
              value=""
              name="list-radio"
              class=""
            />
            <label
              for="list-radio-license"
              class="w-full ms-2 text-sm font-medium text-gray-900 "
            >
              Feature service (max 5 per venue)
            </label>
          </div>
        </li>
        <li class="w-full list-none">
          <div class="flex items-center">
            <input
              id="list-radio-license"
              type="checkbox"
              value=""
              name="list-radio"
              class=""
            />
            <label
              for="list-radio-license"
              class="w-full ms-2 text-sm font-medium text-gray-900 "
            >
              Make these service online
            </label>
          </div>
        </li>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button variant="disable">Cancel</Button>
        <Button variant="primary">Save</Button>
      </div>
    </div>
  );
};

export default EditServiceModal;
