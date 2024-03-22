import React from "react";
import banner from "../../public/static/images/Pagesbanner.jpg";
import Image from "next/image";

const CommonBanner = ({ title }) => {
  return (
    <div className="relative w-full">
      <Image
        src={banner}
        alt=""
        loading="lazy"
        width={300}
        height={300}
        className="relative w-full"
        // layout="fill"
        // fill
        objectFit="cover"
      />
      <div className="absolute w-full top-1/2">
        <h1 className="text-center text-2xl text-white font-semibold mx-auto flex items-center justify-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default CommonBanner;
