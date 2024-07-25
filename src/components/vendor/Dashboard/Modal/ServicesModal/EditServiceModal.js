import Button from "@/components/ui/button";
import Label from "@/components/ui/form/label";
import React, { useState } from "react";
import Inputgroup from "./inputgroup";
import { POST } from "@/app/api/post";
import { useSelector } from "react-redux";
import { Spinner } from "@/components";

const EditServiceModal = ({ editServiceData, setEditService, setRefreshServices }) => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);
  const [formState, setFormState] = React.useState({
    loading: false,
    error: "",
    success: "",
  });

  const { mainServiceID, serviceGroupID, sub_categories_id, service = [] } = editServiceData || {};
  const inputValues = service.map((item) => {
    return {
      service_title: item.service_title,
      duration: item.duration,
      price: item.price,
      sale_price: item.sale_price,
      id: item.id || 0,
    };
  });

  const [pricingInputs2, setPricingInputs2] = useState([...inputValues]);

  const addPricingInput = () => {
    setPricingInputs2([
      ...pricingInputs2,
      { service_title: "", duration: "", price: "", sale_price: "", id: 0 },
    ]);
  };

  const deleteService = async ({ id, index }) => {
    console.log(id);
    const newPricingInputs = pricingInputs2.filter((_, i) => i !== index);
    setPricingInputs2([...newPricingInputs]);
    if (id) {
      const resp = await POST.request({ url: '/vendor/delete-vendor-services', form: { id, sub_categories_id: 0 }, token: vendor?.api_token });
      setRefreshServices();
    }
  };

  const editService = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let formData = [];
    for (let [key, value] of data.entries()) {
      formData.push(JSON.parse(value));
    }
    const valideData = await POST.validateForm({ form: e.target });
    if (valideData) {
      const resp = await POST.request({ url: "/vendor/edit-vendor-services", form: formData, token: vendor?.api_token, formState, setFormState });
      if (resp && resp.code == 200) {
        setRefreshServices();
        setTimeout(() => setEditService(false), 1000);
      }
    }
  };

  return (
    <form
      className="w-full space-y-4"
      noValidate
      onSubmit={(e) => editService(e)}
    >
      <div className="flex flex-col w-full gap-3 lg:flex-row">
        <div className="w-full space-y-1 text-left ">
          <Label htmlFor="first_name" text="Treatment" />
          <input
            type="text"
            name="first_name"
            className="input_field"
            placeholder="Enter Mobile Number"
            defaultValue={service.length > 0 && service[0].sub_categories.title}
            disabled
          />
        </div>
      </div>
      {console.log(pricingInputs2)}
      {pricingInputs2.map((input, index) => (
        <Inputgroup
          key={index}
          index={index}
          defaultValue={{ ...input }}
          categories_id={mainServiceID}
          service_group_id={serviceGroupID}
          sub_categories_id={sub_categories_id}
          deleteService={deleteService}
        />
      ))}
      <Button
        variant="link"
        className="underline text-[#0AADA4] font-semibold text-right cursor-pointer w-max block py-0 ms-auto"
        onClick={() => addPricingInput()}
      >
        Add more pricing
      </Button>
      <div className="flex items-center justify-center gap-3">
        <Button variant="disable">Cancel</Button>
        <Button variant="primary" type="submit" disabled={formState.loading}>
          <Spinner
            show={formState.loading}
            width="25"
            height="25"
            text="Save"
          />
        </Button>
      </div>
    </form>
  );
};

export default EditServiceModal;
