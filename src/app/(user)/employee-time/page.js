import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LuUser2 } from "react-icons/lu";
import { DatePicker } from "@/components/user/Home/FindNearByForm/datepicker";
import { AiOutlineClose } from "react-icons/ai";
import Button from "@/components/ui/button";
import Link from "next/link";
import Customdatepicker from "@/components/user/Home/FindNearByForm/customdatepicker";
import Validation from "@/constants/validation";

const TimeDate = () => {
  return (
    <div className="container w-full ">
      <div className="flex flex-col min-h-[55dvh] gap-4 md:flex-row md:mb-10 bg-[#F8F8FA] mx-auto lg:w-[80%] w-full mt-10">
        <div className="h-fit min-h-[350px] md:w-[40%] p-5 lg:w-[25%] w-[90%] mx-auto space-y-5 z-2 ">
          <p>Employee & Time</p>
          <hr />
          <Accordion type="single" collapsible className="w-full space-y-2">
            <p className="text-sm">Select Employee</p>
            <AccordionItem
              value="item-1"
              className="border border-[#D8DAE5] rounded-md bg-white px-3"
            >
              <AccordionTrigger className="">
                {/* <LuUser2 /> */}
                <p>Nelson Mandela</p>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="text-sm">Select start time for your appointment</p>
          <div className="border w-max rounded-md border-[#eae9e9]">
            <DatePicker />
            {/* <Customdatepicker /> */}
          </div>
        </div>
        <div className="md:w-4/5 w-[90%] mx-auto space-y-5 p-5 h-fit min-h-[350px] z-2">
          <p>My basket</p>
          <hr />
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="font-medium">Sports Massage</p>
              <p className="text-[#EA2C6D]">Save for later</p>
            </div>
            <p className="text-[#666666]">10 Mins</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <p className="">Is this for you?</p>
                <li class="list-none">
                  <div class="flex items-center">
                    <input
                      id="list-radio-license"
                      type="radio"
                      value=""
                      name="list-radio"
                      class=""
                    />
                    <label
                      for="list-radio-license"
                      class="w-full ms-2 text-sm font-medium text-gray-900 "
                    >
                      Yes
                    </label>
                  </div>
                </li>
                <li class="list-none">
                  <div class="flex items-center">
                    <input
                      id="list-radio-license"
                      type="radio"
                      value=""
                      name="list-radio"
                      class=""
                    />
                    <label
                      for="list-radio-license"
                      class="w-full ms-2 text-sm font-medium text-gray-900 "
                    >
                      No
                    </label>
                  </div>
                </li>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-semibold text-primary">£25.00</p>
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <hr />
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="font-medium">Swedish Massage</p>
              <p className="text-[#EA2C6D]">Save for later</p>
            </div>
            <p className="text-[#666666]">10 Mins</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <p className="">Is this for you?</p>
                <li class="list-none">
                  <div class="flex items-center">
                    <input
                      id="list-radio-license"
                      type="radio"
                      value=""
                      name="list-radio"
                      class=""
                    />
                    <label
                      for="list-radio-license"
                      class="w-full ms-2 text-sm font-medium text-gray-900 "
                    >
                      Yes
                    </label>
                  </div>
                </li>
                <li class="list-none">
                  <div class="flex items-center">
                    <input
                      id="list-radio-license"
                      type="radio"
                      value=""
                      name="list-radio"
                      class=""
                    />
                    <label
                      for="list-radio-license"
                      class="w-full ms-2 text-sm font-medium text-gray-900 "
                    >
                      No
                    </label>
                  </div>
                </li>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-semibold text-primary">£20.00</p>
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <input
                type="text"
                name="first_name"
                id="fname"
                className="input_field"
                placeholder="Full name"
                pattern={Validation?.firstname?.pattern}
                required
              />
              <p className="error">{Validation?.firstname?.msg}</p>
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
              <input
                type="email"
                name="email"
                id="lname"
                className="input_field"
                placeholder="Email"
                pattern={Validation?.email?.pattern}
                required
              />
              <p className="error">{Validation?.email?.msg}</p>
            </div>
          </div>
          <hr />
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-[#29AD17]">
                2nd staff member will be allotted automatically as per the first
                availability
              </p>
              <p className="text-[#EA2C6D]">Save for later</p>
            </div>
            <p className="text-[#666666]">10 Mins</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <p className="">Is this for you?</p>
                <li class="list-none">
                  <div class="flex items-center">
                    <input
                      id="list-radio-license"
                      type="radio"
                      value=""
                      name="list-radio"
                      class=""
                    />
                    <label
                      for="list-radio-license"
                      class="w-full ms-2 text-sm font-medium text-gray-900 "
                    >
                      Yes
                    </label>
                  </div>
                </li>
                <li class="list-none">
                  <div class="flex items-center">
                    <input
                      id="list-radio-license"
                      type="radio"
                      value=""
                      name="list-radio"
                      class=""
                    />
                    <label
                      for="list-radio-license"
                      class="w-full ms-2 text-sm font-medium text-gray-900 "
                    >
                      No
                    </label>
                  </div>
                </li>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-semibold text-primary">£349.00</p>
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <hr />
          <div className="flex items-center justify-end">
            <p className="text-lg font-semibold">Order Total: £394</p>
          </div>
          <div className="flex items-center justify-end gap-2">
            <Button type="submit" variant="outline">
              + Add another service
            </Button>
            <Link href="/payment">
              <Button type="submit" variant="outline">
                Go to checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeDate;
