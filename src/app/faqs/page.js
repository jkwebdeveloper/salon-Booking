import React from "react";

import { Banner } from "@/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqsData = [
  {
    id: 1,
    que: "Q. Where can I find information on PamperTree about special offers and discounts?",
    ans: " A. There are many places to discover the latest offers available from our Associates. First of all, check out the “Offers” link right at the top of the page on the header or on the “Explore Great Offers” towards the bottom of the home page and of course you will also get the latest news on our Newsletter, so make sure you choose to subscribe!",
  },
  {
    id: 2,
    que: "Q. Does PamperTree list massage salons as well as hair and beauty?",
    ans: " A. There are many places to discover the latest offers available from our Associates. First of all, check out the “Offers” link right at the top of the page on the header or on the “Explore Great Offers” towards the bottom of the home page and of course you will also get the latest news on our Newsletter, so make sure you choose to subscribe!",
  },
  {
    id: 3,
    que: "Q. I have never had my nails done before, but I want something special for a wedding?",
    ans: " A. There are many places to discover the latest offers available from our Associates. First of all, check out the “Offers” link right at the top of the page on the header or on the “Explore Great Offers” towards the bottom of the home page and of course you will also get the latest news on our Newsletter, so make sure you choose to subscribe!",
  },
  {
    id: 4,
    que: "Q. If I attend a massage will I be expected to get undressed?",
    ans: " A. There are many places to discover the latest offers available from our Associates. First of all, check out the “Offers” link right at the top of the page on the header or on the “Explore Great Offers” towards the bottom of the home page and of course you will also get the latest news on our Newsletter, so make sure you choose to subscribe!",
  },
  {
    id: 5,
    que: "Q. When I take any sort of treatment, I would rather not have a conversation?",
    ans: " A. There are many places to discover the latest offers available from our Associates. First of all, check out the “Offers” link right at the top of the page on the header or on the “Explore Great Offers” towards the bottom of the home page and of course you will also get the latest news on our Newsletter, so make sure you choose to subscribe!",
  },
  {
    id: 6,
    que: "Q. How do I contact one of the salons or spas advertising on this site?",
    ans: " A. There are many places to discover the latest offers available from our Associates. First of all, check out the “Offers” link right at the top of the page on the header or on the “Explore Great Offers” towards the bottom of the home page and of course you will also get the latest news on our Newsletter, so make sure you choose to subscribe!",
  },
  {
    id: 7,
    que: "Q. How do I use this site?",
    ans: " A. There are many places to discover the latest offers available from our Associates. First of all, check out the “Offers” link right at the top of the page on the header or on the “Explore Great Offers” towards the bottom of the home page and of course you will also get the latest news on our Newsletter, so make sure you choose to subscribe!",
  },
  {
    id: 8,
    que: "Q. How do I register with PamperTree?",
    ans: " A. There are many places to discover the latest offers available from our Associates. First of all, check out the “Offers” link right at the top of the page on the header or on the “Explore Great Offers” towards the bottom of the home page and of course you will also get the latest news on our Newsletter, so make sure you choose to subscribe!",
  },
  {
    id: 9,
    que: "Q. What do I do if I am not happy with a treatment that I have booked?",
    ans: " A. There are many places to discover the latest offers available from our Associates. First of all, check out the “Offers” link right at the top of the page on the header or on the “Explore Great Offers” towards the bottom of the home page and of course you will also get the latest news on our Newsletter, so make sure you choose to subscribe!",
  },
  {
    id: 10,
    que: "Q. Do you have Gift Vouchers?",
    ans: " A. There are many places to discover the latest offers available from our Associates. First of all, check out the “Offers” link right at the top of the page on the header or on the “Explore Great Offers” towards the bottom of the home page and of course you will also get the latest news on our Newsletter, so make sure you choose to subscribe!",
  },
  {
    id: 11,
    que: "Q. What is the difference between visiting a spa and a salon?",
    ans: " A. There are many places to discover the latest offers available from our Associates. First of all, check out the “Offers” link right at the top of the page on the header or on the “Explore Great Offers” towards the bottom of the home page and of course you will also get the latest news on our Newsletter, so make sure you choose to subscribe!",
  },
  {
    id: 12,
    que: "Q. Can I check reviews on the salons and spas on PamperTree?",
    ans: " A. There are many places to discover the latest offers available from our Associates. First of all, check out the “Offers” link right at the top of the page on the header or on the “Explore Great Offers” towards the bottom of the home page and of course you will also get the latest news on our Newsletter, so make sure you choose to subscribe!",
  },
  {
    id: 13,
    que: "Q. I am a man and I am looking for a beautician that treats males?",
    ans: " A. There are many places to discover the latest offers available from our Associates. First of all, check out the “Offers” link right at the top of the page on the header or on the “Explore Great Offers” towards the bottom of the home page and of course you will also get the latest news on our Newsletter, so make sure you choose to subscribe!",
  },
  {
    id: 14,
    que: "Q. What is the cancellation policy for bookings via PamperTree?",
    ans: " A. There are many places to discover the latest offers available from our Associates. First of all, check out the “Offers” link right at the top of the page on the header or on the “Explore Great Offers” towards the bottom of the home page and of course you will also get the latest news on our Newsletter, so make sure you choose to subscribe!",
  },
  {
    id: 15,
    que: "Q. Do you have a Loyalty Card scheme?",
    ans: " A. There are many places to discover the latest offers available from our Associates. First of all, check out the “Offers” link right at the top of the page on the header or on the “Explore Great Offers” towards the bottom of the home page and of course you will also get the latest news on our Newsletter, so make sure you choose to subscribe!",
  },
  {
    id: 15,
    que: "Q. Are there salons that use Vegan Friendly products?",
    ans: " A. There are many places to discover the latest offers available from our Associates. First of all, check out the “Offers” link right at the top of the page on the header or on the “Explore Great Offers” towards the bottom of the home page and of course you will also get the latest news on our Newsletter, so make sure you choose to subscribe!",
  },
];
const data = [];
const Faqs = () => {
  return (
    <div className="space-y-0">
      <Banner title="faqs" background={"/static/images/FAQS.jpg"} />
      <div className="container px-5 pt-10 pb-20 mx-auto space-y-5">
        <p className="text-2xl font-semibold text-black uppercase title heading">
          Frequently Asked <span className="text-primary_color">Questions</span>
        </p>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {FaqsData.map((item) => (
            <AccordionItem
              //   value="item-1"
              key={item.id}
              className="px-1 bg-white rounded-md shadow-sm md:px-3 ring-1 ring-primary/10"
            >
              <AccordionTrigger>{item.que}</AccordionTrigger>
              <AccordionContent>{item.ans}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
