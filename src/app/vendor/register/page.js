"use client";
import { Banner, Error, Label, Spinner } from "@/components";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/button";
import SuccessfullModal from "./SuccessfullModal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { POST } from "@/app/api/post";
import { useDispatch } from "react-redux";
import { login } from "@/redux/features/vendorAuthSlice";

const Register = () => {
  const dispatch = useDispatch();

  const [successfull, setSuccessFull] = useState(false);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const registerVendor = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({ url: "/vendor/register", form: e.target });
    setLoading(false);
    if (resp.code == 200 && Object.keys(resp.data).length > 0) {
      setSuccessFull(true);
      e.target.reset();
    } else {
      setError(resp.message);
    }
  }

  return (
    <div>
      <Banner title="Enter your details to request a free consultation and demo." />
      <div className="container relative max-w-[1000px] mx-auto  md:mt-[-3rem] mt-3 md:mb-10 z-[2]">
        <form className="p-3 space-y-4 bg-white shadow-lg xl:p-8 ring-1 ring-primary/5" noValidate onSubmit={e => registerVendor(e)}>
          <div className="w-full space-y-1 text-left">
            <Label htmlFor="salon_name" text="Salon name" required={true} />
            <input
              type="text"
              name="salon_name"
              id="salon_name"
              className="input_field"
              placeholder="Salon Name"
              pattern="[A-Za-z]{4,20}"
              required
            />
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="first_name" text="First Name" required={true} />
              <input
                type="text"
                name="first_name"
                className="input_field"
                placeholder="Enter First Name"
                pattern="[A-Za-z]{4,20}"
                required
              />
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="last_name" text="Last Name" required={true} />
              <input
                type="text"
                name="last_name"
                className="input_field"
                placeholder="Enter Last Name"
                pattern="[A-Za-z]{4,20}"
                required
              />
            </div>
          </div>
          <div className="w-full space-y-1 text-left">
            <Label htmlFor="email" text="Email" required={true} />
            <input
              type="text"
              name="email"
              className="input_field"
              placeholder="Email"
              pattern="[A-Za-z]{4,20}"
              required
            />
          </div>
          <div className="w-full space-y-1 text-left">
            <Label htmlFor="phone_number" text="Phone number" required={true} />
            <input
              type="text"
              name="phone_number"
              className="input_field"
              placeholder="Phone Number"
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="postcode" text="Salon Postcode" required={true} />
              <input
                type="text"
                name="postcode"
                id="postcode"
                className="input_field"
                placeholder="Salon Postcode"
                pattern="[0-9]{6}"
                required
              />
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="type_of_salon" text="What type of salon you have?" required={true} />
              <input
                type="text"
                id="type_of_salon"
                name="type_of_salon"
                className="input_field"
                placeholder="Salon Type"
                pattern="[A-Za-z]{3,20}"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="password" text="Password" required={true} />
              <input
                type="password"
                name="password"
                id="password"
                className="input_field"
                placeholder="Password"
                pattern="[A-Za-z0-9]{3,20}"
                required
              />
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="cpassword" text="Confirm password" required={true} />
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                className="input_field"
                placeholder="Confirm Password"
                pattern="[A-Za-z0-9]{3,20}"
                required={true}
              />
            </div>
          </div>
          <div className="flex items-center">
            <input
              id="aggreement"
              type="checkbox"
              className="accent-primary"
              required
              defaultChecked={''}
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
              defaultChecked={''}
            />
            <label htmlFor="subscribe" className="w-full text-sm font-medium text-gray-900 ms-2">
              Please tick this box if you would like to receive communications
              to grow your business with expert advice, industry insights, and
              other handy resources – delivered right to your inbox.
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
          <Button type="submit" variant="primary" className="w-full px-10" disabled={loading}>
            <Spinner
              show={loading}
              width="25"
              height="25"
              text="Submit"
            />
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
      </div>
    </div>
  );
};

export default Register;
