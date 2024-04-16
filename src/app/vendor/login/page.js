"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { MdOutlineErrorOutline } from "react-icons/md";
import Button from "@/components/ui/button";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-screen min-h-screen">
      <div className="bg-[url('/static/images/login.png')] bg-cover"></div>
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <Link href="/">
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
            <form className="flex flex-col gap-3" noValidate>
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
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input_field"
                  placeholder="Enter your Password"
                  pattern="[a-zA-Z0-9]{3,}"
                  // pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'
                  required
                />
                <input type="hidden" name="device_type" />
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
            </form>
            <div className="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="list-radio-license"
                  type="checkbox"
                  value=""
                  name="list-radio"
                  class=""
                />
                <label
                  for="list-radio-license"
                  class="w-full ms-2 text-sm font-medium text-gray-900 "
                >
                  Keep me log in
                </label>
              </div>
              <div>
                <Link
                  href="/vendor/reset-password"
                  className="block w-full font-semibold"
                >
                  Reset your password?
                </Link>
              </div>
            </div>
            <div className="w-full mx-auto">
              <Button variant="primary" className="w-full">
                Login
              </Button>
            </div>
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
  );
};

export default Login;