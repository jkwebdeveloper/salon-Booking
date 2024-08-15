'use client';
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { v4 } from "uuid";
const ImagesData = [
  {
    id: 1,
    image: "/static/images/Rectangle 375 (1).png",
    title: "Spa Days",
    des: "12 Listings",
  },
  {
    id: 2,
    image: "/static/images/Rectangle 375 (1).png",
    title: "Body Treatments",
    des: "593 Listings",
  },
  {
    id: 3,
    image: "/static/images/Rectangle 375 (1).png",
    title: "Beauty Salons",
    des: "8 Listings",
  },
  {
    id: 4,
    image: "/static/images/Rectangle 375 (1).png",
    title: "Hair Salons",
    des: "1650 Listings",
  },
];
import useCategory from "@/hooks/usecategory";
import { Spinner } from "@/components";

const LookingFor = () => {
  const mainCat = useCategory();
  return (
    <div className="w-full space-y-6">
      <p className="text-2xl font-semibold text-black uppercase title heading">
        What you were <span className="text-primary_color">looking for?</span>
      </p>
      {mainCat?.loading ?
        <div className="flex items-center justify-center w-full min-h-[300px]">
          <Spinner show={true} width={50} height={50} />
        </div>
        : <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {mainCat.data.map((item) => (
              <CarouselItem key={v4()} className="md:basis-1/2 lg:basis-1/4">
                <div
                  key={v4()}
                  className="relative flex items-center justify-center text-center cursor-pointer"
                >
                  <Image
                    src={process.env.NEXT_PUBLIC_SERVERURL + item.cat_image}
                    loading="lazy"
                    width={300}
                    height={500}
                    alt=""
                    className="relative object-cover w-full aspect-[1/0.7] rounded-2xl"
                  />
                  <p className="absolute uppercase top-[78%] text-center font-bold text-white">
                    {item?.title}
                  </p>
                  <p className="absolute uppercase top-[87%] text-center text-white">
                    {(item?.services_count) || 0} Listings
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-mr-24" />
          <CarouselNext className="-ml-24 " />
        </Carousel>}
    </div>
  );
};

export default LookingFor;
