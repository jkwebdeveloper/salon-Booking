import Image from "next/image";
import React, { useState } from "react";
import profile from "../../../public/static/images/23.png";
import ProfileModal from "./ProfileModal";
import { Button } from "../ui/button";

const Profile = ({user}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOnClose = () => {
    setOpenModal(false);
  };
  return (
    <form
      //   onSubmit={handleSubmit(onSubmit)}
      className="p-3 space-y-4 bg-white rounded-md shadow-lg xl:p-5"
    >
      <p className="text-xl text-[#25324B] font-semibold">Profile</p>
      <div className="border border-1 border-[#0AADA4] rounded-full p-1 w-[9%]">
        <Image src={profile} alt="profile" loading="lazy" />
      </div>
      <div className="flex flex-col w-full gap-3 lg:flex-row">
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <label htmlFor="city" className="label_text">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            className="input_field"
            placeholder="Enter First Name"
            defaultValue={user.first_name}
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
            defaultValue={user.last_name}
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
            defaultValue={user.email}
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
            defaultValue={user.phone_number}
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
          defaultValue={user.address_line_one}
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
           defaultValue={user.address_line_two}
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
            defaultValue={user.city}
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
            placeholder="Enter your state"
            defaultValue={user.postcode}
          />
        </div>
      </div>
      <div>
        <Button type="button" variant="primary" onClick={() => setOpenModal(true)}>
          Edit Profile
        </Button>
      </div>
      {/* Modal */}
      <ProfileModal onClose={handleOnClose} visible={openModal} />
    </form>
  );
};

export default Profile;
