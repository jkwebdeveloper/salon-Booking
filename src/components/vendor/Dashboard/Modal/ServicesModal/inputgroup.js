import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select";
import { RiDeleteBin5Line } from "react-icons/ri";

function InputGroup({ defaultValue, categories_id, service_group_id, sub_categories_id, deleteService = false, index }) {
    const [inputValue, setInputValue] = useState({
        id: defaultValue.id,
        categories_id: categories_id,
        service_group_id: service_group_id,
        sub_categories_id: sub_categories_id,
        service_title: defaultValue?.service_title || '',
        duration: defaultValue?.duration || 0.5,
        price: defaultValue?.price || 0,
        sale_price: defaultValue?.sale_price || 0
    });
    return (
        <div className="flex flex-col items-center w-full gap-3 lg:flex-row">
            <div className="w-full space-y-1 text-left lg:w-1/2">
                <input type="text"
                    className="input_field"
                    placeholder="Enter your Name"
                    pattern="^[a-zA-Z0-9\s]{1,}$"
                    defaultValue={defaultValue.service_title}
                    onChange={(e) => setInputValue({ ...inputValue, service_title: e.target.value })}
                    required
                />
                <p className="error">Name Required.</p>
            </div>
            <Select
                value={+inputValue.duration}
                onValueChange={(value) => setInputValue({ ...inputValue, duration: +value })}
            >
                <SelectTrigger className="w-[180px]">
                    {+inputValue.duration === 0.5 ? "30 Min" : +inputValue.duration === 1 ? "1 Hour" : +inputValue.duration === 1.5 ? "1 Hour 30 Min" : +inputValue.duration === 2 ? "2 Hour" : "2 Hour 30 Min"}
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
                    placeholder="Enter your name"
                    pattern="[0-9]+([\.,][0-9]+)?"
                    step={0.5}
                    required
                    defaultValue={defaultValue.price || ''}
                    onChange={(e) => setInputValue({ ...inputValue, price: e.target.value })}
                />
                <p className="error">Enter Valid Price</p>
            </div>
            <div className="w-full space-y-1 text-left lg:w-1/2">
                <input
                    type="number"
                    className="input_field"
                    placeholder="Enter your name"
                    pattern="[0-9]+([\.,][0-9]+)?"
                    step={0.5}
                    required
                    defaultValue={defaultValue.sale_price || ''}
                    onChange={(e) => setInputValue({ ...inputValue, sale_price: e.target.value })}
                />
                <p className="error">Enter Valid Sales Price</p>
            </div>
            {deleteService && <RiDeleteBin5Line className="text-[#FF0000] w-8 h-8 cursor-pointer" onClick={e => deleteService({ id: inputValue.id, index })} />}
            <input type="hidden" name="service_group[]" value={JSON.stringify(inputValue)} />
        </div>
    )
}

export default React.memo(InputGroup)