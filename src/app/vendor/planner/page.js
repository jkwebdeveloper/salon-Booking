"use client";
import Button from "@/components/ui/button";
import { DatePicker } from "@/components/user/Home/FindNearByForm/datepicker";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import PlannerModal from "@/components/vendor/Dashboard/Modal/PlannerModal";
import Sidebar from "@/components/global/DashboardHeader/Sidebar";
const Planner = () => {
  const [appointmentModal, setAppointmentModal] = useState(false);
  return (
    <div className="flex items-start">
      <div className="h-fit min-h-[350px] md:block hidden md:w-[35%] lg:w-[20%] w-[90%] space-y-5 p-5 bg-white">
        <Sidebar />
      </div>
      <div className="md:w-4/5 w-[90%] mx-auto space-y-5 h-fit min-h-[350px] p-5 bg-[#f4f2f2]">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold">Customers</p>
          <div className="flex items-center gap-4">
            <Button variant="outline">Create new</Button>
            <Dialog open={appointmentModal} className="w-full">
              <DialogTrigger
                onClick={(e) => setAppointmentModal(true)}
                className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white capitalize transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
              >
                Booking list
              </DialogTrigger>
              <DialogContent
                close={setAppointmentModal}
                className="sm:max-w-[725px]"
              >
                <PlannerModal setAppointmentModal={setAppointmentModal} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="border w-max rounded-md border-[#eae9e9] bg-white">
          <DatePicker />
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full text-sm font-light text-center border rounded-lg border-neutral-200 dark:border-white/10 dark:text-white">
            <thead className="w-full font-medium bg-white border-b border-neutral-200 dark:border-white/10">
              <tr>
                <th
                  scope="col"
                  className="py-4 border-e border-neutral-200 dark:border-white/10"
                ></th>
                <th className="px-6 py-4 border-e border-neutral-200 dark:border-white">
                  Nuzami
                </th>
                <th className="px-6 py-4">Jullie</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-200 dark:border-white/10">
                <td className="py-4 font-medium whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                  1
                </td>
                <td className="col-span-2 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10"></td>
                <td className="col-span-2 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10"></td>
              </tr>
              <tr className="border-b border-neutral-200 dark:border-white/10">
                <td className="py-4 font-medium whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                  1
                </td>
                <td className="col-span-2 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10"></td>
                <td className="col-span-2 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10"></td>
              </tr>
              <tr className="border-b border-neutral-200 dark:border-white/10">
                <td className="py-4 font-medium whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                  1
                </td>
                <td className="col-span-2 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10"></td>
                <td className="col-span-2 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10"></td>
              </tr>
              <tr className="bg-white border-b border-neutral-200 dark:border-white/10">
                <td className="py-4 font-medium whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                  1
                </td>
                <td className="col-span-2 py-4 mx-3 text-left whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                  <p>Jimmy Adam</p>
                  {/* <div className="bg-[#0AADA4]">1</div> */}
                </td>
                <td className="col-span-2 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10"></td>
              </tr>
              <tr className="border-b border-neutral-200 dark:border-white/10">
                <td className="py-4 font-medium whitespace-nowrap border-e border-neutral-200 dark:border-white/10">
                  1
                </td>
                <td className="col-span-2 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10"></td>
                <td className="col-span-2 py-4 whitespace-nowrap border-e border-neutral-200 dark:border-white/10"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Planner;
