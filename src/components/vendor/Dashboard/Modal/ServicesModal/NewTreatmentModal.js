import Button from "@/components/ui/button";
import Label from "@/components/ui/form/label";
import React from "react";

const NewTreatmentModal = () => {
  return (
    <div className="space-y-3">
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="first_name" text="Select Treatment" />
        <input
          type="text"
          name="first_name"
          className="input_field"
          placeholder="Enter Select Treatment"
          pattern="[A-Za-z]{4,20}"
        />
      </div>
      <Button variant="primary">Save</Button>
    </div>
  );
};

export default NewTreatmentModal;
