import React from "react";
import banner from "../../../public/static/images/Tax Strategy.jpg";
import Image from "next/image";

const TaxStrategy = () => {
  return (
    <div className="space-y-4 ">
      <div className="relative w-full">
        <Image
          src={banner}
          alt=""
          loading="lazy"
          // width={300}
          // height={300}
          className="relative w-full"
          // layout="fill"
          // fill
          objectFit="cover"
        />
        <div className="absolute w-full top-1/2">
          <h1 className="text-center uppercase text-2xl text-white font-semibold mx-auto flex items-center justify-center">
            Tax Strategy
          </h1>
        </div>
      </div>
      <div className="space-y-5 container mx-auto md:px-28 px-5">
        <div className="space-y-2">
          <h1 className="font-semibold md:text-xl text-base">
            Ownership And agreement
          </h1>
          <p className="text-[#666666] text-justify">
            The tax strategy objectives of PamperTree Ltd are set out in this
            document and have been agreed by the Board of Directors in
            conjunction with the advisers and the shareholders.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold md:text-xl text-base">Obedience</h1>
          <p className="text-[#666666] text-justify">
            This tax strategy of PamperTree Ltd is obedient of the information
            required in the publication of the UK tax strategy, Schedule 19 FA
            2016 Part 2.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold md:md:text-xl text-base">Scope</h1>
          <p className="text-[#666666] text-justify">
            PamperTree Ltd is a UK taxpayer. This is clearly acknowledged and
            documented by the tax strategy for the reporting of all tax and
            complying with a transparent and honest approach by the company.
            This is applicable to the agreement, proof of payment and the
            reporting of all tax that is collected including employment,
            indirect and corporate income taxes.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold md:text-xl text-base">
            Our Tax Strategy Declaration
          </h1>
          <p className="text-[#666666] text-justify">
            The PamperTree Ltd tax strategy is supported by the business
            strategy and is in compliance with the management to risk and
            corporate governance handled by the way we operate. We are committed
            to always pay the correct tax on time in accordance with the latest
            laws and policies. PamperTree Ltd recognises any tax risks and deals
            with them accordingly using the correct controls and a successful
            tax control structure.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold md:text-xl text-base">Administration</h1>
          <p className="text-[#666666] text-justify">
            The tax strategy is administered by those with full training and
            guidance who are also fully responsible to make decisions that may
            affect the success of the objectives laid out in the tax strategy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaxStrategy;
