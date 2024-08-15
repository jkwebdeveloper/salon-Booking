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
import { useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoCloseOutline } from "react-icons/io5";
import { GrCart } from "react-icons/gr";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [sticky, setSticky] = useState(false);

  const user = useSelector((state) => state.userAuth.user) || "";

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
    <div className={`bg-white duration-300 z-50 transition-all text-black w-full ${sticky &&
      'z-50 top-0 duration-300 transition-all fixed shadow-2xl'
      }`}>
      <div className="container border-b lg:flex lg:justify-between lg:items-center" id="topMenu">
        <div className="flex items-center justify-between py-2 xl:justify-start lg:gap-6">
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
          <div className="hidden lg:block">
            <Button type="button" variant="outline" size="sm" className="flex items-center uppercase ps-3 group">
              <MdLocationPin className="text-lg transition-all text-primary_color group-hover:text-white" /> Manchester
            </Button>
          </div>
          <div className="flex items-center block gap-3 lg:hidden">
            {!user && (
              <Link
                href={"/sign-in"}
                className="uppercase border-[1px] rounded-full border-black bg-background shadow-sm hover:bg-primary hover:text-white h-8 px-5 text-xs flex items-center"
              >
                Log in
              </Link>
            )}
            {/* Cart Dropdown Menu */}
            <DropdownMenu className="">
              <DropdownMenuTrigger className="focus-visible:outline-none">
                <Button
                  type="button"
                  parent={true}
                  variant="ghost"
                  size="icon"
                  className="w-auto uppercase"
                >
                  <GrCart className="text-xl cursor-pointer text-primary_color" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full mt-2 -translate-x-1 bg-white ring-1 ring-neutral-200">
                <DropdownMenuLabel className="text-primary_color">
                  My basket
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="flex items-center justify-between">
                    <div className="">
                      <p className="font-semibold">Sports Massage</p>
                      <p className="text-xs">10 Mins</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="text-primary_color">£25.00</p>
                      <IoCloseOutline className="text-sm " />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center justify-between">
                    <div className="">
                      <p className="font-semibold">Swedish Massage</p>
                      <p className="text-xs">15 Mins</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="text-primary_color">£20.00</p>
                      <IoCloseOutline className="text-sm" />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center justify-between">
                    <div className="">
                      <p className="font-semibold">Couples Massage</p>
                      <p className="text-xs">2 hr</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="text-primary_color">£349.00</p>
                      <IoCloseOutline className="text-sm" />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center justify-between">
                    <div className="">
                      <p className="font-semibold">Total:</p>
                    </div>
                    <div className="">
                      <p className="font-semibold text-primary_color">$394.00</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-between gap-4">
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
            <div className="block lg:hidden">
              <BiMenuAltRight
                className="text-2xl cursor-pointer text-primary_color"
                onClick={() => setOpenSidebar(true)}
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center gap-2">
            <div className="block lg:hidden">
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
