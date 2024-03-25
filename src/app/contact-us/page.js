import React from "react";
import Image from "next/image";
import { ImLocation } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Banner, Button } from "@/components";

const ContactUs = () => {
  return (
    <>
      <Banner title="Contact us" background={'/static/images/Contact us.jpg'} />
      <div className="relative flex flex-col items-stretch justify-center gap-4 mx-auto md:flex-row xl:-top-8 lg:-top-8 md:-top-8 -top-8">
        <div className="overflow-hidden bg-white shadow-lg rounded-xl">
          <div className="relative">
            <Image
              src={'/static/images/contact.jpg'}
              alt=""
              loading="lazy"
              width={400}
              height={300}
              className="relative object-cover w-full"
            />
            <div className="absolute p-4 mx-auto top-9">
              <Image
                src={'/static/images/logowhite.png'}
                alt=""
                loading="lazy"
                width={300}
                height={300}
                className="relative w-full"
                objectFit="cover"
              />
            </div>
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
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <p className="text-2xl font-semibold text-black uppercase title heading">
            Get in touch
          </p>
          <p>Reach out to us for any inquiry</p>
          <div className="space-y-4">
            <div className="w-full space-y-1 text-left">
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
              />
            </div>
            <Button variant="primary">SUBMIT</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
