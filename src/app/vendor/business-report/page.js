'use client';
import Sidebar from '@/components/global/DashboardHeader/Sidebar';
import React from 'react';
import Report from '@/components/vendor/Dashboard/Report';
import { useSelector } from 'react-redux';

const BusinessReport = () => {
    const sidebar = useSelector(state => state.sidebarAuth.sidebar);
    return (
        <div className="flex items-start">
            {sidebar ? (
                <div className="h-fit min-h-[350px] lg:block hidden md:w-[35%] lg:w-[20%] w-[90%] space-y-5 p-5 bg-white">
                    <Sidebar />
                </div>
            ) : null}
            <div
                className={
                    sidebar
                        ? ` lg:w-4/5 w-full mx-auto space-y-5 h-fit min-h-[350px] p-5 bg-[#f4f2f2]`
                        : `w-full container bg-[#f4f2f2] mx-auto p-5`
                }
            >
                <Report />
            </div>
        </div>
    );
};

export default BusinessReport;
