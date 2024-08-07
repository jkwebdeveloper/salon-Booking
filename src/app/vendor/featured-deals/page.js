'use client';
import Sidebar from '@/components/global/DashboardHeader/Sidebar';
import FeaturedDealSection from '@/components/vendor/Dashboard/FeaturedDeal';
import React from 'react';
import { useSelector } from 'react-redux';

const FeaturedDeals = () => {
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
                        ? ` lg:w-4/5 w-full mx-auto space-y-5 h-fit min-h-[350px] p-5 bg-[#f4f2f2]`
                        : `w-full container bg-[#f4f2f2] mx-auto p-5`
                }>
                <FeaturedDealSection />
            </div>
        </div>
    );
};

export default FeaturedDeals;
