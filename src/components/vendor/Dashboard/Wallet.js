import Button from "@/components/ui/button";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import WithdrawModal from "./Modal/WalletModal/WithdrawModal";

const Wallet = () => {
  const [withDraw, setwithDraw] = useState(false);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <div className="bg-gradient-to-r from-[#711F7E] py-9 px-5 to-[#14DBD0] flex items-center justify-start rounded-xl">
          <div className="flex items-center gap-5">
            <p className="flex items-center justify-center w-16 h-16 m-3 text-4xl font-bold text-white border-2 border-white rounded-full">
              £
            </p>
            <div className="text-white">
              <p className="text-lg ">Available Balance</p>
              <p className="text-4xl font-bold">£1048.00</p>
            </div>
          </div>
        </div>
        <div className="px-5 pb-3 space-y-6 bg-white pt-9 rounded-xl">
          <div className="">
            <p className="text-xl font-semibold">Set withdraw account</p>
            <p className="text-[#666666] text-sm">(Bank currently selected)</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="primary">Configure</Button>
            <Dialog open={withDraw}>
              <DialogTrigger
                onClick={(e) => setwithDraw(true)}
                className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none  bg-[#0AADA4] hover:bg-[#0b645f]  active:scale-90 "
              >
                Withdraw
              </DialogTrigger>
              <DialogContent close={setwithDraw}>
                <DialogTitle>Set withdraw method</DialogTitle>
                <WithdrawModal setwithDraw={setwithDraw} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <p className="text-2xl font-semibold">Recent transaction</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg font-[sans-serif]">
          <thead className="border-b-2 whitespace-nowrap">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Date
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Method
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Amount
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="border-b-2 whitespace-nowrap">
            <tr className="">
              <td className="px-4 py-4 text-sm">Feb 1, 2024, 08:22 AM</td>
              <td className="px-4 py-4 text-sm">Bank Transfer</td>
              <td className="px-4 py-4 text-sm">£250.00</td>
              <td className="px-2 py-4 text-sm ">
                <p className="bg-[#EABB00] p-2 rounded-full text-center">
                  Pending
                </p>
              </td>
            </tr>
          </tbody>
          <tbody className="border-b-2 whitespace-nowrap">
            <tr className="">
              <td className="px-4 py-4 text-sm">Feb 1, 2024, 08:22 AM</td>
              <td className="px-4 py-4 text-sm">Bank Transfer</td>
              <td className="px-4 py-4 text-sm">£250.00</td>
              <td className="px-2 py-4 text-sm ">
                <p className="bg-[#0AADA4] text-white p-2 rounded-full text-center">
                  In Progress
                </p>
              </td>
            </tr>
          </tbody>
          <tbody className="border-b-2 whitespace-nowrap">
            <tr className="">
              <td className="px-4 py-4 text-sm">Feb 1, 2024, 08:22 AM</td>
              <td className="px-4 py-4 text-sm">Bank Transfer</td>
              <td className="px-4 py-4 text-sm">£250.00</td>
              <td className="px-2 py-4 text-sm ">
                <p className="bg-[#29AD17] text-white p-2 rounded-full text-center">
                  Completed
                </p>
              </td>
            </tr>
          </tbody>
          <tbody className="border-b-2 whitespace-nowrap">
            <tr className="">
              <td className="px-4 py-4 text-sm">Feb 1, 2024, 08:22 AM</td>
              <td className="px-4 py-4 text-sm">Bank Transfer</td>
              <td className="px-4 py-4 text-sm">£250.00</td>
              <td className="px-2 py-4 text-sm ">
                <p className="bg-[#29AD17] text-white p-2 rounded-full text-center">
                  Completed
                </p>
              </td>
            </tr>
          </tbody>
          <tbody className="whitespace-nowrap">
            <tr className="">
              <td className="px-4 py-4 text-sm">Feb 1, 2024, 08:22 AM</td>
              <td className="px-4 py-4 text-sm">Bank Transfer</td>
              <td className="px-4 py-4 text-sm">£250.00</td>
              <td className="px-2 py-4 text-sm ">
                <p className="bg-[#29AD17] text-white p-2 rounded-full text-center">
                  Completed
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallet;
