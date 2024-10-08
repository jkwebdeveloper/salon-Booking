"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

import { Spinner, Button, Error } from "@/components";
import { login } from "@/redux/features/userAuthSlice";
import { POST } from "@/app/api/post";
import Validation from "@/constants/validation";

const Register = () => {
  const [error, setError] = React.useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userAuth.user) || "";
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  if (user) {
    router.push("/");
  }

  const registerUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({ url: "/register", form: e.target });
    if (resp.code == 200 && Object.keys(resp.data).length > 0) {
      dispatch(login(resp.data));
      router.push("/");
    } else {
      setLoading(false);
      setError(resp.message);
    }
  };

  return (
    <div className="grid overflow-x-hidden lg:grid-cols-2">
      <div className="hidden lg:block bg-[url('/static/images/signin.png')] bg-cover"></div>
      <div className="lg:w-full overflow-x-hidden bg-[#FAFAFA] p-3 relative z-0 min-h-screen">
        <div className="flex flex-col items-center justify-center h-full space-y-4 overflow-x-hidden">
          <div>
            <Link href="/">
              <Image
                src={"/static/images/logo.png"}
                loading="lazy"
                alt="logo"
                className="mx-auto"
                width={150}
                height={75}
              />
            </Link>
          </div>
          <div className="p-4 mx-auto overflow-x-hidden bg-white rounded-lg shadow-md max-w-[35rem]">
            <p className="mb-2 text-lg font-semibold">
              Welcome to the{" "}
              <span className="text-primary_color">PamperTree</span>
            </p>
            <p className="text-sm text-[#808080] mb-4">
              Tell us about yourself. The more we know, the better we get for
              you, and the easier it is to look after your bookings.
            </p>
            <form
              className="space-y-2"
              noValidate
              onSubmit={(e) => registerUser(e)}
            >
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <label htmlFor="fname" className="label_text">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="fname"
                    className="input_field"
                    placeholder="First Name"
                    pattern={Validation?.firstname?.pattern}
                    required
                  />
                  <p className="error">{Validation?.firstname?.msg}</p>
                </div>
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <label htmlFor="lname" className="label_text">
                    {" "}
                    Last Name{" "}
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="lname"
                    className="input_field"
                    placeholder="Last name"
                    pattern={Validation?.lastname?.pattern}
                    required
                  />
                  <p className="error">{Validation?.lastname?.msg}</p>
                </div>
              </div>
              <div className="w-full space-y-1 text-left">
                {/* <Label htmlFor="salon_name" text="Surname" required={true} /> */}
                <label htmlFor="lname" className="label_text">
                  {" "}
                  Surname{" "}
                </label>
                <input
                  type="text"
                  name="salon_name"
                  id="salon_name"
                  className="input_field"
                  placeholder="Surname"
                  pattern="^[a-zA-Z0-9\s]{4,}$"
                  required
                />
                <p className="error">Min 4 Character Required</p>
              </div>
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <label htmlFor="email" className="label_text">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input_field"
                    placeholder="Enter your email"
                    pattern={Validation?.email?.pattern}
                    required
                  />
                  <p className="error">{Validation?.email?.msg}</p>
                </div>
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <label htmlFor="phone" className="label_text">
                    {" "}
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    id="phone"
                    className="input_field"
                    placeholder="Enter Your Phone Number"
                    pattern={Validation?.phone?.pattern}
                    maxLength={10}
                    required
                  />
                  <p className="error">{Validation?.phone?.msg}</p>
                </div>
              </div>
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="relative w-full space-y-1 text-left lg:w-1/2">
                  <label htmlFor="password" className="label_text">
                    {" "}
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    className="input_field"
                    placeholder="Enter Your Password"
                    pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                    required
                  />
                  <p className="error max-w-[250px]">
                    {Validation?.password?.msg}
                  </p>
                  <button
                    type="button"
                    className="absolute top-[1.85em] right-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {(showPassword && (
                      <BsEyeFill
                        size={24}
                        className="text-gray-400 cursor-pointer"
                      />
                    )) || (
                        <BsEyeSlashFill
                          size={24}
                          className="text-gray-400 cursor-pointer"
                        />
                      )}
                  </button>
                </div>
                <div className="relative w-full space-y-1 text-left lg:w-1/2">
                  <label htmlFor="cpassword" className="label_text">
                    {" "}
                    Confirm Password{" "}
                  </label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="cpassword"
                    className="input_field"
                    placeholder="Confirm Your Password"
                    required
                  />
                  <p className="error">{Validation?.confirmPassword?.msg}</p>
                  <button
                    type="button"
                    className="absolute top-[1.85em] right-3"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {(showConfirmPassword && (
                      <BsEyeFill
                        size={24}
                        className="text-gray-400 cursor-pointer"
                      />
                    )) || (
                        <BsEyeSlashFill
                          size={24}
                          className="text-gray-400 cursor-pointer"
                        />
                      )}
                  </button>
                </div>
              </div>
              <div className="w-full space-y-1 text-left">
                <label htmlFor="address" className="label_text">
                  {" "}
                  Address line 1 (or Company Name){" "}
                </label>
                <input
                  type="text"
                  name="address_line_one"
                  id="address"
                  className="input_field"
                  placeholder="Enter your Address"
                  pattern={Validation?.address?.pattern}
                  required
                />
                <p className="error">{Validation?.address?.msg}</p>
              </div>
              <div className="w-full space-y-1 text-left">
                <label htmlFor="address2" className="label_text">
                  {" "}
                  Address line 2 (Landmark){" "}
                </label>
                <input
                  type="text"
                  name="address_line_two"
                  id="address2"
                  className="input_field"
                  placeholder="Enter your Address"
                />
              </div>
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <label htmlFor="city" className="label_text">
                    {" "}
                    City{" "}
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="input_field"
                    placeholder="City"
                    pattern={Validation?.city?.pattern}
                    required
                  />
                  <p className="error">{Validation?.city?.msg}</p>
                </div>
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <label htmlFor="postcode" className="label_text">
                    {" "}
                    Postcode{" "}
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    id="postcode"
                    className="input_field"
                    placeholder="Postcode"
                    pattern={Validation?.postcode?.pattern}
                    maxlength="6"
                    required
                  />
                  <p className="error">{Validation?.postcode?.msg}</p>
                </div>
              </div>
              <div>
                <label htmlFor="gender" className="block mt-3 mb-2 label_text">
                  {" "}
                  You are{" "}
                </label>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  <div>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      className="hidden peer"
                      required
                      defaultChecked
                    />
                    <label
                      htmlFor="female"
                      className="block text-center w-full p-1 text-[#0AADA4] bg-white border border-[#0AADA4] rounded-[7px] cursor-pointer dark:hover:text-white dark:peer-checked:text-white peer-checked:bg-[#0AADA4] peer-checked:text-white  dark:bg-[#9ec7c5] dark:hover:bg-[#0AADA4]"
                    >
                      {" "}
                      Female{" "}
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="male"
                      className="block text-center w-full p-1 leading-6 text-[#0AADA4] bg-white border border-[#0AADA4] rounded-[7px] cursor-pointer dark:hover:text-white dark:peer-checked:text-white peer-checked:bg-[#0AADA4] peer-checked:text-white  dark:bg-[#9ec7c5] dark:hover:bg-[#0AADA4]"
                    >
                      {" "}
                      Male{" "}
                    </label>
                  </div>
                </div>
              </div>
              <input
                type="hidden"
                name="device_type"
                value={
                  (typeof window != "undefined" &&
                    /Mobi/i.test(window.navigator.userAgent) &&
                    2) ||
                  1
                }
              />
              <div class="flex items-center gap-2 py-3">
                <input
                  id="list-radio-license"
                  type="checkbox"
                  defaultValue=""
                  onInput={e => e.target.checked ? e.target.value = "true" : e.target.value = ""}
                  // name="list-radio"
                  // class=""
                  required
                />
                <label
                  for="list-radio-license"
                  class="w-full ms-2 text-sm font-medium text-gray-900 "
                >
                  By submitting this form you agree to our{" "}
                  <Link href="/terms-conditions">
                    <span className="font-semibold text-primary_color">
                      Terms and Conditions
                    </span>
                  </Link>
                </label>
              </div>
              <Button
                type="submit"
                variant="primary"
                className="md:w-full"
                disabled={loading}
              >
                <Spinner
                  show={loading}
                  width="35"
                  height="35"
                  text="Join pamper tree"
                />
              </Button>
              {error && <Error error={error} />}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
