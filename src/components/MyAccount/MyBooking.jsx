import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { TbCalendarStats } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlineUser } from "react-icons/ai";

const MyBooking = () => {
  const [bookingDetails, setBookingDetails] = useState(false);
  return (
    <div className="space-y-4 bg-white shadow-lg xl:p-5 p-3">
      {bookingDetails ? (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-xl text-[#25324B] font-semibold">
              Booking Details
            </p>
            <IoMdClose
              className="text-2xl cursor-pointer"
              onClick={() => setBookingDetails(false)}
            />
          </div>
          <p>Booking ID: ABE21AEB</p>
          <div className="flex items-center justify-start gap-7">
            <div className="flex items-start justify-start gap-2">
              <TbCalendarStats className="text-2xl" />
              <div>
                <p className="font-semibold text-lg">
                  Thu 22 Feb 2024 at 10:00
                </p>
                <p>2 hr 25 min duration</p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-2">
              <TfiLocationPin className="text-2xl" />
              <div>
                <p className="font-semibold text-lg">Spa Life & Massage</p>
                <p>Street 420, Addington, London, EH1 1AE, UK</p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-2">
              <AiOutlineUser className="text-2xl" />
              <div>
                <p className="font-semibold text-lg">Nelson Mandela</p>
                <p>Employee</p>
              </div>
            </div>
          </div>
          <p className="text-sm">Overview</p>
          <hr className="w-full mt-3" />
          <div className="flex justify-between items-center">
            <p className="text-sm">Sports Massage</p>
            <p className="text-primary_color">£25.00</p>
          </div>
          <p className="text-sm">10 Mins</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            <p className="text-xl text-[#25324B] font-semibold">My Bookings</p>
            <div className="flex xl:flex-row flex-col md:justify-start text-left items-center gap-5">
              <button type="button" className="green_button uppercase">
                Upcoming
              </button>
              <button
                type="button"
                className="disable_button uppercase hover:bg-[#0AADA4] hover:text-white"
              >
                reschedule
              </button>
              <button
                type="button"
                className="disable_button uppercase hover:bg-[#0AADA4] hover:text-white"
              >
                Past
              </button>
              <button
                type="button"
                className="disable_button uppercase hover:bg-[#0AADA4] hover:text-white"
              >
                Cancelled
              </button>
            </div>
            <div className="flex xl:flex-row flex-col justify-between items-center">
              <p>Upcoming Bookings</p>
              <div className="">
                <input
                  type="text"
                  placeholder="Search here"
                  className="input_field w-full"
                />
                {/* <IoSearchOutline /> */}
              </div>
            </div>
            <div className="border inline-block border-[#C4C4C4] overflow-x-auto rounded-xl w-full">
              <table className="w-full overflow-x-auto leading-normal">
                <thead>
                  <tr>
                    <th className="py-4 px-2 border-b-2 text-left tracking-wider">
                      Booking ID
                    </th>
                    <th className="py-4 px-2 border-b-2 text-left tracking-wider">
                      Booking On
                    </th>
                    <th className="py-4 px-2 border-b-2 text-left tracking-wider">
                      Shop
                    </th>
                    <th className="py-4 px-2 border-b-2 text-left tracking-wider">
                      Service
                    </th>
                    <th className="py-4 px-2 border-b-2 text-left tracking-wider">
                      Booking Date
                    </th>
                    <th className="py-4 px-2 border-b-2 text-left tracking-wider">
                      Time slot
                    </th>
                    <th className="py-4 px-2 border-b-2 text-left tracking-wider">
                      Price{" "}
                    </th>
                    <th className="py-4 px-2 border-b-2 text-left tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    className="cursor-pointer"
                    onClick={() => setBookingDetails(true)}
                  >
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      #ABE21AEB
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      10:00 AM, 20 Feb 2024
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      Spa Life & Massage
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      3 Items
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      22 Feb 2024
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      10:00
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      £394.00
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      <div className="flex items-center gap-2">
                        <div className="bg-[#0AADA4] rounded-md p-2 text-white text-lg cursor-pointer">
                          <LuEye />
                        </div>
                        <div className="bg-primary_color rounded-md p-2 text-white text-lg cursor-pointer">
                          <TbCalendarStats />
                        </div>
                        <div className="bg-[#F20000] rounded-md p-2 text-white text-lg cursor-pointer">
                          <IoMdClose />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr
                    className="cursor-pointer"
                    onClick={() => setBookingDetails(true)}
                  >
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      #ABE21AEB
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      10:00 AM, 20 Feb 2024
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      Spa Life & Massage
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      3 Items
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      22 Feb 2024
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      10:00
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      £394.00
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      <div className="flex items-center gap-2">
                        <div className="bg-[#0AADA4] rounded-md p-2 text-white text-lg cursor-pointer">
                          <LuEye />
                        </div>
                        <div className="bg-primary_color rounded-md p-2 text-white text-lg cursor-pointer">
                          <TbCalendarStats />
                        </div>
                        <div className="bg-[#F20000] rounded-md p-2 text-white text-lg cursor-pointer">
                          <IoMdClose />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr
                    className="cursor-pointer"
                    onClick={() => setBookingDetails(true)}
                  >
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      #ABE21AEB
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      10:00 AM, 20 Feb 2024
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      Spa Life & Massage
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      3 Items
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      22 Feb 2024
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      10:00
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      £394.00
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      <div className="flex items-center gap-2">
                        <div className="bg-[#0AADA4] rounded-md p-2 text-white text-lg cursor-pointer">
                          <LuEye />
                        </div>
                        <div className="bg-primary_color rounded-md p-2 text-white text-lg cursor-pointer">
                          <TbCalendarStats />
                        </div>
                        <div className="bg-[#F20000] rounded-md p-2 text-white text-lg cursor-pointer">
                          <IoMdClose />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr
                    className="cursor-pointer"
                    onClick={() => setBookingDetails(true)}
                  >
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      #ABE21AEB
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      10:00 AM, 20 Feb 2024
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      Spa Life & Massage
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      3 Items
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      22 Feb 2024
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      10:00
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      £394.00
                    </td>
                    <td className="py-4 px-2 text-sm border-b text-left tracking-wider">
                      <div className="flex items-center gap-2">
                        <div className="bg-[#0AADA4] rounded-md p-2 text-white text-lg cursor-pointer">
                          <LuEye />
                        </div>
                        <div className="bg-primary_color rounded-md p-2 text-white text-lg cursor-pointer">
                          <TbCalendarStats />
                        </div>
                        <div className="bg-[#F20000] rounded-md p-2 text-white text-lg cursor-pointer">
                          <IoMdClose />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyBooking;
