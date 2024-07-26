import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from "@/components/ui/dialog";
import Button from "@/components/ui/button";
import { BsPencilFill } from "react-icons/bs";
import { IoTrashSharp } from "react-icons/io5";
import OrderModal from "@/components/vendor/Dashboard/Modal/ProductModal/OrderModal";

function Orders() {
    const [editDialog, setEditDialog] = React.useState(false);
    const [addDialog, setAddDialog] = React.useState(false);
    return (
        <>
            <>
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold">Product orders</p>
                    <Dialog open={addDialog}>
                        <DialogTrigger
                            onClick={(e) => setAddDialog(true)}
                            className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
                        >
                            + Add New order
                        </DialogTrigger>
                        <DialogContent
                            close={setAddDialog}
                            className="sm:max-w-[450px]"
                        >
                            <DialogTitle>Select a supplier</DialogTitle>
                            <hr />
                            <OrderModal
                                setAddDialog={setAddDialog}
                            />
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="overflow-x-auto bg-white rounded-lg">
                    <table className="min-w-full rounded-lg font-[sans-serif]">
                        <thead className="border-b-2 whitespace-nowrap">
                            <tr>
                                <th className="px-6 py-3 text-sm font-semibold text-left">
                                    Supplier
                                </th>
                                <th className="px-6 py-3 text-sm font-semibold text-left">
                                    Date ordered
                                </th>
                                <th className="px-6 py-3 text-sm font-semibold text-left">
                                    Items ordered
                                </th>
                                <th className="px-6 py-3 text-sm font-semibold text-left">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-sm font-semibold text-left">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-b-2 whitespace-nowrap">
                            <tr className="">
                                <td className="px-6 py-4 text-sm">UPS</td>
                                <td className="px-6 py-4 text-sm">24/04/2024</td>
                                <td className="px-6 py-4 text-sm">47</td>
                                <td className="px-2 py-4 text-sm ">
                                    <p className="bg-[#0AADA4] p-2 text-white rounded-full text-center">
                                        Delivered
                                    </p>
                                </td>
                                <td className="flex gap-4 px-6 py-4">
                                    <Button
                                        variant="icon"
                                        size="icon"
                                        className="px-0"
                                        onClick={(e) => { setEditDialog(true); }}
                                    >
                                        <BsPencilFill className="text-[#0AADA4] text-xl" />
                                    </Button>
                                    <Button
                                        variant="icon"
                                        size="icon"
                                        className="px-0"
                                    >
                                        <IoTrashSharp className="text-[#EA2C6D] text-xl" />
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Dialog open={editDialog}>
                        <DialogContent
                            close={setEditDialog}
                            className="sm:max-w-[450px]"
                        >
                            <DialogTitle>Product</DialogTitle>
                            <OrderModal
                                setEditDialog={setEditDialog}
                            />
                        </DialogContent>
                    </Dialog>
                </div>
            </>
        </>
    )
}

export default Orders