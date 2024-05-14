import { GET } from "@/app/api/get";
import { POST } from "@/app/api/post";
import { Spinner } from "@/components";
import Button from "@/components/ui/button";
import Label from "@/components/ui/form/label";
import useCategory from "@/hooks/usecategory";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const NewTreatmentModal = () => {
  const mainCat = useCategory();
  const vendor = useSelector((state) => state.vendorAuth.vendor);

  const addServiceGroup = async (e) => {
    e.preventDefault();
    const resp = await POST.request({ url: '/vendor/add-service-group', form: e.target, token: vendor?.api_token });
    console.log(resp);
  };

  return (
    mainCat.loading
    && <div className="w-full center min-h-[100px]">
      <Spinner show={mainCat?.loading} width={50} height={50} />
    </div>
    || <form className="space-y-3" onSubmit={e => addServiceGroup(e)}>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="first_name" text="Select Treatment" />
        <select className="w-full p-2 text-black bg-transparent border" name="categories_id">
          {mainCat.data.map((cat) => (
            <option key={'maincat' + cat.id} value={cat.id}>
              {cat.title}
            </option>
          ))}
        </select>
      </div>
      <Button type="submit" variant="primary">Save</Button>
    </form>
  );
};

export default NewTreatmentModal;
