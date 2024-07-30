import Button from '@/components/ui/button';
import Label from '@/components/ui/form/label';
import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const PlannerModal = () => {
    const [activeTab, setActiveTab] = useState('appointment');

    return (
        <div className="w-full space-y-4">
            <div className="rounded-full slide-controls bg-[#EBEBEB]">
                {/* <button
                    for="login"
                    class="slide login bg-[#0AADA4] text-white rounded-full"
                >
                    Appointment
                </button>
                <button
                    for="signup"
                    class="slide signup bg-[#EBEBEB] rounded-full"
                >
                    Block
                </button> */}
                <button
                    onClick={() => setActiveTab('appointment')}
                    className={`slide login rounded-full ${
                        activeTab === 'appointment'
                            ? 'bg-[#0AADA4] text-white'
                            : 'bg-[#EBEBEB]'
                    }`}
                >
                    Appointment
                </button>
                <button
                    onClick={() => setActiveTab('block')}
                    className={`slide signup rounded-full ${
                        activeTab === 'block'
                            ? 'bg-[#0AADA4] text-white'
                            : 'bg-[#EBEBEB]'
                    }`}
                >
                    Block
                </button>
            </div>

            {activeTab === 'appointment' && (
                <>
                    <div className="flex flex-col w-full gap-3 lg:flex-row">
                        <div className="w-full space-y-1 text-left ">
                            <Label htmlFor="First Name" text="First Name" />
                            <input
                                type="text"
                                name="first_name"
                                className="input_field"
                                placeholder="John"
                                pattern="[A-Za-z]{4,20}"
                            />
                        </div>
                        <div className="w-full space-y-1 text-left ">
                            <Label htmlFor="Last name" text="Last name" />
                            <input
                                type="text"
                                name="last_name"
                                className="input_field"
                                placeholder="Adam"
                                pattern="[A-Za-z]{4,20}"
                            />
                        </div>
                        <div className="w-full space-y-1 text-left ">
                            <Label htmlFor="E-mail" text="E-mail" />
                            <input
                                type="text"
                                name="E-mail"
                                className="input_field"
                                placeholder="johnadam68@mail.com"
                                pattern="[A-Za-z]{4,20}"
                            />
                        </div>
                        <div className="w-full space-y-1 text-left ">
                            <Label htmlFor="last_name" text="Mobile Number" />
                            <input
                                type="text"
                                name="last_name"
                                className="input_field"
                                placeholder="+1 1223456647"
                                pattern="[A-Za-z]{4,20}"
                            />
                        </div>
                    </div>
                    <div className="w-full space-y-1 text-left ">
                        <Label htmlFor="first_name" text="Select service" />
                        <Select>
                            <SelectTrigger className="">
                                <SelectValue placeholder="Swedish massage" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">
                                        Banana
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center w-full gap-3 space-y-1 text-left">
                        <div className="w-full">
                            <Label htmlFor="first_name" text="Date" />
                            <input
                                type="date"
                                name="date"
                                id=""
                                className="input_field"
                            />
                        </div>
                        <div className="w-full">
                            <Label htmlFor="first_name" text="Time" />
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Swedish massage" />
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
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-full">
                            <Label htmlFor="first_name" text="Duration" />
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Swedish massage" />
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
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-full">
                            <Label htmlFor="first_name" text="Team member" />
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Swedish massage" />
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
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <Label
                            htmlFor="first_name"
                            text="Add a note (Optional)"
                        />
                        <textarea
                            id="message"
                            rows="4"
                            className="input_field"
                            placeholder="Type here..."
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <Button variant="disable">Cancel</Button>
                        <Button variant="primary">Save</Button>
                    </div>
                </>
            )}
            {activeTab === 'block' && (
                <>
                    <p className="text-[#4D4D4D] text-center">
                        Make this time slot unavailable for bookings. You can
                        also use blocks for defining lunch hours or block
                        specific weekdays.
                    </p>
                    <div className="flex flex-col w-full gap-3 lg:flex-row">
                        <div className="w-full space-y-1 text-left ">
                            <Label htmlFor="Team member*" text="Team member*" />
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Swedish massage" />
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
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-full space-y-1 text-left ">
                            <Label htmlFor="Repeat" text="Repeat" />
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Swedish massage" />
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
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex items-center w-full gap-3 space-y-1 text-left">
                        <div className="w-full">
                            <Label htmlFor="first_name" text="Start Date" />
                            <input
                                type="date"
                                name="date"
                                id=""
                                className="input_field"
                            />
                        </div>
                        <div className="w-full">
                            <Label htmlFor="first_name" text="Time" />
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Swedish massage" />
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
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-full">
                            <Label htmlFor="first_name" text="End Date" />
                            <input
                                type="date"
                                name="date"
                                id=""
                                className="input_field"
                            />
                        </div>
                        <div className="w-full">
                            <Label htmlFor="first_name" text="Time" />
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Swedish massage" />
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
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="first_name" text="Description*" />
                        <textarea
                            id="message"
                            rows="4"
                            className="input_field"
                            placeholder="Lunch"
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <Button variant="disable">Cancel</Button>
                        <Button variant="primary">Save</Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default PlannerModal;
