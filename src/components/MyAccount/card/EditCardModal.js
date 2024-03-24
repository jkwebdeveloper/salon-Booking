import { Button } from "@/components/ui/button";
import React from "react";

const EditCardModal = () => {
  return (
    <>
      <div className="space-y-2">
        <div className="w-full space-y-1 text-left">
          <label htmlFor="city" className="label_text text-[#000D23] text-sm">
            Card holder name
          </label>
          <input
            type="text"
            name="city"
            className="input_field"
            placeholder="Your name"
          />
        </div>
        <div className="w-full space-y-1 text-left">
          <label htmlFor="state" className="label_text text-[#000D23] text-sm">
            Card number
          </label>
          <input
            type="text"
            name="state"
            className="input_field"
            placeholder="Card number"
          />
        </div>
        <div className="flex flex-col w-full gap-3 lg:flex-row">
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="city" className="label_text text-[#000D23] text-sm">
              Expire on
            </label>
            <input
              type="text"
              name="firstname"
              className="input_field"
              placeholder="MM/YYYY"
            />
          </div>
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label
              htmlFor="state"
              className="label_text text-[#000D23] text-sm"
            >
              CVV
            </label>
            <input
              type="text"
              name="lastname"
              className="input_field"
              placeholder="CVV"
            />
          </div>
        </div>
      </div>
      <p className="text-lg text-[#25324B] font-semibold mt-4 mb-2">Billing Address</p>
      <div className="space-y-2">
        <div className="flex flex-col w-full gap-3 lg:flex-row">
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="city" className="label_text text-[#000D23] text-sm">
              First name
            </label>
            <input
              type="text"
              name="firstname"
              className="input_field"
              placeholder="Type here..."
            />
          </div>
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label
              htmlFor="state"
              className="label_text text-[#000D23] text-sm"
            >
              Last name
            </label>
            <input
              type="text"
              name="lastname"
              className="input_field"
              placeholder="Type here"
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-3 lg:flex-row">
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="city" className="label_text text-[#000D23] text-sm">
              Email
            </label>
            <input
              type="email"
              name="firstname"
              className="input_field"
              placeholder="Type here..."
            />
          </div>
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label
              htmlFor="state"
              className="label_text text-[#000D23] text-sm"
            >
              Phone
            </label>
            <input
              type="text"
              name="lastname"
              className="input_field"
              placeholder="Type here"
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
            placeholder="Type here..."
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
            placeholder="Type here..."
          />
        </div>
        <div className="flex flex-col w-full gap-3 lg:flex-row">
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="city" className="label_text">
              City
            </label>
            <input
              type="text"
              name="city"
              className="input_field"
              placeholder="Enter your city"
            />
          </div>
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="state" className="label_text">
              Postcode
            </label>
            <input
              type="text"
              name="state"
              className="input_field"
              placeholder="Type here..."
            />
          </div>
        </div>
        <div className="flex items-center justify-start pt-3 mx-auto">
          <Button variant='primary' className="md:w-full">
            save
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditCardModal;
