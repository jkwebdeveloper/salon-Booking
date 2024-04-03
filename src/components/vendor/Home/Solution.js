import Button from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Solution = () => {
  return (
    <div className="container grid  items-center gap-10 justify-center grid-cols-1 md:grid-cols-2 mx-auto">
      <div className="mx-auto space-y-4">
        <h1 className="text-3xl font-semibold">
          List Your 
          <span className="text-primary_color"> Solution</span>{" "}
        </h1>
        <p className="text-sm">
          When you sell on PamperTree, you can choose how to store, <br /> pack,
          deliver and manage returns.
        </p>
        <Button type="button" variant="primary">
          become a partner
        </Button>
      </div>
      <div className="mx-auto">
        <Image
          src={"/static/images/Group3.png"}
          width={300}
          height={300}
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Solution;
