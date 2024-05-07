'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProfileModal from "@/components/user/MyAccount/profile/ProfileModal";
import { MdModeEditOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { v4 } from "uuid";

import Label from "@/components/ui/form/label";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Profile = ({ user, ...props }) => {
  const router = useRouter();
  const [userImage, setUserImage] = useState({});
  const [editProfile, setEditProfile] = useState(false);

  const handleFile = (e) => {
    const allowedType = ['image/jpeg', 'image/x-png', 'image/png'];
    if (allowedType.includes(e.target.files[0].type)) {
      const path = (window.URL || window.webkitURL).createObjectURL(e.target.files[0]);
      setUserImage({ 'id': v4(), 'path': path, 'data': e.target.files[0] });
    }
  }

  useEffect(() => {
    if (!user) router.push('/sign-in');
  }, [user, router]);

  return (
    <>
      <div className="flex-grow p-3 bg-white rounded-md xl:p-5">
        <form className="space-y-4">
          <p className="text-xl text-[#25324B] font-semibold">Profile</p>
          <div className="border relative border-1 border-[#0AADA4] rounded-full p-1 w-[3.5rem] h-[3.5rem] mb-2">
            <Image src={userImage?.path || (user?.photo && process.env.NEXT_PUBLIC_SERVERURL + user?.photo || '/static/images/user.webp')} alt="profile" loading="lazy" className="object-cover w-full h-full rounded-full z-1" width={50} height={50} />
            {/* <input type="file" className="absolute top-0 bottom-0 left-0 right-0 mt-2 cursor-pointer rounded-full max-w-[3.5rem] mx-auto opacity-0 z-2" name="photo" onChange={e => handleFile(e)} />
            <MdModeEditOutline className="absolute right-0 p-[4px] text-xl text-white rounded-full bg-primary bottom-0" /> */}
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="first_name" text="First Name" />
              <input
                type="text"
                name="first_name"
                className="input_field"
                placeholder="Enter First Name"
                defaultValue={user.first_name}
                key={user.first_name}
                disabled
              />
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="last_name" text="Last Name" />
              <input
                type="text"
                name="last_name"
                className="input_field"
                placeholder="Enter Last Name"
                defaultValue={user.last_name}
                key={user.last_name}
                disabled
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="email" text="Email" />
              <input
                type="email"
                name="email"
                className="input_field"
                placeholder="Enter your email"
                defaultValue={user.email}
                key={user.email}
                disabled
              />
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="phone_number" text="Phone Number" />
              <input
                type="text"
                name="phone_number"
                className="input_field"
                placeholder="Enter your Phone Number"
                defaultValue={user.phone_number}
                key={user.phone_number}
                disabled
              />
            </div>
          </div>
          <div className="w-full space-y-1 text-left">
            <Label htmlFor="address_line_one" text="Address line 1" />
            <input
              type="text"
              name="address_line_one"
              className="input_field"
              placeholder="Enter your Address"
              defaultValue={user.address_line_one}
              key={user.address_line_one}
              disabled
            />
          </div>
          <div className="w-full space-y-1 text-left">
            <Label htmlFor="address_line_two" text="Address line 2" />
            <input
              type="text"
              name="address_line_two"
              className="input_field"
              placeholder="Enter your Address"
              defaultValue={user.address_line_two}
              key={user.address_line_two}
              disabled
            />
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="city" text="City" />
              <input
                type="text"
                name="city"
                className="input_field"
                placeholder="Enter your city"
                defaultValue={user.city}
                key={user.city}
                disabled
              />
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <Label htmlFor="postcode" text="Postcode" />
              <input
                type="text"
                name="postcode"
                className="input_field"
                placeholder="Postcode"
                defaultValue={user.postcode}
                key={user.postcode}
                disabled
              />
            </div>
          </div>
          <div>
          </div>
        </form>
        <Dialog open={editProfile} >
          <DialogTrigger onClick={e => setEditProfile(true)} className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90">
            Edit Profile
          </DialogTrigger>
          <DialogContent close={setEditProfile} >
            <DialogTitle>Profile</DialogTitle>
            <ProfileModal setEditProfile={setEditProfile} />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Profile;
