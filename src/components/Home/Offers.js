import Image from "next/image";
import React from "react";
import { v4 } from "uuid";

const ImagesData = [
  {
    id: 1,
    image: "/static/images/PamperTree/img1.png",
    title: "Wedding Gifts",
  },
  {
    id: 2,
    image: "/static/images/PamperTree/img2.png",
    title: "Birthday Gifts",
  },
  {
    id: 3,
    image: "/static/images/PamperTree/img3.png",
    title: "Gifts For Children",
  },
  {
    id: 4,
    image: "/static/images/PamperTree/img4.png",
    title: "Gifts For Occasion",
  },
  {
    id: 5,
    image: "/static/images/PamperTree/img5.png",
    title: "Gifts For Her",
  },
  {
    id: 6,
    image: "/static/images/PamperTree/img6.png",
    title: "Gifts For Him",
  },
  {
    id: 7,
    image: "/static/images/PamperTree/img7.png",
    title: "Gifts For Him",
  },
  {
    id: 8,
    image: "/static/images/PamperTree/img8.png",
    title: "Gifts For Him",
  },
  {
    id: 9,
    image: "/static/images/PamperTree/img9.png",
    title: "Gifts For Him",
  },
  {
    id: 10,
    image: "/static/images/PamperTree/img10.png",
    title: "Gifts For Him",
  },
];

const Offers = () => {
  return (
    <div className="w-full space-y-4">
      <p className="text-2xl font-semibold text-center text-black uppercase">
        Let’s look at what
        <span className="text-primary_color">PamperTree offers you</span>
      </p>
      <p className="text-justify xl:text-center">
        In the 21st century we are becoming not only body conscious, but also
        more aware of our wellbeing and the client who takes care of one side of
        this equation often finds that the other falls naturally into place.
        PamperTree highlights services for beauty, massage and so much more,
        bringing you a life package which can sort out all your requirements
        wherever you are in the country. Of course, major cities like London,
        Manchester, Leeds, Rochdale, Liverpool, Oldham, Cardiff, Birmingham,
        Belfast or Edinburgh have so many options that you
        may find you are almost overwhelmed by the choices, but by using the
        drop down menu you can refine the filters to get exactly what you want.
        The breadth of services will surely deliver your exact requirements. So
        lets take an overview of some of the different areas of personal care
        treatments we know our clients factor in as essentials today, plus those
        “me time” treats which make leisure time extra special.
      </p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {ImagesData.map((item) => (
          <div
            key={v4()}
            className="relative flex items-center justify-center text-center cursor-pointer group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={item?.image}
                loading="lazy"
                width={200}
                height={200}
                // fill
                alt=""
                className="relative object-cover w-full h-full"
              />
              <div className="absolute z-20 flex-col items-center justify-center w-full h-full p-10 space-y-3 text-sm text-white transition-all duration-300 opacity-0 2xl:flex-row rounded-xl lg:p-2 hover:backdrop-blur-sm bg-black/50 -bottom-10 group-hover:bottom-0 group-hover:opacity-100">
                <p className="text-justify">
                  The pursuit of beauty is something that the majority of us
                  continually follow in one way or another. Of course, this
                  predates the celebrity culture and social media influencers
                  that we associate this with today and which crosses all
                  cultures.  As we strive to keep our complexions clear,
                  fighting the effects of pollution, stress and lifestyle,
                  the UK beauty salons are ready to take our challenges...
                </p>
                <p className="block underline">Read more</p>
              </div>
            </div>
            <p className="absolute uppercase top-[78%] text-center font-bold text-white">
              {item?.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
