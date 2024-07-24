import minToHour from '@/lib/mintohour';
import React from 'react'
import { v4 } from 'uuid';

function AppointmentDetails({ appointment, appointmentDuration }) {
    const { status, customer_name, customer_phone, appointment_date, time, duration, service, payment, booked_on, notes } = appointment || {};
    return (
        <div className='relative text-black bg-white cursor-auto text-start' onMouseOver={e => {
            e.target.style.zIndex = 999999;
        }}>
            <p className={`capitalize text-center text-white text-xl p-2 ${status == 'pending' && 'bg-yellow-500' || status == 'confirmed' && 'bg-green-600' || status == 'declined' && 'bg-red-500'}`}>{status} Appointment</p>
            <div className='py-4 px-4 space-y-2 text-[0.9rem]'>
                <div className='space-y-1'>
                    <p className='text-xl font-medium'>{customer_name}</p>
                    <p>{customer_phone}</p>
                </div>
                <hr />
                <div className='flex flex-col gap-2 pt-2 ps-'>
                    <div className='flex'>
                        <div className='font-medium w-[100px]'>Date:</div>
                        <div className='flex-1'>{appointment_date}<br />{getTimeLength(time, appointmentDuration)}</div>
                    </div>
                    <div className='flex'>
                        <div className='font-medium w-[100px]'>Duration:</div>
                        <div className='flex-1'>
                            {duration.map((d, i) => {
                                return (
                                    <p key={v4()}>{d.time} min</p>
                                )
                            })}
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='font-medium w-[100px]'>Service:</div>
                        <div className='flex-1'>{service}</div>
                    </div>
                    <div className='flex'>
                        <div className='font-medium w-[100px]'>Payment:</div>
                        <div className='flex-1'>{payment}</div>
                    </div>
                    <div className='flex'>
                        <div className='font-medium w-[100px]'>Booked on:</div>
                        <div className='flex-1'>{booked_on}</div>
                    </div>
                    <div className='flex'>
                        <div className='font-medium w-[100px]'>Notes:</div>
                        <div className='flex-1'>{notes}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentDetails

const getTimeLength = (start, min) => {
    let [hours, minutes] = start.split(':');
    const totaltime = (+hours * 60) + (+minutes) + +min;
    return start + ' - ' + minToHour(totaltime);
}