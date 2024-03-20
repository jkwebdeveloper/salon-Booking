import Image from "next/image";
import React from "react";
import image from "../../../public/static/images/Left-image.png";
import logo from "../../../public/static/images/logo.png";

const Business = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center lg:gap-0 gap-5 items-center">
      <div className="mx-auto">
        <Image
          src={image}
          height={300}
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
      <div className="space-y-4 mx-auto lg:text-left text-center">
        <p className="text-black font-bold  lg:text-5xl text-3xl">
          Pamper Tree for <br />
          <span className="text-primary_color">Business</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
          posuere in leo ipsum ornare hendrerit. Vitae sollicitudin consectetur
          ultricies nec.{" "}
        </p>
        <button type="button" className="primary_button">
          Connect With Us
        </button>
      </div>
    </div>
  );
};

export default Business;
