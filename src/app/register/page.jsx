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
              <p className="text-lg font-semibold">
                Welcome to the{" "}
                <span className="text-primary_color">PamperTree</span>
              </p>
              <p className="text-sm text-[#808080]">
                Tell us about yourself. The more we know, the better we get for
                you, and the easier it is to look after your bookings.
              </p>
              <div className="flex lg:flex-row flex-col w-full gap-3">
                <div className="text-left space-y-1 w-full lg:w-1/2">
                  <label htmlFor="city" className="label_text">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    className="input_field"
                    placeholder="Enter your Name"
                  />
                </div>
                <div className="text-left space-y-1 w-full lg:w-1/2">
                  <label htmlFor="state" className="label_text">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    className="input_field"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row flex-col w-full gap-3">
                <div className="text-left space-y-1 w-full lg:w-1/2">
                  <label htmlFor="city" className="label_text">
                    Email
                  </label>
                  <input
                    type="email"
                    name="city"
                    className="input_field"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="text-left space-y-1 w-full lg:w-1/2">
                  <label htmlFor="state" className="label_text">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="state"
                    className="input_field"
                    placeholder="Enter your state"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row flex-col w-full gap-3">
                <div className="text-left space-y-1 w-full lg:w-1/2">
                  <label htmlFor="city" className="label_text">
                    Password
                  </label>
                  <input
                    type="email"
                    name="city"
                    className="input_field"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="text-left space-y-1 w-full lg:w-1/2">
                  <label htmlFor="state" className="label_text">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    name="state"
                    className="input_field"
                    placeholder="Enter your state"
                  />
                </div>
              </div>
              <div className="text-left space-y-1 w-full">
                <label htmlFor="country" className="label_text">
                  Address line 1
                </label>
                <input
                  type="text"
                  name="state"
                  className="input_field"
                  placeholder="Enter your state"
                />
              </div>
              <div className="text-left space-y-1 w-full">
                <label htmlFor="country" className="label_text">
                  Address line 2
                </label>
                <input
                  type="text"
                  name="state"
                  className="input_field"
                  placeholder="Enter your state"
                />
              </div>
              <div className="text-left space-y-1 w-full">
                <label htmlFor="country" className="label_text">
                  Postcode
                </label>
                <input
                  type="text"
                  name="state"
                  className="input_field"
                  placeholder="Postcode"
                />
              </div>
              <label htmlFor="country" className="label_text">
                You are
              </label>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="primary_button w-full uppercase"
                >
                  Female
                </button>
                <button
                  type="button"
                  className="primary_button w-full uppercase"
                >
                  Male
                </button>
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
