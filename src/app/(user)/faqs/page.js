import React from "react";
import { createDOMPurify, JSDOM } from "@/components/other";

import { Banner } from "@/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GET } from "@/app/api/get";
import { v4 } from "uuid";

const window = (new JSDOM('')).window;
const DOMPurify = createDOMPurify(window);

const Faqs = async ({ faqs }) => {
  const resp = await GET.request({ url: "/faq" });
  const faqsData = (resp && resp.code === 200) && resp.data || [];
  return (
    <div className="space-y-0">
      <Banner title="faqs" background={"/static/images/FAQS.jpg"} />
      <div className="container px-5 pt-10 pb-20 mx-auto space-y-5">
        <p className="text-2xl font-semibold text-black uppercase title heading">
          Frequently Asked <span className="text-primary_color">Questions</span>
        </p>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqsData.map((item) => (
            <AccordionItem
              value={v4()}
              key={v4()}
              className="px-1 bg-white rounded-md shadow-sm md:px-3 ring-1 ring-primary/10"
            >
              <AccordionTrigger className="font-medium text-md">{item.question}</AccordionTrigger>
              <AccordionContent>
                {/* {item.answer} */}
                {<div className="list-disc" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.answer) }} />}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default React.memo(Faqs);
