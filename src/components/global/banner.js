import React from "react";
import Image from "next/image";

const Banner = ({ title, background }) => {
    return (
        <div className="relative w-full">
            <Image src={background || '/static/images/Pagesbanner.jpg'} alt="" loading="lazy" width={1920} height={500} className="relative w-full" objectFit="cover" />
            <div className="absolute w-full top-1/2">
                <h1 className="flex items-center justify-center mx-auto text-2xl font-semibold text-center text-white uppercase">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default Banner;
