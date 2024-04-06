"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format, differenceInCalendarDays } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker() {
    const [date, setDate] = React.useState();
    const [open, setOpen] = React.useState(false);
    function dateToLocalISO(date) {
        return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000).toISOString().slice(0, 10);
    }
    function isPastDate(date) {
        // return differenceInCalendarDays(date, new Date()) < 0;
    }
    return (
        <>
            <Popover open={open}>
                <PopoverTrigger asChild>
                    <Button
                        variant={"ghost"}
                        className={cn(
                            "justify-start text-left font-normal border-0 shadow-none px-4 min-w-[220px]",
                            !date && "text-neutral-400"
                        )}
                        onClick={() => setOpen(!open)}
                    >
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white" align="start" onInteractOutside={e => setOpen(!open)}>
                    <Calendar
                        fromDate={new Date()}
                        showOutsideDays
                        fixedWeeks
                        mode="single"
                        selected={date}
                        required
                        disabled={new Date()}
                        hidden={isPastDate}
                        // onSelect={(date) => { setDate(new Date(date).toISOString().slice(0, 10)); setOpen(!open) }} // setDate(date)
                        onSelect={(date) => { setDate(date); setOpen(!open) }}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
            <input type="hidden" name="date" defaultValue={date && dateToLocalISO(new Date(date))} />
        </>
    )
}
