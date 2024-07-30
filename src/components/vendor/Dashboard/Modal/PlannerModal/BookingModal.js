import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
const BookingModal = () => {
    return (
        <div className="space-y-3">
            <div className="flex items-center gap-3">
                <div className="bg-[#0AADA4] w-10 h-10 text-white flex justify-center items-center text-center rounded-full">
                    JB
                </div>
                <p className="text-lg font-semibold">Jason Bully</p>
            </div>
            <hr />
            {/* <Table className="space-y-3">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] text-black">
                            ORDER NO:
                        </TableHead>
                        <TableHead className="text-black">02</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Name:</TableCell>
                        <TableCell>Jason Bully</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">
                            Contact No:
                        </TableCell>
                        <TableCell>+1 2345678932</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Name:</TableCell>
                        <TableCell>Jason Bully</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Name:</TableCell>
                        <TableCell>Jason Bully</TableCell>
                    </TableRow>
                </TableBody>
            </Table> */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <tbody className="whitespace-nowrap">
                        <tr className="border-b-2">
                            <td className="px-4 py-4 text-base text-[#4D4D4D] font-semibold">
                                ORDER NO:
                            </td>
                            <td className="px-4 py-4 text-sm text-[#4D4D4D]">
                                02
                            </td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="px-4 py-4 text-base text-[#4D4D4D] font-semibold">
                                Name:
                            </td>
                            <td className="px-4 py-4 text-sm text-[#4D4D4D]">
                                Jason Bully
                            </td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="px-4 py-4 text-base text-[#4D4D4D] font-semibold">
                                Contact No:
                            </td>
                            <td className="px-4 py-4 text-sm text-[#4D4D4D]">
                                +1 2345678932
                            </td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="px-4 py-4 text-base text-[#4D4D4D] font-semibold">
                                Email:
                            </td>
                            <td className="px-4 py-4 text-sm text-[#4D4D4D]">
                                lorem@mail.com
                            </td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="px-4 py-4 text-base text-[#4D4D4D] font-semibold">
                                Date & Time:
                            </td>
                            <td className="px-4 py-4 text-sm text-[#4D4D4D]">
                                09/03/2024, 11:00
                            </td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="px-4 py-4 text-base text-[#4D4D4D] font-semibold">
                                Payment:
                            </td>
                            <td className="px-4 py-4 text-sm text-[#4D4D4D]">
                                £349
                            </td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="px-4 py-4 text-base text-[#4D4D4D] font-semibold">
                                Services:
                            </td>
                            <td className="px-4 py-4 text-sm text-[#4D4D4D]">
                                Swedish Massage
                            </td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="px-4 py-4 text-base text-[#4D4D4D] font-semibold">
                                Status:
                            </td>
                            <td className="px-4 py-4  text-sm text-[#4D4D4D]">
                                <select className="bg-[#FAFAFA] border border-[#D8DAE5] rounded-md p-2 w-full focus:outline-none ">
                                    <option>Approved</option>
                                    <option>Approved</option>
                                    <option>Cancelled</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingModal;
