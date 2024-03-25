import React from "react";
import { Profile, MyBooking, Card, Wallet, ReferFriend, ChangePassword } from "@/components";

const MainDetail = ({ tabMenu, user }) => {
  return (
    <>
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
    </>
  );
};

export default MainDetail;
