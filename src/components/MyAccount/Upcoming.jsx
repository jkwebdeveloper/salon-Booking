import React from "react";
import BookingDetails from "./BookingDetails";
import { LuEye } from "react-icons/lu";
import { TbCalendarStats } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

const Upcoming = ({ bookingDetails, setBookingDetails }) => {
  return (
    <>
      {bookingDetails === true ? (
        <BookingDetails
          setBookingDetails={setBookingDetails}
          bookingDetails={bookingDetails}
        />
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default Upcoming;
