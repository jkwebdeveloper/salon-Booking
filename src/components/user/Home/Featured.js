"use client";
import React, { useEffect, useRef, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Vendor from "@/components/ui/cards/vendor";
import { GET } from "@/app/api/get";
import { v4 } from "uuid";

const Featured = () => {
  const [featuredVendor, setFeaturedVendor] = useState([]);

  const [beginAndEnd, setBeginAndEnd] = useState({
    isEnd: false,
    isBegin: true,
  });
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const getVendor = async () => {
    const resp = await GET.request({ url: '/get-all-salons?per_page=10&page=1' });
    if (resp && resp.code == 200) {
      setFeaturedVendor(resp.data.list);
    }
  }

  useEffect(() => {
    getVendor();
  }, []);

  return (
    featuredVendor?.length ? <div className="w-full space-y-4">
      <p className="text-2xl font-semibold text-black uppercase title heading">
        Near by <span className="text-primary_color">Featured salons</span>
      </p>
      <div className="relative w-full">
        <Swiper
          className="relative w-full"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={2.7}
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
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 2.7,
              spaceBetween: 10,
            },
          }}
        >
          {featuredVendor.length ? featuredVendor.map((vendor, index) => (
            <SwiperSlide key={v4()}>
              <Vendor vendor={vendor} />
            </SwiperSlide>
          )) : null}
        </Swiper>
      </div>
    </div> : null
  );
};

export default Featured;
