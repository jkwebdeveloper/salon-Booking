import Image from "next/image";
import React from "react";
import { v4 } from "uuid";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { SiMinutemailer } from "react-icons/si";

import { GET } from "@/app/api/get";
import { Banner } from "@/components";
import { createDOMPurify, JSDOM } from "@/components/other";

const window = (new JSDOM('')).window;
const DOMPurify = createDOMPurify(window);

const ImagesData = [
  {
    id: 1,
    image: "/static/images/PamperTree/img1.png",
    title: "Nail Salons",
  },
  {
    id: 2,
    image: "/static/images/PamperTree/img2.png",
    title: "Hair Salons",
  },
  {
    id: 3,
    image: "/static/images/PamperTree/img3.png",
    title: "Gifts For Children",
  },
  {
    id: 4,
    image: "/static/images/PamperTree/img4.png",
    title: "Mobile",
  },
  {
    id: 5,
    image: "/static/images/PamperTree/img5.png",
    title: "Gifts For Her",
  },
  {
    id: 6,
    image: "/static/images/PamperTree/img6.png",
    title: "Gifts For Him",
  },
  {
    id: 7,
    image: "/static/images/PamperTree/img7.png",
    title: "Gifts For Him",
  },
  {
    id: 8,
    image: "/static/images/PamperTree/img8.png",
    title: "Body Treatments",
  },
  {
    id: 9,
    image: "/static/images/PamperTree/img9.png",
    title: "Massage Therapies",
  },
  {
    id: 10,
    image: "/static/images/PamperTree/img10.png",
    title: "Spa Days",
  },
];

const AboutUs = async () => {
  const resp = await GET.request({ url: "/about-us" });
  const aboutusData = (resp && resp.code === 200) && resp.data || [];
  return (
    <div className="space-y-4">
      <Banner
        title="about us"
        background={"/static/images/Terms-conditions.jpg"}
      />
      <div className="container px-5 pt-10 pb-20 mx-auto space-y-5 md:px-16">
        <div className="grid items-start grid-cols-1 xl:grid-cols-2 lg:gap-0">
          <div>
            <Image
              src={"/static/images/Group.png"}
              alt="logo"
              loading="lazy"
              width={400}
              height={400}
            />
          </div>
          <div className="space-y-2">

            {aboutusData.map((item) => (
              <div key={item.id} className="space-y-2">
                <p className="text-sm text-gray-600">
                  {<p className="text-[#333333] text-sm text-justify" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.description) }} />}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container w-full space-y-4">
        <p className="text-2xl font-semibold text-center text-black uppercase">
          What we
          <span className="text-primary_color"> OFFER</span>
        </p>
        <p className="text-justify xl:text-center">
          Here at PamperTree, we are dedicated to providing a comprehensive
          range of beauty treatments to anyone who wants one. This is why we
          have scoured the country in order to find the best beauty salons and
          mobile beauty services near you. Whether you are looking for a
          hairdresser for your regular cut and colour or a luxury day spa in
          order to enjoy a couples spa day with someone special, you will find
          everything that you need with PamperTree.
        </p>
        <p className="text-justify xl:text-center">
          When you search the PamperTree website, you can compare beauty
          treatments, venues, prices and customer reviews before choosing the
          options that suit you best. The addition of highlighted special
          offers, last-minute deals and loyalty schemes mean that enjoying some
          quality self-care time has never been easier or more affordable. You
          can even give someone else the gift of relaxation with one of
          PamperTree’s specially selected beauty gift vouchers.
        </p>
        <p className="text-justify xl:text-center">
          The choices are endless and the only limit is your imagination.
        </p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {ImagesData.map((item) => (
            <div
              key={v4()}
              className="relative flex items-center justify-center text-center cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item?.image}
                  loading="lazy"
                  width={300}
                  height={300}
                  // fill
                  alt=""
                  className="relative object-cover w-full h-full"
                />
                <div className="absolute z-20 flex-col items-center justify-center w-full h-full p-10 space-y-3 text-sm text-white transition-all duration-300 opacity-0 2xl:flex-row rounded-xl lg:p-2 hover:backdrop-blur-sm bg-black/50 -bottom-10 group-hover:bottom-0 group-hover:opacity-100">
                  <p className="text-justify">
                    The pursuit of beauty is something that the majority of us
                    continually follow in one way or another. Of course, this
                    predates the celebrity culture and social media influencers
                    that we associate this with today and which crosses all
                    cultures.  As we strive to keep our complexions clear,
                    fighting the effects of pollution, stress and lifestyle,
                    the UK beauty salons are ready to take our challenges...
                  </p>
                  <p className="block underline">Read more</p>
                </div>
              </div>
              <p className="absolute uppercase top-[78%] text-center font-bold text-white">
                {item?.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="container px-5 pt-10 pb-20 mx-auto space-y-5 text-center md:px-16">
        <p className="text-2xl font-semibold text-center text-black uppercase">
          Contact
          <span className="text-primary_color"> Information</span>
        </p>
        <div className="bg-gradient-to-r flex justify-around items-center from-[#80258A] py-8 px-4 rounded-xl to-[#C30F19]">
          <div className="flex items-center gap-20 text-center">
            <div className="space-y-4 text-center">
              <FiPhone className="mx-auto text-5xl text-white" />
              <p className="text-xl font-bold text-white">+44 7702 000707</p>
            </div>
            <div className="space-y-4 text-center">
              <SlLocationPin className="mx-auto text-5xl text-white" />
              <p className="text-xl font-bold text-white">
                15 Fulwood Place London
              </p>
            </div>
            <div className="space-y-4 text-center">
              <SiMinutemailer className="mx-auto text-5xl text-white" />
              <p className="text-xl font-bold text-white">
                info@pampertree.co.uk
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
