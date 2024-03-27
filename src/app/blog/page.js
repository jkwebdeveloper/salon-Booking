import { Banner } from "@/components";
import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v4 } from "uuid";

const blogData = [
  {
    id: 1,
    image: require("../../../public/static/images/blog/image.png"),
    title: "Lorem Ipsum is simply dummy...",
    date: "02 May 2024",
  },
  {
    id: 2,
    image: require("../../../public/static/images/blog/image (2).png"),
    title: "Lorem Ipsum is simply dummy...",
    date: "02 May 2024",
  },

  {
    id: 3,
    image: require("../../../public/static/images/blog/image (3).png"),
    title: "Lorem Ipsum is simply dummy...",
    date: "02 May 2024",
  },
  {
    id: 4,
    image: require("../../../public/static/images/blog/image (4).png"),
    title: "Lorem Ipsum is simply dummy...",
    date: "02 May 2024",
  },
  {
    id: 5,
    image: require("../../../public/static/images/blog/image (5).png"),
    title: "Lorem Ipsum is simply dummy...",
    date: "02 May 2024",
  },
  {
    id: 6,
    image: require("../../../public/static/images/blog/image (6).png"),
    title: "Lorem Ipsum is simply dummy...",
    date: "02 May 2024",
  },
  {
    id: 7,
    image: require("../../../public/static/images/blog/image (7).png"),
    title: "Lorem Ipsum is simply dummy...",
    date: "02 May 2024",
  },

  {
    id: 8,
    image: require("../../../public/static/images/blog/image (9).png"),
    title: "Lorem Ipsum is simply dummy...",
    date: "02 May 2024",
  },
  {
    id: 9,
    image: require("../../../public/static/images/blog/image (10).png"),
    title: "Lorem Ipsum is simply dummy...",
    date: "02 May 2024",
  },
  {
    id: 10,
    image: require("../../../public/static/images/blog/image (11).png"),
    title: "Lorem Ipsum is simply dummy...",
    date: "02 May 2024",
  },
  {
    id: 11,
    image: require("../../../public/static/images/blog/image (1).png"),
    title: "Lorem Ipsum is simply dummy...",
    date: "02 May 2024",
  },
  {
    id: 12,
    image: require("../../../public/static/images/blog/image (8).png"),
    title: "Lorem Ipsum is simply dummy...",
    date: "02 May 2024",
  },
];

const Blog = () => {
  return (
    <>
      <Banner title="Blog" />
      <div className="space-y-4">
        <div className="items-center flex justify-center gap-2 container p-10  mx-auto space-y-5">
          <Button variant="blog_button">All</Button>
          <Button variant="blog_button">Massage Tips</Button>
          <Button variant="blog_button">Nails Care & Style</Button>
          <Button variant="blog_button">Hair Removal</Button>
          <Button variant="blog_button">Eye/Ear Fashion Tips</Button>
          <Button variant="blog_button">Hair Care & Style</Button>
          <Button variant="blog_button">Face & Skin Care Tips</Button>
          <Button variant="blog_button">Body Treatment Tips</Button>
        </div>
        <div className="container grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogData.map((item) => (
            <Link href="/single-blog">
              <div className="space-y-3 shadow-lg rounded-xl" key={v4()}>
                <Image
                  alt=""
                  loading="lazy"
                  width={500}
                  height={300}
                  src={item?.image}
                />
                <div className="p-3 space-y-2">
                  <h1 className="font-bold">{item?.title}</h1>
                  <p className="text-sm text-[#696969]">{item?.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;