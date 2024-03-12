import Image from "next/image";
import React from "react";
import image1 from "../../../public/static/images/Popular Treatment/img.png";
import image2 from "../../../public/static/images/Popular Treatment/img2.png";
import image3 from "../../../public/static/images/Popular Treatment/img3.png";
import image4 from "../../../public/static/images/Popular Treatment/img4.png";
import image5 from "../../../public/static/images/Popular Treatment/img5.png";
import image6 from "../../../public/static/images/Popular Treatment/img6.png";
import image7 from "../../../public/static/images/Popular Treatment/img7.png";
import image8 from "../../../public/static/images/Popular Treatment/img8.png";

const ImagesData = [
  {
    id: 1,
    image: image1,
    title: "Spa Days",
    des: "12 Listings",
  },
  {
    id: 2,
    image: image2,
    title: "Body Treatments",
    des: "593 Listings",
  },
  {
    id: 3,
    image: image3,
    title: "Beauty Salons",
    des: "8 Listings",
  },
  {
    id: 4,
    image: image4,
    title: "Hair Salons",
    des: "1650 Listings",
  },
  {
    id: 5,
    image: image5,
    title: "Nail Salons",
    des: "1592 Listings",
  },
  {
    id: 6,
    image: image6,
    title: "Hair Removal",
    des: "2167 Listings",
  },
  {
    id: 7,
    image: image7,
    title: "Brows & Lashes",
    des: "2264 Listings",
  },
  {
    id: 8,
    image: image8,
    title: "Massage",
    des: "1710 Listings",
  },
];

const Treatments = () => {
  return (
    <div className="w-full space-y-4">
      <p className="text-black font-semibold uppercase text-2xl title heading">
        Near by <span className="text-primary_color">Featured salons</span>
      </p>
      <div className="rounded-lg grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {ImagesData.map((item) => (
          <div
            key={item?.id}
            className="relative flex justify-center cursor-pointer items-center text-center"
          >
            <div>
              <Image
                src={item?.image}
                loading="lazy"
                objectFit="cover"
                // fill
                alt=""
                className="relative w-full h-full object-cover"
              />
            </div>
            <p className="absolute uppercase top-[78%] text-center font-bold text-white">
              {item?.title}
            </p>
            <p className="absolute uppercase top-[87%] text-center text-white">
              {item?.des}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
