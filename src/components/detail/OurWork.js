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
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Image src={"/static/images/Rectangle 375 (1).png"} width={500} height={500}/>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Image src={"/static/images/Rectangle 375 (1).png"} width={500} height={500}/>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Image src={"/static/images/Rectangle 375 (1).png"} width={500} height={500}/>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Image src={"/static/images/Rectangle 375 (1).png"} width={500} height={500}/>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="mr-24"/>
        <CarouselNext className="ml-24 "/>
      </Carousel>
    </div>
  );
};

export default OurWork;
