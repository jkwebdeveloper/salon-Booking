import React, { useState } from 'react'
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import { RiHeartFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { GrCart } from "react-icons/gr";
import { IoIosEye } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components";
import QuickView from "@/components/global/QuickView";
import Link from "next/link";

function SingleService({ service, addToFavorite }) {
    const { id, salonName, service_title, salonImage, salonAddress, sale_price, price, duration, salonID, whtsup_link, facebook_link, twitter_link, instagram_link, isFavourite } = service || {};
    return (
        <div className="relative w-full mb-2 space-y-4">
            <div className="mx-1 overflow-hidden bg-white shadow-lg rounded-xl">
                <div className={`absolute top-3 right-3 w-10 h-10 ${isFavourite ? "bg-red-500" : "bg-neutral-50"} rounded-full`}>
                    {isFavourite
                        ? <RiHeartFill className="w-full h-full p-2 text-white cursor-pointer" onClick={e => addToFavorite({ id, type: "remove" })} />
                        : <IoHeartOutline className="w-full h-full p-2 cursor-pointer text-neutral-400" onClick={e => addToFavorite({ id, type: "add" })} />}
                </div>
                <Image
                    src={(salonImage && salonImage?.images) ? process.env.NEXT_PUBLIC_SERVERURL + salonImage?.images : "/static/images/spa_life.png"}
                    alt={service_title}
                    width={400}
                    height={300}
                    priority={true}
                    className="flex items-center justify-center object-cover w-full h-auto"
                />
                <div className="p-3 space-y-2 md:space-y-3">
                    <div className="">
                        <h1 className="text-sm font-semibold md:text-base">
                            {service_title}
                            <span className="font-normal ms-2">
                                ({salonName})
                            </span>
                        </h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-[#7f52861a] p-2 rounded-full">
                            <MdLocationPin className="text-sm text-primary_color" />
                        </div>
                        <div>
                            <p className="text-sm capitalize md:text-base">
                                {salonAddress || '-'}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="flex items-center gap-2 md:gap-3">
                            <FaStar className="text-sm text-[#FFCC00]" />
                            <p className="text-sm md:text-base">{0}</p>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3">
                            {whtsup_link ? <Link href={whtsup_link} className="bg-[#29AD17] p-2 rounded-full">
                                <FaWhatsapp className="text-sm text-white" />
                            </Link> : null}
                            {facebook_link ? <Link href={facebook_link} className="bg-[#4664A0] p-2 rounded-full">
                                <ImFacebook className="text-sm text-white" />
                            </Link> : null}
                            {twitter_link ? <Link href={twitter_link} className="bg-[#000] p-2 rounded-full">
                                <BsTwitterX className="text-sm text-white" />
                            </Link> : null}
                            {instagram_link ? <Link href={instagram_link} className="bg-[#000] p-2 rounded-full">
                                <FaInstagram className="text-sm text-white" />
                            </Link> : null}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-2xl font-semibold text-primary_color">
                            £<span>{price}</span>
                        </p>
                        {sale_price != '0.00'
                            && <span className="line-through text-[#898989] font-normal text-base">
                                £{sale_price}
                            </span>
                        }
                        <p className="text-base font-semibold text-green_color">
                            {sale_price != '0.00' &&
                                ((+sale_price * 100 / +price).toFixed(2) + '% Off')}
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-full gap-3 md:flex-row">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="secondary" className="flex-1 px-0">Quick view</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[825px]">
                                <DialogTitle className="flex items-center -mt-2 text-2xl font-bold me-5">
                                    <span className="leading-tight">{service_title}</span>
                                    <span className="font-normal leading-tight text-[#808080] text-sm ms-2">
                                        ( {+duration * 60} Mins)
                                    </span>
                                </DialogTitle>
                                <QuickView service={service} />
                            </DialogContent>
                        </Dialog>

                        <Button variant="primary" className="flex-1 px-0" asChild>
                            <Link href={'/details/' + salonID}><GrCart className="text-base text-white" /> Book Now</Link>
                            {/* <Link href={'/details/old'}><GrCart className="text-base text-white" /> Book Now</Link> */}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleService