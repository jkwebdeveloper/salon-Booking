import React from "react";
import { Button } from "../ui/button";

const ChangePassword = () => {
  return (
    <div className="p-3 space-y-4 bg-white rounded-md xl:p-5">
      <p className="text-xl text-[#25324B] font-semibold">Change Password</p>
      <div className="space-y-4">
        <form className="space-y-4">
          <div className="w-full space-y-1 text-left md:w-1/2">
            <label htmlFor="country" className="label_text">
              Current password
            </label>
            <input
              type="text"
              name="state"
              className="input_field"
              placeholder="Enter your current password"
            />
          </div>
          <div className="w-full space-y-1 text-left md:w-1/2">
            <label htmlFor="country" className="label_text">
              New password
            </label>
            <input
              type="text"
              name="state"
              className="input_field"
              placeholder="Enter your New password"
            />
          </div>
          <div className="w-full space-y-1 text-left md:w-1/2">
            <label htmlFor="country" className="label_text">
              Confirm password
            </label>
            <input
              type="text"
              name="state"
              className="input_field"
              placeholder="Enter your Confirm password"
            />
          </div>
          <Button variant="primary">Change</Button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
