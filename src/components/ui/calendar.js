"use client";
import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    (<DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4 w-full",
        caption: "flex justify-between pt-1 relative items-center",
        caption_label: "text-lg font-bold",
        nav: "space-x-1 flex items-center",
        nav_button: "h-6 w-6 bg-transparent p-0 opacity-50 hover:opacity-100 border border-primary flex items-center justify-center rounded-full",
        nav_button_previous: "left-1",
        nav_button_next: "right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex justify-between",
        head_cell:
          "text-neutral-500 rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2 justify-between",
        cell: "h-auto w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-neutral-100/50 [&:has([aria-selected])]:bg-transparent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: "h-7 w-7 px-1 py-0 font-normal rounded-full aria-selected:opacity-100 hover:bg-teal-500/30 hover:text-black",
        day_range_end: "day-range-end",
        day_selected:
          "bg-teal-500 text-neutral-50 hover:bg-teal-500 hover:text-neutral-50 focus:bg-teal-500 focus:text-neutral-50",
        day_today: "bg-teal-500/15 aria-selected:bg-teal-500 text-neutral-500 aria-selected:text-white",
        day_outside:
          "day-outside text-neutral-500 opacity-50 aria-selected:bg-neutral-100/50 aria-selected:text-neutral-500 aria-selected:opacity-30",
        day_disabled: "text-neutral-500 opacity-50",
        day_range_middle:
          "aria-selected:bg-neutral-100 aria-selected:text-neutral-900",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeftIcon className="w-4 h-4" />,
        IconRight: ({ ...props }) => <ChevronRightIcon className="w-4 h-4" />,
      }}
      {...props} />)
  );
}
Calendar.displayName = "Calendar"

export { Calendar }
