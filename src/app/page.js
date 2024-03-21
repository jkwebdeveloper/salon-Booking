import dynamic from "next/dynamic";
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

export default function Page() {
  return (
    <div className="xl:space-y-11 space-y-6">
      <Herosection />
      <div className="lg:space-y-24 space-y-20 lg:mx-5 mx-2">
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
