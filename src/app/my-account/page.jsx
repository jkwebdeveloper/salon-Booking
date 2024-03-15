"use client"
import dynamic from "next/dynamic";
import React, { useState } from "react";
const MainMenu = dynamic(() => import("@/components/MyAccount/MainMenu"));
const MainDetail = dynamic(() => import("@/components/MyAccount/MainDetail"));

const Page = () => {
  const [tabMenu, setTabMenu] = useState("Profile");
  return (
    <>
      <div className="bg-gradient-to-r bg-transparent from-[#711F7E]/100 to-[#E000AF]/100 h-20 w-full relative"></div>
      <div className="flex md:flex-row flex-col gap-4 md:px-5 px-1 lg:relative xl:-top-8 lg:-top-8 md:-top-8 -top-8">
        <MainMenu onTabChange={setTabMenu} tabMenu={tabMenu} />
        <MainDetail tabMenu={tabMenu}/>
      </div>
    </>
  );
};

export default Page;
