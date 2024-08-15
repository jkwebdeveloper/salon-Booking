'use client';
import Button from '@/components/ui/button';
import Image from 'next/image';
import React, { use, useCallback, useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from '@/components/ui/dialog';
import SelectStaffModal from './SelectStaffModal';
import MiniCalander from './calander';
import { useSelector } from 'react-redux';
import { POST } from '@/app/api/post';
import { format, set } from 'date-fns';
import { GET } from '@/app/api/get';
import convertto24 from '@/lib/convertto24';
import { Error } from '@/components';

const Time = ({ handleContinue, handleBack }) => {
    const user = useSelector((state) => state.userAuth.user);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedTime, setSelectedTime] = React.useState(null);
    const [timeingData, setTimeingData] = React.useState({});
    const [availableStaff, setAvailableStaff] = useState({ data: [], service: {}, bookings_client: null, loading: true });
    const [addStaff, setAddStaff] = useState(false);
    const [error, setError] = useState('');

    const cart = useSelector((state) => state.Cart.cart) || '';

    const getAvailableStaff = useCallback(async ({ id, service, bookings_client }) => {
        setAvailableStaff({ data: [], loading: true });
        setAddStaff(true);
        const resp = await GET.request({ url: `/get-available-bookings-staffs?is_couples_massage=${0}&vendors_service_id=${id}`, token: user?.api_token });
        if (resp && resp.code == 200) {
            setAvailableStaff({ data: resp.data, service, bookings_client, loading: false });
        }
    }, []);

    const addBookingDateTime = useCallback(async () => {
        const data = {
            bookings_id: 1,
            booking_date: format(selectedDate, 'yyyy-MM-dd'),
            booking_time: convertto24({ time: selectedTime }),
        }
        const resp = await POST.request({ url: '/add-bookings-date-time', form: data, token: user?.api_token });
    }, [selectedTime]);

    useEffect(() => {
        selectedTime && addBookingDateTime();
    }, [selectedTime]);

    useEffect(() => {
        setSelectedTime(null);
    }, [selectedDate]);

    useEffect(() => {
        setError('');
    }, [cart, selectedTime, selectedDate]);

    return (
        <div className="container relative max-w-[1200px] flex flex-col items-start gap-4 px-0 lg:flex-row lg:px-28 md:pb-40 md:-mb-20">
            <div className="lg:w-[60%] w-full mx-auto space-y-5 rounded-xl shadow-lg p-4 bg-white">
                <p className="text-lg font-bold lg:text-2xl">Date & Time</p>
                <MiniCalander data={{ selectedDate, setSelectedDate, selectedTime, setSelectedTime, timeingData, setTimeingData }} />
            </div>
            <div className="shadow-lg rounded-xl lg:w-[40%] p-4 space-y-4 w-full mx-auto bg-white flex flex-col">
                <div className="flex items-center gap-2">
                    <Image
                        src={'/static/images/booking.png'}
                        loading="lazy"
                        alt="Hero Banner"
                        objectFit="cover"
                        className="object-cover h-full"
                        width={70}
                        height={70}
                    />
                    <div>
                        <p className="text-base font-bold lg:text-lg">{cart?.vendors_info?.salon_name}</p>
                        <p className="text-sm">{cart?.vendors_info?.address_line_one}</p>
                        <p className="text-sm">{cart?.vendors_info?.address_line_two}</p>
                    </div>
                </div>
                <div className="flex-grow space-y-4">
                    {cart?.bookings_services ? cart?.bookings_services?.map((item, index) => (
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-semibold text-neutral-600">{item?.vendors_service_info?.service_title}</p>
                                <p className="text-sm">{+item?.vendors_service_info?.duration * 60} Min</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                {cart?.bookings_clients?.map((client, index) => (
                                    item?.staffs_id
                                        ? <div className='flex items-center gap-2'>
                                            {item?.is_couples_massage == 1 ? <span className='capitalize'>{client?.name}</span> : ''}
                                            <Button
                                                size="sm"
                                                onClick={e => getAvailableStaff({ id: item?.vendors_service_info?.id, service: item, bookings_client: client })}
                                                className="h-6 px-2 py-0 text-white bg-teal-500 rounded-md shadow-none hover:bg-teal-700"
                                            >
                                                Edit Staff
                                            </Button>
                                        </div>
                                        : <Button
                                            size="sm"
                                            onClick={e => getAvailableStaff({ id: item?.vendors_service_info?.id, service: item, bookings_client: client })}
                                            className="bg-transparent shadow-none ring-1 ring-neutral-300 text-neutral-500 rounded-md hover:bg-[#F4E9FF] px-2 py-0 h-6 hover:border-primary disabled:opacity-30"
                                            disabled={!selectedTime}
                                        >
                                            + Add staff
                                        </Button>
                                ))}
                            </div>
                        </div>
                    )) : ''}
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
                        onClick={e => {
                            if (!selectedTime || !selectedDate) {
                                setError('Please select Available Date & Time');
                            } else if (cart?.bookings_services.length > 0 && cart?.bookings_services.filter(service => service?.staffs_id == 0).length > 0) {
                                setError('Please select staff');
                            } else {
                                handleContinue();
                            }
                        }}
                    >
                        Continue
                    </button>
                </div>
                {error && <Error error={error} />}
                <Dialog open={addStaff ? true : false} className="w-1/2">
                    <DialogContent
                        close={e => setAddStaff(null)}
                        className="sm:max-w-[670px]"
                    >
                        <DialogTitle className="-mt-3 -mb-3 text-lg font-bold lg:text-xl">
                            Select professional
                        </DialogTitle>
                        <SelectStaffModal availableStaff={availableStaff} setAddStaff={e => setAddStaff(null)} />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default Time;
