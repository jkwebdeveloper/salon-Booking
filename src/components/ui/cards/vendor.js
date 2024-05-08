import React, { useRef, useState } from "react";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";
import Link from "next/link";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Button } from "@/components";
import { ServiceSVG } from "@/constants/svg";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import QuickView from "@/components/ui/cards/quickview";
import { v4 } from "uuid";

function Vendor() {
    return (
        <div className="border border-[#DBDBDB] rounded-lg">
            <div className="grid flex-col grid-cols-2 gap-1 p-3 text-left">
                <div className="relative pe-5">
                    <Carousel
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                        className="w-full overflow-hidden rounded-md ring-1 ring-neutral-300"
                    >
                        <CarouselContent>
                            <CarouselItem key={v4()} className="w-full pl-0 basis-1/1">
                                <Image
                                    src={"/static/images/hair.png"}
                                    height={500}
                                    width={500}
                                    alt="moon"
                                    loading="lazy"
                                    className="object-cover w-full h-full"
                                />
                            </CarouselItem>
                            <CarouselItem key={v4()} className="w-full pl-0 basis-1/1">
                                <Image
                                    src={"/static/images/hair.png"}
                                    height={500}
                                    width={500}
                                    alt="moon"
                                    loading="lazy"
                                    className="object-cover w-full h-full"
                                />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious variant="icon" className="h-5 p-0 min-w-5 bg-[rgba(0,0,0,0.4)] text-white backdrop-blur-md font-bold ring-1 ring-neutral-400" />
                        <CarouselNext variant="icon" className="h-5 p-0 min-w-5 bg-[rgba(0,0,0,0.4)] text-white backdrop-blur-md font-bold ring-1 ring-neutral-400" />
                    </Carousel>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-semibold">Moon Massage</h1>
                    <p className="text-primary_color">Nail Salons</p>
                    <div className="flex items-center gap-3">
                        <div className="bg-[#7f52861a] p-1 rounded-full">
                            <MdLocationPin className="text-sm text-primary_color" />
                        </div>
                        <div>
                            <p>Barnack , Cambridge 181.2 miles</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 my-2">
                        <div className="flex items-center gap-3">
                            <FaStar className="text-[0.7rem] text-[#FFCC00]" />
                            <p>3.0</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-[#29AD17] p-1 rounded-full">
                                <FaWhatsapp className="text-white text-md" />
                            </div>
                            <div className="bg-[#4664A0] p-1 rounded-full">
                                <ImFacebook className="text-white text-md" />
                            </div>
                            <div className="bg-[#000] p-1 rounded-full">
                                <BsTwitterX className="text-white text-md" />
                            </div>
                            <div className="bg-[#A4A4A4] p-1 rounded-full">
                                <LuBookmark className="text-white text-md" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="uppercase ps-3 group"
                            asChild
                        >
                            <Link href={'/service/moon-massage'}>
                                <ServiceSVG pathClass="group-hover:fill-white fill-primary" />
                                View All Services
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
            <hr className="w-full mt-4" />
            <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
                <div className="">
                    <p className="font-semibold">
                        Cupping Massage
                        <span className="font-normal text-[#808080] text-sm">
                            {" "}
                            (20 Min)
                        </span>
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
                    <Button variant="primary" asChild>
                        <Link href={'/details/span-massage/2'}> Book Now</Link>
                    </Button>
                    <Dialog>
                        <DialogTrigger>
                            <Button variant="secondary">Quick view</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[825px]">
                            <QuickView />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <hr className="w-full" />
            <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
                <div className="">
                    <p className="font-semibold">
                        Cupping Massage
                        <span className="font-normal text-[#808080] text-sm">
                            {" "}
                            (20 Min)
                        </span>
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
                    <Button variant="primary" asChild>
                        <Link href={'/details/span-massage/2'}> Book Now</Link>
                    </Button>
                    <Dialog>
                        <DialogTrigger>
                            <Button variant="secondary">Quick view</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[825px]">
                            <QuickView />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

export default Vendor