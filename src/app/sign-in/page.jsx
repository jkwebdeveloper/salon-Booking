import Image from "next/image";
import React from "react";
import signin from "../../../public/static/images/signin.png";
import logo from "../../../public/static/images/logo.png";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-screen grid lg:grid-cols-2 place-items-center items-center h-screen">
      <div className="lg:block hidden">
        <Image
          src={signin}
          loading="lazy"
        //   fill
          alt="signin"
          
          className="h-screen"
        />
      </div>
      <div className="lg:w-full w-screen bg-[#FAFAFA] h-full p-3 flex items-center justify-center relative z-0">
        <div>
          <Link href="/">
            <Image src={logo} loading="lazy" alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
