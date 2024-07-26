import { POST } from "@/app/api/post";
import { Error, Spinner } from "@/components";
import Button from "@/components/ui/button";
import Label from "@/components/ui/form/label";
import Validation from "@/constants/validation";
import React from "react";
import { useSelector } from "react-redux";

const NewAddModal = ({ setAddDialog, getProducts, currentPage }) => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);
  const [formState, setFormState] = React.useState({
    loading: false,
    error: "",
    success: "",
  });

  const addProduct = async (e) => {
    e.preventDefault();
    const resp = await POST.request({ url: '/vendor/add-new-products', token: vendor?.api_token, form: e.target, formState, setFormState });
    if (resp && resp.code === 200) {
      setAddDialog(false);
      getProducts({ page: currentPage });
    }
  }

  return (
    <form className="space-y-3" noValidate onSubmit={e => addProduct(e)}>
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
          pattern={Validation?.product_name?.pattern}
        />
        <p className="error max-w-[250px]">{Validation?.product_name?.msg}</p>
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="price" text="Unit price *" />
        <input
          type="text"
          name="price"
          className="input_field"
          placeholder="Enter Unit price *"
          pattern={Validation?.unit_price?.pattern}
        />
        <p className="error max-w-[250px]">{Validation?.unit_price?.msg}</p>
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="quantity_in_stock" text="Quantity in stock *" />
        <input
          type="text"
          name="quantity_in_stock"
          className="input_field"
          placeholder="Enter Quantity in stock *"
          pattern={Validation?.quantity?.pattern}
        />
        <p className="error max-w-[250px]">{Validation?.quantity?.msg}</p>
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="description" text="Product description *" />
        <textarea
          type="textarea"
          rows="4"
          name="description"
          className="input_field"
          placeholder="Type here..."
          required
        />
        <p className="error max-w-[250px]">{Validation?.description?.msg}</p>
      </div>
      <Button variant="primary" type="submit" className="items-center w-full" disabled={formState.loading}>
        <Spinner
          show={formState.loading}
          width="25"
          height="25"
          text="Save"
        />
      </Button>
      {formState?.error && <Error error={formState?.error} />}
    </form>
  );
};

export default NewAddModal;
