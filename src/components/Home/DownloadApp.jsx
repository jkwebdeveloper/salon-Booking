import React from "react";
import App from "../../../public/static/images/appstore2.png";
import Google from "../../../public/static/images/playstore.png";
import mobile from "../../../public/static/images/mobile1.png";
import mobile1 from "../../../public/static/images/mobile2.png";
import Image from "next/image";

const DownloadApp = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
      <div className="space-y-4 mx-auto lg:text-left text-center">
        <p className="text-black font-bold lg:text-5xl text-3xl">
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
        <div className="lg:block hidden">
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
