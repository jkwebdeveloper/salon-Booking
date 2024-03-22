"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
const MainMenu = dynamic(() => import("@/components/MyAccount/MainMenu"));
const MainDetail = dynamic(() => import("@/components/MyAccount/MainDetail"));
import bg from "../../../public/static/images/Myaccountbanner.jpg";

const page = () => {
  const [tabMenu, setTabMenu] = useState("Profile");
  return (
    <>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Image
          src={bg}
          alt=""
          loading="lazy"
          // width={300}
          // height={300}
          className="relative w-full"
          // layout="fill"
          // fill
          objectFit="cover"
        />
      </div>
      <div className="flex md:flex-row flex-col gap-4 md:px-5 px-1 lg:relative xl:-top-8 lg:-top-8 md:-top-8 -top-8">
        <MainMenu onTabChange={setTabMenu} tabMenu={tabMenu} />
        <MainDetail tabMenu={tabMenu} />
      </div>
    </>
  );
};

export default page;
