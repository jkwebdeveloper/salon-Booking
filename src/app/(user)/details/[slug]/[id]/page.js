import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import { LuBookmark } from 'react-icons/lu';
import { FaStar } from 'react-icons/fa6';
import Image from 'next/image';
import OurWork from '@/components/user/detail/OurWork';
import LookingFor from '@/components/user/detail/LookingFor';
import Review from '@/components/user/detail/Review';
import About from '@/components/user/detail/About';
import MeetTeam from '@/components/user/detail/MeetTeam';
import Featured from '@/components/user/Home/Featured';
import DownloadApp from '@/components/user/Home/DownloadApp';
import Location from '@/components/user/Home/Location';
import { POST } from '@/app/api/post';
import Gallery from './gallery';
import Services from './services';

const DetailPage = async ({ params }) => {
    const { slug, id } = params;
    const { data, code } = await POST.request({ url: `/get-salons-byid`, form: { id: id } });
    const { salon_name, salon_images } = data || {};


    return (
        <div className="container space-y-6">
            <h1 className="mt-5 text-3xl font-bold">{salon_name}</h1>
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
                    <p>Open Today: 9:00 AM - 6:00 PM</p>
                    <p>Street 420, Addington, London, EH1 1AE, UK</p>
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
            {salon_images.length
                ? <div className="flex items-center gap-3">
                    <Gallery salon_images={salon_images} />
                </div>
                : null
            }
            <div className="relative w-full h-auto">
                <div className="absolute inset-0">
                    <Image
                        src={'/static/images/banner.jpg'}
                        loading="lazy"
                        alt="Hero Banner"
                        className="object-cover w-full h-full"
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="relative z-10 w-full p-4 space-y-3 md:p-8">
                    <p className="mt-4 text-xl font-semibold md:text-2xl">Services</p>
                    <div className="flex flex-col gap-4 lg:flex-row min-h-auto md:mb-10">
                        <div className="shadow-lg rounded-md bg-white h-fit w-full lg:w-[25%] mx-auto space-y-5 z-2 min-h-[350px]">
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
                        <div className="shadow-lg rounded-md bg-white h-fit w-full lg:w-4/5 mx-auto space-y-5 z-2 min-h-[350px]">
                            <div className="p-4 space-y-3">
                                <Services />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OurWork />
            <LookingFor />
            <Review />
            <About />
            <MeetTeam />
            <Featured />
            <DownloadApp />
            <Location />
        </div>
    );
};

export default DetailPage;
