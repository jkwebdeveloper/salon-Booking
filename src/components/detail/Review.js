import React from "react";
import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <div className="w-full space-y-8">
      <p className="text-2xl font-semibold text-black uppercase title heading">
        Customer <span className="text-primary_color">reviews</span>
      </p>
      <div className="flex flex-col lg:flex-row lg:items-center items-start gap-6">
        <div className="text-center">
          <div className="flex gap-2 items-center">
            <h1 className="text-5xl font-bold">4.0</h1>
            <FaStar className="text-[#FFCC00] text-4xl" />
          </div>
          <p className="text-[#7A7A7A] text-xs">24 ratings and 4 reviews</p>
        </div>
        <div className="border border-[#e0e0e0] rounded-lg p-4">
          <div className="flex items-center gap-8 justify-between">
            <div>
              <p className="font-bold">Ambience</p>
            </div>
            <div className="flex items-center gap-2">
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#e0e0e0]" />
              <FaStar className="text-[#e0e0e0]" />
            </div>
          </div>
        </div>
        <div className="border border-[#e0e0e0] rounded-lg p-4">
          <div className="flex items-center gap-8 justify-between">
            <div>
              <p className="font-bold">Staff</p>
            </div>
            <div className="flex items-center gap-2">
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#e0e0e0]" />
            </div>
          </div>
        </div>
        <div className="border border-[#e0e0e0] rounded-lg p-4">
          <div className="flex items-center gap-8 justify-between">
            <div>
              <p className="font-bold">Cleanliness</p>
            </div>
            <div className="flex items-center gap-2">
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col min-h-[55dvh] gap-4 md:flex-row md:mb-10">
        <div className="border border-[#e0e0e0] rounded-md h-fit min-h-[350px] md:w-[40%] lg:w-[25%] w-[95%] mx-auto space-y-5 p-4 bg-white">
          <p>Filter by rating</p>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" />
            <FaStar className="text-[#FFCC00]" />
            <FaStar className="text-[#FFCC00]" />
            <FaStar className="text-[#FFCC00]" />
            <FaStar className="text-[#FFCC00]" />
            <FaStar className="text-[#FFCC00]" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" />
            <FaStar className="text-[#FFCC00]" />
            <FaStar className="text-[#FFCC00]" />
            <FaStar className="text-[#FFCC00]" />
            <FaStar className="text-[#FFCC00]" />
            <FaStar className="text-[#e0e0e0]" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" />
            <FaStar className="text-[#FFCC00]" />
            <FaStar className="text-[#FFCC00]" />
            <FaStar className="text-[#FFCC00]" />
            <FaStar className="text-[#e0e0e0]" />
            <FaStar className="text-[#e0e0e0]" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" />
            <FaStar className="text-[#FFCC00]" />
            <FaStar className="text-[#FFCC00]" />
            <FaStar className="text-[#e0e0e0]" />
            <FaStar className="text-[#e0e0e0]" />
            <FaStar className="text-[#e0e0e0]" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" />
            <FaStar className="text-[#FFCC00]" />
            <FaStar className="text-[#e0e0e0]" />
            <FaStar className="text-[#e0e0e0]" />
            <FaStar className="text-[#e0e0e0]" />
            <FaStar className="text-[#e0e0e0]" />
          </div>
        </div>
        <div className="md:w-4/5 w-[90%] mx-auto space-y-5 h-fit min-h-[350px]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#e0e0e0]" />
            </div>
            <p className="text-[#656565] text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
            <p className="font-semibold">Ellen McLaughlin</p>
            <p className="text-[#656565] text-sm">2 hours ago</p>
          </div>
          <hr />
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#e0e0e0]" />
            </div>
            <p className="text-[#656565] text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
            <p className="font-semibold">Ellen McLaughlin</p>
            <p className="text-[#656565] text-sm">2 hours ago</p>
          </div>
          <hr />
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#FFCC00]" />
              <FaStar className="text-[#e0e0e0]" />
            </div>
            <p className="text-[#656565] text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
            <p className="font-semibold">Ellen McLaughlin</p>
            <p className="text-[#656565] text-sm">2 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
