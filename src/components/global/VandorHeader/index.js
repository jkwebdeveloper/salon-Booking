import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { MdLocationPin } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";

const VandorHeader = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div
        className="container border-b "
        // id="topMenu"
      >
        <div className="flex items-center justify-between py-2  md:gap-6">
          <div className="flex items-center gap-4">
            <Link href="/">
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
                <BiMenuAltRight
                  className="text-2xl cursor-pointer text-primary_color"
                  // onClick={() => setOpenSidebar(true)}
                />
              </div>
            </div>
          </div>
          <p>Already A Partner? <span className="text-primary_color uppercase">Login</span></p>
          <div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="uppercase ps-3"
            >
              Become a partner
            </Button>
          </div>
        </div>
      </div>
        <div className="flex justify-center items-center ">
            <ul className="flex justify-center items-center uppercase gap-5">
                <li className="px-3 py-3 font-medium hover:text-white hover:bg-primary cursor-pointer">Sell online</li>
                <li className="px-3 py-3 font-medium hover:text-white hover:bg-primary cursor-pointer">Features</li>
                <li className="px-3 py-3 font-medium hover:text-white hover:bg-primary cursor-pointer">solutions</li>
                <li className="px-3 py-3 font-medium hover:text-white hover:bg-primary cursor-pointer">Fees & Pricing</li>
                <li className="px-3 py-3 font-medium hover:text-white hover:bg-primary cursor-pointer">How it works</li>
            </ul>
        </div>
      {/* <MobileMenu openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <DesktopMenu /> */}
    </div>
  );
};

export default VandorHeader;
