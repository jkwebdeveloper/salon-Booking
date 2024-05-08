"use client";
import React, { useState } from "react";
import { v4 } from "uuid";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";

import SingleService from "@/components/ui/cards/singleservice";

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

function Pampertree() {
  return (
    <div className="w-full space-y-4">
      <p className="text-2xl font-semibold text-black uppercase title heading">
        Deals On <span className="text-primary_color">Pamper Tree</span>
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
              <SingleService item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
        <CarouselDots className="mx-auto mt-3" />
      </Carousel>
    </div>
  );
}

export default Pampertree;

