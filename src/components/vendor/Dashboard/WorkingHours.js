'use client'
import React, { useEffect } from 'react';
import Button from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { v4 } from 'uuid'
import converttomin from '@/constants/converttomin';
import { useDispatch, useSelector } from 'react-redux';
import { Error, Spinner, Success } from "@/components";
import { POST } from '@/app/api/post';
import { GET } from '@/app/api/get';
import { login } from "@/redux/features/vendorAuthSlice";

const WorkingHours = () => {
    const dispatch = useDispatch();
    const vendor = useSelector(state => state?.vendorAuth?.vendor);
    const [loading, setLoading] = React.useState(false);
    const [formState, setFormState] = React.useState({
        loading: false,
        error: "",
        success: "",
    });
    const [selectedDays, setSelectedDays] = React.useState({});
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const timeing = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];

    const updateWorkingHour = async (e) => {
        e.preventDefault();
        const isValid = [];
        Object.keys(selectedDays).map(day => {
            (!selectedDays[day]?.from_time || !selectedDays[day]?.to_time) && isValid.push(day);
        });
        if (isValid.length == 0) {
            const hoursData = {};
            new Array(weekDays.length).fill(0).map((_, i) => {
                const day = weekDays[i];
                (!selectedDays[day]) && (hoursData[day.slice(0, 3)] = { status: 0 })
                    || (hoursData[day.slice(0, 3)] = selectedDays[day]);
            });
            const resp = await POST.request({
                url: "/vendor/set-vendor-availability",
                form: hoursData,
                token: vendor?.api_token,
                rawdata: true,
                formState,
                setFormState,
            });
            if (resp.code == 200) {
                getVendorHours();
            }
        }
    }

    const getVendorHours = async () => {
        setLoading(true);
        const resp = await GET.request({ url: '/vendor/get-vendor-open-hours', token: vendor?.api_token });
        setLoading(false);
        if (resp && resp.code == 200) {
            const salonTime = {};
            resp?.data.map(t => t?.status && (salonTime[weekDays.filter(w => w.slice(0, 3) == t.day)[0]] = { from_time: t?.from_time.slice(0, 5), to_time: t?.to_time.slice(0, 5), status: t?.status }));
            setSelectedDays(salonTime);
            dispatch(login({ ...vendor, availability: resp?.data }));
        }
    }
    useEffect(() => {
        getVendorHours();
    }, [])
    return (
        <div className="space-y-4">
            <p className="text-2xl font-semibold">Shop working hours</p>
            <div className="w-full p-3 space-y-4 bg-white rounded-xl">
                <form className="relative space-y-3 w-max" onSubmit={e => updateWorkingHour(e)}>
                    <div className={`w-full space-y-3 sm:w-[90%] lg:w-1/2 ${loading && 'opacity-10'}`}>
                        {weekDays.map((day) => {
                            return (
                                <div className="flex items-center gap-5 md:gap-10" key={v4()}>
                                    <li className="w-full list-none">
                                        <div className="flex items-center">
                                            <input
                                                id={day}
                                                type="checkbox"
                                                className="w-5 h-5 accent-green-600"
                                                checked={selectedDays[day] ? true : false}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        e.target.nextElementSibling.value = '1';
                                                        setSelectedDays({ ...selectedDays, [day]: { from_time: '', to_time: '', status: 1 } })
                                                    } else {
                                                        e.target.nextElementSibling.value = '0';
                                                        const newDays = selectedDays;
                                                        delete newDays[day];
                                                        setSelectedDays({ ...newDays });
                                                    }
                                                }}
                                            />
                                            <input type="hidden" name={day.slice(0, 3) + '[status]'} value={0} onChange={e => { return }} />
                                            <label
                                                htmlFor={day}
                                                className="w-full text-sm font-medium text-gray-900 ms-2 min-w-[80px]"
                                            >
                                                {day}
                                            </label>
                                        </div>
                                    </li>
                                    <div className="flex items-center gap-3">
                                        <Select name={day.slice(0, 3) + '[from_time]'} onValueChange={e => setSelectedDays({ ...selectedDays, [day]: { ...selectedDays[day], from_time: e } })}>
                                            <SelectTrigger className={`text-black min-w-[90px] ${selectedDays[day] && (selectedDays[day].from_time && 'text-black' || 'text-red-500')}`}>
                                                {selectedDays[day] && (selectedDays[day].from_time || 'From') || 'From'}
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {timeing.map((time) => (
                                                        <SelectItem key={v4()} value={time} disabled={selectedDays[day] && +(converttomin(time)) >= +(converttomin(selectedDays[day].to_time || '24:00')) || false}>
                                                            {time}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <Select onValueChange={e => setSelectedDays({ ...selectedDays, [day]: { ...selectedDays[day], to_time: e } })}>
                                            <SelectTrigger className={`text-black min-w-[90px] ${selectedDays[day] && (selectedDays[day].to_time && 'text-black' || 'text-red-500')}`}>
                                                {selectedDays[day] && (selectedDays[day].to_time || 'To') || 'To'}
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {timeing.map((time) => (
                                                        <SelectItem key={v4()} value={time} disabled={selectedDays[day] && +(converttomin(time)) <= +(converttomin(selectedDays[day].from_time || '24:00')) || false}>
                                                            {time}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <Button type="submit" variant="primary" className={`uppercase ${loading && 'opacity-10'}`} disabled={formState?.loading}>
                        <Spinner
                            show={formState?.loading}
                            width="25"
                            height="25"
                            text="Update"
                        />
                    </Button>
                    {loading && <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                        <Spinner
                            show={true}
                            width={50}
                            height={50}
                        />
                    </div>}
                    {formState?.error && <Error error={formState?.error} />}
                    {formState?.success && <Success message={formState?.success} />}
                </form>
            </div>
        </div>
    );
};

export default WorkingHours;
