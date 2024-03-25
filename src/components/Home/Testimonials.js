"use client";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className="w-full space-y-4">
      <p className="text-2xl font-semibold text-black uppercase title heading">
        User’s <span className="text-primary_color">Testimonials</span>
      </p>
      <div className="relative w-full">
        <Swiper
          className="relative w-full"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={2.7}
          //   navigation={{
          //     prevEl: prevRef.current,
          //     nextEl: nextRef.current,
          //     enabled: true,
          //   }}
          observer={true}
          parallax={true}
          observeParents={true}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <div className="bg-[#F7F7F7] rounded-lg space-y-3 p-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                posuere in leo ipsum ornare hendrerit. Vitae sollicitudin
                consectetur ultricies nec.{" "}
              </p>
              <div className="flex items-center gap-3">
                <Image src={'/static/images/img.png'} alt="testimonial" width={150} height={150} loading="lazy" />
                <p className="text-[#3E3F3F] font-bold">Katerina Petrova</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F7F7F7] rounded-lg space-y-3 p-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                posuere in leo ipsum ornare hendrerit. Vitae sollicitudin
                consectetur ultricies nec.{" "}
              </p>
              <div className="flex items-center gap-3">
                <Image src={'/static/images/img.png'} width={150} height={150} alt="testimonial" loading="lazy" />
                <p className="text-[#3E3F3F] font-bold">Katerina Petrova</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F7F7F7] rounded-lg space-y-3 p-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                posuere in leo ipsum ornare hendrerit. Vitae sollicitudin
                consectetur ultricies nec.{" "}
              </p>
              <div className="flex items-center gap-3">
                <Image src={'/static/images/img.png'} width={150} height={150} alt="testimonial" loading="lazy" />
                <p className="text-[#3E3F3F] font-bold">Katerina Petrova</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F7F7F7] rounded-lg space-y-3 p-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                posuere in leo ipsum ornare hendrerit. Vitae sollicitudin
                consectetur ultricies nec.{" "}
              </p>
              <div className="flex items-center gap-3">
                <Image src={'/static/images/img.png'} width={150} height={150} alt="testimonial" loading="lazy" />
                <p className="text-[#3E3F3F] font-bold">Katerina Petrova</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F7F7F7] rounded-lg space-y-3 p-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                posuere in leo ipsum ornare hendrerit. Vitae sollicitudin
                consectetur ultricies nec.{" "}
              </p>
              <div className="flex items-center gap-3">
                <Image src={'/static/images/img.png'} width={150} height={150} alt="testimonial" loading="lazy" />
                <p className="text-[#3E3F3F] font-bold">Katerina Petrova</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
