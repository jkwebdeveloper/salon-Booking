import Button from "@/components/ui/button";
import { DatePicker } from "@/components/user/Home/FindNearByForm/datepicker";
import React, { useCallback, useEffect, useState } from "react";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
// } from "@/components/ui/pagination";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import UserModal from "./Modal/StaffModal/UserModal";
import AddTeam from "./Modal/StaffModal/AddTeam";
import { useSelector } from "react-redux";
import { GET } from "@/app/api/get";
import { PageLoader } from "@/components";
import { v4 } from "uuid";
import Image from "next/image";

const Staff = () => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);
  const [userModal, setUserModal] = useState(false);
  const [addTeam, setAddTeam] = useState(false);
  const [currentTab, setCurrentTab] = useState("schedule");
  const [loading, setLoading] = useState(true);
  const [editStaff, setEditStaff] = useState("");
  const [staffs, setStaffs] = useState([]);

  const changeTab = (tab = "basic") => setCurrentTab(tab);

  const getStaff = useCallback(async () => {
    setLoading(true);
    const res = await GET.request({
      url: "/vendor/get-all-staffs",
      token: vendor?.api_token,
    });
    setLoading(false);
    if (res && res.code == 200) {
      setStaffs(res.data);
    }
  }, []);

  useEffect(() => {
    currentTab == "staff" && getStaff();
  }, [currentTab]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button
          variant={currentTab == "schedule" ? "primary" : "disable"}
          onClick={(e) => changeTab("schedule")}
        >
          Staff Schedule
        </Button>
        <Button
          variant={currentTab == "staff" ? "primary" : "disable"}
          onClick={(e) => changeTab("staff")}
        >
          My staff
        </Button>
      </div>
      <div className="w-full p-4 space-y-3 bg-white rounded-xl">
        {/* Staff Schedule section  start */}
        {currentTab == "schedule" && (
          <>
            <p className="text-2xl font-semibold">Staff Schedule</p>
            <div className="flex items-end justify-between">
              <div className="border w-max rounded-md border-[#eae9e9]">
                <DatePicker />
              </div>
              {/* <Pagination className="w-0 mx-10">
                <PaginationContent>
                  <PaginationItem className="bg-[#FBE4FF] rounded-md p-3">
                    <IoIosArrowBack />
                  </PaginationItem>
                  <PaginationItem className="bg-[#FBE4FF] rounded-md p-3">
                    <IoIosArrowForward />
                  </PaginationItem>
                </PaginationContent>
              </Pagination> */}
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
                        className="text-[#8E8EA1] text-lg"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Jullie
                        </th>
                      </DialogTrigger>
                      <DialogContent
                        close={setUserModal}
                        className="sm:max-w-[550px]"
                      >
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
          </>
        )}
        {currentTab == "staff" && (
          <>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold">Staff List</p>
              <Dialog open={addTeam}>
                <DialogTrigger
                  onClick={(e) => setAddTeam(true)}
                  className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
                >
                  + Add New
                </DialogTrigger>
                <DialogContent
                  close={(e) => {
                    setAddTeam(false);
                    setEditStaff("");
                  }}
                  className="sm:max-w-[900px]"
                >
                  <DialogTitle>Add Team Member</DialogTitle>
                  <AddTeam
                    setAddTeam={setAddTeam}
                    setStaffs={setStaffs}
                    staffs={staffs}
                    setEditStaff={setEditStaff}
                    editStaff={editStaff}
                  />
                </DialogContent>
              </Dialog>
            </div>
            <hr />
            {(loading && <PageLoader />) || (
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {(staffs.length > 0 &&
                  staffs.map((staff, index) => {
                    return (
                      <div
                        key={v4()}
                        className="flex items-center justify-center py-5 rounded-lg shadow-lg"
                      >
                        <div className="space-y-5 text-center">
                          <div className="flex items-center justify-center w-16 h-16 mx-auto overflow-hidden bg-green-300 rounded-full">
                            {(staff.photo && (
                              <Image
                                src={
                                  process.env.NEXT_PUBLIC_SERVERURL +
                                  staff.photo
                                }
                                width={100}
                                height={100}
                              />
                            )) || <p className="text-xl text-white ">NS</p>}
                          </div>
                          <p className="text-xl">
                            {staff?.first_name} {staff?.last_name}
                          </p>
                          <Button
                            variant="primary"
                            onClick={(e) => {
                              setEditStaff(staff);
                              setAddTeam(true);
                            }}
                          >
                            Edit
                          </Button>
                        </div>
                      </div>
                    );
                  })) ||
                  "Staff Member Not Found"}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Staff;
