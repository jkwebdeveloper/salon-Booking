import Button from '@/components/ui/button';
import React from 'react';
import { AiFillWarning } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';

const Modal = () => {
    return (
        <div className="w-full space-y-3">
            <p className=" text-[#656565]">2 services</p>
            <p className="text-primary_color font-bold text-2xl">From £25</p>
            <div className="space-y-2">
                <p className="font-semibold">About this service</p>
                <p className="text-[#656565] text-sm">
                    This treatment is not suitable for pregnant people.
                </p>
                <p className="text-[#656565] text-sm">
                    This indulgent massage uses gently warmed basalt stones to
                    allow your therapist to work deeper into the areas of
                    concern.
                </p>
                <ul className="ml-5">
                    <li className="list-disc text-[#656565] text-sm">
                        First, during an initial consultation, your therapist
                        does a postural analysis and asks about any muscles that
                        require special attention.
                    </li>
                    <li className="list-disc text-[#656565] text-sm">
                        Then your therapist leaves the room to allow you to
                        undress with complete privacy.
                    </li>
                    <li className="list-disc text-[#656565] text-sm">
                        Once you are ready, your therapist begins by placing the
                        warmed stones on specific trigger points on your body.
                    </li>
                </ul>
            </div>
            <p className="font-semibold">Service rating</p>
            <div className="flex items-center gap-3">
                <p className="text-[56px] font-semibold">4.0</p>
                <div className="flex-col space-y-2">
                    <div className="flex items-center gap-2">
                        <FaStar className="text-[#FFCC00]" />
                        <FaStar className="text-[#FFCC00]" />
                        <FaStar className="text-[#FFCC00]" />
                        <FaStar className="text-[#e0e0e0]" />
                        <FaStar className="text-[#e0e0e0]" />
                    </div>
                    <p className="text-sm text-[#7A7A7A]">24 reviews</p>
                </div>
            </div>
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <FaStar className="text-[#FFCC00]" />
                    <FaStar className="text-[#FFCC00]" />
                    <FaStar className="text-[#FFCC00]" />
                    <FaStar className="text-[#FFCC00]" />
                    <FaStar className="text-[#e0e0e0]" />
                </div>
                <p className="text-[#656565] text-sm">
                    {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.`}{' '}
                </p>
                <p className="font-semibold">Ellen McLaughlin</p>
                <p className="text-[#656565] text-sm">2 hours ago</p>
            </div>
            <div className="flex items-center">
                <div className="w-1 bg-[#0AADA4] h-10 mr-3"></div>
                <div className="flex-col">
                    <p className="text-[#0AADA4] text-sm">Store replay</p>
                    <p className="t">
                        Thank you Martina, I know Kelly will appreciate such a
                        genuine review
                    </p>
                </div>
            </div>
            <hr />
            <div className="flex items-center gap-2">
                <FaStar className="text-[#FFCC00]" />
                <FaStar className="text-[#FFCC00]" />
                <FaStar className="text-[#FFCC00]" />
                <FaStar className="text-[#e0e0e0]" />
                <FaStar className="text-[#e0e0e0]" />
            </div>
        </div>
    );
};

export default Modal;
