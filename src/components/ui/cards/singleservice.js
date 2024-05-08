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

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components";
import QuickView from "@/components/ui/cards/quickview";
import Link from "next/link";

function SingleService({ item }) {
    const [isFavourite, setIsFavourite] = useState(false);
    return (
        <div className="relative w-full mb-2 space-y-4" key={item.id}>
            <div
                onClick={() => setIsFavourite(!isFavourite)}
                className={`absolute top-3 right-3 ${isFavourite ? "bg-red-500" : "bg-[#b6b6b6]"
                    } rounded-full p-2 cursor-pointer`}
            >
                {isFavourite ? (
                    <RiHeartFill className="text-2xl text-white" />
                ) : (
                    <IoHeartOutline className="text-2xl text-white" />
                )}
            </div>
            <div>
                <div
                    className="mx-1 bg-white rounded-lg shadow-lg"
                    key={item?.id}
                >
                    <Image
                        src={"/static/images/spa_life.png"}
                        alt="spa life"
                        width={400}
                        height={300}
                        priority={true}
                        className="object-cover w-full h-auto"
                    />
                    <div className="p-3 space-y-2 md:space-y-3">
                        <div className="">
                            <h1 className="text-sm font-semibold md:text-base">
                                {item?.title}
                                <span className="font-normal">
                                    {" "}
                                    {item?.titleoption}
                                </span>
                            </h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-[#7f52861a] p-2 rounded-full">
                                <MdLocationPin className="text-sm text-primary_color" />
                            </div>
                            <div>
                                <p className="text-sm md:text-base">
                                    {item?.location}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3">
                            <div className="flex items-center gap-2 md:gap-3">
                                <FaStar className="text-sm text-[#FFCC00]" />
                                <p className="text-sm md:text-base">{item?.rating}</p>
                            </div>
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
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-2xl font-semibold text-primary_color">
                                £249{" "}
                                <span className="line-through text-[#898989] font-normal text-base">
                                    £289
                                </span>
                            </p>
                            <p className="text-base font-semibold text-green_color">
                                {" "}
                                30% OFF
                            </p>
                        </div>
                        <div className="flex flex-col items-center w-full gap-3 md:flex-row">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="secondary" className="flex-1 px-0">
                                        <IoIosEye className="text-base text-white" />{" "}
                                        Quick view
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[825px]">
                                    <QuickView />
                                </DialogContent>
                            </Dialog>

                            <Button variant="primary" className="flex-1 px-0" asChild>
                                <Link href={'/details/span-massage/2'}><GrCart className="text-base text-white" /> Book Now</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleService