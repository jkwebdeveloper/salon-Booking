import Button from '@/components/ui/button';
import React, { useState } from 'react';
import { IoEyeSharp } from 'react-icons/io5';

import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from '@/components/ui/dialog';
import BookingModal from './Modal/PlannerModal/BookingModal';
import { IoMdClose } from 'react-icons/io';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const BookingList = () => {
    const [bookingModal, setBookingModal] = useState(false);
    return (
        <div className="space-y-4 bg-[#F7F7F7] w-full p-4">
            <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold">Booking List</p>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant="outline">All Bookings</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 p-0 mt-2 bg-white ring-1 ring-neutral-200">
                        <DropdownMenuGroup>
                            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                                All Bookings
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                                Pending Bookings
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                                Approved Bookings
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                                Declined Bookings
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                                Completed Bookings
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="w-full p-4 space-y-3 bg-white rounded-xl">
                <div className="overflow-x-auto ">
                    <table className="min-w-full bg-white rounded-lg font-[sans-serif]">
                        <thead className="border-b-2 whitespace-nowrap">
                            <tr>
                                <th className="px-4 py-3 text-sm font-semibold text-left">
                                    S.N.
                                </th>
                                <th className="px-4 py-3 text-sm font-semibold text-left">
                                    Customer Name
                                </th>
                                <th className="px-4 py-3 text-sm font-semibold text-left">
                                    Email
                                </th>
                                <th className="px-4 py-3 text-sm font-semibold text-left">
                                    Phone
                                </th>
                                <th className="px-4 py-3 text-sm font-semibold text-left">
                                    Book Date And Time
                                </th>
                                <th className="px-4 py-3 text-sm font-semibold text-left">
                                    Payment Mode
                                </th>
                                <th className="px-4 py-3 text-sm font-semibold text-left">
                                    Pricing
                                </th>
                                <th className="px-4 py-3 text-sm font-semibold text-left">
                                    Status
                                </th>
                                <th className="px-4 py-3 text-sm font-semibold text-left">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-b-2 whitespace-nowrap">
                            <tr className="">
                                <td className="px-4 py-4 text-sm">1</td>
                                <td className="px-4 py-4 text-sm">
                                    Jason Bully
                                </td>
                                <td className="px-4 py-4 text-sm">
                                    fgfg@gmail.com
                                </td>
                                <td className="px-4 py-4 text-sm">
                                    +1 2345678932
                                </td>
                                <td className="px-4 py-4 text-sm">
                                    2024-03-09 11:00
                                </td>
                                <td className="px-4 py-4 text-sm">Card</td>
                                <td className="px-4 py-4 text-sm">£349</td>
                                <td className="px-4 py-4 text-sm ">
                                    <p className="bg-[#EABB00] p-2 rounded-full text-center">
                                        Pending
                                    </p>
                                </td>
                                <td className="flex gap-4 px-4 py-4">
                                    <Dialog open={bookingModal}>
                                        <DialogTrigger
                                            onClick={e => setBookingModal(true)}
                                            className="text-[#EA2C6D] text-xl"
                                        >
                                            <IoEyeSharp className="text-[#EA2C6D] text-xl" />
                                        </DialogTrigger>
                                        <DialogContent
                                            close={setBookingModal}
                                            className="sm:max-w-[500px]"
                                        >
                                            <DialogTitle>
                                                Booking Info
                                            </DialogTitle>
                                            <BookingModal
                                                setBookingModal={
                                                    setBookingModal
                                                }
                                            />
                                        </DialogContent>
                                    </Dialog>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className="border-b-2 whitespace-nowrap">
                            <tr className="">
                                <td className="px-4 py-4 text-sm">1</td>
                                <td className="px-4 py-4 text-sm">
                                    Jason Bully
                                </td>
                                <td className="px-4 py-4 text-sm">
                                    fgfg@gmail.com
                                </td>
                                <td className="px-4 py-4 text-sm">
                                    +1 2345678932
                                </td>
                                <td className="px-4 py-4 text-sm">
                                    2024-03-09 11:00
                                </td>
                                <td className="px-4 py-4 text-sm">Card</td>
                                <td className="px-4 py-4 text-sm">£349</td>
                                <td className="px-4 py-4 text-sm ">
                                    <p className="bg-[#29AD17] p-2 rounded-full text-center">
                                        Approved
                                    </p>
                                </td>
                                <td className="flex gap-4 px-4 py-4">
                                    <IoEyeSharp className="text-[#EA2C6D] text-xl" />
                                </td>
                            </tr>
                        </tbody>
                        <tbody className="border-b-2 whitespace-nowrap">
                            <tr className="">
                                <td className="px-4 py-4 text-sm">1</td>
                                <td className="px-4 py-4 text-sm">
                                    Jason Bully
                                </td>
                                <td className="px-4 py-4 text-sm">
                                    fgfg@gmail.com
                                </td>
                                <td className="px-4 py-4 text-sm">
                                    +1 2345678932
                                </td>
                                <td className="px-4 py-4 text-sm">
                                    2024-03-09 11:00
                                </td>
                                <td className="px-4 py-4 text-sm">Card</td>
                                <td className="px-4 py-4 text-sm">£349</td>
                                <td className="px-4 py-4 text-sm ">
                                    <p className="bg-[#EA2C6D] p-2 rounded-full text-center">
                                        Declined
                                    </p>
                                </td>
                                <td className="flex gap-4 px-4 py-4">
                                    <IoEyeSharp className="text-[#EA2C6D] text-xl" />
                                </td>
                            </tr>
                        </tbody>
                        <tbody className=" whitespace-nowrap">
                            <tr className="">
                                <td className="px-4 py-4 text-sm">1</td>
                                <td className="px-4 py-4 text-sm">
                                    Jason Bully
                                </td>
                                <td className="px-4 py-4 text-sm">
                                    fgfg@gmail.com
                                </td>
                                <td className="px-4 py-4 text-sm">
                                    +1 2345678932
                                </td>
                                <td className="px-4 py-4 text-sm">
                                    2024-03-09 11:00
                                </td>
                                <td className="px-4 py-4 text-sm">Card</td>
                                <td className="px-4 py-4 text-sm">£349</td>
                                <td className="px-4 py-4 text-sm ">
                                    <p className="bg-[#0AADA4] p-2 rounded-full text-center">
                                        Completed
                                    </p>
                                </td>
                                <td className="flex gap-4 px-4 py-4">
                                    <IoEyeSharp className="text-[#EA2C6D] text-xl" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookingList;
