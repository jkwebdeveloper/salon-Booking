import Button from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <div className="w-full relative h-[80vh] 2xl:h-[75vh]">
      <div>
        <Image
          src={"/static/images/banner.jpg"}
          loading="lazy"
          alt="Hero Banner"
          className="absolute object-cover w-full h-full"
          width={1920}
          height={1080}
        />
      </div>
      <div className="container w-full h-full grid grid-cols-2 gap-3 mx-auto ">
        <Image
          src={"/static/images/bannerimg.png"}
          loading="lazy"
          alt="Hero Banner"
          className="absolute md:block hidden h-full"
          width={520}
          height={580}
        />
        <div className="absolute md:w-1/2 space-y-6 md:left-[50%] top-[40%]">
          <h1 className="md:text-5xl text-2xl font-extrabold leading-tight">
            Join Us For All{" "}
            <span className="text-primary_color">
              Hair And Beauty Salon Services
            </span>
          </h1>
          <Button type="button" variant="primary">Join us</Button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
