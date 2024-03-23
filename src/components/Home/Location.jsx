"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";
import { v4 } from "uuid";

const locationData = [
  {
    id: 1,
    icons: <IoIosArrowForward />,
    location1: "Manchester",
    location2: "Salford",
    location3: "London",
    location4: "Belfast",
  },
  {
    id: 2,
    icons: <IoIosArrowForward />,
    location1: "Leeds",
    location2: "Bolton",
    location3: "Glasgow",
    location4: "Southampton",
  },
  {
    id: 3,
    icons: <IoIosArrowForward />,
    location1: "Liverpool",
    location2: "Bury",
    location3: "Bristol",
    location4: "Portsmouth",
  },
  {
    id: 4,
    icons: <IoIosArrowForward />,
    location1: "Oldham",
    location2: "Burnley",
    location3: "Edinburgh",
    location4: "Brighton",
  },
  {
    id: 5,
    icons: <IoIosArrowForward />,
    location1: "Stockport",
    location2: "Wigan",
    location3: "Leicester",
    location4: "Plymouth",
  },
  {
    id: 6,
    icons: <IoIosArrowForward />,
    location1: "Rochdale",
    location2: "Birmingham",
    location3: "Cardiff",
    location4: "Wolverhampton",
  },
  {
    id: 7,
    icons: <IoIosArrowForward />,
    location1: "Manchester",
    location2: "Salford",
    location3: "London",
    location4: "Belfast",
  },
];

const Location = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="w-full space-y-6">
      <p className="text-2xl font-semibold text-black uppercase title heading">
        Browse By <span className="text-primary_color">Location</span>
      </p>
      <div className="relative w-full">
        <Swiper
          slidesPerView={6}
          grid={{
            rows: 1,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination, Autoplay]}
          className="mySwiper"
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
            enabled: true,
          }}
          observer={true}
          parallax={true}
          observeParents={true}
          breakpoints={{
            200: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
        >
          {locationData.map((item) => (
            <SwiperSlide key={v4()}>
              <div className="space-y-3" key={item.id}>
                <div className="flex items-center gap-2">
                  <p className="text-[#CDCDCD]">{item.icons}</p>
                  <p>{item.location1}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-[#CDCDCD]">{item.icons}</p>
                  <p>{item.location2}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-[#CDCDCD]">{item.icons}</p>
                  <p>{item.location3}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-[#CDCDCD]">{item.icons}</p>
                  <p>{item.location4}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Location;
