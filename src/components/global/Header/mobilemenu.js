import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { LuBookmark, LuEye, LuUser2, LuBadgePercent } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { TbUserCheck } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MdLogout } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { RiCustomerServiceLine } from "react-icons/ri";
import Image from "next/image";

function MobileMenu({ openSidebar = false, setOpenSidebar }) {
  return (
    <>
      <div
        className={`xl:hidden bg-white p-3 space-y-4  text-black absolute top-0 -left-0 z-50 min-h-screen min-w-[100%] ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-linear`}
      >
        <div className="flex items-center justify-between">
          <div>
            <Image
              src={"/static/images/logo.png"}
              alt="logo"
              loading="lazy"
              width={150}
              height={150}
            />
          </div>
          <div>
            <AiOutlineClose
              className="ml-auto text-2xl cursor-pointer"
              onClick={() => setOpenSidebar(false)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <LuUser2 className="text-lg" />
            <p>Profile</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <IoHeartOutline className="text-lg" />
            <p>Wishlist</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <CiStar className="text-lg" />
            <p>Favourite</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <LuBookmark className="text-lg" />
            <p>Saved Item</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <LuEye className="text-lg" />
            <p>Recently viewed</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <LuBadgePercent className="text-lg" />
            <p>Current Offers</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <RiCustomerServiceLine className="text-lg" />
            <p>Customer Services</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <TbUserCheck className="text-lg" />
            <p>My Refferals</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <FaMobileAlt className="text-lg" />
            <p>Get The PamperTree App</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <LuUser2 className="text-lg" />
            <p>Vouchers</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <TfiEmail className="text-lg" />
            <p>Contact Us</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <MdLogout className="text-lg text-red-600" />
            <p className="text-red-600">Logout</p>
          </div>
          <div>
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
        <hr className="w-full" />
      </div>
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="xl:hidden inset-0 z-10 fixed overflow-hidden backdrop-blur-sm bg-lightBlack bg-opacity-50 min-h-screen max-h-screen max-w-[100%]"
        ></div>
      )}
    </>
  );
}

export default MobileMenu;
