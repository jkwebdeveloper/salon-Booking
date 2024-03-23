"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/static/images/logo.png";
import Link from "next/link";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import validateInput from "@/lib/validateinput";
import { POST } from "../api/post";
import { Button } from "@/components/ui/button";
import { login, logout } from "@/redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Signin = () => {
  const [showPassword, setShowPassword] = React.useState(false),
    dispatch = useDispatch(),
    router = useRouter(),
    user = useSelector((state) => state.auth.user);

  if (user) {
    router.push('/');
  }

  const signIn = async (e) => {
    e.preventDefault();
    const validForm = await validateInput(e.target);
    if (validForm.length > 0) {
      validForm.forEach((input) => {
        input.classList.add("border-red-500", "text-red-500");
        input.addEventListener("input", () => {
          input.classList.remove("border-red-500", "text-red-500");
        });
      });
      return;
    }
    const { data } = await POST.request({ url: "/login", form: e.target });
    if (data.code === 200) {
      dispatch(login(data.data));
      router.push("/");
    }
  };

  return (
    <div className="grid w-screen lg:grid-cols-2">
      <div className="hidden lg:block bg-[url('/static/images/signin.png')] bg-cover"></div>
      <div className="lg:w-full bg-[rgb(250,250,250)] p-3 relative z-0 min-h-screen">
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <Link href="/" className="mb-5">
            <Image src={logo} loading="lazy" alt="logo" className="mx-auto" />
          </Link>
          <div className="flex items-center justify-center p-10 mx-auto bg-white rounded-lg shadow-sm ring-1 ring-neutral-300/40">
            <div className="space-y-3">
              <p className="text-lg font-semibold">Login</p>
              <form className="flex flex-col gap-3" noValidate onSubmit={(e) => signIn(e)} >
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
                    {" "}
                    Password{" "}
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input_field"
                    placeholder="Enter your Password"
                    // pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'
                    required
                  />
                  <input
                    type="hidden"
                    name="device_type"
                    value={typeof window != 'undefined' && (/Mobi/i.test(window.navigator.userAgent) && 2) || 1}
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
                <Button variant="primary" className="md:w-full" type="submit">
                  Login
                </Button>
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
