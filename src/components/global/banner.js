import React from "react";
import Image from "next/image";

const Banner = ({ title, background }) => {
    return (
        <div className={`relative md:min-h-[200px] min-h-[200px] w-full z-[1]`} style={{ background: `url(${background || "/static/images/Pagesbanner.jpg"})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            {title && <div className="md:min-h-[300px] flex items-center justify-center">
                <h1 className="flex items-center justify-center mx-auto text-2xl font-semibold text-center text-white uppercase">
                    {title}
                </h1>
            </div>}
        </div>
    );
};

export default Banner;
