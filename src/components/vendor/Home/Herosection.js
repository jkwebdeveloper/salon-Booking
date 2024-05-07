import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
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
      <div className="container grid w-full h-full grid-cols-2 gap-3 mx-auto ">
        <Image
          src={"/static/images/bannerimg.png"}
          loading="lazy"
          alt="Hero Banner"
          className="absolute hidden h-full md:block"
          width={520}
          height={580}
        />
        <div className="absolute md:w-1/2 space-y-6 md:left-[50%] top-[40%]">
          <h1 className="text-2xl font-extrabold leading-tight md:text-5xl">
            Join Us For All{" "}
            <span className="text-primary_color">
              Hair And Beauty Salon Services
            </span>
          </h1>
          <Button type="button" variant="primary" asChild>
            <Link href="/vendor/register">Join Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
