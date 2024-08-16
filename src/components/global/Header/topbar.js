"use client";
import React, { useState } from "react";
import { GoBell } from "react-icons/go";
import { IoCaretDown, IoHeartOutline, IoCloseOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { LuBadgePercent, LuBookmark, LuEye, LuUser2 } from "react-icons/lu";
import { TbUserCheck } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MdLogout } from "react-icons/md";
import { RiCustomerServiceLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import Link from "next/link";

import { Button } from "@/components";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { POST } from "@/app/api/post";
import useLogout from "@/hooks/uselogout";
import CustomerModal from "@/components/vendor/Dashboard/Modal/CustomerModal";
import MiniCart from "@/components/global/Header/minicart";

function Topbar() {
  const [customer, setCustomer] = useState(false);

  const [logoutUser] = useLogout();
  const user = useSelector((state) => state.userAuth.user) || "";
  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="uppercase"
        asChild
      >
        <Link href={"/vendor"}>For business</Link>
      </Button>
      {!user && (
        <Link
          href={"/sign-in"}
          className="uppercase border-[1px] rounded-full border-black bg-background shadow-sm hover:bg-primary hover:text-white h-8 px-5 text-xs flex items-center"
        >
          Log in
        </Link>
      )}
      {/* My Account Dropdown Menu */}
      {user && (
        <DropdownMenu>
          <DropdownMenuTrigger className="focus-visible:outline-none">
            <Button
              parent={true}
              type="button"
              variant="outline"
              size="sm"
              className="uppercase pe-3"
            >
              My Account
              <IoCaretDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 p-0 mt-2 bg-white ring-1 ring-neutral-200">
            <DropdownMenuGroup className="px-0">
              <DropdownMenuItem
                className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white"
                asChild
              >
                <Link href="/my-account">
                  <TbUserCheck className="text-xl" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white"
                asChild
              >
                <Link href="/wishlist">
                  <IoHeartOutline className="text-xl" />
                  Wishlist
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white"
                asChild
              >
                <Link href="/wishlist">
                  <CiStar className="text-xl" />
                  Favourite
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                <LuBookmark className="text-xl" />
                Saved Item
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                <LuEye className="text-xl" />
                Recently viewed
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white"
                asChild
              >
                <Link href={"/current-offer"}>
                  <LuBadgePercent className="text-xl" />
                  Current Offers
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                {/* <Dialog open={customer}>
                  <DialogTrigger
                    onClick={(e) => setCustomer(true)}
                    className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white"
                  >
                    <RiCustomerServiceLine className="text-xl" />
                    Customer Services
                  </DialogTrigger>
                  <DialogContent
                    close={setCustomer}
                    className="sm:max-w-[900px]"
                  >
                    <DialogTitle>Customer service</DialogTitle>
                    <CustomerModal setCustomer={setCustomer} />
                  </DialogContent>
                </Dialog> */}
                <RiCustomerServiceLine className="text-xl" />
                Customer Services
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                <TbUserCheck className="text-xl" />
                My Refferals
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
              <FaMobileAlt className="text-xl" />
              Get The PamperTree App
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
              <LuUser2 className="text-xl" />
              Vouchers
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
              <TfiEmail className="text-xl" />
              Contact Us
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white"
              onClick={(e) =>
                logoutUser({ api_token: user?.api_token, type: "user" })
              }
            >
              <MdLogout className="text-xl" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {/* Cart Dropdown Menu */}
      <MiniCart />
      {/* Notifications Dropdown Menu */}
      {user && (
        <DropdownMenu>
          <DropdownMenuTrigger className="focus-visible:outline-none">
            <Button
              type="button"
              parent={true}
              variant="ghost"
              size="icon"
              className="uppercase"
            >
              <GoBell className="text-2xl cursor-pointer text-primary_color" />
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
      )}
    </>
  );
}

export default Topbar;
