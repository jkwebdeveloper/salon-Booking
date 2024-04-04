import Image from "next/image";
import React from "react";

const SellerSection = () => {
  return (
    <div className="container px-5 pt-10 pb-20 mx-auto md:px-28 space-y-7">
      <p className="text-2xl text-center font-semibold text-black uppercase">
        Why become a{" "}
        <span className="text-primary_color">seller on Pampertree</span>
      </p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
        <div className="border border-[#DBDBDB] rounded-xl space-y-4">
          <Image
            src={"/static/images/Rectangle (1).png"}
            alt=""
            loading="lazy"
            width={500}
            height={300}
          />
          <div className="px-3 py-3 space-y-2">
            <p className="text-2xl font-bold">Get More Customers</p>
            <p className="text-[#696969] text-sm">
              Reach crores of customers on Pampertree.co.uk most visited shoping
              destination.
            </p>
          </div>
        </div>
        <div className="border border-[#DBDBDB] rounded-xl space-y-4">
          <Image
            src={"/static/images/Rectangle (2).png"}
            alt=""
            loading="lazy"
            width={500}
            height={300}
          />
          <div className="px-3 py-3 space-y-2">
            <p className="text-2xl font-bold">Low Starting Cost</p>
            <p className="text-[#696969] text-sm">
              Start the business from the comfort of your home.
            </p>
          </div>
        </div>
        <div className="border border-[#DBDBDB] rounded-xl space-y-4">
          <Image
            src={"/static/images/Rectangle (3).png"}
            alt=""
            loading="lazy"
            width={500}
            height={300}
          />
          <div className="px-3 py-3 space-y-2">
            <p className="text-2xl font-bold">Unbeatable Reach</p>
            <p className="text-[#696969] text-sm">
              Deliver 100% of UK serviceable pincodes, through easy ship and
              fullfillment by PamperTree.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerSection;
