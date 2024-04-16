import Button from "@/components/ui/button";
import React from "react";
import { FaCamera } from "react-icons/fa";

import Image from "next/image";
import Label from "@/components/ui/form/label";
import { DatePicker } from "@/components/user/Home/FindNearByForm/datepicker";

const AddTeam = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button variant="secondary">Basic Info</Button>
        <Button variant="disable">Services</Button>
        <Button variant="disable">Public Profile</Button>
      </div>
      {/* Add Team Member Modal */}

      {/* <div className="border relative border-1 border-[#0AADA4] rounded-full p-1 w-[3.5rem] h-[3.5rem] mb-2">
        <Image
          src="/static/images/user.webp"
          alt="profile"
          loading="lazy"
          className="object-cover w-full h-full rounded-full z-1"
          width={50}
          height={50}
        />
        <input
          type="file"
          className="absolute top-0 bottom-0 left-0 right-0 mt-2 cursor-pointer rounded-full max-w-[3.5rem] mx-auto opacity-0 z-2"
          name="photo"
        />
        <FaCamera className="absolute top-4 left-4  p-[4px] text-2xl text-white rounded-full bottom-0" />
      </div>
      <div className="flex flex-col w-full gap-3 lg:flex-row">
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="email" text="First name" />
          <input
            type="text"
            name="First name"
            className="input_field"
            placeholder="Enter your First name"
          />
        </div>
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="phone_number" text="Last name" />
          <input
            type="text"
            name="phone_number"
            className="input_field"
            placeholder="Enter your Last name"
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 lg:flex-row">
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="email" text="Email" />
          <input
            type="email"
            name="email"
            className="input_field"
            placeholder="Enter your email"
          />
        </div>
        <div className="w-full space-y-1 text-left lg:w-1/2">
          <Label htmlFor="phone_number" text="Phone Number" />
          <input
            type="text"
            name="phone_number"
            className="input_field"
            placeholder="Enter your Phone Number"
          />
        </div>
      </div>
      <Label htmlFor="email" text="Email" />
      <div className="border w-max rounded-md border-[#eae9e9]">
        <DatePicker />
      </div>
      <div className="flex items-center gap-3">
        <Button variant="disable">Cancel</Button>
        <Button variant="primary">Save</Button>
      </div> */}

      {/* Add Team Member Modal */}
      <p className="text-xl text-[#1D1B23] font-semibold">
        What service can be booked for this employee ?
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
            All Services
          </label>
        </div>
      </li>
      <div className="border space-y-3 rounded-lg border-[#D8DAE5] bg-[#FAFAFA] p-3">
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
              class="w-full ms-2 text-base font-semibold"
            >
              Massage
            </label>
          </div>
        </li>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                class="w-full ms-2 text-sm font-normal"
              >
                Acupuncture Massage
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
                class="w-full ms-2 text-sm font-normal"
              >
                Aromatherapy Massage
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
                class="w-full ms-2 text-sm font-normal"
              >
                Back, Neck & Shoulders
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
                class="w-full ms-2 text-sm font-normal"
              >
                Chair Massage
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
                class="w-full ms-2 text-sm font-normal"
              >
                Biodynamic Massage
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
                class="w-full ms-2 text-sm font-normal"
              >
                Body Scrub Massage
              </label>
            </div>
          </li>
        </div>
      </div>
      <div className="border space-y-3 rounded-lg border-[#D8DAE5] bg-[#FAFAFA] p-3">
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
              class="w-full ms-2 text-base font-semibold"
            >
              Nail Salons
            </label>
          </div>
        </li>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                class="w-full ms-2 text-sm font-normal"
              >
                Acupuncture Massage
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
                class="w-full ms-2 text-sm font-normal"
              >
                Aromatherapy Massage
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
                class="w-full ms-2 text-sm font-normal"
              >
                Back, Neck & Shoulders
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
                class="w-full ms-2 text-sm font-normal"
              >
                Chair Massage
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
                class="w-full ms-2 text-sm font-normal"
              >
                Biodynamic Massage
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
                class="w-full ms-2 text-sm font-normal"
              >
                Body Scrub Massage
              </label>
            </div>
          </li>
        </div>
      </div>
      <div className="border space-y-3 rounded-lg border-[#D8DAE5] bg-[#FAFAFA] p-3">
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
              class="w-full ms-2 text-base font-semibold"
            >
              Hair Removal
            </label>
          </div>
        </li>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                class="w-full ms-2 text-sm font-normal"
              >
                Acupuncture Massage
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
                class="w-full ms-2 text-sm font-normal"
              >
                Aromatherapy Massage
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
                class="w-full ms-2 text-sm font-normal"
              >
                Back, Neck & Shoulders
              </label>
            </div>
          </li>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="disable">Cancel</Button>
        <Button variant="primary">Save</Button>
        <Button variant="danger">Delete</Button>
      </div>
    </div>
  );
};

export default AddTeam;
