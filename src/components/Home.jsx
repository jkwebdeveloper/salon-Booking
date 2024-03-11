import dynamic from "next/dynamic";
import React from "react";
const Herosection = dynamic(() => import("@/pages/Home/HeroSection"));
const Pampertree = dynamic(() => import("@/pages/Home/Pampertree"));
const Featured = dynamic(() => import("@/pages/Home/Featured"));

const Home = () => {
  return (
    <div className="space-y-10">
      <Herosection />
      <div className="space-y-10 mx-5">
        <Pampertree />
        <Featured />
      </div>
    </div>
  );
};

export default Home;
