import React, { cache } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import { LuBookmark } from 'react-icons/lu';
import { FaStar } from 'react-icons/fa6';

import OurWork from '@/components/user/detail/OurWork';
import LookingFor from '@/components/user/detail/LookingFor';
import Review from '@/components/user/detail/Review';
import About from '@/components/user/detail/About';
import MeetTeam from '@/components/user/detail/MeetTeam';
import Featured from '@/components/user/Home/Featured';
import DownloadApp from '@/components/user/Home/DownloadApp';
import Location from '@/components/user/Home/Location';
import { POST } from '@/app/api/post';
import Gallery from '@/app/(user)/details/[id]/gallery';
import Services from '@/app/(user)/details/[id]/services';
import { redirect } from 'next/navigation';
import { MetaTags } from '@/constants/metatags';

const getSalon = cache(async ({ id }) => {
    const { data, code } = await POST.request({ url: `/get-salons-byid`, form: { id } });
    return data;
});

export const generateMetadata = async ({ params }) => {
    const data = await getSalon({ id: params.id });
    return MetaTags.salonDetails({ title: data?.salon_name, description: data?.salon_description });
}

const DetailPage = cache(async ({ params }) => {
    const data = await getSalon({ id: params?.id });
    const { salon_name, salon_images } = data || {};

    if (!data) {
        redirect('/404');
    }
    return (
        <>
            <div className="space-y-10">
                <div className='container space-y-2'>
                    <h1 className="mt-6 text-3xl font-bold">{salon_name}</h1>
                    <div className="flex flex-col items-start justify-between gap-2 pb-4 lg:flex-row lg:items-center">
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
                    {salon_images?.length
                        ? <div className="flex items-center gap-3">
                            <Gallery salon_images={salon_images} />
                        </div>
                        : null
                    }
                </div>
                <div className="relative w-full h-auto bg-[url('/static/images/bg.svg')] bg-cover bg-no-repeat">
                    <div className="container relative z-10 w-full p-4 space-y-3 md:p-8">
                        <p className="mt-4 text-xl font-semibold md:text-2xl">Services</p>
                        <Services data={data} />
                    </div>
                </div>
                <div className='container space-y-10'>
                    {salon_images?.length
                        ? <div className="flex items-center gap-3">
                            <OurWork salon_images={salon_images} />
                        </div>
                        : null
                    }
                    <LookingFor />
                    <Review />
                </div>
                <div className='bg-[#FAFAFA]'>
                    <About data={data} />
                </div>
                <div className='container space-y-10'>
                    <MeetTeam />
                    <Featured />
                    <DownloadApp />
                    <Location />
                </div>
            </div>
        </>
    );
});

export default DetailPage;
