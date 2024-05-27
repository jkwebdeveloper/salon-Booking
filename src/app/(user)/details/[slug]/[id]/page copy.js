'use client'
import React, { useEffect } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { LuBookmark } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "@/components/ui/button";
import OurWork from "@/components/user/detail/OurWork";
import LookingFor from "@/components/user/detail/LookingFor";
import Review from "@/components/user/detail/Review";
import About from "@/components/user/detail/About";
import MeetTeam from "@/components/user/detail/MeetTeam";
import Featured from "@/components/user/Home/Featured";
import DownloadApp from "@/components/user/Home/DownloadApp";
import Location from "@/components/user/Home/Location";
import { useParams } from 'next/navigation'
import { POST } from "@/app/api/post";
import { GET } from "@/app/api/get";

const DetailPage = () => {
  const [salon, setSalon] = React.useState({});
  const todayDayName = new Date().toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3);
  const params = useParams();
  const { slug, id } = params;

  const getDetail = async () => {
    const resp = await POST.request({ url: `/get-salons-byid`, form: { id: id } });
    if (resp && resp.code == 200) {
      setSalon(resp.data);
    }
  }

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className="container space-y-6">
      {console.clear()}
      {console.log(salon?.service_group)}
      <h1 className="mt-5 text-3xl font-bold">{salon?.salon_name}</h1>
      <div className="flex flex-col items-start justify-between gap-2 lg:flex-row lg:items-center">
        <div className="flex flex-col items-start gap-3 md:flex-row lg:items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#D6D6D6]" />
              <FaStar className="text-[#D6D6D6]" />
            </div>
            <div>
              <p>3.0 (24)</p>
            </div>
          </div>
          {salon?.availability && salon?.availability.length > 0
            && <p>
              Open Today: {salon.availability.filter(available => available.day == todayDayName)[0].from_time.slice(0, 5)}
              - {salon.availability.filter(available => available.day == todayDayName)[0].to_time.slice(0, 5)}
            </p>
          }
          <p>{salon?.address_line_one} {salon?.address_line_two}</p>
        </div>
        <div className="flex items-center gap-3">
          {salon?.whtsup_link
            && <Link href={salon?.whtsup_link} className="bg-[#29AD17] p-2 rounded-full">
              <FaWhatsapp className="text-lg text-white" />
            </Link>
          }
          {salon?.facebook_link
            && <Link href={salon?.facebook_link} className="bg-[#4664A0] p-2 rounded-full">
              <ImFacebook className="text-lg text-white" />
            </Link>}
          {salon?.twitter_link
            && <Link href={salon?.twitter_link} className="bg-[#000] p-2 rounded-full">
              <BsTwitterX className="text-lg text-white" />
            </Link>
          }
          <div className="bg-[#A4A4A4] p-2 rounded-full">
            <LuBookmark className="text-lg text-white" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-[82%] gap-3">
          <Image
            src={"/static/images/Rectangle 7197.png"}
            width={1000}
            height={700}
          />
        </div>
        <div className="w-[40%]">
          <div className="grid gap-3">
            <Image
              src={"/static/images/Rectangle 7198.png"}
              width={400}
              height={300}
              className="w-full"
            />
            <div className="relative flex items-center justify-center w-full text-center cursor-pointer group">
              <div className="relative w-full overflow-hidden">
                <Image
                  src={"/static/images/Rectangle 7198.png"}
                  width={400}
                  height={300}
                  className="relative w-full"
                />
                <div className="absolute z-20 flex items-center justify-center w-full h-full p-10 space-y-3 text-sm text-white opacity-0 2xl:flex-row rounded-xl lg:p-2 bg-black/50 group-hover:bottom-0 group-hover:opacity-100">
                  <p className="text-3xl font-semibold ">2+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative h-[80vh] 2xl:h-[75vh]">
        <div>
          <Image
            src={"/static/images/banner.jpg"}
            loading="lazy"
            alt="Hero Banner"
            className="absolute object-cover w-full h-full"
            width={1920}
            height={1080}
          />
        </div>
        <div className="absolute w-full space-y-3">
          <p className="mt-4">Services</p>
          <div className="flex flex-col min-h-[55dvh] gap-4 md:flex-row md:mb-10">
            <div className="shadow-lg rounded-md h-fit min-h-[350px] md:w-[40%] lg:w-[25%] w-[90%] mx-auto space-y-5 z-2 bg-white">
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <p>All Services</p>
                  <p>(408)</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Nail Salons</p>
                  <p>(408)</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Hair Salons</p>
                  <p>(4)</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Massage Therapies</p>
                  <p>(78)</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Spa Days</p>
                  <p>(12)</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Brows and Lashes</p>
                  <p>(24)</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Hair Removal</p>
                  <p>(408)</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Short Breaks</p>
                  <p>(30)</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Body Treatments</p>
                  <p>(8)</p>
                </div>
              </div>
            </div>
            <div className="md:w-4/5 w-[90%] mx-auto space-y-5 rounded-md shadow-lg h-fit min-h-[350px] z-2 bg-white">
              <div className="p-4 space-y-3">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <div className="flex items-center justify-between">
                        <div>
                          <p>Couples Massage</p>
                          <div className="flex items-center gap-2">
                            <p>2 hr</p>
                            <p className="text-[#0AADA4]">Show Details</p>
                          </div>
                        </div>
                        <div className="ml-auto">
                          <p className="text-[#EA2C6D]">From £249</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-[#FAFAFA] space-y-3 p-3 border rounded-lg border-[#E0E0E0]">
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="font-bold">
                              Sunday Soother Spa Break
                              <span className="text-[#808080] font-normal">
                                (50 Min)
                              </span>
                            </p>
                            <p className="text-primary_color">
                              £199 <span>£299 </span>{" "}
                              <span className="text-[#29AD17]">30% OFF</span>
                            </p>
                          </div>
                          <Link href="/employee-time">
                            <Button variant="primary">Book Now</Button>
                          </Link>
                        </div>
                        <hr />
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="font-bold">
                              Sunday Soother Spa Break
                              <span className="text-[#808080] font-normal">
                                (50 Min)
                              </span>
                            </p>
                            <p className="text-primary_color">
                              £199 <span>£299 </span>{" "}
                              <span className="text-[#29AD17]">30% OFF</span>
                            </p>
                          </div>
                          <Button variant="primary">Book Now</Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      <div className="flex items-center justify-between">
                        <div>
                          <p>Couples Massage</p>
                          <div className="flex items-center gap-2">
                            <p>2 hr</p>
                            <p className="text-[#0AADA4]">Show Details</p>
                          </div>
                        </div>
                        <div className="ml-auto">
                          <p className="text-[#EA2C6D]">From £249</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-[#FAFAFA] space-y-3 p-3 border rounded-lg border-[#E0E0E0]">
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="font-bold">
                              Sunday Soother Spa Break
                              <span className="text-[#808080] font-normal">
                                (50 Min)
                              </span>
                            </p>
                            <p className="text-primary_color">
                              £199 <span>£299 </span>{" "}
                              <span className="text-[#29AD17]">30% OFF</span>
                            </p>
                          </div>
                          <Button variant="primary">Book Now</Button>
                        </div>
                        <hr />
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="font-bold">
                              Sunday Soother Spa Break
                              <span className="text-[#808080] font-normal">
                                (50 Min)
                              </span>
                            </p>
                            <p className="text-primary_color">
                              £199 <span>£299 </span>{" "}
                              <span className="text-[#29AD17]">30% OFF</span>
                            </p>
                          </div>
                          <Button variant="primary">Book Now</Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      <div className="flex items-center justify-between">
                        <div>
                          <p>Couples Massage</p>
                          <div className="flex items-center gap-2">
                            <p>2 hr</p>
                            <p className="text-[#0AADA4]">Show Details</p>
                          </div>
                        </div>
                        <div className="ml-auto">
                          <p className="text-[#EA2C6D]">From £249</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-[#FAFAFA] space-y-3 p-3 border rounded-lg border-[#E0E0E0]">
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="font-bold">
                              Sunday Soother Spa Break
                              <span className="text-[#808080] font-normal">
                                (50 Min)
                              </span>
                            </p>
                            <p className="text-primary_color">
                              £199 <span>£299 </span>{" "}
                              <span className="text-[#29AD17]">30% OFF</span>
                            </p>
                          </div>
                          <Button variant="primary">Book Now</Button>
                        </div>
                        <hr />
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="font-bold">
                              Sunday Soother Spa Break
                              <span className="text-[#808080] font-normal">
                                (50 Min)
                              </span>
                            </p>
                            <p className="text-primary_color">
                              £199 <span>£299 </span>{" "}
                              <span className="text-[#29AD17]">30% OFF</span>
                            </p>
                          </div>
                          <Button variant="primary">Book Now</Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <OurWork />
      </div>
      <div>
        <LookingFor />
      </div>
      <div>
        <Review />
      </div>
      <div>
        <About />
      </div>
      <div>
        <MeetTeam />
      </div>
      <div>
        <Featured />
      </div>
      <div>
        <DownloadApp />
      </div>
      <div>
        <Location />
      </div>
    </div>
  );
};

export default DetailPage;
