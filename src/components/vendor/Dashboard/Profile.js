import Button from "@/components/ui/button";
import React from "react";

const Profile = () => {
  return (
    <div className="relative w-full space-y-12 bg-white rounded-xl">
      <div className="bg-gradient-to-r  p-3 from-[#711F7E] h-fit to-[#14DBD099] rounded-t-xl">
        <div className="relative top-14">
          <p className="flex  items-center justify-center w-28 h-28 m-3 text-4xl font-bold text-white bg-[#0AADA4] rounded-full">
            JA
          </p>
        </div>
      </div>
      <div className="p-3 space-y-4">
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
              placeholder="Enter your Name"
              pattern="[A-Za-z]{4,20}"
              required
            />
          </div>
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="lname" className="label_text">
              {" "}
              Last Name{" "}
            </label>
            <input
              type="text"
              name="last_name"
              id="lname"
              className="input_field"
              placeholder="Enter your name"
              pattern="[A-Za-z]{4,20}"
              required
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-3 lg:flex-row">
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="fname" className="label_text">
              Email*
            </label>
            <input
              type="text"
              name="first_name"
              id="fname"
              className="input_field"
              placeholder="Enter your Name"
              pattern="[A-Za-z]{4,20}"
              required
            />
          </div>
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="lname" className="label_text">
              Phone number*
            </label>
            <input
              type="text"
              name="last_name"
              id="lname"
              className="input_field"
              placeholder="Enter your name"
              pattern="[A-Za-z]{4,20}"
              required
            />
          </div>
        </div>
        <Button variant="primary">Update</Button>
      </div>
    </div>
  );
};

export default Profile;
