import { Banner } from '@/components';
import Button from '@/components/ui/button';
import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';

const ConfirmedModalpage = () => {
    return (
        <div>
            <Banner background={'/static/images/Myaccountbanner.jpg'} />
            <div className="container flex flex-col min-h-[55dvh] gap-4 px-1 md:flex-row md:px-5 relative mt-[-4rem] z-[2] md:mb-10">
                <div className="shadow-lg rounded-md h-fit min-h-[350px] md:w-[40%] w-[90%] p-5 mx-auto space-y-5 z-2 bg-white">
                    <div className="space-y-3 text-center">
                        <FaCircleCheck className="text-[#00B700] text-5xl text-center mx-auto" />
                        <p className="text-xl">
                            Hi John, your appointment is confirmed!
                        </p>
                        <p className="text-[#666666]">
                            Thursday 22 February at 10:00 am with Spa Life &
                            Massage (Nelson Mandela)
                        </p>
                        <Button variant="primary">Manage Booking</Button>
                        <hr />
                    </div>
                    <div className="space-y-3">
                        <p className="text-lg font-semibold">
                            Appointment Details
                        </p>
                        <div className="flex items-start justify-between">
                            <div className="flex-col space-y-2">
                                <p>Sports Massage</p>
                                <p className="text-[#666666]">For John Adam</p>
                            </div>
                            <p className="text-primary_color">£25.00</p>
                        </div>
                        <div className="flex items-start justify-between">
                            <div className="flex-col space-y-2">
                                <p>Sports Massage</p>
                                <p className="text-[#666666]">For John Adam</p>
                            </div>
                            <p className="text-primary_color">£25.00</p>
                        </div>
                        <div className="flex items-start justify-between">
                            <div className="flex-col space-y-2">
                                <p>Sports Massage</p>
                                <p className="text-[#666666]">For John Adam</p>
                            </div>
                            <p className="text-primary_color">£25.00</p>
                        </div>
                        <hr />
                        <div className="flex items-center justify-between">
                            <p>Total</p>
                            <p className="font-semibold">£394.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmedModalpage;
