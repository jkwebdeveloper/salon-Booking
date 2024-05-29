"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { POST } from "@/app/api/post";
import { login } from "@/redux/features/vendorAuthSlice";
import { Error, Spinner, Button } from "@/components";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false),
    dispatch = useDispatch(),
    router = useRouter(),
    vendor = useSelector((state) => state.vendorAuth.vendor),
    [loading, setLoading] = React.useState(false),
    [error, setError] = React.useState("");

  const vendorLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({ url: "/vendor/login", form: e.target });
    setLoading(false);
    if (resp) {
      if (resp.status != "Error" && Object.keys(resp.data).length > 0) {
        dispatch(login(resp.data));
        return;
      }
      setError(resp.message);
    }
  };

  useEffect(() => {
    if (vendor) router.push("/vendor/dashboard");
  }, [vendor, router]);

  return (
    <>
      <div className="min-h-screen flex justify-center items-center relative bg-[url('/static/images/banner.jpg')] bg-cover">
        <div className="absolute space-y-4">
          <Link href="/vendor/">
            <Image
              src={"/static/images/logo.png"}
              loading="lazy"
              alt="logo"
              className="mx-auto"
              width={150}
              height={150}
            />
          </Link>
          <div className="flex items-center justify-center p-6 mx-auto bg-white rounded-lg shadow-sm ring-1 ring-neutral-300/40">
            <div className="space-y-3">
              <p className="text-lg font-semibold">Login</p>
              <form
                className="flex flex-col gap-3"
                noValidate
                onSubmit={(e) => vendorLogin(e)}
              >
                <div className="space-y-1 text-left ">
                  <label htmlFor="country" className="label_text">
                    Email Id
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-2 bg-white border rounded-md input_field"
                    placeholder="Enter your Email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    required
                  />
                  <p className="error">Enter Valid Email id</p>
                </div>
                <div className="relative w-full space-y-1 text-left">
                  <label htmlFor="country" className="label_text">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input_field"
                    placeholder="Enter your Password"
                    // pattern="[a-zA-Z0-9]{8,}"
                    // pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'
                    required
                  />
                  <p className="error max-w-[250px]">
                    Min 8 characters with a mix of letters, numbers & symbols
                  </p>
                  <input
                    type="hidden"
                    name="device_type"
                    defaultValue={
                      (typeof window != "undefined" &&
                        /Mobi/i.test(window.navigator.userAgent) &&
                        2) ||
                      1
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute pt-[1.9rem] top-0 right-3"
                  >
                    {(showPassword && (
                      <BsEyeFill
                        size={24}
                        className="text-gray-400 cursor-pointer "
                      />
                    )) || (
                      <BsEyeSlashFill
                        size={24}
                        className="text-gray-400 cursor-pointer"
                      />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="list-radio-license"
                      type="checkbox"
                      value=""
                      name="list-radio"
                      className=""
                    />
                    <label
                      htmlFor="list-radio-license"
                      className="w-full text-sm font-medium text-gray-900 ms-2 "
                    >
                      Keep me log in
                    </label>
                  </div>
                  <div>
                    <Link
                      href="/vendor/forgot-password"
                      className="block w-full font-semibold"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full md:w-full"
                    disabled={loading}
                  >
                    <Spinner
                      show={loading}
                      width="25"
                      height="25"
                      text="Login"
                      className="w-full"
                    />
                  </Button>
                  {error && <Error error={error} />}
                </div>
              </form>
              <div className="inline-flex items-center justify-center w-full">
                <hr className="h-px my-4 bg-gray-200 border-0 w-80 dark:bg-gray-700" />
                <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                  OR
                </span>
              </div>
              <div className="flex items-center justify-center gap-5 pb-3">
                <div className="space-y-3">
                  <div className="border  border-1 border-[#D8DAE5] rounded-full p-3">
                    <FcGoogle className="text-sm" />
                  </div>
                </div>
                <div className="space-y-3 text-center">
                  <div className="bg-[#395C94] rounded-full p-3">
                    <FaFacebookF className="text-sm text-white" />
                  </div>
                </div>
                <div className="space-y-3 text-center">
                  <div className="p-3 bg-black rounded-full">
                    <FaApple className="text-sm text-white" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#000D23] text-center">
                Ready to start working beautifully with Pampertree?
              </p>
              <p className="text-center">
                <Link href="/vendor/register">
                  <span className="font-semibold text-primary_color">
                    Sign up now
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
