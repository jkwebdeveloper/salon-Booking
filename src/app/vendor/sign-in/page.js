import { Banner, Label } from "@/components";
import React from "react";

const SignIn = () => {
  return (
    <div>
      <Banner
        title="Enter your details to request a free
consultation and demo."
      />
      <div className="container relative max-w-[1000px] mx-auto  md:mt-[-3rem] mt-3 md:mb-10 z-[2]">
        <div className="p-3 space-y-4 bg-white shadow-lg xl:p-8 rounded-xl ring-1 ring-primary/5">
          <div className="w-full space-y-1 text-left">
            <label htmlFor="city" className="label_text text-[#000D23] text-sm">
              Salon name*
            </label>
            <input
              type="text"
              name="Amount"
              className="input_field"
              placeholder="Enter here..."
              pattern="[A-Za-z]{4,20}"
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
              />
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="last_name" text="Last Name" />
              <input
                type="text"
                name="last_name"
                className="input_field"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
