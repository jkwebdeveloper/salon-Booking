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

const OurWork = ({ salon_images }) => {
  return (
    <div className="w-full space-y-6">
      <p className="text-2xl font-semibold text-black uppercase title heading">
        oUR <span className="text-primary_color">work</span>
      </p>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {salon_images.map((image, i) => {
            return (
              <CarouselItem key={v4()} className="md:basis-1/2 lg:basis-1/4">
                <Image
                  src={process.env.NEXT_PUBLIC_SERVERURL + image?.images}
                  width={500}
                  height={500}
                  className="aspect-[1/0.7] object-cover rounded-2xl"
                  alt="Image 1"
                />
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default OurWork;
