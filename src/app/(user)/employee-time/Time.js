'use client';
import Button from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from '@/components/ui/dialog';
import SelectStaffModal from './SelectStaffModal';
import MiniCalander from './calander';

const Time = ({ handleContinue, handleBack }) => {
    const [addStaff, setAddStaff] = useState(false);
    return (
        <div className="container flex flex-col min-h-[55dvh] gap-4 px-1 md:flex-row md:px-28 relative md:mb-10">
            <div className="md:w-[60%] w-[90%] mx-auto space-y-5 rounded-md shadow-lg h-fit min-h-[350px] p-4 bg-white">
                <p className="text-3xl font-bold">Date & Time</p>
                <MiniCalander />
            </div>
            <div className="shadow-lg rounded-md md:w-[40%] p-4 space-y-4 w-[90%] mx-auto bg-white flex flex-col min-h-[350px]">
                <div className="flex items-start gap-2">
                    <Image
                        src={'/static/images/booking.png'}
                        loading="lazy"
                        alt="Hero Banner"
                        objectFit="cover"
                        className="object-cover h-full"
                        width={60}
                        height={80}
                    />
                    <div>
                        <p className="text-lg font-bold">Spa Life & Massage</p>
                        <p className="text-sm">
                            Street 420, Addington, London, EH1 1AE, UK
                        </p>
                    </div>
                </div>
                <div className="flex-grow space-y-4">
                    <div className="flex items-start justify-between">
                        <div className="space-y-2">
                            <p className="text-sm font-medium">
                                New Couples Massage
                            </p>
                            <p className="text-sm ">1 hour</p>
                        </div>
                        <p className="text-sm font-medium">£349</p>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="">Client 1</p>
                        <Dialog open={addStaff} className="w-1/2">
                            <DialogTrigger
                                onClick={e => setAddStaff(true)}
                                className="bg-[#FAFAFA] rounded-md hover:bg-[#F4E9FF] p-3 hover:border-primary border-[1px] border-[#E6E6E6]"
                            >
                                + Add staff
                            </DialogTrigger>
                            <DialogContent
                                close={setAddStaff}
                                className="sm:max-w-[600px]"
                            >
                                <DialogTitle className="text-3xl font-bold">
                                    Select professional
                                </DialogTitle>
                                <SelectStaffModal setAddStaff={setAddStaff} />
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full gap-3 mt-auto">
                    <button
                        className="w-full border-[1px] py-2 rounded-full  border-[#CCCCCC] bg-background shadow-sm hover:bg-primary hover:text-white"
                        onClick={handleBack}
                    >
                        Back
                    </button>
                    <button
                        className="w-full focus:outline-none py-3 rounded-full capitalize bg-[#711F7E] hover:bg-[#BF27D7] text-white font-medium  active:scale-90 transition text-sm"
                        onClick={handleContinue}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Time;
