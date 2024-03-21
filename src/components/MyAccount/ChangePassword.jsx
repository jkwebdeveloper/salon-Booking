import React from "react";
import { Button } from "../ui/button";

const ChangePassword = () => {
  return (
    <div className="space-y-4 bg-white shadow-lg xl:p-5 p-3">
      <p className="text-xl text-[#25324B] font-semibold">Change Password</p>
      <div className="space-y-4">
        <form className="space-y-4">
          <div className="text-left space-y-1 md:w-1/2 w-full">
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
          <div className="text-left space-y-1 w-full md:w-1/2">
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
          <div className="text-left space-y-1 w-full md:w-1/2">
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
