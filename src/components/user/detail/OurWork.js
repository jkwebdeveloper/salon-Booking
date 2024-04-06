import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const OurWork = () => {
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
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Image
              src={"/static/images/Rectangle 375 (1).png"}
              width={500}
              height={500}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Image
              src={"/static/images/Rectangle 375 (1).png"}
              width={500}
              height={500}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Image
              src={"/static/images/Rectangle 375 (1).png"}
              width={500}
              height={500}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Image
              src={"/static/images/Rectangle 375 (1).png"}
              width={500}
              height={500}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default OurWork;
