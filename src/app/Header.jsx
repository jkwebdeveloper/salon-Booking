"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../public/static/images/logo.png";
import { MdLocationPin } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { GoBell } from "react-icons/go";
import Link from "next/link";
import { RiArrowDownSFill } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="xl:flex xl:justify-between md:items-center p-3">
        <div className="flex xl:justify-start items-center justify-between md:gap-6">
          <div>
            <Image src={Logo} />
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
              <BiMenuAltRight className="text-2xl text-primary_color" />
            </div>
          </div>
        </div>
        <div className="xl:block hidden">
          <div className="flex items-center gap-4">
            <button type="button" className="outline_button md:px-5 uppercase">
              For business
            </button>
            <button type="button" className="outline_button uppercase">
              Log in
            </button>
            <GrCart className="text-lg text-primary_color" />
            <GoBell className="text-lg text-primary_color" />
          </div>
        </div>
      </div>
      <hr className="w-full bg-slate-500" />
      <div className="flex xl:justify-center justify-start xl:overflow-x-hidden overflow-x-scroll">
        <ul className="flex items-center md:justify-center justify-start xl:overflow-x-hidden overflow-x-scroll gap-2">
          <Link href="/">
            <li className="px-2 md:py-5 py-3 md:text-base text-sm font-medium flex gap-1 whitespace-nowrap items-center uppercase hover:bg-primary_color hover:text-white">
              Massage <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
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
