'use client';
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
const Herosection = dynamic(() => import("@/components/Home/HeroSection"));
const Pampertree = dynamic(() => import("@/components/Home/Pampertree"));
const Featured = dynamic(() => import("@/components/Home/Featured"));
const Treatments = dynamic(() => import("@/components/Home/Treatments"));
const Gifts = dynamic(() => import("@/components/Home/Gifts"));
const Location = dynamic(() => import("@/components/Home/Location"));
const Groupon = dynamic(() => import("@/components/Home/Groupon"));
const PamperTeam = dynamic(() => import("@/components/Home/PamperTeam"));
const Offers = dynamic(() => import("@/components/Home/Offers"));
const PopularSalon = dynamic(() => import("@/components/Home/PopularSalon"));
const DownloadApp = dynamic(() => import("@/components/Home/DownloadApp"));
const Testimonials = dynamic(() => import("@/components/Home/Testimonials"));
const Business = dynamic(() => import("@/components/Home/Business"));

export default function Home() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="space-y-6 xl:space-y-11">
      <Herosection />
      <div className="container space-y-20 lg:space-y-14">
        <Pampertree />
        <Featured />
        <Treatments />
        <Gifts />
        <Location />
        <Groupon />
        <PamperTeam />
        <Offers />
        <PopularSalon />
        <DownloadApp />
        <Testimonials />
        <Business />
      </div>
    </div>
  );
}
