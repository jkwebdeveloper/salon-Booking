import React from "react";
import banner from "../../../public/static/images/Contact us.jpg";
import contact from "../../../public/static/images/contact.jpg";
import logo from "../../../public/static/images/logowhite.png";
import Image from "next/image";
import { ImLocation } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  return (
    <>
      <div className="relative w-full">
        <Image
          src={banner}
          alt=""
          loading="lazy"
          // width={300}
          // height={300}
          className="relative w-full"
          // layout="fill"
          // fill
          objectFit="cover"
        />
        <div className="absolute w-full top-1/2">
          <h1 className="text-center uppercase text-2xl text-white font-semibold mx-auto flex items-center justify-center">
            Contact us
          </h1>
        </div>
      </div>
      <div className="flex mx-auto md:flex-row justify-center items-center flex-col gap-4 relative xl:-top-8 lg:-top-8 md:-top-8 -top-8">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="relative">
            <Image
              src={contact}
              alt=""
              loading="lazy"
              //   width={300}
              //   height={300}
              className="relative"
              // layout="fill"
              // fill
              objectFit="cover"
            />
            <div className="absolute mx-auto p-4 top-9">
              <Image
                src={logo}
                alt=""
                loading="lazy"
                width={300}
                height={300}
                className="relative w-full"
                // layout="fill"
                // fill
                objectFit="cover"
              />
            </div>
          </div>
          <div className="p-7 space-y-4">
            <div className="flex items-center gap-2">
              <ImLocation className="text-primary text-xl" />
              <p>Fairfax House , 15 Fulwood Place London WC1V 6HU</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary text-xl" />
              <p>+44 7702 000707</p>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-primary text-xl" />
              <p className="text-primary">info@pampertree.co.uk</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <p className="text-black font-semibold uppercase text-2xl title heading">
            Get in touch
          </p>
          <p>Reach out to us for any inquiry</p>
          <div className="space-y-4">
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
            <Button variant="primary">SUBMIT</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
