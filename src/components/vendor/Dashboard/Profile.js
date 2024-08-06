import { POST } from "@/app/api/post";
import { Error, Spinner, Success } from "@/components";
import Button from "@/components/ui/button";
import Validation from "@/constants/validation";
import { login } from "@/redux/features/vendorAuthSlice";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const [successfull, setSuccessFull] = React.useState(false);
  const [error, setError] = React.useState("");
  const [formState, setFormState] = React.useState({
    loading: false,
    error: '',
    success: '',
  });
  const [updated, setUpdated] = React.useState(false);
  const dispatch = useDispatch();
  const vendor = useSelector((state) => state.vendorAuth.vendor);

  const updateVendor = async (e) => {
    e.preventDefault();
    const resp = await POST.request({
      url: "/vendor/update-profile",
      form: e.target,
      token: vendor?.api_token,
      formState,
      setFormState
    });
    if (resp.code == 200 && Object.keys(resp.data).length > 0) {
      setUpdated(true);
      dispatch(login(resp.data));
    } else {
      setError(resp.message);
    }
  };
  return (
    <div className="relative w-full space-y-12 bg-white rounded-xl">
      <div className="bg-gradient-to-r  p-3 from-[#711F7E] h-fit to-[#14DBD099] rounded-t-xl">
        <div className="relative top-14">
          <div className="relative rounded-lg p-1 w-[6.5rem] h-[6.5rem] mb-2">
            <p className="flex  items-center justify-center w-28 h-28 m-3 text-4xl font-bold text-white bg-[#0AADA4] rounded-full">
              JA
            </p>
            <input
              type="file"
              className="absolute top-0 bottom-0 left-0 right-0 mt-2 cursor-pointer rounded-full max-w-[3.5rem] mx-auto opacity-0 z-2"
              name="photo"
            />
            <MdModeEditOutline className="absolute -right-5 -bottom-5  -translate-x-2 p-[4px] text-2xl text-white rounded-full bg-primary" />
          </div>
        </div>
      </div>
      <form
        className="p-3 space-y-4"
        noValidate
        onSubmit={(e) => updateVendor(e)}
      >
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
              pattern={Validation.firstname.pattern}
              defaultValue={vendor?.first_name}
              required
            />
            <p className="error">{Validation?.firstname?.msg}</p>
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
              pattern={Validation.lastname.pattern}
              defaultValue={vendor?.last_name}
              required
            />
            <p className="error">{Validation?.lastname?.msg}</p>
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
              pattern={Validation.phone.pattern}
              maxLength={10}
              required
              defaultValue={vendor?.phone_number}
            />
            <p className="error">{Validation?.phone?.msg}</p>
          </div>
        </div>
        <Button variant="primary" type="submit" disabled={formState?.loading}>
          <Spinner
            show={formState?.loading}
            width="25"
            height="25"
            text={"Update"}
          />
        </Button>
        {formState?.error && <Error error={formState?.error} />}
        {formState?.success && <Success message={formState?.success} />}
      </form>
    </div>
  );
};

export default Profile;
