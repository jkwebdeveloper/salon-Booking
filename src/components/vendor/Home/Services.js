import Button from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="container grid  items-center gap-10 justify-center grid-cols-1 md:grid-cols-2 mx-auto">
      <div className="mx-auto">
        <Image
          src={"/static/images/Group2.png"}
          width={300}
          height={300}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="mx-auto space-y-4">
        <h1 className="text-3xl font-semibold">
          List Your <br />
          <span className="text-primary_color">Services</span>{" "}
        </h1>
        <p className="text-sm">
          When you sell your services with PamperTree, <br /> you can create,
          update and delete appointments <br /> collect money and much more.
        </p>
        <Button type="button" variant="primary">
          become a partner
        </Button>
      </div>
    </div>
  );
};

export default Services;
