'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenuAlt2 } from 'react-icons/hi';
import { AiOutlineBell } from 'react-icons/ai';
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
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import useLogout from '@/hooks/uselogout';
import { useDispatch } from 'react-redux';
import { setSidebar } from '@/redux/features/sidebarSlice';
import DashboardMobilemenu from './Mobilemenu';
import MobileMenu from './Mobilemenu';
import { BiMenuAltRight } from 'react-icons/bi';

const DashBoardHeader = () => {
    const [active, setActive] = useState('Dashboard');
    const [openSidebar, setOpenSidebar] = useState(true);
    const [openMobilemenu, setOpenMobileMenu] = useState(true);
    const [openDashboardMenu, setOpenDashboardMenu] = useState(false);
    const [logoutUser] = useLogout();
    const router = useRouter();
    const vendor = useSelector(state => state.vendorAuth.vendor);
    const { sidebar } = useSelector(state => state.sidebarAuth.sidebar);

    const dispatch = useDispatch();

    if (!vendor) {
        router.push('/vendor/login');
    }

    const handleLinkClick = link => {
        setActive(link);
    };

    const sidebarHandler = () => {
        if (sidebar) {
            dispatch(
                setSidebar({
                    sidebar: false,
                })
            );
        } else {
            dispatch(
                setSidebar({
                    sidebar: true,
                })
            );
        }
    };
    return (
        <div className="w-full bg-white shadow-md">
            <div className="container border-b ">
                <div className="hidden lg:block">
                    <div className="flex items-center gap-24 py-2 ">
                        <Link href="/">
                            <Image
                                src={'/static/images/logo.png'}
                                alt="logo"
                                loading="lazy"
                                width={150}
                                height={150}
                            />
                        </Link>
                        <div className="flex items-center justify-between w-full ">
                            <div className="flex items-center gap-10">
                                <HiMenuAlt2
                                    className="text-2xl cursor-pointer"
                                    onClick={() => sidebarHandler()}
                                />
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
                                            onClick={() =>
                                                handleLinkClick(link.name)
                                            }
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
                            <div className="flex items-center gap-3">
                                {/* Notifications Dropdown Menu */}
                                <DropdownMenu>
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
                                                        Lorem Ipsum is simply
                                                        dummy text of the
                                                        printing and typesetting
                                                        industry.
                                                    </p>
                                                    <p className="text-xs">
                                                        10 Mins
                                                    </p>
                                                </div>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                {/* Profile dropdown */}
                                <DropdownMenu>
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
                                                onClick={e =>
                                                    logoutUser({
                                                        api_token:
                                                            vendor?.api_token,
                                                        type: 'vendor',
                                                    })
                                                }
                                            >
                                                <MdLogout className="text-xl text-red-500 hover:text-white" />
                                                Logout
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block lg:hidden">
                    <div className="flex items-center justify-between py-5 ">
                        <Link href="/">
                            <Image
                                src={'/static/images/logo.png'}
                                alt="logo"
                                loading="lazy"
                                width={150}
                                height={150}
                            />
                        </Link>
                        <div className="block lg:hidden">
                            <div className="flex items-center gap-2">
                                <div className="">
                                    <BiMenuAltRight
                                        className="text-2xl cursor-pointer text-primary_color"
                                        onClick={() =>
                                            setOpenDashboardMenu(true)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile menu */}
                <MobileMenu
                    openDashboardMenu={openDashboardMenu}
                    setOpenDashboardMenu={setOpenDashboardMenu}
                />
            </div>
        </div>
    );
};

export default DashBoardHeader;
