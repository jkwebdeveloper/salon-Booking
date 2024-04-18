import React, { useState } from "react";
import { TbCalendarStats, TbLocation } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlineUser } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { TiMessageTyping } from "react-icons/ti";
import MyBookingModal from "./MyBookingModal";
import { Button } from "@/components";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import ReviewModal from "./ReviewModal";
const BookingDetails = ({ setBookingDetails, bookingDetails }) => {
  const [openModal, setOpenModal] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);

  const handleOnClose = () => {
    setOpenModal(false);
  };
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xl text-[#25324B] font-semibold">Booking Details</p>
        <IoMdClose
          className="text-2xl cursor-pointer"
          onClick={() => setBookingDetails(false)}
        />
      </div>
      <p className="text-sm text-neutral-600">Booking ID: ABE21AEB</p>
      <div className="flex items-center justify-start gap-7">
        <div className="flex items-start justify-start gap-2">
          <TbCalendarStats className="text-2xl" />
          <div>
            <p className="font-semibold leading-tight text-md">
              Thu 22 Feb 2024 at 10:00
            </p>
            <p className="text-sm text-neutral-500">2 hr 25 min duration</p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-2">
          <TfiLocationPin className="text-2xl" />
          <div>
            <p className="font-semibold leading-tight text-md">
              Spa Life & Massage
            </p>
            <p className="text-sm text-neutral-500">
              Street 420, Addington, London, EH1 1AE, UK
            </p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-2">
          <AiOutlineUser className="text-2xl" />
          <div>
            <p className="font-semibold leading-tight text-md">
              Nelson Mandela
            </p>
            <p className="text-sm text-neutral-500">Employee</p>
          </div>
        </div>
      </div>

      <Dialog open={reviewModal}>
        <DialogTrigger
          onClick={(e) => setReviewModal(true)}
          className="text-[#EA2C6D] text-xl"
        >
          <Button variant="yellow">Add review</Button>
        </DialogTrigger>
        <DialogContent close={setReviewModal}>
          <DialogTitle className="text-sm font-normal">
            Share your experience with
          </DialogTitle>
          <ReviewModal setReviewModal={setReviewModal} />
        </DialogContent>
      </Dialog>
      <p className="pt-4 pb-2 text-sm border-b">Overview</p>
      <div className="">
        <div className="flex items-center justify-between">
          <p className="text-sm">Sports Massage</p>
          <p className="text-primary_color">£25.00</p>
        </div>
        <p className="text-sm">10 Mins</p>
      </div>
      <hr className="w-full mt-3" />
      <div className="">
        <div className="flex items-center justify-between">
          <p className="text-sm">Swedish Massage</p>
          <p className="text-primary_color">£20.00</p>
        </div>
        <p className="text-sm">15 Mins</p>
      </div>
      <hr className="w-full mt-3" />
      <div className="">
        <div className="flex items-center justify-between">
          <p className="text-sm">Couples Massage</p>
          <p className="text-primary_color">£349.00</p>
        </div>
        <p className="text-sm">2 Hr</p>
      </div>
      <hr className="w-full mt-3" />
      <div className="flex items-center justify-between">
        <p className="font-semibold text-md">Order Total: </p>
        <p className="text-primary_color">£394.00</p>
      </div>
      <div className="py-4">
        <p className="font-bold">Cancellation policy</p>
        <p className="text-[0.85rem] text-neutral-500">
          Please avoid cancelling within 30 minutes of your appointment time
        </p>
      </div>
      <div className="flex items-center justify-start gap-3">
        <Button variant="outline" className="uppercase text-primary">
          book again
        </Button>
        <Button variant="outline" className="uppercase text-primary">
          Rechedule Appointment
        </Button>
        <Button variant="danger">Cancel Appointment</Button>
      </div>
      <div className="flex items-start justify-start gap-4 pt-3">
        <div className="space-y-3">
          <p className="text-sm">Google map</p>
          <Button
            variant="outline"
            className="p-[1px] text-neutral-700 uppercase bg-gradient-to-r from-[#FF0000] via-red-400 to-[#0AADA4]"
            parent
          >
            <Link
              href={"/"}
              className="flex items-center flex-1 w-full h-full gap-2 px-3 bg-white rounded-full hover:bg-primary"
            >
              <TbLocation /> Get direction
            </Link>
          </Button>
        </div>
        <div className="space-y-3">
          <p className="text-sm">Share booking info</p>
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
              <TiMessageTyping className="text-sm text-white" />
            </div>
          </div>
        </div>
      </div>
      <MyBookingModal onClose={handleOnClose} visible={openModal} />
    </div>
  );
};

export default BookingDetails;
