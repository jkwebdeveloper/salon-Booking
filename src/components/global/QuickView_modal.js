import React from "react";

const QuickView_modal = () => {
  return (
    <div className="w-full space-y-1 text-left">
      <label htmlFor="city" className="label_text text-[#000D23] text-sm">
        Card holder name
      </label>
      <input
        type="text"
        name="card_holder_name"
        className="input_field"
        placeholder="Your name"
        pattern="[A-Za-z]{4,20}"
      />
    </div>
  );
};

export default QuickView_modal;
