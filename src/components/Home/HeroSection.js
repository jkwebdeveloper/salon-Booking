import Image from "next/image";
import { FindNearByForm } from "@/components";

const Herosection = () => {
  return (
    <div className="w-full relative h-[80vh] 2xl:h-[75vh]">
      <div>
        <Image
          src={'/static/images/banner.jpg'}
          loading="lazy"
          alt="Hero Banner"
          className="absolute object-cover w-full h-full"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <FindNearByForm />
      </div>
    </div>
  );
};

export default Herosection;
