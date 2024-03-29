"use client";
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
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 } from "uuid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../../../public/static/images/spa_life.png";
import { Button } from "@/components";

const boxData = [
  {
    id: 1,
    image: image1,
    title: "Spa Life & Massage",
    titleoption: "(Couple Massage)",
    location: "Barnack, Cambridge 181.2 miles",
    rating: "4.0",
  },
  {
    id: 2,
    image: image1,
    title: "Spa Life & Massage",
    titleoption: "(Couple Massage)",
    location: "Barnack, Cambridge 181.2 miles",
    rating: "4.0",
  },
  {
    id: 3,
    image: image1,
    title: "Spa Life & Massage",
    titleoption: "(Couple Massage)",
    location: "Barnack, Cambridge 181.2 miles",
    rating: "4.0",
  },
  {
    id: 4,
    image: image1,
    title: "Spa Life & Massage",
    titleoption: "(Couple Massage)",
    location: "Barnack, Cambridge 181.2 miles",
    rating: "4.0",
  },
  {
    id: 5,
    image: image1,
    title: "Spa Life & Massage",
    titleoption: "(Couple Massage)",
    location: "Barnack, Cambridge 181.2 miles",
    rating: "4.0",
  },
  {
    id: 6,
    image: image1,
    title: "Spa Life & Massage",
    titleoption: "(Couple Massage)",
    location: "Barnack, Cambridge 181.2 miles",
    rating: "4.0",
  },
];

const Pampertree = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className="w-full space-y-4">
      <p className="text-2xl font-semibold text-black uppercase title heading">
        Deals On <span className="text-primary_color">Pamper Tree</span>
      </p>
      <div className="relative w-full">
        <Swiper
          // style={{
          //   "--swiper-pagination-color": "#FFBA08",
          //   "--swiper-pagination-bullet-inactive-color": "#999999",
          //   "--swiper-pagination-bullet-inactive-opacity": "1",
          //   "--swiper-pagination-bullet-size": "16px",
          //   "--swiper-pagination-bullet-horizontal-gap": "6px",
          //   " --swiper-pagination-bottom": "auto",
          //   "--swiper-pagination-top": "100%",
          // }}
          className="relative h-full"
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          direction={"horizontal"}
          // navigation={{
          //   prevEl: prevRef.current,
          //   nextEl: nextRef.current,
          //   enabled: true,
          // }}
          observer={true}
          parallax={true}
          observeParents={true}
          breakpoints={{
            200: {
              slidesPerView: 1.7,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {boxData.map((item) => (
            <SwiperSlide key={v4()}>
              <div className="relative w-full space-y-4" key={item.id}>
                <div
                  onClick={() => setIsFavourite(!isFavourite)}
                  className={`absolute top-3 right-3 ${isFavourite ? "bg-red-500" : "bg-[#b6b6b6]"
                    } rounded-full p-2 cursor-pointer`}
                >
                  {isFavourite ? (
                    <RiHeartFill className="text-2xl text-white" />
                  ) : (
                    <IoHeartOutline className="text-2xl text-white" />
                  )}
                </div>
                <div>
                  <div className="bg-white rounded-lg shadow-lg" key={item?.id}>
                    <div className="space-y-4">
                      <div>
                        <Image
                          src={'/static/images/spa_life.png'}
                          alt="spa life"
                          loading="lazy"
                          width={400}
                          height={300}
                          // fill
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-2 space-y-2 md:space-y-3">
                        <div className="">
                          <h1 className="text-sm font-semibold md:text-base">
                            {item?.title}
                            <span className="font-normal">
                              {item?.titleoption}
                            </span>
                          </h1>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-[#7f52861a] p-2 rounded-full">
                            <MdLocationPin className="text-lg text-primary_color" />
                          </div>
                          <div>
                            <p className="text-sm md:text-base">
                              {item?.location}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="flex items-center gap-2 md:gap-3">
                            <FaStar className="text-lg text-primary_color" />
                            <p className="text-sm md:text-base">
                              {item?.rating}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 md:gap-3">
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
                        <div className="flex flex-col items-center gap-3 md:flex-row">
                          <Button variant="secondary">
                            <IoIosEye className="text-base text-white" /> Quick view
                          </Button>
                          <Button variant="primary">
                            <GrCart className="text-base text-white" /> Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Pagination className="swiper-pagination" clickable={true} /> */}
      </div>
    </div>
  );
};

export default Pampertree;
