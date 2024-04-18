"use client";
import React, { useState } from "react";
import { v4 } from "uuid";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Button,
  Herosection,
  CardMultiServices,
  PopularSalon,
  Location,
} from "@/components";

const CurrentOffer = () => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <div className="container w-full space-y-8">
      <Herosection />
      <p className="text-2xl font-semibold text-black uppercase title heading">
        Featured <span className="text-primary_color">offers</span>
      </p>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {boxData.map((item) => (
            <CarouselItem key={v4()} className="md:basis-1/2 lg:basis-1/4">
              <div className="relative w-full space-y-4" key={item.id}>
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
                  <div
                    className="mx-1 bg-white rounded-lg shadow-lg"
                    key={item?.id}
                  >
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
                          {item?.title}
                          <span className="font-normal">
                            {item?.titleoption}
                          </span>
                        </h1>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-[#7f52861a] p-2 rounded-full">
                          <MdLocationPin className="text-sm text-primary_color" />
                        </div>
                        <div>
                          <p className="text-sm md:text-base">
                            {item?.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="flex items-center gap-2 md:gap-3">
                          <FaStar className="text-sm text-primary_color" />
                          <p className="text-sm md:text-base">{item?.rating}</p>
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
                        <Button variant="secondary" className="flex-1 px-0">
                          <IoIosEye className="text-base text-white" /> Quick
                          view
                        </Button>

                        <Button variant="primary" className="flex-1 px-0">
                          <GrCart className="text-base text-white" /> Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
        <CarouselDots className="mx-auto mt-3" />
      </Carousel>
      <div className="space-y-8 ">
        <p className="text-2xl font-semibold text-black title heading">
          View All
          <span className="text-primary_color"> Body Treatments</span>
        </p>
        <div className="flex flex-col min-h-[55dvh] gap-4 px-1 md:flex-row md:px-5 md:mb-10">
          <div className="shadow-lg rounded-md h-fit md:w-[40%] lg:w-[25%] w-[90%] mx-auto space-y-3 p-4 bg-white">
            <div className="flex items-center justify-between">
              <p className="font-bold">Filters</p>
              <p className="text-sm uppercase">Clear all</p>
            </div>
            <hr />
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Sort by</AccordionTrigger>
                <AccordionContent>
                  <li class="w-full list-none">
                    <div class="flex items-center">
                      <input
                        id="list-radio-license"
                        type="radio"
                        value=""
                        name="list-radio"
                        class=""
                      />
                      <label
                        for="list-radio-license"
                        class="w-full ms-2 text-sm font-medium text-gray-900 "
                      >
                        Recommended
                      </label>
                    </div>
                  </li>
                </AccordionContent>
                <AccordionContent>
                  <li class="w-full list-none">
                    <div class="flex items-center">
                      <input
                        id="list-radio-license"
                        type="radio"
                        value=""
                        name="list-radio"
                        class=""
                      />
                      <label
                        for="list-radio-license"
                        class="w-full ms-2 text-sm font-medium text-gray-900 "
                      >
                        Highest Rated
                      </label>
                    </div>
                  </li>
                </AccordionContent>
                <AccordionContent>
                  <li class="w-full list-none">
                    <div class="flex items-center">
                      <input
                        id="list-radio-license"
                        type="radio"
                        value=""
                        name="list-radio"
                        class=""
                      />
                      <label
                        for="list-radio-license"
                        class="w-full ms-2 text-sm font-medium text-gray-900 "
                      >
                        Lowest Price
                      </label>
                    </div>
                  </li>
                </AccordionContent>
                <AccordionContent>
                  <li class="w-full list-none">
                    <div class="flex items-center">
                      <input
                        id="list-radio-license"
                        type="radio"
                        value=""
                        name="list-radio"
                        class=""
                      />
                      <label
                        for="list-radio-license"
                        class="w-full ms-2 text-sm font-medium text-gray-900 "
                      >
                        Highest Price
                      </label>
                    </div>
                  </li>
                </AccordionContent>
                <AccordionContent>
                  <li class="w-full list-none">
                    <div class="flex items-center">
                      <input
                        id="list-radio-license"
                        type="radio"
                        value=""
                        name="list-radio"
                        class=""
                      />
                      <label
                        for="list-radio-license"
                        class="w-full ms-2 text-sm font-medium text-gray-900 "
                      >
                        Discount
                      </label>
                    </div>
                  </li>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Price Range</AccordionTrigger>
                <AccordionContent>
                  <Slider
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    // className={cn("w-[60%]", className)}
                    // {...props}
                  />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Treatments</AccordionTrigger>
                <AccordionContent>
                  <li class="w-full list-none">
                    <div class="flex items-center">
                      <input
                        id="list-radio-license"
                        type="checkbox"
                        value=""
                        name="list-radio"
                        class=""
                      />
                      <label
                        for="list-radio-license"
                        class="w-full ms-2 text-sm font-medium text-gray-900 "
                      >
                        All
                      </label>
                    </div>
                  </li>
                </AccordionContent>
                <AccordionContent>
                  <li class="w-full list-none">
                    <div class="flex items-center">
                      <input
                        id="list-radio-license"
                        type="checkbox"
                        value=""
                        name="list-radio"
                        class=""
                      />
                      <label
                        for="list-radio-license"
                        class="w-full ms-2 text-sm font-medium text-gray-900 "
                      >
                        Sports Massage
                      </label>
                    </div>
                  </li>
                </AccordionContent>
                <AccordionContent>
                  <li class="w-full list-none">
                    <div class="flex items-center">
                      <input
                        id="list-radio-license"
                        type="checkbox"
                        value=""
                        name="list-radio"
                        class=""
                      />
                      <label
                        for="list-radio-license"
                        class="w-full ms-2 text-sm font-medium text-gray-900 "
                      >
                        Trigger Point Massage
                      </label>
                    </div>
                  </li>
                </AccordionContent>
                <AccordionContent>
                  <li class="w-full list-none">
                    <div class="flex items-center">
                      <input
                        id="list-radio-license"
                        type="checkbox"
                        value=""
                        name="list-radio"
                        class=""
                      />
                      <label
                        for="list-radio-license"
                        class="w-full ms-2 text-sm font-medium text-gray-900 "
                      >
                        Cupping Massage
                      </label>
                    </div>
                  </li>
                </AccordionContent>
                <AccordionContent>
                  <li class="w-full list-none">
                    <div class="flex items-center">
                      <input
                        id="list-radio-license"
                        type="checkbox"
                        value=""
                        name="list-radio"
                        class=""
                      />
                      <label
                        for="list-radio-license"
                        class="w-full ms-2 text-sm font-medium text-gray-900 "
                      >
                        Couples Massage
                      </label>
                    </div>
                  </li>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button variant="primary" className="w-full">
              Show results
            </Button>
          </div>
          <div className="md:w-4/5 w-[90%] mx-auto space-y-5 h-fit min-h-[350px]">
            <div className="grid items-center grid-cols-1 gap-4 xl:grid-cols-2">
              <CardMultiServices />
            </div>
          </div>
        </div>
        <PopularSalon />
        <Location />
      </div>
    </div>
  );
};

export default CurrentOffer;

const boxData = [
  {
    id: 1,
    image: "/static/images/spa_life.png",
    title: "Spa Life & Massage",
    titleoption: "(Couple Massage)",
    location: "Barnack, Cambridge 181.2 miles",
    rating: "4.0",
  },
  {
    id: 2,
    image: "/static/images/spa_life.png",
    title: "Spa Life & Massage",
    titleoption: "(Couple Massage)",
    location: "Barnack, Cambridge 181.2 miles",
    rating: "4.0",
  },
  {
    id: 3,
    image: "/static/images/spa_life.png",
    title: "Spa Life & Massage",
    titleoption: "(Couple Massage)",
    location: "Barnack, Cambridge 181.2 miles",
    rating: "4.0",
  },
  {
    id: 4,
    image: "/static/images/spa_life.png",
    title: "Spa Life & Massage",
    titleoption: "(Couple Massage)",
    location: "Barnack, Cambridge 181.2 miles",
    rating: "4.0",
  },
  {
    id: 5,
    image: "/static/images/spa_life.png",
    title: "Spa Life & Massage",
    titleoption: "(Couple Massage)",
    location: "Barnack, Cambridge 181.2 miles",
    rating: "4.0",
  },
  {
    id: 6,
    image: "/static/images/spa_life.png",
    title: "Spa Life & Massage",
    titleoption: "(Couple Massage)",
    location: "Barnack, Cambridge 181.2 miles",
    rating: "4.0",
  },
];
