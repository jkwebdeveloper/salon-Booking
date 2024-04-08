import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";
import Button from "@/components/ui/button";
import PopularSalon from "@/components/user/Home/PopularSalon";
import Location from "@/components/user/Home/Location";

const VoucherDetails = () => {
  return (
    <div className="py-7">
      <div className="container space-y-6">
        <div className="flex flex-col w-full gap-3 md:flex-row">
          <Image
            src={"/static/images/spa_life.png"}
            alt="spa life"
            loading="lazy"
            width={400}
            height={300}
            className=""
          />
          <div className="w-full space-y-5">
            <div className="flex items-start justify-between">
              <div className="space-y-3">
                <p className="text-2xl font-semibold">
                  20% OFF ON Any Salon service booking
                </p>
                <p className="text-xl font-semibold">£20.00</p>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="bg-[#29AD17] p-2 rounded-full">
                    <FaWhatsapp className="text-sm text-white" />
                  </div>
                  <div className="bg-[#4664A0] p-2 rounded-full">
                    <ImFacebook className="text-sm text-white" />
                  </div>
                  <div className="bg-[#000] p-2 rounded-full">
                    <BsTwitterX className="text-sm text-white" />
                  </div>
                  <div className="bg-[#A4A4A4] p-2 rounded-full">
                    <LuBookmark className="text-sm text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="primary">Book Now</Button>
              <Button variant="outline">Add to cart</Button>
            </div>
            <hr className="w-full" />
            <p className="font-semibold">Voucher detail</p>
            <p>
              Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
        </div>
        <PopularSalon />
        <Location />
      </div>
    </div>
  );
};

export default VoucherDetails;
