import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import Button from "@/components/ui/button";

const QuickModal = () => {
  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:gap-0">
        <Image
          src={"/static/images/Rectangle 375.png"}
          // src={"/static/images/spa_life.png"}
          alt=""
          loading="lazy"
          width={300}
          height={300}
          className="object-cover"
        />
        <div className="space-y-2">
          <div className="">
            <h1 className="text-sm font-semibold md:text-base">
              Bootanjai Thai Massage
            </h1>
          </div>
          <p className="text-primary_color">Cupping Massage For 20 Min</p>
          <div className="flex items-center gap-3">
            <div className="bg-[#7f52861a] p-2 rounded-full">
              <MdLocationPin className="text-sm text-primary_color" />
            </div>
            <div>
              <p className="text-sm md:text-base">
                Barnack , Cambridge 181.2 miles
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex items-center gap-2 md:gap-3">
              <FaStar className="text-sm text-primary_color" />
              <p className="text-sm md:text-base">5.0 |</p>
            </div>
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
          <div className="flex items-center gap-3">
            <p className="text-2xl font-semibold text-primary_color">
              £249{" "}
              <span className="line-through text-[#898989] font-normal text-base">
                £289
              </span>
            </p>
            <p className="text-base font-semibold text-green_color"> 30% OFF</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="primary">Book Now</Button>
            <Button variant="outline">Browse Our Shop</Button>
          </div>
        </div>
      </div>
      <div className="border border-[#E0E0E0] bg-[#FAFAFA] rounded-lg p-4">
        <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
          <div className="">
            <p className="font-semibold">
              Cupping Massage
              <span className="font-normal">(20 Min)</span>
            </p>
            <div className="flex items-center gap-3">
              <p className="text-2xl font-semibold text-primary_color">
                £18{" "}
                <span className="line-through text-[#898989] font-normal text-base">
                  £28
                </span>
              </p>
              <p className="text-base font-semibold text-green_color">
                {" "}
                30% OFF
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="primary">Book Now</Button>
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
          <div className="">
            <p className="font-semibold">
              Cupping Massage
              <span className="font-normal">(20 Min)</span>
            </p>
            <div className="flex items-center gap-3">
              <p className="text-2xl font-semibold text-primary_color">
                £18{" "}
                <span className="line-through text-[#898989] font-normal text-base">
                  £28
                </span>
              </p>
              <p className="text-base font-semibold text-green_color">
                {" "}
                30% OFF
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="primary">Book Now</Button>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-2xl font-semibold text-black uppercase title heading">
          About Bootanjai Thai Massage
        </p>
        <p className="text-[#656565]">
          Bootanjai That Massage is a haven of relaxation and rejuvenation,
          offering a wide range of exceptional massage treatments. This esteemed
          business is dedicated to providing a holistic experience that promotes
          physical and mental well-being. Step into Sri Thai Bodywork Massage
          and be greeted by a team of skilled therapists who...
        </p>
      </div>
    </div>
  );
};

export default QuickModal;
