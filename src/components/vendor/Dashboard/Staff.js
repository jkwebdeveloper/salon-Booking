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
import AddTeam from "./Modal/StaffModal/AddTeam";

const Staff = () => {
  const [userModal, setUserModal] = useState(false);
  const [addTeam, setAddTeam] = useState(false);
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button variant="primary">Staff Schedule</Button>
        <Button variant="disable">My Staff</Button>
      </div>
      <div className="w-full p-4 space-y-3 bg-white rounded-xl">
        {/* Staff Schedule section  start */}
        {/* <p className="text-2xl font-semibold">Staff Schedule</p>
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
        </div> */}
        {/* Staff Schedule section  end */}

        {/* My Staff section  start */}
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold">Staff List</p>
          <Dialog open={addTeam}>
            <DialogTrigger
              onClick={(e) => setAddTeam(true)}
              className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
            >
              + Add New
            </DialogTrigger>
            <DialogContent close={setAddTeam} className="sm:max-w-[900px]">
              <DialogTitle>Add Team Member</DialogTitle>
              <AddTeam setAddTeam={setAddTeam} />
            </DialogContent>
          </Dialog>
        </div>
        <hr />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex items-center justify-center py-5 rounded-lg shadow-lg">
            <div className="space-y-5 text-center">
              <p className="rounded-full mx-auto w-16 h-16 flex justify-center items-center text-xl bg-[#0AADA4] text-white">
                NS
              </p>
              <p className="text-xl">Nuzami</p>
              <Button variant="primary">Edit</Button>
            </div>
          </div>
          <div className="flex items-center justify-center py-5 rounded-lg shadow-lg">
            <div className="space-y-5 text-center">
              <p className="rounded-full mx-auto w-16 h-16 flex justify-center items-center text-xl bg-[#0AADA4] text-white">
                JR
              </p>
              <p className="text-xl">Jullie</p>
              <Button variant="primary">Edit</Button>
            </div>
          </div>
        </div>
        {/* My Staff section  end */}
      </div>
    </div>
  );
};

export default Staff;
