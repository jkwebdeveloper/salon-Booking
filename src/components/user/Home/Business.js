import Image from "next/image";
import React from "react";

import { Button } from "@/components";

const Business = () => {
  return (
    <div className="grid items-center justify-center grid-cols-1 gap-5 pb-20 lg:grid-cols-2 lg:gap-0">
      <div className="mx-auto">
        <Image
          src={"/static/images/Left-image.png"}
          width={500}
          height={500}
          alt=""
          loading="lazy"
          className=""
        />
        {/* <Image
          src={logo}
          alt=""
          loading="lazy"
          className="absolute z-10 left-10 top-10"
        />
        <div className="relative top-10 bg-black xl:w-[28rem] w-[20rem] h-[17rem] xl:h-[18.5rem] -right-10"></div> */}
      </div>
      <div className="mx-auto space-y-4 text-center lg:text-left">
        <p className="text-3xl font-bold text-black lg:text-5xl">
          Pamper Tree for <br />
          <span className="text-primary_color">Business</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
          posuere in leo ipsum ornare hendrerit. Vitae sollicitudin consectetur
          ultricies nec.{" "}
        </p>
        {/* <button type="button" className="primary_button">
          Connect With Us
        </button> */}
        <Button variant="primary" className="w-auto">
          Connect With Us
        </Button>
      </div>
    </div>
  );
};

export default Business;
