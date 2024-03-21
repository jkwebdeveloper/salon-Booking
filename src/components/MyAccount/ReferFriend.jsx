import React from "react";
import { Button } from "../ui/button";

const ReferFriend = () => {
  return (
    <div className="space-y-4 bg-white shadow-lg xl:p-5 p-3">
      <div className="flex justify-between items-center">
        <p className="text-xl text-[#25324B] font-semibold">Referral History</p>
        <Button variant="primary">Refer a friend</Button>
      </div>
      <div className="border inline-block border-[#C4C4C4] overflow-x-auto rounded-xl w-full">
        <table className="w-full overflow-x-auto leading-normal">
          <thead>
            <tr>
              <th className="py-4 px-4 border-b-2 text-left tracking-wider">
                Date
              </th>
              <th className="py-4 px-2 border-b-2 text-left tracking-wider">
                Name
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
        </table>
      </div>
    </div>
  );
};

export default ReferFriend;
