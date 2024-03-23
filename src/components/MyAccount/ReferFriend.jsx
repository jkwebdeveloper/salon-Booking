import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const ReferFriend = () => {
  return (
    <div className="p-3 space-y-4 bg-white rounded-md shadow-lg xl:p-5">
      <div className="flex items-center justify-between">
        <p className="text-xl text-[#25324B] font-semibold">Referral History</p>
        <Link href="/refer-friend">
          <Button variant="primary">Refer a friend</Button>
        </Link>
      </div>
      <div className="border inline-block border-[#C4C4C4] overflow-x-auto rounded-xl w-full">
        <table className="w-full overflow-x-auto leading-normal">
          <thead>
            <tr>
              <th className="px-4 py-4 tracking-wider text-left border-b-2">
                Date
              </th>
              <th className="px-2 py-4 tracking-wider text-left border-b-2">
                Name
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
        </table>
      </div>
    </div>
  );
};

export default ReferFriend;
