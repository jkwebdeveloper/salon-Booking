import React from "react";
import { FaUser } from "react-icons/fa";

const Work = () => {
  return (
    <div className="container pt-10 pb-20 space-y-7">
      <p className="text-2xl text-center font-semibold text-black uppercase">
        How it
        <span className="text-primary_color">Works</span>
      </p>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="bg-white w-full lg:h-fit shadow-lg text-center mx-auto space-y-4 rounded-lg p-3">
          <FaUser className="text-4xl text-primary_color w-[100px] h-[100px] mx-auto bg-[#F7F7F7] text-center rounded-full p-5" />
          <p className="font-semibold">Create Account</p>
          <div className="">
            <p className="bg-[#0AADA4] mx-auto text-white w-[45px] rounded-full p-2 font-semibold text-xl">
              1
            </p>
          </div>
        </div>
        <div className="bg-white w-full lg:mt-14 shadow-lg text-center mx-auto space-y-4 rounded-lg p-3">
          <FaUser className="text-4xl text-primary_color w-[100px] h-[100px] mx-auto bg-[#F7F7F7] text-center rounded-full p-5" />
          <p className="font-semibold">List of Products</p>
          <div className="">
            <p className="bg-[#0AADA4] mx-auto text-white w-[45px] rounded-full p-2 font-semibold text-xl">
              2
            </p>
          </div>
        </div>
        <div className="bg-white w-full lg:h-fit shadow-lg text-center mx-auto space-y-4 rounded-lg p-3">
          <FaUser className="text-4xl text-primary_color w-[100px] h-[100px] mx-auto bg-[#F7F7F7] text-center rounded-full p-5" />
          <p className="font-semibold">Sell Products</p>
          <div className="">
            <p className="bg-[#0AADA4] mx-auto text-white w-[45px] rounded-full p-2 font-semibold text-xl">
              3
            </p>
          </div>
        </div>
        <div className="bg-white w-full lg:mt-14 shadow-lg text-center mx-auto space-y-4 rounded-lg p-3">
          <FaUser className="text-4xl text-primary_color w-[100px] h-[100px] mx-auto bg-[#F7F7F7] text-center rounded-full p-5" />
          <p className="font-semibold">Supply</p>
          <div className="">
            <p className="bg-[#0AADA4] mx-auto text-white w-[45px] rounded-full p-2 font-semibold text-xl">
              4
            </p>
          </div>
        </div>
        <div className="bg-white w-full lg:h-fit shadow-lg text-center mx-auto space-y-4 rounded-lg p-3">
          <FaUser className="text-4xl text-primary_color w-[100px] h-[100px] mx-auto bg-[#F7F7F7] text-center rounded-full p-5" />
          <p className="font-semibold">Earn</p>
          <div className="">
            <p className="bg-[#0AADA4] mx-auto text-white w-[45px] rounded-full p-2 font-semibold text-xl">
              5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
