import React, { useState } from "react";
import Upcoming from "./Upcoming";
import Reschedule from "./Reschedule";

const MyBooking = () => {
  const [bookingDetails, setBookingDetails] = useState(false);
  const [reschedule, setReschedule] = useState(false);
  const [upcoming, setUpcomming] = useState(false);

  return (
    <div className="space-y-4 bg-white shadow-lg xl:p-5 p-3">
      {bookingDetails === true ? null : (
        <div className="space-y-4">
          <p className="text-xl text-[#25324B] font-semibold">My Bookings</p>
          <div className="flex xl:flex-row flex-col md:justify-start text-left items-center gap-5">
            <button
              type="button"
              className="green_button uppercase"
              onClick={() => setUpcomming(true)}
            >
              Upcoming
            </button>
            <button
              type="button"
              className="disable_button uppercase hover:bg-[#0AADA4] hover:text-white"
              onClick={() => setReschedule(true)}
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
        </div>
      )}
      {reschedule === true ? (
        <Reschedule reschedule={reschedule} setReschedule={setReschedule} />
      ) : (
        <Upcoming
          setBookingDetails={setBookingDetails}
          bookingDetails={bookingDetails}
        />
      )}
    </div>
  );
};

export default MyBooking;
