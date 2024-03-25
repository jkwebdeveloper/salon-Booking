'use client';
import React from "react";
import Image from "next/image";

import { Banner, Button } from "@/components";

const ReferFriend = () => {
  return (
    <>
      <Banner title="Refer A Friend" />
      <div className="container relative max-w-[1000px] mx-auto  md:mt-[-3rem] mt-3 md:mb-10 z-[2]">
        <div className="p-3 space-y-4 bg-white shadow-lg xl:p-8 rounded-xl ring-1 ring-primary/5">
          <div>
            <Image
              src={'/static/images/refer.svg'}
              alt=""
              loading="lazy"
              width={300}
              height={300}
              className="relative w-full max-w-[600px] mx-auto"
              // layout="fill"
              // fill
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col gap-4 pt-10 font-light text-center text-neutral-500">
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
            <div>
              <h3 className="mt-5 text-xl font-semibold text-black">User a <span className="text-primary">referral link:</span></h3>
              <div className="flex justify-center gap-2 px-3 py-1 rounded-md ring-1 ring-neutral-300 w-full md:max-w-[750px] mx-auto my-5">
                <input type="text" value="https://pampertree.co.uk/register?referral_key=EN7O3029" className="flex-1  md:max-w-full max-w-[50%]" />
                <Button variant="primary" className="rounded-md" >Copy</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferFriend;
