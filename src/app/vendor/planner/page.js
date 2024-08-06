'use client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { addDays } from 'date-fns';
import { IoChevronForwardOutline, IoChevronBackOutline } from 'react-icons/io5';
import { v4 } from 'uuid';
import { BiSolidDownArrow } from 'react-icons/bi';

import Button from '@/components/ui/button';
import PlannerModal from '@/components/vendor/Dashboard/Modal/PlannerModal';
import Sidebar from '@/components/global/DashboardHeader/Sidebar';
import MegaCalander from '@/components/vendor/megacalander';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import DatePickerWithRange from '@/components/vendor/megacalander/datepickerwithrange';
import getDatesInRange from '@/lib/getdatesinrange';
import getNextDateRange from '@/lib/getnextdaterange';
import getPreviousDateRange from '@/lib/getpreviousdateRange';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from '@/components/ui/dialog';
import BookingList from '@/components/vendor/Dashboard/BookingList';
import SellProductModal from '@/components/vendor/Dashboard/Modal/PlannerModal/SellProductModal';

const Planner = () => {
    const { sidebar } = useSelector(state => state.sidebarAuth.sidebar);
    const [appointmentModal, setAppointmentModal] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [scheduleType, setScheduleType] = React.useState('single'); // single | range
    const [currentStaff, setCurrentStaff] = React.useState('');
    const [shortDate, setShortDate] = React.useState({ from: '', to: '' });
    const [appointmentsData, setAppointmentsData] = React.useState([]);
    const [dateRange, setDateRange] = React.useState({
        from: new Date(),
        to: addDays(new Date(), 5),
    });
    const [bookingList, setBookingList] = useState(false);
    const [sellProduct, setSellProduct] = useState(false);

    useEffect(() => {
        if (scheduleType == 'single') {
            setDateRange({ from: new Date() });
            setShortDate({ from: '' });
        } else {
            setDateRange({
                from: new Date(),
                to: addDays(new Date(), 5),
            });
            setShortDate({ from: '', to: '' });
        }
    }, [scheduleType]);

    const memebers = [
        'Nikul Patel',
        'John Smith',
        'John Johnson',
        'John Brown',
        // 'John Doe',
        // 'Jane Doe',
    ];
    const timeSlots = [
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
    ];

    //To be Removed
    const getAppointmentData = async range => {
        const randomDate =
            (scheduleType == 'range' &&
                getDatesInRange(dateRange?.from, dateRange?.to)) ||
            dateRange.from;
        const dateLength = randomDate.length;
        const data = new Array(15).fill(0).map((_, i) => {
            return {
                time: [
                    '04:00',
                    '04:30',
                    '06:15',
                    '06:45',
                    '07:00',
                    '07:45',
                    '09:00',
                    '09:25',
                    '10:40',
                    '11:30',
                    '12:15',
                    '12:45',
                    '13:30',
                    '15:15',
                    '16:00',
                    '16:30',
                    '17:15',
                    '17:45',
                    '18:45',
                    '19:15',
                    '23:30',
                ][i % 21],
                member: memebers[Math.floor(Math.random() * memebers.length)],
                status: ['pending', 'confirmed', 'declined'][i % 3],
                customer_name: [
                    'Jane Manish',
                    'Jane Nikul',
                    'Jay Shah',
                    'Linken Brown',
                ][i % 4],
                customer_phone: '123-456-7890',
                appointment_date:
                    (scheduleType == 'range' &&
                        dateRange?.to &&
                        randomDate[(Math.random() * dateLength) | 0]
                            .toLocaleString('en-GB')
                            .split(',')[0]) ||
                    (scheduleType == 'range' &&
                        dateRange?.from &&
                        randomDate.toLocaleString('en-GB').split(',')[0]) ||
                    dateRange?.from.toLocaleString('en-GB').split(',')[0],
                hour: ['04:00 - 05:00', '05:00 - 06:00', '06:00 - 07:00'][
                    i % 3
                ],
                duration: [
                    [{ time: 15, note: '' }],
                    [{ time: 30, note: '' }],
                    [
                        { time: 45, note: '' },
                        { time: 10, note: 'min cleanup' },
                    ],
                    [{ time: 60, note: '' }],
                    [{ time: 75, note: '' }],
                ][i % 5],
                service: [
                    'Swedish Massage',
                    'Deep Tissue Massage',
                    'Hot Stone Massage',
                    'Aromatherapy Massage',
                    'Reflexology',
                ][i % 5],
                payment: ['Cash', 'Credit Card'][i % 2],
                price: '$50',
                booked_on: '2021-01-01',
                notes: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
            };
        });
        setAppointmentsData(data);
    };

    useEffect(() => {
        if (dateRange?.from && dateRange?.to) {
            setShortDate({
                from: dateRange.from.toLocaleString('default', {
                    day: 'numeric',
                    month: 'short',
                }),
                to: dateRange.to.toLocaleString('default', {
                    day: 'numeric',
                    month: 'short',
                }),
            });
            getAppointmentData(dateRange);
        } else {
            setShortDate({
                from: dateRange.from.toLocaleString('default', {
                    day: 'numeric',
                    month: 'short',
                }),
            });
            getAppointmentData(dateRange);
        }
    }, [dateRange, currentStaff]);

    return (
        <div className="flex items-start">
            {sidebar ? (
                <div className="h-fit min-h-[350px] md:block hidden md:w-[35%] lg:w-[20%] w-[90%] space-y-5 p-5 bg-white">
                    <Sidebar />
                </div>
            ) : null}
            {bookingList === true ? (
                <BookingList />
            ) : (
                <div
                    className={
                        sidebar
                            ? `md:w-4/5 w-[90%] mx-auto space-y-5 h-fit min-h-[350px] p-5 bg-[#f4f2f2]`
                            : `w-full mx-auto space-y-5 h-fit min-h-[350px] p-5 bg-[#f4f2f2]`
                    }
                >
                    <div className="flex flex-col justify-between space-y-3 lg:items-center lg:flex-row">
                        <p className="text-2xl font-semibold">Planner</p>
                        <div className="flex flex-col gap-3 lg:items-center lg:flex-row">
                            <DropdownMenu
                                open={dropdown}
                                onOpenChange={e => setDropdown(e)}
                            >
                                <DropdownMenuTrigger>
                                    <Button
                                        variant="outline"
                                        className="flex items-center gap-3"
                                    >
                                        Create new <BiSolidDownArrow />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56 p-0 mt-2 bg-white ring-1 ring-neutral-200">
                                    <DropdownMenuItem
                                        className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white"
                                        onSelect={e =>
                                            setTimeout(
                                                () => setAppointmentModal(true),
                                                200
                                            )
                                        }
                                    >
                                        Add Appointment
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white"
                                        onSelect={e =>
                                            setTimeout(
                                                () => setAppointmentModal(true),
                                                200
                                            )
                                        }
                                    >
                                        Add Block
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Dialog open={!dropdown && appointmentModal}>
                                <DialogContent
                                    close={setAppointmentModal}
                                    className="sm:max-w-[800px]"
                                >
                                    <PlannerModal
                                        setAppointmentModal={
                                            setAppointmentModal
                                        }
                                    />
                                </DialogContent>
                            </Dialog>
                            <Dialog open={sellProduct} className="w-1/2">
                                <DialogTrigger
                                    onClick={e => setSellProduct(true)}
                                    className="border-[1px]  border-primary bg-background py-2 px-6 rounded-full shadow-sm hover:bg-primary hover:text-white"
                                >
                                    Sell Product
                                </DialogTrigger>
                                <DialogContent
                                    close={setSellProduct}
                                    className="sm:max-w-[400px]"
                                >
                                    <DialogTitle className="text-3xl font-bold">
                                        Sell Product
                                    </DialogTitle>
                                    <SellProductModal
                                        setSellProduct={setSellProduct}
                                    />
                                </DialogContent>
                            </Dialog>
                            {/* <Button variant="outline">Sell Product</Button> */}
                            <Button
                                variant="primary"
                                onClick={() => setBookingList(true)}
                            >
                                Booking list
                            </Button>
                        </div>
                    </div>
                    <div className="relative z-30 flex flex-wrap items-center justify-between gap-4 megaCalander_header">
                        <div className="flex flex-wrap gap-3">
                            <DatePickerWithRange
                                dateRange={dateRange}
                                setDateRange={setDateRange}
                                scheduleType={scheduleType}
                            />
                            <div className="flex items-center gap-5 mx-auto">
                                <Button
                                    onClick={() =>
                                        getPreviousDateRange({
                                            range: dateRange,
                                            scheduleType,
                                            setDateRange,
                                        })
                                    }
                                    variant="outline"
                                    className="px-0 py-0 text-xl bg-white opacity-50 min-w-7 max-w-7 min-h-7 max-h-7 ring-1 ring-neutral-700/20 hover:opacity-100"
                                >
                                    <IoChevronBackOutline />
                                </Button>
                                <span>
                                    {shortDate.from}{' '}
                                    {scheduleType == 'range' && (
                                        <>- {shortDate.to}</>
                                    )}
                                </span>
                                <Button
                                    onClick={() =>
                                        getNextDateRange({
                                            range: dateRange,
                                            scheduleType,
                                            setDateRange,
                                        })
                                    }
                                    variant="outline"
                                    className="px-0 py-0 text-xl bg-white opacity-50 min-w-7 max-w-7 min-h-7 max-h-7 ring-1 ring-neutral-700/20 hover:opacity-100"
                                >
                                    <IoChevronForwardOutline />
                                </Button>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-full gap-2 lg:w-auto">
                            <Select
                                onValueChange={e => {
                                    setScheduleType(e);
                                    setCurrentStaff(memebers[0]);
                                }}
                            >
                                <SelectTrigger className="sm:w-[180px] z-[99] bg-white">
                                    <SelectValue placeholder="Schedule Type" />
                                </SelectTrigger>
                                <SelectContent className="z-[99]">
                                    <SelectItem value="single">
                                        Daily
                                    </SelectItem>
                                    <SelectItem value="range">
                                        Weekly
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            {scheduleType == 'range' && (
                                <Select
                                    defaultValue={memebers[0]}
                                    onValueChange={e => setCurrentStaff(e)}
                                >
                                    <SelectTrigger className="sm:w-[180px] z-[99] bg-white">
                                        <SelectValue placeholder="Staff Member" />
                                    </SelectTrigger>
                                    <SelectContent className="z-[99]">
                                        {memebers.map((member, i) => (
                                            <SelectItem
                                                key={v4()}
                                                value={member}
                                            >
                                                {member}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        </div>
                    </div>
                    <MegaCalander
                        currentStaff={currentStaff}
                        setAppointmentsData={setAppointmentsData}
                        memebers={memebers}
                        timeSlots={timeSlots}
                        scheduleType={scheduleType}
                        dateRange={dateRange}
                        appointments={appointmentsData}
                        getDatesInRange={getDatesInRange}
                    />
                </div>
            )}
        </div>
    );
};

export default Planner;
