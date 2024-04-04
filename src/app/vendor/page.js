"use client";
import DownloadApp from "@/components/Home/DownloadApp";
import Single_blog_slider from "@/components/global/Single_blog_slider";
import Counter from "@/components/vendor/Home/Counter";
import Herosection from "@/components/vendor/Home/Herosection";
import PamperTree from "@/components/vendor/Home/PamperTree";
import Seller from "@/components/vendor/Home/Seller";
import SellerSection from "@/components/vendor/Home/SellerSection";
import Services from "@/components/vendor/Home/Services";
import Solution from "@/components/vendor/Home/Solution";
import Video from "@/components/vendor/Home/Video";
import Work from "@/components/vendor/Home/Work";
import React from "react";

const VendorPage = () => {
  return (
    <div className="space-y-14">
      <Herosection />
      <Seller />
      <div className="bg-[#faf9f9] py-6">
        <PamperTree />
      </div>
      <Solution />
      <div className="bg-[#faf9f9] py-6">
        <Services />
      </div>
      <Video />
      <div className="bg-[#faf9f9] py-8">
        <SellerSection />
      </div>
      <Counter />
      <div className="bg-[#faf9f9]">
        <Work />
      </div>
      <Single_blog_slider />
      <DownloadApp />
    </div>
  );
};

export default VendorPage;
