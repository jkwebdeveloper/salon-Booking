import React from "react";
import { Banner, Button } from "@/components";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";

import { FaStar } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";

const WishList = () => {
  return (
    <>
      <div className="space-y-6">
        <Banner title="Wishlist Items" />
        <div className="container grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="w-full space-y-4 ">
            <div>
              <div className="mx-1 bg-white rounded-lg shadow-lg">
                <Image
                  src={"/static/images/spa_life.png"}
                  alt="spa life"
                  loading="lazy"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="p-3 mb-5 space-y-2 md:space-y-3">
                  <div className="">
                    <h1 className="text-sm font-semibold md:text-base">
                      Spa Life & Massage
                      <span className="font-normal">(Banstead)</span>
                    </h1>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#7f52861a] p-2 rounded-full">
                      <MdLocationPin className="text-sm text-primary_color" />
                    </div>
                    <div>
                      <p className="text-sm md:text-base">
                        Barnack, Cambridge 181.2 miles
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="flex items-center gap-2 md:gap-3">
                      <FaStar className="text-sm text-primary_color" />
                      <p className="text-sm md:text-base">4.0</p>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="bg-[#29AD17] p-2 rounded-full">
                        <FaWhatsapp className="text-sm text-white" />
                      </div>
                      <div className="bg-[#4664A0] p-2 rounded-full">
                        <ImFacebook className="text-sm text-white" />
                      </div>
                      <div className="bg-[#000] p-2 rounded-full">
                        <BsTwitterX className="text-sm text-white" />
                      </div>
                      <div className="bg-[#A4A4A4] p-2 rounded-full">
                        <LuBookmark className="text-sm text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-2xl font-semibold text-primary_color">
                      £249{" "}
                      <span className="line-through text-[#898989] font-normal text-base">
                        £289
                      </span>
                    </p>
                    <p className="text-base font-semibold text-green_color">
                      {" "}
                      30% OFF
                    </p>
                  </div>
                  <div className="flex flex-col items-center w-full gap-3 md:flex-row">
                    <Button variant="danger" className="flex-1 px-0">
                      Remove
                    </Button>
                    <Button variant="primary" className="flex-1 px-0">
                      Schedule now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
