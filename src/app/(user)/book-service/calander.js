'use client';
import React, { useCallback, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { v4 } from 'uuid';
import { GET } from '@/app/api/get';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { TimeSelect } from '@/components/ui/skelton/timeselect';

function MiniCalander({ data }) {
    const user = useSelector((state) => state.userAuth.user);
    const [loading, setLoading] = React.useState(false);
    const { selectedDate, setSelectedDate, selectedTime, setSelectedTime, timeingData, setTimeingData } = data;

    const getBookingTimeSlots = useCallback(async () => {
        setLoading(true);
        const resp = await GET.request({ url: '/get-bookings-time-slots?date=' + format(selectedDate, 'yyyy-MM-dd'), token: user?.api_token });
        setLoading(false);
        if (resp && resp.code == 200) {
            setTimeingData(resp.data);
        }
    }, []);

    useEffect(() => {
        getBookingTimeSlots();
    }, [selectedDate]);
    return (
        <div className="w-full mx-auto space-y-8 rounded-md">
            <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="border-[0px] p-0"
                classNames={{
                    head_cell: "text-lg w-9 font-light text-neutral-400",
                    day: "w-9 h-9 rounded-full",
                    cell: "text-lg",
                }}
            />
            {!loading ? <Tabs
                defaultValue="Morning"
                className="p-0 space-y-4"
                onValueChange={e => setSelectedTime(null)}
            >
                <TabsList className="w-full bg-transparent max-w-[450px] gap-3">
                    {Object.keys(timeingData).map(timeing => (
                        timeingData[timeing]?.times.length ? <TabsTrigger className="px-5 py-2 bg-neutral-100" key={v4()} value={timeing}>
                            {timeing}
                        </TabsTrigger> : null
                    ))}
                </TabsList>
                {Object.keys(timeingData).map((timeing, index) => (
                    <TabsContent
                        key={v4()}
                        value={timeing}
                        className="flex flex-col gap-2 text-sm"
                    >
                        {timeingData[timeing]?.times?.map((time, index) => (
                            <div
                                key={index}
                                className={cn('flex justify-between p-2 px-3 border rounded-md hover:bg-[#FEF5FF] hover:border-[#711F7E] transition-all duration-300', (+time?.available_staff_count != 0 && 'cursor-pointer') || 'cursor-not-allowed bg-neutral-50 hover:bg-neutral-50 hover:border-neutral-200', selectedTime == time?.time && 'bg-[#FEF5FF] border-[#711F7E]')}
                                onClick={e => +time?.available_staff_count != 0 && setSelectedTime(time?.time)}
                            >
                                <div>{time?.time}</div>
                                <div className={(+time?.available_staff_count == 0 && 'text-red-500') || 'text-green-500'}>
                                    {time?.available_staff_count} Available
                                </div>
                            </div>
                        ))}
                    </TabsContent>
                ))}
            </Tabs> : <TimeSelect />}
        </div>
    );
}

export default MiniCalander;
