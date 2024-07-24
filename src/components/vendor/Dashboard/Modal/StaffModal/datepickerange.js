'use client';

import * as React from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format, startOfWeek, endOfWeek } from 'date-fns';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

export function DatePickerRange({
    className,
    name,
    placeholder,
    defaultOpen = false,
    setCalendarOpen,
    onDateChange, // New prop
    mode = "single"
}) {
    const [date, setDate] = React.useState({
        from: new Date(),
        to: new Date(),
    });
    const [open, setOpen] = React.useState(defaultOpen);

    // const handleSelect = (selectedDate) => {
    //   const start = startOfWeek(selectedDate, { weekStartsOn: 0 });
    //   const end = endOfWeek(selectedDate, { weekStartsOn: 0 });
    //   setDate({ from: start, to: end });
    //   setOpen(false);
    // };
    // const handleSelect = selectedDate => {
    //     const start = startOfWeek(selectedDate, { weekStartsOn: 1 });
    //     const end = endOfWeek(selectedDate, { weekStartsOn: 1 });
    //     setDate({ from: start, to: end });
    //     setOpen(false);
    //     onDateChange && onDateChange({ from: start, to: end });
    // };

    const handleSelect = selectedDate => {
        const startofWeek = startOfWeek(selectedDate, { weekStartsOn: 0 });
        const start = startOfWeek(startofWeek, { weekStartsOn: 0 });
        const end = endOfWeek(startofWeek, { weekStartsOn: 0 });
        const newDateRange = { from: start, to: end };
        setDate(newDateRange);
        onDateChange && onDateChange(newDateRange);
        // setOpen(false);
    };

    return (
        <>
            <Popover
                open={open}
                onOpenChange={e => {
                    setOpen(e);
                    setCalendarOpen && setCalendarOpen(e);
                }}
            >
                <PopoverTrigger asChild>
                    <Button
                        variant={'ghost'}
                        className={cn(
                            'justify-start text-left font-normal border-0 shadow-none px-4 min-w-[220px]',
                            !date && 'text-neutral-400',
                            className
                        )}
                        onClick={() => setOpen(!open)}
                    >
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, 'LLL dd, y')} -{' '}
                                    {format(date.to, 'LLL dd, y')}
                                </>
                            ) : (
                                format(date.from, 'LLL dd, y')
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="w-auto p-0 bg-white"
                    align="start"
                    onInteractOutside={() => setOpen(false)}
                >
                    <Calendar
                        fromDate={new Date()}
                        showOutsideDays
                        fixedWeeks
                        mode={'single'}
                        selected={mode == 'range' && date}
                        defaultMonth={date?.from}
                        onSelect={handleSelect}
                        numberOfMonths={1}
                        initialFocus
                        required
                    />
                </PopoverContent>
            </Popover>
            {/* <input
        type="hidden"
        name={name || "date"}
        defaultValue={date && dateToLocalISO(new Date(date))}
      /> */}
        </>
    );
}
