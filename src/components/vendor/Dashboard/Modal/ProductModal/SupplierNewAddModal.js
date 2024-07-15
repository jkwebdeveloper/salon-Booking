import Button from "@/components/ui/button";
import Label from "@/components/ui/form/label";
import React, { useState } from "react";

const SupplierNewAddModal = () => {
  const [supplierInfo, setSupplierInfo] = useState(true);
  const [assignedProducts, setAssignedProducts] = useState(false);
  const [active, setActive] = useState("supplierInfo");

  const handleSupplierClick = () => {
    setSupplierInfo(true);
    setAssignedProducts(false);
    setActive("supplierInfo");
  };
  const handleAssignedProductClick = () => {
    setAssignedProducts(true);
    setSupplierInfo(false);
    setActive("assignedProducts");
  };

  return (
    <>
      <div className="flex items-center gap-6">
        <p
          className={`cursor-pointer ${
            active === "supplierInfo"
              ? "text-[#0AADA4] font-semibold"
              : "text-[#808080] font-normal"
          }`}
          onClick={handleSupplierClick}
        >
          Supplier info
        </p>
        <p
          className={`cursor-pointer ${
            active === "assignedProducts"
              ? "text-[#0AADA4] font-semibold"
              : "text-[#808080] font-normal"
          }`}
          onClick={handleAssignedProductClick}
        >
          Assigned products
        </p>
      </div>
      {supplierInfo && (
        <form className="space-y-3">
          <div className="w-full space-y-1 text-left">
            <Label htmlFor="first_name" text="Supplier name *" />
            <input
              type="text"
              name="first_name"
              className="input_field"
              placeholder="Enter Supplier name *"
            />
          </div>
          <div className="w-full space-y-1 text-left">
            <Label htmlFor="first_name" text="Contact person *" />
            <input
              type="text"
              name="first_name"
              className="input_field"
              placeholder="Enter Unit price *"
            />
          </div>
          <div className="w-full space-y-1 text-left">
            <Label htmlFor="first_name" text="Phone *" />
            <input
              type="text"
              name="first_name"
              className="input_field"
              placeholder="Enter Phone *"
            />
          </div>
          <div className="w-full space-y-1 text-left">
            <Label htmlFor="email" text="Email *" />
            <input
              type="email"
              name="email"
              className="input_field"
              placeholder="Email"
            />
          </div>
          <Button
            variant="primary"
            type="submit"
            className="items-center w-full"
          >
            Save
          </Button>
        </form>
      )}
      {assignedProducts && (
        <div className="space-y-3">
          <li className="w-full list-none">
            <div className="flex items-center gap-3">
              <input
                id="wash"
                type="checkbox"
                className="hidden peer accent-[#0AADA4]"
              />
              <label
                htmlFor="wash"
                className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0AADA4] border border-gray-400 rounded overflow-hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full fill-white"
                  viewBox="0 0 520 520"
                >
                  <path
                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                    data-name="7-Check"
                    data-original="#000000"
                  />
                </svg>
              </label>
              Face wash
            </div>
          </li>
          <hr />
          <li className="w-full list-none">
            <div className="flex items-center gap-3">
              <input
                id="oil"
                type="checkbox"
                className="hidden peer accent-[#0AADA4]"
              />
              <label
                htmlFor="oil"
                className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0AADA4] border border-gray-400 rounded overflow-hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full fill-white"
                  viewBox="0 0 520 520"
                >
                  <path
                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                    data-name="7-Check"
                    data-original="#000000"
                  />
                </svg>
              </label>
              Hair oil
            </div>
          </li>
          <hr />
          <li className="w-full list-none">
            <div className="flex items-center gap-3">
              <input
                id="shampoo"
                type="checkbox"
                className="hidden peer accent-[#0AADA4]"
              />
              <label
                htmlFor="shampoo"
                className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0AADA4] border border-gray-400 rounded overflow-hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full fill-white"
                  viewBox="0 0 520 520"
                >
                  <path
                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                    data-name="7-Check"
                    data-original="#000000"
                  />
                </svg>
              </label>
              Hair shampoo
            </div>
          </li>
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              type="submit"
              className="items-center uppercase w-full"
            >
              Save
            </Button>
            <Button
              variant="danger"
              type="submit"
              className="items-center uppercase w-full"
            >
              Delete
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default SupplierNewAddModal;
