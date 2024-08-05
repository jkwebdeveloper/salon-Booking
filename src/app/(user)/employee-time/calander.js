'use client';
import React from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { v4 } from 'uuid';

function MiniCalander() {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedTime, setSelectedTime] = React.useState(null);
    const [timeingData, setTimeingData] = React.useState({});

    //This function will generate random timing for each day. And it will be called on each day change.
    const timeHours = {
        Morning: ['08:00', '09:00', '10:00', '11:00'],
        Afternoon: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        Evening: ['18:00', '19:00', '20:00', '21:00'],
    };

    React.useEffect(() => {
        const timing = {};
        setSelectedTime(null);
        Object.keys(timeHours).map(time => {
            timing[time] = timeHours[time].map(hour => {
                return {
                    time: hour,
                    seats: Math.floor(Math.random() * 4),
                };
            });
        });
        setTimeingData(timing);
    }, [selectedDate]);

    return (
        <>
            <div className="max-w-[500px] mx-auto mt-20 border rounded-md">
                <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="border-[0px]"
                />
                <Tabs
                    defaultValue="Morning"
                    className="p-3"
                    onValueChange={e => setSelectedTime(null)}
                >
                    <TabsList className="w-full bg-transparent max-w-[450px]">
                        {Object.keys(timeHours).map(timeing => (
                            <TabsTrigger key={v4()} value={timeing}>
                                {timeing}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {Object.keys(timeHours).map((timeing, index) => (
                        <TabsContent
                            key={v4()}
                            value={timeing}
                            className="flex flex-col gap-2 text-sm"
                        >
                            {timeingData[timeing]?.map((time, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        'flex justify-between p-2 px-3 border rounded-md hover:bg-[#FEF5FF] hover:border-[#711F7E] transition-all duration-300',
                                        (+time?.seats != 0 &&
                                            'cursor-pointer') ||
                                            'cursor-not-allowed bg-neutral-50 hover:bg-neutral-50 hover:border-neutral-200',
                                        selectedTime == time &&
                                            'bg-[#FEF5FF] border-[#711F7E]'
                                    )}
                                    onClick={e =>
                                        +time?.seats != 0 &&
                                        setSelectedTime(time)
                                    }
                                >
                                    <div>{time.time}</div>
                                    <div
                                        className={
                                            (+time?.seats == 0 &&
                                                'text-red-500') ||
                                            'text-green-500'
                                        }
                                    >
                                        {time.seats} Available
                                    </div>
                                </div>
                            ))}
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
            <div className="min-h-[100vh]">
                <div className="mt-3 text-center">
                    Time : {selectedTime?.time}
                    <br />
                    Seats :{' '}
                    {selectedTime?.seats && selectedTime?.seats + ' Available'}
                </div>
            </div>
        </>
    );
}

export default MiniCalander;
