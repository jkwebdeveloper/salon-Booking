import Button from "@/components/ui/button";
import Label from "@/components/ui/form/label";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RiDeleteBin5Line } from "react-icons/ri";

const EditServiceModal = ({ service }) => {
  console.log("Service", service);
  // const [pricingInputs2, setPricingInputs2] = useState([
  //   { levelname: "", duration: "", price: "", saleprice: "" },
  // ]);
  const inputValues = service.map((item) => {
    return {
      levelname: item.service_title,
      duration: item.duration,
      price: item.price,
      saleprice: item.sale_price,
    };
  });
  const [pricingInputs2, setPricingInputs2] = useState([...inputValues]);

  const addPricingInput = (inputs, setInputs) => {
    setInputs([
      ...inputs,
      { levelname: "", duration: "", price: "", saleprice: "" },
    ]);
  };

  const handleInputChange = (index, inputs, setInputs, event) => {
    const { name, value } = event.target || event;
    const updatedInputs = [...inputs];
    updatedInputs[index][name] = value;
    setInputs(updatedInputs);
  };

  const editService = async (e) => {
    e.preventDefault();
    console.log("Service edited", new FormData(e.target));
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
            pattern="[A-Za-z]{4,20}"
            defaultValue={service[0].sub_categories.title}
            disabled
          />
        </div>
        {/* <div className="w-full space-y-1 text-left ">
          <Label htmlFor="last_name" text="Service Title" />
          <input
            type="text"
            name="last_name"
            className="input_field"
            placeholder="Enter Service Title"
            pattern="[A-Za-z]{4,20}"
          />
        </div> */}
      </div>
      {console.log("Pricing Inputs", pricingInputs2)}
      {pricingInputs2.map((input, index) => (
        <div key={index} className="flex flex-col w-full gap-3 lg:flex-row">
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <p className="text-sm">Pricing level name *</p>
            <input
              type="text"
              name="levelname"
              value={input.levelname}
              onChange={(e) =>
                handleInputChange(index, pricingInputs2, setPricingInputs2, e)
              }
              className="input_field"
              placeholder="Enter your Name"
              pattern="[A-Za-z]{4,20}"
              required
            />
          </div>
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <p className="text-sm">Duration *</p>
            {/* <input
              type="text"
              name="price"
              value={input.price}
              onChange={(e) =>
                handleInputChange(index, pricingInputs2, setPricingInputs2, e)
              }
              className="input_field"
              placeholder="Enter your name"
              pattern="[A-Za-z]{4,20}"
              required
            /> */}
            <Select
              value={+input.duration}
              onValueChange={(value) =>
                handleInputChange(index, pricingInputs2, setPricingInputs2, {
                  duration: value,
                })
              }
            >
              <SelectTrigger className="w-[180px]">
                {+input.duration === 0.5
                  ? "30 Min"
                  : +input.duration === 1
                  ? "1 Hour"
                  : +input.duration === 1.5
                  ? "1 Hour 30 Min"
                  : +input.duration === 2
                  ? "2 Hour"
                  : "2 Hour 30 Min"}
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectItem value={0.5}>30 Min</SelectItem>
                  <SelectItem value={1}>1 Hour</SelectItem>
                  <SelectItem value={1.5}>1 Hour 30 Min</SelectItem>
                  <SelectItem value={2}>2 Hour</SelectItem>
                  <SelectItem value={2.5}>2 Hour 30 Min</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <p className="text-sm">Price *</p>
            <input
              type="text"
              name="price"
              value={input.price}
              onChange={(e) =>
                handleInputChange(index, pricingInputs2, setPricingInputs2, e)
              }
              className="input_field"
              placeholder="Enter your name"
              pattern="[A-Za-z]{4,20}"
              required
            />
          </div>
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <p className="text-sm">Sale Price *</p>
            <input
              type="text"
              name="saleprice"
              value={input.saleprice}
              onChange={(e) =>
                handleInputChange(index, pricingInputs2, setPricingInputs2, e)
              }
              className="input_field"
              placeholder="Enter your name"
              pattern="[A-Za-z]{4,20}"
              required
            />
          </div>
          <div>
            <RiDeleteBin5Line className="text-[#FF0000] cursor-pointer" />
          </div>
        </div>
      ))}
      <p
        className="underline text-[#0AADA4] font-semibold text-right cursor-pointer"
        onClick={() => addPricingInput(pricingInputs2, setPricingInputs2)}
      >
        Add more pricing
      </p>
      <div>
        <Label htmlFor="first_name" text="Add a note (Optional)" />
        <textarea
          id="message"
          rows="4"
          className="input_field"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button variant="disable">Cancel</Button>
        <Button type="submit" variant="primary">
          Save
        </Button>
      </div>
    </form>
  );
};

export default EditServiceModal;
