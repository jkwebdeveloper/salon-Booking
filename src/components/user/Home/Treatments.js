import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v4 } from "uuid";

const ImagesData = [
  {
    id: 1,
    image: "/static/images/Popular Treatment/img.png",
    title: "Spa Days",
    slug: "spa-days",
    des: "12 Listings",
  },
  {
    id: 2,
    image: "/static/images/Popular Treatment/img2.png",
    title: "Body Treatments",
    slug: "body-treatments",
    des: "593 Listings",
  },
  {
    id: 3,
    image: "/static/images/Popular Treatment/img3.png",
    title: "Beauty Salons",
    slug: "beauty-salons",
    des: "8 Listings",
  },
  {
    id: 4,
    image: "/static/images/Popular Treatment/img4.png",
    title: "Hair Salons",
    slug: "hair-salons",
    des: "1650 Listings",
  },
  {
    id: 5,
    image: "/static/images/Popular Treatment/img5.png",
    title: "Nail Salons",
    slug: "nail-salons",
    des: "1592 Listings",
  },
  {
    id: 6,
    image: "/static/images/Popular Treatment/img6.png",
    title: "Hair Removal",
    slug: "hair-removal",
    des: "2167 Listings",
  },
  {
    id: 7,
    image: "/static/images/Popular Treatment/img7.png",
    title: "Brows & Lashes",
    slug: "brows-lashes",
    des: "2264 Listings",
  },
  {
    id: 8,
    image: "/static/images/Popular Treatment/img8.png",
    title: "Massage",
    slug: "massage",
    des: "1710 Listings",
  },
];

const Treatments = () => {
  return (
    <div className="w-full space-y-4">
      <p className="text-2xl font-semibold text-black uppercase title heading">
        Popular <span className="text-primary_color">treatments</span>
      </p>
      <div className="grid grid-cols-2 gap-3 rounded-lg md:grid-cols-3 xl:grid-cols-4">
        {ImagesData.map((item) => (
          <Link href={`/service/${item?.slug}`}
            key={v4()}
            className="relative flex items-center justify-center text-center cursor-pointer"
          >
            <Image
              src={item?.image}
              loading="lazy"
              // fill
              width={500}
              height={200}
              alt=""
              className="relative object-cover w-full h-full"
            />
            <p className="absolute md:text-2xl text-lg lg:top-[78%] md:top-[73%] top-[66%] text-center font-bold text-white">
              {item?.title}
            </p>
            <p className="absolute md:top-[88%] top-[83%] text-center text-white">
              {item?.des}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
