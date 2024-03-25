import React from "react";
import { FiLogOut } from "react-icons/fi";
import { FaRegCreditCard, FaRegUserCircle } from "react-icons/fa";
import { TfiWallet } from "react-icons/tfi";
import { TbUserCheck, TbCalendarStats } from "react-icons/tb";
import { RiLock2Line } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useDispatch } from "react-redux";

import { logout } from "@/redux/features/authSlice";

const MainMenu = ({ onTabChange, tabMenu }) => {
  const dispatch = useDispatch();

  return (
    <div className="px-2 py-3 space-y-2 xl:py-5 xl:px-4">
      <p className="text-xl text-[#25324B] font-semibold title heading">
        My Account
      </p>
      {tabMenu === "Profile" ? (
        <div className="bg-[#711F7E1A]  text-primary_color xl:px-4 px-2 cursor-pointer">
          <div
            className="flex items-center gap-4 py-1 xl:py-3 "
            onClick={() => onTabChange("Profile")}
          >
            <FaRegUserCircle className="text-xl" />
            <p className="text-[15px] font-semibold text-primary_color">
              Profile
            </p>
          </div>
        </div>
      ) : (
        <div className="hover:bg-[#711F7E1A] hover:text-primary_color xl:px-4 px-2 cursor-pointer">
          <div
            className="flex items-center gap-4 py-1 xl:py-3 "
            onClick={() => onTabChange("Profile")}
          >
            <FaRegUserCircle className="text-xl" />
            <p className="text-[15px] font-medium text-black hover:text-primary_color">
              Profile
            </p>
          </div>
        </div>
      )}
      {tabMenu === "Booking" ? (
        <div className="bg-[#711F7E1A]  text-primary_color xl:px-4 px-2 cursor-pointer">
          <div
            className="flex items-center gap-4 py-1 xl:py-3 "
            onClick={() => onTabChange("Booking")}
          >
            <TbCalendarStats className="text-xl" />
            <p className="text-[15px] font-semibold text-primary_color">
              My Booking
            </p>
          </div>
        </div>
      ) : (
        <div className="hover:bg-[#711F7E1A] hover:text-primary_color xl:px-4 px-2 cursor-pointer">
          <div
            className="flex items-center gap-4 py-1 xl:py-3 "
            onClick={() => onTabChange("Booking")}
          >
            <TbCalendarStats className="text-xl" />
            <p className="text-[15px] font-medium text-black hover:text-primary_color">
              My Booking
            </p>
          </div>
        </div>
      )}
      {tabMenu === "Card" ? (
        <div className="bg-[#711F7E1A]  text-primary_color xl:px-4 px-2 cursor-pointer">
          <div
            className="flex items-center gap-4 py-1 xl:py-3 "
            onClick={() => onTabChange("Card")}
          >
            <FaRegCreditCard className="text-xl" />
            <p className="text-[15px] font-semibold text-primary_color">
              My Card
            </p>
          </div>
        </div>
      ) : (
        <div className="hover:bg-[#711F7E1A] hover:text-primary_color xl:px-4 px-2 cursor-pointer">
          <div
            className="flex items-center gap-4 py-1 xl:py-3 "
            onClick={() => onTabChange("Card")}
          >
            <FaRegCreditCard className="text-xl" />
            <p className="text-[15px] font-medium text-black hover:text-primary_color">
              My Card
            </p>
          </div>
        </div>
      )}
      {tabMenu === "Wallet" ? (
        <div className="bg-[#711F7E1A]  text-primary_color xl:px-4 px-2 cursor-pointer">
          <div
            className="flex items-center gap-4 py-1 xl:py-3 "
            onClick={() => onTabChange("Wallet")}
          >
            <TfiWallet className="text-xl" />
            <p className="text-[15px] font-semibold text-primary_color">
              Wallet
            </p>
          </div>
        </div>
      ) : (
        <div className="hover:bg-[#711F7E1A] hover:text-primary_color xl:px-4 px-2 cursor-pointer">
          <div
            className="flex items-center gap-4 py-1 xl:py-3 "
            onClick={() => onTabChange("Wallet")}
          >
            <TfiWallet className="text-xl" />
            <p className="text-[15px] font-medium text-black hover:text-primary_color">
              Wallet
            </p>
          </div>
        </div>
      )}
      {tabMenu === "Friend" ? (
        <div className="bg-[#711F7E1A]  text-primary_color xl:px-4 px-2 cursor-pointer">
          <div
            className="flex items-center gap-4 py-1 xl:py-3 "
            onClick={() => onTabChange("Friend")}
          >
            <TbUserCheck className="text-xl" />
            <p className="text-[15px] font-semibold text-primary_color">
              Refer Friend
            </p>
          </div>
        </div>
      ) : (
        <div className="hover:bg-[#711F7E1A] hover:text-primary_color xl:px-4 px-2 cursor-pointer">
          <div
            className="flex items-center gap-4 py-1 xl:py-3 "
            onClick={() => onTabChange("Friend")}
          >
            <TbUserCheck className="text-xl" />
            <p className="text-[15px] font-medium text-black hover:text-primary_color">
              Refer Friend
            </p>
          </div>
        </div>
      )}
      {tabMenu === "Change Password" ? (
        <div className="bg-[#711F7E1A]  text-primary_color xl:px-4 px-2 cursor-pointer">
          <div
            className="flex items-center gap-4 py-1 xl:py-3 "
            onClick={() => onTabChange("Change Password")}
          >
            <RiLock2Line className="text-xl" />
            <p className="text-[15px] font-semibold text-primary_color">
              Change Password
            </p>
          </div>
        </div>
      ) : (
        <div className="hover:bg-[#711F7E1A] hover:text-primary_color xl:px-4 px-2 cursor-pointer">
          <div
            className="flex items-center gap-4 py-1 xl:py-3 "
            onClick={() => onTabChange("Change Password")}
          >
            <RiLock2Line className="text-xl" />
            <p className="text-[15px] font-medium text-black hover:text-primary_color">
              Change Password
            </p>
          </div>
        </div>
      )}
      {tabMenu === "Notification settings" ? (
        <div className="bg-[#711F7E1A]  text-primary_color xl:px-4 px-2 cursor-pointer">
          <div
            className="flex items-center gap-4 py-1 xl:py-3 "
            onClick={() => onTabChange("Notification settings")}
          >
            <MdOutlineNotificationsActive className="text-xl" />
            <p className="text-[15px] font-semibold text-primary_color">
              Notification settings
            </p>
          </div>
        </div>
      ) : (
        <div className="hover:bg-[#711F7E1A] hover:text-primary_color xl:px-4 px-2 cursor-pointer">
          <div
            className="flex items-center gap-4 py-1 xl:py-3 "
            onClick={() => onTabChange("Notification settings")}
          >
            <MdOutlineNotificationsActive className="text-xl" />
            <p className="text-[15px] font-medium text-black hover:text-primary_color">
              Notification settings
            </p>
          </div>
        </div>
      )}
      <div
        className="px-2 py-1 cursor-pointer xl:px-4 xl:py-3"
      // onClick={() => setOpenModal(true)}
      >
        <div
          className="flex items-center gap-3 "
          onClick={() => dispatch(logout())}
        >
          <FiLogOut className="text-xl text-[#F10000]" />
          <p className="text-[15px] text-[#F10000] ">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
