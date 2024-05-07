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
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 } from "uuid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SingleService from "@/components/ui/cards/singleservice";

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
              <SingleService item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Pagination className="swiper-pagination" clickable={true} /> */}
      </div>
    </div>
  );
};

export default Groupon;
