import Button from "@/components/ui/button";
import React from "react";

const WithdrawModal = () => {
  return (
    <div className="space-y-4">
      <li class="w-full list-none">
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
            Paypal
          </label>
        </div>
      </li>
      <li class="w-full list-none">
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
            Bank Transfer
          </label>
        </div>
      </li>
      <hr />
      <div className="w-full space-y-1 text-left">
        <label htmlFor="PayPal Email Address *" className="label_text">
          PayPal Email Address *
        </label>
        <input
          type="email"
          name="PayPal Email Address *"
          className="input_field"
          placeholder="PayPal Email Address *"
        />
      </div>
      <Button variant="primary">Save</Button>
    </div>
  );
};

export default WithdrawModal;
