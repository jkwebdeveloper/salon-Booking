import React from "react";
import dynamic from "next/dynamic";
import Card from "./Card";
import Wallet from "./Wallet";
const Profile = dynamic(() => import("./Profile"));
const MyBooking = dynamic(() => import("./MyBooking"));
const ReferFriend = dynamic(() => import("./ReferFriend"));
const ChangePassword = dynamic(() => import("./ChangePassword"));

const MainDetail = ({ tabMenu,user }) => {
  return (
    <div className="md:w-4/5 w-[90%] mx-auto space-y-5 rounded-md">
      {tabMenu === "Profile" ? (
        <Profile user={user} />
      ) : tabMenu === "Booking" ? (
        <MyBooking user={user} />
      ) : tabMenu === "Card" ? (
        <Card user={user}/>
      ) : tabMenu === "Wallet" ? (
        <Wallet user={user}/>
      ) : tabMenu === "Friend" ? (
        <ReferFriend user={user}/>
      ) : tabMenu === "Change Password" ? (
        <ChangePassword user={user}/>
      ) : null}
    </div>
  );
};

export default MainDetail;
