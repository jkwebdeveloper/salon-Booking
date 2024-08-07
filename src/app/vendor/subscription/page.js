import Sidebar from "@/components/global/DashboardHeader/Sidebar";
import SubScription from "@/components/vendor/Dashboard/SubScription";
import React from "react";

const Subscription = () => {
  return (
    <div className="flex items-start">
      <div className="h-fit min-h-[350px] lg:block hidden lg:w-[20%] w-full space-y-5 p-5 bg-white">
        <Sidebar />
      </div>
      <div className="lg:w-4/5 w-full mx-auto space-y-5 h-fit min-h-[350px] p-5 bg-[#f4f2f2]">
        <SubScription />
      </div>
    </div>
  );
};

export default Subscription;
