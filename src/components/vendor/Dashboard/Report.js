import Button from '@/components/ui/button';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
const Report = () => {
    const [saleDetails, setSaleDetails] = useState(false);
    return (
        <>
            <div className="space-y-4">
                {saleDetails === true ? (
                    <>
                        {/* Sales per Month section */}

                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-semibold">
                                Sales per Month
                            </p>
                            <div className="flex items-center gap-3">
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Button variant="primary">
                                            04/01/2023 - 02/29/2024
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56 p-0 mt-2 bg-white ring-1 ring-neutral-200">
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                                                Today
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                                                Yesterday
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                                                Last 7 days
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                                                Last 30 days
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                                                This month
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                                                Last month
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white">
                                                Custom range
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                <Button variant="secondary">Print</Button>
                                <Button variant="outline">Download</Button>
                                <IoMdClose
                                    className="text-2xl cursor-pointer"
                                    onClick={() => setSaleDetails(false)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full text-sm font-light text-center bg-white rounded-lg border-neutral-200 text-surface dark:border-white/10 dark:text-white">
                                            <thead className="font-medium border-b border-neutral-200 dark:border-white/10">
                                                <tr className="font-medium border-b border-neutral-200 dark:border-white/10">
                                                    <th
                                                        rowspan="2"
                                                        className="px-6 py-4 border-e border-neutral-200 dark:border-white/10"
                                                    >
                                                        Sales Per Date
                                                    </th>
                                                    <th
                                                        colspan="2"
                                                        className="px-6 py-4 border-e border-neutral-200 dark:border-white/10"
                                                    >
                                                        Gift-Vouchers
                                                    </th>
                                                    <th
                                                        colspan="2"
                                                        className="px-6 py-4 border-e border-neutral-200 dark:border-white/10"
                                                    >
                                                        Merchandise
                                                    </th>
                                                    <th
                                                        colspan="2"
                                                        className="px-6 py-4 border-e border-neutral-200 dark:border-white/10"
                                                    >
                                                        treatments
                                                    </th>
                                                    <th
                                                        rowspan="2"
                                                        className="px-6 py-4 border-e border-neutral-200 dark:border-white/10"
                                                    >
                                                        Value GBP
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th className="px-6 py-4 border-e border-neutral-200 dark:border-white/10">
                                                        Quantity
                                                    </th>
                                                    <th className="px-6 py-4 border-e border-neutral-200 dark:border-white/10">
                                                        Revenue
                                                    </th>
                                                    <th className="px-6 py-4 border-e border-neutral-200 dark:border-white/10">
                                                        Quantity
                                                    </th>
                                                    <th className="px-6 py-4 border-e border-neutral-200 dark:border-white/10">
                                                        Revenue
                                                    </th>
                                                    <th className="px-6 py-4 border-e border-neutral-200 dark:border-white/10">
                                                        Quantity
                                                    </th>
                                                    <th className="px-6 py-4 border-e border-neutral-200 dark:border-white/10">
                                                        Revenue
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-neutral-200 dark:border-white/10">
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        April 2023
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        £0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        £0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        £0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        £0
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr className="border-b border-neutral-200 dark:border-white/10">
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        May 2023
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        £0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        £0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        £0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        £0
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr className="border-b border-neutral-200 dark:border-white/10">
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        June 2023
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        £0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        £0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        £0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        £0
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr className="border-b border-neutral-200 dark:border-white/10">
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        July 2023
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        £0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        £0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        £0
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                                                        £0
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <p className="text-2xl font-semibold">Customers</p>
                        <div className="w-full p-4 space-y-3 bg-white rounded-xl">
                            <p className="text-2xl font-semibold">Index</p>
                            <p>
                                A breakdown of all your data, making an easily
                                accessible index from customers to finance
                                details.
                            </p>
                            <hr />
                            <div className="flex items-center gap-3">
                                <Button
                                    variant="primary"
                                    onClick={() => setSaleDetails(true)}
                                >
                                    Customers
                                </Button>
                                <Button variant="primary">
                                    Appointment Cancellations
                                </Button>
                            </div>
                        </div>
                        <div className="w-full p-4 space-y-3 bg-white rounded-xl">
                            <p className="text-2xl font-semibold">
                                Trading breakdown
                            </p>
                            <p>
                                Examine in detail your trading figures in order
                                to explain and interpret them easily.
                            </p>
                            <hr />
                            <div className="flex items-center gap-1">
                                <Button variant="primary" className="text-xs">
                                    Trading Summary
                                </Button>
                                <Button variant="primary" className="text-xs">
                                    Treatments Breakdown
                                </Button>
                                <Button variant="primary" className="text-xs">
                                    Breakdown By Staff Figures
                                </Button>
                                <Button variant="primary" className="text-xs">
                                    Trading By Source
                                </Button>
                                <Button variant="primary" className="text-xs">
                                    Day To Day Breakdown
                                </Button>
                                <Button variant="primary" className="text-xs">
                                    Monthly Breakdown
                                </Button>
                            </div>
                        </div>
                        <div className="w-full p-4 space-y-3 bg-white rounded-xl">
                            <p className="text-2xl font-semibold">Customers</p>
                            <p>
                                Understand how your venue is performing in
                                relation to new customer visits converting into
                                repeat customer retention as part of your total
                                customer number over the month/quarter.
                            </p>
                            <hr />
                            <div className="flex items-center gap-3">
                                <Button variant="primary">New Customers</Button>
                                <Button variant="primary">
                                    Repeat Customers
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Report;
