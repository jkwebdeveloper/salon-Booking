import Button from "@/components/ui/button";
import { DatePicker } from "@/components/user/Home/FindNearByForm/datepicker";
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import UserModal from "./Modal/StaffModal/UserModal";

const Staff = () => {
  const [userModal, setUserModal] = useState(false);
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button variant="primary">Staff Schedule</Button>
        <Button variant="disable">My Staff</Button>
      </div>
      <div className="w-full p-4 space-y-3 bg-white rounded-xl">
        <p className="text-2xl font-semibold">Staff Schedule</p>
        <div className="flex items-end justify-between">
          <div className="border w-max rounded-md border-[#eae9e9]">
            <DatePicker />
          </div>
          <Pagination className="w-0 mx-10">
            <PaginationContent>
              <PaginationItem className="bg-[#FBE4FF] rounded-md p-3">
                <IoIosArrowBack />
              </PaginationItem>
              <PaginationItem className="bg-[#FBE4FF] rounded-md p-3">
                <IoIosArrowForward />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        <hr />

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-center">
            <thead className="text-white bg-primary_color">
              <tr>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="flex-col px-6 py-3 ">
                  <p className="text-lg">Monday</p>
                  <p>11.03</p>
                </th>
                <th scope="col" className="flex-col px-6 py-3 ">
                  <p className="text-lg">Tuesday</p>
                  <p>11.03</p>
                </th>
                <th scope="col" className="flex-col px-6 py-3 ">
                  <p className="text-lg">Wednesday</p>
                  <p>12.03</p>
                </th>
                <th scope="col" className="flex-col px-6 py-3 ">
                  <p className="text-lg">Thursday</p>
                  <p>13.03</p>
                </th>
                <th scope="col" className="flex-col px-6 py-3 ">
                  <p className="text-lg">Friday</p>
                  <p>14.03</p>
                </th>
                <th scope="col" className="flex-col px-6 py-3 ">
                  <p className="text-lg">Saturday</p>
                  <p>15.03</p>
                </th>
                <th scope="col" className="flex-col px-6 py-3 ">
                  <p className="text-lg">Sunday</p>
                  <p>16 .03</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <Dialog open={userModal}>
                  <DialogTrigger
                    onClick={(e) => setUserModal(true)}
                    className="text-[#8E8EA1] text-xl"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Jullie
                    </th>
                  </DialogTrigger>
                  <DialogContent close={setUserModal}>
                    <UserModal setUserModal={setUserModal} />
                  </DialogContent>
                </Dialog>

                <td className="py-4 ">10:00 - 18:00</td>
                <td className="py-4 ">10:00 - 18:00</td>
                <td className="py-4 ">10:00 - 18:00</td>
                <td className="py-4 ">10:00 - 18:00</td>
                <td className="py-4 ">10:00 - 18:00</td>
                <td className="py-4 ">10:00 - 18:00</td>
                <td className="py-4 ">10:00 - 18:00</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Nuzami
                </th>
                <td className="py-4 ">10:00 - 18:00</td>
                <td className="py-4 ">10:00 - 18:00</td>
                <td className="py-4 ">10:00 - 18:00</td>
                <td className="py-4 ">10:00 - 18:00</td>
                <td className="py-4 ">10:00 - 18:00</td>
                <td className="py-4 ">10:00 - 18:00</td>
                <td className="py-4 ">10:00 - 18:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Staff;
