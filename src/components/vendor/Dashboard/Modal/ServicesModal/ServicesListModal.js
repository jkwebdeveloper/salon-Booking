import Button from "@/components/ui/button";
import React, { Fragment, useState } from "react";
import useSubCategory from "@/hooks/usesubcategory";
import { Spinner } from "@/components";
import { v4 } from "uuid";
import { POST } from "@/app/api/post";
import { useSelector } from "react-redux";
import InputGroup from "./inputgroup";

const ServicesListModal = ({ service, catid }) => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);
  const subCategories = useSubCategory({ id: service?.service_group_id });
  const [selectedCategory, setSelectedCategory] = useState([]);
  const defaultInputs = [{ service_title: '', duration: 0.5, price: 0, saleprice: 0 }];
  const [inputValue, setInputValue] = useState([]);

  const repeatInput = (index) => {
    const newInput = [...selectedCategory];
    newInput[index].defaultInputs.push({ service_title: '', duration: 0.5, price: 0, saleprice: 0 });
    setSelectedCategory(newInput);
  }

  const handleInputChange = ({ name, category, groupIndex, value }) => {
    const updatedCategory = { ...selectedCategory };
    updatedCategory[category].defaultInputs[groupIndex][name] = value;
    setSelectedCategory(updatedCategory);
  }

  const addService = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = [];
    for (let [key, value] of data.entries()) {
      formData.push(JSON.parse(value));
    }
    const valideData = await POST.validateForm({ form: e.target });
    if (valideData) {
      const response = await POST.request({ url: "/vendor/save-new-service", form: formData, token: vendor?.api_token });
      console.log(response);
    }
  }

  return (
    <div className="space-y-3">

      {!subCategories.loading && <div className="flex items-start w-full h-full md:gap-10">
        <div className="space-y-3">
          {subCategories.data.map((subCategory) => (
            <div className="flex items-center">
              <input
                id={'subCategory' + subCategory.id}
                type="checkbox"
                onChange={e => {
                  e.target.checked ? setSelectedCategory(prev => ([...prev, { id: subCategory.id, name: subCategory.title, defaultInputs }])) : setSelectedCategory(() => {
                    const newCat = { ...selectedCategory };
                    delete newCat[subCategory.title];
                    return newCat;
                  });
                }
                }
              />
              <label
                htmlFor={'subCategory' + subCategory.id}
                className="w-full text-sm font-medium text-gray-900 ms-2 "
              >
                {subCategory.title}
              </label>
            </div>
          ))}
        </div>
        <form className="flex flex-col flex-grow h-full space-y-3" noValidate onSubmit={e => addService(e)}>
          {Object.keys(selectedCategory).length == 0
            && <div className="min-h-[200px] w-full text-primary">
              Select a service to view the details
            </div>
            || <>
              <div className="flex-grow flex-shrink-0 space-y-4">
                {selectedCategory.map((category, index) => {
                  return (
                    <div className="flex flex-col gap-4 p-4 border rounded-xl">
                      <p>{category.name}</p>
                      {category.defaultInputs.map((group, i) => {
                        return (
                          <InputGroup defaultValue={group} service_group_id={service?.service_group_id} categories_id={catid} sub_categories_id={category.id} />
                        )
                      })}
                      <Button
                        variant="link"
                        className="border-b border-[#0AADA4]  text-[#0AADA4] font-semibold text-right cursor-pointer p-0 ms-auto block h-6 rounded-none hover:no-underline"
                        onClick={() => repeatInput(index)}
                      >
                        Add more pricing
                      </Button>
                    </div>

                  )
                })}
                {/* {Object.keys(selectedCategory).map((category, index) => (
                  <div className="border border-[#D9D9D9] flex flex-col gap-3 p-3 rounded-lg" key={v4()}>
                    <p>{category}</p>
                    {JSON.stringify(selectedCategory[category].defaultInputs)}
                    {selectedCategory[category].defaultInputs.map((group, i) => (
                      <InputGroup handleInputChange={handleInputChange} category={category} groupIndex={i} defaultInputs={group} key={v4()} sub_categories_id={selectedCategory[category].id} categories_id={category.id} service_group_id={service?.service_group_id} />
                    ))}
                    <Button
                      variant="link"
                      className="border-b border-[#0AADA4]  text-[#0AADA4] font-semibold text-right cursor-pointer p-0 ms-auto block h-6 rounded-none hover:no-underline"
                      onClick={() => repeatInput(category)}
                    >
                      Add more pricing
                    </Button>
                  </div>
                ))} */}
              </div>
              <div className="flex items-center gap-3">
                <Button variant="primary" type="submit">Save</Button>
                <Button variant="disable">Gift Voucher</Button>
              </div>
            </>}
        </form>
      </div> || <div className="min-h-[300px] center">
          <Spinner show={subCategories.loading} width={30} height={30} />
        </div>}
    </div>
  );
};

export default ServicesListModal;
