"use client";
import React, { useRef, useState } from "react";
import Vendor from "@/components/ui/cards/vendor";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { v4 } from "uuid";

const PopularSalon = () => {
  return (
    <div className="w-full space-y-4">
      <p className="text-2xl font-semibold text-black uppercase title heading">
        Popular <span className="text-primary_color">salons</span>
      </p>
      <div className="relative w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            <CarouselItem key={v4()} className="lg:basis-1/2 xl:basis-1/3">
              <Vendor />
            </CarouselItem>
            <CarouselItem key={v4()} className="lg:basis-1/2 xl:basis-1/3">
              <Vendor />
            </CarouselItem>
            <CarouselItem key={v4()} className="lg:basis-1/2 xl:basis-1/3">
              <Vendor />
            </CarouselItem>
            <CarouselItem key={v4()} className="lg:basis-1/2 xl:basis-1/3">
              <Vendor />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default PopularSalon;
