'use client'
import Image from "next/image";
import React from "react";
import logo from "../../../public/static/images/logo.png";
import Link from "next/link";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import validateInput from "@/lib/validateinput";
import { POST } from "../api/post";
import { Button } from "@/components/ui/button";

const page = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const signIn = async (e) => {
    e.preventDefault();
    const validForm = await validateInput(e.target);
    if (validForm.length > 0) {
      validForm.forEach(input => {
        input.classList.add('border-red-500', 'text-red-500');
        input.addEventListener('input', () => {
          input.classList.remove('border-red-500', 'text-red-500');
        });
      });
      return;
    }
    const res = await POST.request({ url: '/login', form: e.target });
    console.log(res);
  };

  return (
    <div className="grid w-screen lg:grid-cols-2">
      <div className="hidden lg:block bg-[url('/static/images/signin.png')] bg-cover"></div>
      <div className="lg:w-full bg-[#FAFAFA] p-3 relative z-0 min-h-screen">
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <div>
            <Link href="/">
              <Image src={logo} loading="lazy" alt="logo" className="mx-auto" />
            </Link>
          </div>
          <div className="flex items-center justify-center w-full p-4 mx-auto bg-white rounded-lg shadow-md xl:w-3/5">
            <div className="space-y-3">
              <p className="text-lg font-semibold">Login</p>
              <form className="flex flex-col gap-3" noValidate onSubmit={e => signIn(e)}>
                <div className="w-full space-y-1 text-left">
                  <label htmlFor="country" className="label_text">
                    Email Id
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input_field"
                    placeholder="Enter your Email"
                    pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                    required
                  />
                </div>
                <div className="relative w-full space-y-1 text-left">
                  <label htmlFor="country" className="label_text"> Password </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input_field"
                    placeholder="Enter your Password"
                    // pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'
                    required
                  />
                  <input type="hidden" name="device" value={/Mobi/i.test(window.navigator.userAgent) && 2 || 1} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} >
                    {showPassword && <BsEyeFill size={24} className="absolute mt-[0.1rem] text-gray-400 cursor-pointer top-2/4 right-3" /> || <BsEyeSlashFill size={24} className="absolute mt-[0.1rem] text-gray-400 cursor-pointer top-2/4 right-3"
                    />}
                  </button>
                </div>
                <p className="text-xs"> 8 characters with a mix of letters, numbers & symbols </p>
                <Button variant="primary" className="md:w-full" type="submit">Login</Button>
              </form>
              <button type="button" className="w-full uppercase primary_button"> login </button>
              <Link href="/forgot-password"> <p className="font-semibold text-center">Forgot password?</p></Link>
              <div className="w-full space-y-1 text-left">
                <label htmlFor="country" className="label_text">
                  Email Id
                </label>
                <input
                  type="email"
                  name="state"
                  className="input_field"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="relative w-full space-y-1 text-left">
                <label htmlFor="country" className="label_text">
                  Password
                </label>
                <input
                  // type={showPassword ? "text" : "password"}
                  type="password"
                  name="state"
                  className="input_field"
                  placeholder="Enter your Email"
                />
                {/* <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <BsEyeFill
                    size={24}
                    className="absolute text-gray-400 cursor-pointer top-8 right-3"
                  />
                ) : (
                  <BsEyeSlashFill
                    size={24}
                    className="absolute text-gray-400 cursor-pointer top-8 right-3"
                  />
                )}
              </button> */}
              </div>
              <p className="text-xs">
                8 characters with a mix of letters, numbers & symbols
              </p>
              {/* <button type="button" className="w-full uppercase primary_button">
                login
              </button> */}
              <Button variant="primary" className="md:w-full">
                login
              </Button>
              <div>
                <Link href="/forgot-password">
                  <p className="font-semibold text-center">Forgot password?</p>
                </Link>
              </div>
              <div className="inline-flex items-center justify-center w-full">
                <hr className="h-px my-4 bg-gray-200 border-0 w-80 dark:bg-gray-700" />
                <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                  OR
                </span>
              </div>
              <div className="flex items-center justify-center gap-5">
                <div className="space-y-3">
                  <div className="border  border-1 border-[#D8DAE5] rounded-full p-3">
                    <FcGoogle className="text-2xl" />
                  </div>
                </div>
                <div className="space-y-3 text-center">
                  <div className="bg-[#395C94] rounded-full p-3">
                    <FaFacebookF className="text-2xl text-white" />
                  </div>
                </div>
                <div className="space-y-3 text-center">
                  <div className="border  border-1 border-[#D8DAE5] rounded-full p-3">
                    <FaInstagram className="text-2xl" />
                  </div>
                </div>
                <div className="space-y-3 text-center">
                  <div className="p-3 bg-black rounded-full">
                    <FaApple className="text-2xl text-white" />
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

export default page;
