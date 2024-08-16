import React, { Fragment, useRef, useState } from "react";
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
    DialogTitle,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import QuickView from "@/components/global/QuickView";
import { v4 } from "uuid";

function Vendor({ vendor, services = [] }) {
    const { id, salon_name, type_of_salon, address_line_one, address_line_two, whtsup_link, facebook_link, twitter_link, salon_images = [] } = vendor || {};
    const featuredServices = services.filter((service) => service?.is_featured == '1');
    return (
        <div className="border border-[#DBDBDB] rounded-lg h-full ">
            <div className="grid flex-col gap-1 p-3 text-left xl:grid-cols-2">
                <div className="relative pe-5">
                    {salon_images?.length > 0
                        && <Carousel
                            opts={{
                                align: "center",
                                loop: true,
                            }}
                            className="w-full overflow-hidden rounded-md ring-1 ring-neutral-300"
                        >
                            <CarouselContent>
                                {salon_images.map((image) => (
                                    <CarouselItem key={v4()} className="w-full pl-0 basis-1/1">
                                        <Image
                                            src={process.env.NEXT_PUBLIC_SERVERURL + image?.images}
                                            height={500}
                                            width={500}
                                            alt="moon"
                                            loading="lazy"
                                            className="object-cover w-full h-full aspect-[1.35/1]"
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious variant="icon" className="h-5 p-0 min-w-5 bg-[rgba(0,0,0,0.4)] text-white backdrop-blur-md font-bold ring-1 ring-neutral-400" />
                            <CarouselNext variant="icon" className="h-5 p-0 min-w-5 bg-[rgba(0,0,0,0.4)] text-white backdrop-blur-md font-bold ring-1 ring-neutral-400" />
                        </Carousel>
                        || <Image src={"/static/images/placeholder.jpg"} height={500} width={500} alt="moon" loading="lazy" className="object-cover w-full h-full aspect-video" />
                    }
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-semibold capitalize">{salon_name}</h1>
                    <p className="text-primary_color">{type_of_salon}</p>
                    <div className="flex items-center gap-3">
                        <span className="bg-[#7f52861a] p-1 rounded-full"><MdLocationPin className="text-lg text-primary_color" /></span>
                        <span className="text-sm">
                            {address_line_one && address_line_one || address_line_two && '' || '-'}
                            {address_line_two && ' ' + address_line_two || ''}

                        </span>
                    </div>
                    <div className="flex items-center gap-3 my-2">
                        <div className="flex items-center gap-3">
                            <FaStar className="text-[0.7rem] text-[#FFCC00]" />
                            <p>3.0</p>
                        </div>
                        <div className="flex items-center gap-3">
                            {whtsup_link
                                && <Link target="_blank" href={whtsup_link} className="bg-[#29AD17] p-1 rounded-full">
                                    <FaWhatsapp className="text-white text-md" />
                                </Link>
                            }
                            {facebook_link
                                && <Link target="_blank" href={facebook_link} className="bg-[#4664A0] p-1 rounded-full">
                                    <ImFacebook className="text-white text-md" />
                                </Link>
                            }
                            {twitter_link
                                &&
                                <Link target="_blank" href={twitter_link} className="bg-[#000] p-1 rounded-full">
                                    <BsTwitterX className="text-white text-md" />
                                </Link>
                            }
                            <div className="bg-[#A4A4A4] p-1 rounded-full">
                                <LuBookmark className="text-white text-md" />
                            </div>
                        </div>
                    </div>
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="self-start uppercase ps-3 group"
                        asChild
                    >
                        <Link href={'/details/' + id}>
                            <ServiceSVG pathClass="group-hover:fill-white fill-primary" />
                            View All Services
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="">
                <hr className="w-full mt-4" />
                {(featuredServices.length && featuredServices || services.slice(0, 2))?.map((service, index) => (
                    <Fragment key={v4()}>
                        <div className="flex flex-col justify-between p-3 text-left xl:flex-row xl:items-center">
                            <div className="">
                                <p className="flex gap-1 font-semibold capitalize">
                                    {service?.service_title}
                                    <span className="font-normal text-[#808080] text-sm">
                                        ( {+service?.duration * 60} Mins)
                                    </span>
                                </p>
                                <div className="flex items-center gap-2">
                                    <p className="text-2xl font-semibold text-primary_color">
                                        £<span>{service?.price}</span>
                                    </p>
                                    {service?.sale_price != '0.00'
                                        && <span className="line-through text-[#898989] font-normal text-base">
                                            £{service?.sale_price}
                                        </span>
                                    }
                                    <p className="text-base font-semibold text-green_color">
                                        {service?.sale_price != '0.00' &&
                                            ((+service.sale_price * 100 / +service?.price).toFixed(2) + '% Off')}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Button variant="primary" asChild>
                                    <Link href={`/details/${vendor?.id}`}> Book Now</Link>
                                </Button>
                                <Dialog>
                                    <DialogTrigger className="" asChild>
                                        <Button variant="secondary">Quick view</Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[825px]">
                                        <DialogTitle className="flex items-center -mt-2 text-2xl font-bold me-5">
                                            <span className="leading-tight">{service?.service_title}</span>
                                            <span className="font-normal leading-tight text-[#808080] text-sm ms-2">
                                                ( {+service?.duration * 60} Mins)
                                            </span>
                                        </DialogTitle>
                                        <QuickView vendor={vendor} services={services} />
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                        {index != services.length - 1 && <hr className="w-full" />}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default Vendor