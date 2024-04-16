"use client";
import Sidebar from "@/components/global/DashboardHeader/Sidebar";
import Customer from "@/components/vendor/Dashboard/Customer";
import React from "react";

const CustomerPage = () => {
  return (
    <div className="flex items-start">
      <div className="h-fit min-h-[350px] md:block hidden md:w-[35%] lg:w-[20%] w-[90%] space-y-5 p-5 bg-white">
        <Sidebar />
      </div>
      <div className="md:w-4/5 w-[90%] mx-auto space-y-5 h-fit min-h-[350px] p-5 bg-[#f4f2f2]">
        <Customer />
      </div>
    </div>
  );
};

export default CustomerPage;
