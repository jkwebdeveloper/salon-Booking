"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, startOfWeek, endOfWeek } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerRange({
  className,
  name,
  placeholder,
  defaultOpen = false,
  setCalendarOpen,
}) {
  const [date, setDate] = React.useState({
    from: new Date(),
    to: new Date(),
  });
  const [open, setOpen] = React.useState(defaultOpen);

  const handleSelect = (selectedDate) => {
    const start = startOfWeek(selectedDate, { weekStartsOn: 0 }); // 0 for Sunday, change to 1 for Monday if needed
    const end = endOfWeek(selectedDate, { weekStartsOn: 0 });
    setDate({ from: start, to: end });
    setOpen(false);
  };

  return (
    <>
      <Popover
        open={open}
        onOpenChange={(e) => {
          setOpen(e);
          setCalendarOpen && setCalendarOpen(e);
        }}
      >
        <PopoverTrigger asChild>
          <Button
            variant={"ghost"}
            className={cn(
              "justify-start text-left font-normal border-0 shadow-none px-4 min-w-[220px]",
              !date && "text-neutral-400",
              className
            )}
            onClick={() => setOpen(!open)}
          >
            <CalendarIcon className="w-4 h-4 mr-2" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
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
            mode="single"
            selected={date.from}
            defaultMonth={date?.from}
            required
            onSelect={handleSelect}
            initialFocus
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
