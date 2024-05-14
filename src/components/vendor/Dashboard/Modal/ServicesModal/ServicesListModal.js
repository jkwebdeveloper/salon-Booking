import Button from "@/components/ui/button";
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
const ServicesListModal = () => {
  const [pricingInputs1, setPricingInputs1] = useState([
    { firstName: "", lastName: "" },
  ]);
  const [pricingInputs2, setPricingInputs2] = useState([
    { firstName: "", lastName: "" },
  ]);
  const [pricingInputs3, setPricingInputs3] = useState([{ price: "" }]);

  const addPricingInput = (inputs, setInputs) => {
    setInputs([...inputs, { firstName: "", lastName: "", price: "" }]);
  };

  const handleInputChange = (index, inputs, setInputs, event) => {
    const { name, value } = event.target;
    const updatedInputs = [...inputs];
    updatedInputs[index][name] = value;
    setInputs(updatedInputs);
  };
  return (
    <div className="space-y-3">
      <div className="flex items-start w-full gap-4">
        <div className="w-[25%] space-y-3">
          <li class="w-full list-none">
            <div class="flex items-center">
              <input
                id="list-radio-license"
                type="checkbox"
                value=""
                name="list-radio"
                class=""
              />
              <label
                for="list-radio-license"
                class="w-full ms-2 text-sm font-medium text-gray-900 "
              >
                Nail Extensions
              </label>
            </div>
          </li>
          <li class="w-full list-none">
            <div class="flex items-center">
              <input
                id="list-radio-license"
                type="checkbox"
                value=""
                name="list-radio"
                class=""
              />
              <label
                for="list-radio-license"
                class="w-full ms-2 text-sm font-medium text-gray-900 "
              >
                Nail Art
              </label>
            </div>
          </li>
          <li class="w-full list-none">
            <div class="flex items-center">
              <input
                id="list-radio-license"
                type="checkbox"
                value=""
                name="list-radio"
                class=""
              />
              <label
                for="list-radio-license"
                class="w-full ms-2 text-sm font-medium text-gray-900 "
              >
                Nail Infills
              </label>
            </div>
          </li>
          <li class="w-full list-none">
            <div class="flex items-center">
              <input
                id="list-radio-license"
                type="checkbox"
                value=""
                name="list-radio"
                class=""
              />
              <label
                for="list-radio-license"
                class="w-full ms-2 text-sm font-medium text-gray-900 "
              >
                Nail Polish Removal
              </label>
            </div>
          </li>
          <li class="w-full list-none">
            <div class="flex items-center">
              <input
                id="list-radio-license"
                type="checkbox"
                value=""
                name="list-radio"
                class=""
              />
              <label
                for="list-radio-license"
                class="w-full ms-2 text-sm font-medium text-gray-900 "
              >
                Nails Manicure
              </label>
            </div>
          </li>
          <li class="w-full list-none">
            <div class="flex items-center">
              <input
                id="list-radio-license"
                type="checkbox"
                value=""
                name="list-radio"
                class=""
              />
              <label
                for="list-radio-license"
                class="w-full ms-2 text-sm font-medium text-gray-900 "
              >
                Nails Pedicure
              </label>
            </div>
          </li>
        </div>
        <div className=" w-[85%] space-y-3">
          <div className="border border-[#D9D9D9] space-y-4 rounded-lg p-3">
            <p>Nail Extensions</p>
            <hr />
            {pricingInputs1.map((input, index) => (
              <div
                key={index}
                className="flex flex-col w-full gap-3 lg:flex-row"
              >
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <input
                    type="text"
                    name="firstName"
                    value={input.firstName}
                    onChange={(e) =>
                      handleInputChange(
                        index,
                        pricingInputs1,
                        setPricingInputs1,
                        e
                      )
                    }
                    className="input_field"
                    placeholder="Enter your Name"
                    pattern="[A-Za-z]{4,20}"
                    required
                  />
                </div>
                <Select
                  onValueChange={(e) =>
                    handleInputChange(
                      index,
                      pricingInputs2,
                      setPricingInputs2,
                      { duration: e }
                    )
                  }
                >
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
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <input
                    type="text"
                    name="lastName"
                    value={input.lastName}
                    onChange={(e) =>
                      handleInputChange(
                        index,
                        pricingInputs1,
                        setPricingInputs1,
                        e
                      )
                    }
                    className="input_field"
                    placeholder="Enter your name"
                    pattern="[A-Za-z]{4,20}"
                    required
                  />
                </div>
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <input
                    type="text"
                    name="lastName"
                    value={input.price}
                    onChange={(e) =>
                      handleInputChange(
                        index,
                        pricingInputs3,
                        setPricingInputs3,
                        e
                      )
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
              onClick={() => addPricingInput(pricingInputs1, setPricingInputs1)}
            >
              Add more pricing
            </p>
          </div>
          <div className="border border-[#D9D9D9] space-y-4 rounded-lg p-3">
            <p>Nails Manicure</p>
            <hr />
            {pricingInputs2.map((input, index) => (
              <div
                key={index}
                className="flex flex-col w-full gap-3 lg:flex-row"
              >
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <input
                    type="text"
                    name="firstName"
                    value={input.firstName}
                    onChange={(e) =>
                      handleInputChange(
                        index,
                        pricingInputs2,
                        setPricingInputs2,
                        e
                      )
                    }
                    className="input_field"
                    placeholder="Enter your Name"
                    pattern="[A-Za-z]{4,20}"
                    required
                  />
                </div>
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <input
                    type="text"
                    name="lastName"
                    value={input.lastName}
                    onChange={(e) =>
                      handleInputChange(
                        index,
                        pricingInputs2,
                        setPricingInputs2,
                        e
                      )
                    }
                    className="input_field"
                    placeholder="Enter your name"
                    pattern="[A-Za-z]{4,20}"
                    required
                  />
                </div>
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <input
                    type="text"
                    name="lastName"
                    value={input.lastName}
                    onChange={(e) =>
                      handleInputChange(
                        index,
                        pricingInputs2,
                        setPricingInputs2,
                        e
                      )
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
          </div>
          <div className="flex items-center gap-3">
            <Button variant="primary">Treatments</Button>
            <Button variant="disable">Gift Voucher</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesListModal;
