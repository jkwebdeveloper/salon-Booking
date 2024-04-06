import Image from "next/image";
import React from "react";
import { v4 } from "uuid";

const ImagesData = [
  {
    id: 1,
    image: "/static/images/Buy gifts/img9.png",
    title: "Wedding Gifts",
    des: "View more",
  },
  {
    id: 2,
    image: "/static/images/Buy gifts/10.png",
    title: "Birthday Gifts",
    des: "View more",
  },
  {
    id: 3,
    image: "/static/images/Buy gifts/img11.png",
    title: "Gifts For Children",
    des: "View more",
  },
  {
    id: 4,
    image: "/static/images/Buy gifts/img12.png",
    title: "Gifts For Occasion",
    des: "View more",
  },
  {
    id: 5,
    image: "/static/images/Buy gifts/img13.png",
    title: "Gifts For Her",
    des: "View more",
  },
  {
    id: 6,
    image: "/static/images/Buy gifts/img14.png",
    title: "Gifts For Him",
    des: "View more",
  },
];

const Gifts = () => {
  return (
    <div className="w-full space-y-4">
      <p className="text-2xl font-semibold text-black uppercase title heading">
        Buy <span className="text-primary_color">Gifts</span>
      </p>
      <div className="grid grid-cols-1 gap-3 rounded-lg md:grid-cols-2 xl:grid-cols-3">
        {ImagesData.map((item) => (
          <div
            key={v4()}
            className="relative flex items-center justify-center text-center cursor-pointer"
          >
            <div>
              <Image
                src={item?.image}
                loading="lazy"
                width={500}
                height={200}
                // fill
                alt=""
                className="relative object-cover w-full h-full"
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
