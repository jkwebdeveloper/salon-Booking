import Button from "@/components/ui/button";
import React from "react";

const ServicesListModal = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-start w-full gap-4">
        <div className="w-[25%] space-y-3">
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
                Nail Extensions
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
                Nail Art
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
                Nail Infills
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
                Nail Polish Removal
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
                Nails Manicure
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
                Nails Pedicure
              </label>
            </div>
          </li>
        </div>
        <div className=" w-[85%] space-y-3">
          <div className="border border-[#D9D9D9] space-y-4 rounded-lg p-3">
            <p>Nail Extensions</p>
            <hr />
            <div className="flex flex-col w-full gap-3 lg:flex-row">
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <input
                  type="text"
                  name="first_name"
                  id="fname"
                  className="input_field"
                  placeholder="Enter your Name"
                  pattern="[A-Za-z]{4,20}"
                  required
                />
              </div>
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <input
                  type="text"
                  name="last_name"
                  id="lname"
                  className="input_field"
                  placeholder="Enter your name"
                  pattern="[A-Za-z]{4,20}"
                  required
                />
              </div>
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <input
                  type="text"
                  name="last_name"
                  id="lname"
                  className="input_field"
                  placeholder="Enter your name"
                  pattern="[A-Za-z]{4,20}"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-3 lg:flex-row">
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <input
                  type="text"
                  name="first_name"
                  id="fname"
                  className="input_field"
                  placeholder="Enter your Name"
                  pattern="[A-Za-z]{4,20}"
                  required
                />
              </div>
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <input
                  type="text"
                  name="last_name"
                  id="lname"
                  className="input_field"
                  placeholder="Enter your name"
                  pattern="[A-Za-z]{4,20}"
                  required
                />
              </div>
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <input
                  type="text"
                  name="last_name"
                  id="lname"
                  className="input_field"
                  placeholder="Enter your name"
                  pattern="[A-Za-z]{4,20}"
                  required
                />
              </div>
            </div>
          </div>
          <div className="border border-[#D9D9D9] space-y-4 rounded-lg p-3">
            <p>Nail Extensions</p>
            <hr />
            <div className="flex flex-col w-full gap-3 lg:flex-row">
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <input
                  type="text"
                  name="first_name"
                  id="fname"
                  className="input_field"
                  placeholder="Enter your Name"
                  pattern="[A-Za-z]{4,20}"
                  required
                />
              </div>
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <input
                  type="text"
                  name="last_name"
                  id="lname"
                  className="input_field"
                  placeholder="Enter your name"
                  pattern="[A-Za-z]{4,20}"
                  required
                />
              </div>
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <input
                  type="text"
                  name="last_name"
                  id="lname"
                  className="input_field"
                  placeholder="Enter your name"
                  pattern="[A-Za-z]{4,20}"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-3 lg:flex-row">
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <input
                  type="text"
                  name="first_name"
                  id="fname"
                  className="input_field"
                  placeholder="Enter your Name"
                  pattern="[A-Za-z]{4,20}"
                  required
                />
              </div>
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <input
                  type="text"
                  name="last_name"
                  id="lname"
                  className="input_field"
                  placeholder="Enter your name"
                  pattern="[A-Za-z]{4,20}"
                  required
                />
              </div>
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <input
                  type="text"
                  name="last_name"
                  id="lname"
                  className="input_field"
                  placeholder="Enter your name"
                  pattern="[A-Za-z]{4,20}"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="primary">Treatments</Button>
            <Button variant="disable">Gift Voucher</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesListModal;
