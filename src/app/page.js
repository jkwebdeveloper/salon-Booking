'use client';
import { Herosection, Pampertree, Featured, Treatments, Gifts, Location, Groupon, PamperTeam, Offers, PopularSalon, DownloadApp, Testimonials, Business } from '@/components';

export default function Home() {
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
