import React from "react";
import { LuBellRing } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";

const Sidebar = () => {
  return (
    <div className="space-y-7">
      <div className="flex items-center gap-5">
        <LuBellRing className="text-[#717579] text-2xl" />
        <p className="text-[#717579] text-lg">Alerts</p>
      </div>
      <div className="flex items-center gap-5">
        <LuBellRing className="text-[#717579] text-2xl" />
        <p className="text-[#717579] text-lg">Salon Details</p>
      </div>
      <div className="flex items-center gap-5">
        <LuBellRing className="text-[#717579] text-2xl" />
        <p className="text-[#717579] text-lg">Location Details</p>
      </div>
    </div>
  );
};

export default Sidebar;
