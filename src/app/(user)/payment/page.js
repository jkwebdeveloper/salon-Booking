import React from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import Label from "@/components/ui/form/label";
import Button from "@/components/ui/button";
import { IoIosLock } from "react-icons/io";

const PaymentMethod = () => {
  return (
    <div className="bg-[#F8F8FA] space-y-5">
      <div className="container space-y-5 flex flex-col min-h-[55dvh] gap-4 px-1 md:flex-row md:px-5 md:mb-10">
        <div className="h-fit space-y-3 py-5 min-h-[350px] md:w-[40%] lg:w-[35%] w-[90%]">
          <p className="text-2xl font-semibold">Overview</p>
          <div className="z-[2] overflow-hidden shadow-lg rounded-xl ring-1 ring-primary/10 w-full">
            <div className="relative">
              <Image
                src={"/static/images/payment.png"}
                alt=""
                loading="lazy"
                width={400}
                height={300}
                className="object-cover object-center w-full "
              />
            </div>
            <div className="p-3 space-y-3">
              <div>
                <p>Sports Massage</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm">10 Mins</p>
                  <div className="flex items-center gap-3">
                    <p className=" text-primary">£25.00</p>
                    <AiOutlineClose />
                  </div>
                </div>
              </div>
              <div>
                <p>Swedish Massage</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm">10 Mins</p>
                  <div className="flex items-center gap-3">
                    <p className=" text-primary">£20.00</p>
                    <AiOutlineClose />
                  </div>
                </div>
              </div>
              <div>
                <p>Couples Massage</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm">2 hr</p>
                  <div className="flex items-center gap-3">
                    <p className=" text-primary">£349.00</p>
                    <AiOutlineClose />
                  </div>
                </div>
              </div>
              <p className="text-[#0AADA4]">+ Add more services</p>
              <hr />
              <div className="flex items-center justify-between">
                <p className="">Item Total</p>
                <div className="flex items-center gap-3">
                  <p className="font-medium">£349.00</p>
                </div>
              </div>
              <hr />
              <div className="flex items-center justify-between">
                <p className="">Total to pay</p>
                <div className="flex items-center gap-3">
                  <p className="font-bold">£349.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 bg-white shadow-lg rounded-xl">
            <div className="p-3 space-y-3">
              <p className="text-xl font-medium">Add Gift card or promo code</p>
              <hr />
              <div className="w-full space-y-1 text-left ">
                <Label htmlFor="last_name" text="Promo code" />
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    name="last_name"
                    className="input_field"
                    placeholder="Type here..."
                    pattern="[A-Za-z]{4,20}"
                  />
                  <Button variant="outline">Apply</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-4/5 w-[90%] mx-auto space-y-5 h-fit min-h-[350px] z-2 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold">Secure checkout</p>
              <IoIosLock className="text-2xl" />
            </div>
            <Button variant="primary">Pay Now</Button>
          </div>
          <div className="p-3 space-y-3 bg-white shadow-lg rounded-xl">
            <p className="text-xl">Your Details</p>
            <p className="text-[#666666]">Welcome back Robert Adam</p>
            <hr />
            <div className="flex flex-col w-full gap-3 lg:flex-row">
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <label htmlFor="fname" className="label_text">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="fname"
                  className="input_field"
                  placeholder="First Name"
                  pattern="[A-Za-z]{4,20}"
                />
                <p className="error">Min 4 Character Required</p>
              </div>
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <label htmlFor="lname" className="label_text">
                  Last Name{" "}
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="lname"
                  className="input_field"
                  placeholder="Last name"
                  pattern="[A-Za-z]{4,20}"
                />
                <p className="error">Min 4 Character Required</p>
              </div>
            </div>
            <div className="flex flex-col w-full gap-3 lg:flex-row">
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <label htmlFor="email" className="label_text">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input_field"
                  placeholder="Enter your email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
                <p className="error">Enter Valid Email id</p>
              </div>
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <label htmlFor="phone" className="label_text">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone_number"
                  id="phone"
                  className="input_field"
                  placeholder="Enter Your Phone Number"
                  pattern="[0-9]{10}"
                  maxLength={10}
                />
                <p className="error">Enter Valid Phone number</p>
              </div>
            </div>
            <label htmlFor="phone" className="label_text">
              Appointment notes (optional)
            </label>
            <textarea
              id="message"
              rows="4"
              className="input_field"
              placeholder="Type here"
            ></textarea>
            <p className="text-xl">Your Details</p>
            <p className="text-[#29AD17]">
              All payments are securely processed{" "}
            </p>
            <hr />
            <p className="text-[#EA2C6D]">
              Pay for your Pampertree in advance so that you won't have to
              handle cash at the venue.
            </p>
            <div className="flex items-center w-full gap-2">
              <div className="flex w-full py-5 px-2 items-center border border-bg-[#E6E6E6] rounded-lg bg-[#FAFAFA] gap-2">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <input
                      id="list-radio-license"
                      type="radio"
                      value=""
                      name="list-radio"
                      class=""
                    />
                    <div>
                      <p>Pay with card</p>
                      <p className="text-[#666666] text-sm">Pay in advance</p>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={"/static/images/payment.png"}
                      alt=""
                      loading="lazy"
                      width={50}
                      height={50}
                      className="object-cover object-center w-full "
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full py-5 px-2 items-center border border-bg-[#E6E6E6] rounded-lg bg-[#FAFAFA] gap-2">
                <div className="flex items-center justify-between gap-3">
                  <input
                    id="list-radio-license"
                    type="radio"
                    value=""
                    name="list-radio"
                    class=""
                  />
                  <div>
                    <p>Pay with PayPal</p>
                    <p className="text-[#666666] text-sm">Pay in advance</p>
                  </div>
                </div>
              </div>
              <div className="flex w-full py-5 px-2 items-center border border-bg-[#E6E6E6] rounded-lg bg-[#FAFAFA] gap-2">
                <div className="flex items-center justify-between gap-3">
                  <input
                    id="list-radio-license"
                    type="radio"
                    value=""
                    name="list-radio"
                    class=""
                  />
                  <div>
                    <p>Pay with wallet balance</p>
                    <p className="text-[#666666] text-sm">
                      Your balance : £541.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
