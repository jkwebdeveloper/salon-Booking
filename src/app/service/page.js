import { Button, Herosection } from "@/components";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MdLocationPin } from "react-icons/md";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import PopularSalon from "@/components/Home/PopularSalon";

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
            <div className="grid items-center grid-cols-1 xl:grid-cols-2 gap-4">
              <div className="border border-[#DBDBDB] rounded-lg">
                <div className="flex flex-col justify-between gap-1 p-3 text-left xl:flex-row xl:items-center xl:gap-2">
                  <div className="space-y-2 xl:space-y-3">
                    <h1 className="text-base font-semibold">Moon Massage</h1>
                    <p className="text-primary_color">Nail Salons</p>
                    <div className="flex items-center gap-3">
                      <div className="bg-[#7f52861a] p-2 rounded-full">
                        <MdLocationPin className="text-lg text-primary_color" />
                      </div>
                      <div>
                        <p>Barnack , Cambridge 181.2 miles</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-3">
                        <FaStar className="text-lg text-[#FFCC00]" />
                        <p>3.0</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-[#29AD17] p-2 rounded-full">
                          <FaWhatsapp className="text-lg text-white" />
                        </div>
                        <div className="bg-[#4664A0] p-2 rounded-full">
                          <ImFacebook className="text-lg text-white" />
                        </div>
                        <div className="bg-[#000] p-2 rounded-full">
                          <BsTwitterX className="text-lg text-white" />
                        </div>
                        <div className="bg-[#A4A4A4] p-2 rounded-full">
                          <LuBookmark className="text-lg text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="flex items-center justify-center gap-2 outline_button md:px-5"
                      >
                        <MdLocationPin className="text-lg text-primary_color" />
                        View All Services
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="w-full mt-4" />
                <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
                  <div className="">
                    <p className="font-semibold">
                      Cupping Massage
                      <span className="font-normal">(20 Min)</span>
                    </p>
                    <div className="flex items-center gap-3">
                      <p className="text-2xl font-semibold text-primary_color">
                        £18{" "}
                        <span className="line-through text-[#898989] font-normal text-base">
                          £28
                        </span>
                      </p>
                      <p className="text-base font-semibold text-green_color">
                        {" "}
                        30% OFF
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="primary">Book Now</Button>
                    <Button variant="secondary">Quick view</Button>
                  </div>
                </div>
                <hr className="w-full" />
                <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
                  <div className="">
                    <p className="font-semibold">
                      Cupping Massage
                      <span className="font-normal">(20 Min)</span>
                    </p>
                    <div className="flex items-center gap-3">
                      <p className="text-2xl font-semibold text-primary_color">
                        £18{" "}
                        <span className="line-through text-[#898989] font-normal text-base">
                          £28
                        </span>
                      </p>
                      <p className="text-base font-semibold text-green_color">
                        {" "}
                        30% OFF
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="primary">Book Now</Button>
                    <Button variant="secondary">Quick view</Button>
                  </div>
                </div>
              </div>
              <div className="border border-[#DBDBDB] rounded-lg">
                <div className="flex flex-col justify-between gap-1 p-3 text-left xl:flex-row xl:items-center xl:gap-2">
                  <div className="space-y-2 xl:space-y-3">
                    <h1 className="text-base font-semibold">Moon Massage</h1>
                    <p className="text-primary_color">Nail Salons</p>
                    <div className="flex items-center gap-3">
                      <div className="bg-[#7f52861a] p-2 rounded-full">
                        <MdLocationPin className="text-lg text-primary_color" />
                      </div>
                      <div>
                        <p>Barnack , Cambridge 181.2 miles</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-3">
                        <FaStar className="text-lg text-[#FFCC00]" />
                        <p>3.0</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-[#29AD17] p-2 rounded-full">
                          <FaWhatsapp className="text-lg text-white" />
                        </div>
                        <div className="bg-[#4664A0] p-2 rounded-full">
                          <ImFacebook className="text-lg text-white" />
                        </div>
                        <div className="bg-[#000] p-2 rounded-full">
                          <BsTwitterX className="text-lg text-white" />
                        </div>
                        <div className="bg-[#A4A4A4] p-2 rounded-full">
                          <LuBookmark className="text-lg text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="flex items-center justify-center gap-2 outline_button md:px-5"
                      >
                        <MdLocationPin className="text-lg text-primary_color" />
                        View All Services
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="w-full mt-4" />
                <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
                  <div className="">
                    <p className="font-semibold">
                      Cupping Massage
                      <span className="font-normal">(20 Min)</span>
                    </p>
                    <div className="flex items-center gap-3">
                      <p className="text-2xl font-semibold text-primary_color">
                        £18{" "}
                        <span className="line-through text-[#898989] font-normal text-base">
                          £28
                        </span>
                      </p>
                      <p className="text-base font-semibold text-green_color">
                        {" "}
                        30% OFF
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="primary">Book Now</Button>
                    <Button variant="secondary">Quick view</Button>
                  </div>
                </div>
                <hr className="w-full" />
                <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
                  <div className="">
                    <p className="font-semibold">
                      Cupping Massage
                      <span className="font-normal">(20 Min)</span>
                    </p>
                    <div className="flex items-center gap-3">
                      <p className="text-2xl font-semibold text-primary_color">
                        £18{" "}
                        <span className="line-through text-[#898989] font-normal text-base">
                          £28
                        </span>
                      </p>
                      <p className="text-base font-semibold text-green_color">
                        {" "}
                        30% OFF
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="primary">Book Now</Button>
                    <Button variant="secondary">Quick view</Button>
                  </div>
                </div>
              </div>
              <div className="border border-[#DBDBDB] rounded-lg">
                <div className="flex flex-col justify-between gap-1 p-3 text-left xl:flex-row xl:items-center xl:gap-2">
                  <div className="space-y-2 xl:space-y-3">
                    <h1 className="text-base font-semibold">Moon Massage</h1>
                    <p className="text-primary_color">Nail Salons</p>
                    <div className="flex items-center gap-3">
                      <div className="bg-[#7f52861a] p-2 rounded-full">
                        <MdLocationPin className="text-lg text-primary_color" />
                      </div>
                      <div>
                        <p>Barnack , Cambridge 181.2 miles</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-3">
                        <FaStar className="text-lg text-[#FFCC00]" />
                        <p>3.0</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-[#29AD17] p-2 rounded-full">
                          <FaWhatsapp className="text-lg text-white" />
                        </div>
                        <div className="bg-[#4664A0] p-2 rounded-full">
                          <ImFacebook className="text-lg text-white" />
                        </div>
                        <div className="bg-[#000] p-2 rounded-full">
                          <BsTwitterX className="text-lg text-white" />
                        </div>
                        <div className="bg-[#A4A4A4] p-2 rounded-full">
                          <LuBookmark className="text-lg text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="flex items-center justify-center gap-2 outline_button md:px-5"
                      >
                        <MdLocationPin className="text-lg text-primary_color" />
                        View All Services
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="w-full mt-4" />
                <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
                  <div className="">
                    <p className="font-semibold">
                      Cupping Massage
                      <span className="font-normal">(20 Min)</span>
                    </p>
                    <div className="flex items-center gap-3">
                      <p className="text-2xl font-semibold text-primary_color">
                        £18{" "}
                        <span className="line-through text-[#898989] font-normal text-base">
                          £28
                        </span>
                      </p>
                      <p className="text-base font-semibold text-green_color">
                        {" "}
                        30% OFF
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="primary">Book Now</Button>
                    <Button variant="secondary">Quick view</Button>
                  </div>
                </div>
                <hr className="w-full" />
                <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
                  <div className="">
                    <p className="font-semibold">
                      Cupping Massage
                      <span className="font-normal">(20 Min)</span>
                    </p>
                    <div className="flex items-center gap-3">
                      <p className="text-2xl font-semibold text-primary_color">
                        £18{" "}
                        <span className="line-through text-[#898989] font-normal text-base">
                          £28
                        </span>
                      </p>
                      <p className="text-base font-semibold text-green_color">
                        {" "}
                        30% OFF
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="primary">Book Now</Button>
                    <Button variant="secondary">Quick view</Button>
                  </div>
                </div>
              </div>
              <div className="border border-[#DBDBDB] rounded-lg">
                <div className="flex flex-col justify-between gap-1 p-3 text-left xl:flex-row xl:items-center xl:gap-2">
                  <div className="space-y-2 xl:space-y-3">
                    <h1 className="text-base font-semibold">Moon Massage</h1>
                    <p className="text-primary_color">Nail Salons</p>
                    <div className="flex items-center gap-3">
                      <div className="bg-[#7f52861a] p-2 rounded-full">
                        <MdLocationPin className="text-lg text-primary_color" />
                      </div>
                      <div>
                        <p>Barnack , Cambridge 181.2 miles</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-3">
                        <FaStar className="text-lg text-[#FFCC00]" />
                        <p>3.0</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-[#29AD17] p-2 rounded-full">
                          <FaWhatsapp className="text-lg text-white" />
                        </div>
                        <div className="bg-[#4664A0] p-2 rounded-full">
                          <ImFacebook className="text-lg text-white" />
                        </div>
                        <div className="bg-[#000] p-2 rounded-full">
                          <BsTwitterX className="text-lg text-white" />
                        </div>
                        <div className="bg-[#A4A4A4] p-2 rounded-full">
                          <LuBookmark className="text-lg text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="flex items-center justify-center gap-2 outline_button md:px-5"
                      >
                        <MdLocationPin className="text-lg text-primary_color" />
                        View All Services
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="w-full mt-4" />
                <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
                  <div className="">
                    <p className="font-semibold">
                      Cupping Massage
                      <span className="font-normal">(20 Min)</span>
                    </p>
                    <div className="flex items-center gap-3">
                      <p className="text-2xl font-semibold text-primary_color">
                        £18{" "}
                        <span className="line-through text-[#898989] font-normal text-base">
                          £28
                        </span>
                      </p>
                      <p className="text-base font-semibold text-green_color">
                        {" "}
                        30% OFF
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="primary">Book Now</Button>
                    <Button variant="secondary">Quick view</Button>
                  </div>
                </div>
                <hr className="w-full" />
                <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
                  <div className="">
                    <p className="font-semibold">
                      Cupping Massage
                      <span className="font-normal">(20 Min)</span>
                    </p>
                    <div className="flex items-center gap-3">
                      <p className="text-2xl font-semibold text-primary_color">
                        £18{" "}
                        <span className="line-through text-[#898989] font-normal text-base">
                          £28
                        </span>
                      </p>
                      <p className="text-base font-semibold text-green_color">
                        {" "}
                        30% OFF
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="primary">Book Now</Button>
                    <Button variant="secondary">Quick view</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PopularSalon/>
      </div>
    </div>
  );
};

export default ServiceListing;
