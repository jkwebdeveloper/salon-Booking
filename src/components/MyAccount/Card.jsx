import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import EditCardModal from "./EditCardModal";
import { Button } from "../ui/button";

const Card = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOnClose = () => {
    setOpenModal(false);
  };
  return (
    <div className="space-y-4 bg-white shadow-lg xl:p-5 p-3">
      <p className="text-xl text-[#25324B] font-semibold">Profile</p>
      <div className="flex items-center justify-between">
        <p>Your saved credit and debit cards</p>
        <button
          type="button"
          className="uppercase outline_button"
          onClick={() => setOpenModal(true)}
        >
          aDD NEW CARD
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-5 items-center">
        <div className="bg-white space-y-3 rounded-lg py-5 px-3 shadow-xl">
          <h1 className="uppercase font-semibold text-2xl">JOHN ADAM</h1>
          <div className="flex justify-start items-center gap-7">
            <p className="text-sm">**** **** **** *0357</p>
            <p className="text-sm">Expire on : 12/2029</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#7f52861a] p-2 rounded-full">
              <MdLocationPin className="text-lg text-primary_color" />
            </div>
            <div>
              <p className="md:text-base text-sm">
                Barnack, Cambridge 181.2 miles
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button type="button" variant="outline" className="">
              remove
            </Button>
            <button
              type="button"
              className="focus:outline-none uppercase bg-[#711F7E] text-white font-medium rounded-full active:scale-90 transition text-sm px-14 py-3 "
            >
              edit
            </button>
          </div>
        </div>
        <div className="bg-white space-y-3 rounded-lg py-5 px-3 shadow-xl">
          <h1 className="uppercase font-semibold text-2xl">JOHN ADAM</h1>
          <div className="flex justify-start items-center gap-7">
            <p className="text-sm">**** **** **** *0843</p>
            <p className="text-sm">Expire on : 10/2032</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#7f52861a] p-2 rounded-full">
              <MdLocationPin className="text-lg text-primary_color" />
            </div>
            <div>
              <p className="md:text-base text-sm">
                Barnack, Cambridge 181.2 miles
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button type="button" className="outline_button_red">
              remove
            </button>
            <button
              type="button"
              className="focus:outline-none uppercase bg-[#711F7E] text-white font-medium rounded-full active:scale-90 transition text-sm px-14 py-3 "
            >
              edit
            </button>
          </div>
        </div>
      </div>
      <EditCardModal onClose={handleOnClose} visible={openModal} />
    </div>
  );
};

export default Card;
