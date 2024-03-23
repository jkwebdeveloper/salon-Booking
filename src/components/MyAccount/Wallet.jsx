import Image from "next/image";
import React from "react";
import walletbg from "../../../public/static/images/wallet-bg.png";
const Wallet = () => {
  return (
    <div className="p-3 space-y-4 bg-white rounded-md shadow-lg xl:p-5">
      <p className="text-xl text-[#25324B] font-semibold">Wallet</p>
      <div className="grid grid-cols-1 gap-3 xl:grid-cols-3">
        <div className="relative col-span-2">
          <div className="relative">
            <Image
              src={walletbg}
              alt=""
              loading="lazy"
              className="relative w-full"
            />
            <div className="text-center absolute text-white top-[10%] left-36 space-y-4">
              <p>Toatal Balance</p>
              <p className="text-5xl font-bold ">£541.00</p>
              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  className="px-3 py-2 text-sm font-medium text-white uppercase transition border border-white rounded-full focus:outline-none active:scale-90 md:px-10 md:py-3"
                >
                  Withdraw
                </button>
                <button
                  type="button"
                  className="px-3 py-2 text-sm font-medium text-white uppercase transition border border-white rounded-full focus:outline-none active:scale-90 md:px-10 md:py-3"
                >
                  + Add money
                </button>
              </div>
            </div>
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
            <input
              type="test"
              name="city"
              className="input_field"
              placeholder="e.g. 8U95 - Y3E8CQ - 39MPQ"
            />
            <button type="button" className="w-full uppercase primary_button">
              Add to your balance
            </button>
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
