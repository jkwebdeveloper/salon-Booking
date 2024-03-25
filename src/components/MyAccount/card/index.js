import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import EditCardModal from "@/components/MyAccount/card/EditCardModal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Card = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOnClose = () => {
    setOpenModal(false);
  };
  return (
    <div className="p-3 space-y-4 bg-white rounded-md xl:p-5">
      <p className="text-xl text-[#25324B] font-semibold">Profile</p>
      <div className="flex items-center justify-between">
        <p>Your saved credit and debit cards</p>
        <Dialog>
          <DialogTrigger className="flex items-center h-8 px-6 py-3 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90">
            Add New Card
          </DialogTrigger>
          <DialogContent className="max-h-[90vh]">
            <DialogTitle>Add new card</DialogTitle>
            <EditCardModal />
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid items-center justify-center grid-cols-1 gap-5 py-5 lg:grid-cols-2">
        <div className="px-3 py-5 space-y-3 bg-white rounded-lg shadow-md ring-1 ring-neutral-200/70">
          <h1 className="text-2xl font-semibold uppercase">JOHN ADAM</h1>
          <div className="flex items-center justify-start gap-7">
            <p className="text-sm">**** **** **** *0357</p>
            <p className="text-sm">Expire on : 12/2029</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#7f52861a] p-2 rounded-full">
              <MdLocationPin className="text-lg text-primary_color" />
            </div>
            <div>
              <p className="text-sm md:text-base">
                Barnack, Cambridge 181.2 miles
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button type="button" variant="outline" className="uppercase">
              remove
            </Button>
            <Button type="button" variant="primary" className="uppercase">Edit</Button>
          </div>
        </div>
        <div className="px-3 py-5 space-y-3 bg-white rounded-lg shadow-md ring-1 ring-neutral-200/70">
          <h1 className="text-2xl font-semibold uppercase">JOHN ADAM</h1>
          <div className="flex items-center justify-start gap-7">
            <p className="text-sm">**** **** **** *0843</p>
            <p className="text-sm">Expire on : 10/2032</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#7f52861a] p-2 rounded-full">
              <MdLocationPin className="text-lg text-primary_color" />
            </div>
            <div>
              <p className="text-sm md:text-base">
                Barnack, Cambridge 181.2 miles
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button type="button" variant="outline" className="uppercase">
              remove
            </Button>
            <Button type="button" variant="primary" className="uppercase">Edit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
