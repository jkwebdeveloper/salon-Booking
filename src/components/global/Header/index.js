"use client";
import Image from "next/image";
// import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import MobileMenu from "@/components/global/Header/mobilemenu";
import DesktopMenu from "@/components/global/Header/desktopmenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// icons
import { IoHeartOutline, IoCaretDown } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { LuBookmark, LuEye, LuUser2, LuBadgePercent } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { TbUserCheck } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MdLogout } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { RiCustomerServiceLine } from "react-icons/ri";

import { MdLocationPin } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { GoBell } from "react-icons/go";
import { BiMenuAltRight } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Header = () => {
  const router = useRouter();
  const isloginPage = router.pathname === "/sign-in";
  const isRegisterPage = router.pathname === "/register";
  const [openSidebar, setOpenSidebar] = useState(false);

  if (isloginPage || isRegisterPage) {
    return null;
  }

  return (
    <div className="w-full bg-white shadow-md">
      <div className="container border xl:flex xl:justify-between md:items-center">
        <div className="flex items-center justify-between py-2 xl:justify-start md:gap-6">
          <div>
            <Link href="/">
              <Image
                src={"/static/images/logo.png"}
                alt="logo"
                loading="lazy"
                width={150}
                height={150}
              />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="flex items-center justify-center gap-2 outline_button md:px-5"
            >
              <MdLocationPin className="text-lg text-primary_color" />
              Manchester
            </button>
            <div className="block xl:hidden">
              <BiMenuAltRight
                className="text-2xl cursor-pointer text-primary_color"
                onClick={() => setOpenSidebar(true)}
              />
            </div>
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="uppercase transition-all outline_button hover:bg-primary_color hover:text-white md:px-5"
            >
              For business
            </button>
            <Link href="/sign-in">
              <button
                type="button"
                className="uppercase transition-all outline_button hover:bg-primary_color hover:text-white"
              >
                Log in
              </button>
            </Link>
            {/* My Account Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="uppercase transition-all outline_button flex items-center gap-2 hover:bg-primary_color hover:text-white md:px-5"
                >
                  My Account
                  <IoCaretDown />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuGroup className="mt-2">
                  <DropdownMenuItem className="flex items-center gap-2">
                    <TbUserCheck className="text-xl" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <IoHeartOutline className="text-xl" />
                    Wishlist
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <CiStar className="text-xl" />
                    Favourite
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <LuBookmark className="text-xl" />
                    Saved Item
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <LuEye className="text-xl" />
                    Recently viewed
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <LuBadgePercent className="text-xl" />
                    Current Offers
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <RiCustomerServiceLine className="text-xl" />
                    Customer Services
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <TbUserCheck className="text-xl" />
                    My Refferals
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-2">
                  <FaMobileAlt className="text-xl" />
                  Get The PamperTree App
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <LuUser2 className="text-xl" />
                  Vouchers
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <TfiEmail className="text-xl" />
                  Contact Us
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-2">
                  <MdLogout className="text-xl" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Cart Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="outline-none">
                  <GrCart className="text-xl text-primary_color cursor-pointer" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuLabel className="text-primary_color">
                  My basket
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="flex justify-between items-center">
                    <div className="">
                      <p className="font-semibold">Sports Massage</p>
                      <p className="text-xs">10 Mins</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="text-primary_color">£25.00</p>
                      <IoIosClose className="text-lg" />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex justify-between items-center">
                    <div className="">
                      <p className="font-semibold">Swedish Massage</p>
                      <p className="text-xs">15 Mins</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="text-primary_color">£20.00</p>
                      <IoIosClose className="text-lg" />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex justify-between items-center">
                    <div className="">
                      <p className="font-semibold">Couples Massage</p>
                      <p className="text-xs">2 hr</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="text-primary_color">£349.00</p>
                      <IoIosClose className="text-lg" />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex justify-between items-center">
                    <div className="">
                      <p className="font-semibold">Total:</p>
                    </div>
                    <div className="">
                      <p className="font-semibold text-primary_color">
                        $394.00
                      </p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex  gap-4 justify-between items-center">
                    <Button
                      type="button"
                      // className="uppercase transition-all outline_button hover:bg-primary_color hover:text-white"
                      variant="primary"
                    >
                      + Add more
                    </Button>
                    <Button variant="primary">Go to checkout</Button>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Notifications Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="outline-none">
                  <GoBell className="text-xl text-primary_color cursor-pointer" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
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
          </div>
        </div>
      </div>
      <MobileMenu openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <DesktopMenu />
    </div>
  );
};

export default Header;
