import React from 'react';
import Button from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const WorkingHours = () => {
    return (
        <div className="space-y-4">
            <p className="text-2xl font-semibold">Shop working hours</p>
            <div className="w-full p-3 space-y-4 bg-white rounded-xl">
                <div className="w-1/2 space-y-3">
                    <div className="flex items-center w-full gap-10">
                        <li className="w-full list-none">
                            <div className="flex items-center gap-3">
                                <input
                                    id="Monday"
                                    type="checkbox"
                                    className="hidden peer accent-[#0AADA4]"
                                />
                                <label
                                    htmlFor="Monday"
                                    className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0AADA4] border border-gray-400 rounded overflow-hidden"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-full fill-white"
                                        viewBox="0 0 520 520"
                                    >
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check"
                                            data-original="#000000"
                                        />
                                    </svg>
                                </label>
                                Monday
                            </div>
                        </li>
                        <div className="flex items-center gap-3">
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="09:00" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">
                                            Apple
                                        </SelectItem>
                                        <SelectItem value="banana">
                                            Banana
                                        </SelectItem>
                                        <SelectItem value="blueberry">
                                            Blueberry
                                        </SelectItem>
                                        <SelectItem value="grapes">
                                            Grapes
                                        </SelectItem>
                                        <SelectItem value="pineapple">
                                            Pineapple
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="23:30" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">
                                            Apple
                                        </SelectItem>
                                        <SelectItem value="banana">
                                            Banana
                                        </SelectItem>
                                        <SelectItem value="blueberry">
                                            Blueberry
                                        </SelectItem>
                                        <SelectItem value="grapes">
                                            Grapes
                                        </SelectItem>
                                        <SelectItem value="pineapple">
                                            Pineapple
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex items-center w-full gap-10">
                        <li className="w-full list-none">
                            <div className="flex items-center gap-3">
                                <input
                                    id="Tuesday"
                                    type="checkbox"
                                    className="hidden peer accent-[#0AADA4]"
                                />
                                <label
                                    htmlFor="Tuesday"
                                    className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0AADA4] border border-gray-400 rounded overflow-hidden"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-full fill-white"
                                        viewBox="0 0 520 520"
                                    >
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check"
                                            data-original="#000000"
                                        />
                                    </svg>
                                </label>
                                Tuesday
                            </div>
                        </li>
                        <div className="flex items-center gap-3">
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="09:00" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">
                                            Apple
                                        </SelectItem>
                                        <SelectItem value="banana">
                                            Banana
                                        </SelectItem>
                                        <SelectItem value="blueberry">
                                            Blueberry
                                        </SelectItem>
                                        <SelectItem value="grapes">
                                            Grapes
                                        </SelectItem>
                                        <SelectItem value="pineapple">
                                            Pineapple
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="23:30" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">
                                            Apple
                                        </SelectItem>
                                        <SelectItem value="banana">
                                            Banana
                                        </SelectItem>
                                        <SelectItem value="blueberry">
                                            Blueberry
                                        </SelectItem>
                                        <SelectItem value="grapes">
                                            Grapes
                                        </SelectItem>
                                        <SelectItem value="pineapple">
                                            Pineapple
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex items-center w-full gap-10">
                        <li className="w-full list-none">
                            <div className="flex items-center gap-3">
                                <input
                                    id="Wednesday"
                                    type="checkbox"
                                    className="hidden peer accent-[#0AADA4]"
                                />
                                <label
                                    htmlFor="Wednesday"
                                    className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0AADA4] border border-gray-400 rounded overflow-hidden"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-full fill-white"
                                        viewBox="0 0 520 520"
                                    >
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check"
                                            data-original="#000000"
                                        />
                                    </svg>
                                </label>
                                Wednesday
                            </div>
                        </li>
                        <div className="flex items-center gap-3">
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="09:00" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">
                                            Apple
                                        </SelectItem>
                                        <SelectItem value="banana">
                                            Banana
                                        </SelectItem>
                                        <SelectItem value="blueberry">
                                            Blueberry
                                        </SelectItem>
                                        <SelectItem value="grapes">
                                            Grapes
                                        </SelectItem>
                                        <SelectItem value="pineapple">
                                            Pineapple
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="23:30" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">
                                            Apple
                                        </SelectItem>
                                        <SelectItem value="banana">
                                            Banana
                                        </SelectItem>
                                        <SelectItem value="blueberry">
                                            Blueberry
                                        </SelectItem>
                                        <SelectItem value="grapes">
                                            Grapes
                                        </SelectItem>
                                        <SelectItem value="pineapple">
                                            Pineapple
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex items-center w-full gap-10">
                        <li className="w-full list-none">
                            <div className="flex items-center gap-3">
                                <input
                                    id="Thursday"
                                    type="checkbox"
                                    className="hidden peer accent-[#0AADA4]"
                                />
                                <label
                                    htmlFor="Thursday"
                                    className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0AADA4] border border-gray-400 rounded overflow-hidden"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-full fill-white"
                                        viewBox="0 0 520 520"
                                    >
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check"
                                            data-original="#000000"
                                        />
                                    </svg>
                                </label>
                                Thursday
                            </div>
                        </li>
                        <div className="flex items-center gap-3">
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="09:00" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">
                                            Apple
                                        </SelectItem>
                                        <SelectItem value="banana">
                                            Banana
                                        </SelectItem>
                                        <SelectItem value="blueberry">
                                            Blueberry
                                        </SelectItem>
                                        <SelectItem value="grapes">
                                            Grapes
                                        </SelectItem>
                                        <SelectItem value="pineapple">
                                            Pineapple
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="23:30" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">
                                            Apple
                                        </SelectItem>
                                        <SelectItem value="banana">
                                            Banana
                                        </SelectItem>
                                        <SelectItem value="blueberry">
                                            Blueberry
                                        </SelectItem>
                                        <SelectItem value="grapes">
                                            Grapes
                                        </SelectItem>
                                        <SelectItem value="pineapple">
                                            Pineapple
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex items-center w-full gap-10">
                        <li className="w-full list-none">
                            <div className="flex items-center gap-3">
                                <input
                                    id="Friday"
                                    type="checkbox"
                                    className="hidden peer accent-[#0AADA4]"
                                />
                                <label
                                    htmlFor="Friday"
                                    className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0AADA4] border border-gray-400 rounded overflow-hidden"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-full fill-white"
                                        viewBox="0 0 520 520"
                                    >
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check"
                                            data-original="#000000"
                                        />
                                    </svg>
                                </label>
                                Friday
                            </div>
                        </li>
                        <div className="flex items-center gap-3">
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="09:00" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">
                                            Apple
                                        </SelectItem>
                                        <SelectItem value="banana">
                                            Banana
                                        </SelectItem>
                                        <SelectItem value="blueberry">
                                            Blueberry
                                        </SelectItem>
                                        <SelectItem value="grapes">
                                            Grapes
                                        </SelectItem>
                                        <SelectItem value="pineapple">
                                            Pineapple
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="23:30" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">
                                            Apple
                                        </SelectItem>
                                        <SelectItem value="banana">
                                            Banana
                                        </SelectItem>
                                        <SelectItem value="blueberry">
                                            Blueberry
                                        </SelectItem>
                                        <SelectItem value="grapes">
                                            Grapes
                                        </SelectItem>
                                        <SelectItem value="pineapple">
                                            Pineapple
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex items-center w-full gap-10">
                        <li className="w-full list-none">
                            <div className="flex items-center gap-3">
                                <input
                                    id="Saturday"
                                    type="checkbox"
                                    className="hidden peer accent-[#0AADA4]"
                                />
                                <label
                                    htmlFor="Saturday"
                                    className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0AADA4] border border-gray-400 rounded overflow-hidden"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-full fill-white"
                                        viewBox="0 0 520 520"
                                    >
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check"
                                            data-original="#000000"
                                        />
                                    </svg>
                                </label>
                                Saturday
                            </div>
                        </li>
                        <div className="flex items-center gap-3">
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="09:00" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">
                                            Apple
                                        </SelectItem>
                                        <SelectItem value="banana">
                                            Banana
                                        </SelectItem>
                                        <SelectItem value="blueberry">
                                            Blueberry
                                        </SelectItem>
                                        <SelectItem value="grapes">
                                            Grapes
                                        </SelectItem>
                                        <SelectItem value="pineapple">
                                            Pineapple
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="23:30" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">
                                            Apple
                                        </SelectItem>
                                        <SelectItem value="banana">
                                            Banana
                                        </SelectItem>
                                        <SelectItem value="blueberry">
                                            Blueberry
                                        </SelectItem>
                                        <SelectItem value="grapes">
                                            Grapes
                                        </SelectItem>
                                        <SelectItem value="pineapple">
                                            Pineapple
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex items-center w-full gap-10">
                        <li className="w-full list-none">
                            <div className="flex items-center gap-3">
                                <input
                                    id="Sunday"
                                    type="checkbox"
                                    className="hidden peer accent-[#0AADA4]"
                                />
                                <label
                                    htmlFor="Sunday"
                                    className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0AADA4] border border-gray-400 rounded overflow-hidden"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-full fill-white"
                                        viewBox="0 0 520 520"
                                    >
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check"
                                            data-original="#000000"
                                        />
                                    </svg>
                                </label>
                                Sunday
                            </div>
                        </li>
                        <div className="flex items-center gap-3">
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="09:00" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">
                                            Apple
                                        </SelectItem>
                                        <SelectItem value="banana">
                                            Banana
                                        </SelectItem>
                                        <SelectItem value="blueberry">
                                            Blueberry
                                        </SelectItem>
                                        <SelectItem value="grapes">
                                            Grapes
                                        </SelectItem>
                                        <SelectItem value="pineapple">
                                            Pineapple
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="23:30" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">
                                            Apple
                                        </SelectItem>
                                        <SelectItem value="banana">
                                            Banana
                                        </SelectItem>
                                        <SelectItem value="blueberry">
                                            Blueberry
                                        </SelectItem>
                                        <SelectItem value="grapes">
                                            Grapes
                                        </SelectItem>
                                        <SelectItem value="pineapple">
                                            Pineapple
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <Button variant="primary" className="uppercase">
                        Update
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default WorkingHours;
