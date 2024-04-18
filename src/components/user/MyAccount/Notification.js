import Button from "@/components/ui/button";
import React from "react";

const Notification = () => {
  return (
    <div className="p-3 space-y-4 bg-white rounded-md xl:p-5">
      <p className="text-xl text-[#25324B] font-semibold">
        Notification settings
      </p>
      <div className="space-y-3">
        <p className="text-xl font-semibold">Inspiration and offers</p>
        <p className="text-sm">
          I consent to the use of my personal data to be updated on new
          treatments, exclusive discounts and for marketing purposes related to
          the services offered.
        </p>
        <li class="w-full list-none">
          <div class="flex items-center">
            <input
              id="list-radio-license"
              type="checkbox"
              value=""
              name="list-radio"
              class=""
            />
            <label
              for="list-radio-license"
              class="w-full ms-2 text-sm font-medium text-gray-900 "
            >
              Notification via SMS
            </label>
          </div>
        </li>
        <li class="w-full list-none">
          <div class="flex items-center">
            <input
              id="list-radio-license"
              type="checkbox"
              value=""
              name="list-radio"
              class=""
            />
            <label
              for="list-radio-license"
              class="w-full ms-2 text-sm font-medium text-gray-900 "
            >
              Notification via Email
            </label>
          </div>
        </li>
        <Button variant="primary">SuBmit</Button>
      </div>
    </div>
  );
};

export default Notification;
