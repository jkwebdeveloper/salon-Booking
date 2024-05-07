import Button from "@/components/ui/button";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import WorkingHoursModal from "./Modal/WorkingHoursModal";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { MdModeEditOutline } from "react-icons/md";
const SalonDetails = () => {
  const [workingHours, setWorkingHours] = useState(false);
  return (
    <div className="relative w-full space-y-12 bg-white rounded-xl">
      <div className="bg-gradient-to-r  p-3 from-[#711F7E99] h-fit to-[#14DBD099] rounded-t-xl">
        <div className="flex items-center ">
          <div className="relative top-10">
            <div className="relative rounded-lg p-1 w-[6.5rem] h-[6.5rem] mb-2">
              <Image
                src={"/static/images/user.webp"}
                alt="profile"
                loading="lazy"
                className="object-cover w-full h-full rounded-full z-1"
                width={50}
                height={50}
              />
              <input
                type="file"
                className="absolute top-0 bottom-0 left-0 right-0 mt-2 cursor-pointer rounded-full max-w-[3.5rem] mx-auto opacity-0 z-2"
                name="photo"
              />
              <MdModeEditOutline className="absolute top-[50%] left-[50%] -translate-x-2 p-[4px] text-xl text-white rounded-full bg-primary" />
            </div>
          </div>
          <div className="relative top-10">
            <div className="relative rounded-lg p-1 w-[6.5rem] h-[6.5rem] mb-2">
              <Image
                src={"/static/images/user.webp"}
                alt="profile"
                loading="lazy"
                className="object-cover w-full h-full rounded-full z-1"
                width={50}
                height={50}
              />
              <input
                type="file"
                className="absolute top-0 bottom-0 left-0 right-0 mt-2 cursor-pointer rounded-full max-w-[3.5rem] mx-auto opacity-0 z-2"
                name="photo"
              />
              <MdModeEditOutline className="absolute top-[50%] left-[50%] -translate-x-2 p-[4px] text-xl text-white rounded-full bg-primary" />
            </div>
          </div>
          <div className="relative top-10">
            <div className="relative rounded-lg p-1 w-[6.5rem] h-[6.5rem] mb-2">
              <Image
                src={"/static/images/user.webp"}
                alt="profile"
                loading="lazy"
                className="object-cover w-full h-full rounded-full z-1"
                width={50}
                height={50}
              />
              <input
                type="file"
                className="absolute top-0 bottom-0 left-0 right-0 mt-2 cursor-pointer rounded-full max-w-[3.5rem] mx-auto opacity-0 z-2"
                name="photo"
              />
              <MdModeEditOutline className="absolute top-[50%] left-[50%] -translate-x-2 p-[4px] text-xl text-white rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 space-y-4">
        <p className="text-xl font-semibold">Salon Info</p>
        <div className="w-full space-y-1 text-left">
          <label htmlFor="fname" className="label_text">
            Salon Name*
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
        <div className="w-full space-y-1 text-left">
          <label htmlFor="fname" className="label_text">
            Salon Name*
          </label>
          <textarea
            id="message"
            rows="4"
            className="input_field"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        {/* <div >
          <p className="text-sm text-[#0AADA4]">Shop working hours</p>
          <IoIosArrowForward />
        </div> */}
        <Dialog open={workingHours} className="w-11/12">
          <DialogTrigger
            onClick={(e) => setWorkingHours(true)}
            className="w-full lg:w-1/2 bg-[#EDFFFE] p-3 flex cursor-pointer justify-between items-center border rounded-lg border-[#0AADA4]"
          >
            <p className="text-sm text-[#0AADA4]">Shop working hours</p>
            <IoIosArrowForward />
          </DialogTrigger>
          <DialogContent close={setWorkingHours} className="sm:max-w-[425px]">
            <DialogTitle>Shop working hours</DialogTitle>
            {/* <NewTreatmentModal setAddCustomer={setAddCustomer} />
            <ServicesListModal setAddCustomer={setAddCustomer} /> */}
            <WorkingHoursModal setWorkingHours={setWorkingHours} />
          </DialogContent>
        </Dialog>
        <p className="text-xl font-semibold">Social Profiles</p>
        <div className="w-full space-y-1 text-left">
          <label htmlFor="fname" className="label_text">
            Facebook
          </label>
          <input
            type="text"
            name="first_name"
            id="fname"
            className="input_field"
            placeholder="Enter your profile link here..."
            pattern="[A-Za-z]{4,20}"
            required
          />
        </div>
        <div className="w-full space-y-1 text-left">
          <label htmlFor="fname" className="label_text">
            Twitter
          </label>
          <input
            type="text"
            name="first_name"
            id="fname"
            className="input_field"
            placeholder="Enter your profile link here..."
            pattern="[A-Za-z]{4,20}"
            required
          />
        </div>
        <div className="w-full space-y-1 text-left">
          <label htmlFor="fname" className="label_text">
            Instagram
          </label>
          <input
            type="text"
            name="first_name"
            id="fname"
            className="input_field"
            placeholder="Enter your profile link here..."
            pattern="[A-Za-z]{4,20}"
            required
          />
        </div>
        <div className="w-full space-y-1 text-left">
          <label htmlFor="fname" className="label_text">
            Whatsapp
          </label>
          <input
            type="text"
            name="first_name"
            id="fname"
            className="input_field"
            placeholder="Enter your profile link here..."
            pattern="[A-Za-z]{4,20}"
            required
          />
        </div>
        <Button variant="primary">Update</Button>
      </div>
    </div>
  );
};

export default SalonDetails;
