import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const MyBookingModal = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <div className="fixed -top-4 inset-0 overflow-y-auto bg-black bg-opacity-30 backdrop-blur-sm z-50">
      <div className="bg-white md:w-1/3 w-[90%] overflow-y-visible rounded-2xl relative items-center justify-center xl:top-40 lg:top-5 top-20 mx-auto p-8 space-y-2">
        <AiOutlineClose onClick={onClose} className="cursor-pointer ml-auto" />
        <div className="text-center space-y-5">
          <p className="font-semibold text-2xl">Are you sure you want to cancel <br /> your appointment?</p>
          <p>
            If you want to change the appointment time, you can reschedule your
            appointment.
          </p>
          <button type="button" className="primary_button uppercase">
            Yes, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBookingModal;
