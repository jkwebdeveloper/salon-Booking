import { Banner } from "@/components";
import Button from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const CareerData = [
  {
    id: 1,
    image: "/static/images/image 2.png",
    title: "Conducive Environment",
    desc: "Enjoy challenging and satisfying job without any hierarchy",
  },
  {
    id: 2,
    image: "/static/images/image 2 (1).png",
    title: "Shared Success",
    desc: "Enjoy challenging and satisfying job without any hierarchy",
  },
  {
    id: 3,
    image: "/static/images/image 2 (2).png",
    title: "Healthy Meals and snacks",
    desc: "Enjoy challenging and satisfying job without any hierarchy",
  },
  {
    id: 4,
    image: "/static/images/image 2 (3).png",
    title: "Medical Insurance",
    desc: "Enjoy challenging and satisfying job without any hierarchy",
  },
  {
    id: 5,
    image: "/static/images/image 2 (4).png",
    title: "Best Gadgets",
    desc: "Enjoy challenging and satisfying job without any hierarchy",
  },
  {
    id: 6,
    image: "/static/images/image 2 (5).png",
    title: "Culture of Learning",
    desc: "Enjoy challenging and satisfying job without any hierarchy",
  },
];

const WorkWithUs = () => {
  return (
    <div>
      <Banner title="work with us" background={"/static/images/workwith.jpg"} />
      <div className="container px-5 pt-10 pb-20 mx-auto space-y-5 md:px-28">
        <div className="grid grid-cols-1 gap-3 pb-5 rounded-lg md:grid-cols-2 xl:grid-cols-3">
          {CareerData.map((item) => (
            <div
              className="bg-white p-5 space-y-3 shadow-md text-center"
              key={item.id}
            >
              <Image
                src={item.image}
                alt=""
                loading="lazy"
                width={60}
                height={60}
                className="mx-auto"
              />
              <h2 className="text-[#C91E58] font-semibold text-xl">
                {item.title}
              </h2>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <p className="text-2xl font-semibold text-black text-center uppercase">
            Open <span className="text-primary_color">positions</span>
          </p>
          <div className="border-solid border-2 border-[#E7E7E7] rounded-lg p-4">
            <div className="space-y-3">
              <h2 className="text-primary_color font-medium">Sales</h2>
              <p>
                The sales team is focused on creating and promoting the best
                possible online industry to increase bookings for all the
                website’s advertised salons and treatments across the UK. By
                using social media, word of mouth and other promotional
                materials, the sales team’s task is to drive activity to the
                website with an enhanced focus on the transfer to online
                marketing. They help to develop and encourage the growth of
                businesses and partnerships, understanding the needs of our
                clients to ensure they always receive the best possible
                experience on PamperTree.
              </p>
              <Button variant="primary">Contact us</Button>
            </div>
          </div>
          <div className="border-solid border-2 border-[#E7E7E7] rounded-lg p-4">
            <div className="space-y-3">
              <h2 className="text-primary_color font-medium">
                Content specialists
              </h2>
              <p>
                The content team are responsible for creative and engaging
                content across the website to ensure clients are provided with
                all the relevant information regarding each salon, treatment and
                every other aspect of the site to make it as easy as possible
                for clients to find and book an appointment in the most suitable
                venue for a guaranteed exceptional service.
              </p>
              <Button variant="primary">Contact us</Button>
            </div>
          </div>
          <div className="border-solid border-2 border-[#E7E7E7] rounded-lg p-4">
            <div className="space-y-3">
              <h2 className="text-primary_color font-medium">
                Customer service
              </h2>
              <p>
                Our customers are our priority and we have a team that is
                focused on making our service the best it can be for our
                customers. Any queries, concerns and complaints are effectively
                dealt with to ensure every customer has a good experience on our
                website. This job is perfect for people with problem solving
                skills, excellent communication skills and people with a desire
                to create happy experiences for all our clients 24/7.
              </p>
              <Button variant="primary">Contact us</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
