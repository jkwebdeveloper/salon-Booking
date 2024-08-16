import { useCategory } from "@/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v4 } from "uuid";

const Treatments = () => {
  const mainCat = useCategory();
  return (
    <div className="w-full space-y-4">
      <p className="text-2xl font-semibold text-black uppercase title heading">
        Popular <span className="text-primary_color">treatments</span>
      </p>
      <div className="grid grid-cols-2 gap-8 rounded-lg md:grid-cols-3 xl:grid-cols-4">
        {mainCat.data.map((item) => (
          item?.services_count
            ? <Link key={v4()} href={`/service/${item?.slug_url}`} className="relative flex items-center justify-center overflow-hidden text-center cursor-pointer rounded-xl">
              <Image
                src={process.env.NEXT_PUBLIC_SERVERURL + item.cat_image}
                loading="lazy"
                // fill
                width={500}
                height={200}
                alt=""
                className="relative object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <p className="absolute md:text-2xl text-lg lg:top-[78%] md:top-[73%] top-[66%] text-center font-bold text-white">
                {item?.title}
              </p>
              <p className="absolute md:top-[88%] top-[83%] text-center text-white">
                {(item?.services_count) || 0} Listings
              </p>
            </Link>
            : null
        ))}
      </div>
    </div>
  );
};

export default Treatments;
