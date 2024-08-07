import { IoCalendarOutline } from "react-icons/io5";
import React from 'react'
import { cn } from "@/lib/utils";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import Button from "@/components/ui/button";
import { addDays, format } from "date-fns";

function DatePickerWithRange({ className, dateRange, setDateRange, scheduleType }) {
    return (
        <div className={cn("grid gap-2 mx-auto", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button id="date" variant={"outline"} className={cn("w-[250px] justify-start py-4 bg-white text-left font-normal", !dateRange && "text-muted-foreground")}>
                        <IoCalendarOutline className="w-4 h-4 mr-2" />
                        {dateRange?.from ? (
                            dateRange.to ?
                                <>
                                    {format(dateRange.from, "LLL dd, y")} -{" "}
                                    {format(dateRange.to, "LLL dd, y")}
                                </>
                                : format(dateRange.from, "LLL dd, y")
                        ) : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white" align="start">
                    <Calendar
                        initialFocus
                        mode={scheduleType}
                        defaultMonth={dateRange?.from}

                        max={6}
                        selected={dateRange}
                        onSelect={e => {
                            if (e) {
                                if (scheduleType == 'single') {
                                    setDateRange({ from: e })
                                } else {
                                    if (e?.to) {
                                        setDateRange(e);
                                    }
                                    else {
                                        setDateRange({ from: e.from, to: addDays(e.from, 2) });
                                    }
                                }
                            }
                        }}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default DatePickerWithRange