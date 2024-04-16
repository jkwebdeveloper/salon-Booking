"use client";
import DashBoardHeader from "@/components/global/DashboardHeader";
import Sidebar from "@/components/global/DashboardHeader/Sidebar";
import AlertSetting from "@/components/vendor/Dashboard/AlertSetting";
import BookingList from "@/components/vendor/Dashboard/BookingList";
import ChangePass from "@/components/vendor/Dashboard/ChangePass";
import Customer from "@/components/vendor/Dashboard/Customer";
import DashBoardHome from "@/components/vendor/Dashboard/DashboardHome";
import LocationDetails from "@/components/vendor/Dashboard/LocationDetails";
import Planner from "@/components/vendor/Dashboard/Planner";
import Profile from "@/components/vendor/Dashboard/Profile";
import BusinessReport from "@/components/vendor/Dashboard/Report";
import SalonDetails from "@/components/vendor/Dashboard/SalonDetails";
import Services from "@/components/vendor/Dashboard/Services";
import Staff from "@/components/vendor/Dashboard/Staff";
import Wallet from "@/components/vendor/Dashboard/Wallet";
import React, { useState } from "react";

const DashBoard = () => {
  return (
    <div className="">
      <DashBoardHeader />
      <div className="flex items-start">
        <div className="h-fit min-h-[350px] md:block hidden md:w-[35%] lg:w-[20%] w-[90%] space-y-5 p-5 bg-white">
          <Sidebar />
        </div>
        <div className="md:w-4/5 w-[90%] mx-auto space-y-5 h-fit min-h-[350px] p-5 bg-[#f4f2f2]">
          <DashBoardHome />
          {/* <Customer /> */}
          {/* <BusinessReport /> */}
          {/* <Staff /> */}
          {/* <Planner /> */}
          {/* <BookingList /> */}
          {/* <Services /> */}
          {/* <Wallet /> */}
          {/* <Profile /> */}
          {/* <ChangePass /> */}
          {/* <AlertSetting /> */}
          {/* <SalonDetails /> */}
          {/* <LocationDetails /> */}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
