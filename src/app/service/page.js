import { Herosection } from "@/components";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServiceListing = () => {
  return (
    <div className="space-y-8">
      <Herosection />
      <div className="container space-y-8">
        <p className="text-2xl font-semibold text-black uppercase title heading">
          Search result{" "}
          <span className="text-primary_color">Massage Services</span>
        </p>
        <div className="flex flex-col min-h-[55dvh] gap-4 px-1 md:flex-row md:px-5 md:mb-10">
          <div className="shadow-lg rounded-md h-fit min-h-[350px] md:w-[40%] lg:w-[25%] w-[90%] mx-auto space-y-5 p-4 bg-white">
            <div className="flex justify-between items-center">
              <p className="font-bold">Filters</p>
              <p className="uppercase text-sm">Clear all</p>
            </div>
            <hr />
            <Accordion  collapsible className="w-full space-y-3">
              <AccordionItem
              //   value="item-1"
              //   className="px-1 bg-white rounded-md shadow-sm md:px-3 ring-1 ring-primary/10"
              >
                <AccordionTrigger>Sort by</AccordionTrigger>
                <AccordionContent>Recommended</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="md:w-4/5 w-[90%] mx-auto space-y-5 rounded-md shadow-lg h-fit min-h-[350px] z-2 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceListing;
