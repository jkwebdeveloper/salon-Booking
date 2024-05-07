import { POST } from "@/app/api/post";
import { Spinner } from "@/components";
import Button from "@/components/ui/button";
import { login } from "@/redux/features/vendorAuthSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const [successfull, setSuccessFull] = React.useState(false);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [updated, setUpdated] = React.useState(false);
  const dispatch = useDispatch();
  const vendor = useSelector((state) => state.vendorAuth.vendor);

  const updateVendor = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({ url: "/vendor/update-profile", form: e.target, token: vendor?.api_token });
    setLoading(false);
    if (resp.code == 200 && Object.keys(resp.data).length > 0) {
      setUpdated(true);
      dispatch(login(resp.data));
    } else {
      setError(resp.message);
    }
  }
  return (
    <div className="relative w-full space-y-12 bg-white rounded-xl">
      <div className="bg-gradient-to-r  p-3 from-[#711F7E] h-fit to-[#14DBD099] rounded-t-xl">
        <div className="relative top-14">
          <p className="flex  items-center justify-center w-28 h-28 m-3 text-4xl font-bold text-white bg-[#0AADA4] rounded-full">
            JA
          </p>
        </div>
      </div>
      <form className="p-3 space-y-4" noValidate onSubmit={e => updateVendor(e)}>
        <div className="flex flex-col w-full gap-3 lg:flex-row">
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="first_name" className="label_text">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="input_field"
              placeholder="Enter your Name"
              pattern="[A-Za-z]{4,20}"
              defaultValue={vendor?.first_name}
              required
            />
            <p className="error">Min 4 Character Required</p>
          </div>
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="last_name" className="label_text">
              {" "}
              Last Name{" "}
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="input_field"
              placeholder="Enter your name"
              pattern="[A-Za-z]{4,20}"
              defaultValue={vendor?.last_name}
              required
            />
            <p className="error">Min 4 Character Required</p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-3 lg:flex-row">
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="email" className="label_text">
              Email*
            </label>
            <input
              type="text"
              id="email"
              className="input_field"
              placeholder="Enter your Name"
              defaultValue={vendor?.email}
              disabled
            />
          </div>
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="phone_number" className="label_text">
              Phone number*
            </label>
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              className="input_field"
              placeholder="Enter your name"
              pattern="[0-9]{10}"
              maxLength={10}
              required
              defaultValue={vendor?.phone_number}
            />
            <p className="error">Enter Valid Phone number</p>
          </div>
        </div>
        <Button variant="primary" type="submit" disabled={loading}>
          <Spinner
            show={loading}
            width="25"
            height="25"
            text={updated && 'Updated' || 'Update'}
          />
        </Button>
      </form>
    </div>
  );
};

export default Profile;
