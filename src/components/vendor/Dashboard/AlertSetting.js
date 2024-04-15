import Button from "@/components/ui/button";
import React from "react";

const AlertSetting = () => {
  return (
    <div className="space-y-4">
      <p className="text-2xl font-semibold">Alerts setting</p>
      <div className="w-full p-3 space-y-4 bg-white rounded-xl">
        <p className="text-xl font-semibold">Push notification</p>
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

export default AlertSetting;
