import React from "react";
import { Banner } from "@/components";

const TaxStrategy = () => {
  return (
    <div className="space-y-4 ">
      <Banner title={'Tax Strategy'} background={'/static/images/Tax Strategy.jpg'} />
      <div className="container px-5 mx-auto space-y-5 md:px-28">
        <div className="space-y-2">
          <h1 className="text-base font-semibold md:text-xl">
            Ownership And agreement
          </h1>
          <p className="text-[#666666] text-justify">
            The tax strategy objectives of PamperTree Ltd are set out in this
            document and have been agreed by the Board of Directors in
            conjunction with the advisers and the shareholders.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-base font-semibold md:text-xl">Obedience</h1>
          <p className="text-[#666666] text-justify">
            This tax strategy of PamperTree Ltd is obedient of the information
            required in the publication of the UK tax strategy, Schedule 19 FA
            2016 Part 2.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-base font-semibold md:md:text-xl">Scope</h1>
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
          <h1 className="text-base font-semibold md:text-xl">
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
          <h1 className="text-base font-semibold md:text-xl">Administration</h1>
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
