import React, { useEffect } from "react";
import {
  Profile,
  MyBooking,
  Card,
  Wallet,
  ReferFriend,
  ChangePassword,
} from "@/components";
import Notification from "./Notification";

const MainDetail = ({ tabMenu, ...props }) => {
  return (
    <>
      {tabMenu === "Profile" ? (
        <Profile {...props} />
      ) : tabMenu === "Booking" ? (
        <MyBooking {...props} />
      ) : tabMenu === "Card" ? (
        <Card {...props} />
      ) : tabMenu === "Wallet" ? (
        <Wallet {...props} />
      ) : tabMenu === "Friend" ? (
        <ReferFriend {...props} />
      ) : tabMenu === "Change Password" ? (
        <ChangePassword {...props} />
      ) : tabMenu === "Notification settings" ? (
        <Notification {...props} />
      ) : null}
    </>
  );
};

export default MainDetail;
