import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 } from "uuid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const blogData = [
  {
    id: 1,
    image: "/static/images/blog/image.png",
    title: "Lorem Ipsum is simply dummy...",
    date: "02 May 2024",
  },
  {
    id: 2,
    image: "/static/images/blog/image (2).png",
    title: "Lorem Ipsum is simply dummy...",
    date: "02 May 2024",
  },

  {
    id: 3,
    image: "/static/images/blog/image (3).png",
    title: "Lorem Ipsum is simply dummy...",
    date: "02 May 2024",
  },
  {
    id: 4,
    image: "/static/images/blog/image (4).png",
    title: "Lorem Ipsum is simply dummy...",
    date: "02 May 2024",
  },
  {
    id: 5,
    image: "/static/images/blog/image (5).png",
    title: "Lorem Ipsum is simply dummy...",
    date: "02 May 2024",
  },
];

const Single_blog_slider = () => {
  return (
    <div className="container space-y-6">
      <div>
        <p className="text-2xl font-semibold text-black uppercase title heading">
          Latest <span className="text-primary_color">blogs</span>
        </p>
      </div>
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
          {blogData.map((item) => (
            <SwiperSlide key={v4()}>
              <div className="space-y-3 shadow-lg rounded-xl" key={v4()}>
                <Image
                  alt=""
                  loading="lazy"
                  width={500}
                  height={300}
                  src={item?.image}
                />
                <div className="p-3 space-y-2">
                  <h1 className="font-bold">{item?.title}</h1>
                  <p className="text-sm text-[#696969]">{item?.date}</p>
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

export default Single_blog_slider;
