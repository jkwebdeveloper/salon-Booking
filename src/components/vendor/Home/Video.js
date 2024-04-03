import Image from "next/image";
import React from "react";

const Video = () => {
  return (
    <div className="container mx-auto text-center space-y-4">
      <p className="text-2xl font-semibold text-black uppercase">
        Why sellers choose{" "}
        <span className="text-primary_color">PamperTree</span>
      </p>
      <p className="text-sm">
        We ask our seller why they choose to sell on PamperTree
      </p>
      <Image
        src={"/static/images/video.png"}
        width={1000}
        height={1000}
        className="w-full"
        alt="video"
        loading="lazy"
      />
    </div>
  );
};

export default Video;
