'use client';
import React from "react";
import Image from "next/image";
import { LiaCopySolid } from "react-icons/lia";

import refer from "../../../public/static/images/refer.png";
import { Banner } from "@/components";

const ReferFriend = () => {
  return (
    <>
      <Banner title="Refer A Friend" />
      <div className="relative flex flex-col items-center justify-center w-1/2 gap-4 px-1 mx-auto md:flex-row md:px-5 xl:-top-8 lg:-top-8 md:-top-8 -top-8">
        <div className="p-3 space-y-4 bg-white shadow-lg xl:p-8">
          <div>
            <Image
              src={refer}
              alt=""
              loading="lazy"
              // width={300}
              // height={300}
              className="relative w-full"
              // layout="fill"
              // fill
              objectFit="cover"
            />
          </div>
          <p>
            If you are enjoying your beauty and wellbeing treatments and
            products, in fact are receiving compliments on your appearance, we
            are sure that your friends would appreciate your recommendations. In
            this case our “Refer us to a Friend” is perfect for both of you. You
            and your friend will receive a generous discount on your next
            bookings.
          </p>
          <p>
            Now that you are enjoying the benefits of promoting your business
            via PamperTree, you may know of friends within the beauty and
            wellbeing industry, offering similar services and products.
            Referring a friend has never been easier and you will be delighted
            to find that at PamperTree we are rewarding your help by our “Refer
            a Business” scheme. The current offer for every new business
            referral is $Month (the vare.g. 1 Month, 2 Months, etc)
          </p>
          <div className="bg-white mx-auto  rounded-2xl shadow-lg border-1 lg:border-[#e2e2e2] flex items-center gap-2 px-3 py-4">
            <input type="text" value="" />
            <button type="button" className="p-4 bg-primary_color">
              <LiaCopySolid />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferFriend;
