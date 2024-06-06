"use client";
import { Banner, Error, Label, Spinner } from "@/components";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/button";
import SuccessfullModal from "./SuccessfullModal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { POST } from "@/app/api/post";
import { useDispatch } from "react-redux";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Validation from "@/constants/validation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Register = () => {
  const dispatch = useDispatch();

  const [successfull, setSuccessFull] = useState(false);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [currentTab, setCurrentTab] = useState("Business");

  // const changeTab = (tab = "basic") => setCurrentTab(tab);
  const [activeTab, setActiveTab] = useState("Business");

  const changeTab = (tab) => {
    setCurrentTab(tab);
    setActiveTab(tab);
  };
  const registerVendor = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({
      url: "/vendor/register",
      form: e.target,
    });
    setLoading(false);
    if (resp.code == 200 && Object.keys(resp.data).length > 0) {
      setSuccessFull(true);
      e.target.reset();
    } else {
      setError(resp.message);
    }
  };

  return (
    <div>
      {/* <Banner title="" /> */}
      <div
        className={`relative md:min-h-[200px] min-h-[200px] w-full z-[1]`}
        style={{
          background: `url(${"/static/images/Pagesbanner.jpg"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:min-h-[300px] flex items-center justify-center">
          <div className="flex-col items-center justify-center mx-auto text-center text-white uppercase">
            <h1 className="text-2xl font-semibold">Create your Account</h1>{" "}
            <br />
            <p>“We will get back to you within 24 hours”</p>
          </div>
        </div>
      </div>
      <div className="container relative p-3 space-y-4 bg-white shadow-lg xl:p-8 ring-1 ring-primary/5  max-w-[900px] mx-auto  md:mt-[-3rem] mt-3 md:mb-10 z-[2]">
        <div className="flex items-center justify-center w-full gap-4">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={(e) => changeTab("Business")}
          >
            {/* <p className="rounded-full w-8 h-8 flex justify-center items-center bg-[#0AADA4] text-white">
              1
            </p> */}
            <p
              className={`rounded-full w-8 h-8 flex justify-center items-center ${
                activeTab === "Business" ? "bg-[#0AADA4]" : "bg-[#B8B8B8]"
              } text-white`}
            >
              1
            </p>
            <p
              className={`text-sm ${
                activeTab === "Business" ? "font-bold" : "text-[#8D8D8D]"
              }`}
            >
              Business Information
            </p>
            {/* <p className="text-sm font-semibold">Business Information</p> */}
            <hr className="w-20 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={(e) => changeTab("Shopworking")}
          >
            {/* <p className="rounded-full w-8 h-8 flex justify-center items-center bg-[#B8B8B8] text-white">
              2
            </p>
            <p className="text-sm text-[#8D8D8D]">Shop working hours</p> */}
            <p
              className={`rounded-full w-8 h-8 flex justify-center items-center ${
                activeTab === "Shopworking" ? "bg-[#0AADA4]" : "bg-[#B8B8B8]"
              } text-white`}
            >
              2
            </p>
            <p
              className={`text-sm ${
                activeTab === "Shopworking" ? "font-bold" : "text-[#8D8D8D]"
              }`}
            >
              Shop working hours
            </p>
          </div>
        </div>
        <hr />
        {/* Business Information start */}
        {currentTab == "Business" && (
          <>
            <p className="text-xl font-semibold">Business Information</p>
            <form
              className="space-y-4"
              noValidate
              onSubmit={(e) => registerVendor(e)}
            >
              <div className="w-full space-y-1 text-left">
                <Label htmlFor="salon_name" text="Salon name" required={true} />
                <input
                  type="text"
                  name="salon_name"
                  id="salon_name"
                  className="input_field"
                  placeholder="Salon Name"
                  pattern={Validation?.title?.pattern}
                  required
                />
                <p className="error">Salon name Required</p>
              </div>
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <Label
                    htmlFor="first_name"
                    text="First Name"
                    required={true}
                  />
                  <input
                    type="text"
                    name="first_name"
                    className="input_field"
                    placeholder="Enter First Name"
                    pattern={Validation?.firstname?.pattern}
                    required
                  />
                  <p className="error">{Validation?.firstname?.msg}</p>
                </div>
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <Label htmlFor="last_name" text="Last Name" required={true} />
                  <input
                    type="text"
                    name="last_name"
                    className="input_field"
                    placeholder="Enter Last Name"
                    pattern={Validation?.lastname?.pattern}
                    required
                  />
                  <p className="error">{Validation?.lastname?.msg}</p>
                </div>
              </div>
              <div className="w-full space-y-1 text-left">
                <Label htmlFor="salon_name" text="Surname" required={true} />
                <input
                  type="text"
                  name="salon_name"
                  id="salon_name"
                  className="input_field"
                  placeholder="Surname"
                  pattern="^[a-zA-Z0-9\s]{4,}$"
                  required
                />
                <p className="error">Min 4 Character Required</p>
              </div>
              <div className="w-full space-y-1 text-left">
                <Label htmlFor="email" text="Email" required={true} />
                <input
                  type="text"
                  name="email"
                  className="input_field"
                  placeholder="Email"
                  pattern={Validation?.email?.pattern}
                  required
                />
                <p className="error">{Validation?.email?.msg}</p>
              </div>
              <div className="w-full space-y-1 text-left">
                <Label
                  htmlFor="phone_number"
                  text="Phone number"
                  required={true}
                />
                <input
                  type="text"
                  name="phone_number"
                  className="input_field"
                  placeholder="Phone Number"
                  pattern={Validation?.phone?.pattern}
                  maxLength={10}
                  required
                />
                <p className="error">{Validation?.phone?.msg}</p>
              </div>
              <div className="w-full space-y-1 text-left">
                <Label htmlFor="Address" text="Address" required={true} />
                <input
                  type="text"
                  name="Address"
                  className="input_field"
                  placeholder="Address"
                  // pattern={Validation?.phone?.pattern}
                  maxLength={10}
                  required
                />
                {/* <p className="error">{Validation?.phone?.msg}</p> */}
              </div>
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <Label htmlFor="City" text="City" required={true} />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {/* <p className="error">{Validation?.postcode?.msg}</p> */}
                </div>
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <Label htmlFor="City" text="City" required={true} />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {/* <p className="error">{Validation?.postcode?.msg}</p> */}
                </div>
              </div>
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <Label
                    htmlFor="postcode"
                    text="Salon Postcode"
                    required={true}
                  />
                  <input
                    type="text"
                    name="postcode"
                    id="postcode"
                    className="input_field"
                    placeholder="Salon Postcode"
                    pattern={Validation?.postcode?.pattern}
                    maxlength="6"
                    required
                  />
                  <p className="error">{Validation?.postcode?.msg}</p>
                </div>
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <Label
                    htmlFor="type_of_salon"
                    text="What type of salon you have?"
                    required={true}
                  />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <p className="error">Salon Type Required</p>
                </div>
              </div>
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="relative w-full space-y-1 text-left lg:w-1/2">
                  <Label htmlFor="password" text="Password" required={true} />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    className="input_field"
                    placeholder="Password"
                    pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                    required
                  />
                  <p className="error">{Validation?.password?.msg}</p>
                  <button
                    type="button"
                    className="absolute top-[1.85em] right-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {(showPassword && (
                      <BsEyeFill
                        size={24}
                        className="text-gray-400 cursor-pointer"
                      />
                    )) || (
                      <BsEyeSlashFill
                        size={24}
                        className="text-gray-400 cursor-pointer"
                      />
                    )}
                  </button>
                </div>
                <div className="relative w-full space-y-1 text-left lg:w-1/2">
                  <Label
                    htmlFor="cpassword"
                    text="Confirm password"
                    required={true}
                  />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="cpassword"
                    className="input_field"
                    placeholder="Confirm Password"
                    required={true}
                  />
                  <p className="error">Password not matched</p>
                  <button
                    type="button"
                    className="absolute top-[1.85em] right-3"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {(showConfirmPassword && (
                      <BsEyeFill
                        size={24}
                        className="text-gray-400 cursor-pointer"
                      />
                    )) || (
                      <BsEyeSlashFill
                        size={24}
                        className="text-gray-400 cursor-pointer"
                      />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  id="aggreement"
                  type="checkbox"
                  className="accent-primary"
                  required
                  defaultChecked={""}
                />
                <label
                  htmlFor="aggreement"
                  className="w-full text-sm font-medium text-gray-900 ms-2 "
                >
                  I agree to the{" "}
                  <Link href="/policy">
                    <span className="underline text-primary_color">
                      privacy policy
                    </span>
                  </Link>
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="subscribe"
                  type="checkbox"
                  className="accent-primary"
                  required
                  defaultChecked={""}
                />
                <label
                  htmlFor="subscribe"
                  className="w-full text-sm font-medium text-gray-900 ms-2"
                >
                  Please tick this box if you would like to receive
                  communications to grow your business with expert advice,
                  industry insights, and other handy resources – delivered right
                  to your inbox.
                </label>
              </div>
              <input
                type="hidden"
                name="device_type"
                value={
                  (typeof window != "undefined" &&
                    /Mobi/i.test(window.navigator.userAgent) &&
                    2) ||
                  1
                }
              />
              <Button
                type="submit"
                variant="primary"
                className="flex items-center justify-center px-10 mx-auto"
                disabled={loading}
              >
                <Spinner show={loading} width="25" height="25" text="Next" />
              </Button>
              {error && <Error error={error} />}
              <Dialog open={successfull}>
                <DialogContent
                  className="max-h-[90vh]"
                  onInteractOutside={(e) => setSuccessFull(false)}
                  close={setSuccessFull}
                >
                  <SuccessfullModal setSuccessFull={setSuccessFull} />
                </DialogContent>
              </Dialog>
            </form>
          </>
        )}
        {/* Business Information end */}
        {currentTab == "Shopworking" && (
          <>
            {/* Shop working hours start */}
            <p className="text-xl font-semibold">Shop working hours</p>
            <div className="w-full space-y-3">
              <div className="flex items-center justify-between">
                <li className="w-full list-none">
                  <div className="flex items-center gap-3">
                    <input
                      id="monday"
                      type="checkbox"
                      className="hidden peer accent-[#0AADA4]"
                    />
                    <label
                      htmlFor="monday"
                      className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0AADA4] border border-gray-400 rounded overflow-hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full fill-white"
                        viewBox="0 0 520 520"
                      >
                        <path
                          d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                          data-name="7-Check"
                          data-original="#000000"
                        />
                      </svg>
                    </label>
                    Monday
                  </div>
                </li>
                <div className="flex items-center w-full gap-4">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="09:00" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="23:30" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <li className="w-full list-none">
                  <div className="flex items-center gap-3">
                    <input
                      id="tue"
                      type="checkbox"
                      className="hidden peer accent-[#0AADA4]"
                    />
                    <label
                      htmlFor="tue"
                      className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0AADA4] border border-gray-400 rounded overflow-hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full fill-white"
                        viewBox="0 0 520 520"
                      >
                        <path
                          d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                          data-name="7-Check"
                          data-original="#000000"
                        />
                      </svg>
                    </label>
                    Tuesday
                  </div>
                </li>
                <div className="flex items-center w-full gap-4">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="09:00" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="23:30" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <li className="w-full list-none">
                  <div className="flex items-center gap-3">
                    <input
                      id="Wednesday"
                      type="checkbox"
                      className="hidden peer accent-[#0AADA4]"
                    />
                    <label
                      htmlFor="Wednesday"
                      className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0AADA4] border border-gray-400 rounded overflow-hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full fill-white"
                        viewBox="0 0 520 520"
                      >
                        <path
                          d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                          data-name="7-Check"
                          data-original="#000000"
                        />
                      </svg>
                    </label>
                    Wednesday
                  </div>
                </li>
                <div className="flex items-center w-full gap-4">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="09:00" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="23:30" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <li className="w-full list-none">
                  <div className="flex items-center gap-3">
                    <input
                      id="Thursday"
                      type="checkbox"
                      className="hidden peer accent-[#0AADA4]"
                    />
                    <label
                      htmlFor="Thursday"
                      className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0AADA4] border border-gray-400 rounded overflow-hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full fill-white"
                        viewBox="0 0 520 520"
                      >
                        <path
                          d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                          data-name="7-Check"
                          data-original="#000000"
                        />
                      </svg>
                    </label>
                    Thursday
                  </div>
                </li>
                <div className="flex items-center w-full gap-4">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="09:00" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="23:30" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <li className="w-full list-none">
                  <div className="flex items-center gap-3">
                    <input
                      id="Friday"
                      type="checkbox"
                      className="hidden peer accent-[#0AADA4]"
                    />
                    <label
                      htmlFor="Friday"
                      className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0AADA4] border border-gray-400 rounded overflow-hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full fill-white"
                        viewBox="0 0 520 520"
                      >
                        <path
                          d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                          data-name="7-Check"
                          data-original="#000000"
                        />
                      </svg>
                    </label>
                    Friday
                  </div>
                </li>
                <div className="flex items-center w-full gap-4">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="09:00" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="23:30" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <li className="w-full list-none">
                  <div className="flex items-center gap-3">
                    <input
                      id="Saturday"
                      type="checkbox"
                      className="hidden peer accent-[#0AADA4]"
                    />
                    <label
                      htmlFor="Saturday"
                      className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0AADA4] border border-gray-400 rounded overflow-hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full fill-white"
                        viewBox="0 0 520 520"
                      >
                        <path
                          d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                          data-name="7-Check"
                          data-original="#000000"
                        />
                      </svg>
                    </label>
                    Saturday
                  </div>
                </li>
                <div className="flex items-center w-full gap-4">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="09:00" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="23:30" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <li className="w-full list-none">
                  <div className="flex items-center gap-3">
                    <input
                      id="Sunday"
                      type="checkbox"
                      className="hidden peer accent-[#0AADA4]"
                    />
                    <label
                      htmlFor="Sunday"
                      className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0AADA4] border border-gray-400 rounded overflow-hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full fill-white"
                        viewBox="0 0 520 520"
                      >
                        <path
                          d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                          data-name="7-Check"
                          data-original="#000000"
                        />
                      </svg>
                    </label>
                    Sunday
                  </div>
                </li>
                <div className="flex items-center w-full gap-4">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="09:00" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="23:30" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full gap-4 pt-5 mx-auto">
              <Button variant="disable" className="flex items-center uppercase">
                Back
              </Button>
              <Button variant="primary" className="flex items-center uppercase">
                Finish
              </Button>
            </div>
            {/* Shop working hours end */}
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
