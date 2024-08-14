'use client';
import Button from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { MdLocationPin } from 'react-icons/md';
import { BiMenuAltRight } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';

const VandorHeader = () => {
    const [openVenderSidebar, setOpenVenderSidebar] = useState(false);
    const [sticky, setSticky] = useState(false);

    const vendor = useSelector(state => state.vendorAuth.vendor);

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
        <>
            <div className={`bg-white hidden shadow-md lg:block duration-300 transition-all text-black w-full ${sticky &&
                'z-50 top-0 duration-300 transition-all fixed shadow-2xl'
                }`}>
                <div className="container border-b ">
                    <div className="flex items-center justify-between py-2 md:gap-6">
                        <div className="flex items-center gap-4">
                            <Link href="/vendor/">
                                <Image
                                    src={'/static/images/logo.png'}
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
                                    <MdLocationPin className="text-lg transition-all text-primary_color group-hover:text-white" />{' '}
                                    Download pampertree app
                                </Button>
                                <div className="block xl:hidden">
                                    <BiMenuAltRight className="text-2xl cursor-pointer text-primary_color" />
                                </div>
                            </div>
                        </div>
                        {!vendor && (
                            <p>
                                Already A Partner?{' '}
                                <Link href="/vendor/login">
                                    <span className="uppercase text-primary_color">
                                        Login
                                    </span>
                                </Link>{' '}
                            </p>
                        )}
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="uppercase"
                            asChild
                        >
                            <Link
                                href={
                                    (vendor && '/vendor/dashboard') ||
                                    '/vendor/register'
                                }
                            >
                                {(vendor && 'Dashboard') || 'Become a partner'}
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
            <div
                className={`xl:hidden bg-white p-3 space-y-4  text-black absolute top-0 -left-0 z-50 min-h-screen min-w-[100%] ${
                    openVenderSidebar ? 'translate-x-0' : '-translate-x-full'
                } transition duration-300 ease-linear`}
            >
                <div className="flex items-center justify-between">
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
                            onClick={() => setOpenVenderSidebar(false)}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p>Profile</p>
                    <IoIosArrowForward className="text-lg" />
                </div>
                <hr className="w-full" />
                <div className="flex items-center justify-between">
                    <p>Profile</p>
                    <IoIosArrowForward className="text-lg" />
                </div>
            </div>
            {openVenderSidebar && (
                <div
                    onClick={() => setOpenVenderSidebar(false)}
                    className="lg:hidden inset-0 z-10 fixed overflow-hidden backdrop-blur-sm bg-lightBlack bg-opacity-50 min-h-screen max-h-screen max-w-[100%]"
                ></div>
            )}
        </>
    );
};

export default VandorHeader;
