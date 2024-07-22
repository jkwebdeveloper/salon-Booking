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
import { useCategory } from "@/hooks";
import { v4 } from "uuid";

const Register = () => {
  const dispatch = useDispatch();
  const mainCat = useCategory();
  const [successfull, setSuccessFull] = useState(false);
  const [salonType, setSalonType] = useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [currentTab, setCurrentTab] = useState("Business");
  const [selectedDays, setSelectedDays] = useState({});

  // const changeTab = (tab = "basic") => setCurrentTab(tab);
  const [activeTab, setActiveTab] = useState("Business");

  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const timeing = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];

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
      if (currentTab == "Business") {
        changeTab("Shopworking");
        return;
      } else {
        setSuccessFull(true);
      }
    } else {
      setError(resp.message);
    }
  };

  const updateVendorTime = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
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
              className={`rounded-full w-8 h-8 flex justify-center items-center ${activeTab === "Business" ? "bg-[#0AADA4]" : "bg-[#B8B8B8]"
                } text-white`}
            >
              1
            </p>
            <p
              className={`text-sm ${activeTab === "Business" ? "font-bold" : "text-[#8D8D8D]"
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
              className={`rounded-full w-8 h-8 flex justify-center items-center ${activeTab === "Shopworking" ? "bg-[#0AADA4]" : "bg-[#B8B8B8]"
                } text-white`}
            >
              2
            </p>
            <p
              className={`text-sm ${activeTab === "Shopworking" ? "font-bold" : "text-[#8D8D8D]"
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
                <Label htmlFor="salon_name" text="Salon name" required />
                <input
                  type="text"
                  name="salon_name"
                  id="salon_name"
                  className="input_field"
                  placeholder="Salon Name"
                  pattern={Validation?.title?.pattern}
                  required={true}
                />
                <p className="error">Salon name Required</p>
              </div>
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <Label
                    htmlFor="first_name"
                    text="First Name"
                    required
                  />
                  <input
                    type="text"
                    name="first_name"
                    className="input_field"
                    placeholder="Enter First Name"
                    pattern={Validation?.firstname?.pattern}
                    required={true}
                  />
                  <p className="error">{Validation?.firstname?.msg}</p>
                </div>
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <Label htmlFor="last_name" text="Last Name" required />
                  <input
                    type="text"
                    name="last_name"
                    className="input_field"
                    placeholder="Enter Last Name"
                    pattern={Validation?.lastname?.pattern}
                    required={true}
                  />
                  <p className="error">{Validation?.lastname?.msg}</p>
                </div>
              </div>
              <div className="w-full space-y-1 text-left">
                <Label htmlFor="sur_name" text="Surname" required />
                <input
                  type="text"
                  name="sur_name"
                  id="sur_name"
                  className="input_field"
                  placeholder="Surname"
                  pattern={Validation?.surname?.pattern}
                  required={true}
                />
                <p className="error">{Validation?.surname?.msg}</p>
              </div>
              <div className="w-full space-y-1 text-left">
                <Label htmlFor="email" text="Email" required />
                <input
                  type="text"
                  name="email"
                  className="input_field"
                  placeholder="Email"
                  pattern={Validation?.email?.pattern}
                  required={true}
                />
                <p className="error">{Validation?.email?.msg}</p>
              </div>
              <div className="w-full space-y-1 text-left">
                <Label
                  htmlFor="phone_number"
                  text="Phone number"
                  required
                />
                <input
                  type="text"
                  name="phone_number"
                  className="input_field"
                  placeholder="Phone Number"
                  pattern={Validation?.phone?.pattern}
                  maxLength={10}
                  required={true}
                />
                <p className="error">{Validation?.phone?.msg}</p>
              </div>
              <div className="w-full space-y-1 text-left">
                <Label htmlFor="Address" text="Address" />
                <input
                  type="text"
                  name="Address"
                  className="input_field"
                  placeholder="Address"
                  // pattern={Validation?.phone?.pattern}
                  maxLength={10}
                  required={true}
                />
                {/* <p className="error">{Validation?.phone?.msg}</p> */}
              </div>
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <Label htmlFor="City" text="City" required />
                  <input type="text" name="city" id="City" className="input_field" placeholder="City" pattern={Validation?.city?.pattern} required />
                  <p className="error">{Validation?.city?.msg}</p>
                </div>
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <Label htmlFor="Country" text="Country" required />
                  <input type="text" name="country" id="Country" className="input_field" placeholder="Country" pattern={Validation?.country?.pattern} required />
                  <p className="error">{Validation?.country?.msg}</p>
                </div>
              </div>
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <Label
                    htmlFor="postcode"
                    text="Salon Postcode"
                    required
                  />
                  <input
                    type="text"
                    name="postcode"
                    id="postcode"
                    className="input_field"
                    placeholder="Salon Postcode"
                    pattern={Validation?.postcode?.pattern}
                    maxlength="6"
                    required={true}
                  />
                  <p className="error">{Validation?.postcode?.msg}</p>
                </div>
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <Label
                    htmlFor="type_of_salon"
                    text="What type of salon you have?"
                    required
                  />
                  <Select onValueChange={e => {
                    setSalonType(e)
                    document.querySelector('input[name="type_of_salon"]').classList.remove('invalid', 'border-red-500', 'text-red-500')
                  }}>
                    <SelectTrigger>
                      {salonType && mainCat?.data?.filter(c => c.id == salonType)[0]?.title || <SelectValue placeholder="Select a Salon Type" />}
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Type</SelectLabel>
                        {mainCat.data?.map((cat) => (
                          <SelectItem value={cat?.id}>{cat?.title}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <input
                    type="hidden"
                    name="type_of_salon"
                    className="input_field"
                    defaultValue={salonType}
                    pattern='[0-9]{1,}'
                    required={true}
                  />
                  <p className="error">Salon Type Required</p>
                </div>
              </div>
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="relative w-full space-y-1 text-left lg:w-1/2">
                  <Label htmlFor="password" text="Password" required />
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
                    required
                  />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="cpassword"
                    className="input_field"
                    placeholder="Confirm Password"
                    required
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
                  name="is_agree_terms"
                  className="accent-primary"
                  required
                  value={1}
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
            <form onSubmit={e => updateVendorTime(e)}>
              <div className="w-full space-y-3">
                <div className="w-full space-y-3 lg:w-1/2">
                  {weekDays.map((day) => {
                    return (
                      <div className="flex items-center gap-10" key={v4()}>
                        <li className="w-full list-none">
                          <div className="flex items-center">
                            <input
                              id={day}
                              type="checkbox"
                              className="w-5 h-5 accent-green-600"
                              checked={selectedDays[day] ? true : false}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  e.target.nextElementSibling.value = '1';
                                  setSelectedDays({ ...selectedDays, [day]: { from: '', to: '' } })
                                } else {
                                  e.target.nextElementSibling.value = '0';
                                  const newDays = selectedDays;
                                  delete newDays[day];
                                  setSelectedDays({ ...newDays });
                                }
                              }}
                            />
                            <input type="hidden" name={day.slice(0, 3) + '[status]'} value={0} onChange={e => { return }} />
                            <label
                              htmlFor={day}
                              className="w-full text-sm font-medium text-gray-900 ms-2 "
                            >
                              {day}
                            </label>
                          </div>
                        </li>
                        <div className="flex items-center gap-3">
                          <Select name={day.slice(0, 3) + '[from_time]'} onValueChange={e => setSelectedDays({ ...selectedDays, [day]: { ...selectedDays[day], from: e } })}>
                            <SelectTrigger className={`text-black min-w-[90px] ${selectedDays[day] && (selectedDays[day].from && 'text-black' || 'text-red-500')}`}>
                              {selectedDays[day] && (selectedDays[day].from || 'From') || 'From'}
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {timeing.map((time) => (
                                  <SelectItem key={v4()} value={time}>{time}</SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <Select onValueChange={e => setSelectedDays({ ...selectedDays, [day]: { ...selectedDays[day], to: e } })}>
                            <SelectTrigger className={`text-black min-w-[90px] ${selectedDays[day] && (selectedDays[day].to && 'text-black' || 'text-red-500')}`}>
                              {selectedDays[day] && (selectedDays[day].to || 'To') || 'To'}
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {timeing.map((time) => (
                                  <SelectItem key={v4()} value={time}>{time}</SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="flex items-center justify-center w-full gap-4 pt-5 mx-auto">
                <Button variant="disable" className="flex items-center uppercase" onClick={e => changeTab("Business")}>
                  Back
                </Button>
                <Button variant="primary" type="submit" className="flex items-center uppercase">
                  Finish
                </Button>
              </div>
            </form>
            {/* Shop working hours end */}
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
