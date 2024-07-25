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
import Validation from "@/constants/validation";
import { DatePicker } from "@/components/user/Home/FindNearByForm/datepicker";

const Services = () => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);
  const [getServices, vendorServices] = useVendorServices();
  const [formState, setFormState] = React.useState({
    loading: false,
    error: "",
    success: "",
  });
  const [refreshServices, setRefreshServices] = useState(v4());
  const [services, setServices] = useState([]);
  const [addService, setAddService] = useState(false);
  const [editService, setEditService] = useState(false);
  const [currentEditService, setCurrentEditService] = useState(null);
  const [currentService, setCurrentService] = useState(null);
  const [addtreatment, setAddtreatment] = useState(false);
  const [treatment, setTreatment] = useState(true);
  const [calendarOpen, setCalendarOpen] = React.useState(false);

  const [createVoucher, setCreateVoucher] = useState(false);
  const [discountType, setDiscountType] = useState("percentage");
  const [voucherList, setVoucherList] = useState(false);
  const [voucher, setVoucher] = useState(false);
  const [editVoucher, setEditVoucher] = useState(false);
  const [voucherData, setVoucherData] = useState(null);

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
      getVouchers();
      setVoucher(true);
      setCreateVoucher(false);
    }
  };

  const deleteGroup = async ({ e, id, sub_categories_id }) => {
    const resp = await POST.request({
      url: "/vendor/delete-vendor-services",
      form: { id, sub_categories_id },
      token: vendor?.api_token,
    });
    if (resp && resp?.code == 200) {
      e.target.closest(".serviceBox").remove();
    }
  };

  const deleteVoucher = async (id) => {
    const resp = await POST.request({
      url: "/vendor/delete-giftvouchers",
      form: { gift_vouchers_id: id },
      token: vendor?.api_token,
    });
    if (resp && resp?.code == 200) {
      getVouchers();
    }
  };

  const updateVoucher = async (e) => {
    e.preventDefault();
    const resp = await POST.request({
      url: "/vendor/update-giftvouchers",
      form: e.target,
      token: vendor?.api_token,
      formState,
      setFormState,
    });
    if (resp?.code == 200) {
      getVouchers();
      setEditVoucher(false);
      setVoucher(true);
    }
  };

  useEffect(() => {
    return setFormState({ loading: false, error: "", success: "" });
  }, [addtreatment, treatment, voucher, createVoucher, editVoucher]);

  useEffect(() => {
    getServices().then((data) => setServices(data.data));
  }, [refreshServices]);

  useEffect(() => {
    setServices(vendorServices?.data);
  }, [vendorServices?.loading]);

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
                    onClick={() => {
                      setEditVoucher(false);
                      handleVoucherClick();
                    }}
                  />
                </div>
                <div className="relative">
                  <Image
                    src={"/static/images/Bg-shape.png"}
                    alt=""
                    loading="lazy"
                    width={400}
                    height={300}
                    className="object-cover object-center w-full"
                  />
                </div>
                <form className="space-y-2">
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
                          defaultChecked={voucherData?.status == 1}
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
                          defaultChecked={voucherData?.status == 2}
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
                          defaultChecked={voucherData?.status == 0}
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
                      pattern={Validation.firstname.pattern}
                    />
                    <p className="error">{Validation?.firstname?.msg}</p>
                  </div>
                  <div className="flex flex-col w-full gap-3 lg:flex-row">
                    <div className="w-full space-y-1 text-left lg:w-1/2">
                      <Label htmlFor="first_name" text="Discount Type *" />
                      <input
                        type="text"
                        name="title"
                        className="input_field"
                        placeholder="Enter Title"
                        pattern={Validation.title.pattern}
                        defaultValue={voucherData?.title}
                        required
                      />
                      <p className="error">{Validation?.title?.msg}</p>
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
                          name="discount_type"
                          onChange={(e) => setDiscountType(e.target.value)}
                          defaultValue={voucherData?.discount_type}
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
                          defaultValue={voucherData?.amount}
                          required
                        />
                        <p className="error">
                          {(discountType == "percentage" &&
                            "Enter Valid Percentage") ||
                            "Enter Valid Amount"}
                        </p>
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
                          pattern={Validation.expirydate.pattern}
                          min={new Date().toISOString().split("T")[0]}
                          defaultValue={
                            voucherData?.expried_at &&
                            voucherData?.expried_at.split(" ")[0]
                          }
                          required
                        />
                        <p className="error">{Validation?.expirydate?.msg}</p>
                      </div>
                    </div>
                    <Label htmlFor="message" text="Description" />
                    <textarea
                      id="message"
                      rows="4"
                      name="description"
                      className="input_field"
                      placeholder="Write your thoughts here..."
                      defaultValue={voucherData?.description}
                    ></textarea>
                    <input type="hidden" name="id" value={voucherData?.id} />
                    <Button
                      variant="primary"
                      type="submit"
                      className="px-10"
                      disabled={formState?.loading}
                    >
                      <Spinner
                        show={formState?.loading}
                        width="25"
                        height="25"
                        text="Update"
                      />
                    </Button>
                    {formState?.error && <Error error={formState?.error} />}
                  </div>
                </form>
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
                      pattern={Validation.title.pattern}
                      required
                    />
                    <p className="error">{Validation?.title?.msg}</p>
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
                        name="discount_type"
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
                      <p className="error">
                        {(discountType == "percentage" &&
                          "Enter Valid Percentage") ||
                          "Enter Valid Amount"}
                      </p>
                    </div>
                    <div className="w-full space-y-1 text-left lg:w-1/2">
                      <Label htmlFor="dob" text="Date of Birth" />
                      <div
                        className="border z-[99999] flex-grow"
                        onClick={(e) => setCalendarOpen(true)}
                      >
                        <DatePicker
                          className={
                            "px-3 py-[17px] h-8 rounded-md overflow-hidden"
                          }
                          defaultOpen={calendarOpen}
                          key={calendarOpen}
                          setCalendarOpen={setCalendarOpen}
                          name={"dob"}
                          placeholder="Enter Date of Birth"
                        />
                      </div>
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
                      pattern={Validation.title.pattern}
                      required
                    />
                    <p className="error">{Validation?.title?.msg}</p>
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
                        name="discount_type"
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
                      <p className="error">
                        {(discountType == "percentage" &&
                          "Enter Valid Percentage") ||
                          "Enter Valid Amount"}
                      </p>
                    </div>
                    {/* <div className="w-full space-y-1 text-left lg:w-1/2">
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
                        pattern='\d{4}-\d{1,2}-\d{1,2}'
                        required
                        min={new Date().toISOString().split("T")[0]}
                      />
                      <p className="error">{Validation?.expirydate?.msg}</p>
                    </div> */}
                    <div className="w-full space-y-1 text-left lg:w-1/2">
                      <Label htmlFor="dob" text="Date of Birth" />
                      <div
                        className="border z-[99999] flex-grow"
                        onClick={(e) => setCalendarOpen(true)}
                      >
                        <DatePicker
                          className={
                            "px-3 py-[17px] h-8 rounded-md overflow-hidden"
                          }
                          defaultOpen={calendarOpen}
                          key={calendarOpen}
                          setCalendarOpen={setCalendarOpen}
                          name={"dob"}
                          placeholder="Enter Date of Birth"
                        />
                      </div>
                      {/* <input
            type="date"
            name="dob"
            className="input_field"
            placeholder="Enter Date of Birth"
            defaultValue={editCustomer.dob}
          /> */}
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
            {editVoucher ? null : (
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
            )}
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
                        className="sm:max-w-[500px]"
                      >
                        <DialogTitle>Add New Treatment</DialogTitle>
                        <NewTreatmentModal
                          setAddtreatment={setAddtreatment}
                          services={services}
                          setServices={setServices}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                {(!vendorServices?.loading &&
                  services.map((service) => {
                    const group_service_list = Object.groupBy(
                      service?.group_service_list,
                      ({ sub_categories_id }) => sub_categories_id
                    );
                    return (
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
                        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                          {group_service_list &&
                            Object.values(group_service_list).map(
                              (services) => (
                                <div
                                  className="cursor-pointer serviceBox"
                                  key={v4()}
                                >
                                  <div className="relative w-full">
                                    <div
                                      className="border border-[#D9D9D9] space-y-4 rounded-lg p-3"
                                      onClick={(e) => {
                                        setEditService(true);
                                        setCurrentEditService({
                                          mainServiceID: service.id,
                                          sub_categories_id:
                                            services[0]?.sub_categories_id,
                                          serviceGroupID:
                                            services[0]?.service_group_id,
                                          service: services,
                                        });
                                      }}
                                    >
                                      <div className="flex items-center justify-between">
                                        <p className="font-semibold text-start">
                                          {services[0]?.sub_categories?.title}
                                        </p>
                                      </div>
                                      {services.map((service_group) => (
                                        <div
                                          className="flex items-center justify-between"
                                          key={v4()}
                                        >
                                          <p className="text-sm capitalize">
                                            {service_group?.service_title}
                                          </p>
                                          <p className="text-sm">
                                            {service_group?.duration == 0.5
                                              ? "30 Min"
                                              : service_group?.duration == 1
                                                ? "1 Hour"
                                                : service_group?.duration == 1.5
                                                  ? "1 Hour 30 Min"
                                                  : service_group?.duration == 2
                                                    ? "2 Hour"
                                                    : "2 Hour 30 Min"}
                                          </p>
                                          <p className="text-sm font-bold">
                                            {service_group?.price &&
                                              "£" + service_group?.price}
                                            {service_group?.sales_price &&
                                              "£" + service_group?.sales_price}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <RiDeleteBin5Line
                                      className="text-[#FF0000] absolute top-[1rem] right-[1rem] z-20 cursor-pointer"
                                      onClick={(e) =>
                                        deleteGroup({
                                          e: e,
                                          id: services[0]?.service_group_id,
                                          sub_categories_id:
                                            services[0]?.sub_categories_id,
                                        })
                                      }
                                    />
                                    <BsPencilFill className=" text-primary_color absolute top-[1rem] right-[3rem]" />
                                  </div>
                                </div>
                              )
                            )}
                        </div>
                      </div>
                    );
                  })) || (
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
                      setRefreshServices={setRefreshServices}
                    />
                  </DialogContent>
                </Dialog>
                <Dialog
                  className="w-11/12"
                  open={editService}
                  onOpenChange={(e) => setEditService(e)}
                >
                  <DialogContent className="sm:max-w-[1025px]">
                    <DialogTitle>Edit Service</DialogTitle>
                    <EditServiceModal
                      editServiceData={currentEditService}
                      setEditService={setEditService}
                      setRefreshServices={setRefreshServices}
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
                                {(voucher?.sales_price &&
                                  "£" + voucher?.sales_price) ||
                                  "N/A"}
                              </td>
                              <td className="px-4 py-4 text-sm">
                                {voucher?.expried_at || "N/A"}
                              </td>
                              <td className="px-4 py-4 text-sm ">
                                <p
                                  className={`${(voucher.status == 0 && "bg-yellow-500") ||
                                    (vendor.status == 1 &&
                                      "bg-green-600 text-white") ||
                                    "bg-red-700"
                                    } p-2 rounded-full text-center`}
                                >
                                  {(voucher.status == 0 && "Pending") ||
                                    (voucher.status == 1 && "Active") ||
                                    "Inactive"}
                                </p>
                              </td>
                              <td className="flex gap-4 px-4 py-6">
                                <BsPencilFill
                                  className="text-[#0AADA4] text-xl cursor-pointer"
                                  onClick={(e) => {
                                    handleEditVoucherClick();
                                    setVoucherData(voucher);
                                  }}
                                />
                                <RiDeleteBin5Line
                                  className="text-[rgb(255,0,0)] text-xl cursor-pointer"
                                  onClick={(e) => deleteVoucher(voucher?.id)}
                                />
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
