import React from "react";
import Label from "@/components/ui/form/label";
import Button from "@/components/ui/button";

const EditCustomerModal = () => {
  return (
    <div className="space-y-3">
      <div className="flex flex-col w-full gap-3 lg:flex-row">
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="first_name" text="First Name" />
          <input
            type="text"
            name="first_name"
            className="input_field"
            placeholder="Enter First Name"
            pattern="[A-Za-z]{4,20}"
          />
        </div>
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="last_name" text="Last Name" />
          <input
            type="text"
            name="last_name"
            className="input_field"
            placeholder="Enter Last Name"
            pattern="[A-Za-z]{4,20}"
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 lg:flex-row">
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="first_name" text="Mobile Number" />
          <input
            type="text"
            name="first_name"
            className="input_field"
            placeholder="Enter Mobile Number"
            pattern="[A-Za-z]{4,20}"
          />
        </div>
        <div className="w-full space-y-1 text-left lg:w-1/2">
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
      <div className="flex flex-col w-full gap-3 lg:flex-row">
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="first_name" text="Gender" />
          <input
            type="text"
            name="first_name"
            className="input_field"
            placeholder="Enter Gender"
            pattern="[A-Za-z]{4,20}"
          />
        </div>
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="last_name" text="Date of Birth" />
          <input
            type="text"
            name="last_name"
            className="input_field"
            placeholder="Enter Date of Birth"
            pattern="[A-Za-z]{4,20}"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="first_name" text="Status" />
        <div className="flex items-center justify-start">
          <li class="w-full list-none">
            <div class="flex items-center">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className=""
              />
              <label
                for="list-radio-license"
                class="w-full ms-2 text-sm font-medium text-gray-900 "
              >
                Active
              </label>
            </div>
          </li>
          <li class="w-full list-none">
            <div class="flex items-center">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className=""
              />
              <label
                for="list-radio-license"
                class="w-full ms-2 text-sm font-medium text-gray-900 "
              >
                Inactive
              </label>
            </div>
          </li>
          <li class="w-full list-none">
            <div class="flex items-center">
              <input
                id="list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className=""
              />
              <label
                for="list-radio-license"
                class="w-full ms-2 text-sm font-medium text-gray-900 "
              >
                Pending
              </label>
            </div>
          </li>
        </div>
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="first_name" text="Comment" />
        <textarea
          type="textarea"
          rows="4"
          name="first_name"
          className="input_field"
          placeholder="Type here..."
        />
      </div>
      <Button variant="primary" className="w-full mx-auto">
        Save
      </Button>
    </div>
  );
};

export default EditCustomerModal;
