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

const page = () => {
  // const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-screen grid lg:grid-cols-2 place-items-center items-center h-screen">
      <div className="lg:block hidden">
        <Image
          src={signin}
          loading="lazy"
          //   fill
          alt="signin"
          className="h-screen"
        />
      </div>
      <div className="lg:w-full w-screen bg-[#FAFAFA] h-full p-3 relative z-0">
        <div className="space-y-4">
          <div>
            <Link href="/">
              <Image src={logo} loading="lazy" alt="logo" className="mx-auto" />
            </Link>
          </div>
          <div className="bg-white xl:w-3/5 w-full rounded-lg shadow-md mx-auto p-4">
            <div className="space-y-3">
              <p className="text-lg font-semibold">Login</p>
              <div className="text-left space-y-1 w-full">
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
              <div className="text-left relative space-y-1 w-full">
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
                    className="absolute top-8 cursor-pointer right-3 text-gray-400"
                  />
                ) : (
                  <BsEyeSlashFill
                    size={24}
                    className="absolute top-8 cursor-pointer right-3 text-gray-400"
                  />
                )}
              </button> */}
              </div>
              <p className="text-xs">
                8 characters with a mix of letters, numbers & symbols
              </p>
              <button type="button" className="primary_button w-full uppercase">
                login
              </button>
              <Link href="/forgot-password">
                <p className="font-semibold text-center">Forgot password?</p>
              </Link>
              <div className="inline-flex items-center justify-center w-full">
                <hr className="w-80 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                  OR
                </span>
              </div>
              <div className="flex items-center gap-5 justify-center">
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
                  <div className="bg-black rounded-full p-3">
                    <FaApple className="text-2xl text-white" />
                  </div>
                  {/* <p>Apple</p> */}
                </div>
              </div>
              <p className="text-center">
                Not a member?{" "}
                <Link href="/register">
                  <span className="text-primary_color font-semibold">
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
