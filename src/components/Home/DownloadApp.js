import React from "react";
import Image from "next/image";
import App from "/static/images/appstore2.png";
import Google from "/static/images/playstore.png";
import mobile from "/static/images/mobile1.png";
import mobile1 from "/static/images/mobile2.png";

const DownloadApp = () => {
  return (
    <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2">
      <div className="mx-auto space-y-4 text-center lg:text-left">
        <p className="text-3xl font-bold text-black lg:text-5xl">
          Download the <br />
          <span className="text-primary_color">Pamper Tree app</span>
        </p>
        <p>Booking, Re-booking or Rescheduling</p>
        <p>Available on</p>
        <div className="flex items-center gap-3">
          <Image src={App} alt="App" loading="lazy" />
          <Image src={Google} alt="App" loading="lazy" />
        </div>
      </div>
      <div>
        <div className="hidden lg:block">
          <div className="flex items-center gap-3">
            <Image
              src={mobile1}
              width={200}
              height={200}
              alt="App"
              loading="lazy"
            />
            <Image
              src={mobile}
              width={180}
              height={180}
              alt="App"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
