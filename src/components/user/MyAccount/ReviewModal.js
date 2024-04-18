import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewModal = () => {
  return (
    <div className="space-y-4">
      <p className="text-xl font-bold">Spa Life & Massage</p>
      <p className="text-xl font-semibold">How would you rate it?</p>
      <div className="flex items-center gap-3">
        <FaStar className="text-[#FFCC00] text-2xl" />
        <FaStar className="text-[#D6D6D6] text-2xl" />
        <FaStar className="text-[#D6D6D6] text-2xl" />
        <FaStar className="text-[#D6D6D6] text-2xl" />
        <FaStar className="text-[#D6D6D6] text-2xl" />
      </div>
      <p className="text-xl font-semibold">
        How would you rate these features?
      </p>
      <div>
        <p className="text-sm ">Ambiance</p>
        <div className="flex items-center gap-3">
          <FaStar className="text-[#FFCC00] text-2xl" />
          <FaStar className="text-[#D6D6D6] text-2xl" />
          <FaStar className="text-[#D6D6D6] text-2xl" />
          <FaStar className="text-[#D6D6D6] text-2xl" />
          <FaStar className="text-[#D6D6D6] text-2xl" />
        </div>
      </div>
      <div>
        <p className="text-sm ">Staff</p>
        <div className="flex items-center gap-3">
          <FaStar className="text-[#FFCC00] text-2xl" />
          <FaStar className="text-[#FFCC00] text-2xl" />
          <FaStar className="text-[#FFCC00] text-2xl" />
          <FaStar className="text-[#FFCC00] text-2xl" />
          <FaStar className="text-[#FFCC00] text-2xl" />
        </div>
      </div>
      <div>
        <p className="text-sm ">Cleanliness</p>
        <div className="flex items-center gap-3">
          <FaStar className="text-[#FFCC00] text-2xl" />
          <FaStar className="text-[#FFCC00] text-2xl" />
          <FaStar className="text-[#D6D6D6] text-2xl" />
          <FaStar className="text-[#D6D6D6] text-2xl" />
          <FaStar className="text-[#D6D6D6] text-2xl" />
        </div>
      </div>

      <textarea
        id="message"
        rows="4"
        className="input_field"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
};

export default ReviewModal;
