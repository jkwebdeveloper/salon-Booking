"use client";
import Sidebar from "@/components/global/DashboardHeader/Sidebar";
import Wallet from "@/components/vendor/Dashboard/Wallet";
import React from "react";
import { useSelector } from "react-redux";

const WalletPage = () => {
  const { sidebar } = useSelector((state) => state.sidebarAuth.sidebar);

  return (
    <div className="flex items-start">
      {sidebar ? (
        <div className="h-fit min-h-[350px] md:block hidden md:w-[35%] lg:w-[20%] w-[90%] space-y-5 p-5 bg-white">
          <Sidebar />
        </div>
      ) : null}
      <div
        className={
          sidebar
            ? ` md:w-4/5 w-[90%] mx-auto space-y-5 h-fit min-h-[350px] p-5 bg-[#f4f2f2]`
            : `w-full container bg-[#f4f2f2] mx-auto p-5`
        }
      >
        <Wallet />
      </div>
    </div>
  );
};

export default WalletPage;
