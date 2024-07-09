import Button from "@/components/ui/button";
import Label from "@/components/ui/form/label";
import React from "react";

const ProductModal = () => {
  return (
    <form className="space-y-3">
      <p className="text-[#565656] text-sm">
        Add a product to be used when checking out. Unit price should be the
        regular selling price.
      </p>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="first_name" text="Product name *" />
        <input
          type="text"
          name="first_name"
          className="input_field"
          placeholder="Enter Product name *"
        />
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="first_name" text="Unit price *" />
        <input
          type="text"
          name="first_name"
          className="input_field"
          placeholder="Enter Unit price *"
        />
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="first_name" text="Quantity in stock *" />
        <input
          type="text"
          name="first_name"
          className="input_field"
          placeholder="Enter Quantity in stock *"
        />
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="comments" text="Product description *" />
        <textarea
          type="textarea"
          rows="4"
          name="comments"
          className="input_field"
          placeholder="Type here..."
        />
      </div>
      <Button variant="primary" type="submit" className="items-center w-full">
        Save
      </Button>
    </form>
  );
};

export default ProductModal;
