import { POST } from "@/app/api/post";
import { Spinner } from "@/components";
import Button from "@/components/ui/button";
import Label from "@/components/ui/form/label";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ProductModal = ({ setEditDialog, getProducts, editProduct, currentPage }) => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);
  const [formState, setFormState] = React.useState({
    loading: false,
    error: "",
    success: "",
  });

  const updateProduct = async (e) => {
    e.preventDefault();
    const resp = await POST.request({ url: '/vendor/update-products', token: vendor?.api_token, form: e.target, formState, setFormState });
    if (resp && resp.code === 200) {
      setEditDialog(false);
      getProducts({ page: currentPage });
    }
  }


  return (
    <form className="space-y-3" onSubmit={e => updateProduct(e)}>
      <p className="text-[#565656] text-sm">
        Add a product to be used when checking out. Unit price should be the
        regular selling price.
      </p>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="name" text="Product name *" />
        <input
          type="text"
          name="name"
          className="input_field"
          placeholder="Enter Product name *"
          defaultValue={editProduct?.name}
        />
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="price" text="Unit price *" />
        <input
          type="text"
          name="price"
          className="input_field"
          placeholder="Enter Unit price *"
          defaultValue={editProduct?.price}
        />
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="quantity_in_stock" text="Quantity in stock *" />
        <input
          type="text"
          name="quantity_in_stock"
          className="input_field"
          placeholder="Enter Quantity in stock *"
          defaultValue={editProduct?.quantity_in_stock}
        />
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="description" text="Product description *" />
        <textarea
          type="textarea"
          rows="4"
          name="description"
          className="input_field"
          placeholder="Type here..."
          defaultValue={editProduct?.description}
        />
      </div>
      <input type="hidden" name="products_id" value={editProduct?.id} />
      <Button variant="primary" type="submit" className="items-center w-full" disabled={formState.loading}>
        <Spinner
          show={formState.loading}
          width="25"
          height="25"
          text="Update"
        />
      </Button>
      {formState?.error && <Error error={formState?.error} />}
    </form>
  );
};

export default ProductModal;
