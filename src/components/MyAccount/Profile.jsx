import Image from "next/image";
import React, { useState } from "react";
import profile from "../../../public/static/images/23.png";
import ProfileModal from "./ProfileModal";

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOnClose = () => {
    setOpenModal(false);
  };
  return (
    <form
      //   onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white shadow-lg xl:p-5 p-3"
    >
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
        <button
          type="button"
          className="primary_button"
          onClick={() => setOpenModal(true)}
        >
          Edit Profile
        </button>
      </div>
      {/* Modal */}
      <ProfileModal onClose={handleOnClose} visible={openModal} />
    </form>
  );
};

export default Profile;
