import Button from "@/components/ui/button";
import React, { useState } from "react";
import { BsPencilFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { TbCirclePlus } from "react-icons/tb";
import EditServiceModal from "./Modal/ServicesModal/EditServiceModal";
import Image from "next/image";

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
  const [addtreatment, setAddtreatment] = useState(false);
  const [editService, seteditService] = useState(false);

  const [treatment, setTreatment] = useState(true);
  const [voucher, setVoucher] = useState(false);
  const [createVoucher, setCreateVoucher] = useState(false);
  const [editVoucher, setEditVoucher] = useState(false);

  const handleTreatmentClick = () => {
    setTreatment(true);
    setVoucher(false);
  };
  const handleVoucherClick = () => {
    setTreatment(false);
    setVoucher(true);
  };

  const handleEditVoucherClick = () => {
    setEditVoucher(true);
    setCreateVoucher(false);
    setVoucher(false);
    setTreatment(false);
  };

  return (
    <>
      <div className="space-y-4">
        {editVoucher && (
          <>
            <div className="w-full space-y-3 bg-white rounded-xl">
              {/* Create Voucher section start */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-semibold">Edit Voucher</p>
                  <IoMdClose
                    className="text-2xl cursor-pointer"
                    onClick={() => setEditVoucher(false)}
                  />
                </div>
                <div className="relative">
                  <Image
                    src={"/static/images/Bg-shape.png"}
                    alt=""
                    loading="lazy"
                    width={400}
                    height={300}
                    className="object-cover object-center w-full "
                  />
                </div>
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
                  <Label htmlFor="last_name" text="Description" />
                  <textarea
                    id="message"
                    rows="4"
                    className="input_field"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                  <Button variant="primary">Create</Button>
                </div>
              </div>
              {/* Create Voucher section End */}
              {/* <div className="p-4 space-y-3">
              <p className="text-2xl font-semibold">Edit Voucher</p>
              <IoMdClose
                className="text-2xl cursor-pointer"
                onClick={() => setCreateVoucher(false)}
              />

            </div> */}
            </div>
          </>
        )}
        {createVoucher === true ? (
          <>
            <div className="w-full space-y-3 bg-white rounded-xl">
              {/* Create Voucher section start */}
              <form className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-semibold">Create Voucher</p>
                  <IoMdClose
                    className="text-2xl cursor-pointer"
                    onClick={() => setCreateVoucher(false)}
                  />
                </div>
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
                  <Label htmlFor="last_name" text="Description" />
                  <textarea
                    id="message"
                    rows="4"
                    className="input_field"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                  <Button variant="primary" type="submit">Create</Button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <Button
                variant={treatment ? "primary" : "disable"}
                onClick={handleTreatmentClick}
              >
                Treatments
              </Button>
              <Button
                variant={voucher ? "primary" : "disable"}
                onClick={handleVoucherClick}
              >
                Gift Voucher
              </Button>
            </div>
            {treatment && (
              <>
                <div className="w-full p-4 space-y-3 bg-white rounded-xl">
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold">Treatments</p>
                    <Dialog open={addtreatment} className="w-1/2">
                      <DialogTrigger
                        onClick={(e) => setAddtreatment(true)}
                        className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
                      >
                        + Add New Treatment
                      </DialogTrigger>
                      <DialogContent
                        close={setAddtreatment}
                        className="sm:max-w-[1025px]"
                      >
                        <DialogTitle>Add New Treatment</DialogTitle>
                        <NewTreatmentModal setAddtreatment={setAddtreatment} />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-semibold">Massage</p>
                    <Dialog open={addCustomer} className="w-11/12">
                      <DialogTrigger onClick={(e) => setAddCustomer(true)}>
                        <TbCirclePlus className="text-[#0AADA4]" />
                      </DialogTrigger>
                      <DialogContent
                        close={setAddCustomer}
                        className="sm:max-w-[1025px]"
                      >
                        <DialogTitle>Service List</DialogTitle>
                        <ServicesListModal setAddCustomer={setAddCustomer} />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="grid items-center grid-cols-1 xl:grid-cols-2 lg:gap-4">
                    <Dialog open={editService} className="w-11/12">
                      <DialogTrigger onClick={(e) => seteditService(true)}>
                        <div className="border border-[#D9D9D9] space-y-4 rounded-lg p-3">
                          <p className="font-semibold">Couple Massage</p>
                          <div className="flex items-center justify-between">
                            <p className="text-sm">02 h</p>
                            <p className="text-sm">
                              Couples Massage for 2 hours
                            </p>
                            <p className="text-sm font-bold">£349 €369</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm">02 h</p>
                            <p className="text-sm">
                              Couples Massage for 2 hours
                            </p>
                            <p className="text-sm font-bold">£349 €369</p>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent
                        close={seteditService}
                        className="sm:max-w-[725px]"
                      >
                        <DialogTitle>Edit Service</DialogTitle>
                        <EditServiceModal seteditService={seteditService} />
                      </DialogContent>
                    </Dialog>

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
                </div>
              </>
            )}
            {voucher && (
              <>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-semibold">Gift Voucher</p>
                  <Button
                    variant="primary"
                    onClick={() => setCreateVoucher(true)}
                  >
                    + Add New Voucher
                  </Button>
                </div>
                <div className="w-full p-4 space-y-3 bg-white rounded-xl">
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg font-[sans-serif]">
                      <thead className="border-b-2 whitespace-nowrap">
                        <tr>
                          <th className="px-4 py-3 text-sm font-semibold text-left">
                            Title
                          </th>
                          <th className="px-4 py-3 text-sm font-semibold text-left">
                            Price
                          </th>

                          <th className="px-4 py-3 text-sm font-semibold text-left">
                            Off Price
                          </th>
                          <th className="px-4 py-3 text-sm font-semibold text-left">
                            Expires at
                          </th>
                          <th className="px-4 py-3 text-sm font-semibold text-left">
                            Status
                          </th>
                          <th className="px-4 py-3 text-sm font-semibold text-left">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="border-b-2 whitespace-nowrap">
                        <tr className="">
                          <td className="px-4 py-4 text-sm">
                            20% OFF ON Any Salon service booking
                          </td>
                          <td className="px-4 py-4 text-sm">£119.00</td>
                          <td className="px-4 py-4 text-sm">£99.00</td>
                          <td className="px-4 py-4 text-sm">12 April 2024</td>
                          <td className="px-4 py-4 text-sm ">
                            <p className="bg-[#EABB00] p-2 rounded-full text-center">
                              Active
                            </p>
                          </td>
                          <td className="flex gap-4 px-4 py-6">
                            <BsPencilFill
                              className="text-[#0AADA4] text-xl cursor-pointer"
                              onClick={handleEditVoucherClick}
                            />
                            <RiDeleteBin5Line className="text-[#FF0000] text-xl" />
                          </td>
                        </tr>
                      </tbody>
                      <tbody className=" whitespace-nowrap">
                        <tr className="">
                          <td className="px-4 py-4 text-sm">
                            20% OFF ON Any Salon service booking
                          </td>
                          <td className="px-4 py-4 text-sm">£119.00</td>
                          <td className="px-4 py-4 text-sm">£99.00</td>
                          <td className="px-4 py-4 text-sm">12 April 2024</td>
                          <td className="px-4 py-4 text-sm ">
                            <p className="bg-[#EABB00] p-2 rounded-full text-center">
                              Active
                            </p>
                          </td>
                          <td className="flex gap-4 px-4 py-6">
                            <BsPencilFill
                              className="text-[#0AADA4] text-xl cursor-pointer"
                              onClick={handleEditVoucherClick}
                            />
                            <RiDeleteBin5Line className="text-[#FF0000] text-xl" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Services;
