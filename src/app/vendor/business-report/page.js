"use client";
import Sidebar from "@/components/global/DashboardHeader/Sidebar";
import React from "react";
import BusinessReport from "@/components/vendor/Dashboard/Report";

const businessReport = () => {
  return (
    <div className="flex items-start">
      <div className="h-fit min-h-[350px] md:block hidden md:w-[35%] lg:w-[20%] w-[90%] space-y-5 p-5 bg-white">
        <Sidebar />
      </div>
      <div className="md:w-4/5 w-[90%] mx-auto space-y-5 h-fit min-h-[350px] p-5 bg-[#f4f2f2]">
        <BusinessReport />
      </div>
    </div>
  );
};

export default businessReport;
