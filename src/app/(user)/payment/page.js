import React from 'react';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import Label from '@/components/ui/form/label';
import Button from '@/components/ui/button';
import { IoIosLock } from 'react-icons/io';
import Validation from '@/constants/validation';
import Link from 'next/link';

const PaymentMethod = () => {
    return (
        <div className="bg-[#F8F8FA] space-y-5">
            <div className="container space-y-5 flex flex-col min-h-[55dvh] gap-4 px-1 md:flex-row md:px-5 md:mb-10">
                <div className="h-fit space-y-3 py-5 min-h-[350px] md:w-[40%] lg:w-[35%] w-[90%]">
                    <p className="text-2xl font-semibold">Overview</p>
                    <div className="z-[2] overflow-hidden shadow-lg rounded-xl ring-1 ring-primary/10 w-full">
                        <div className="relative">
                            <Image
                                src={'/static/images/payment.png'}
                                alt=""
                                loading="lazy"
                                width={400}
                                height={300}
                                className="object-cover object-center w-full "
                            />
                        </div>
                        <div className="p-3 space-y-3">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <p>Couples Massage</p>
                                        <p className="text-sm">(1 hr)</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-primary_color">
                                            £349.00
                                        </p>
                                        <p className="">
                                            <AiOutlineClose />
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[#666666] text-sm">
                                    09:00 AM, 16, May 2024
                                </p>
                                <p className="text-[#666666] text-sm">
                                    For John Adam, Goldie Adam
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <p>Face wash</p>
                                    <p className="text-sm text-[#464646]">
                                        x 3
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-primary_color">£15.00</p>
                                    <p className="">
                                        <AiOutlineClose />
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <p>Hair oil</p>
                                    <p className="text-sm text-[#464646]">
                                        x 1
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-primary_color">£4.00</p>
                                    <p className="">
                                        <AiOutlineClose />
                                    </p>
                                </div>
                            </div>
                            <p className="text-[#0AADA4] underline">
                                + Add service
                            </p>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p>Item Total</p>
                                <p className="font-medium">£394.00</p>
                            </div>
                            <hr />
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
                                        Pay with wallet
                                    </label>
                                </div>
                            </li>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p>Total to pay</p>
                                <p className="font-medium">£394.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 bg-white shadow-lg rounded-xl">
                        <div className="p-3 space-y-3">
                            <p className="text-xl font-medium">
                                Add Gift card or promo code
                            </p>
                            <hr />
                            <div className="w-full space-y-1 text-left ">
                                <Label htmlFor="last_name" text="Promo code" />
                                <div className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        name="last_name"
                                        className="input_field"
                                        placeholder="Type here..."
                                        pattern={Validation?.lastname?.pattern}
                                    />
                                    <p className="error">
                                        {Validation?.lastname?.msg}
                                    </p>
                                    <Button variant="outline">Apply</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-[95%] w-[90%] mx-auto space-y-5 h-fit min-h-[350px] z-2 ">
                    <div className="flex items-center gap-2">
                        <p className="text-2xl font-semibold">
                            Secure checkout
                        </p>
                        <IoIosLock className="text-2xl" />
                    </div>
                    <div className="p-3 space-y-3 bg-white shadow-lg rounded-xl">
                        <p className="text-xl">Your Details</p>

                        <hr />
                        <div className="flex flex-col w-full gap-3 lg:flex-row">
                            <div className="w-full space-y-1 text-left lg:w-1/2">
                                <label htmlFor="fname" className="label_text">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    id="fname"
                                    className="input_field"
                                    placeholder="Type here"
                                    pattern={Validation?.firstname?.pattern}
                                />
                                <p className="error">
                                    {Validation?.firstname?.msg}
                                </p>
                            </div>
                            <div className="w-full space-y-1 text-left lg:w-1/2">
                                <label htmlFor="lname" className="label_text">
                                    Last Name{' '}
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
                                    id="lname"
                                    className="input_field"
                                    placeholder="Type here"
                                    pattern={Validation?.lastname?.pattern}
                                />
                                <p className="error">
                                    {Validation?.lastname?.msg}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-3 lg:flex-row">
                            <div className="w-full space-y-1 text-left lg:w-1/2">
                                <label htmlFor="email" className="label_text">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="input_field"
                                    placeholder="Type here"
                                    pattern={Validation?.email?.pattern}
                                />
                                <p className="error">
                                    {Validation?.email?.msg}
                                </p>
                            </div>
                            <div className="w-full space-y-1 text-left lg:w-1/2">
                                <label htmlFor="phone" className="label_text">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    id="phone"
                                    className="input_field"
                                    placeholder="Type here"
                                    pattern={Validation?.phone?.pattern}
                                    maxLength={10}
                                />
                                <p className="error">
                                    {Validation?.phone?.msg}
                                </p>
                            </div>
                        </div>
                        <label htmlFor="phone" className="label_text">
                            Appointment notes (optional)
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="input_field"
                            placeholder="Type here"
                        ></textarea>
                        <p className="text-xl">Payment Information</p>
                        <p className="text-[#29AD17]">
                            All payments are securely processed{' '}
                        </p>
                        <hr />
                        <p className="text-[#EA2C6D]">
                            {`Pay for your Pampertree in advance so that you won't have to
              handle cash at the venue.`}
                        </p>
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
                        <div className="flex flex-col w-full gap-3 lg:flex-row">
                            <div className="w-full space-y-1 text-left lg:w-1/2">
                                <label htmlFor="fname" className="label_text">
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    id="fname"
                                    className="input_field"
                                    placeholder="Card Number"
                                    pattern={Validation?.cardnumber?.pattern}
                                />
                                <p className="error">
                                    {Validation?.cardnumber?.msg}
                                </p>
                            </div>
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
                                <label htmlFor="fname" className="label_text">
                                    Expires(YYYY)
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    id="fname"
                                    className="input_field"
                                    placeholder="Year"
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
                                    Save this card details for future purchases
                                </label>
                            </div>
                        </li>
                        <p>
                            By continuing you agree to our{' '}
                            <span className="font-semibold">
                                Booking Terms.
                            </span>{' '}
                        </p>
                        <div>
                            <Link href="/confirmed">
                                <Button variant="primary">Pay Now</Button>
                            </Link>
                        </div>
                        {/* <p className="text-xl">Billing Address</p>
                        <div className="flex flex-col w-full gap-3 lg:flex-row">
                            <div className="w-full space-y-1 text-left lg:w-1/2">
                                <label htmlFor="email" className="label_text">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="input_field"
                                    placeholder="Enter your email"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                />
                                <p className="error">Enter Valid Email id</p>
                            </div>
                            <div className="w-full space-y-1 text-left lg:w-1/2">
                                <label htmlFor="phone" className="label_text">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    id="phone"
                                    className="input_field"
                                    placeholder="Enter Your Phone Number"
                                    pattern="[0-9]{10}"
                                    maxLength={10}
                                />
                                <p className="error">
                                    Enter Valid Phone number
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-3 lg:flex-row">
                            <div className="w-full space-y-1 text-left lg:w-1/2">
                                <label htmlFor="email" className="label_text">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="input_field"
                                    placeholder="Enter your email"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                />
                                <p className="error">Enter Valid Email id</p>
                            </div>
                            <div className="w-full space-y-1 text-left lg:w-1/2">
                                <label htmlFor="phone" className="label_text">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    id="phone"
                                    className="input_field"
                                    placeholder="Enter Your Phone Number"
                                    pattern="[0-9]{10}"
                                    maxLength={10}
                                />
                                <p className="error">
                                    Enter Valid Phone number
                                </p>
                            </div>
                        </div>
                        <div className="w-full space-y-1 text-left">
                            <label htmlFor="phone" className="label_text">
                                Address line 1
                            </label>
                            <input
                                type="tel"
                                name="phone_number"
                                id="phone"
                                className="input_field"
                                placeholder="Enter Your Address line 1"
                                pattern="[0-9]{10}"
                                maxLength={10}
                            />
                            <p className="error">Enter Valid Address line 1</p>
                        </div>
                        <div className="flex flex-col w-full gap-3 lg:flex-row">
                            <div className="w-full space-y-1 text-left lg:w-1/2">
                                <label htmlFor="email" className="label_text">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="input_field"
                                    placeholder="Enter your email"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                />
                                <p className="error">Enter Valid Email id</p>
                            </div>
                            <div className="w-full space-y-1 text-left lg:w-1/2">
                                <label htmlFor="phone" className="label_text">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    id="phone"
                                    className="input_field"
                                    placeholder="Enter Your Phone Number"
                                    pattern="[0-9]{10}"
                                    maxLength={10}
                                />
                                <p className="error">
                                    Enter Valid Phone number
                                </p>
                            </div>
                        </div>
                        <p>By continuing you agree to our Booking Terms.</p>
                        <Button variant="primary">Pay Now</Button>
                        <p className="font-medium">Venue Policies</p>
                        <p className="text-[#EA2C6D]">
                            Right now, if you need to cancel you will receive a
                            full refund
                        </p>
                        <p>Reschedule policy</p>
                        <p className="text-[#666666]">
                            If your plans change, you can reschedule your
                            booking up to 1 hour before your appointment.
                        </p>
                        <p>Cancellation policy</p>
                        <p cclassName="text-[#666666]">
                            If you need to, you can cancel your booking up to 48
                            hours before your appointment and receive a full
                            refund to your original payment method.
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
