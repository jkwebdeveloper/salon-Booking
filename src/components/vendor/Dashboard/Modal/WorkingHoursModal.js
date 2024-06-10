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
const WorkingHoursModal = () => {
    return (
        <div className="space-y-3">
            <div className="flex items-center w-full gap-10">
                <li class="w-full list-none">
                    <div class="flex items-center">
                        <input
                            id="list-radio-license"
                            type="checkbox"
                            value=""
                            name="list-radio"
                            className="hidden peer accent-[#0AADA4]"
                        />
                        <label
                            for="list-radio-license"
                            class="w-full ms-2 text-sm font-medium text-gray-900 "
                        >
                            Monday
                        </label>
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
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                    Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
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
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                    Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">
                                    Pineapple
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex items-center w-full gap-10">
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
                            Tuesday
                        </label>
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
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                    Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
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
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                    Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">
                                    Pineapple
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex items-center w-full gap-10">
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
                            Wednesday
                        </label>
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
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                    Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
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
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                    Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">
                                    Pineapple
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex items-center w-full gap-10">
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
                            Thursday
                        </label>
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
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                    Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
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
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                    Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">
                                    Pineapple
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex items-center w-full gap-10">
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
                            Friday
                        </label>
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
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                    Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
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
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                    Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">
                                    Pineapple
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex items-center w-full gap-10">
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
                            Saturday
                        </label>
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
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                    Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
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
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                    Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">
                                    Pineapple
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex items-center w-full gap-10">
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
                            Sunday
                        </label>
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
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                    Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
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
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                    Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">
                                    Pineapple
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Button variant="primary">Save</Button>
        </div>
    );
};

export default WorkingHoursModal;
