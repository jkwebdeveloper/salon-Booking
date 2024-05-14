import { GET } from "@/app/api/get";
import { POST } from "@/app/api/post";
import Button from "@/components/ui/button";
import Label from "@/components/ui/form/label";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const NewTreatmentModal = () => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);
  const addTreatment = async (e) => {
    e.preventDefault();
    // const resp = await POST.request({ url:'/vendor/add-service-group',form: e.target, token: vendor?.api_token});
    // console.log(resp);
  };

  const getTreatmentCats = async () => {
    const resp = await GET.request({ url: '/get-categories', token: vendor?.api_token });
    console.log(resp);
  }
  useEffect(() => {
    getTreatmentCats();
  }, []);
  return (
    <form className="space-y-3">
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="first_name" text="Select Treatment" />
        <input
          type="text"
          name="first_name"
          className="input_field"
          placeholder="Enter Select Treatment"
          pattern="[A-Za-z]{4,20}"
        />
      </div>
      <Button variant="primary">Save</Button>
    </form>
  );
};

export default NewTreatmentModal;
