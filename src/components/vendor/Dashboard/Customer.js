import Button from "@/components/ui/button";
import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { BsPencilFill } from "react-icons/bs";
import CustomerModal from "./Modal/CustomerModal";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import EditCustomerModal from "./Modal/EditCustomerModal";
import EyeModal from "./Modal/EyeModal";

const Customer = () => {
  const [addCustomer, setAddCustomer] = useState(false);
  const [editCustomer, setEditCustomer] = useState(false);
  const [eyeModal, setEyeModal] = useState(false);
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
              <CustomerModal setAddCustomer={setAddCustomer} />
            </DialogContent>
          </Dialog>

          <Button variant="secondary">Export</Button>
          <Button variant="outline">Import</Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg font-[sans-serif]">
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
            <tr className="">
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
              <td className="px-6 py-4 text-sm">John Adam</td>
              <td className="px-6 py-4 text-sm">johmadam@gmail.com</td>
              <td className="px-6 py-4 text-sm">+1 1248554124</td>
              <td className="px-6 py-4 text-sm">3</td>
              <td className="px-6 py-4 text-sm">07/03/2024 5 hours ago</td>
              <td className="flex gap-4 px-6 py-4">
                <Dialog open={eyeModal}>
                  <DialogTrigger
                    onClick={(e) => setEyeModal(true)}
                    className="text-[#8E8EA1] text-xl"
                  >
                    <FaRegEye className="text-[#8E8EA1] text-xl" />
                  </DialogTrigger>
                  <DialogContent close={setEyeModal}>
                    <DialogTitle>John Adam</DialogTitle>
                    <hr />
                    <EyeModal setEyeModal={setEyeModal} />
                  </DialogContent>
                </Dialog>
                <Dialog open={editCustomer}>
                  <DialogTrigger
                    onClick={(e) => setEditCustomer(true)}
                    className="text-[#EA2C6D] text-xl"
                  >
                    <BsPencilFill className="text-[#EA2C6D] text-xl" />
                  </DialogTrigger>
                  <DialogContent close={setEditCustomer}>
                    <DialogTitle>Edit Customer</DialogTitle>
                    <EditCustomerModal setEditCustomer={setEditCustomer} />
                  </DialogContent>
                </Dialog>
              </td>
            </tr>
          </tbody>
          <tbody className="border-b-2 whitespace-nowrap">
            <tr className="even:bg-blue-50">
              <td className="w-8 pl-6">
                <input id="checkbox2" type="checkbox" className="hidden peer" />
                <label
                  htmlFor="checkbox2"
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
              <td className="px-6 py-4 text-sm">John Adam</td>
              <td className="px-6 py-4 text-sm">johmadam@gmail.com</td>
              <td className="px-6 py-4 text-sm">+1 1248554124</td>
              <td className="px-6 py-4 text-sm">3</td>
              <td className="px-6 py-4 text-sm">07/03/2024 5 hours ago</td>
              <td className="px-6 py-4">
                <button className="mr-4" title="Edit">
                  <FaRegEye className="text-[#8E8EA1] text-xl" />
                </button>
                <button className="mr-4" title="Delete">
                  <BsPencilFill className="text-[#EA2C6D] text-xl" />
                </button>
              </td>
            </tr>
          </tbody>
          <tbody className="border-b-2 whitespace-nowrap">
            <tr className="">
              <td className="w-8 pl-6">
                <input id="checkbox3" type="checkbox" className="hidden peer" />
                <label
                  htmlFor="checkbox3"
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
              <td className="px-6 py-4 text-sm">John Adam</td>
              <td className="px-6 py-4 text-sm">johmadam@gmail.com</td>
              <td className="px-6 py-4 text-sm">+1 1248554124</td>
              <td className="px-6 py-4 text-sm">3</td>
              <td className="px-6 py-4 text-sm">07/03/2024 5 hours ago</td>
              <td className="px-6 py-4">
                <button className="mr-4" title="Edit">
                  <FaRegEye className="text-[#8E8EA1] text-xl" />
                </button>
                <button className="mr-4" title="Delete">
                  <BsPencilFill className="text-[#EA2C6D] text-xl" />
                </button>
              </td>
            </tr>
          </tbody>
          <tbody className="border-b-2 whitespace-nowrap">
            <tr className="even:bg-blue-50">
              <td className="w-8 pl-6">
                <input id="checkbox4" type="checkbox" className="hidden peer" />
                <label
                  htmlFor="checkbox4"
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
              <td className="px-6 py-4 text-sm">John Adam</td>
              <td className="px-6 py-4 text-sm">johmadam@gmail.com</td>
              <td className="px-6 py-4 text-sm">+1 1248554124</td>
              <td className="px-6 py-4 text-sm">3</td>
              <td className="px-6 py-4 text-sm">07/03/2024 5 hours ago</td>
              <td className="px-6 py-4">
                <button className="mr-4" title="Edit">
                  <FaRegEye className="text-[#8E8EA1] text-xl" />
                </button>
                <button className="mr-4" title="Delete">
                  <BsPencilFill className="text-[#EA2C6D] text-xl" />
                </button>
              </td>
            </tr>
          </tbody>
          <tbody className="border-b-2 whitespace-nowrap">
            <tr className="">
              <td className="w-8 pl-6">
                <input id="checkbox5" type="checkbox" className="hidden peer" />
                <label
                  htmlFor="checkbox5"
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
              <td className="px-6 py-4 text-sm">John Adam</td>
              <td className="px-6 py-4 text-sm">johmadam@gmail.com</td>
              <td className="px-6 py-4 text-sm">+1 1248554124</td>
              <td className="px-6 py-4 text-sm">3</td>
              <td className="px-6 py-4 text-sm">07/03/2024 5 hours ago</td>
              <td className="px-6 py-4">
                <button className="mr-4" title="Edit">
                  <FaRegEye className="text-[#8E8EA1] text-xl" />
                </button>
                <button className="mr-4" title="Delete">
                  <BsPencilFill className="text-[#EA2C6D] text-xl" />
                </button>
              </td>
            </tr>
          </tbody>
          <tbody className="border-b-2 whitespace-nowrap">
            <tr className="even:bg-blue-50">
              <td className="w-8 pl-6">
                <input id="checkbox6" type="checkbox" className="hidden peer" />
                <label
                  htmlFor="checkbox6"
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
              <td className="px-6 py-4 text-sm">John Adam</td>
              <td className="px-6 py-4 text-sm">johmadam@gmail.com</td>
              <td className="px-6 py-4 text-sm">+1 1248554124</td>
              <td className="px-6 py-4 text-sm">3</td>
              <td className="px-6 py-4 text-sm">07/03/2024 5 hours ago</td>
              <td className="px-6 py-4">
                <button className="mr-4" title="Edit">
                  <FaRegEye className="text-[#8E8EA1] text-xl" />
                </button>
                <button className="mr-4" title="Delete">
                  <BsPencilFill className="text-[#EA2C6D] text-xl" />
                </button>
              </td>
            </tr>
          </tbody>
          <tbody className="border-b-2 whitespace-nowrap">
            <tr className="">
              <td className="w-8 pl-6">
                <input id="checkbox7" type="checkbox" className="hidden peer" />
                <label
                  htmlFor="checkbox7"
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
              <td className="px-6 py-4 text-sm">John Adam</td>
              <td className="px-6 py-4 text-sm">johmadam@gmail.com</td>
              <td className="px-6 py-4 text-sm">+1 1248554124</td>
              <td className="px-6 py-4 text-sm">3</td>
              <td className="px-6 py-4 text-sm">07/03/2024 5 hours ago</td>
              <td className="px-6 py-4">
                <button className="mr-4" title="Edit">
                  <FaRegEye className="text-[#8E8EA1] text-xl" />
                </button>
                <button className="mr-4" title="Delete">
                  <BsPencilFill className="text-[#EA2C6D] text-xl" />
                </button>
              </td>
            </tr>
          </tbody>
          <tbody className="whitespace-nowrap">
            <tr className="even:bg-blue-50">
              <td className="w-8 pl-6">
                <input id="checkbox8" type="checkbox" className="hidden peer" />
                <label
                  htmlFor="checkbox8"
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
              <td className="px-6 py-4 text-sm">John Adam</td>
              <td className="px-6 py-4 text-sm">johmadam@gmail.com</td>
              <td className="px-6 py-4 text-sm">+1 1248554124</td>
              <td className="px-6 py-4 text-sm">3</td>
              <td className="px-6 py-4 text-sm">07/03/2024 5 hours ago</td>
              <td className="px-6 py-4">
                <button className="mr-4" title="Edit">
                  <FaRegEye className="text-[#8E8EA1] text-xl" />
                </button>
                <button className="mr-4" title="Delete">
                  <BsPencilFill className="text-[#EA2C6D] text-xl" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer;
