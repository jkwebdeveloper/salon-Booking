import Image from "next/image";
import React from "react";
import walletbg from "../../../public/static/images/wallet-bg.png";
const Wallet = () => {
  return (
    <div className="space-y-4 bg-white shadow-lg xl:p-5 p-3">
      <p className="text-xl text-[#25324B] font-semibold">Wallet</p>
      <div className="grid grid-cols-1 gap-3 xl:grid-cols-3">
        <div className="col-span-2 relative">
          <div className="relative">
            <Image
              src={walletbg}
              alt=""
              loading="lazy"
              className="w-full relative"
            />
            <div className="text-center absolute text-white top-[10%] left-36 space-y-4">
              <p>Toatal Balance</p>
              <p className="font-bold text-5xl ">£541.00</p>
              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  className="focus:outline-none uppercase border border-white text-white font-medium rounded-full active:scale-90 transition text-sm md:px-10 px-3 md:py-3 py-2"
                >
                  Withdraw
                </button>
                <button
                  type="button"
                  className="focus:outline-none uppercase border border-white text-white font-medium rounded-full active:scale-90 transition text-sm md:px-10 px-3 md:py-3 py-2"
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
            <button type="button" className="w-full primary_button uppercase">
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
              <th className="py-4 px-4 border-b-2 text-left tracking-wider">
                Date
              </th>
              <th className="py-4 px-2 border-b-2 text-left tracking-wider">
                Transaction
              </th>
              <th className="py-4 px-2 border-b-2 text-left tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <td className="py-4 px-4 text-sm border-b text-left tracking-wider">
              22 Feb 2024, 06:40 PM
            </td>
            <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
              Refund from Spa Life & Massage
            </td>
            <td className="py-4 text-[#0AAD4B] font-semibold px-2 text-sm border-b text-left tracking-wider">
              + £394.00
            </td>
          </tbody>
          <tbody>
            <td className="py-4 px-4 text-sm border-b text-left tracking-wider">
              22 Feb 2024, 06:40 PM
            </td>
            <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
              Added money to wallet
            </td>
            <td className="py-4 text-[#0AAD4B] font-semibold px-2 text-sm border-b text-left tracking-wider">
              + £394.00
            </td>
          </tbody>
          <tbody>
            <td className="py-4 px-4 text-sm border-b text-left tracking-wider">
              22 Feb 2024, 06:40 PM
            </td>
            <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
              Paid to Moon massage
            </td>
            <td className="py-4 text-[#ED0000] font-semibold px-2 text-sm border-b text-left tracking-wider">
              - £26.00
            </td>
          </tbody>
          <tbody>
            <td className="py-4 px-4 text-sm border-b text-left tracking-wider">
              22 Feb 2024, 06:40 PM
            </td>
            <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
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
