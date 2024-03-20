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

const BookingDetails = ({ setBookingDetails, bookingDetails }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOnClose = () => {
    setOpenModal(false);
  };
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-xl text-[#25324B] font-semibold">Booking Details</p>
        <IoMdClose
          className="text-2xl cursor-pointer"
          onClick={() => setBookingDetails(false)}
        />
      </div>
      <p>Booking ID: ABE21AEB</p>
      <div className="flex items-center justify-start gap-7">
        <div className="flex items-start justify-start gap-2">
          <TbCalendarStats className="text-2xl" />
          <div>
            <p className="font-semibold text-lg">Thu 22 Feb 2024 at 10:00</p>
            <p>2 hr 25 min duration</p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-2">
          <TfiLocationPin className="text-2xl" />
          <div>
            <p className="font-semibold text-lg">Spa Life & Massage</p>
            <p>Street 420, Addington, London, EH1 1AE, UK</p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-2">
          <AiOutlineUser className="text-2xl" />
          <div>
            <p className="font-semibold text-lg">Nelson Mandela</p>
            <p>Employee</p>
          </div>
        </div>
      </div>
      <p className="text-sm">Overview</p>
      <hr className="w-full mt-3" />
      <div className="">
        <div className="flex justify-between items-center">
          <p className="text-sm">Sports Massage</p>
          <p className="text-primary_color">£25.00</p>
        </div>
        <p className="text-sm">10 Mins</p>
      </div>
      <hr className="w-full mt-3" />
      <div className="">
        <div className="flex justify-between items-center">
          <p className="text-sm">Swedish Massage</p>
          <p className="text-primary_color">£20.00</p>
        </div>
        <p className="text-sm">15 Mins</p>
      </div>
      <hr className="w-full mt-3" />
      <div className="">
        <div className="flex justify-between items-center">
          <p className="text-sm">Couples Massage</p>
          <p className="text-primary_color">£349.00</p>
        </div>
        <p className="text-sm">2 Hr</p>
      </div>
      <hr className="w-full mt-3" />
      <div className="flex justify-between items-center">
        <p className="text-md font-semibold">Order Total: </p>
        <p className="text-primary_color">£394.00</p>
      </div>
      <div>
        <p>Cancellation policy</p>
        <p className="text-sm">
          Please avoid cancelling within 30 minutes of your appointment time
        </p>
      </div>
      <div className="flex items-center justify-start gap-3">
        <button
          type="button"
          className="focus:outline-none border border-[#711F7E] font-medium rounded-full active:scale-90 transition md:px-10 px-3 md:py-3 py-2; uppercase text-primary_color"
        >
          book again
        </button>
        <button
          type="button"
          className="focus:outline-none border border-[#711F7E] font-medium rounded-full active:scale-90 transition md:px-10 px-3 md:py-3 py-2; uppercase text-primary_color"
        >
          Rechedule Appointment
        </button>
        <button
          type="button"
          className="focus:outline-none border border-[#D4163A] font-medium rounded-full active:scale-90 transition md:px-10 px-3 md:py-3 py-2; uppercase text-[#D4163A]"
          onClick={() => setOpenModal(true)}
        >
          Cancel Appointment
        </button>
      </div>
      <div className="flex items-center justify-start gap-4">
        <div className="space-y-3">
          <p>Google map</p>
          <button
            type="button"
            className="focus:outline-none flex items-center gap-2 border border-[#D4163A] font-medium rounded-full active:scale-90 transition md:px-5 px-3 md:py-2 py-2; uppercase text-black"
          >
            <TbLocation />
            Get direction
          </button>
        </div>
        <div className="space-y-3">
          <p>Share booking info</p>
          <div className="flex items-center md:gap-3 gap-2">
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
              <TiMessageTyping className="text-2xl text-white" />
            </div>
          </div>
        </div>
      </div>
      <MyBookingModal onClose={handleOnClose} visible={openModal} />
    </div>
  );
};

export default BookingDetails;
