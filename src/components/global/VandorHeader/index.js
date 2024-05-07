import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { MdLocationPin } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { useSelector } from "react-redux";

const VandorHeader = () => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);
  return (
    <div className="w-full bg-white shadow-md">
      <div
        className="container border-b "
      >
        <div className="flex items-center justify-between py-2 md:gap-6">
          <div className="flex items-center gap-4">
            <Link href="/vendor/">
              <Image
                src={"/static/images/logo.png"}
                alt="logo"
                loading="lazy"
                width={150}
                height={150}
              />
            </Link>
            <div className="flex items-center gap-6">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="uppercase ps-3 group"
              >
                <MdLocationPin className="text-lg transition-all text-primary_color group-hover:text-white" />{" "}
                Download pampertree app
              </Button>
              <div className="block xl:hidden">
                <BiMenuAltRight className="text-2xl cursor-pointer text-primary_color" />
              </div>
            </div>
          </div>
          {!vendor && <p>
            Already A Partner?{" "}
            <Link href="/vendor/login">
              <span className="uppercase text-primary_color">Login</span>
            </Link>{" "}
          </p>}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="uppercase"
            asChild
          >
            <Link href={vendor && '/vendor/dashboard' || '/vendor/register'}>
              {vendor && "Dashboard" || "Become a partner"}
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <ul className="flex items-center justify-center gap-5 uppercase">
          <li className="px-3 py-3 font-medium cursor-pointer hover:text-white hover:bg-primary">
            Sell online
          </li>
          <li className="px-3 py-3 font-medium cursor-pointer hover:text-white hover:bg-primary">
            Features
          </li>
          <li className="px-3 py-3 font-medium cursor-pointer hover:text-white hover:bg-primary">
            solutions
          </li>
          <li className="px-3 py-3 font-medium cursor-pointer hover:text-white hover:bg-primary">
            Fees & Pricing
          </li>
          <li className="px-3 py-3 font-medium cursor-pointer hover:text-white hover:bg-primary">
            How it works
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VandorHeader;
