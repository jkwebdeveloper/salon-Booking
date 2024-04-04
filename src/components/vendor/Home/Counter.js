import React from "react";

const Counter = () => {
  return (
    <div className="container px-5 pt-10 pb-20 mx-auto md:px-28">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
        <div className="bg-gradient-to-r from-[#80258A] to-[#C30F19] text-white text-center py-5">
          <p className="text-3xl font-bold">6M+</p>
          <p className="text-sm">Trust PamperTree to sell online</p>
        </div>
        <div className="bg-gradient-to-r from-[#80258A] to-[#C30F19] text-white text-center py-5">
          <p className="text-3xl font-bold">11M+</p>
          <p className="text-sm">Customers buying across UK</p>
        </div>
        <div className="bg-gradient-to-r from-[#80258A] to-[#C30F19] text-white text-center py-5">
          <p className="text-3xl font-bold">28000+</p>
          <p className="text-sm">Pincode supported for delivery</p>
        </div>
        <div className="bg-gradient-to-r from-[#80258A] to-[#C30F19] text-white text-center py-5">
          <p className="text-3xl font-bold">700+</p>
          <p className="text-sm">Categories to sell online</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
