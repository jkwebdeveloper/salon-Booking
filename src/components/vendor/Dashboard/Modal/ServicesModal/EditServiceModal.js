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

const EditServiceModal = () => {
  const [pricingInputs2, setPricingInputs2] = useState([
    { firstName: "", lastName: "" },
  ]);
  const [pricingInputs, setPricingInputs] = useState([{ firstName: "" }]);

  const addPricingInput = (inputs, setInputs) => {
    setInputs([...inputs, { firstName: "", lastName: "" }]);
  };

  const handleInputChange = (index, inputs, setInputs, event) => {
    const { name, value } = event.target;
    const updatedInputs = [...inputs];
    updatedInputs[index][name] = value;
    setInputs(updatedInputs);
  };
  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col w-full gap-3 lg:flex-row">
        <div className="w-full space-y-1 text-left ">
          <Label htmlFor="first_name" text="Treatment" />
          <input
            type="text"
            name="first_name"
            className="input_field"
            placeholder="Enter Mobile Number"
            pattern="[A-Za-z]{4,20}"
          />
        </div>
        <div className="w-full space-y-1 text-left ">
          <Label htmlFor="last_name" text="Service Title" />
          <input
            type="text"
            name="last_name"
            className="input_field"
            placeholder="Enter Service Title"
            pattern="[A-Za-z]{4,20}"
          />
        </div>
      </div>

      {pricingInputs2.map((input, index) => (
        <div key={index} className="flex flex-col w-full gap-3 lg:flex-row">
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <p className="text-sm">Pricing level name *</p>
            <input
              type="text"
              name="firstName"
              value={input.firstName.price}
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
              name="lastName"
              value={input.lastName}
              onChange={(e) =>
                handleInputChange(index, pricingInputs2, setPricingInputs2, e)
              }
              className="input_field"
              placeholder="Enter your name"
              pattern="[A-Za-z]{4,20}"
              required
            /> */}
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <p className="text-sm">Price *</p>
            <input
              type="text"
              name="fristname"
              value={input.firstName.price}
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
              name="lastName"
              onChange={(e) =>
                handleInputChange(index, pricingInputs, setPricingInputs, e)
              }
              className="input_field"
              placeholder="Enter your name"
              pattern="[A-Za-z]{4,20}"
              required
            />
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
        <Button variant="primary">Save</Button>
      </div>
    </div>
  );
};

export default EditServiceModal;
