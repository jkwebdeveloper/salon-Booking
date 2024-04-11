import Button from "@/components/ui/button";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const UserModal = () => {
  const [editDay, setEditDay] = useState(false);
  return (
    <div className="w-full space-y-3">
      {editDay === true ? (
        <div className="">editDay</div>
      ) : (
        <>
          <div className="bg-[#0AADA4] mx-auto text-center p-3 rounded-full w-12">
            NS
          </div>
          <p className="text-center">Nuzami</p>
          <div
            className="w-full bg-[#FAFAFA] p-3 cursor-pointer flex justify-between items-center border rounded-lg border-[#D8DAE5]"
            onClick={() => setEditDay(true)}
          >
            <p className="text-sm">Edit day</p>
            <IoIosArrowForward />
          </div>
          <div className="w-full bg-[#FAFAFA] p-3 flex cursor-pointer justify-between items-center border rounded-lg border-[#D8DAE5]">
            <p className="text-sm">Add Time Off</p>
            <IoIosArrowForward />
          </div>
          <div className="w-full bg-[#FAFAFA] p-3 flex cursor-pointer justify-between items-center border rounded-lg border-[#D8DAE5]">
            <p className="text-sm">New Schedule</p>
            <IoIosArrowForward />
          </div>
        </>
      )}
    </div>
  );
};

export default UserModal;
