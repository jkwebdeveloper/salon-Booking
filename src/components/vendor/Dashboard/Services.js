"use client";
import React, { useEffect, useState } from "react";
import { BsPencilFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { TbCirclePlus } from "react-icons/tb";
import EditServiceModal from "./Modal/ServicesModal/EditServiceModal";
import Image from "next/image";
import { useSelector } from "react-redux";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import NewTreatmentModal from "./Modal/ServicesModal/NewTreatmentModal";
import ServicesListModal from "./Modal/ServicesModal/ServicesListModal";
import { Spinner, Label, Button, Error } from "@/components";
import { useVendorServices, useCategory } from "@/hooks";
import { POST } from "@/app/api/post";
import { GET } from "@/app/api/get";
import { v4 } from "uuid";

const Services = () => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);
  const vendorServices = useVendorServices();

  const [formState, setFormState] = React.useState({
    loading: false,
    error: "",
    success: "",
  });
  const [addService, setAddService] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [addtreatment, setAddtreatment] = useState(false);
  const [treatment, setTreatment] = useState(true);

  const [createVoucher, setCreateVoucher] = useState(false);
  const [discountType, setDiscountType] = useState("percentage");
  const [voucherList, setVoucherList] = useState(false);
  const [voucher, setVoucher] = useState(false);
  const [editVoucher, setEditVoucher] = useState(false);

  const getVouchers = async () => {
    const resp = await GET.request({
      url: "/vendor/get-all-giftvouchers",
      token: vendor?.api_token,
    });
    resp && resp.code == 200 ? setVoucherList(resp.data) : setVoucherList([]);
  };
  const [currentTab, setCurrentTab] = "service";
  const handleTreatmentClick = () => {
    setTreatment(true);
    setVoucher(false);
  };

  const handleVoucherClick = () => {
    setTreatment(false);
    setVoucher(true);
    getVouchers();
  };

  const handleEditVoucherClick = () => {
    setEditVoucher(true);
    setCreateVoucher(false);
    setVoucher(false);
    setTreatment(false);
  };

  const addNewVoucher = async (e) => {
    e.preventDefault();
    const resp = await POST.request({
      url: "/vendor/add-new-giftvouchers",
      form: e.target,
      token: vendor?.api_token,
      formState,
      setFormState,
    });
    if (resp?.code == 200) {
      setVoucher(true);
      setCreateVoucher(false);
    }
  };

  useEffect(() => {
    return setFormState({ loading: false, error: "", success: "" });
  }, [addtreatment, treatment, voucher, createVoucher, editVoucher]);

  return (
    <>
      <div className="space-y-4">
        {editVoucher && (
          <>
            <div className="w-full space-y-3 bg-white rounded-xl">
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
            </div>
          </>
        )}
        {createVoucher === true ? (
          <>
            <div className="w-full space-y-3 bg-white rounded-xl">
              <form
                className="p-4 space-y-3"
                noValidate
                onSubmit={(e) => addNewVoucher(e)}
              >
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-semibold">Create Voucher</p>
                  <IoMdClose
                    className="text-2xl cursor-pointer"
                    onClick={() => setCreateVoucher(false)}
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="first_name" text="Status" />
                  <div className="flex items-center gap-3">
                    <li className="list-none">
                      <div className="flex items-center">
                        <input
                          id="active"
                          type="radio"
                          value="1"
                          name="status"
                          className=""
                        />
                        <label
                          for="active"
                          className="text-sm font-medium text-gray-900 ms-2 "
                        >
                          Active
                        </label>
                      </div>
                    </li>
                    <li className="list-none">
                      <div className="flex items-center">
                        <input
                          id="inactive"
                          type="radio"
                          value="2"
                          name="status"
                          className=""
                        />
                        <label
                          for="inactive"
                          className="text-sm font-medium text-gray-900 ms-2 "
                        >
                          Inactive
                        </label>
                      </div>
                    </li>
                    <li className="list-none">
                      <div className="flex items-center">
                        <input
                          id="pending"
                          type="radio"
                          value="0"
                          name="status"
                          className=""
                          defaultChecked={true}
                        />
                        <label
                          for="pending"
                          className="text-sm font-medium text-gray-900 ms-2 "
                        >
                          Pending
                        </label>
                      </div>
                    </li>
                  </div>
                  <input type="file" name="voucher_image" />
                  <div className="w-full space-y-1 text-left">
                    <Label htmlFor="title" text="Title" required={true} />
                    <input
                      type="text"
                      name="title"
                      className="input_field"
                      placeholder="Enter Title"
                      pattern="^[a-zA-Z0-9\s]{4,}$"
                      required
                    />
                    <p className="error">Min 4 Character Required</p>
                  </div>
                  <div className="flex flex-col w-full gap-3 lg:flex-row">
                    <div className="w-full space-y-1 text-left lg:w-1/2">
                      <Label
                        htmlFor="first_name"
                        text="Discount Type"
                        required={true}
                      />
                      <select
                        className="w-full p-2 bg-transparent border rounded-md"
                        required
                        onChange={(e) => setDiscountType(e.target.value)}
                      >
                        <option value="percentage">Percentage</option>
                        <option value="fixed">Fixed</option>
                      </select>
                    </div>
                    <div className="w-full space-y-1 text-left lg:w-1/2">
                      <Label htmlFor="amount" text="Amount" required={true} />
                      <input
                        type="text"
                        name="amount"
                        className="input_field"
                        placeholder="Enter Amount *"
                        pattern={
                          discountType == "percentage"
                            ? "[0-9]{0,2}"
                            : "[0-9]{1,}"
                        }
                        maxLength={discountType == "percentage" ? 2 : ""}
                        step="0.1"
                        required
                      />
                      <p className="error">Enter Valid Amount </p>
                    </div>
                    <div className="w-full space-y-1 text-left lg:w-1/2">
                      <Label
                        htmlFor="expried_at"
                        text="Expires at"
                        required={true}
                      />
                      <input
                        type="date"
                        name="expried_at"
                        className="input_field"
                        placeholder="Enter Expires at"
                        pattern="\d{4}-\d{1,2}-\d{1,2}"
                        required
                        min={new Date().toISOString().split("T")[0]}
                      />
                      <p className="error">Enter Valid Expiry Date</p>
                    </div>
                  </div>
                  <Label htmlFor="message" text="Description" />
                  <textarea
                    id="message"
                    rows="4"
                    name="description"
                    className="input_field"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={formState?.loading}
                  >
                    <Spinner
                      show={formState?.loading}
                      width="25"
                      height="25"
                      text="Create"
                    />
                  </Button>
                  {formState?.error && <Error error={formState?.error} />}
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
              <div className="w-full p-4 space-y-5 bg-white rounded-xl">
                <div className="flex justify-between gap-5">
                  <p className="text-2xl font-semibold">Treatments</p>
                  <div className="flex items-center justify-between">
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
                        <NewTreatmentModal
                          setAddtreatment={setAddtreatment}
                          vendorServices={vendorServices}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                {(!vendorServices?.loading &&
                  vendorServices.data.map((service) => (
                    <div
                      className="w-full space-y-2 bg-white rounded-xl"
                      key={v4()}
                    >
                      <div className="flex items-center gap-2">
                        <p className="text-xl font-semibold">
                          {service?.categories?.title}
                        </p>
                        {/* Add Service Group Dialog */}
                        <TbCirclePlus
                          className="text-[#0AADA4] cursor-pointer"
                          onClick={(e) => {
                            setAddService(true);
                            setCurrentService(service);
                          }}
                        />
                      </div>
                      {service?.group_service_list.map((service_group) => (
                        <div
                          className="grid items-center grid-cols-1 gap-4 xl:grid-cols-2"
                          key={v4()}
                        >
                          <Dialog className="w-11/12">
                            <DialogTrigger>
                              <div className="border border-[#D9D9D9] space-y-4 rounded-lg p-3">
                                <div className="flex items-center justify-between">
                                  <p className="font-semibold text-start">
                                    {service_group?.service_title}
                                  </p>
                                  <div className="flex items-center gap-2">
                                    <BsPencilFill className=" text-primary_color" />
                                    <RiDeleteBin5Line className="text-[#FF0000]" />
                                  </div>
                                </div>
                                <div className="flex items-center justify-between">
                                  <p className="text-sm">
                                    {service_group?.duration}
                                  </p>
                                  <p className="text-sm">
                                    {service_group?.service_title}
                                  </p>
                                  <p className="text-sm font-bold">
                                    £{service_group?.price} €
                                    {service_group?.sales_price}
                                  </p>
                                </div>
                              </div>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[725px]">
                              <DialogTitle>Edit Service</DialogTitle>
                              <EditServiceModal service={service} />
                            </DialogContent>
                          </Dialog>
                        </div>
                      ))}
                    </div>
                  ))) || (
                  <div className="center min-h-[300px] w-full">
                    <Spinner
                      show={vendorServices?.loading}
                      width={50}
                      height={50}
                    />
                  </div>
                )}
                <Dialog
                  className="w-11/12"
                  open={addService}
                  onOpenChange={(e) => setAddService(e)}
                >
                  <DialogContent className="sm:max-w-[1025px]">
                    <DialogTitle>Service List</DialogTitle>
                    <ServicesListModal
                      service={currentService}
                      setAddService={setAddService}
                    />
                  </DialogContent>
                </Dialog>
              </div>
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
                    {voucherList && (
                      <table className="min-w-full font-[sans-serif]">
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
                          {voucherList.map((voucher) => (
                            <tr className="" key={v4()}>
                              <td className="px-4 py-4 text-sm">
                                {voucher.title}
                              </td>
                              <td className="px-4 py-4 text-sm">
                                £{voucher?.amount || "N/A"}
                              </td>
                              <td className="px-4 py-4 text-sm">
                                £{voucher?.sales_price || "N/A"}0
                              </td>
                              <td className="px-4 py-4 text-sm">
                                {voucher?.expried_at || "N/A"}
                              </td>
                              <td className="px-4 py-4 text-sm ">
                                <p
                                  className={`${
                                    (voucher.status == 0 && "bg-yellow-500") ||
                                    (vendor.status == 1 && "bg-green-700") ||
                                    "bg-red-700"
                                  } p-2 rounded-full text-center`}
                                >
                                  {(voucher.status == 0 && "Pending") ||
                                    (vendor.status == 1 && "Active") ||
                                    "Inactive"}
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
                          ))}
                        </tbody>
                      </table>
                    )}
                    {!voucherList && (
                      <div className="w-full min-h-[300px] center">
                        <Spinner show={true} width={50} height={50} />
                      </div>
                    )}
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
