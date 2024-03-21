import Image from "next/image";
import React from "react";
import signin from "../../../public/static/images/signin.png";
import logo from "../../../public/static/images/logo.png";
import Link from "next/link";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const page = () => {
  // const [showPassword, setShowPassword] = useState(false);

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
          <div className="w-full p-4 mx-auto bg-white rounded-lg shadow-md flex justify-center items-center xl:w-3/5">
            <div className="space-y-3">
              <p className="text-lg font-semibold">Login</p>
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
                  {/* <p>GoogleGoogle</p> */}
                </div>
                <div className="space-y-3 text-center">
                  <div className="bg-[#395C94] rounded-full p-3">
                    <FaFacebookF className="text-2xl text-white" />
                  </div>
                  {/* <p className="text-sm">Facebook</p> */}
                </div>
                <div className="space-y-3 text-center">
                  <div className="border  border-1 border-[#D8DAE5] rounded-full p-3">
                    <FaInstagram className="text-2xl" />
                  </div>
                  {/* <p>Instagram</p> */}
                </div>
                <div className="space-y-3 text-center">
                  <div className="p-3 bg-black rounded-full">
                    <FaApple className="text-2xl text-white" />
                  </div>
                  {/* <p>Apple</p> */}
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
