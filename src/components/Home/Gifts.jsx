import Image from "next/image";
import React from "react";
import image1 from "../../../public/static/images/Buy gifts/img9.png";
import image2 from "../../../public/static/images/Buy gifts/10.png";
import image3 from "../../../public/static/images/Buy gifts/img11.png";
import image4 from "../../../public/static/images/Buy gifts/img12.png";
import image5 from "../../../public/static/images/Buy gifts/img13.png";
import image6 from "../../../public/static/images/Buy gifts/img14.png";

const ImagesData = [
  {
    id: 1,
    image: image1,
    title: "Wedding Gifts",
    des: "View more",
  },
  {
    id: 2,
    image: image2,
    title: "Birthday Gifts",
    des: "View more",
  },
  {
    id: 3,
    image: image3,
    title: "Gifts For Children",
    des: "View more",
  },
  {
    id: 4,
    image: image4,
    title: "Gifts For Occasion",
    des: "View more",
  },
  {
    id: 5,
    image: image5,
    title: "Gifts For Her",
    des: "View more",
  },
  {
    id: 6,
    image: image6,
    title: "Gifts For Him",
    des: "View more",
  },
];

const Gifts = () => {
  return (
    <div className="w-full space-y-4">
      <p className="text-black font-semibold uppercase text-2xl title heading">
        Buy <span className="text-primary_color">Gifts</span>
      </p>
      <div className="rounded-lg grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
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

export default Gifts;
