import React from "react";
import { PiBellSimpleRingingFill } from "react-icons/pi";
import { BiSolidDetail } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { MdChangeCircle } from "react-icons/md";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const MobileSidebar = ({ openMobileSidebar = false, setOpenMobileSidebar }) => {
  return (
    <>
      <div
        className={`xl:hidden bg-white p-3 space-y-8 px-10  text-black absolute top-0 -left-0 z-[100] min-h-screen min-w-[100%] ${openMobileSidebar ? 'translate-x-0' : '-translate-x-full'
          } transition duration-300 ease-linear`}
      >
        <div className="flex items-center justify-between py-4">
          <div>
            <Image
              src={'/static/images/logo.png'}
              alt="logo"
              loading="lazy"
              width={150}
              height={150}
            />
          </div>
          <div>
            <AiOutlineClose
              className="ml-auto text-2xl cursor-pointer"
              onClick={() => setOpenMobileSidebar(false)}
            />
          </div>
        </div>
        <hr />
        <div className="space-y-14">
          <Link href="/vendor/alert-setting">
            <div className="flex items-center gap-5 pb-3 ">
              <PiBellSimpleRingingFill className="text-[#717579] text-2xl" />
              <p className="text-[#717579] text-lg">Alerts</p>
            </div>
          </Link>
          <Link href="/vendor/subscription">
            <div className="flex items-center gap-5 pb-3 ">
              <PiBellSimpleRingingFill className="text-[#717579] text-2xl" />
              <p className="text-[#717579] text-lg">Subscription</p>
            </div>
          </Link>
          <Link href="/vendor/featured-deals">
            <div className="flex items-center gap-5 pb-3 ">
              <PiBellSimpleRingingFill className="text-[#717579] text-2xl" />
              <p className="text-[#717579] text-lg">Featured & Deals</p>
            </div>
          </Link>
          <Link href="/vendor/salon-details">
            <div className="flex items-center gap-5 pb-3">
              <BiSolidDetail className="text-[#717579] text-2xl" />
              <p className="text-[#717579] text-lg">Salon Details</p>
            </div>
          </Link>
          <Link href="/vendor/working-hours">
            <div className="flex items-center gap-5 pb-3">
              <BiSolidDetail className="text-[#717579] text-2xl" />
              <p className="text-[#717579] text-lg">Working hours</p>
            </div>
          </Link>
          <Link href="/vendor/loaction-detail">
            <div className="flex items-center gap-5 pb-3">
              <ImLocation2 className="text-[#717579] text-2xl" />
              <p className="text-[#717579] text-lg">Location Details</p>
            </div>
          </Link>
          <Link href="/vendor/change-password">
            <div className="flex items-center gap-5 pb-3">
              <MdChangeCircle className="text-[#717579] text-2xl" />
              <p className="text-[#717579] text-lg">Change Password</p>
            </div>
          </Link>
        </div>
      </div>
      {openMobileSidebar && (
        <div
          onClick={() => setOpenMobileSidebar(false)}
          className="xl:hidden inset-0 z-10 fixed overflow-hidden backdrop-blur-sm bg-lightBlack bg-opacity-50 min-h-screen max-h-screen max-w-[100%]"
        ></div>
      )}
    </>
  )
}

export default MobileSidebar