"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "@/components/global/Header/mobilemenu";
import DesktopMenu from "@/components/global/Header/desktopmenu";

// icons
import { MdLocationPin } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { GoBell } from "react-icons/go";
import { BiMenuAltRight } from "react-icons/bi";
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
            <div className="container border xl:flex xl:justify-between md:items-center">
                <div className="flex items-center justify-between py-2 xl:justify-start md:gap-6">
                    <div>
                        <Link href="/">
                            <Image src={'/static/images/logo.png'} alt="logo" loading="lazy" width={150} height={150} />
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
            <MobileMenu openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
            <DesktopMenu />
        </div>
    );
};

export default Header;
