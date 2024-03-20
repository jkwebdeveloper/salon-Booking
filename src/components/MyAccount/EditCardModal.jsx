import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const EditCardModal = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <form
      //   onSubmit={handleSubmit(onSubmit)}
      className="fixed -top-4 inset-0 overflow-y-auto bg-black bg-opacity-30 backdrop-blur-sm z-50"
    >
      <div className="bg-white md:w-2/5 w-[90%] overflow-y-visible rounded-2xl relative items-center justify-center xl:top-10 lg:top-5 top-20 mx-auto p-5 space-y-2">
        <AiOutlineClose onClick={onClose} className="cursor-pointer ml-auto" />
        <p className="text-xl text-[#25324B] font-semibold">Add new card</p>
        <div className="text-left space-y-1 w-full">
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
        <div className="text-left space-y-1 w-full">
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
        <div className="flex lg:flex-row flex-col w-full gap-3">
          <div className="text-left space-y-1 w-full lg:w-1/2">
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
          <div className="text-left space-y-1 w-full lg:w-1/2">
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
        <p className="text-lg text-[#25324B] font-semibold">Billing Address</p>
        <div className="flex lg:flex-row flex-col w-full gap-3">
          <div className="text-left space-y-1 w-full lg:w-1/2">
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
          <div className="text-left space-y-1 w-full lg:w-1/2">
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
        <div className="flex lg:flex-row flex-col w-full gap-3">
          <div className="text-left space-y-1 w-full lg:w-1/2">
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
          <div className="text-left space-y-1 w-full lg:w-1/2">
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
        <div className="text-left space-y-1 w-full">
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
        <div className="text-left space-y-1 w-full">
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
        <div className="flex lg:flex-row flex-col w-full gap-3">
          <div className="text-left space-y-1 w-full lg:w-1/2">
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
          <div className="text-left space-y-1 w-full lg:w-1/2">
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
        <div className="mx-auto flex justify-start items-center pt-3">
          <button type="button" className="uppercase focus:outline-none bg-[#711F7E] text-white font-medium rounded-full active:scale-90 transition text-sm px-16 py-3 mx-auto">
            save
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditCardModal;
