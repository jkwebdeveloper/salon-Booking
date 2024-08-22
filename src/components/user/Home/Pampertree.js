"use client";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";

import SingleService from "@/components/ui/cards/singleservice";
import { GET } from "@/app/api/get";
import { POST } from "@/app/api/post";

function Pampertree() {
  const [deals, setDeals] = useState([]);

  const getDealsService = async () => {
    const form = {
      "is_deal": 1,
      "page": 1,
      "limit": 10
    }
    const resp = await POST.request({ url: `/find-near-by-services`, form: form });
    if (resp && resp.code == 200) {
      setDeals(resp.data?.listing)
    }
  };

  useEffect(() => {
    getDealsService();
  }, []);

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
          {deals.map((deal) => {
            const salonName = deal?.salon_name || '';
            const salonImage = deal?.salon_images ? deal?.salon_images[0] : "";
            const salonAddress = (deal?.address_line_one || '') + ' ' + (deal?.address_line_two || '') + ' ' + deal?.city + ' ' + deal?.country;
            const salonID = deal?.id;
            const whtsup_link = deal?.whtsup_link;
            const facebook_link = deal?.facebook_link;
            const twitter_link = deal?.twitter_link;
            const instagram_link = deal?.instagram_link;
            return (
              salonName && salonImage ? deal?.services?.length && deal?.services.map((service) => {
                return (
                  <CarouselItem key={v4()} className="md:basis-1/2 lg:basis-1/4">
                    <SingleService service={{ ...service, salonName, salonImage, salonAddress, salonID, whtsup_link, facebook_link, twitter_link, instagram_link }} />
                  </CarouselItem> || null
                )
              }) : null
            )
          })}
        </CarouselContent>
        <CarouselDots className="mx-auto mt-3" />
      </Carousel>
    </div>
  );
}

export default Pampertree;

