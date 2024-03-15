import React from "react";
import profile from "../../../public/static/images/23.png";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

const ProfileModal = ({ visible, onClose }) => {
    if (!visible) return null;
  return (
    <form
      //   onSubmit={handleSubmit(onSubmit)}
      className="fixed -top-4 inset-0 overflow-y-auto bg-black bg-opacity-30 backdrop-blur-sm z-50"
    >
      <div className="bg-white md:w-2/5 w-[90%] overflow-y-visible rounded-2xl relative items-center justify-center xl:top-10 lg:top-5 top-20 mx-auto p-5 space-y-2">
        <AiOutlineClose onClick={onClose} className="cursor-pointer ml-auto" />
        <p className="text-xl text-[#25324B] font-semibold">Profile</p>
        <div className="border border-1 border-[#0AADA4] rounded-full p-1 w-[9%]">
          <Image src={profile} alt="profile" loading="lazy" />
        </div>
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
        <div className="text-left space-y-1 w-full">
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
        <div className="text-left space-y-1 w-full">
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
              placeholder="Enter your state"
            />
          </div>
        </div>
        <div>
          <button type="button" className="primary_button uppercase">
            save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileModal;
