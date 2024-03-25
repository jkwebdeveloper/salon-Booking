import Image from "next/image";
import React from "react";
import Link from "next/link";

import logo from "../../../public/static/images/logo.png";
import { Button } from "@/components";

const ForgotPassword = () => {
  return (
    <div className="grid w-screen lg:grid-cols-2">
      <div className="hidden lg:block bg-[url('/static/images/signin.png')] bg-cover"></div>
      <div className="lg:w-full bg-[rgb(250,250,250)] p-3 relative z-0 min-h-screen">
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <div>
            <Link href="/">
              <Image src={logo} loading="lazy" alt="logo" className="mx-auto" />
            </Link>
          </div>
          <div className="w-full p-4 mx-auto bg-white rounded-lg shadow-md max-w-96">
            <div className="space-y-3">
              <p className="text-lg font-semibold">Reset your Password</p>
              <p className="text-sm text-[#808080]">
                Enter your email address below and check your inbox for a link
                to set a new password.
              </p>
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
              <Button variant="primary" className="md:w-full">
                Request
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
