"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { MdOutlineErrorOutline } from "react-icons/md";

import { login } from "@/redux/features/userAuthSlice";
import { POST } from "@/app/api/post";
import { Spinner, Button, Error } from '@/components';

const Signin = () => {
  const [showPassword, setShowPassword] = React.useState(false),
    dispatch = useDispatch(),
    router = useRouter(),
    user = useSelector((state) => state.userAuth.user),
    [loading, setLoading] = React.useState(false),
    [error, setError] = React.useState("");

  const userSignin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({ url: "/login", form: e.target });
    setLoading(false);
    if (resp) {
      if (resp.status != 'Error' && Object.keys(resp.data).length > 0) {
        dispatch(login(resp.data));
        return;
      }
      setError(resp.message);
    }
  };

  useEffect(() => {
    if (user) router.push("/my-account");
  }, [user, router]);
  return (
    <div className="grid w-screen lg:grid-cols-2">
      <div className="hidden lg:block bg-[url('/static/images/signin.png')] bg-cover"></div>
      <div className="lg:w-full bg-[rgb(250,250,250)] p-3 relative z-0 min-h-screen">
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <Link href="/">
            <Image src={'/static/images/logo.png'} loading="lazy" alt="logo" className="mx-auto" width={150} height={150} />
          </Link>
          <div className="flex items-center justify-center p-10 mx-auto bg-white rounded-lg shadow-sm ring-1 ring-neutral-300/40">
            <div className="space-y-3">
              <p className="text-lg font-semibold">Login</p>
              <form className="flex flex-col gap-3" noValidate onSubmit={(e) => userSignin(e)} >
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
                </div>
                <div className="relative w-full space-y-1 text-left">
                  <label htmlFor="country" className="label_text">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"} name="password"
                    className="input_field"
                    placeholder="Enter your Password"
                    pattern="[a-zA-Z0-9]{3,}"
                    // pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'
                    required
                  />
                  <input
                    type="hidden"
                    name="device_type"
                    defaultValue={typeof window != 'undefined' && (/Mobi/i.test(window.navigator.userAgent) && 2) || 1}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
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
                <p className="mb-3 text-xs text-neutral-400">
                  {" "}
                  8 characters with a mix of letters, numbers & symbols{" "}
                </p>
                <Button variant="primary" className="md:w-full" type="submit" disabled={loading}>
                  <Spinner show={loading} width='35' height='35' text="Login" />
                </Button>
                {error && <Error error={error} />}
              </form>
              <Link href="/forgot-password" className="block w-full mt-5 font-semibold text-center">
                Forgot password?
              </Link>
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
                  <div className="border  border-1 border-[#D8DAE5] rounded-full p-3">
                    <FaInstagram className="text-sm" />
                  </div>
                </div>
                <div className="space-y-3 text-center">
                  <div className="p-3 bg-black rounded-full">
                    <FaApple className="text-sm text-white" />
                  </div>
                </div>
              </div>
              <p className="text-center">
                Not a member?{" "}
                <Link href="/register">
                  <span className="font-semibold text-primary_color">
                    Register
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
