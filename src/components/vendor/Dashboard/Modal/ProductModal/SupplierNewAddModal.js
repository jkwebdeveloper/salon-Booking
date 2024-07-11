import Button from "@/components/ui/button";
import Label from "@/components/ui/form/label";
import React, { useState } from "react";

const SupplierNewAddModal = () => {
  const [supplierInfo, setSupplierInfo] = useState(false);
  const [assignedProducts, setAssignedProducts] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const handleLinkClick = (link) => {
    setActive(link);
  };

  const handleSupplierClick = () => {
    setSupplierInfo(true);
    setAssignedProducts(false);
  };
  const handleAssignedProductClick = () => {
    setAssignedProducts(true);
    setSupplierInfo(false);
  };

  return (
    <>
      <div className="flex items-center gap-6">
        <p
          className={`cursor-pointer ${
            active 
              ? "text-[#0AADA4] font-semibold"
              : "text-[#808080] font-normal"
          }`}
          onClick={handleSupplierClick(handleLinkClick)}
        >
          Supplier info
        </p>
        <p
          variant={assignedProducts ? "secondary" : "disable"}
          onClick={handleAssignedProductClick(handleLinkClick)}
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
          <p>Face wash</p>
          <p>Face wash</p>
          <p>Face wash</p>
        </div>
      )}
    </>
  );
};

export default SupplierNewAddModal;
