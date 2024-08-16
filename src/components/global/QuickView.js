import React from "react";
import { FaStar } from 'react-icons/fa';

const QuickView = ({ moreInfo = [], service }) => {
  const lowestPrice = moreInfo?.length ? Math.min(...moreInfo.map((item) => item.sale_price || item.price)) : 0;
  const { description } = moreInfo[0] || service || {};
  return (
    <div className="w-full space-y-3">
      {moreInfo?.length ? <p className=" text-[#656565]">{moreInfo?.length} services</p> : null}
      {lowestPrice ? <p className="text-2xl font-bold text-primary_color">From £{lowestPrice}</p> : null}
      {description
        ? <div className="space-y-2">
          <h2 className="font-semibold">About this service</h2>
          <p className="text-[#656565] text-sm">
            {description}
          </p>
        </div>
        : null
      }
      <p className="font-semibold">Service rating</p>
      <div className="flex items-center gap-3">
        <p className="text-[56px] font-semibold">4.0</p>
        <div className="flex-col space-y-2">
          <div className="flex items-center gap-2">
            <FaStar className="text-[#FFCC00]" />
            <FaStar className="text-[#FFCC00]" />
            <FaStar className="text-[#FFCC00]" />
            <FaStar className="text-[#e0e0e0]" />
            <FaStar className="text-[#e0e0e0]" />
          </div>
          <p className="text-sm text-[#7A7A7A]">24 reviews</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <FaStar className="text-[#FFCC00]" />
          <FaStar className="text-[#FFCC00]" />
          <FaStar className="text-[#FFCC00]" />
          <FaStar className="text-[#FFCC00]" />
          <FaStar className="text-[#e0e0e0]" />
        </div>
        <p className="text-[#656565] text-sm">
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.`}{' '}
        </p>
        <p className="font-semibold">Ellen McLaughlin</p>
        <p className="text-[#656565] text-sm">2 hours ago</p>
      </div>
      <div className="flex items-center">
        <div className="w-1 bg-[#0AADA4] h-10 mr-3"></div>
        <div className="flex-col">
          <p className="text-[#0AADA4] text-sm">Store replay</p>
          <p className="t">
            Thank you Martina, I know Kelly will appreciate such a
            genuine review
          </p>
        </div>
      </div>
      <hr />
      <div className="flex items-center gap-2">
        <FaStar className="text-[#FFCC00]" />
        <FaStar className="text-[#FFCC00]" />
        <FaStar className="text-[#FFCC00]" />
        <FaStar className="text-[#e0e0e0]" />
        <FaStar className="text-[#e0e0e0]" />
      </div>
    </div>
  );
};

export default QuickView;
