import React from "react";
import Image from "next/image";
import { ImLocation } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Banner, Button } from "@/components";
import Label from "@/components/ui/form/label";

const ContactUs = () => {
  return (
    <>
      <Banner title="Contact us" background={'/static/images/Contact-us.jpg'} />
      <div className="container max-w-[1200px] flex lg:flex-row flex-col gap-6 mx-auto rounded-xl md:mt-[-3rem] mt-3 md:mb-10">
        <div className="z-[2] overflow-hidden shadow-lg rounded-xl lg:max-w-[40%] mx-auto ring-1 ring-primary/10 w-full">
          <div className="relative">
            <Image
              src={'/static/images/Contact-us.svg'}
              alt=""
              loading="lazy"
              width={400}
              height={300}
              className="object-cover object-center w-full "
            />
          </div>
          <div className="space-y-4 p-7">
            <div className="flex items-center gap-2">
              <ImLocation className="text-xl text-primary" />
              <p>Fairfax House , 15 Fulwood Place London WC1V 6HU</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-xl text-primary" />
              <p>+44 7702 000707</p>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-xl text-primary" />
              <p className="text-primary">info@pampertree.co.uk</p>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-4 bg-white rounded-lg shadow-lg ring-1 ring-primary/10 z-[2]">
          <p className="text-2xl font-semibold text-black uppercase title heading">
            Get in touch
          </p>
          <p>Reach out to us for any inquiry</p>
          <div className="flex flex-col items-start gap-3">
            <div className="w-full space-y-1 text-left">
              <label htmlFor="country" className="label_text">
                Address
              </label>
              <input
                type="text"
                name="address"
                className="input_field"
                placeholder="Enter your Address"
              />
            </div>
            <div className="flex flex-col w-full gap-3 lg:flex-row">
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <Label htmlFor="email" text="Email" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input_field"
                  placeholder="Enter your email"
                />
              </div>
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <Label htmlFor="phone_number" text="Phone Number" />
                <input
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  className="input_field"
                  placeholder="Enter your Phone Number"
                />
              </div>
            </div>
            <div className="w-full space-y-1 text-left">
              <Label htmlFor="message" text="Message" />
              <textarea
                name="message"
                id="message"
                className="input_field"
                placeholder="Enter your Message"
                rows={5}
              />
            </div>
            <Button variant="primary" className="mt-1">SUBMIT</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
