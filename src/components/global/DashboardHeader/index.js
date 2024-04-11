"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineBell } from "react-icons/ai";

const DashBoardHeader = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="container border-b">
        <div className="flex items-center gap-24 py-2">
          <Link href="/">
            <Image
              src={"/static/images/logo.png"}
              alt="logo"
              loading="lazy"
              width={150}
              height={150}
            />
          </Link>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-7">
              <HiMenuAlt2 className="text-2xl" />
              <p className="font-semibold cursor-pointer">
                <span className="inline-block footer">Dashboard</span>
              </p>
              <p className="cursor-pointer text-[#666666]">
                <span className="inline-block footer">Planner</span>
              </p>
              <p className="cursor-pointer text-[#666666]">
                <span className="inline-block footer">Customers</span>
              </p>
              <p className="cursor-pointer text-[#666666]">
                <span className="inline-block footer">Staff</span>
              </p>
              <p className="cursor-pointer text-[#666666]">
                <span className="inline-block footer">Services</span>
              </p>
              <p className="cursor-pointer text-[#666666]">
                <span className="inline-block footer">Business Report</span>
              </p>
              <p className="cursor-pointer text-[#666666]">
                <span className="inline-block footer">Wallet</span>
              </p>
            </div>
            <div className="flex items-center gap-5">
              <AiOutlineBell className="text-2xl" />
              <p className="rounded-full p-3 text-xl bg-[#0AADA4] text-white">
                JA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
