'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenuAlt2 } from 'react-icons/hi';
import { AiOutlineBell, AiOutlineClose } from 'react-icons/ai';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TbUserCheck } from 'react-icons/tb';
import { MdLogout } from 'react-icons/md';
import Button from '@/components/ui/button';

function MobileMenu({ openDashboardMenu = false, setOpenDashboardMenu }) {
    const [active, setActive] = useState('Dashboard');
    // const [openDashboardMenu, setOpenDashboardMenu] = useState(false);

    const handleLinkClick = link => {
        setActive(link);
    };

    return (
        <>
            <div
                className={`xl:hidden bg-white p-3 space-y-8 px-10  text-black absolute top-0 -left-0 z-50 min-h-screen min-w-[100%] ${
                    openDashboardMenu ? 'translate-x-0' : '-translate-x-full'
                } transition duration-300 ease-linear`}
            >
                <div className="flex items-center justify-between py-4">
                    <div>
                        <Image
                            src={'/static/images/logo.png'}
                            alt="logo"
                            loading="lazy"
                            width={150}
                            height={150}
                        />
                    </div>
                    <div>
                        <AiOutlineClose
                            className="ml-auto text-2xl cursor-pointer"
                            onClick={() => setOpenDashboardMenu(false)}
                        />
                    </div>
                </div>
                <hr />
                <div className="flex-col items-center justify-between w-full">
                    <div className="items-center gap-10 space-y-4 ">
                        {/* <HiMenuAlt2
                            className="text-2xl cursor-pointer"
                            onClick={() => sidebarHandler()}
                        /> */}
                        {[
                            {
                                name: 'Dashboard',
                                href: '/vendor/dashboard',
                            },
                            {
                                name: 'Planner',
                                href: '/vendor/planner',
                            },
                            {
                                name: 'Customers',
                                href: '/vendor/customer',
                            },
                            { name: 'Staff', href: '/vendor/staff' },
                            {
                                name: 'Services',
                                href: '/vendor/service',
                            },
                            {
                                name: 'Product',
                                href: '/vendor/product',
                            },
                            {
                                name: 'Business Report',
                                href: '/vendor/business-report',
                            },
                            { name: 'Wallet', href: '/vendor/wallet' },
                        ].map(link => (
                            <Link key={link.name} href={link.href}>
                                <p
                                    onClick={() => handleLinkClick(link.name)}
                                    className={`cursor-pointer ${
                                        active === link.name
                                            ? 'text-primary_color font-semibold'
                                            : 'text-[#666666] font-normal'
                                    }`}
                                >
                                    <span className="inline-block footer">
                                        {link.name}
                                    </span>
                                </p>
                            </Link>
                        ))}
                    </div>
                    <div className="">
                        {/* Notifications Dropdown Menu */}
                        {/* <DropdownMenu>
                            <DropdownMenuTrigger className="focus-visible:outline-none">
                                <Button
                                    type="button"
                                    parent={true}
                                    variant="ghost"
                                    size="icon"
                                    className="uppercase"
                                >
                                    <AiOutlineBell className="text-2xl cursor-pointer text-primary_color" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-full mt-2 -translate-x-1 bg-white ring-1 ring-neutral-200">
                                <DropdownMenuLabel className="text-primary_color">
                                    Notifications
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <div className="hover:bg-[#F2E3F4]">
                                            <p className="font-semibold">
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry.
                                            </p>
                                            <p className="text-xs">10 Mins</p>
                                        </div>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu> */}
                        {/* Profile dropdown */}
                        {/* <DropdownMenu>
                            <DropdownMenuTrigger>
                                <p className="rounded-full w-12 h-12 flex justify-center items-center text-xl bg-[#0AADA4] text-white">
                                    JA
                                </p>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 p-0 mt-2 bg-white ring-1 ring-neutral-200">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem className="cursor-pointer hover:bg-primary hover:text-white">
                                        <Link
                                            href="/vendor/profile"
                                            className="flex items-center w-full gap-2 "
                                        >
                                            <TbUserCheck className="text-xl" />
                                            Profile
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white"
                                        // onClick={e =>
                                        //     logoutUser({
                                        //         api_token: vendor?.api_token,
                                        //         type: 'vendor',
                                        //     })
                                        // }
                                    >
                                        <MdLogout className="text-xl text-red-500 hover:text-white" />
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu> */}
                    </div>
                </div>
            </div>
            {openDashboardMenu && (
                <div
                    onClick={() => setOpenDashboardMenu(false)}
                    className="xl:hidden inset-0 z-10 fixed overflow-hidden backdrop-blur-sm bg-lightBlack bg-opacity-50 min-h-screen max-h-screen max-w-[100%]"
                ></div>
            )}
        </>
    );
}

export default MobileMenu;
