

import React from 'react'

import { MdLocationPin } from "react-icons/md";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";
import { Button } from '@/components';
import Link from 'next/link';

import QuickModal from "@/components/user/Home/QuickModal";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

function CardMultiServices() {
  return (
    <div className="border border-[#DBDBDB] rounded-lg">
      <div className="flex flex-col justify-between gap-1 p-3 text-left xl:flex-row xl:items-center xl:gap-2">
        <div className="space-y-2 xl:space-y-3">
          <h1 className="text-base font-semibold">Moon Massage</h1>
          <p className="text-primary_color">Nail Salons</p>
          <div className="flex items-center gap-3">
            <div className="bg-[#7f52861a] p-2 rounded-full">
              <MdLocationPin className="text-lg text-primary_color" />
            </div>
            <div>
              <p>Barnack , Cambridge 181.2 miles</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <FaStar className="text-lg text-[#FFCC00]" />
              <p>3.0</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#29AD17] p-2 rounded-full">
                <FaWhatsapp className="text-lg text-white" />
              </div>
              <div className="bg-[#4664A0] p-2 rounded-full">
                <ImFacebook className="text-lg text-white" />
              </div>
              <div className="bg-[#000] p-2 rounded-full">
                <BsTwitterX className="text-lg text-white" />
              </div>
              <div className="bg-[#A4A4A4] p-2 rounded-full">
                <LuBookmark className="text-lg text-white" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 outline_button md:px-5"
            >
              <MdLocationPin className="text-lg text-primary_color" />
              View All Services
            </button>
          </div>
        </div>
      </div>
      <hr className="w-full mt-4" />
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
          <Button variant="primary" asChild>
            <Link href={'/details/span-massage/2'}>Book Now</Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">
                Quick view
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[825px]">
              <QuickModal />
            </DialogContent>
          </Dialog>
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
          <Button variant="primary" asChild>
            <Link href={'/details/span-massage/2'}>Book Now</Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">
                Quick view
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[825px]">
              <QuickModal />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

export default CardMultiServices