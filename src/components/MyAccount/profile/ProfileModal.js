import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { MdModeEditOutline } from "react-icons/md";
import Label from "@/components/ui/form/label";
import { POST } from "@/app/api/post";
import Spinner from "@/components/ui/spinner";
import logout from "@/utils/logout";

const ProfileModal = () => {
  const [userImage, setUserImage] = useState({});
  const user = useSelector((state) => state.auth.user) || '';
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    const allowedType = ['image/jpeg', 'image/x-png', 'image/png'];
    if (allowedType.includes(e.target.files[0].type)) {
      const path = (window.URL || window.webkitURL).createObjectURL(e.target.files[0]);
      setUserImage({ 'id': v4(), 'path': path, 'data': e.target.files[0] });
    }
  }

  const updateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await POST.request({ url: "/update-profile", form: e.target, token: user?.api_token });
    if (res && res.code == 404) {
      logout();
    };
    setLoading(false);
  }
  return (
    <form className="space-y-2" noValidate onSubmit={e => updateProfile(e)}>
      <div className="border relative border-1 border-[#0AADA4] rounded-full p-1 w-[4rem] h-[4rem] mb-2">
        <Image src={userImage?.path || '/static/images/23.png'} alt="profile" loading="lazy" className="object-cover w-full h-full rounded-full z-1" width={50} height={50} />
        <input type="file" className="absolute top-0 bottom-0 left-0 right-0 mt-2 cursor-pointer rounded-full max-w-[3.5rem] mx-auto opacity-0 z-2" name="photo" onChange={e => handleFile(e)} />
        <MdModeEditOutline className="absolute right-0 p-[4px] text-xl text-white rounded-full bg-primary bottom-0" />
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
            pattern="[A-Za-z]{4,20}"
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
            pattern="[A-Za-z]{4,20}"
          />
        </div>
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="email" text="Email" />
        <input
          type="email"
          name="email"
          className="input_field"
          placeholder="Enter your email"
          defaultValue={user.email}
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
        />
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="phone_number" text="Phone Number" />
        <input
          type="text"
          name="phone_number"
          className="input_field"
          placeholder="Enter your Phone Number"
          defaultValue={user.phone_number}
          pattern="[0-9]{10}"
        />
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="address_line_one" text="Address line 1" />
        <input
          type="text"
          name="address_line_one"
          className="input_field"
          placeholder="Enter your Address"
          defaultValue={user.address_line_one}
          pattern="[A-Za-z0-9]{3,20}"
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
            pattern="[A-Za-z]{3,20}"
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
            pattern="[0-9]{6}"
          />
        </div>
      </div>
      <div className="w-full mt-4">
        <input
          type="hidden"
          name="device_type"
          value={typeof window != 'undefined' && (/Mobi/i.test(window.navigator.userAgent) && 2) || 1}
        />
        <Button type="submit" variant="primary" className="uppercase md:w-full" disabled={loading}>
          <Spinner show={loading} width='35' height='35' text="Save" />
        </Button>
      </div>
    </form>
  );
};

export default ProfileModal;
