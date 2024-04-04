"use client";
import Image from "next/image";
import React from "react";
import Button from "@/components/ui/button";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 } from "uuid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const Singleblog = () => {
  return (
    <div className="container">
      <div className="py-6 space-y-4">
        <h1 className="text-xl font-bold">
          Nail Extensions - Acrylic or Hard Gel - Which One You Should Get?
        </h1>
        <div className="flex items-center gap-2">
          <Image
            src={"/static/images/blog/img.png"}
            width={50}
            height={50}
            alt=""
            loading="lazy"
          />
          <div>
            <p className="font-bold">Admin</p>
            <p>Feb 25, 2024 05:15 AM</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:mb-10">
          <div className=" md:w-4/5 space-y-4 w-[90%]">
            <Image
              src={"/static/images/blog/blog.png"}
              width={900}
              height={400}
              alt="blog"
              loading="lazy"
              className="object-cover object-center"
            />
            <div className="space-y-3">
              <p className="text-xl font-bold">Nail Extension - What is it?</p>
              <p className="text-[#666666] text-sm text-justify">
                As popular fashion accessories, nail extensions or nail
                enhancements add length and strength to your natural nails in a
                few minutes. While applying the nail enhancements, the nail
                technician will place or affix the artificial nails on your
                natural nails in a number of ways. Also, she will allow you to
                choose from a wide range of nail extensions – soft gel nails,
                hard gel nails, acrylic nails, and shellac nails. The nail
                extensions differ from each other in several aspects including
                results.
              </p>
              <p className="text-[#666666] text-sm text-justify">
                You can extend your natural nails by getting both hard gel nail
                extensions and acrylic nail extensions. Both artificial nails
                make your fingernails appear longer for several weeks. But you
                must remember the nail artist will apply each type of nail
                extensions differently. Also, you need to take care of each of
                these artificial nails in a specific way. That is why; you must
                keep in mind some important factors while choosing from acrylic
                nails and hard gel nails.
              </p>
            </div>
            <div>
              <p className="text-xl font-bold">
                Comparing Two Popular Nail Extensions: Hard Gel Nails vs.
                Acrylic Nails
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-xl font-bold">During the Application</p>
              <p className="text-[#666666] text-sm text-justify">
                Acrylic Nails - Before applying acrylic nail extensions, the
                nail technician will ask you to finalize the length, shape and
                colour of the artificial nails. The nail technician will prepare
                dough by mixing liquid and powder monomer solutions before
                applying acrylic nails. She will use a brush to extend the
                length of your natural nails. Also, she will shape the acrylic
                nails according to your preference.
              </p>
              <p className="text-[#666666] text-sm text-justify">
                Gel Nails - The nail technician will end the procedure by
                applying your choice of nail polish. On the other hand, she will
                create hard gel nails by applying multiple coats of hard gel
                polish. After applying each coat of hard gel, she will cure the
                artificial nails by putting your fingers under LED or UV light.
                The LED or UV light will cure and harden the artificial nails in
                a few seconds.
              </p>
            </div>
          </div>
          <div className="bg-[#F5E8FF] rounded-lg p-4 h-fit min-h-[350px] md:w-[40%] lg:w-[35%] w-[90%] mx-auto space-y-5">
            <h1 className="font-semibold">Contact</h1>
            <p className="text-sm text-[#6D6D6D]">Please share your details</p>
            <form className="space-y-4">
              <div className="w-full space-y-1 text-left">
                <label htmlFor="" text="Email" />
                <input
                  type="text"
                  name="email"
                  className="input_field"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="w-full space-y-1 text-left">
                <label htmlFor="" text="Name" />
                <input
                  type="text"
                  name="address"
                  className="input_field"
                  placeholder="Enter your Address"
                />
              </div>
              <div className="w-full space-y-1 text-left">
                <label htmlFor="" text="Phone" />
                <input
                  type="tel"
                  name="phone"
                  className="input_field"
                  placeholder="8947987892"
                />
              </div>
              <div className="w-full space-y-1 text-left">
                <label htmlFor="" text="Message" />
                <textarea
                  type="text"
                  name="message"
                  className="input_field"
                  placeholder="Message"
                />
              </div>
              <Button type="submit" variant="primary" className="md:w-full">
                Submit
              </Button>
            </form>
          </div>
        </div>
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
    </div>
  );
};

export default Singleblog;
