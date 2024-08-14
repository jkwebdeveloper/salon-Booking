"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import MobileMenu from "@/components/global/Header/mobilemenu";
import DesktopMenu from "@/components/global/Header/desktopmenu";

import { MdLocationPin } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import Topbar from "@/components/global/Header/topbar";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [sticky, setSticky] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    });
    return () => {
        window.removeEventListener('scroll', () => { });
    };
}, []);
  return (
    <div className={`bg-white duration-300 transition-all text-black w-full ${sticky &&
      'z-50 top-0 duration-300 transition-all fixed shadow-2xl'
      }`}>
      <div className="container border-b md:flex md:justify-between md:items-center" id="topMenu">
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
            <div className="block md:hidden">
              <BiMenuAltRight
                className="text-2xl cursor-pointer text-primary_color"
                onClick={() => setOpenSidebar(true)}
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center gap-2">
            <div className="block xl:hidden">
              <BiMenuAltRight
                className="text-2xl cursor-pointer text-primary_color"
                onClick={() => setOpenSidebar(true)}
              />
            </div>
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
