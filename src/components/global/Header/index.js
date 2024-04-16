"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import MobileMenu from "@/components/global/Header/mobilemenu";
import DesktopMenu from "@/components/global/Header/desktopmenu";

import { MdLocationPin } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import Topbar from "@/components/global/Header/topbar";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="w-full bg-white shadow-md">
      <div className="container border-b xl:flex xl:justify-between md:items-center" id="topMenu">
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
            <Button type="button" variant="outline" size="sm" className="uppercase ps-3 group">
              <MdLocationPin className="text-lg transition-all text-primary_color group-hover:text-white" /> Manchester
            </Button>
            <div className="block xl:hidden">
              <BiMenuAltRight
                className="text-2xl cursor-pointer text-primary_color"
                onClick={() => setOpenSidebar(true)}
              />
            </div>
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="flex items-center gap-2">
            <Topbar />
          </div>
        </div>
      </div>
      <MobileMenu openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <DesktopMenu />
    </div>
  );
};

export default Header;
