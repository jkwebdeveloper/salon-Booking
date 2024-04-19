"use client";
import React, { useRef, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Button } from "@/components";
import { ServiceSVG } from "@/constants/svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import QuickModal from "./QuickModal";

const Featured = () => {
  const [beginAndEnd, setBeginAndEnd] = useState({
    isEnd: false,
    isBegin: true,
  });
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="w-full space-y-4">
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
          <SwiperSlide>
            <div className="border border-[#DBDBDB] rounded-lg">
              <div className="flex flex-col justify-between gap-1 p-3 text-left xl:flex-row xl:items-center xl:gap-2">
                <div className="relative">
                  <Swiper
                    modules={[Navigation]}
                    onSlideChange={(e) => {
                      setBeginAndEnd({
                        isBegin: e.isBeginning,
                        isEnd: e.isEnd,
                      });
                    }}
                    className="relative h-36"
                    spaceBetween={30}
                    slidesPerView={2}
                    navigation={{
                      prevEl: prevRef.current,
                      nextEl: nextRef.current,
                      enabled: true,
                    }}
                  >
                    <SwiperSlide>
                      <Image
                        src={"/static/images/hair.png"}
                        height={500}
                        width={500}
                        alt="moon"
                        loading="lazy"
                        // fill
                        className="object-cover w-full h-full"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-semibold">Moon Massage</h1>
                  <p className="text-primary_color">Nail Salons</p>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#7f52861a] p-1 rounded-full">
                      <MdLocationPin className="text-sm text-primary_color" />
                    </div>
                    <div>
                      <p>Barnack , Cambridge 181.2 miles</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 my-2">
                    <div className="flex items-center gap-3">
                      <FaStar className="text-[0.7rem] text-[#FFCC00]" />
                      <p>3.0</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-[#29AD17] p-1 rounded-full">
                        <FaWhatsapp className="text-white text-md" />
                      </div>
                      <div className="bg-[#4664A0] p-1 rounded-full">
                        <ImFacebook className="text-white text-md" />
                      </div>
                      <div className="bg-[#000] p-1 rounded-full">
                        <BsTwitterX className="text-white text-md" />
                      </div>
                      <div className="bg-[#A4A4A4] p-1 rounded-full">
                        <LuBookmark className="text-white text-md" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="uppercase ps-3 group"
                    >
                      <ServiceSVG pathClass="group-hover:fill-white fill-primary" />
                      View All Services
                    </Button>
                  </div>
                </div>
              </div>
              <hr className="w-full mt-4" />
              <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
                <div className="">
                  <p className="font-semibold">
                    Cupping Massage
                    <span className="font-normal text-[#808080] text-sm">
                      {" "}
                      (20 Min)
                    </span>
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="text-2xl font-semibold text-primary_color">
                      £18{" "}
                      <span className="line-through text-[#898989] font-normal text-base">
                        £28
                      </span>
                    </p>
                    <p className="text-base font-semibold text-green_color">
                      {" "}
                      30% OFF
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="primary">Book Now</Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary">Quick view</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[825px]">
                      <QuickModal />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <hr className="w-full" />
              <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
                <div className="">
                  <p className="font-semibold">
                    Cupping Massage
                    <span className="font-normal text-[#808080] text-sm">
                      {" "}
                      (20 Min)
                    </span>
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="text-2xl font-semibold text-primary_color">
                      £18{" "}
                      <span className="line-through text-[#898989] font-normal text-base">
                        £28
                      </span>
                    </p>
                    <p className="text-base font-semibold text-green_color">
                      {" "}
                      30% OFF
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="primary">Book Now</Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary">Quick view</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[825px]">
                      <QuickModal />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-[#DBDBDB] rounded-lg">
              <div className="flex flex-col justify-between gap-1 p-3 text-left xl:flex-row xl:items-center xl:gap-2">
                <div className="relative">
                  <Swiper
                    // install Swiper modules
                    modules={[Navigation]}
                    onSlideChange={(e) => {
                      setBeginAndEnd({
                        isBegin: e.isBeginning,
                        isEnd: e.isEnd,
                      });
                    }}
                    className="relative h-36"
                    spaceBetween={30}
                    slidesPerView={2}
                    navigation={{
                      prevEl: prevRef.current,
                      nextEl: nextRef.current,
                      enabled: true,
                    }}
                    // observer={true}
                    // parallax={true}
                    // observeParents={true}
                  >
                    <SwiperSlide>
                      <Image
                        src={"/static/images/hair.png"}
                        height={500}
                        width={500}
                        alt="moon"
                        loading="lazy"
                        // fill
                        className="object-cover w-full h-full"
                      />
                    </SwiperSlide>
                    {/* <SwiperSlide>
                      <Image
                        src={'/static/images/hair.png'}
                        height={300}
                        width={300}
                        alt="moon"
                        loading="lazy"
                        
                        // fill
                        className="object-cover w-full h-full"
                      />
                    </SwiperSlide> */}
                  </Swiper>
                  {/* <div
                    ref={prevRef}
                    className={`swiper-prev-button absolute top-[45%] active:-translate-x-1 transition-all -left-4 bg-white p-3 cursor-pointer shadow-lg rounded-full z-10 ${
                      beginAndEnd?.isBegin && "scale-0"
                    } `}
                  >
                    <IoIosArrowBack className="text-[#007aff] h-6 w-6" />
                  </div>
                  <div
                    ref={nextRef}
                    className={` absolute top-[45%] active:translate-x-1 transition-all -right-4 bg-white shadow-xl p-3 cursor-pointer rounded-full z-10 ${
                      beginAndEnd?.isEnd && "scale-0"
                    } `}
                  >
                    <IoIosArrowForward className="text-[#007aff] w-6 h-6" />
                  </div> */}
                </div>
                <div className="space-y-2 xl:space-y-3">
                  <h1 className="text-base font-semibold">Moon Massage</h1>
                  <p className="text-primary_color">Nail Salons</p>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#7f52861a] p-2 rounded-full">
                      <MdLocationPin className="text-lg text-primary_color" />
                    </div>
                    <div>
                      <p>Barnack , Cambridge 181.2 miles</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3">
                      <FaStar className="text-lg text-[#FFCC00]" />
                      <p>3.0</p>
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
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="uppercase ps-3 group"
                    >
                      <ServiceSVG pathClass="group-hover:fill-white fill-primary" />
                      View All Services
                    </Button>
                  </div>
                </div>
              </div>
              <hr className="w-full mt-4" />
              <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
                <div className="">
                  <p className="font-semibold">
                    Cupping Massage
                    <span className="font-normal text-[#808080] text-sm">
                      {" "}
                      (20 Min)
                    </span>
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="text-2xl font-semibold text-primary_color">
                      £18{" "}
                      <span className="line-through text-[#898989] font-normal text-base">
                        £28
                      </span>
                    </p>
                    <p className="text-base font-semibold text-green_color">
                      {" "}
                      30% OFF
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="primary">Book Now</Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary">Quick view</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[825px]">
                      <QuickModal />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <hr className="w-full" />
              <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
                <div className="">
                  <p className="font-semibold">
                    Cupping Massage
                    <span className="font-normal text-[#808080] text-sm">
                      {" "}
                      (20 Min)
                    </span>
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="text-2xl font-semibold text-primary_color">
                      £18{" "}
                      <span className="line-through text-[#898989] font-normal text-base">
                        £28
                      </span>
                    </p>
                    <p className="text-base font-semibold text-green_color">
                      {" "}
                      30% OFF
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="primary">Book Now</Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary">Quick view</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[825px]">
                      <QuickModal />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-[#DBDBDB] rounded-lg">
              <div className="flex flex-col justify-between gap-1 p-3 text-left xl:flex-row xl:items-center xl:gap-2">
                <div className="relative">
                  <Swiper
                    // install Swiper modules
                    modules={[Navigation]}
                    onSlideChange={(e) => {
                      setBeginAndEnd({
                        isBegin: e.isBeginning,
                        isEnd: e.isEnd,
                      });
                    }}
                    className="relative h-36"
                    spaceBetween={30}
                    slidesPerView={2}
                    navigation={{
                      prevEl: prevRef.current,
                      nextEl: nextRef.current,
                      enabled: true,
                    }}
                    // observer={true}
                    // parallax={true}
                    // observeParents={true}
                  >
                    <SwiperSlide>
                      <Image
                        src={"/static/images/hair.png"}
                        height={500}
                        width={500}
                        alt="moon"
                        loading="lazy"
                        // fill
                        className="object-cover w-full h-full"
                      />
                    </SwiperSlide>
                    {/* <SwiperSlide>
                      <Image
                        src={'/static/images/hair.png'}
                        height={300}
                        width={300}
                        alt="moon"
                        loading="lazy"
                        
                        // fill
                        className="object-cover w-full h-full"
                      />
                    </SwiperSlide> */}
                  </Swiper>
                  {/* <div
                    ref={prevRef}
                    className={`swiper-prev-button absolute top-[45%] active:-translate-x-1 transition-all -left-4 bg-white p-3 cursor-pointer shadow-lg rounded-full z-10 ${
                      beginAndEnd?.isBegin && "scale-0"
                    } `}
                  >
                    <IoIosArrowBack className="text-[#007aff] h-6 w-6" />
                  </div>
                  <div
                    ref={nextRef}
                    className={` absolute top-[45%] active:translate-x-1 transition-all -right-4 bg-white shadow-xl p-3 cursor-pointer rounded-full z-10 ${
                      beginAndEnd?.isEnd && "scale-0"
                    } `}
                  >
                    <IoIosArrowForward className="text-[#007aff] w-6 h-6" />
                  </div> */}
                </div>
                <div className="space-y-2 xl:space-y-3">
                  <h1 className="text-base font-semibold">Moon Massage</h1>
                  <p className="text-primary_color">Nail Salons</p>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#7f52861a] p-2 rounded-full">
                      <MdLocationPin className="text-lg text-primary_color" />
                    </div>
                    <div>
                      <p>Barnack , Cambridge 181.2 miles</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3">
                      <FaStar className="text-lg text-[#FFCC00]" />
                      <p>3.0</p>
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
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="uppercase ps-3 group"
                    >
                      <ServiceSVG pathClass="group-hover:fill-white fill-primary" />
                      View All Services
                    </Button>
                  </div>
                </div>
              </div>
              <hr className="w-full mt-4" />
              <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
                <div className="">
                  <p className="font-semibold">
                    Cupping Massage
                    <span className="font-normal text-[#808080] text-sm">
                      {" "}
                      (20 Min)
                    </span>
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="text-2xl font-semibold text-primary_color">
                      £18{" "}
                      <span className="line-through text-[#898989] font-normal text-base">
                        £28
                      </span>
                    </p>
                    <p className="text-base font-semibold text-green_color">
                      {" "}
                      30% OFF
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="primary">Book Now</Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary">Quick view</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[825px]">
                      <QuickModal />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <hr className="w-full" />
              <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
                <div className="">
                  <p className="font-semibold">
                    Cupping Massage
                    <span className="font-normal text-[#808080] text-sm">
                      {" "}
                      (20 Min)
                    </span>
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="text-2xl font-semibold text-primary_color">
                      £18{" "}
                      <span className="line-through text-[#898989] font-normal text-base">
                        £28
                      </span>
                    </p>
                    <p className="text-base font-semibold text-green_color">
                      {" "}
                      30% OFF
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="primary">Book Now</Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary">Quick view</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[825px]">
                      <QuickModal />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;
