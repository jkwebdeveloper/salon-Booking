"use client";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import { FaRegCreditCard, FaRegUserCircle } from "react-icons/fa";
import { TfiWallet } from "react-icons/tfi";
import { TbUserCheck, TbCalendarStats } from "react-icons/tb";
import { RiLock2Line } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";

const MainMenu = ({ onTabChange, tabMenu }) => {
  return (
    <div className="md:w-[40%] lg:w-[25%] w-[90%] mx-auto space-y-5">
      <div className="space-y-2 bg-white shadow-lg xl:py-5 py-3 xl:px-4 px-2">
        <p className="text-xl text-[#25324B] font-semibold title heading">
          My Account
        </p>
        {tabMenu === "Profile" ? (
          <div className="bg-[#711F7E1A]  text-primary_color xl:px-4 px-2 cursor-pointer xl:py-3 py-1">
            <div
              className="flex gap-4 items-center "
              onClick={() => onTabChange("Profile")}
            >
              <FaRegUserCircle className="text-xl" />
              <p className="text-[15px] font-semibold text-primary_color">
                Profile
              </p>
            </div>
          </div>
        ) : (
          <div className="hover:bg-[#711F7E1A] hover:text-primary_color xl:px-4 px-2 cursor-pointer xl:py-3 py-1">
            <div
              className="flex gap-4 items-center "
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
          <div className="bg-[#711F7E1A]  text-primary_color xl:px-4 px-2 cursor-pointer xl:py-3 py-1">
            <div
              className="flex gap-4 items-center "
              onClick={() => onTabChange("Booking")}
            >
              <TbCalendarStats className="text-xl" />
              <p className="text-[15px] font-semibold text-primary_color">
                My Booking
              </p>
            </div>
          </div>
        ) : (
          <div className="hover:bg-[#711F7E1A] hover:text-primary_color xl:px-4 px-2 cursor-pointer xl:py-3 py-1">
            <div
              className="flex gap-4 items-center "
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
          <div className="bg-[#711F7E1A]  text-primary_color xl:px-4 px-2 cursor-pointer xl:py-3 py-1">
            <div
              className="flex gap-4 items-center "
              onClick={() => onTabChange("Card")}
            >
              <FaRegCreditCard className="text-xl" />
              <p className="text-[15px] font-semibold text-primary_color">
                My Card
              </p>
            </div>
          </div>
        ) : (
          <div className="hover:bg-[#711F7E1A] hover:text-primary_color xl:px-4 px-2 cursor-pointer xl:py-3 py-1">
            <div
              className="flex gap-4 items-center "
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
          <div className="bg-[#711F7E1A]  text-primary_color xl:px-4 px-2 cursor-pointer xl:py-3 py-1">
            <div
              className="flex gap-4 items-center "
              onClick={() => onTabChange("Wallet")}
            >
              <TfiWallet className="text-xl" />
              <p className="text-[15px] font-semibold text-primary_color">
                Wallet
              </p>
            </div>
          </div>
        ) : (
          <div className="hover:bg-[#711F7E1A] hover:text-primary_color xl:px-4 px-2 cursor-pointer xl:py-3 py-1">
            <div
              className="flex gap-4 items-center "
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
          <div className="bg-[#711F7E1A]  text-primary_color xl:px-4 px-2 cursor-pointer xl:py-3 py-1">
            <div
              className="flex gap-4 items-center "
              onClick={() => onTabChange("Friend")}
            >
              <TbUserCheck className="text-xl" />
              <p className="text-[15px] font-semibold text-primary_color">
                Refer Friend
              </p>
            </div>
          </div>
        ) : (
          <div className="hover:bg-[#711F7E1A] hover:text-primary_color xl:px-4 px-2 cursor-pointer xl:py-3 py-1">
            <div
              className="flex gap-4 items-center "
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
          <div className="bg-[#711F7E1A]  text-primary_color xl:px-4 px-2 cursor-pointer xl:py-3 py-1">
            <div
              className="flex gap-4 items-center "
              onClick={() => onTabChange("Change Password")}
            >
              <RiLock2Line className="text-xl" />
              <p className="text-[15px] font-semibold text-primary_color">
                Change Password
              </p>
            </div>
          </div>
        ) : (
          <div className="hover:bg-[#711F7E1A] hover:text-primary_color xl:px-4 px-2 cursor-pointer xl:py-3 py-1">
            <div
              className="flex gap-4 items-center "
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
          <div className="bg-[#711F7E1A]  text-primary_color xl:px-4 px-2 cursor-pointer xl:py-3 py-1">
            <div
              className="flex gap-4 items-center "
              onClick={() => onTabChange("Notification settings")}
            >
              <MdOutlineNotificationsActive className="text-xl" />
              <p className="text-[15px] font-semibold text-primary_color">
                Notification settings
              </p>
            </div>
          </div>
        ) : (
          <div className="hover:bg-[#711F7E1A] hover:text-primary_color xl:px-4 px-2 cursor-pointer xl:py-3 py-1">
            <div
              className="flex gap-4 items-center "
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
          className="xl:px-4 px-2 cursor-pointer xl:py-3 py-1"
          // onClick={() => setOpenModal(true)}
        >
          <div
            className="flex gap-3 items-center "
            onClick={() => dispatch(handleLogout())}
          >
            <FiLogOut className="text-xl text-[#F10000]" />
            <p className="text-[15px] text-[#F10000] ">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
