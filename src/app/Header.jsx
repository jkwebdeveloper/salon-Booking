"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../public/static/images/logo.png";
import { MdLocationPin } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { GoBell } from "react-icons/go";
import Link from "next/link";
import { RiArrowDownSFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center p-3">
        <div className="flex gap-4">
          <Image src={Logo} />
          <div className="flex gap-3 items-center">
            <button
              type="button"
              className="outline_button flex gap-2 items-center md:px-5 justify-center"
            >
              <MdLocationPin className="text-lg text-primary_color" />
              Manchester
            </button>
          </div>
        </div>
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
      <hr className="w-full bg-slate-500" />
      <div className="py-5 flex justify-center">
        <ul className="flex items-center text-center gap-5">
          <Link href="/">
            <li className="text-base font-medium flex gap-1 items-center uppercase hover:bg-primary_color hover:text-white">
              Massage <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="text-base font-medium flex gap-1 items-center uppercase">
              nail <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="text-base font-medium flex gap-1 items-center uppercase">
              Brows & lashes <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="text-base font-medium flex gap-1 items-center uppercase">
              Hair removal <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="text-base font-medium flex gap-1 items-center uppercase">
              Hair <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="text-base font-medium flex gap-1 items-center uppercase">
              Beauty <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="text-base font-medium flex gap-1 items-center uppercase">
              Body <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="text-base font-medium flex gap-1 items-center uppercase">
              short breaks <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="text-base font-medium flex gap-1 items-center uppercase">
              Spa days <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
          <Link href="/">
            <li className="text-base font-medium flex gap-1 items-center uppercase">
              Mobile services <RiArrowDownSFill className="text-lg" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
