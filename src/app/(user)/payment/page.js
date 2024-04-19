import React from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

const PaymentMethod = () => {
  return (
    <div className="bg-[#F8F8FA] space-y-5">
      <div className="container space-y-5 flex flex-col min-h-[55dvh] gap-4 px-1 md:flex-row md:px-5 md:mb-10">
        <div className="h-fit space-y-3 py-5 min-h-[350px] md:w-[40%] lg:w-[35%] w-[90%]">
          <p className="text-2xl font-semibold">Overview</p>
          <div className="z-[2] overflow-hidden shadow-lg rounded-xl ring-1 ring-primary/10 w-full">
            <div className="relative">
              <Image
                src={"/static/images/payment.png"}
                alt=""
                loading="lazy"
                width={400}
                height={300}
                className="object-cover object-center w-full "
              />
            </div>
            <div className="p-3 space-y-3">
              <div>
                <p>Sports Massage</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm">10 Mins</p>
                  <div className="flex items-center gap-3">
                    <p className=" text-primary">£25.00</p>
                    <AiOutlineClose />
                  </div>
                </div>
              </div>
              <div>
                <p>Sports Massage</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm">10 Mins</p>
                  <div className="flex items-center gap-3">
                    <p className=" text-primary">£25.00</p>
                    <AiOutlineClose />
                  </div>
                </div>
              </div>
              <div>
                <p>Sports Massage</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm">10 Mins</p>
                  <div className="flex items-center gap-3">
                    <p className=" text-primary">£25.00</p>
                    <AiOutlineClose />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-4/5 w-[90%] mx-auto space-y-5 h-fit min-h-[350px] z-2 ">
          <p className="text-2xl font-semibold">Secure checkout</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
