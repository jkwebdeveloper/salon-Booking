'use client';
import Button from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineLock } from 'react-icons/md';

const SubScription = () => {
    const [checkOut, setCheckOut] = useState(false);
    return (
        <div className="space-y-4">
            {checkOut ? (
                <>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <p className="text-2xl font-semibold">
                                Secure checkout
                            </p>
                            <MdOutlineLock />
                        </div>
                        <IoMdClose
                            className="text-xl cursor-pointer"
                            onClick={() => setCheckOut(false)}
                        />
                    </div>
                    <div className="w-full p-3 space-y-4 bg-white rounded-xl">
                        <p className="text-xl">Payment Information</p>
                        <hr />
                        <div className="flex items-center w-full gap-2">
                            <div className="flex w-full py-5 px-2 items-center border border-bg-[#E6E6E6] rounded-lg bg-[#FAFAFA] gap-2">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <input
                                            id="list-radio-license"
                                            type="radio"
                                            value=""
                                            name="list-radio"
                                            className=""
                                        />
                                        <div>
                                            <p className="text-sm">
                                                Pay with card
                                            </p>
                                            <p className="text-[#666666] text-sm">
                                                Pay in advance
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={'/static/images/visacard.png'}
                                            alt=""
                                            loading="lazy"
                                            width={50}
                                            height={50}
                                            className="object-cover border border-bg-[#B3B3B3] p-1 rounded-lg"
                                        />
                                        <Image
                                            src={
                                                '/static/images/mastercard.png'
                                            }
                                            alt=""
                                            loading="lazy"
                                            width={50}
                                            height={50}
                                            className="object-cover border border-bg-[#B3B3B3] p-1 rounded-lg"
                                        />
                                        <Image
                                            src={
                                                '/static/images/americancard.png'
                                            }
                                            alt=""
                                            loading="lazy"
                                            width={50}
                                            height={50}
                                            className="object-cover border border-bg-[#B3B3B3] p-1 rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full py-5 px-2 items-center border border-bg-[#E6E6E6] rounded-lg bg-[#FAFAFA] gap-2">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <input
                                            id="list-radio-license"
                                            type="radio"
                                            value=""
                                            name="list-radio"
                                            class=""
                                        />
                                        <div>
                                            <p>Pay with PayPal</p>
                                            <p className="text-[#666666] text-sm">
                                                Pay in advance
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <Image
                                            src={
                                                '/static/images/paypalcard.png'
                                            }
                                            alt=""
                                            loading="lazy"
                                            width={50}
                                            height={50}
                                            className="object-cover border border-bg-[#B3B3B3] p-1 rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full py-5 px-2 items-center border border-bg-[#E6E6E6] rounded-lg bg-[#FAFAFA] gap-2">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <input
                                            id="list-radio-license"
                                            type="radio"
                                            value=""
                                            name="list-radio"
                                            class=""
                                        />
                                        <div>
                                            <p>Pay with wallet balance</p>
                                            <p className="text-[#666666] text-sm">
                                                Your balance : £541.00
                                            </p>
                                        </div>
                                    </div>
                                    <Image
                                        src={'/static/images/walleticon.png'}
                                        alt=""
                                        loading="lazy"
                                        width={50}
                                        height={50}
                                        className="object-cover border border-bg-[#B3B3B3] p-1 rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="text-xl">Card details</p>

                        <div className="w-full space-y-1 text-left">
                            <label htmlFor="fname" className="label_text">
                                Card Number
                            </label>
                            <input
                                type="text"
                                name="first_name"
                                id="fname"
                                className="input_field"
                                placeholder="Card Number"
                            />
                        </div>
                        <div className="flex flex-col w-full gap-3 lg:flex-row">
                            <div className="w-full space-y-1 text-left lg:w-1/2">
                                <label htmlFor="lname" className="label_text">
                                    Expires(MM)
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
                                    id="lname"
                                    className="input_field"
                                    placeholder="Month"
                                    pattern="[A-Za-z]{4,20}"
                                />
                                <p className="error">
                                    Min 4 Character Required
                                </p>
                            </div>

                            <div className="w-full space-y-1 text-left lg:w-1/2">
                                <label htmlFor="lname" className="label_text">
                                    CVV/CVV2
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
                                    id="lname"
                                    className="input_field"
                                    placeholder="ex. 311"
                                    pattern="[A-Za-z]{4,20}"
                                />
                                <p className="error">
                                    Min 4 Character Required
                                </p>
                            </div>
                        </div>
                        <Button variant="primary">Pay Now</Button>
                    </div>
                </>
            ) : (
                <>
                    <p className="text-2xl font-semibold">Subscription</p>
                    <div className="w-full p-3 space-y-4 bg-white rounded-xl">
                        <p className="text-xl font-medium">Activate Plan</p>
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                            <div className="border-[#B195F6] rounded-xl border py-5 px-7 flex-col space-y-2 items-center bg-[#EDE9F8]">
                                <p className="font-semibold text-[30px]">
                                    Basic
                                </p>
                                <div className="flex items-center gap-3">
                                    <p>Status : </p>
                                    <button className="bg-[#6ACE52] rounded-full text-white px-3 py-1 focus:outline-none capitalize  font-medium  active:scale-90 transition text-sm">
                                        Active
                                    </button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p>Expires : </p>
                                    <p>Oct 02, 2024</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p>Featured : </p>
                                    <p>03 / 10</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-xl font-medium">Upgrade your plan</p>
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            <div className="border-[#B195F6] rounded-xl border py-5 px-7 flex-col text-center space-y-3 items-center bg-[#EDE9F8]">
                                <p className="font-semibold text-[30px]">
                                    Basic
                                </p>
                                <p className="text-4xl font-bold bg-[#DDD5F2] rounded-lg p-3">
                                    $99.00
                                </p>
                                <p>
                                    2 Featured service <br /> For 1 month
                                </p>
                                <button
                                    className="bg-[#4C21B9] w-full rounded-full text-white px-3 py-2 focus:outline-none capitalize  font-medium  active:scale-90 transition text-sm"
                                    onClick={() => setCheckOut(true)}
                                >
                                    Buy now
                                </button>
                            </div>
                            <div className="border-[#9FBCFF] rounded-xl border py-5 px-7 flex-col text-center space-y-3 items-center bg-[#E7EDFB]">
                                <p className="font-semibold text-[30px]">
                                    Advance
                                </p>
                                <p className="text-4xl font-bold bg-[#D1DDF7] rounded-lg p-3">
                                    $49.00
                                </p>
                                <p>
                                    2 Featured service <br /> For 1 month
                                </p>
                                <button className="bg-[#0F4CD8] w-full rounded-full text-white px-3 py-2 focus:outline-none capitalize  font-medium  active:scale-90 transition text-sm">
                                    Buy now
                                </button>
                            </div>
                            <div className="border-[#A3F3C8] rounded-xl border py-5 px-7 flex-col text-center space-y-3 items-center bg-[#E8F7EF]">
                                <p className="font-semibold text-[30px]">
                                    Super
                                </p>
                                <p className="text-4xl font-bold bg-[#D3F0E0] rounded-lg p-3">
                                    $49.00
                                </p>
                                <p>
                                    2 Featured service <br /> For 1 month
                                </p>
                                <button className="bg-[#17AF5C] w-full rounded-full text-white px-3 py-2 focus:outline-none capitalize  font-medium  active:scale-90 transition text-sm">
                                    Buy now
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default SubScription;
