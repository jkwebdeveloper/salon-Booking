import React from "react";

import { POST } from "@/app/api/post";
import { Spinner, Button, Error } from "@/components";

const ChangePassword = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const updatePass = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userLocal = localStorage.getItem("user");
    const user = userLocal && JSON.parse(userLocal);
    const resp = await POST.request({ url: "/login", form: e.target, token: user?.api_token });
    setLoading(false);
    if (resp) {
      if (resp.status != 'Error' && Object.keys(resp.data).length > 0) {
        dispatch(login(resp.data));
        return;
      }
      setError(resp.message);
    }
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
          </div>
          <div className="w-full space-y-1 text-left md:w-1/2">
            <label htmlFor="country" className="label_text">
              Confirm password
            </label>
            <input
              type="password"
              name="cpassword"
              className="input_field"
              placeholder="Enter your Confirm password"
              id="cpassword"
              // pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'
              required
            />
          </div>
          <Button type="submit" variant="primary" disabled={loading}>
            <Spinner show={loading} width='35' height='35' text="Change" />
          </Button>
          {error && <Error error={error} />}
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
