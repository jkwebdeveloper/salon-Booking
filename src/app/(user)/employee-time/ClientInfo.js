import { Label } from '@/components';
import Button from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const ClientInfo = () => {
    return (
        <div className="container flex flex-col min-h-[55dvh] gap-4 px-1 md:flex-row md:px-28 relative md:mb-10">
            <div className="md:w-[60%] w-[90%] mx-auto space-y-5 rounded-md shadow-lg h-fit min-h-[350px] p-4 bg-white">
                <p className="text-3xl font-bold">Client Booking Information</p>
                <form className="space-y-4">
                    <div className="w-full space-y-1 text-left">
                        <Label htmlFor="Client" text="Client name 1" required />
                        <input
                            type="text"
                            name="Client"
                            id="Client"
                            className="input_field"
                            placeholder="Enter here..."
                        />
                    </div>
                    <div className="w-full space-y-1 text-left">
                        <Label htmlFor="Client" text="Client name 2" required />
                        <input
                            type="text"
                            name="Client"
                            id="Client2"
                            className="input_field"
                            placeholder="Enter here..."
                        />
                    </div>
                    <div className="w-full space-y-1 text-left">
                        <Label
                            htmlFor="Client"
                            text="Phone number 1"
                            required
                        />
                        <input
                            type="text"
                            name="Client"
                            id="Phone"
                            className="input_field"
                            placeholder="Enter here..."
                        />
                    </div>
                    <div className="w-full space-y-1 text-left">
                        <Label
                            htmlFor="Client"
                            text="Phone number 2"
                            required
                        />
                        <input
                            type="text"
                            name="Client"
                            id="Phone2"
                            className="input_field"
                            placeholder="Enter here..."
                        />
                    </div>
                </form>
            </div>
            <div className="shadow-lg rounded-md h-fit min-h-[350px] md:w-[40%] lg:w-[35%] w-[90%] mx-auto space-y-5 p-4 bg-white">
                <div className="flex items-start gap-2">
                    <Image
                        src={'/static/images/spa_life.png'}
                        loading="lazy"
                        alt="Hero Banner"
                        className="object-cover h-full"
                        width={50}
                        height={80}
                    />
                    <div>
                        <p className="text-lg font-bold">Spa Life & Massage</p>
                        <p className="text-sm">
                            Street 420, Addington, London, EH1 1AE, UK
                        </p>
                    </div>
                </div>
                <div className="flex items-start justify-between">
                    <div className="space-y-2">
                        <p className="text-sm font-medium">
                            New Couples Massage
                        </p>
                        <p className="text-sm ">1 hour</p>
                    </div>
                    <p className="text-sm font-medium">£349</p>
                </div>
                {/* <div className="flex items-center justify-between">
                    <p className="">Client 1</p>
                    <Button className="bg-[#FAFAFA] rounded-md hover:bg-[#F4E9FF] hover:border-primary border-[1px] border-[#E6E6E6]">
                        + Add staff
                    </Button>
                </div>
                <div className="flex items-center justify-between">
                    <p className="">Client 1</p>
                    <div className="flex items-center gap-2">
                        <p>Nuzami</p>
                        <Button className="bg-[#0AADA4] text-white rounded-md">
                            Edit
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <p>Face wash</p>
                        <p>x 3</p>
                    </div>
                    <p>£15</p>
                </div> */}
                <div className="top-0 flex items-center justify-center w-full gap-3 bottom-2">
                    <button className="w-full border-[1px] py-2 rounded-full  border-[#CCCCCC] bg-background shadow-sm hover:bg-primary hover:text-white">
                        Back
                    </button>
                    <button className="w-full focus:outline-none py-3 rounded-full capitalize bg-[#711F7E] hover:bg-[#BF27D7] text-white font-medium  active:scale-90 transition text-sm">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClientInfo;