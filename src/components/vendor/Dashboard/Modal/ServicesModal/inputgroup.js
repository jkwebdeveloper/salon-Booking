import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { RiDeleteBin5Line } from "react-icons/ri";
import Validation from "@/constants/validation";

function InputGroup({
  defaultValue,
  categories_id,
  service_group_id,
  sub_categories_id,
  deleteService = false,
  index,
}) {
  const [inputValue, setInputValue] = useState({
    id: defaultValue.id,
    categories_id: categories_id,
    service_group_id: service_group_id,
    sub_categories_id: sub_categories_id,
    service_title: defaultValue?.service_title || "",
    duration: defaultValue?.duration || 0.5,
    price: defaultValue?.price || 0,
    sale_price: defaultValue?.sale_price || 0,
  });
  return (
    <div className="flex flex-col items-start w-full gap-3 lg:flex-row">
      <div className="w-full space-y-1 text-left lg:w-1/2">
        <input
          type="text"
          className="input_field"
          placeholder="Enter your Name"
          pattern={Validation.title.pattern}
          defaultValue={defaultValue.service_title}
          onChange={(e) =>
            setInputValue({ ...inputValue, service_title: e.target.value })
          }
          required
        />
        <p className="error">{Validation?.title?.msg}</p>
      </div>
      <Select
        value={+inputValue.duration}
        onValueChange={(value) =>
          setInputValue({ ...inputValue, duration: +value })
        }
      >
        <SelectTrigger className="w-[180px]">
          {+inputValue.duration === 0.5
            ? "30 Min"
            : +inputValue.duration === 1
              ? "1 Hour"
              : +inputValue.duration === 1.5
                ? "1 Hour 30 Min"
                : +inputValue.duration === 2
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
      <div className="w-full space-y-1 text-left lg:w-1/2">
        <input
          type="number"
          className="input_field"
          placeholder="Enter Price"
          pattern={Validation.price.pattern}
          step={0.5}
          required
          defaultValue={defaultValue.price || ""}
          onChange={(e) =>
            setInputValue({ ...inputValue, price: e.target.value })
          }
        />
        <p className="error">{Validation?.price?.msg}</p>
      </div>
      <div className="w-full space-y-1 text-left lg:w-1/2">
        <input
          type="number"
          className="input_field"
          placeholder="Enter Sales Price"
          pattern={Validation.saleprice.pattern}
          step={0.5}
          required
          defaultValue={defaultValue.sale_price || ""}
          onChange={(e) =>
            setInputValue({ ...inputValue, sale_price: e.target.value })
          }
        />
        <p className="error">{Validation?.saleprice?.msg}</p>
      </div>
      {deleteService && (
        <RiDeleteBin5Line
          className="text-[#FF0000] w-8 h-8 cursor-pointer"
          onClick={(e) => deleteService({ id: inputValue.id, index })}
        />
      )}
      <input
        type="hidden"
        name="service_group[]"
        value={JSON.stringify(inputValue)}
      />
    </div>
  );
}

export default React.memo(InputGroup);
