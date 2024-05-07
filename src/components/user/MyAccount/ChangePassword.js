import React from "react";

import { POST } from "@/app/api/post";
import { Spinner, Button, Error, Success } from "@/components";
import { useSelector } from "react-redux";

const ChangePassword = () => {
  const user = useSelector((state) => state.userAuth.user) || '';
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const updatePass = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({ url: "/change-password", form: e.target, token: user?.api_token });
    setLoading(false);
    if (resp && resp.status != 'Error') {
      setSuccess(resp.message);
      setError("");
      e.target.reset();
    } else {
      setError(resp.message);
      setSuccess("");
    };
  };

  return (
    <div className="p-3 space-y-4 bg-white rounded-md xl:p-5">
      <p className="text-xl text-[#25324B] font-semibold">Change Password</p>
      <div className="space-y-4">
        <form className="space-y-4" noValidate onSubmit={e => updatePass(e)}>
          <div className="w-full space-y-1 text-left md:w-1/2">
            <label htmlFor="country" className="label_text">
              Current password
            </label>
            <input
              type="password"
              name="old_password"
              id="old_password"
              className="input_field"
              placeholder="Enter your current password"
              pattern="[a-zA-Z0-9]{3,}"
              // pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'    
              required
            />
            <p className="error">Min 3 Character Required</p>
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
              pattern="[a-zA-Z0-9]{3,}"
              // pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'
              required
            />
            <p className="error">Min 3 Character Required</p>
          </div>
          <div className="w-full space-y-1 text-left md:w-1/2">
            <label htmlFor="country" className="label_text">
              Confirm password
            </label>
            <input
              type="password"
              className="input_field"
              placeholder="Enter your Confirm password"
              id="cpassword"
              // pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'
              required
            />
            <p className="error">Password not matched</p>
          </div>
          <Button type="submit" variant="primary" disabled={loading}>
            <Spinner show={loading} width='35' height='35' text="Change" />
          </Button>
          {error && <Error error={error} />}
          {success && <Success message={success} />}
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
