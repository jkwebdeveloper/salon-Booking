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
import MoreInfoModal from '../book-service/MoreInfoModal';
import { useSelector } from 'react-redux';
import { Basket } from '@/components/ui/skelton/basket';
import { v4 } from 'uuid';

const Basketpage = () => {
    const cart = useSelector((state) => state.Cart.cart);
    const [moreInfo, setmoreInfo] = useState(false);

    return (
        <div className="bg-[#FAFAFA] w-full md:pb-40 md:-mb-20">
            <div className='container max-w-[1400px]'>
                <div className="container w-full px-2 pt-10 space-y-4 2xl:px-20">
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
                                    {cart?.bookings_services ? cart?.bookings_services?.map((item, index) => (
                                        <tr key={v4()} className="">
                                            <td className="py-2 text-sm lg:text-base">
                                                {item?.vendors_service_info?.service_title}
                                                <span className="text-gray-500 ms-1">
                                                    ({+item?.vendors_service_info?.duration * 60} Min)
                                                </span>
                                            </td>
                                            <td className="py-2 text-sm lg:text-base">
                                                {item?.client || 'N/A'}
                                            </td>
                                            <td className="py-2 text-sm lg:text-base">
                                                {item?.staff || 'N/A'}
                                            </td>
                                            <td className="py-2 text-sm lg:text-base">
                                                {item?.dateTime || 'N/A'}
                                            </td>
                                            <td className="py-2 text-[#E50C58] lg:text-base text-sm">
                                                Save for later
                                            </td>
                                            <td className="py-2 text-sm font-semibold text-primary_color lg:text-base">
                                                £{item?.vendors_service_info?.sale_price || item?.vendors_service_info?.price}
                                            </td>
                                            <td className="flex items-center gap-2 py-2">
                                                {/* <BsFillPencilFill className="lg:text-2xl text-sm text-[#0AADA4]" /> */}
                                                <CgClose className="text-sm lg:text-2xl" />
                                            </td>
                                        </tr>
                                    )) : null}
                                </tbody>
                            </table>
                        </div>
                        {/* <div className='space-y-4'>
                        <Basket />
                        <Basket />
                        <Basket />
                    </div> */}
                        <div className="mt-auto space-y-4">
                            <div className="text-lg font-semibold text-right">
                                Order Total: £{cart?.total_cart_amount}
                            </div>
                            <div className="flex justify-end space-x-2">
                                <Button variant="secondary" asChild>
                                    <Link href="/book-service">
                                        <BsFillPencilFill /> Edit Cart
                                    </Link>
                                </Button>
                                <Button variant="secondary" asChild>
                                    <Link href={"/details" + "/salon-name/" + cart?.vendors_info.id}>
                                        + Add another service
                                    </Link>
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
                <div className="container w-full px-2 pt-10 space-y-4 2xl:px-20">
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
        </div>
    );
};

export default Basketpage;
