import Button from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { FiAlertCircle } from 'react-icons/fi';
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
import { GET } from '@/app/api/get';
import { POST } from '@/app/api/post';

const EditOrder = ({ setEditOrder, activePage, getOrders, editOrder }) => {
     const { id, supplier } = editOrder;
     const vendor = useSelector(state => state.vendorAuth.vendor);
     const [cancelOrderDialog, setCancelOrderDialog] = React.useState(false);
     const [loading, setLoading] = React.useState(true);
     const [orderDetails, setOrderDetails] = React.useState({});
     const [formState, setFormState] = React.useState({
          loading: false,
          error: "",
          success: "",
     });
     const [currentPage, setCurrentPage] = React.useState({ changing: false, value: 1 });
     const [suppliers, setSuppliers, getSuppliers] = useSupplierList({ page: currentPage.value });

     const getOrderDetails = async () => {
          setLoading(true);
          const resp = await GET.request({ url: `/vendor/get-orders-details?orders_id=${id}`, token: vendor.api_token });
          if (resp && resp.code === 200) {
               setOrderDetails(resp.data);
               setLoading(false);
          }
     }

     const updateOrderStatus = async ({ status }) => {
          const resp = await POST.request({
               url: `/vendor/update-order-status`,
               form: {
                    orders_id: id,
                    status
               },
               token: vendor.api_token,
               formState,
               setFormState
          });
          if (resp && resp.code === 200) {
               setCancelOrderDialog(false);
               getOrders({ page: activePage });
               setEditOrder(false);
          }
     }

     useEffect(() => {
          id && getOrderDetails();
     }, [id]);


     return (
          <div className="w-full space-y-3">
               {!cancelOrderDialog && <>
                    <p className="text-[#1D1B23] -mt-2 font-semibold text-xl capitalize">
                         {supplier?.supplier_name}
                    </p>
                    <hr />
               </>}
               {loading
                    && <div className='flex items-center justify-center w-full min-h-[200px]'>
                         <Spinner show={true} width={40} height={40} />
                    </div>
                    || (cancelOrderDialog && !loading) && <>
                         <div className="w-full space-y-6 text-center">
                              <FiAlertCircle className="text-7xl text-[#DF0000] mx-auto" />
                              <p className="text-2xl text-[#1D1B23] font-bold">
                                   Are you sure you want to cancel this order?
                              </p>
                              <div className="flex items-center justify-center gap-3">
                                   <Button variant="danger" disabled={formState?.loading} onClick={e => updateOrderStatus({ status: 'Cancelled' })}>
                                        <Spinner
                                             show={formState?.loading}
                                             width="25"
                                             height="25"
                                             text="Cancel order"
                                        />
                                   </Button>
                                   <Button variant="outline" disabled={formState?.loading} onClick={e => setCancelOrderDialog(false)}>Discard</Button>
                              </div>
                         </div>
                    </>
                    || <>
                         <div className="w-full space-y-6">
                              <div className="flex items-center gap-12">
                                   <div className="flex-row space-y-2">
                                        <p className="text-[14px]">Order date</p>
                                        <p className="text-lg font-semibold">
                                             {orderDetails?.date_ordered}
                                        </p>
                                   </div>
                                   <div className="flex-row space-y-1">
                                        <p className="text-[14px]">Status</p>
                                        <Button type="button" className="focus:outline-none capitalize py-2 bg-[#29AD17] hover:bg-[#0b645f] text-white font-medium  active:scale-90 transition text-sm">
                                             {orderDetails?.status}
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
                                        {orderDetails?.details.length && orderDetails?.details.map((item, index) => (
                                             <tr className="w-full">
                                                  <td className="px-6 py-4 text-sm capitalize">
                                                       {item?.products?.name}
                                                  </td>
                                                  <td className="px-12 py-4 text-sm text-right ">
                                                       {item?.quantity}
                                                  </td>
                                             </tr>
                                        ))}
                                   </tbody>
                              </table>
                              <div className="flex items-center gap-3">
                                   {orderDetails?.status != 'Delivered' &&
                                        <>
                                             <Button variant="primary" disabled={formState?.loading} onClick={e => {
                                                  updateOrderStatus({ status: 'Delivered' });
                                             }}>
                                                  <Spinner
                                                       show={formState?.loading}
                                                       width="25"
                                                       height="25"
                                                       text="Mark as delivered"
                                                  />
                                             </Button>
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
                                                            formState={formState}
                                                            updateOrderStatus={updateOrderStatus}
                                                            setCancelOrderDialog={setCancelOrderDialog}
                                                       />
                                                  </DialogContent>
                                             </Dialog>
                                        </>}
                              </div>
                         </div>
                    </>}
          </div>
     );
};

export default EditOrder;
