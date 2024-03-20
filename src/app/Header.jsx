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
import { useRouter } from "next/navigation";

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
      {/* mobile header start */}
      <div
        className={`xl:hidden bg-white p-3 space-y-4  text-black absolute top-0 -left-0 z-50 min-h-screen min-w-[100%] ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-linear`}
      >
        <div className="flex items-center justify-between">
          <div>
            <Image src={Logo} alt="logo" loading="lazy" />
          </div>
          <div>
            <AiOutlineClose
              className="ml-auto text-2xl cursor-pointer"
              onClick={() => setOpenSidebar(false)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <LuUser2 className="text-lg" />
            <p>Profile</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <IoHeartOutline className="text-lg" />
            <p>Wishlist</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <CiStar className="text-lg" />
            <p>Favourite</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <LuBookmark className="text-lg" />
            <p>Saved Item</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <LuEye className="text-lg" />
            <p>Recently viewed</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <LuBadgePercent className="text-lg" />
            <p>Current Offers</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <RiCustomerServiceLine className="text-lg" />
            <p>Customer Services</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <TbUserCheck className="text-lg" />
            <p>My Refferals</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <FaMobileAlt className="text-lg" />
            <p>Get The PamperTree App</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <LuUser2 className="text-lg" />
            <p>Vouchers</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <TfiEmail className="text-lg" />
            <p>Contact Us</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
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
      <div className="container py-3 xl:flex xl:justify-between md:items-center">
        <div className="flex items-center justify-between xl:justify-start md:gap-6">
          <div>
            <Link href="/">
              <Image src={Logo} alt="logo" loading="lazy" />
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
            <GrCart className="text-lg text-primary_color" />
            <GoBell className="text-lg text-primary_color" />
          </div>
        </div>
      </div>
      <hr className="w-full bg-slate-500" />
      <div className="flex justify-start overflow-x-scroll xl:justify-center xl:overflow-x-hidden scrollbar-hide">
        <ul className="flex items-center justify-start gap-2 overflow-x-scroll md:justify-center xl:overflow-x-hidden scrollbar-hide">
          <div className="relative group">
            <div className="relative flex items-center gap-1 px-2 py-3 text-sm font-medium uppercase md:py-5 md:text-base whitespace-nowrap hover:bg-primary_color hover:text-white">
              Massage <RiArrowDownSFill className="text-lg" />
            </div>
            {/* dropdown */}
            <div className="absolute flex items-start py-2 w-full group-hover:scale-100 scale-0 transition-all origin-top  bg-white text-left ease-in-out duration-300 top-[8.7rem] -left-0 rounded-lg shadow-2xl text-black space-y-2">
              <ul className="max-h-full font-semibold tracking-wide capitalize text-textColor">
                <li className="flex items-center justify-between w-full text-lg ">
                  <span className="py-2 px-7 whitespace-nowrap">
                    Acupuncture Massage
                  </span>
                </li>
                <li className="flex items-center justify-between w-full text-lg ">
                  <span className="py-2 px-7 whitespace-nowrap">
                    Biodynamic Massage
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Link href="/">
            <li className="flex items-center gap-1 px-2 py-3 text-sm font-medium uppercase md:py-5 md:text-base whitespace-nowrap hover:bg-primary_color hover:text-white">
              nail <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center gap-1 px-2 py-3 text-sm font-medium uppercase md:py-5 md:text-base whitespace-nowrap hover:bg-primary_color hover:text-white">
              Brows & lashes <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center gap-1 px-2 py-3 text-sm font-medium uppercase md:py-5 md:text-base whitespace-nowrap hover:bg-primary_color hover:text-white">
              Hair removal <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center gap-1 px-2 py-3 text-sm font-medium uppercase md:py-5 md:text-base whitespace-nowrap hover:bg-primary_color hover:text-white">
              Hair <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center gap-1 px-2 py-3 text-sm font-medium uppercase md:py-5 md:text-base whitespace-nowrap hover:bg-primary_color hover:text-white">
              Beauty <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center gap-1 px-2 py-3 text-sm font-medium uppercase md:py-5 md:text-base whitespace-nowrap hover:bg-primary_color hover:text-white">
              Body <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center gap-1 px-2 py-3 text-sm font-medium uppercase md:py-5 md:text-base whitespace-nowrap hover:bg-primary_color hover:text-white">
              short breaks <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center gap-1 px-2 py-3 text-sm font-medium uppercase md:py-5 md:text-base whitespace-nowrap hover:bg-primary_color hover:text-white">
              Spa days <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center gap-1 px-2 py-3 text-sm font-medium uppercase md:py-5 md:text-base whitespace-nowrap hover:bg-primary_color hover:text-white">
              Mobile services <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
