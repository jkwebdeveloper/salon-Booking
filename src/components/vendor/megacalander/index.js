'use client';
import { cn } from '@/lib/utils';
import React, { useEffect } from 'react'
import { v4 } from 'uuid';
import { LuPoundSterling } from "react-icons/lu";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegCalendarPlus, FaRegCalendarTimes } from "react-icons/fa";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer";


import {
    Dialog,
    DialogContent,
    DialogHeader,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import AppointmentDetails from '@/components/vendor/megacalander/appointmentdetails';
import minToHour from '@/lib/mintohour';

const addMinuteInTime = (timeInHour, minutes) => {
    const timeParts = timeInHour.split(":");
    let totalMin = Number(timeParts[0]) * 60 + Number(timeParts[1]);
    totalMin = +totalMin + +minutes;
    return minToHour(totalMin);
}

function MegaCalander({ appointments = [], setAppointmentsData, currentStaff, dateRange, scheduleType, getDatesInRange, memebers = [], timeSlots = [] }) {
    const [confirmTimeChange, setConfirmTimeChange] = React.useState({ open: false, newtime: '', oldtime: '', member: '', todayDate: '' });
    const days = dateRange?.to && getDatesInRange(dateRange.from, dateRange.to) || [dateRange?.from];
    const [screenSize, setScreenSize] = React.useState([]);

    useEffect(() => {
        setScreenSize([window.innerWidth, window.innerHeight]);
        window.addEventListener('resize', () => {
            setScreenSize([window.innerWidth, window.innerHeight]);
        });
        return () => {
            window.removeEventListener('resize', () => {
                setScreenSize([window.innerWidth, window.innerHeight]);
            });
        }
    }, []);

    return (
        <div className='relative flex w-full font-normal border rounded-xl' onMouseLeave={e => {
            [...document.querySelectorAll('.addTime.active')].forEach((app) => { app.classList.remove('active') });
        }}>
            <div className='flex flex-col w-[60px] text-sm text-end bg-white rounded-l-xl'>
                <div className='h-10 border-b-[1px] border-r-[1px]'></div>
                {timeSlots.map((time, index) => {
                    return (
                        <div className='flex w-full start-0' key={v4()}>
                            <div className='py-2 w-full border-r-[1px] border-b-[1px] pe-2 h-[120px]'>
                                {time}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='flex flex-grow w-full [@media(min-width:1280px)]:overflow-x-clip overflow-x-auto overflow-y-visible'
                onMouseMove={e => {
                    const currentColum = e.target.closest('.column');
                    if (currentColum) {
                        document.querySelectorAll('.column').forEach((app) => {
                            app.id == currentColum.id ? app.style.zIndex = 15 : app.style.zIndex = 10;
                        });
                    }
                }}>
                {scheduleType == 'single' && memebers.map((member, index) => (
                    <Appointments key={v4()} data={{ index, member, day: days[0], timeSlots, appointments, screenSize, setAppointmentsData, scheduleType, confirmTimeChange, setConfirmTimeChange }} />
                ))}

                {scheduleType == 'range' && days.map((day, index) => (
                    <Appointments key={v4()} data={{ index, member: currentStaff, day, timeSlots, appointments, screenSize, setAppointmentsData, scheduleType, confirmTimeChange, setConfirmTimeChange }} />
                ))}
                <TimeChangeDialog hook={{ confirmTimeChange, setConfirmTimeChange, appointments, setAppointmentsData, scheduleType }} />
            </div>
        </div>
    )
}

export default MegaCalander


const Appointments = ({ data }) => {
    const { index, member, day, timeSlots, appointments, screenSize, setAppointmentsData, scheduleType, confirmTimeChange, setConfirmTimeChange } = data;
    var newtime = '';
    var draggingAppointment = '';
    var dragover = '';
    var dragHeight = 50;
    var currentColumn = '';

    var startY = 0;
    var touchTarget = '';
    const dragStart = ({ e, appointmentDuration }) => {
        [...document.querySelectorAll('.addTime.active')].forEach((app) => { app.classList.remove('active') });
        draggingAppointment = e.target;
        dragHeight = appointmentDuration;
        currentColumn = e.target.closest('.column').id;
    }

    const dragEnd = ({ e, currentTime, appointment, todayDate }) => {
        // dragover.appendChild(draggingAppointment);
        const appointmentBox = e.target.closest('.appointmentDetails');
        if (appointmentBox && appointmentBox.getAttribute('draggable') == 'true') {
            setConfirmTimeChange({ open: true, newtime: newtime, oldtime: currentTime, member: appointment.member, todayDate: todayDate });
        }
    }

    const dragOver = (e) => {
        e.preventDefault();
        [...document.querySelectorAll('.addTime.active')].forEach((app) => { app.classList.remove('active') });
        if (currentColumn != e.target.closest('.column').id) {
            return;
        }
        const target = e.target.closest('.timebox');
        [...document.querySelectorAll('.timebox')].forEach((app) => { app.style.border = 'none'; app.classList.remove('active') });
        target.style.border = '1px dashed #711F7E';
        target.classList.add('active');
        target.setAttribute('data-newtime', newtime);
        const targetPOS = target.getBoundingClientRect();
        const hours = target.getAttribute('data-time');
        const minutes = Math.round((e.clientY - targetPOS.top) / 2);
        newtime = addMinuteInTime(hours, minutes);
        dragover = target;
    }

    const onTouchStart = (e) => {
        startY = e.touches[0].clientY;
        //Need logic to show dragged preview
    }

    const onTouchMove = (e) => {
        const appointmentBox = e.target.closest('.appointmentDetails');
        if (appointmentBox && appointmentBox.getAttribute('draggable') == 'true') {
            const newTimeElm = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
            [...document.querySelectorAll('.timebox')].forEach((app) => { app.style.border = 'none'; app.classList.remove('active') });
            if (newTimeElm && newTimeElm.closest('.timebox')) {
                const target = newTimeElm.closest('.timebox');
                target.style.border = '1px dashed #711F7E';
                target.classList.add('active');
                target.setAttribute('data-newtime', newtime);
                const targetPOS = target.getBoundingClientRect();
                const hours = target.getAttribute('data-time');
                const minutes = Math.round((e.touches[0].clientY - targetPOS.top) / 2);
                newtime = addMinuteInTime(hours, minutes);
                dragover = target;
            } else {
                window.scrollTo(0, window.scrollY + 50);
            }
        }
    }

    return (
        <div className={`flex-grow flex-shrink-0 xl:w-auto sm:w-[45%] w-[95%] column bg-gray-50/20 ${index}`}
            id={'column' + index}
            key={v4()}
        >
            <p className='flex items-center justify-center border-r-[1px] h-10 border-b-[1px] sticky top-0 z-[99] bg-white'>
                {scheduleType == 'single' && member || day.toLocaleString('default', { day: 'numeric', month: 'short' })}
            </p>
            {timeSlots.map((time, index) => {
                return (
                    <div className='relative flex w-full start-0 timebox' key={v4()} data-newtime={'hello'} data-time={time}
                        onTouchMove={e => onTouchMove(e)}
                        onDragOver={e => dragOver(e)}>
                        <div className='border-l-[1px] border-r-[1px] border-neutral-200/60 time w-full justify-content-end align-items-start h-[120px] relative cursor-cell' onClick={e => {
                        }}>
                            {Array.from({ length: 4 }).map((min, i) => {
                                return <AddBlock key={v4()} i={i} screenSize={screenSize} timeSlots={time} member={member} day={day} />
                            })}
                            {
                                Array.from({ length: 60 }).map((min, i) => {
                                    const todayDate = scheduleType == 'range' && day.toLocaleString('en-GB').split(',')[0];
                                    const currentTimeMin = (i % 60) * 1;
                                    const currentTimeHour = time.split(':')[0] * 1;
                                    const currentTime = (currentTimeHour < 10 ? '0' + currentTimeHour : currentTimeHour) + ':' + (currentTimeMin < 10 ? '0' + currentTimeMin : currentTimeMin);
                                    const appointment = scheduleType == 'single' && appointments.find(appointment => appointment.time === currentTime && appointment.member === member) || appointments.find(appointment => appointment.time === currentTime && appointment.appointment_date === todayDate);
                                    const disabled = appointment?.disabled;
                                    const appointmentBorder = appointment && ` border-l-[4px] border-r-[1px] border-t-[1px] border-b-[1px] border-r-neutral-300 border-t-neutral-300 border-b-neutral-300 bg-white ${appointment.status == 'pending' && 'border-l-yellow-500' || appointment.status == 'confirmed' && 'border-l-green-500' || appointment.status == 'declined' && 'border-l-red-500'}` || '';
                                    const appointmentDuration = appointment?.duration.reduce((acc, curr) => acc + curr.time, 0);
                                    return (
                                        appointment
                                        && <div
                                            onMouseOver={e => [...document.querySelectorAll('.addTime.active')].forEach((app) => { app.classList.remove('active') })}
                                            draggable={appointment.status == 'pending'}
                                            onDragStart={e => dragStart({ e, appointmentDuration })}
                                            onDragEnd={e => dragEnd({ e, currentTime, appointment, todayDate })}
                                            onTouchStart={e => onTouchStart(e)}
                                            onTouchEnd={e => dragEnd({ e, currentTime, appointment, todayDate })}
                                            key={v4()}
                                            className={cn(`absolute appointmentDetails w-full text-sm leading-3 ${appointment.status == 'pending' && 'cursor-all-scroll pending' || 'cursor-help'}  ${disabled && 'bg-neutral-400' || 'bg-neutral-100'}`, appointmentBorder)}
                                            style={{
                                                transform: `translatey(${((currentTimeMin * 2) / 1) + 'px'})`, background: appointment?.bg,
                                                zIndex: i + 10
                                            }}
                                            id={'appointment' + index + 's' + i}
                                            data-index={index}
                                            data-newtime={''}
                                            disabled={disabled}>
                                            <div className='flex items-center w-full gap-1' style={{ height: `${appointmentDuration * 2}px` }}
                                                onClick={e => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    //Prevent click event on appointment details card
                                                }}
                                            >
                                                <AppointmentCard screenSize={screenSize} appointment={appointment} appointmentDuration={appointmentDuration} i={i} index={index} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

const AddBlock = ({ i, screenSize, timeSlots = '00:00', member, day }) => {
    const [hour, min] = timeSlots.split(':');
    const newMin = +min + (i * 15);
    const time = +hour + ':' + (newMin < 10 ? '0' + newMin : newMin);
    const formattedDate = day && format(new Date(day), "LLL dd, y") || '';
    return (
        +screenSize[0] > 768 && <TooltipProvider delayDuration={200}>
            <Tooltip className="wrapper" onOpenChange={e => {
                [...document.querySelectorAll('.addTime')].forEach((app) => { app.classList.remove('left', 'right') });
                setTimeout(() => {
                    const tooltip = document.querySelector('.addTime.active + div > #tooltip_content');
                    if (tooltip) {
                        const tooltipPos = tooltip.getAttribute('data-side');
                        const tooltipDivContent = document.querySelector('div[data-state="open"]') || document.querySelector('div[data-state="delayed-open"]');
                        tooltipDivContent && tooltipDivContent.classList.add(tooltipPos);
                    }
                }, 200);
            }}>
                <TooltipTrigger asChild>
                    <div className={`h-[30px] border-neutral-200/60 border-t-[1px] absolute w-full addTime`} style={{ top: `${25 * i}%` }}
                        onMouseOver={e => {
                            [...document.querySelectorAll('.addTime.active')].forEach((app) => { app.classList.remove('active') });
                            e.target.closest('.addTime').classList.add('active');
                        }}
                    >
                        <p className='flex items-center justify-center m-0 leading-7 booktime'>{time}</p>
                        <span className='absolute left top-2/4 -translate-y-2/4 -left-5 w-10 h-10 carrow z-[99999] rotate-180'></span>
                        <span className='absolute right -right-5 top-2/4 -translate-y-2/4 w-10 h-10 carrow z-[99999]'></span>
                    </div>
                </TooltipTrigger>
                <TooltipContent id="tooltip_content" side={screenSize[0] <= 1280 && 'center' || 'right'} sideOffset={0} ideOffset={0} className="py-2 w-[190px] space-y-2 rounded-lg bg-white text-black shadow-[0_0_100px_rgba(0,0,0,0.21)]">
                    <div>
                        <p className='text-lg font-semibold'>{member}</p>
                        <p className='font-medium text-md'>{formattedDate} {time}</p>
                    </div>
                    <Button size="sm" className="w-full gap-2 text-white bg-purple-500 rounded-full"><FaRegCalendarPlus className='text-md' /> Add Booking Slot</Button>
                    <Button size="sm" className="w-full gap-2 text-white bg-purple-500 rounded-full"><FaRegCalendarTimes className='text-md' /> Add Block Time</Button>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider >
        || <Drawer>
            <DrawerTrigger asChild>
                <div className={`h-[30px] border-neutral-200/60 border-t-[1px] absolute w-full addTime`} style={{ top: `${25 * i}%` }}
                    onMouseOver={e => {
                        [...document.querySelectorAll('.addTime.active')].forEach((app) => { app.classList.remove('active') });
                        e.target.closest('.addTime').classList.add('active');
                    }}
                >
                    <p className='flex items-center justify-center m-0 leading-7 booktime'>{time}</p>
                </div>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader asChild>
                    <div className='text-center'>
                        <p className='text-lg font-semibold'>{member}</p>
                        <p className='font-medium text-md'>{formattedDate} {time}</p>
                    </div>
                    <Button className="w-full gap-2 text-white bg-purple-500 rounded-full h-7"><FaRegCalendarPlus className='text-md' /> Add Booking Slot</Button>
                    <Button className="w-full gap-2 text-white bg-purple-500 rounded-full h-7"><FaRegCalendarTimes className='text-md' /> Add Block Time</Button>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose>
                        <Button variant="outline" className="w-full">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    )
}

const AppointmentCard = ({ screenSize, appointment, appointmentDuration, i, index }) => {
    const IsSafari = typeof navigator != undefined && navigator.vendor.match(/apple/i) &&
        !navigator.userAgent.match(/crios/i) &&
        !navigator.userAgent.match(/fxios/i) &&
        !navigator.userAgent.match(/Opera|OPT\//);
    return (
        +screenSize[0] > 768 && <TooltipProvider delayDuration={100}>
            <Tooltip className="wrapper" onOpenChange={e => {
                e ? document.querySelector(`#appointment${index}s${i}`).style.setProperty('z-index', 9999, 'important') : document.querySelector(`#appointment${index}s${i}`).style.setProperty('z-index', i + 10, 'important');
                e ? document.querySelector(`.megaCalander_header`).style.setProperty('z-index', 10, 'important') : document.querySelector(`.megaCalander_header`).style.setProperty('z-index', 99, 'important');
                [...document.querySelectorAll('.appointment')].forEach((app) => { app.classList.remove('left', 'right') });
                setTimeout(() => {
                    const tooltip = document.querySelector('div[data-state="delayed-open"] + div > #tooltip_content') || document.querySelector(' #tooltip_content');
                    if (tooltip) {
                        const tooltipPos = tooltip.getAttribute('data-side');
                        const tooltipDivContent = document.querySelector('div[data-state="delayed-open"]');
                        tooltipDivContent && tooltipDivContent.classList.add(tooltipPos);
                    }
                }, 200);
            }}
            >
                <TooltipTrigger asChild>
                    <div className={`relative w-full h-full py-1 ps-2 appointment bg-white ${appointmentDuration < 40 && 'flex gap-2 items-center' || 'flex flex-col justify-center'}`}
                        onMouseDown={e => {
                            //For Safari Fix
                            IsSafari && setTimeout(() => [...document.querySelectorAll('.appointment')].forEach((app) => { app.style.opacity = 0 }), 0);
                            IsSafari && setTimeout(() => [...document.querySelectorAll('.appointment')].forEach((app) => { app.style.opacity = 1 }), 800);
                        }}
                    >
                        <div className='text-sm leading-4 text-neutral-400'>{appointment.time}</div>
                        <div className='text-base leading-6'>{appointment.customer_name}</div>
                        {appointmentDuration > 40 && <div className='text-sm leading-5 text-neutral-400'>
                            {appointmentDuration < 40 && appointment.service.length > 10 && appointment.service.slice(0, 10) + '...' || appointment.service}
                        </div>}
                        <LuPoundSterling className={`text-white w-[25px] rounded-full h-[25px] p-1 absolute top-2/4 right-4 -translate-y-2/4 ${appointment.status == 'pending' && 'bg-yellow-500' || appointment.status == 'confirmed' && 'bg-green-600' || appointment.status == 'declined' && 'bg-red-500'}`} />
                        <span className='absolute left top-2/4 -translate-y-2/4 -left-4 w-10 h-10 carrow z-[99999] rotate-180'></span>
                        <span className='absolute right -right-4 top-2/4 -translate-y-2/4 w-10 h-10 carrow z-[99999]'></span>
                    </div>
                </TooltipTrigger>
                <TooltipContent id="tooltip_content" side={screenSize[0] <= 1280 && 'center' || 'right'} sideOffset={5} className="p-0 w-[270px] rounded-xl shadow-[0_0_100px_rgba(0,0,0,0.21)]">
                    <AppointmentDetails appointment={appointment} appointmentDuration={appointmentDuration} />
                </TooltipContent>
            </Tooltip>
        </TooltipProvider >
        || <Drawer>
            <DrawerTrigger asChild>
                <div className={`relative w-full h-full py-1 ps-2 appointment bg-white ${appointmentDuration < 40 && 'flex gap-2 items-center' || 'flex flex-col justify-center'}`}
                    onMouseDown={e => {
                        //For Safari Fix
                        IsSafari && setTimeout(() => [...document.querySelectorAll('.appointment')].forEach((app) => { app.style.opacity = 0 }), 0);
                        IsSafari && setTimeout(() => [...document.querySelectorAll('.appointment')].forEach((app) => { app.style.opacity = 1 }), 800);
                    }}
                >
                    <div className='text-sm leading-4 text-neutral-400'>{appointment.time}</div>
                    <div className='text-base leading-6'>{appointment.customer_name}</div>
                    {appointmentDuration > 40 && <div className='text-sm leading-5 text-neutral-400'>
                        {appointmentDuration < 40 && appointment.service.length > 10 && appointment.service.slice(0, 10) + '...' || appointment.service}
                    </div>}
                    <LuPoundSterling className={`text-white w-[25px] rounded-full h-[25px] p-1 absolute top-2/4 right-4 -translate-y-2/4 ${appointment.status == 'pending' && 'bg-yellow-500' || appointment.status == 'confirmed' && 'bg-green-600' || appointment.status == 'declined' && 'bg-red-500'}`} />
                </div>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <AppointmentDetails appointment={appointment} appointmentDuration={appointmentDuration} />
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose>
                        <Button variant="outline" className="w-full">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    )
}


function TimeChangeDialog({ hook }) {
    const defaultTime = { open: false, newtime: '', oldtime: '', member: '', todayDate: '' };
    const { confirmTimeChange, setConfirmTimeChange, appointments, setAppointmentsData, scheduleType } = hook;

    const setNewTime = () => {
        const newAppointments = appointments.map(appointment => {
            if (scheduleType == 'single' && appointment.time === confirmTimeChange?.oldtime && appointment.member === confirmTimeChange?.member) {
                appointment.time = confirmTimeChange?.newtime;
            } else if (appointment.time === confirmTimeChange?.oldtime && appointment.appointment_date === confirmTimeChange?.todayDate) {
                appointment.time = confirmTimeChange?.newtime;
            }
            return appointment;
        });
        setAppointmentsData(newAppointments);
        setConfirmTimeChange(defaultTime);
    }
    return (
        confirmTimeChange?.newtime && <Dialog open={confirmTimeChange?.open}>
            <DialogContent className="max-w-[340px]" onInteractOutside={e => setConfirmTimeChange(defaultTime)}>
                <DialogHeader>
                    <div className="flex flex-col pt-6 space-y-6">
                        <div className='flex items-end justify-between text-center'>
                            <div className='flex flex-col justify-center gap-2'>
                                <span className='font-semibold text-primary text-[0.8rem]'>Previous Time</span>
                                <span className='w-24 py-1 mx-auto text-black rounded-full bg-primary/15'>{confirmTimeChange?.oldtime}</span>
                            </div>
                            <IoIosArrowRoundForward className='text-2xl text-primary' />
                            <div className='flex flex-col justify-center gap-2'>
                                <span className='font-semibold text-primary text-[0.8rem]'>New Time</span>
                                <span className='w-24 py-1 mx-auto text-black rounded-full bg-primary/15'>{confirmTimeChange?.newtime}</span>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <Button className="flex-1 text-black bg-gray-200 rounded-full h-9 hover:text-white" zIndex="-1" onClick={e => setConfirmTimeChange(defaultTime)}>Cancel</Button>
                            <Button variant="primary" className="flex-1 rounded-full h-9" zIndex="-1" onClick={setNewTime}>Confirm</Button>
                        </div>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}