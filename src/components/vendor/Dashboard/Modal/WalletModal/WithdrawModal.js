import Button from "@/components/ui/button";
import React, { useState } from "react";
import { TbAlertCircle } from "react-icons/tb";

const WithdrawModal = () => {
  const [selectedOption, setSelectedOption] = useState("paypal");
  return (
    <div className="space-y-4">
      <li class="w-full list-none">
        <div class="flex items-center">
          <input
            id="paypal-radio"
            type="radio"
            value="paypal"
            name="payment-method"
            className=""
            checked={selectedOption === "paypal"}
            onChange={() => setSelectedOption("paypal")}
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
            id="bank-transfer-radio"
            type="radio"
            value="bank-transfer"
            name="payment-method"
            className=""
            checked={selectedOption === "bank-transfer"}
            onChange={() => setSelectedOption("bank-transfer")}
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
      {selectedOption === "paypal" && (
        <div className="w-full space-y-1 text-left">
          <label htmlFor="paypal-email" className="label_text">
            PayPal Email Address *
          </label>
          <input
            type="email"
            id="paypal-email"
            name="paypal-email"
            className="input_field"
            placeholder="PayPal Email Address *"
          />
        </div>
      )}
      {selectedOption === "bank-transfer" && (
        <>
          <div className="w-full space-y-1 text-left">
            <label htmlFor="account-text" className="label_text">
              Name of account holder *
            </label>
            <input
              type="text"
              id="account-text"
              name="account-text"
              className="input_field"
              placeholder="Type here..."
            />
          </div>
          <div className="w-full space-y-1 text-left">
            <label htmlFor="account-text" className="label_text">
              Account number *
            </label>
            <input
              type="text"
              id="account-text"
              name="account-text"
              className="input_field"
              placeholder="Type here..."
            />
          </div>
          <div className="w-full space-y-1 text-left">
            <label htmlFor="account-text" className="label_text">
              Name of the Bank *
            </label>
            <input
              type="text"
              id="account-text"
              name="account-text"
              className="input_field"
              placeholder="Type here..."
            />
          </div>
        </>
      )}
      <Button variant="primary">Save</Button>

      {/* Make withdraw request modal start  */}

      {/* <div className="space-y-4">
        <p className="text-lg font-medium">Withdrawal Amount</p>
        <p className="text-[#666666]">
          Available for withdrawal Amount: €1048.00
        </p>
        <div className="w-full space-y-1 text-left">
          <label htmlFor="account-text" className="label_text">
            Name of account holder *
          </label>
          <input
            type="text"
            id="account-text"
            name="account-text"
            className="input_field"
            placeholder="Enter your withdrawal amount here..."
          />
        </div>
        <Button variant="primary">Make request</Button>
      </div> */}
      {/* Make withdraw request modal End  */}

      {/* withdrawal request Modal start */}
      {/* <>
        <div className="flex items-center justify-center">
          <TbAlertCircle className="text-[64px] text-[#DDB100]" />
        </div>
        <p className="text-2xl font-semibold">
          Are you sure you want to make the <br />
          withdrawal request?
        </p>
        <div className="flex items-center gap-3">
          <Button variant="primary">Yes, Make it</Button>
          <Button variant="disable">Cancel</Button>
        </div>
      </> */}
      {/* withdrawal request Modal end */}
    </div>
  );
};

export default WithdrawModal;
