import Button from "@/components/ui/button";
import React, { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const ChangePass = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-4 ">
      <p className="text-2xl font-semibold">Change password</p>
      <div className="w-full p-3 space-y-2 bg-white rounded-xl">
        <div className="relative w-full space-y-1 text-left lg:w-1/2">
          <label htmlFor="country" className="label_text">
            Current password
          </label>
          <input
            type={showPassword ? "text" : "Current password"}
            name="Current password"
            className="input_field"
            placeholder="Enter your Current password"
            pattern="[a-zA-Z0-9]{3,}"
            // pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'
            required
          />
          <input type="hidden" name="device_type" />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {(showPassword && (
              <BsEyeFill
                size={24}
                className="absolute mt-[0.1rem] text-gray-400 cursor-pointer top-2/4 right-3"
              />
            )) || (
              <BsEyeSlashFill
                size={24}
                className="absolute mt-[0.1rem] text-gray-400 cursor-pointer top-2/4 right-3"
              />
            )}
          </button>
        </div>
        <div className="relative w-full space-y-1 text-left lg:w-1/2">
          <label htmlFor="country" className="label_text">
            New password
          </label>
          <input
            type={showPassword ? "text" : "New password"}
            name="New password"
            className="input_field"
            placeholder="Enter your Password"
            pattern="[a-zA-Z0-9]{3,}"
            // pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'
            required
          />
          <input type="hidden" name="device_type" />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {(showPassword && (
              <BsEyeFill
                size={24}
                className="absolute mt-[0.1rem] text-gray-400 cursor-pointer top-2/4 right-3"
              />
            )) || (
              <BsEyeSlashFill
                size={24}
                className="absolute mt-[0.1rem] text-gray-400 cursor-pointer top-2/4 right-3"
              />
            )}
          </button>
        </div>
        <div className="relative w-full space-y-1 text-left lg:w-1/2">
          <label htmlFor="country" className="label_text">
            Confirm password
          </label>
          <input
            type={showPassword ? "text" : "Confirm password"}
            name="Confirm password"
            className="input_field"
            placeholder="Enter your Password"
            pattern="[a-zA-Z0-9]{3,}"
            // pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'
            required
          />
          <input type="hidden" name="device_type" />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {(showPassword && (
              <BsEyeFill
                size={24}
                className="absolute mt-[0.1rem] text-gray-400 cursor-pointer top-2/4 right-3"
              />
            )) || (
              <BsEyeSlashFill
                size={24}
                className="absolute mt-[0.1rem] text-gray-400 cursor-pointer top-2/4 right-3"
              />
            )}
          </button>
        </div>
        <Button variant="primary">Update</Button>
      </div>
    </div>
  );
};

export default ChangePass;
