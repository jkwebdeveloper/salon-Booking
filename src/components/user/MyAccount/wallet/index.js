'use client';
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components";
import { PiTicket } from "react-icons/pi";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import WalletModal from "./WalletModal";

const Wallet = () => {
  const [withDraw, setWithDraw] = useState(false);
  const [addMoney, setAddMoney] = useState(false);
  return (
    <div className="p-3 space-y-4 bg-white rounded-md xl:p-5">
      <p className="text-xl text-[#25324B] font-semibold">Wallet</p>
      <div className="grid items-stretch grid-cols-1 gap-3 xl:grid-cols-3">
        <div className="relative h-full col-span-2 bg-cover bg-center rounded-xl bg-[url('/static/images/wallet-bg.png')] text-white flex flex-col items-center justify-center gap-4 py-4">
          <p>Toatal Balance</p>
          <p className="text-5xl font-bold ">£541.00</p>
          <div className="flex items-center justify-center gap-2">
            <Dialog open={withDraw}>
              <DialogTrigger onClick={(e) => setWithDraw(true)}>
                <Button variant="outline" className="border-white">
                  Withdraw
                </Button>
              </DialogTrigger>
              <DialogContent
                className="max-h-[90vh]"
                onInteractOutside={(e) => setWithDraw(false)}
                close={setWithDraw}
              >
                <DialogTitle>Withdraw Money</DialogTitle>
                <WalletModal setWithDraw={setWithDraw} />
              </DialogContent>
            </Dialog>
            <Dialog open={addMoney}>
              <DialogTrigger onClick={(e) => setAddMoney(true)}>
                <Button variant="outline" className="border-white">
                  + Add money
                </Button>
              </DialogTrigger>
              <DialogContent
                className="max-h-[90vh]"
                onInteractOutside={(e) => setAddMoney(false)}
                close={setAddMoney}
              >
                <DialogTitle>Add Money to Wallet</DialogTitle>
                <WalletModal setAddMoney={setAddMoney} />
              </DialogContent>
            </Dialog>
            {/* <Button variant="outline" className="border-white">
              Withdraw
            </Button> */}
            {/* <Button variant="outline" className="border-white">
              + Add money
            </Button> */}
          </div>
        </div>
        <div className="border rounded-xl border-1 border-[#DBDBDB] p-5">
          <div className="space-y-2">
            <h1 className="font-semibold">Add PamperTree Gift Card</h1>
            <p className="text-sm">
              Someone treated you? Save it for later by adding the gift card
              code here you can use it towards your next booking at checkout.
            </p>
            <label htmlFor="city" className="label_text">
              Enter gift card number
            </label>
            <div className="relative">
              <input
                type="test"
                name="city"
                className="bg-neutral-50 input_field icon"
                placeholder="e.g. 8U95 - Y3E8CQ - 39MPQ"
              />
              <PiTicket className="absolute top-2/4 -translate-y-2/4 left-[0.3rem]" />
            </div>
            <Button variant="primary" className="md:w-full">
              Add to your balance
            </Button>
          </div>
        </div>
      </div>
      <p className="text-xl text-[#25324B] font-semibold">Payment history</p>
      <div className="border inline-block border-[#C4C4C4] overflow-x-auto rounded-xl w-full">
        <table className="w-full overflow-x-auto leading-normal">
          <thead>
            <tr>
              <th className="px-4 py-4 tracking-wider text-left border-b-2">
                Date
              </th>
              <th className="px-2 py-4 tracking-wider text-left border-b-2">
                Transaction
              </th>
              <th className="px-2 py-4 tracking-wider text-left border-b-2">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <td className="px-4 py-4 text-sm tracking-wider text-left border-b">
              22 Feb 2024, 06:40 PM
            </td>
            <td className="px-2 py-4 text-sm tracking-wider text-left border-b">
              Refund from Spa Life & Massage
            </td>
            <td className="py-4 text-[#0AAD4B] font-semibold px-2 text-sm border-b text-left tracking-wider">
              + £394.00
            </td>
          </tbody>
          <tbody>
            <td className="px-4 py-4 text-sm tracking-wider text-left border-b">
              22 Feb 2024, 06:40 PM
            </td>
            <td className="px-2 py-4 text-sm tracking-wider text-left border-b">
              Added money to wallet
            </td>
            <td className="py-4 text-[#0AAD4B] font-semibold px-2 text-sm border-b text-left tracking-wider">
              + £394.00
            </td>
          </tbody>
          <tbody>
            <td className="px-4 py-4 text-sm tracking-wider text-left border-b">
              22 Feb 2024, 06:40 PM
            </td>
            <td className="px-2 py-4 text-sm tracking-wider text-left border-b">
              Paid to Moon massage
            </td>
            <td className="py-4 text-[#ED0000] font-semibold px-2 text-sm border-b text-left tracking-wider">
              - £26.00
            </td>
          </tbody>
          <tbody>
            <td className="px-4 py-4 text-sm tracking-wider text-left border-b">
              22 Feb 2024, 06:40 PM
            </td>
            <td className="px-2 py-4 text-sm tracking-wider text-left border-b">
              Paid to Spa Life & Massage
            </td>
            <td className="py-4 text-[#ED0000] font-semibold px-2 text-sm border-b text-left tracking-wider">
              - £98.00
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallet;
