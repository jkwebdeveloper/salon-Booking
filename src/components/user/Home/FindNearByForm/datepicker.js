"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, differenceInCalendarDays } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({
  className,
  name,
  placeholder,
  defaultOpen = false,
  setCalendarOpen,
  yearSelection,
  defaultValue,
  disabledDays,
  maxDate,
  onSelect,
}) {
  const [date, setDate] = React.useState(defaultValue);
  const [open, setOpen] = React.useState(defaultOpen);
  console.log("date", defaultValue, date)

  function dateToLocalISO(date) {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000)
      .toISOString()
      .slice(0, 10);
  }
  function isPastDate(date) {
    // return differenceInCalendarDays(date, new Date()) < 0;
  }
  return (
    <>
      <Popover
        open={open}
        onOpenChange={(e) => setCalendarOpen && setCalendarOpen(e)}
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
            {date ? (
              format(date, "PPP")
            ) : (
              <span>{placeholder || "Pick a date"}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0 bg-white !pointer-events-auto"
          align="start"
          onInteractOutside={(e) => setOpen(!open)}
        >
          <Calendar
            captionLayout={yearSelection ? "dropdown-buttons" : ""}
            fromYear={yearSelection && 1980}
            toYear={yearSelection && 2024}
            showOutsideDays
            fixedWeeks
            mode="single"
            selected={date}
            required
            disabled={disabledDays}
            onSelect={(date) => {
              if (onSelect) {
                setDate(date);
                onSelect(date)
                setOpen(!open);
              }
              else {
                setDate(date);
                setOpen(!open);
              }
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <input
        type="hidden"
        name={name || "date"}
        defaultValue={date && dateToLocalISO(new Date(date))}
      />
    </>
  );
}
