'use client';
import Button from '@/components/ui/button';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from '@/components/ui/dialog';
import MoreInfoModal from '../employee-time/MoreInfoModal';

const Basketpage = () => {
    const [moreInfo, setmoreInfo] = useState(false);

    return (
        <div className="bg-[#FAFAFA] w-full space-y-11">
            <div className="container w-full px-2 py-10 space-y-4 2xl:px-20">
                <p className="text-[#16171B] text-2xl font-semibold">
                    My basket
                </p>
                <div className="bg-white shadow-lg rounded-xl flex flex-col min-h-[450px] p-4">
                    <div className="flex-grow overflow-x-auto">
                        <table className="w-full text-left min-w-[600px]">
                            <thead>
                                <tr className="border-b">
                                    <th className="pb-2 text-sm lg:text-base">Name</th>
                                    <th className="pb-2 text-sm lg:text-base">Client name</th>
                                    <th className="pb-2 text-sm lg:text-base">Professional</th>
                                    <th className="pb-2 text-sm lg:text-base">Date & Time</th>
                                    <th></th>
                                    <th className="pb-2">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="">
                                    <td className="py-2 text-sm lg:text-base">
                                        New Couples Massage{' '}
                                        <span className="text-gray-500">
                                            (1 hr)
                                        </span>
                                    </td>
                                    <td className="py-2 text-sm lg:text-base">
                                        John Adam, Goldie Adam
                                    </td>
                                    <td className="py-2 text-sm lg:text-base">Nuzami, Kevin</td>
                                    <td className="py-2 text-sm lg:text-base">
                                        09:00 AM, 16 May 2024
                                    </td>
                                    <td className="py-2 text-[#E50C58] lg:text-base text-sm">
                                        Save for later
                                    </td>
                                    <td className="py-2 text-sm font-semibold text-primary_color lg:text-base">
                                        £349.00
                                    </td>
                                    <td className="flex items-center gap-2 py-2">
                                        <BsFillPencilFill className="lg:text-2xl text-sm text-[#0AADA4]" />
                                        <CgClose className="text-sm lg:text-2xl" />
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="py-2 text-sm lg:text-base">
                                        Face wash{' '}
                                        <span className="text-gray-500">
                                            x 3
                                        </span>
                                    </td>
                                    <td className="py-2"></td>
                                    <td className="py-2"></td>
                                    <td className="py-2"></td>
                                    <td className="py-2"></td>
                                    <td className="py-2 text-sm font-semibold text-primary_color lg:text-base">
                                        £15.00
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 text-sm lg:text-base">
                                        Hair oil{' '}
                                        <span className="text-sm text-gray-500 lg:text-base">
                                            x 1
                                        </span>
                                    </td>
                                    <td className="py-2"></td>
                                    <td className="py-2"></td>
                                    <td className="py-2"></td>
                                    <td className="py-2"></td>
                                    <td className="py-2 text-sm font-semibold text-primary_color lg:text-base">
                                        £4.00
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="py-2 text-sm lg:text-base">
                                        Sunday Soother Spa Break{' '}
                                        <span className="text-gray-500">
                                            (30 min)
                                        </span>
                                    </td>
                                    <td className="py-2 text-sm lg:text-base">John Adam</td>
                                    <td className="py-2 text-sm lg:text-base">Nuzami</td>
                                    <td className="py-2 text-sm lg:text-base">
                                        10:00 AM, 16 May 2024
                                    </td>
                                    <td className="py-2 text-[#E50C58] lg:text-base text-sm">
                                        Save for later
                                    </td>
                                    <td className="py-2 text-sm font-semibold text-primary_color lg:text-base">
                                        £25.00
                                    </td>
                                    <td className="flex items-center gap-2 py-2">
                                        <BsFillPencilFill className="lg:text-2xl text-sm text-[#0AADA4] " />
                                        <CgClose className="text-sm lg:text-2xl" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-auto space-y-4">
                        <div className="text-lg font-semibold text-right">
                            Order Total: £393.00
                        </div>
                        <div className="flex justify-end space-x-2">
                            <Button variant="secondary">
                                + Add another service
                            </Button>
                            <Link href="/payment">
                                <Button variant="primary">
                                    Go to checkout
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container w-full px-2 py-10 space-y-4 2xl:px-20">
                <p className="text-[#16171B] text-2xl font-semibold">
                    Save for later (2 items)
                </p>
                <div className="p-4 space-y-5 bg-white shadow-lg rounded-xl">
                    <div className="">
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center gap-3">
                                <p className="font-semibold">Sports Massage</p>
                                <Dialog open={moreInfo} className="w-1/2">
                                    <DialogTrigger
                                        onClick={e => setmoreInfo(true)}
                                        className="text-sm text-[#0AADA4]"
                                    >
                                        Show Details
                                    </DialogTrigger>
                                    <DialogContent
                                        close={setmoreInfo}
                                        className="sm:max-w-[750px]"
                                    >
                                        <DialogTitle className="text-3xl font-bold">
                                            CeraVe Face wash (200 ml)
                                        </DialogTitle>
                                        <MoreInfoModal
                                            setmoreInfo={setmoreInfo}
                                        />
                                    </DialogContent>
                                </Dialog>
                                {/* <p className="text-sm text-[#0AADA4]">
                                    Show Details
                                </p> */}
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="font-semibold text-primary_color">
                                    £25.00
                                </p>
                                <p>
                                    <CgClose />
                                </p>
                            </div>
                            {/* <div className="flex items-center justify-between">
                                
                            </div> */}
                        </div>
                        <div className="flex items-center justify-between ">
                            <p className="text-[#666666] text-base">10 Mins</p>
                            <p className="px-4 text-[#EA2C6D]">
                                Move to basket
                            </p>
                        </div>
                        <hr className="mt-4" />
                    </div>
                    <div className="">
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center gap-3">
                                <p className="font-semibold">Swedish Massage</p>
                                <p className="text-sm text-[#0AADA4]">
                                    Show Details
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="font-semibold text-primary_color">
                                    £25.00
                                </p>
                                <p>
                                    <CgClose />
                                </p>
                            </div>
                            {/* <div className="flex items-center justify-between">
                                
                            </div> */}
                        </div>
                        <div className="flex items-center justify-between ">
                            <p className="text-[#666666] text-base">10 Mins</p>
                            <p className="px-4 text-[#EA2C6D]">
                                Move to basket
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basketpage;
