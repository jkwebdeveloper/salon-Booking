"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/static/images/logo.png";
import { MdLocationPin } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { GoBell } from "react-icons/go";
import Link from "next/link";

// icons
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowDownSFill, RiCustomerServiceLine } from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { LuBookmark, LuEye, LuUser2, LuBadgePercent } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { TbUserCheck } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MdLogout } from "react-icons/md";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="w-full bg-white shadow-md">
      {/* mobile header start */}
      <div
        className={`xl:hidden bg-white p-3 space-y-4  text-black absolute top-0 -left-0 z-50 min-h-screen min-w-[100%] ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-linear`}
      >
        <div className="flex justify-between  items-center">
          <div>
            <Image src={Logo} alt="logo" loading="lazy" />
          </div>
          <div>
            <AiOutlineClose
              className="ml-auto cursor-pointer text-2xl"
              onClick={() => setOpenSidebar(false)}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <LuUser2 className="text-lg" />
            <p>Profile</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <IoHeartOutline className="text-lg" />
            <p>Wishlist</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <CiStar className="text-lg" />
            <p>Favourite</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <LuBookmark className="text-lg" />
            <p>Saved Item</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <LuEye className="text-lg" />
            <p>Recently viewed</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <LuBadgePercent className="text-lg" />
            <p>Current Offers</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <RiCustomerServiceLine className="text-lg" />
            <p>Customer Services</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <TbUserCheck className="text-lg" />
            <p>My Refferals</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <FaMobileAlt className="text-lg" />
            <p>Get The PamperTree App</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <LuUser2 className="text-lg" />
            <p>Vouchers</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <TfiEmail className="text-lg" />
            <p>Contact Us</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <MdLogout className="text-lg text-red-600" />
            <p className="text-red-600">Logout</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
      </div>
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="xl:hidden inset-0 z-10 fixed overflow-hidden backdrop-blur-sm bg-lightBlack bg-opacity-50 min-h-screen max-h-screen max-w-[100%]"
        ></div>
      )}
      {/* mobile header end */}
      <div className="xl:flex xl:justify-between md:items-center p-3">
        <div className="flex xl:justify-start items-center justify-between md:gap-6">
          <div>
            <Link href="/">
              <Image src={Logo} alt="logo" loading="lazy" />
            </Link>
          </div>
          <div className="flex gap-6 items-center">
            <button
              type="button"
              className="outline_button flex gap-2 items-center md:px-5 justify-center"
            >
              <MdLocationPin className="text-lg text-primary_color" />
              Manchester
            </button>
            <div className="xl:hidden block">
              <BiMenuAltRight
                className="text-2xl text-primary_color cursor-pointer"
                onClick={() => setOpenSidebar(true)}
              />
            </div>
          </div>
        </div>
        <div className="xl:block hidden">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="outline_button hover:bg-primary_color hover:text-white transition-all md:px-5 uppercase"
            >
              For business
            </button>
            <Link href="/sign-in">
              <button
                type="button"
                className="outline_button hover:bg-primary_color hover:text-white transition-all uppercase"
              >
                Log in
              </button>
            </Link>
            <GrCart className="text-lg text-primary_color" />
            <GoBell className="text-lg text-primary_color" />
          </div>
        </div>
      </div>
      <hr className="w-full bg-slate-500" />
      <div className="flex xl:justify-center justify-start xl:overflow-x-hidden scrollbar-hide overflow-x-scroll">
        <ul className="flex items-center md:justify-center justify-start xl:overflow-x-hidden scrollbar-hide overflow-x-scroll gap-2">
          <div className="group relative">
            <div className="px-2 md:py-5 relative py-3 md:text-base text-sm font-medium flex gap-1 whitespace-nowrap items-center uppercase hover:bg-primary_color hover:text-white">
              Massage <RiArrowDownSFill className="text-lg" />
            </div>
            {/* dropdown */}
            <div className="absolute flex items-start py-2 w-full group-hover:scale-100 scale-0 transition-all origin-top  bg-white text-left ease-in-out duration-300 top-[8.7rem] -left-0 rounded-lg shadow-2xl text-black space-y-2">
              <ul className="font-semibold max-h-full text-textColor capitalize tracking-wide">
                <li className=" w-full flex items-center justify-between text-lg">
                  <span className="px-7 py-2 whitespace-nowrap">
                    Acupuncture Massage
                  </span>
                </li>
                <li className=" w-full flex items-center justify-between text-lg">
                  <span className="px-7 py-2 whitespace-nowrap">
                    Biodynamic Massage
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Link href="/">
            <li className="px-2 md:py-5 py-3 md:text-base text-sm font-medium flex gap-1 whitespace-nowrap items-center uppercase hover:bg-primary_color hover:text-white">
              nail <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="px-2 md:py-5 py-3 md:text-base text-sm font-medium flex gap-1 whitespace-nowrap items-center uppercase hover:bg-primary_color hover:text-white">
              Brows & lashes <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="px-2 md:py-5 py-3 md:text-base text-sm font-medium flex gap-1 whitespace-nowrap items-center uppercase hover:bg-primary_color hover:text-white">
              Hair removal <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="px-2 md:py-5 py-3 md:text-base text-sm font-medium flex gap-1 whitespace-nowrap items-center uppercase hover:bg-primary_color hover:text-white">
              Hair <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="px-2 md:py-5 py-3 md:text-base text-sm font-medium flex gap-1 whitespace-nowrap items-center uppercase hover:bg-primary_color hover:text-white">
              Beauty <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="px-2 md:py-5 py-3 md:text-base text-sm font-medium flex gap-1 whitespace-nowrap items-center uppercase hover:bg-primary_color hover:text-white">
              Body <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="px-2 md:py-5 py-3 md:text-base text-sm font-medium flex gap-1 whitespace-nowrap items-center uppercase hover:bg-primary_color hover:text-white">
              short breaks <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="px-2 md:py-5 py-3 md:text-base text-sm font-medium flex gap-1 whitespace-nowrap items-center uppercase hover:bg-primary_color hover:text-white">
              Spa days <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="px-2 md:py-5 py-3 md:text-base text-sm font-medium flex gap-1 whitespace-nowrap items-center uppercase hover:bg-primary_color hover:text-white">
              Mobile services <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
