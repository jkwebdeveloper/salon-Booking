import React, { useEffect } from 'react';
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
import Button from '@/components/ui/button';
import { BsPencilFill } from 'react-icons/bs';
import { IoTrashSharp } from 'react-icons/io5';
import OrderModal from '@/components/vendor/Dashboard/Modal/ProductModal/OrderModal';
import { GET } from '@/app/api/get';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import useOrders from '@/hooks/useorders';
import { Spinner } from '@/components';
import EditOrder from '@/components/vendor/Dashboard/Modal/ProductModal/EditOrder';

function Orders() {
    const vendor = useSelector(state => state.vendorAuth.vendor);
    const [editOrder, setEditOrder] = React.useState(false);
    const [addDialog, setAddDialog] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState({ changing: false, value: 1 });
    const [orders, setOrders, getOrders] = useOrders({ page: currentPage.value });
    const [totalPage, setTotalPage] = React.useState(1);
    const [showNumberofBtn, setShowNumberofBtn] = React.useState(5);

    useEffect(() => {
        setTotalPage(orders?.data?.total_pages || 1);
    }, [orders]);

    useEffect(() => {
        getOrders({ page: currentPage.value }).then(() => {
            setCurrentPage(prev => ({ ...prev, changing: false }));
        });
    }, [currentPage.value, addDialog]);

    return (
        <>
            <>
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold">Product orders</p>
                    <Dialog open={addDialog}>
                        <DialogTrigger
                            onClick={e => setAddDialog(true)}
                            className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
                        >
                            + Add New order
                        </DialogTrigger>
                        <DialogContent
                            close={setAddDialog}
                            className="sm:max-w-[450px]"
                        >
                            <OrderModal setAddDialog={setAddDialog} activePage={currentPage.value} />
                        </DialogContent>
                    </Dialog>
                </div>
                {console.log('orders', orders)}
                <div className="overflow-x-auto relative bg-white min-h-[200px] rounded-lg">
                    {!orders?.loading && orders?.data && orders?.data?.orders?.length > 0
                        && <>
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
                                    {!orders.loading && orders?.data?.orders.map((order, index) => (
                                        <tr className="" key={v4()}>
                                            <td className="px-6 py-4 text-sm capitalize">{order?.supplier?.supplier_name}</td>
                                            <td className="px-6 py-4 text-sm">
                                                {order.date_ordered}
                                            </td>
                                            <td className="px-6 py-4 text-sm">{order?.items_ordered}</td>
                                            <td className="px-2 py-4 text-sm ">
                                                <p className="bg-[#0AADA4] p-2 text-white rounded-full text-center">
                                                    {order.status}
                                                </p>
                                            </td>
                                            <td className="flex gap-4 px-6 py-4">
                                                <Button
                                                    variant="icon"
                                                    size="icon"
                                                    className="px-0"
                                                    onClick={e => {
                                                        setEditOrder(order);
                                                    }}
                                                >
                                                    <BsPencilFill className="text-[#0AADA4] text-xl" />
                                                </Button>
                                                {/* <Button
                                                    variant="icon"
                                                    size="icon"
                                                    className="px-0"
                                                    onClick={e => {
                                                        deleteOrder(order.id);
                                                    }}
                                                >
                                                    <IoTrashSharp className="text-[#EA2C6D] text-xl" />
                                                </Button> */}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Dialog open={editOrder && true || false}>
                                <DialogContent
                                    close={e => setEditOrder(false)}
                                    className="sm:max-w-[550px]"
                                >
                                    <EditOrder editOrder={editOrder} getOrders={getOrders} setEditOrder={e => setEditOrder(false)} activePage={currentPage?.value} />
                                </DialogContent>
                            </Dialog>
                            <Pagination className={'py-3 relative'}>
                                <PaginationContent className={orders?.loading && 'opacity-0'}>
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
                                {orders?.loading && <div className='absolute d-flex justify-content-center align-items-center top-2/4 -translate-y-2/4'>
                                    <Spinner show={true} width={40} height={40} />
                                </div>}
                            </Pagination>
                        </>
                        || <div className='absolute flex items-center justify-center w-full top-2/4 -translate-y-2/4'>
                            {orders?.loading && <Spinner show={true} width={40} height={40} /> || <p>There is No Orders.</p>}
                        </div>
                    }
                </div>
            </>
        </>
    );
}

export default Orders;
