import Image from "next/image";
import { FindNearByForm } from "@/components";

const Herosection = ({ formData }) => {
  return (
    <div className="w-full relative h-[80vh] flex items-center 2xl:h-[75vh] bg-[url('/static/images/banner.jpg')] bg-cover">
      <div className="flex items-center justify-center w-full h-auto">
        <FindNearByForm formData={formData} />
      </div>
    </div>
  );
};

export default Herosection;
