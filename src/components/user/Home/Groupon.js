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
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 } from "uuid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const boxData = [
  {
    id: 1,
    image: "/static/images/groupon1.png",
    title: "General Spa Admission at King Spa",
    location: "Barnack, Cambridge 181.2 miles",
    rating: "4.0",
  },
  {
    id: 2,
    image: "/static/images/groupon2.png",
    title: "General Spa Admission at King Spa",
    location: "Barnack, Cambridge 181.2 miles",
    rating: "4.0",
  },
  {
    id: 3,
    image: "/static/images/groupon3.png",
    title: "General Spa Admission at King Spa",
    location: "Barnack, Cambridge 181.2 miles",
    rating: "4.0",
  },
  {
    id: 4,
    image: "/static/images/groupon4.png",
    title: "General Spa Admission at King Spa",
    location: "Barnack, Cambridge 181.2 miles",
    rating: "4.0",
  },
  {
    id: 5,
    image: "/static/images/groupon1.png",
    title: "General Spa Admission at King Spa",
    location: "Barnack, Cambridge 181.2 miles",
    rating: "4.0",
  },
];

const Groupon = () => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <div className="w-full space-y-4">
      <p className="text-2xl font-semibold text-black uppercase title heading">
        Top Deals on{" "}
        <span className="bg-gradient-to-r bg-clip-text text-transparent from-[#01A90E]/100 to-[#68EE14]/100">
          groupon
        </span>
      </p>
      <div className="relative w-full">
        <Swiper
          style={{
            "--swiper-pagination-color": "#711F7E",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            // "--swiper-pagination-bullet-size": "16px",
            // "--swiper-pagination-bullet-horizontal-gap": "6px",
            // " --swiper-pagination-bottom": "auto",
            // "--swiper-pagination-top": "100%",
          }}
          className="relative h-full"
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
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
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {boxData.map((item) => (
            <SwiperSlide key={v4()}>
              <div className="relative w-full space-y-4">
                <div
                  onClick={() => setIsFavourite(!isFavourite)}
                  className={`absolute top-3 right-3 ${isFavourite} rounded-full p-2 cursor-pointer`}
                >
                  {isFavourite ? (
                    <RiHeartFill className="text-2xl text-red-500" />
                  ) : (
                    <IoHeartOutline className="text-2xl text-white" />
                  )}
                </div>
                <div>
                  <div
                    className="mx-2 bg-white rounded-lg shadow-lg"
                    key={item?.id}
                  >
                    <div className="space-y-4">
                      <div>
                        <Image
                          src={item?.image}
                          alt="spa life"
                          loading="lazy"
                          width={200}
                          height={200}
                          // fill
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="px-4 py-3 space-y-2 md:space-y-3">
                        <div className="">
                          <h1 className="text-sm font-semibold md:text-base">
                            {item?.title}
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
                            <FaStar className="text-lg text-[#FFCC00]" />
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

export default Groupon;
