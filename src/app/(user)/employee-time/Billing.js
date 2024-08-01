import Button from '@/components/ui/button';
import Label from '@/components/ui/form/label';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Billing = ({ handleContinue, handleBack }) => {
    return (
        <div className="container flex flex-col min-h-[55dvh] gap-4 px-1 md:flex-row md:px-28 relative md:mb-10">
            <div className="md:w-[60%] w-[90%] mx-auto space-y-5 rounded-md shadow-lg h-fit min-h-[350px] p-4 bg-white">
                <p className="text-3xl font-bold">Billing Address</p>
                <form className="space-y-4">
                    <div className="flex flex-col w-full gap-3 lg:flex-row">
                        <div className="w-full space-y-1 text-left lg:w-1/2">
                            <Label
                                htmlFor="first_name"
                                text="First Name"
                                required
                            />
                            <input
                                type="text"
                                name="first_name"
                                className="input_field"
                                placeholder="Enter First Name"
                            />
                        </div>
                        <div className="w-full space-y-1 text-left lg:w-1/2">
                            <Label
                                htmlFor="last_name"
                                text="Last Name"
                                required
                            />
                            <input
                                type="text"
                                name="last_name"
                                className="input_field"
                                placeholder="Enter Last Name"
                            />
                        </div>
                    </div>
                    <div className="w-full space-y-1 text-left">
                        <Label htmlFor="email" text="Email" required />
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="input_field"
                            placeholder="Surname"
                        />
                    </div>
                    <div className="w-full space-y-1 text-left">
                        <Label htmlFor="Address" text="Address" />
                        <input
                            type="text"
                            name="Address"
                            className="input_field"
                            placeholder="Address"
                            // pattern={Validation?.phone?.pattern}
                        />
                    </div>
                    <div className="flex flex-col w-full gap-3 lg:flex-row">
                        <div className="w-full space-y-1 text-left lg:w-1/2">
                            <Label htmlFor="City" text="City" required />
                            <input
                                type="text"
                                name="city"
                                id="City"
                                className="input_field"
                                placeholder="City"
                            />
                        </div>
                        <div className="w-full space-y-1 text-left lg:w-1/2">
                            <Label htmlFor="Country" text="Country" required />
                            <input
                                type="text"
                                name="country"
                                id="Country"
                                className="input_field"
                                placeholder="Country"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div className="shadow-lg rounded-md h-fit min-h-fit relative md:w-[40%] w-[90%] mx-auto space-y-5 p-4 bg-white">
                <div className="flex items-start gap-2">
                    <Image
                        src={'/static/images/booking.png'}
                        loading="lazy"
                        alt="Hero Banner"
                        objectFit="cover"
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
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <p>Face wash</p>
                        <p>x 3</p>
                    </div>
                    <p>£15</p>
                </div>

                <div className="relative bottom-0 left-0 flex items-center justify-center w-full gap-3">
                    <button
                        className="w-full border-[1px] py-2 rounded-full  border-[#CCCCCC] bg-background shadow-sm hover:bg-primary hover:text-white"
                        onClick={handleBack}
                    >
                        Back
                    </button>
                    <Link href="/my-basket" className="w-full">
                        <button
                            className="w-full focus:outline-none py-3 rounded-full capitalize bg-[#711F7E] hover:bg-[#BF27D7] text-white font-medium  active:scale-90 transition text-sm"
                            onClick={handleContinue}
                        >
                            Continue
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Billing;
