import Image from "next/image";
import React from "react";

const PamperTeam = () => {
  return (
    <div className="w-full space-y-6">
      <p className="text-2xl font-semibold text-black uppercase title heading">
        meet the <span className="text-primary_color">pamper tree team</span>
      </p>
      <p className="text-justify xl:text-left">
        Discovering all about PamperTree and the amazing services the Pamper
        Tree team has put together for you, is a journey through your
        requirements for health, beauty and wellbeing in its many aspects. This
        <span className="font-semibold text-primary_color">online booking</span>
        tool is here, wherever you are e.g.
        <span className="font-semibold text-primary_color">
          Manchester, London, Birmingham,
          Leeds, Liverpool, Nottingham,
          Southampton,  Bristol, Brighton.
        </span>
        Or you can find us in your nearby town e.g.
        <span className="font-semibold text-primary_color">
          Altringham, Cheadle, Bury, Worsley
        </span>
        or any other town across the UK, to bring you the information that you
        need about appointments for salons, spas and clinics near you. A source
        that you can access 24 hours a day, when you have the time or the need
        to make a booking, wherever you are! This is the directory which brings
        the service provider that you are looking for, and you the client,
        together. Enter your search for location and treatment and you can find
        who is available, see their specialist services, read their reviews, and
        book. If you need to amend that booking in anyway, via your PamperTree
        account you can reschedule or cancel, control is at your fingertips.
        <span className="font-semibold text-primary_color">Click here</span> and
        register today!
      </p>
      <div className="pt-6">
        <div className="grid items-center grid-cols-1 gap-8 xl:grid-cols-2 lg:gap-0">
          <div>
            <Image
              src={'/static/images/Group.png'}
              alt="logo"
              loading="lazy"
              width={500}
              height={500}
            />
          </div>
          <div className="space-y-3">
            <p className="text-3xl font-semibold text-black title heading">
              Welcome to <span className="text-primary_color">PamperTree</span>
            </p>
            <p className="font-semibold">
              Just look at the services we promote
            </p>
            <p className="text-justify xl:text-left">
              You may be looking for a regular treatment, a new salon, a treat,
              or even a short break, PamperTree brings you the solutions –
              effortlessly! There are a world of treatments for pampering such as
              beauty makeovers, nails, brows and lashes and for the remedial
              therapies that you may need from time...
            </p>
            <p className="underline cursor-pointer">Read more</p>
            <p className="font-semibold">Reviews from verified clients</p>
            <p className="text-justify xl:text-left">
              We all use reviews to help us form our decisions, but the question
              often arises about whether they are genuine. On PamperTree only
              verified clients can leave reviews, so you can trust them.
              PamperTree monitors review input so avoiding malicious comments,
              leaving you to fairly judge the recommendati...
            </p>
            <p className="underline cursor-pointer">Read more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PamperTeam;
