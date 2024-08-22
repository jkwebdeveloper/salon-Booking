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
import FindNearByServices from "@/hooks/findnearbyservices";
import { SingleServiceSkelton } from "@/components/ui/skelton/singleservice";

const form = {
  "is_deal": 1,
  "page": 1,
  "limit": 10
}

function Pampertree() {
  const [services, setServices, getNearByServices] = FindNearByServices();

  useEffect(() => {
    getNearByServices({ ...form, page: 1, limit: 10, });
  }, []);

  const addToFavorite = async ({ id, type }) => {
    const resp = await POST.request({ url: "/add-to-wishlist", form: { id } });
    if (resp && resp.code == 200) {
      setServices({
        ...services, data: {
          ...services.data, listing: services.data.listing.map((service) => {
            return service.id == id ? { ...service, isFavourite: type == 'add' ? true : false } : service;
          })
        }
      });
    } else {
      console.log(resp);
    }
  }

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
        {!services?.loading
          ? <CarouselContent>
            {services?.data?.listing && services?.data?.listing.map((deal) => {
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
                    <CarouselItem key={v4()} className="p-0 md:basis-1/2 lg:basis-1/4">
                      <SingleService service={{ ...service, salonName, salonImage, salonAddress, salonID, whtsup_link, facebook_link, twitter_link, instagram_link }} addToFavorite={addToFavorite} />
                    </CarouselItem> || null
                  )
                }) : null
              )
            })}
          </CarouselContent>
          : null
        }
        {services?.loading
          ? <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <SingleServiceSkelton />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <SingleServiceSkelton />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <SingleServiceSkelton />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <SingleServiceSkelton />
            </CarouselItem>
          </CarouselContent>
          : null
        }
        <CarouselDots className="mx-auto mt-3" />
      </Carousel>
    </div>
  );
}

export default Pampertree;

