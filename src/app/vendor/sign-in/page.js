"use client";
import { Banner, Label } from "@/components";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/button";
import SuccessfullModal from "./SuccessfullModal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const SignIn = () => {
  const [successfull, setSuccessFull] = useState(false);
  return (
    <div>
      <Banner
        title="Enter your details to request a free
consultation and demo."
      />
      <div className="container relative max-w-[1000px] mx-auto  md:mt-[-3rem] mt-3 md:mb-10 z-[2]">
        <div className="p-3 space-y-4 bg-white shadow-lg xl:p-8 ring-1 ring-primary/5">
          <div className="w-full space-y-1 text-left">
            <label htmlFor="city" className="label_text text-[#000D23] text-sm">
              Salon name*
            </label>
            <input
              type="text"
              name="Amount"
              className="input_field"
              placeholder="Enter here..."
              pattern="[A-Za-z]{4,20}"
            />
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="first_name" text="First Name" />
              <input
                type="text"
                name="first_name"
                className="input_field"
                placeholder="Enter First Name"
              />
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="last_name" text="Last Name" />
              <input
                type="text"
                name="last_name"
                className="input_field"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div className="w-full space-y-1 text-left">
            <label htmlFor="city" className="label_text text-[#000D23] text-sm">
              Email*
            </label>
            <input
              type="text"
              name="Amount"
              className="input_field"
              placeholder="Enter here..."
              pattern="[A-Za-z]{4,20}"
            />
          </div>
          <div className="w-full space-y-1 text-left">
            <label htmlFor="city" className="label_text text-[#000D23] text-sm">
              Phone number*
            </label>
            <input
              type="text"
              name="Amount"
              className="input_field"
              placeholder="Enter here..."
              pattern="[A-Za-z]{4,20}"
            />
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="first_name" text="Salon Postcode*" />
              <input
                type="text"
                name="first_name"
                className="input_field"
                placeholder="Enter First Name"
              />
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="last_name" text="What type of salon you have?" />
              <input
                type="text"
                name="last_name"
                className="input_field"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="first_name" text="Password*" />
              <input
                type="text"
                name="first_name"
                className="input_field"
                placeholder="Enter First Name"
              />
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="last_name" text="Confirm password*" />
              <input
                type="text"
                name="last_name"
                className="input_field"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div class="flex items-center">
            <input
              id="list-radio-license"
              type="checkbox"
              value=""
              name="list-radio"
              class=""
            />
            <label
              for="list-radio-license"
              class="w-full ms-2 text-sm font-medium text-gray-900 "
            >
              I agree to the{" "}
              <Link href="/policy">
                <span className="underline text-primary_color">
                  privacy policy
                </span>
              </Link>
            </label>
          </div>
          <div class="flex items-center">
            <input
              id="list-radio-license"
              type="checkbox"
              value=""
              name="list-radio"
              class=""
            />
            <label
              for="list-radio-license"
              class="w-full ms-2 text-sm font-medium text-gray-900 "
            >
              Please tick this box if you would like to receive communications
              to grow your business with expert advice, industry insights, and
              other handy resources – delivered right to your inbox.
            </label>
          </div>

          <Dialog open={successfull}>
            <DialogTrigger onClick={(e) => setSuccessFull(true)}>
              <div className="flex justify-center">
                <Button variant="primary" className="w-full">
                  Submit
                </Button>
              </div>
            </DialogTrigger>
            <DialogContent
              className="max-h-[90vh]"
              onInteractOutside={(e) => setSuccessFull(false)}
              close={setSuccessFull}
            >
              <SuccessfullModal setSuccessFull={setSuccessFull} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
