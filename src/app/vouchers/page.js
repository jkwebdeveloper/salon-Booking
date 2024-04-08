import React from "react";
import { Banner, Button } from "@/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";
import PopularSalon from "@/components/user/Home/PopularSalon";
import Location from "@/components/user/Home/Location";
import Link from "next/link";

const voucherData = [
  {
    id: 1,
    images: "/static/images/spa_life.png",
    dec: "20% OFF ON Any Salon service booking",
    price: "£20.00",
  },
  {
    id: 2,
    images: "/static/images/spa_life.png",
    dec: "20% OFF ON Any Salon service booking",
    price: "£20.00",
  },
  {
    id: 3,
    images: "/static/images/spa_life.png",
    dec: "20% OFF ON Any Salon service booking",
    price: "£20.00",
  },
  {
    id: 4,
    images: "/static/images/spa_life.png",
    dec: "20% OFF ON Any Salon service booking",
    price: "£20.00",
  },
  {
    id: 5,
    images: "/static/images/spa_life.png",
    dec: "20% OFF ON Any Salon service booking",
    price: "£20.00",
  },
  {
    id: 6,
    images: "/static/images/spa_life.png",
    dec: "20% OFF ON Any Salon service booking",
    price: "£20.00",
  },
  {
    id: 7,
    images: "/static/images/spa_life.png",
    dec: "20% OFF ON Any Salon service booking",
    price: "£20.00",
  },
  {
    id: 8,
    images: "/static/images/spa_life.png",
    dec: "20% OFF ON Any Salon service booking",
    price: "£20.00",
  },
];

const Vouchers = () => {
  return (
    <div className="space-y-8">
      <Banner title="PamperTree Vouchers" />
      <div className="container space-y-4">
        <div className="px-3 space-y-4 text-center">
          <p className="text-[#4D4D4D] xl:text-center text-justify">
            We all have those people amongst our friends and family that are so
            difficult to find a gift for! Giving a voucher from PamperTree
            allows them the freedom to find the treatment, service, product, or
            even a short break to recharge their batteries. Something that they
            will get maximum pleasure from, and you are certain that this time
            you have given the perfect gift. Suddenly you are a legend amongst
            your family and friends as having come up with the ideal solution!
          </p>
          <p className="text-2xl font-semibold text-black ">
            PamperTree <span className="text-primary_color">Gift Vouchers</span>
          </p>
          <p className="text-[#4D4D4D] xl:text-center text-justify">
            Our gift vouchers can be redeemed against so many wonderful
            experiences, meaning that there will be something to fit even the
            most discriminating family member or friend! Maybe a spa day will be
            the TLC they would never treat themselves to, or allow them to
            choose from any number of options for pampering and wellbeing
            treatments. Alternatively, they can try something entirely out of
            their comfort zone and book an Away Day, hot air ballooning perhaps,
            or zorbing. How they spend their gift voucher is up to them, so this
            takes all the stress about finding the ideal present away from you,
            because you have found the gift that cannot fail to please. There is
            plenty of time for them to browse the PamperTree website and be
            inspired by the range of things to do, products to purchase, or
            treatments to indulge in, because the PamperTree Voucher lasts for a
            full 12 months. So, they can find the time to enjoy your gift
            voucher as and when it is most convenient to them. Everyone loves a
            Gift Voucher from PamperTree because it is so flexible! Whether you
            are giving to your grandchildren or your grandparents, they can find
            the service that suits them best. A PamperTree gift Voucher opens up
            the whole world of beauty treatments, fun days out, short breaks,
            massage and more options than we can list by using the PamperTree
            search bar! You will be remembered as giving the best gift of all.
          </p>
        </div>
        <p className="text-2xl font-semibold">8 Vouchers Available</p>
        <div className="flex flex-col min-h-[55dvh] gap-4 px-1 md:flex-row md:px-5 md:mb-10">
          <div className="shadow-lg rounded-md h-fit md:w-[40%] lg:w-[25%] w-[90%] mx-auto space-y-3 p-4 bg-white">
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
            <Button variant="primary" className="w-full">
              Show results
            </Button>
          </div>
          <div className="md:w-4/5 w-[90%] mx-auto space-y-5 h-fit min-h-[350px]">
            <div className="grid items-center grid-cols-2 gap-4 xl:grid-cols-3">
              {voucherData.map((item) => (
                <Link href="/voucher_details">
                  <div
                    className="mx-1 space-y-3 bg-white shadow-lg rounded-xl"
                    key={item.id}
                  >
                    <Image
                      src={"/static/images/spa_life.png"}
                      alt="spa life"
                      loading="lazy"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                    <div className="px-3 pb-5 space-y-3">
                      <p>{item.dec}</p>
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="bg-[#29AD17] p-2 rounded-full">
                            <FaWhatsapp className="text-sm text-white" />
                          </div>
                          <div className="bg-[#4664A0] p-2 rounded-full">
                            <ImFacebook className="text-sm text-white" />
                          </div>
                          <div className="bg-[#000] p-2 rounded-full">
                            <BsTwitterX className="text-sm text-white" />
                          </div>
                          <div className="bg-[#A4A4A4] p-2 rounded-full">
                            <LuBookmark className="text-sm text-white" />
                          </div>
                        </div>
                      </div>
                      <p className="text-2xl font-semibold text-primary_color">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <PopularSalon />
        <Location />
      </div>
    </div>
  );
};

export default Vouchers;
