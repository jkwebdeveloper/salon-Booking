import Image from "next/image";
import React from "react";
import signin from "../../../public/static/images/signin.png";
import logo from "../../../public/static/images/logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="grid w-screen lg:grid-cols-2 overflow-x-hidden">
      <div className="hidden lg:block bg-[url('/static/images/signin.png')] bg-cover"></div>
      <div className="lg:w-full overflow-x-hidden bg-[#FAFAFA] p-3 relative z-0 min-h-screen">
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <div>
            <Link href="/">
              <Image src={logo} loading="lazy" alt="logo" className="mx-auto" />
            </Link>
          </div>
          <div className="w-full p-4 mx-auto overflow-x-hidden bg-white rounded-lg shadow-md xl:w-3/5">
            <div className="space-y-3">
              <p className="text-lg font-semibold">
                Welcome to the{" "}
                <span className="text-primary_color">PamperTree</span>
              </p>
              <p className="text-sm text-[#808080]">
                Tell us about yourself. The more we know, the better we get for
                you, and the easier it is to look after your bookings.
              </p>
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="w-full space-y-1 text-left lg:w-1/2">
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
                <div className="w-full space-y-1 text-left lg:w-1/2">
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
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="w-full space-y-1 text-left lg:w-1/2">
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
                <div className="w-full space-y-1 text-left lg:w-1/2">
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
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="w-full space-y-1 text-left lg:w-1/2">
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
                <div className="w-full space-y-1 text-left lg:w-1/2">
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
              <div className="w-full space-y-1 text-left">
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
              <div className="w-full space-y-1 text-left">
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
              <div className="w-full space-y-1 text-left">
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
              {/* <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="w-full uppercase primary_button"
                >
                  Female
                </button>
                <button
                  type="button"
                  className="w-full uppercase primary_button"
                >
                  Male
                </button>
              </div> */}
              <ul class="grid w-full gap-2 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="hosting-small"
                    name="hosting"
                    value="hosting-small"
                    class="hidden peer"
                    required
                  />
                  <label
                    for="hosting-small"
                    class="inline-flex items-center justify-between w-full p-3 text-[#0AADA4] bg-white border border-[#0AADA4] rounded-md cursor-pointer dark:hover:text-white dark:peer-checked:text-white peer-checked:bg-[#0AADA4] peer-checked:text-white  dark:bg-[#9ec7c5] dark:hover:bg-[#0AADA4]"
                  >
                    <p className="mx-auto">Female</p>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="hosting-big"
                    name="hosting"
                    value="hosting-big"
                    class="hidden peer"
                  />
                  <label
                    for="hosting-big"
                    class="inline-flex items-center justify-between w-full p-3 text-[#0AADA4] bg-white border border-[#0AADA4] rounded-md cursor-pointer dark:hover:text-white dark:peer-checked:text-white peer-checked:bg-[#0AADA4] peer-checked:text-white  dark:bg-[#9ec7c5] dark:hover:bg-[#0AADA4]"
                  >
                    <p className="mx-auto">Male</p>
                  </label>
                </li>
              </ul>
              <Button type="button" variant="primary" className="md:w-full">
                Request
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
