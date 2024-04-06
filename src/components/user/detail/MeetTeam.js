import Image from "next/image";
import React from "react";

const MeetTeam = () => {
  return (
    <div className="space-y-6 w-full">
      <p className="text-2xl font-semibold text-black uppercase title heading">
        Meet Our Team Of <span className="text-primary_color">Expert</span>
      </p>
      <div className="grid items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="space-y-5 bg-white rounded-xl shadow-lg">
          <Image
            src={"/static/images/team (1).png"}
            width={300}
            height={100}
            alt=""
            loading="lazy"
            objectFit="fill"
            className="object-cover object-center w-full "
          />
          <p className="font-semibold pb-4 text-center">Nuzami</p>
        </div>
        <div className="space-y-5 bg-white rounded-xl shadow-lg">
          <Image
            src={"/static/images/team (2).png"}
            width={300}
            height={100}
            alt=""
            loading="lazy"
            objectFit="fill"
            className="object-cover object-center w-full "
          />
          <p className="font-semibold pb-4 text-center">Nuzami</p>
        </div>
        <div className="space-y-5 bg-white rounded-xl shadow-lg">
          <Image
            src={"/static/images/team (3).png"}
            width={300}
            height={100}
            alt=""
            loading="lazy"
            objectFit="fill"
            className="object-cover object-center w-full "
          />
          <p className="font-semibold pb-4 text-center">Nuzami</p>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
