import Button from "@/components/ui/button";
import React, { useState } from "react";
import NewTreatmentModal from "./Modal/ServicesModal/NewTreatmentModal";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import ServicesListModal from "./Modal/ServicesModal/ServicesListModal";
import Label from "@/components/ui/form/label";
const Services = () => {
  const [addCustomer, setAddCustomer] = useState(false);

  return (
    <>
      <div className="space-y-4">
        {/* <div className="flex items-center gap-3">
        <Button variant="primary">Treatments</Button>
        <Button variant="disable">Gift Voucher</Button>
      </div>
      <div className="w-full p-4 space-y-3 bg-white rounded-xl">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold">Treatments</p>
          <Dialog open={addCustomer} className="w-11/12">
            <DialogTrigger
              onClick={(e) => setAddCustomer(true)}
              className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
            >
              + Add New Treatment
            </DialogTrigger>
            <DialogContent close={setAddCustomer} className="sm:max-w-[1025px]">
              <DialogTitle>Add New Treatment</DialogTitle>
              <NewTreatmentModal setAddCustomer={setAddCustomer} />
              <ServicesListModal setAddCustomer={setAddCustomer} />
            </DialogContent>
          </Dialog>
        </div>
        <p className="text-xl font-semibold">Massage</p>
        <div className="grid items-center grid-cols-1 xl:grid-cols-2 lg:gap-4">
          <div className="border border-[#D9D9D9] space-y-4 rounded-lg p-3">
            <p className="font-semibold">Couple Massage</p>
            <div className="flex items-center justify-between">
              <p className="text-sm">02 h</p>
              <p className="text-sm">Couples Massage for 2 hours</p>
              <p className="text-sm font-bold">£349 €369</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm">02 h</p>
              <p className="text-sm">Couples Massage for 2 hours</p>
              <p className="text-sm font-bold">£349 €369</p>
            </div>
          </div>
          <div className="border border-[#D9D9D9] space-y-4 rounded-lg p-3">
            <p className="font-semibold">Couple Massage</p>
            <div className="flex items-center justify-between">
              <p className="text-sm">02 h</p>
              <p className="text-sm">Couples Massage for 2 hours</p>
              <p className="text-sm font-bold">£349 €369</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm">02 h</p>
              <p className="text-sm">Couples Massage for 2 hours</p>
              <p className="text-sm font-bold">£349 €369</p>
            </div>
          </div>
          <div className="border border-[#D9D9D9] space-y-4 rounded-lg p-3">
            <p className="font-semibold">Couple Massage</p>
            <div className="flex items-center justify-between">
              <p className="text-sm">02 h</p>
              <p className="text-sm">Couples Massage for 2 hours</p>
              <p className="text-sm font-bold">£349 €369</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm">02 h</p>
              <p className="text-sm">Couples Massage for 2 hours</p>
              <p className="text-sm font-bold">£349 €369</p>
            </div>
          </div>
        </div>
      </div> */}
        {/* Create Voucher start */}
        <div className="w-full p-4 space-y-3 bg-white rounded-xl">
          <p className="text-2xl font-semibold">Create Voucher</p>
          <div className="space-y-2">
            <Label htmlFor="first_name" text="Status" />
            <div className="flex items-center gap-3">
              <li className="list-none">
                <div className="flex items-center">
                  <input
                    id="list-radio-license"
                    type="radio"
                    value=""
                    name="list-radio"
                    className=""
                  />
                  <label
                    for="list-radio-license"
                    className="text-sm font-medium text-gray-900 ms-2 "
                  >
                    Active
                  </label>
                </div>
              </li>
              <li className="list-none">
                <div className="flex items-center">
                  <input
                    id="list-radio-license"
                    type="radio"
                    value=""
                    name="list-radio"
                    className=""
                  />
                  <label
                    for="list-radio-license"
                    className="text-sm font-medium text-gray-900 ms-2 "
                  >
                    Inactive
                  </label>
                </div>
              </li>
              <li className="list-none">
                <div className="flex items-center">
                  <input
                    id="list-radio-license"
                    type="radio"
                    value=""
                    name="list-radio"
                    className=""
                  />
                  <label
                    for="list-radio-license"
                    className="text-sm font-medium text-gray-900 ms-2 "
                  >
                    Pending
                  </label>
                </div>
              </li>
            </div>
            <div className="w-full space-y-1 text-left">
              <Label htmlFor="first_name" text="Title" />
              <input
                type="text"
                name="first_name"
                className="input_field"
                placeholder="Enter Title"
                pattern="[A-Za-z]{4,20}"
              />
            </div>
            <div className="flex flex-col w-full gap-3 lg:flex-row">
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <Label htmlFor="first_name" text="Discount Type *" />
                <input
                  type="text"
                  name="first_name"
                  className="input_field"
                  placeholder="Enter Discount Type *"
                  pattern="[A-Za-z]{4,20}"
                />
              </div>
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <Label htmlFor="last_name" text="Amount *" />
                <input
                  type="text"
                  name="last_name"
                  className="input_field"
                  placeholder="Enter Amount *"
                  pattern="[A-Za-z]{4,20}"
                />
              </div>
              <div className="w-full space-y-1 text-left lg:w-1/2">
                <Label htmlFor="last_name" text="Expires at *" />
                <input
                  type="text"
                  name="last_name"
                  className="input_field"
                  placeholder="Enter Expires at *"
                  pattern="[A-Za-z]{4,20}"
                />
              </div>
            </div>
            <Button variant="primary">Create</Button>
          </div>
        </div>
        {/* Create Voucher end */}
      </div>
    </>
  );
};

export default Services;
