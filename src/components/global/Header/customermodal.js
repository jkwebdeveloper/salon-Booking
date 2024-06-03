import Label from "@/components/ui/form/label";

import React from "react";

// recaptcha key :
// site key :- 6Lc-XO8pAAAAAFLC5s044ahkg011nS0tNoYMDgn2
// secret key :- 6Lc-XO8pAAAAACQ2BMhIsq3N8QiJYvwAfgiBiDqp

const customermodal = () => {
  return (
    <div className="w-full space-y-3">
      <p>Reach out to us for any inquiry</p>
      <div className="w-full space-y-1 text-left lg:w-1/2">
        <Label htmlFor="last_name" text="Last Name" />
        <input
          type="text"
          name="last_name"
          className="input_field"
          placeholder="Enter Last Name"
          pattern="[A-Za-z]{4,20}"
          required
        />
      </div>
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
        <div className="w-full space-y-1 text-left">
          <Label htmlFor="phone_number" text="Phone Number" />
          <input
            type="text"
            name="phone_number"
            className="input_field"
            placeholder="Enter your Phone Number"
            pattern="[0-9]{10}"
          />
        </div>
      </div>
    </div>
  );
};

export default customermodal;
