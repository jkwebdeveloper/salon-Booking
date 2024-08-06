import Button from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import CancelOrder from './CancelOrder';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from '@/components/ui/dialog';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import { useSelector } from 'react-redux';
import useSupplierList from '@/hooks/useSupplierlist';
import { Spinner } from '@/components';
import CreateOrder from './createorder';

const OrderModal = ({ setAddDialog, activePage }) => {
    const vendor = useSelector(state => state.vendorAuth.vendor);
    const [currentTab, setCurrentTab] = useState('action');
    const [cancelOrderDialog, setCancelOrderDialog] = React.useState(false);

    const [currentPage, setCurrentPage] = React.useState({ changing: false, value: 1 });
    const [suppliers, setSuppliers, getSuppliers] = useSupplierList({ page: currentPage.value });
    const [totalPage, setTotalPage] = React.useState(1);
    const [showNumberofBtn, setShowNumberofBtn] = React.useState(5);
    const [currentSupplier, setCurrentSupplier] = React.useState(null);

    useEffect(() => {
        setTotalPage(suppliers?.data?.total_pages || 1);
        return () => setCurrentSupplier(null);
    }, [suppliers?.loading]);

    useEffect(() => {
        getSuppliers({ page: currentPage.value }).then(() => {
            setCurrentPage(prev => ({ ...prev, changing: false }));
        });
    }, [currentPage.value]);

    return (
        <div className="w-full space-y-3">
            {!currentSupplier && (
                <div className='relative space-y-2'>
                    <p className="text-[#1D1B23] -mt-1 font-semibold text-xl">
                        Select a supplier
                    </p>
                    <hr />
                    {suppliers?.loading && <div className='min-h-[200px] flex items-center justify-center'> <Spinner show={suppliers?.loading} width={40} height={40} /> </div>
                        || <>
                            {suppliers?.data && suppliers?.data?.suppliers.map((supplier, i) => (
                                supplier?.products_count ? <>
                                    <div
                                        className="flex items-center justify-between w-full cursor-pointer"
                                        onClick={() => setCurrentSupplier(supplier)}
                                    >
                                        <div className="flex-row">
                                            <p className="font-semibold capitalize text-md">{supplier?.supplier_name}</p>
                                            <p className="text-sm">{supplier?.products_count} Products</p>
                                        </div>
                                        <IoIosArrowForward />
                                    </div>
                                    <hr />
                                </> : null
                            ))}
                            <Pagination className={'pt-3 relative'}>
                                <PaginationContent className={suppliers
                                    ?.loading && 'opacity-0'}>
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
                                                            className={`!w-6 !h-6 p-0 hover:bg-primary hover:text-white ${currentPage.value == i + 1 && 'pointer-events-none'} ${currentPage.changing && currentPage.value == i + 1 && 'bg-[url("/static/icons/ring.svg")]' || ''}`}
                                                            isActive={(currentPage?.changing && currentPage.value || currentPage.value === i + 1) || totalPage == 1}
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
                                        else if (currentPage.value > Math.floor(showNumberofBtn / 2)) {
                                            if (i >= start && i < start + showNumberofBtn) {
                                                return (
                                                    <PaginationItem key={i}>
                                                        <PaginationLink
                                                            className={`!w-6 !h-6 p-0 hover:bg-primary hover:text-white ${currentPage.value == i + 1 && 'pointer-events-none'} ${currentPage.changing && currentPage.value == i + 1 && 'bg-[url("/static/icons/ring.svg")]' || ''}`}
                                                            isActive={(currentPage?.changing && currentPage.value || currentPage.value === i + 1) || totalPage == 1}
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
                                {suppliers
                                    ?.loading && <div className='absolute d-flex justify-content-center align-items-center top-2/4 -translate-y-2/4'>
                                        <Spinner show={true} width={40} height={40} />
                                    </div>}
                            </Pagination>
                        </>
                    }
                </div>
            )}
            {currentSupplier && <CreateOrder supplier={currentSupplier} setAddDialog={setAddDialog} activePage={activePage} />}
            {/* {currentTab == 'ups' && (
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
            )} */}
        </div>
    );
};

export default OrderModal;
