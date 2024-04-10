"use client";
import DashBoardHeader from "@/components/global/DashboardHeader";
import Sidebar from "@/components/global/DashboardHeader/Sidebar";
import Customer from "@/components/vendor/Dashboard/Customer";
import Reviews from "@/components/vendor/Dashboard/Reviews";
import React, { useState } from "react";

const DashBoard = () => {
  return (
    <div className="">
      <DashBoardHeader />
      <div className="flex items-start">
        <div className="h-fit min-h-[350px] md:w-[40%] lg:w-[20%] w-[90%] space-y-5 p-5 bg-white">
          <Sidebar />
        </div>
        <div className="md:w-4/5 w-[90%] mx-auto space-y-5 h-fit min-h-[350px] p-5 bg-[#f4f2f2]">
          {/* <Reviews /> */}
          <Customer />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
