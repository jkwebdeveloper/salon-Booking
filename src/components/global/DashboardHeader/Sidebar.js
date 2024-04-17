import React from "react";
import { LuBellRing } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="space-y-7">
      <Link href="/vendor/alert-setting">
        <div className="flex items-center gap-5 pb-3 ">
          <LuBellRing className="text-[#717579] text-2xl" />
          <p className="text-[#717579] text-lg">Alerts</p>
        </div>
      </Link>
      <Link href="/vendor/salon-details">
        <div className="flex items-center gap-5 pb-3">
          <LuBellRing className="text-[#717579] text-2xl" />
          <p className="text-[#717579] text-lg">Salon Details</p>
        </div>
      </Link>
      <Link href="/vendor/loaction-detail">
        <div className="flex items-center gap-5 pb-3">
          <LuBellRing className="text-[#717579] text-2xl" />
          <p className="text-[#717579] text-lg">Location Details</p>
        </div>
      </Link>
      <Link href="/vendor/change-password">
        <div className="flex items-center gap-5 pb-3">
          <LuBellRing className="text-[#717579] text-2xl" />
          <p className="text-[#717579] text-lg">Change Password</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
