import Button from "@/components/ui/button";
import React, { useCallback, useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { BsPencilFill } from "react-icons/bs";
import { useSelector } from "react-redux";

import CustomerModal from "./Modal/CustomerModal";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import EditCustomerModal from "./Modal/EditCustomerModal";
import EyeModal from "./Modal/EyeModal";
import { GET } from "@/app/api/get";
import { PageLoader } from "@/components";
import { v4 } from "uuid";


const Customer = () => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);
  const [addCustomer, setAddCustomer] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [editCustomer, setEditCustomer] = useState('');
  const [viewCustomer, setViewCustomer] = useState('');
  const [customers, setCustomers] = useState('');
  const [loading, setLoading] = useState(false);

  const getCustomers = useCallback(async () => {
    setLoading(true);
    const resp = await GET.request({ url: '/vendor/get-all-customer', token: vendor?.api_token });
    setLoading(false);
    if (resp && resp.code == 200) {
      setCustomers(resp.data);
    }
  }, []);

  useEffect(() => {
    getCustomers();
  }, []);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">Customers</p>
        <div className="flex items-center gap-4">
          <Dialog open={addCustomer}>
            <DialogTrigger
              onClick={(e) => setAddCustomer(true)}
              className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
            >
              + Add New
            </DialogTrigger>
            <DialogContent close={setAddCustomer}>
              <DialogTitle>Add Customer</DialogTitle>
              <CustomerModal setAddCustomer={setAddCustomer} setCustomers={setCustomers} customers={customers} />
            </DialogContent>
          </Dialog>

          <Button variant="secondary">Export</Button>
          <Button variant="outline">Import</Button>
        </div>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg">

        {loading && <PageLoader /> || customers?.length == 0 && <p className="px-2 py-10 text-center">No customers found</p> ||
          <table className="min-w-full rounded-lg font-[sans-serif]">
            <thead className="border-b-2 whitespace-nowrap">
              <tr>
                <th className="w-8 pl-6">
                  <input id="checkbox" type="checkbox" className="hidden peer" />
                  <label
                    htmlFor="checkbox"
                    className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-primary_color border border-gray-400 rounded overflow-hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full fill-white"
                      viewBox="0 0 520 520"
                    >
                      <path
                        d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                        data-name="7-Check"
                        data-original="#000000"
                      />
                    </svg>
                  </label>
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-left">
                  User name
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-left">
                  Email
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-left">
                  Phone
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-left">
                  Booking
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-left">
                  Last visit
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="border-b-2 whitespace-nowrap">
              {customers?.length > 0 && customers?.map((customer) => {
                return (
                  <tr className="" key={v4()}>
                    <td className="w-8 pl-6">
                      <input id="checkbox1" type="checkbox" className="hidden peer" />
                      <label
                        htmlFor="checkbox1"
                        className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-primary_color border border-gray-400 rounded overflow-hidden"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full fill-white"
                          viewBox="0 0 520 520"
                        >
                          <path
                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                            data-name="7-Check"
                            data-original="#000000"
                          />
                        </svg>
                      </label>
                    </td>
                    <td className="px-6 py-4 text-sm">{customer.first_name} {customer.last_name}</td>
                    <td className="px-6 py-4 text-sm">{customer?.email || '-'}</td>
                    <td className="px-6 py-4 text-sm">{customer?.phone_number || '-'}</td>
                    <td className="px-6 py-4 text-sm">{customer?.booking || '-'}</td>
                    <td className="px-6 py-4 text-sm">{customer?.last_visit || '-'}</td>
                    <td className="flex gap-4 px-6 py-4">
                      <Button variant="icon" size="icon" className="px-0" onClick={e => {
                        setEditDialog(true);
                        setViewCustomer(customer);
                      }}>
                        <FaRegEye className="text-[#8E8EA1] text-xl" />
                      </Button>
                      <Button variant="icon" size="icon" className="px-0" onClick={e => {
                        setEditDialog(true);
                        setEditCustomer(customer);
                      }}>
                        <BsPencilFill className="text-[#EA2C6D] text-xl" />
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>}
        <Dialog open={editDialog}>
          <DialogContent close={e => {
            setEditDialog(false);
            setEditCustomer('');
            setViewCustomer('');
          }} className="sm:max-w-[800px]">
            {editCustomer &&
              <DialogTitle>Edit Customer</DialogTitle> ||
              <><DialogTitle>John Adam</DialogTitle><hr /></>
            }
            {editCustomer &&
              <EditCustomerModal setEditDialog={setEditDialog} setEditCustomer={setEditCustomer} editCustomer={editCustomer} setCustomers={setCustomers} customers={customers} /> ||
              <EyeModal
                hooks={{ setEditDialog, setViewCustomer, setCustomers, setEditCustomer }}
                data={{ viewCustomer, customers }}
              />
            }
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Customer;
