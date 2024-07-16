"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineLock } from "react-icons/md";

const SubScription = () => {
  const [checkOut, setCheckOut] = useState(false);
  return (
    <div className="space-y-4">
      {checkOut ? (
        <>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <p className="text-2xl font-semibold">Secure checkout</p>
              <MdOutlineLock />
            </div>
            <IoMdClose
              className="text-xl cursor-pointer"
              onClick={() => setCheckOut(false)}
            />
          </div>
          <div className="w-full p-3 space-y-4 bg-white rounded-xl"></div>
        </>
      ) : (
        <>
          <p className="text-2xl font-semibold">Subscription</p>
          <div className="w-full p-3 space-y-4 bg-white rounded-xl">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="border-[#B195F6] rounded-xl border py-5 px-7 flex-col text-center space-y-3 items-center bg-[#EDE9F8]">
                <p className="font-semibold text-[30px]">Basic</p>
                <p className="text-4xl font-bold bg-[#DDD5F2] rounded-lg p-3">
                  $99.00
                </p>
                <p>
                  2 Featured service <br /> For 1 month
                </p>
                <button
                  className="bg-[#4C21B9] w-full rounded-full text-white px-3 py-2 focus:outline-none capitalize  font-medium  active:scale-90 transition text-sm"
                  onClick={() => setCheckOut(true)}
                >
                  Buy now
                </button>
              </div>
              <div className="border-[#9FBCFF] rounded-xl border py-5 px-7 flex-col text-center space-y-3 items-center bg-[#E7EDFB]">
                <p className="font-semibold text-[30px]">Advance</p>
                <p className="text-4xl font-bold bg-[#D1DDF7] rounded-lg p-3">
                  $49.00
                </p>
                <p>
                  2 Featured service <br /> For 1 month
                </p>
                <button className="bg-[#0F4CD8] w-full rounded-full text-white px-3 py-2 focus:outline-none capitalize  font-medium  active:scale-90 transition text-sm">
                  Buy now
                </button>
              </div>
              <div className="border-[#A3F3C8] rounded-xl border py-5 px-7 flex-col text-center space-y-3 items-center bg-[#E8F7EF]">
                <p className="font-semibold text-[30px]">Super</p>
                <p className="text-4xl font-bold bg-[#D3F0E0] rounded-lg p-3">
                  $49.00
                </p>
                <p>
                  2 Featured service <br /> For 1 month
                </p>
                <button className="bg-[#17AF5C] w-full rounded-full text-white px-3 py-2 focus:outline-none capitalize  font-medium  active:scale-90 transition text-sm">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SubScription;
