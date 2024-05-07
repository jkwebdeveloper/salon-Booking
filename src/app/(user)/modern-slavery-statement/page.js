import React from "react";

import { Banner } from "@/components";
import { GET } from "@/app/api/get";
import { createDOMPurify, JSDOM } from "@/components/other";

const window = (new JSDOM('')).window;
const DOMPurify = createDOMPurify(window);

const ModernStatement = async () => {
  const resp = await GET.request({ url: "/modern-slavery-statements" });
  const modernStatementData = (resp && resp.code === 200) && resp.data || [];
  return (
    <div className="space-y-4 ">
      <Banner
        title="Modern Slavery Statement"
        background={"/static/images/Terms-conditions.jpg"}
      />
      <div className="container px-5 pt-10 pb-20 mx-auto space-y-5 md:px-28">
        <div className="space-y-2">
          <h2 className="text-base font-semibold md:text-2xl">
            Modern Slavery & Human Trafficking Statement On Behalf Of PamperTree
            Limited
          </h2>
          {modernStatementData.map((item) => (
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

export default React.memo(ModernStatement);



