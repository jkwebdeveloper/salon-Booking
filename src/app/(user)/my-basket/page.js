import Button from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';

const Basketpage = () => {
    return (
        <div className="bg-[#FAFAFA] w-full space-y-11">
            <div className="container w-full px-10 py-10 space-y-4">
                <p className="text-[#16171B] text-2xl font-semibold">
                    My basket
                </p>
                <div className="p-4 space-y-5 bg-white shadow-lg rounded-xl">
                    <table className="w-full overflow-x-auto text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="pb-2">Name</th>
                                <th className="pb-2">Client name</th>
                                <th className="pb-2">Professional</th>
                                <th className="pb-2">Date & Time</th>
                                <th></th>
                                <th className="pb-2">Price</th>
                            </tr>
                        </thead>
                        <tbody className="space-y-4">
                            <tr className="border-b">
                                <td className="py-2">
                                    New Couples Massage{' '}
                                    <span className="text-gray-500">
                                        (1 hr)
                                    </span>
                                </td>
                                <td className="py-2">John Adam, Goldie Adam</td>
                                <td className="py-2">Nuzami, Kevin</td>
                                <td className="py-2">09:00 AM, 16 May 2024</td>
                                {/* <td></td> */}
                                <td className="py-2 text-[#E50C58]">
                                    Save for later
                                </td>
                                <td className="py-2 font-semibold text-primary_color">
                                    £349.00
                                </td>
                                <div className="flex items-center gap-2">
                                    <td className="py-2">
                                        <BsFillPencilFill className="text-2xl text-[#0AADA4]" />
                                    </td>
                                    <td className="py-2">
                                        <CgClose className="text-2xl" />
                                    </td>
                                </div>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2">
                                    Face wash{' '}
                                    <span className="text-gray-500">x 3</span>
                                </td>
                                <td className="py-2"></td>
                                <td className="py-2"></td>
                                <td className="py-2"></td>
                                <td className="py-2"></td>
                                <td className="py-2 font-semibold text-primary_color">
                                    £15.00
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2">
                                    Hair oil{' '}
                                    <span className="text-gray-500">x 1</span>
                                </td>
                                <td className="py-2"></td>
                                <td className="py-2"></td>
                                <td className="py-2"></td>
                                <td className="py-2"></td>
                                <td className="py-2 font-semibold text-primary_color">
                                    £4.00
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2">
                                    Sunday Soother Spa Break{' '}
                                    <span className="text-gray-500">
                                        (30 min)
                                    </span>
                                </td>
                                <td className="py-2">John Adam</td>
                                <td className="py-2">Nuzami</td>
                                <td className="py-2">10:00 AM, 16 May 2024</td>
                                <td className="py-2 text-[#E50C58]">
                                    Save for later
                                </td>
                                <td className="py-2 font-semibold text-primary_color">
                                    £25.00
                                </td>
                                <div className="flex items-center gap-2">
                                    <td className="py-2">
                                        <BsFillPencilFill className="text-2xl text-[#0AADA4]" />
                                    </td>
                                    <td className="py-2">
                                        <CgClose className="text-2xl" />
                                    </td>
                                </div>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-lg font-semibold text-right">
                        Order Total: £393.00
                    </div>
                    <div className="flex items-center justify-end mt-4 text-right">
                        <div className="space-x-2">
                            <Button variant="secondary" className="">
                                + Add another service
                            </Button>
                            <Link href="/payment">
                                <Button variant="primary" className="">
                                    Go to checkout
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container w-full px-10 py-10 space-y-4">
                <p className="text-[#16171B] text-2xl font-semibold">
                    Save for later (2 items)
                </p>
                <div className="p-4 space-y-5 bg-white shadow-lg rounded-xl">
                    <div className="">
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center gap-3">
                                <p className="font-semibold">Sports Massage</p>
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
