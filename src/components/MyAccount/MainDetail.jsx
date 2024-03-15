import React from 'react'
import dynamic from 'next/dynamic';
const Profile = dynamic(() => import("./Profile"));
const MyBooking = dynamic(() => import("./MyBooking"));


const MainDetail = ({tabMenu}) => {
  return (
    <div className='md:w-4/5 w-[90%] mx-auto space-y-5'>
        {tabMenu === "Profile" ? (
            <Profile/>
        ): tabMenu === "Booking" ? (
            <MyBooking/>
        ): null}
    </div>
  )
}

export default MainDetail