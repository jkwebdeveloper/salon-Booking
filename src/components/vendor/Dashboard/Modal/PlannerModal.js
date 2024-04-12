import Button from "@/components/ui/button";
import Label from "@/components/ui/form/label";
import React from "react";

const PlannerModal = () => {
  return (
    <div className="w-full space-y-4">
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
  );
};

export default PlannerModal;
