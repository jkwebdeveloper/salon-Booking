"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineBell } from "react-icons/ai";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TbUserCheck } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import Button from "@/components/ui/button";
const DashBoardHeader = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="container border-b ">
        <div className="flex items-center gap-24 py-2 ">
          <Link href="/">
            <Image
              src={"/static/images/logo.png"}
              alt="logo"
              loading="lazy"
              width={150}
              height={150}
            />
          </Link>
          <div className="flex items-center justify-between w-full ">
            <div className="flex items-center gap-7">
              <HiMenuAlt2 className="text-2xl" />
              <Link href="/vendor/dashboard">
                <p className="font-semibold cursor-pointer">
                  <span className="inline-block footer">Dashboard</span>
                </p>
              </Link>
              <Link href="/vendor/planner">
                <p className="cursor-pointer text-[#666666]">
                  <span className="inline-block footer">Planner</span>
                </p>
              </Link>
              <Link href="/vendor/customer">
                <p className="cursor-pointer text-[#666666]">
                  <span className="inline-block footer">Customers</span>
                </p>
              </Link>
              <Link href="/vendor/staff">
                <p className="cursor-pointer text-[#666666]">
                  <span className="inline-block footer">Staff</span>
                </p>
              </Link>
              <Link href="/vendor/service">
                <p className="cursor-pointer text-[#666666]">
                  <span className="inline-block footer">Services</span>
                </p>
              </Link>
              <Link href="/vendor/business-report">
                <p className="cursor-pointer text-[#666666]">
                  <span className="inline-block footer">Business Report</span>
                </p>
              </Link>
              <Link href="/vendor/wallet">
                <p className="cursor-pointer text-[#666666]">
                  <span className="inline-block footer">Wallet</span>
                </p>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              {/* Notifications Dropdown Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger className="focus-visible:outline-none">
                  <Button
                    type="button"
                    parent={true}
                    variant="ghost"
                    size="icon"
                    className="uppercase"
                  >
                    <AiOutlineBell className="text-2xl cursor-pointer text-primary_color" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full mt-2 -translate-x-1 bg-white ring-1 ring-neutral-200">
                  <DropdownMenuLabel className="text-primary_color">
                    Notifications
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <div className="hover:bg-[#F2E3F4]">
                        <p className="font-semibold">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        <p className="text-xs">10 Mins</p>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* Profile dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <p className="rounded-full w-12 h-12 flex justify-center items-center text-xl bg-[#0AADA4] text-white">
                    JA
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 p-0 mt-2 bg-white ring-1 ring-neutral-200">
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                      <TbUserCheck className="text-xl" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                      <MdLogout className="text-xl text-red-500 hover:text-white" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
