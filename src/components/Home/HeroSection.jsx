import Image from "next/image";
import React from "react";
import Banner from "../../../public/static/images/banner.jpg";
import dynamic from "next/dynamic";
const FindNearByForm = dynamic(() => import("./FindNearByForm"));

const Herosection = () => {
  return (
    <div className="w-full relative h-[80vh] 2xl:h-[75vh]">
      <div>
        <Image
          src={Banner}
          loading="lazy"
          
          // fill
          alt=""
          className="absolute object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-center items-center h-full w-full">
        <FindNearByForm />
      </div>
    </div>
  );
};

export default Herosection;
