import React from "react";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("@/components/MyAccount/card"));
const Wallet = dynamic(() => import("@/components/MyAccount/Wallet"));
const Profile = dynamic(() => import("@/components/MyAccount/profile"));
const MyBooking = dynamic(() => import("@/components/MyAccount/MyBooking"));
const ReferFriend = dynamic(() => import("@/components/MyAccount/ReferFriend"));
const ChangePassword = dynamic(() => import("@/components/MyAccount/ChangePassword"));

const MainDetail = ({ tabMenu, user }) => {
  return (
    <div className="md:w-4/5 w-[90%] mx-auto space-y-5 rounded-md">
      {tabMenu === "Profile" ? (
        <Profile user={user} />
      ) : tabMenu === "Booking" ? (
        <MyBooking user={user} />
      ) : tabMenu === "Card" ? (
        <Card user={user} />
      ) : tabMenu === "Wallet" ? (
        <Wallet user={user} />
      ) : tabMenu === "Friend" ? (
        <ReferFriend user={user} />
      ) : tabMenu === "Change Password" ? (
        <ChangePassword user={user} />
      ) : null}
    </div>
  );
};

export default MainDetail;
