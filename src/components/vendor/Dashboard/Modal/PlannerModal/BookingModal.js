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
                <table>
                    <thead>
                        <tr>
                            <th className="px-4 py-3 text-sm font-semibold text-left">
                                S.N.
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold text-left">
                                Customer Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-4 text-sm">1</td>
                            <td className="px-4 py-4 text-sm">Jason Bully</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingModal;
