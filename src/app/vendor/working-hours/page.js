"use client";
import Sidebar from '@/components/global/DashboardHeader/Sidebar';
import React from 'react';
import AlertSetting from '../alert-setting/page';
import WorkingHours from '@/components/vendor/Dashboard/WorkingHours';
import { useSelector } from 'react-redux';

const WrkingHours = () => {
  const { sidebar } = useSelector(state => state.sidebarAuth.sidebar);

    return (
        <div className="flex items-start">
           {sidebar ? (
      <div className="h-fit min-h-[350px] lg:block hidden lg:w-[20%] w-full space-y-5 p-5 bg-white">
        <Sidebar />
      </div>

      ) : null}
            <div className={
                    sidebar
                        ? ` lg:w-4/5 w-full mx-auto space-y-5 h-fit min-h-[350px] md:p-5 p-2 bg-[#f4f2f2]`
                        : `w-full container bg-[#f4f2f2] mx-auto md:p-5 p-2`
                }>
                <WorkingHours />
            </div>
        </div>
    );
};

export default WrkingHours;
