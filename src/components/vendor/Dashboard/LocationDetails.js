import Button from "@/components/ui/button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { POST } from "@/app/api/post";
import { Error, Spinner, Success } from "@/components";
import { login } from "@/redux/features/vendorAuthSlice";

const LocationDetails = () => {
  const dispatch = useDispatch();
  const vendor = useSelector((state) => state.vendorAuth.vendor);
  const [formState, setFormState] = React.useState({
    loading: false,
    error: "",
    success: "",
  });

  const updateProfile = async (e) => {
    e.preventDefault();
    const resp = await POST.request({ url: '/vendor/update-profile', form: e.target, token: vendor.api_token, formState, setFormState });
    if (resp && resp.code === 200) {
      dispatch(login(resp.data));
    }
  }
  return (
    <form className="space-y-4" noValidate onSubmit={e => updateProfile(e)}>
      <p className="text-2xl font-semibold">Location Details</p>
      <div className="w-full p-3 space-y-4 bg-white rounded-xl">
        <div className="w-full space-y-1 text-left">
          <label htmlFor="country" className="label_text">
            Address line 1*
          </label>
          <input
            className="input_field"
            placeholder="Street 420, Addington"
            name="address_line_one"
            pattern="^[a-zA-Z0-9\s]{0,}$"
            defaultValue={vendor?.address_line_one || ""}
            required
          />
          <p className="error">Address Required</p>
        </div>
        <div className="w-full space-y-1 text-left">
          <label htmlFor="country" className="label_text">
            Address line 2
          </label>
          <input
            name="address_line_two"
            className="input_field"
            placeholder="Type here..."
            defaultValue={vendor?.address_line_two || ""}
          />
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-grow">
            <label htmlFor="city" className="label_text">
              City
            </label>
            <input
              name="city"
              className="input_field"
              placeholder="Type here..."
              pattern="^[a-zA-Z0-9\s]{0,}$"
              defaultValue={vendor?.city || ""}
              required
            />
            <p className="error">City Required</p>
          </div>
          <div className="flex-grow">
            <label htmlFor="postcode" className="label_text">
              Postcode
            </label>
            <input
              name="postcode"
              className="input_field"
              placeholder="Type here..."
              pattern="[0-9]{6}"
              maxlength="6"
              required
              defaultValue={vendor?.postcode || ""}
            />
            <p className="error">Enter valid postcode</p>
          </div>
          <div className="flex-grow">
            <label htmlFor="country" className="label_text">
              Country
            </label>
            <input
              name="country"
              className="input_field"
              placeholder="Type here..."
              pattern="[A-Za-z]{2,20}"
              defaultValue={vendor?.country || "UK"}
              required
            />
          </div>
        </div>
        <Button type="submit" variant="primary" disabled={formState?.loading}>
          <Spinner
            show={formState?.loading}
            width="25"
            height="25"
            text="Save"
          />
        </Button>
        {formState?.error && <Error error={formState?.error} />}
        {formState?.success && <Success message={formState?.success} />}
      </div>
    </form>
  );
};

export default LocationDetails;
