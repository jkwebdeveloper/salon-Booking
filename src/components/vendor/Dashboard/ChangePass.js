import React, { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useSelector } from "react-redux";

import { POST } from "@/app/api/post";
import { Error, Spinner, Success, Label } from "@/components";
import Button from "@/components/ui/button";
import Validation from "@/constants/validation";

const ChangePass = () => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const updatePass = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({
      url: "/vendor/change-password",
      form: e.target,
      token: vendor?.api_token,
    });
    setLoading(false);
    if (resp && resp.status != "Error" && resp.status != "fail") {
      setSuccess(resp.message);
      setError("");
      e.target.reset();
    } else {
      setError(resp.message);
      setSuccess("");
    }
  };

  return (
    <div className="space-y-4 ">
      <p className="text-2xl font-semibold">Change password</p>
      <form
        className="w-full p-3 space-y-2 bg-white rounded-xl"
        noValidate
        onSubmit={(e) => updatePass(e)}
      >
        <div className="w-full space-y-1 text-left md:w-1/2">
          <Label htmlFor="password" text="Password" required={true} />
          <input
            type="password"
            name="old_password"
            id="old_password"
            className="input_field"
            placeholder="Enter your current password"
            pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'
            required
          />
          <p className="error">Enter valid Pasword</p>
        </div>
        <div className="w-full space-y-1 text-left md:w-1/2">
          <label htmlFor="country" className="label_text">
            New password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="input_field"
            placeholder="Enter your New password"
            pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'
            required
          />
          <p className="error">{Validation?.password?.msg}</p>
        </div>
        <div className="w-full space-y-1 text-left md:w-1/2">
          <Label htmlFor="cpassword" text="Confirm password" required={true} />
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="cpassword"
            className="input_field"
            placeholder="Confirm Password"
            required={true}
          />
          <p className="error">{Validation?.confirmPassword?.msg}</p>
        </div>
        <Button type="submit" variant="primary" disabled={loading}>
          <Spinner show={loading} width="35" height="35" text="Change" />
        </Button>
        {error && <Error error={error} />}
        {success && <Success message={success} />}
      </form>
    </div>
  );
};

export default ChangePass;
