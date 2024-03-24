import React, { useEffect, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { GoBell } from "react-icons/go";
import { GrCart } from "react-icons/gr";
import { IoCaretDown, IoHeartOutline, IoCloseOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { LuBadgePercent, LuBookmark, LuEye, LuUser2 } from "react-icons/lu";
import { TbUserCheck } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MdLogout } from "react-icons/md";
import { RiCustomerServiceLine } from "react-icons/ri";
import { login, logout } from "@/redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Topbar() {
    const router = useRouter();
    const user = useSelector((state) => state.auth.user) || '';
    const [pageLoaded, setPageLoaded] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => { setPageLoaded(true) }, []);
    return (
        <>
            {pageLoaded && !user && <Link href={'/sign-in'} className="uppercase border-[1px] rounded-full border-black bg-background shadow-sm hover:bg-primary hover:text-white h-8 px-5 text-xs flex items-center">Log in</Link>}
            {/* My Account Dropdown Menu */}
            {pageLoaded && user && <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button type="button" variant="outline" size="sm" className="uppercase pe-3">
                        My Account
                        <IoCaretDown />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 p-0 mt-2 bg-white ring-1 ring-neutral-200">
                    <DropdownMenuGroup className='px-0'>
                        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white" onClick={e => router.push('/my-account')}>
                            <TbUserCheck className="text-xl" />
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                            <IoHeartOutline className="text-xl" />
                            Wishlist
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                            <CiStar className="text-xl" />
                            Favourite
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                            <LuBookmark className="text-xl" />
                            Saved Item
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                            <LuEye className="text-xl" />
                            Recently viewed
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                            <LuBadgePercent className="text-xl" />
                            Current Offers
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                            <RiCustomerServiceLine className="text-xl" />
                            Customer Services
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                            <TbUserCheck className="text-xl" />
                            My Refferals
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                        <FaMobileAlt className="text-xl" />
                        Get The PamperTree App
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                        <LuUser2 className="text-xl" />
                        Vouchers
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                        <TfiEmail className="text-xl" />
                        Contact Us
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white" onClick={e => dispatch(logout())}>
                        <MdLogout className="text-xl" />
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>}
            {/* Cart Dropdown Menu */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button type="button" variant="ghost" size="icon" className="uppercase">
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
                                <p className="font-semibold text-primary_color">
                                    $394.00
                                </p>
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
            {/* Notifications Dropdown Menu */}
            {pageLoaded && user && <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button type="button" variant="ghost" size="icon" className="uppercase">
                        <GoBell className="text-xl cursor-pointer text-primary_color" />
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
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.
                                </p>
                                <p className="text-xs">10 Mins</p>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>}
        </>
    )
}

export default Topbar