import Button from "@/components/ui/button";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const OrderModal = () => {
  const [currentTab, setCurrentTab] = useState("action");

  return (
    <div className="w-full space-y-3">
      {currentTab == "action" && (
        <>
          <div
            className="w-full cursor-pointer flex justify-between items-center"
            onClick={() => setCurrentTab("fedex")}
          >
            <div className="flex-row">
              <p className="text-lg font-semibold">FedEx</p>
              <p className="text-sm">2 Products</p>
            </div>
            <IoIosArrowForward />
          </div>
          <hr />
          <div
            className="w-full cursor-pointer flex justify-between items-center"
            onClick={() => setCurrentTab("ups")}
          >
            <div className="flex-row">
              <p className="text-lg font-semibold">UPS</p>
              <p className="text-sm">1 Products</p>
            </div>
            <IoIosArrowForward />
          </div>
        </>
      )}
      {currentTab == "fedex" && (
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
                  <td className="px-6 py-4 text-sm">Face wash</td>
                  <td className="px-6 py-4 text-sm">7</td>
                  <td className="px-6 py-4 text-sm flex items-center gap-2">
                    <p className="px-3 rounded-md bg-[#0AADA4] text-white text-2xl">
                      -
                    </p>
                    <p className="p-2 rounded-md border bg-[#D9D9D9]">25</p>
                    <p className="px-3 rounded-md bg-[#0AADA4] text-white text-2xl">
                      +
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      {currentTab == "ups" && (
        <div className="space-y-4">
          <div className="flex items-center gap-6">
            <div className="flex-row">
              <p>Order date</p>
              <p>29/04/2024 10:03 AM</p>
            </div>
            <div className="flex-row">
              <p>Status</p>
              <Button variant="primary">Ordered</Button>
            </div>
          </div>
          <table className="min-w-full rounded-lg font-[sans-serif]">
            <thead className="border-b-2 bg-[#F2F2F2] whitespace-nowrap">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold text-left">
                  Product
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-left">
                  In Stock
                </th>
              </tr>
            </thead>
            <tbody className="border-b-2 whitespace-nowrap">
              <tr className="">
                <td className="px-6 py-4 text-sm">Face wash</td>
                <td className="px-6 py-4 text-sm">7</td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center gap-3">
            <Button variant="primary">Mark as delivered</Button>
            <Button variant="outline">Cancel order</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderModal;
