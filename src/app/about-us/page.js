import { Banner } from "@/components";
import Image from "next/image";
import React from "react";
import { v4 } from "uuid";

import image1 from "/static/images/PamperTree/img1.png";
import image2 from "/static/images/PamperTree/img2.png";
import image3 from "/static/images/PamperTree/img3.png";
import image4 from "/static/images/PamperTree/img4.png";
import image5 from "/static/images/PamperTree/img5.png";
import image6 from "/static/images/PamperTree/img6.png";
import image7 from "/static/images/PamperTree/img7.png";
import image8 from "/static/images/PamperTree/img8.png";
import image9 from "/static/images/PamperTree/img9.png";
import image10 from "/static/images/PamperTree/img10.png";

const ImagesData = [
  {
    id: 1,
    image: image1,
    title: "Nail Salons",
  },
  {
    id: 2,
    image: image2,
    title: "Hair Salons",
  },
  {
    id: 3,
    image: image3,
    title: "Gifts For Children",
  },
  {
    id: 4,
    image: image4,
    title: "Mobile",
  },
  {
    id: 5,
    image: image5,
    title: "Gifts For Her",
  },
  {
    id: 6,
    image: image6,
    title: "Gifts For Him",
  },
  {
    id: 7,
    image: image7,
    title: "Gifts For Him",
  },
  {
    id: 8,
    image: image8,
    title: "Body Treatments",
  },
  {
    id: 9,
    image: image9,
    title: "Massage Therapies",
  },
  {
    id: 10,
    image: image10,
    title: "Spa Days",
  },
];

const AboutUs = () => {
  return (
    <div className="space-y-4">
      <Banner
        title="about us"
        background={"/static/images/Terms-conditions.jpg"}
      />
      <div className="container px-5 pt-10 pb-20 mx-auto space-y-5 md:px-16">
        <div className="grid items-center grid-cols-1 xl:grid-cols-2 lg:gap-0">
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
            <p className="text-[#333333] text-sm text-justify">
              With our own experience in the beauty and massage industry, there
              is no better company to understand the needs of both clients and
              providers across the full range of beauty and therapy services
              than PamperTree. Understanding both sides of the industry is
              essential when acting as the booking platform for clients and
              salons.
            </p>
            <p className="text-[#333333] text-sm text-justify">
              For clients, creating the easiest way to make their reservations
              at different salons, using our simple booking process saves so
              much time and is available when you have the opportunity to manage
              your personal calendar, 24/7. Need to change the time or date due
              to unforeseen circumstances? No problem! We have designed
              PamperTree to give you the best prices, the top-rated salons and
              the flexibility to keep you looking and feeling exceptional!
            </p>
            <p className="text-[#333333] text-sm text-justify">
              For salon managers, at PamperTree we increase your exposure to
              clients, attract new customers and give you the opportunity to
              show them what makes your business unique.
            </p>
            <p className="text-[#333333] text-sm text-justify">
              Connecting clients with the hair and beauty professionals and
              massage therapists they seek 24 hours a day, means that you, as a
              salon, are always “available” for them.
            </p>
            <p className="text-[#333333] text-sm text-justify">
              As the management at PamperTree, we have seen both sides of the
              business ourselves and realised that creating this online platform
              was the way to make everything easier, more efficient and simple,
              the finest way to be organised in this important part of everyday
              life, keeping you beautiful and healthy.
            </p>
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
      </div>
    </div>
  );
};

export default AboutUs;
