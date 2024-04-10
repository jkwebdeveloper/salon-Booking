import React from "react";
import Label from "@/components/ui/form/label";
import Button from "@/components/ui/button";

const EyeModal = () => {
  return (
    <div className="space-y-3">
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
    </div>
  );
};

export default EyeModal;
