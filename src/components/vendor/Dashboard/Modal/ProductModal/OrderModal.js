import Button from '@/components/ui/button';
import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import CancelOrder from './CancelOrder';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from '@/components/ui/dialog';
const OrderModal = () => {
    const [currentTab, setCurrentTab] = useState('action');
    const [cancelOrderDialog, setCancelOrderDialog] = React.useState(false);

    return (
        <div className="w-full space-y-3">
            {currentTab == 'action' && (
                <>
                    <p className="text-[#1D1B23] -mt-2 font-semibold text-xl">
                        Select a supplier
                    </p>
                    <hr />
                    <div
                        className="flex items-center justify-between w-full cursor-pointer"
                        onClick={() => setCurrentTab('fedex')}
                    >
                        <div className="flex-row">
                            <p className="text-lg font-semibold">FedEx</p>
                            <p className="text-sm">2 Products</p>
                        </div>
                        <IoIosArrowForward />
                    </div>
                    <hr />
                    <div
                        className="flex items-center justify-between w-full cursor-pointer"
                        onClick={() => setCurrentTab('ups')}
                    >
                        <div className="flex-row">
                            <p className="text-lg font-semibold">UPS</p>
                            <p className="text-sm">1 Products</p>
                        </div>
                        <IoIosArrowForward />
                    </div>
                </>
            )}
            {currentTab == 'fedex' && (
                <div className="space-y-4">
                    <p className="font-semibold">FedEx</p>
                    <hr />
                    <div className="overflow-x-auto bg-white rounded-lg">
                        <table className="min-w-full rounded-lg font-[sans-serif]">
                            <thead className="border-b-2 bg-[#F2F2F2] whitespace-nowrap">
                                <tr>
                                    <th className="px-6 py-3 text-sm font-semibold text-left">
                                        Product
                                    </th>
                                    <th className="px-6 py-3 text-sm font-semibold text-left">
                                        In Stock
                                    </th>
                                    <th className="px-6 py-3 text-sm font-semibold text-left">
                                        Quantity to order
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="border-b-2 whitespace-nowrap">
                                <tr className="">
                                    <td className="px-6 py-4 text-sm">
                                        Face wash
                                    </td>
                                    <td className="p-2 px-6 py-4 text-sm ">
                                        <p className="w-1/2 p-2 text-center text-black border-bg-[#D9D9D9] border rounded-md">
                                            7
                                        </p>
                                    </td>
                                    <td className="flex items-center gap-2 px-6 py-4 text-sm">
                                        <button className="px-3 rounded-md bg-[#0AADA4] text-white text-2xl">
                                            -
                                        </button>
                                        <button className="px-2 p-2 rounded-md border bg-[#D9D9D9]">
                                            25
                                        </button>
                                        <button className="px-3 rounded-md bg-[#0AADA4] text-white text-2xl">
                                            +
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Button variant="primary">create order</Button>
                </div>
            )}
            {currentTab == 'ups' && (
                <>
                    <p className="text-[#1D1B23] -mt-2 font-semibold text-xl">
                        FedEx
                    </p>
                    <hr />
                    <div className="space-y-6">
                        <div className="flex items-center gap-12">
                            <div className="flex-row space-y-2">
                                <p className="text-[14px]">Order date</p>
                                <p className="text-lg font-semibold">
                                    29/04/2024 10:03 AM
                                </p>
                            </div>
                            <div className="flex-row space-y-1">
                                <p className="text-[14px]">Status</p>
                                <Button className="focus:outline-none capitalize py-2 bg-[#29AD17] hover:bg-[#0b645f] text-white font-medium  active:scale-90 transition text-sm">
                                    Ordered
                                </Button>
                            </div>
                        </div>
                        <table className="w-full rounded-lg font-[sans-serif]">
                            <thead className="border-b-2 bg-[#F2F2F2] rounded-xl whitespace-nowrap">
                                <tr>
                                    <th className="px-6 py-3 text-sm font-semibold text-left">
                                        Product
                                    </th>
                                    <th className="px-6 py-3 text-sm font-semibold text-right">
                                        Quantity
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="border-b-2 whitespace-nowrap">
                                <tr className="w-full">
                                    <td className="px-6 py-4 text-sm">
                                        Face wash
                                    </td>
                                    <td className="px-12 py-4 text-sm text-right ">
                                        7
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex items-center gap-3">
                            <Button variant="primary">Mark as delivered</Button>

                            {/* <Button variant="outline">Cancel order</Button> */}
                            <Dialog open={cancelOrderDialog}>
                                <DialogTrigger
                                    onClick={e => setCancelOrderDialog(true)}
                                    className="border-[1px] p-2 px-4 rounded-full text-[#999999] border-primary bg-background shadow-sm hover:bg-primary hover:text-white"
                                >
                                    Cancel order
                                </DialogTrigger>
                                <DialogContent
                                    close={setCancelOrderDialog}
                                    className="sm:max-w-[550px]"
                                >
                                    <CancelOrder
                                        setCancelOrderDialog={
                                            setCancelOrderDialog
                                        }
                                    />
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default OrderModal;
