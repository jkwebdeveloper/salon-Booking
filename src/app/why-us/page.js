import React from "react";
import { Banner } from "@/components";

const WhyUs = () => {
  return (
    <div className="space-y-4 ">
      <Banner title="Why us" background={'/static/images/whyUs.jpg'} />
      <div className="container px-5 pt-10 pb-20 mx-auto space-y-5 md:px-28">
        <div className="space-y-2">
          <h1 className="text-base font-semibold md:text-xl">Increase Online Visibility</h1>
          <p className="text-[#666666] text-justify">
            When everyone seems to have more things to achieve in a single day
            than is often possible, it is great to come across a simple solution
            to at least one part of your life that is easy to use and makes sure
            you are looking amazing and feeling great!
          </p>
          <p className="text-[#666666] text-justify">
            We can introduce you to hair and beauty professionals and massage
            therapists in salons and spas near you, helping you book with
            someone new or one of your favourites. Featuring beauty services
            from lashes and brows, hair, nails, aesthetics and more, or
            therapists for massage and acupuncture, or those spa days and short
            breaks that you know you deserve!
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-base font-semibold md:text-xl">
            Reduce No Shows (People who not turn for app)
          </h1>
          <p className="text-[#666666] text-justify">
            Featuring the latest offers, customer loyalty schemes, late booking
            deals, new salons and the most popular treatments, you will be able
            to source exactly what you want, all on one online portal! With
            venues in all parts of the country you can easily locate the
            professional services you need when you are away from home too,
            either on business or on holiday.
          </p>
          <p className="text-[#666666] text-justify">
            With the PamperTree app on your mobile or tablet the information you
            need to make or reschedule a booking is at your fingertips, 24/7.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-base font-semibold md:md:text-xl">Attract And Retain Clients</h1>
          <p className="text-[#666666] text-justify">
            When everyone seems to have more things to achieve in a single day
            than is often possible, it is great to come across a simple solution
            to at least one part of your life that is easy to use and makes sure
            you are looking amazing and feeling great!
          </p>
          <p className="text-[#666666] text-justify">
            We can introduce you to hair and beauty professionals and massage
            therapists in salons and spas near you, helping you book with
            someone new or one of your favourites. Featuring beauty services
            from lashes and brows, hair, nails, aesthetics and more, or
            therapists for massage and acupuncture, or those spa days and short
            breaks that you know you deserve!
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-base font-semibold md:text-xl">Fill Up Your Schedule</h1>
          <p className="text-[#666666] text-justify">
            Featuring the latest offers, customer loyalty schemes, late booking
            deals, new salons and the most popular treatments, you will be able
            to source exactly what you want, all on one online portal! With
            venues in all parts of the country you can easily locate the
            professional services you need when you are away from home too,
            either on business or on holiday.
          </p>
          <p className="text-[#666666] text-justify">
            With the PamperTree app on your mobile or tablet the information you
            need to make or reschedule a booking is at your fingertips, 24/7.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
