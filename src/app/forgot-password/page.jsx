import Image from "next/image";
import React from "react";
import signin from "../../../public/static/images/signin.png";
import logo from "../../../public/static/images/logo.png";
import Link from "next/link";

const page = () => {
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
              <p className="text-lg font-semibold">Reset your Password</p>
              <p className="text-sm text-[#808080]">
                Enter your email address below and check your inbox for a link
                to set a new password.
              </p>
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
              <button type="button" className="primary_button w-full uppercase">
                Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
