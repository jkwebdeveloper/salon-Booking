import dynamic from "next/dynamic";
import React from "react";
const Herosection = dynamic(() => import("@/pages/Home/HeroSection"));
const Pampertree = dynamic(() => import("@/pages/Home/Pampertree"));
const Featured = dynamic(() => import("@/pages/Home/Featured"));
const Treatments = dynamic(() => import("@/pages/Home/Treatments"));
const Gifts = dynamic(() => import("@/pages/Home/Gifts"));

const Home = () => {
  return (
    <div className="space-y-10">
      <Herosection />
      <div className="mx-2 space-y-10 lg:mx-5">
        <Pampertree />
        <Featured />
        <Treatments />
        <Gifts />
      </div>
    </div>
  );
};

export default Home;
