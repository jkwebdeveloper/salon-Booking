import Button from "@/components/ui/button";
import React from "react";

const WalletModal = () => {
  return (
    <div className="space-y-5">
      <div className="w-full space-y-1 text-left">
        <label htmlFor="city" className="label_text text-[#000D23] text-sm">
          Amount
        </label>
        <input
          type="text"
          name="Amount"
          className="input_field"
          placeholder="Enter here..."
          pattern="[A-Za-z]{4,20}"
        />
      </div>
      <div className="mx-auto">
        <Button
          type="button"
          variant="primary"
          className="px-10 mx-auto uppercase"
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default WalletModal;
