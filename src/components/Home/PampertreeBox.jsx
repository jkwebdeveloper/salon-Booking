import React, { useState } from "react";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import { RiHeartFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
import { IoIosEye } from "react-icons/io";
import { v4 } from "uuid";

const PampertreeBox = ({ boxData }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <div className="relative w-full space-y-4">
      <div
        onClick={() => setIsFavourite(!isFavourite)}
        className={`absolute top-3 right-3 ${
          isFavourite ? "bg-red-500" : "bg-[#b6b6b6]"
        } rounded-full p-2 cursor-pointer`}
      >
        {isFavourite ? (
          <RiHeartFill className="text-2xl text-white" />
        ) : (
          <IoHeartOutline className="text-2xl text-white" />
        )}
      </div>
      <div>
        {boxData.map((item) => (
          <div className="bg-white rounded-lg shadow-lg" key={v4()}>
            <div className="space-y-4">
              <div>
                <Image src={item?.image} alt="spa life" loading="lazy" />
              </div>
              <div className="px-2 space-y-4">
                <div className="">
                  <h1 className="text-base font-semibold">
                    {item?.title}
                    <span className="font-normal">{item?.titleoption}</span>
                  </h1>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#7f52861a] p-2 rounded-full">
                    <MdLocationPin className="text-lg text-primary_color" />
                  </div>
                  <div>
                    <p>{item?.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-3">
                    <FaStar className="text-lg text-primary_color" />
                    <p>{item?.rating}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#29AD17] p-2 rounded-full">
                      <FaWhatsapp className="text-lg text-white" />
                    </div>
                    <div className="bg-[#4664A0] p-2 rounded-full">
                      <ImFacebook className="text-lg text-white" />
                    </div>
                    <div className="bg-[#000] p-2 rounded-full">
                      <BsTwitterX className="text-lg text-white" />
                    </div>
                    <div className="bg-[#A4A4A4] p-2 rounded-full">
                      <LuBookmark className="text-lg text-white" />
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
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="flex items-center gap-2 green_button"
                  >
                    <IoIosEye className="text-base text-white" />
                    Quick view
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-2 primary_button"
                  >
                    <GrCart className="text-base text-white" />
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PampertreeBox;
