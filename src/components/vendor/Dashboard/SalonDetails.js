import Button from "@/components/ui/button";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const SalonDetails = () => {
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
        <div className="w-full lg:w-1/2 bg-[#EDFFFE] p-3 flex cursor-pointer justify-between items-center border rounded-lg border-[#0AADA4]">
          <p className="text-sm text-[#0AADA4]">Shop working hours</p>
          <IoIosArrowForward />
        </div>
        {/* <Dialog open={addCustomer} className="w-11/12">
          <DialogTrigger
            onClick={(e) => setAddCustomer(true)}
            className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
          >
            + Add New Treatment
          </DialogTrigger>
          <DialogContent close={setAddCustomer} className="sm:max-w-[1025px]">
            <DialogTitle>Add New Treatment</DialogTitle>
            <NewTreatmentModal setAddCustomer={setAddCustomer} />
            <ServicesListModal setAddCustomer={setAddCustomer} />
          </DialogContent>
        </Dialog> */}
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
