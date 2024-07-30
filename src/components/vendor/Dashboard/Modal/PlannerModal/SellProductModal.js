import React, { useState } from 'react';
import Label from '@/components/ui/form/label';
import Button from '@/components/ui/button';
import { FaMinus, FaPlus } from 'react-icons/fa';
const SellProductModal = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };
    return (
        <div className="space-y-3">
            <div className="w-full space-y-1 text-left">
                <Label htmlFor="first_name" text="Product *" />
                <select
                    className="w-full p-2 text-black bg-transparent border"
                    name="categories_id"
                >
                    <option>Select Product</option>
                    <option>Select Product</option>
                    <option>Select Product</option>
                </select>
            </div>
            <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="w-full space-y-1 text-left lg:w-1/2">
                    <label htmlFor="fname" className="label_text">
                        Price *
                    </label>
                    <input
                        type="text"
                        name="first_name"
                        id="fname"
                        className="input_field"
                        placeholder="Price *"
                        required
                    />
                </div>
                <div className="w-full space-y-1 text-left lg:w-1/2">
                    <label htmlFor="lname" className="label_text">
                        Quantity *
                    </label>
                    <div className="flex items-center justify-center gap-4 border p-1 border-[#e3e3e3] rounded-md w-full">
                        <button
                            onClick={handleDecrement}
                            className="hover:bg-[#d8d8d8] text-center hover:text-black w-full p-2"
                        >
                            <FaMinus className="text-[#A3A1A1] text-center hover:text-black" />
                        </button>
                        <h1 className="w-full">{count}</h1>
                        <button
                            onClick={handleIncrement}
                            className="hover:bg-[#d8d8d8] w-full hover:text-black p-2"
                        >
                            <FaPlus className="text-[#A3A1A1] hover:text-black" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full space-y-1 text-left">
                <Label htmlFor="first_name" text="Product *" />
                <select
                    className="w-full p-2 text-black bg-transparent border"
                    name="categories_id"
                >
                    <option>Select Product</option>
                    <option>Select Product</option>
                    <option>Select Product</option>
                </select>
            </div>
            <Button variant="primary">Confirm</Button>
        </div>
    );
};

export default SellProductModal;
