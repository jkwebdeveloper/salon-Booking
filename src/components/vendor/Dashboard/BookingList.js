import Button from "@/components/ui/button";
import React, { useState } from "react";
import { BsPencilFill } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import BookingModal from "./Modal/PlannerModal/BookingModal";

const BookingList = () => {
  const [bookingModal, setBookingModal] = useState(false);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">Customers</p>
        <Button variant="outline">All Bookings</Button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg font-[sans-serif]">
          <thead className="border-b-2 whitespace-nowrap">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                S.N.
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Customer Name
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Email
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Phone
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Book Date And Time
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Payment Mode
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Pricing
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Status
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="border-b-2 whitespace-nowrap">
            <tr className="">
              <td className="px-4 py-4 text-sm">1</td>
              <td className="px-4 py-4 text-sm">Jason Bully</td>
              <td className="px-4 py-4 text-sm">fgfg@gmail.com</td>
              <td className="px-4 py-4 text-sm">+1 2345678932</td>
              <td className="px-4 py-4 text-sm">2024-03-09 11:00</td>
              <td className="px-4 py-4 text-sm">Card</td>
              <td className="px-4 py-4 text-sm">£349</td>
              <td className="px-4 py-4 text-sm ">
                <p className="bg-[#EABB00] p-2 rounded-full text-center">
                  Pending
                </p>
              </td>
              <td className="flex gap-4 px-4 py-4">
                <Dialog open={bookingModal}>
                  <DialogTrigger
                    onClick={(e) => setBookingModal(true)}
                    className="text-[#EA2C6D] text-xl"
                  >
                    <BsPencilFill className="text-[#EA2C6D] text-xl" />
                  </DialogTrigger>
                  <DialogContent close={setBookingModal}>
                    <DialogTitle>Booking Info</DialogTitle>
                    <BookingModal setBookingModal={setBookingModal} />
                  </DialogContent>
                </Dialog>
              </td>
            </tr>
          </tbody>
          <tbody className="border-b-2 whitespace-nowrap">
            <tr className="">
              <td className="px-4 py-4 text-sm">1</td>
              <td className="px-4 py-4 text-sm">Jason Bully</td>
              <td className="px-4 py-4 text-sm">fgfg@gmail.com</td>
              <td className="px-4 py-4 text-sm">+1 2345678932</td>
              <td className="px-4 py-4 text-sm">2024-03-09 11:00</td>
              <td className="px-4 py-4 text-sm">Card</td>
              <td className="px-4 py-4 text-sm">£349</td>
              <td className="px-4 py-4 text-sm ">
                <p className="bg-[#29AD17] p-2 rounded-full text-center">
                  Approved
                </p>
              </td>
              <td className="flex gap-4 px-4 py-4">
                <BsPencilFill className="text-[#EA2C6D] text-xl" />
              </td>
            </tr>
          </tbody>
          <tbody className="border-b-2 whitespace-nowrap">
            <tr className="">
              <td className="px-4 py-4 text-sm">1</td>
              <td className="px-4 py-4 text-sm">Jason Bully</td>
              <td className="px-4 py-4 text-sm">fgfg@gmail.com</td>
              <td className="px-4 py-4 text-sm">+1 2345678932</td>
              <td className="px-4 py-4 text-sm">2024-03-09 11:00</td>
              <td className="px-4 py-4 text-sm">Card</td>
              <td className="px-4 py-4 text-sm">£349</td>
              <td className="px-4 py-4 text-sm ">
                <p className="bg-[#EA2C6D] p-2 rounded-full text-center">
                  Declined
                </p>
              </td>
              <td className="flex gap-4 px-4 py-4">
                <BsPencilFill className="text-[#EA2C6D] text-xl" />
              </td>
            </tr>
          </tbody>
          <tbody className=" whitespace-nowrap">
            <tr className="">
              <td className="px-4 py-4 text-sm">1</td>
              <td className="px-4 py-4 text-sm">Jason Bully</td>
              <td className="px-4 py-4 text-sm">fgfg@gmail.com</td>
              <td className="px-4 py-4 text-sm">+1 2345678932</td>
              <td className="px-4 py-4 text-sm">2024-03-09 11:00</td>
              <td className="px-4 py-4 text-sm">Card</td>
              <td className="px-4 py-4 text-sm">£349</td>
              <td className="px-4 py-4 text-sm ">
                <p className="bg-[#0AADA4] p-2 rounded-full text-center">
                  Completed
                </p>
              </td>
              <td className="flex gap-4 px-4 py-4">
                <BsPencilFill className="text-[#EA2C6D] text-xl" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingList;
