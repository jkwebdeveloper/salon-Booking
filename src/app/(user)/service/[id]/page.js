'use client';
import { Button, CardMultiServices, Herosection } from "@/components";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import PopularSalon from "@/components/user/Home/PopularSalon";
import Vendor from "@/components/ui/cards/vendor";

const ServiceListing = () => {
  return (
    <div className="mb-20 space-y-8">
      <Herosection />
      <div className="container space-y-8">
        <p className="text-2xl font-semibold text-black uppercase title heading">
          Search result{" "}
          <span className="text-primary_color">Massage Services</span>
        </p>
        <div className="flex flex-col min-h-[55dvh] xl:gap-10 gap-3 md:flex-row md:mb-10">
          <div className="shadow-lg md:sticky top-5 rounded-md h-fit md:w-[40%] lg:w-[25%] w-[90%] mx-auto space-y-3 p-4 bg-white">
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
            <Button variant="primary" className="w-full">Show results</Button>
          </div>
          <div className="md:w-4/5 w-[90%] mx-auto space-y-5 h-fit min-h-[350px]">
            <div className="grid items-center grid-cols-1 gap-4 xl:grid-cols-2">
              <Vendor />
              <Vendor />
              <Vendor />
              <Vendor />
              <Vendor />
            </div>
          </div>
        </div>
        <PopularSalon />
      </div>
    </div>
  );
};

export default ServiceListing;
