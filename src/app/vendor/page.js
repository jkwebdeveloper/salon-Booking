import Herosection from "@/components/vendor/Home/Herosection";
import PamperTree from "@/components/vendor/Home/PamperTree";
import Seller from "@/components/vendor/Home/Seller";
import SellerSection from "@/components/vendor/Home/SellerSection";
import Services from "@/components/vendor/Home/Services";
import Solution from "@/components/vendor/Home/Solution";
import Video from "@/components/vendor/Home/Video";
import React from "react";

const VendorPage = () => {
  return (
    <div className="space-y-7">
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
      <SellerSection />
    </div>
  );
};

export default VendorPage;
