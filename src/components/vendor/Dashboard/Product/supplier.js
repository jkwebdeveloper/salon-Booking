import React from 'react'
import { BsPencilFill } from "react-icons/bs";
import { IoTrashSharp } from "react-icons/io5";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import Button from "@/components/ui/button";
import SupplierNewAddModal from '@/components/vendor/Dashboard/Modal/ProductModal/SupplierNewAddModal';
import { useSelector } from 'react-redux';
import useProductList from '@/hooks/useProductlist';
import SupplierNewEditModal from '@/components/vendor/Dashboard/Modal/ProductModal/SupplierNewEditModal';
import { Spinner } from '@/components';


function Supplier() {
    const vendor = useSelector((state) => state.vendorAuth.vendor);
    const [currentPage, setCurrentPage] = React.useState({ changing: false, value: 1 });
    const [products, setProducts, getProducts] = useProductList({ page: currentPage.value });
    const [totalPage, setTotalPage] = React.useState(1);
    const [showNumberofBtn, setShowNumberofBtn] = React.useState(5);
    const [editDialog, setEditDialog] = React.useState(false);
    const [addDialog, setAddDialog] = React.useState(false);
    const [editSupplier, setEditSupplier] = React.useState(null);
    return (
        <>
            <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold">Suppliers</p>
                <Dialog open={addDialog}>
                    <DialogTrigger
                        onClick={(e) => setAddDialog(true)}
                        className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
                    >
                        + Add New
                    </DialogTrigger>
                    <DialogContent
                        close={setAddDialog}
                        className="sm:max-w-[450px]"
                    >
                        <DialogTitle>Supplier details</DialogTitle>
                        <SupplierNewAddModal
                            setAddDialog={setAddDialog}
                            editSupplier={editSupplier}
                            products={products}
                        />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="overflow-x-auto bg-white rounded-lg">
                <table className="min-w-full rounded-lg font-[sans-serif]">
                    <thead className="border-b-2 whitespace-nowrap">
                        <tr>
                            <th className="px-6 py-3 text-sm font-semibold text-left">
                                Supplier name
                            </th>
                            <th className="px-6 py-3 text-sm font-semibold text-left">
                                Contact person
                            </th>
                            <th className="px-6 py-3 text-sm font-semibold text-left">
                                Phone
                            </th>
                            <th className="px-6 py-3 text-sm font-semibold text-left">
                                Email
                            </th>
                            <th className="px-6 py-3 text-sm font-semibold text-left">
                                Assigned products
                            </th>
                            <th className="px-6 py-3 text-sm font-semibold text-left">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="border-b-2 whitespace-nowrap">
                        <tr className="">
                            <td className="px-6 py-4 text-sm">FedEx</td>
                            <td className="px-6 py-4 text-sm">Travis Head</td>
                            <td className="px-6 py-4 text-sm">123467894</td>
                            <td className="px-6 py-4 text-sm">loremipsum@mail.com</td>
                            <td className="px-6 py-4 text-sm text-center">2</td>
                            <td className="flex gap-4 px-6 py-4">
                                <Button
                                    variant="icon"
                                    size="icon"
                                    className="px-0"
                                    onClick={(e) => {
                                        setEditDialog(true);
                                        //   setEditSupplier({})
                                    }}
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
                <Pagination className={'py-3 relative'}>
                    <PaginationContent className={products?.loading && 'opacity-0'}>
                        <PaginationItem className="p-0 !w-6 !h-6">
                            <PaginationPrevious className={`${currentPage.value != 1 && 'text-primary bg-neutral-100' || 'bg-neutral-100 opacity-50 cursor-not-allowed p-0'} !w-full !h-full`} onClick={e => currentPage.value != 1 && setCurrentPage({ changing: true, value: currentPage.value - 1 })} />
                        </PaginationItem>
                        {Array.from({ length: totalPage }, (_, i) => {
                            const start = currentPage.value - Math.floor(showNumberofBtn / 2);
                            if (currentPage.value <= Math.floor(showNumberofBtn / 2)) {
                                if (i < showNumberofBtn) {
                                    return (
                                        <PaginationItem key={i}>
                                            <PaginationLink
                                                className={'!w-6 !h-6 p-0 hover:bg-primary hover:text-white'}
                                                isActive={currentPage.value === i + 1 || totalPage == 1}
                                                onClick={e => {
                                                    setCurrentPage({ changing: true, value: i + 1 });
                                                }}
                                            >
                                                {/* {i + 1} */}
                                                {currentPage.changing == true && currentPage.value == i + 1 && <PageLoader show={true} width={20} height={20} /> || i + 1}
                                            </PaginationLink>
                                        </PaginationItem>
                                    )
                                }
                            }
                            else if (currentPage.value > Math.floor(showNumberofBtn / 2)) {
                                if (i >= start && i < start + showNumberofBtn) {
                                    return (
                                        <PaginationItem key={i}>
                                            <PaginationLink
                                                className={'!w-6 !h-6 p-0 hover:bg-primary hover:text-white'}
                                                isActive={currentPage.value === i + 1}
                                                onClick={e => {
                                                    setCurrentPage({ changing: true, value: i + 1 });
                                                }}
                                            >
                                                {i + 1}
                                            </PaginationLink>
                                        </PaginationItem>
                                    )
                                }
                            }
                        })}
                        <PaginationItem className="p-0 !w-6 !h-6">
                            <PaginationNext className={`${currentPage.value != totalPage && 'text-primary bg-neutral-100' || 'bg-neutral-100 opacity-80 cursor-not-allowed p-0'} !w-full !h-full`} onClick={e => currentPage.value != totalPage && setCurrentPage({ changing: true, value: currentPage.value + 1 })} />
                        </PaginationItem>
                    </PaginationContent>
                    {products?.loading && <div className='absolute d-flex justify-content-center align-items-center top-2/4 -translate-y-2/4'>
                        <Spinner show={true} width={40} height={40} />
                    </div>}
                </Pagination>
                <Dialog open={editDialog}>
                    <DialogContent
                        close={setEditDialog}
                        className="sm:max-w-[450px]"
                    >
                        <DialogTitle>Product</DialogTitle>
                        <SupplierNewEditModal
                            setEditDialog={setEditDialog}
                            editSupplier={editSupplier}
                            products={products}
                        />
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}

export default Supplier