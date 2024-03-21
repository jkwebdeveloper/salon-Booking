import React from "react";
import dynamic from "next/dynamic";
import Card from "./Card";
import Wallet from "./Wallet";
const Profile = dynamic(() => import("./Profile"));
const MyBooking = dynamic(() => import("./MyBooking"));
const ReferFriend = dynamic(() => import("./ReferFriend"));
const ChangePassword = dynamic(() => import("./ChangePassword"));

const MainDetail = ({ tabMenu }) => {
  return (
    <div className="md:w-4/5 w-[90%] mx-auto space-y-5">
      {tabMenu === "Profile" ? (
        <Profile />
      ) : tabMenu === "Booking" ? (
        <MyBooking />
      ) : tabMenu === "Card" ? (
        <Card />
      ) : tabMenu === "Wallet" ? (
        <Wallet />
      ) : tabMenu === "Friend" ? (
        <ReferFriend />
      ) : tabMenu === "Change Password" ? (
        <ChangePassword />
      ) : null}
    </div>
  );
};

export default MainDetail;
