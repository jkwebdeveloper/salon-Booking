import React from "react";

import { Banner } from "@/components";
import { GET } from "@/app/api/get";
import { createDOMPurify, JSDOM } from "@/components/other";

const window = (new JSDOM('')).window;
const DOMPurify = createDOMPurify(window);

const WhyUs = async () => {
  const resp = await GET.request({ url: "/why-us" });
  const whyusData = (resp && resp.code === 200) && resp.data || [];
  return (
    <div className="space-y-4 ">
      <Banner title="Why us" background={'/static/images/whyUs.jpg'} />
      <div className="container px-5 pt-10 pb-20 mx-auto space-y-5 md:px-28">
        <div className="space-y-2">
          <h2 className="text-base font-semibold md:text-xl">
            Reduce No Shows (People who not turn for app)
          </h2>
          {whyusData.map((item) => (
            <div key={item.id} className="space-y-2">
              <p className="text-sm text-gray-600">
                {<div className="list-disc" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.description) }} />}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(WhyUs);