import dynamic from "next/dynamic";
const Herosection = dynamic(() => import("@/components/Home/HeroSection"));
const Pampertree = dynamic(() => import("@/components/Home/Pampertree"));
const Featured = dynamic(() => import("@/components/Home/Featured"));
const Treatments = dynamic(() => import("@/components/Home/Treatments"));
const Gifts = dynamic(() => import("@/components/Home/Gifts"));
const Location = dynamic(() => import("@/components/Home/Location"));

export default function Page() {
  return (
    <div className="xl:space-y-11 space-y-6">
      <Herosection />
      <div className="space-y-10 lg:mx-5 mx-2">
        <Pampertree />
        <Featured />
        <Treatments />
        <Gifts />
        <Location/>
      </div>
    </div>
  );
}
