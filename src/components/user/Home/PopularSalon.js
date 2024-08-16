"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";

import Vendor from "@/components/ui/cards/vendor";
import { GET } from "@/app/api/get";
import { v4 } from "uuid";

const PopularSalon = () => {
  const [popularSalons, setPopularSalons] = useState([]);

  const getVendor = async () => {
    const resp = await GET.request({ url: '/get-all-salons?is_popular=1?per_page=10&page=1' });
    if (resp && resp.code == 200) {
      setPopularSalons(resp.data.list);
    }
  }

  useEffect(() => {
    getVendor();
  }, []);

  return (
    popularSalons?.length ? <div className="w-full space-y-4">
      <p className="text-2xl font-semibold text-black uppercase title heading">
        Popular <span className="text-primary_color">salons</span>
      </p>
      <div className="relative w-full">
        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="">
            {popularSalons.length ? popularSalons.map((vendor, index) => {
              let services = [];
              vendor?.service_group?.map((service) => service?.group_service_list && service?.group_service_list.map((service) => services.push(service)));
              return (
                (vendor?.salon_images?.length > 0 && services?.length) ? <CarouselItem key={v4()} className="flex-grow md:basis-1/2 lg:basis-1/3">
                  <Vendor vendor={vendor} services={services} />
                </CarouselItem> : null
              )
            }) : null}
          </CarouselContent>
          <CarouselDots className="mx-auto mt-5" />
        </Carousel>
      </div>
    </div> : null
  );
};

export default PopularSalon;
