import {
    CalendarIcon,
    EnvelopeClosedIcon,
    FaceIcon,
    GearIcon,
    PersonIcon,
    RocketIcon,
} from "@radix-ui/react-icons"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import React from "react";

const SearchInput = () => {
    const [open, setOpen] = React.useState(false);
    const [searchText, setSearchText] = React.useState('');
    const itemList = [
        { icon: <CalendarIcon className="w-full h-full" />, text: 'Calendar' },
        { icon: <FaceIcon className="w-full h-full" />, text: 'Search Emoji' },
        { icon: <RocketIcon className="w-full h-full" />, text: 'Launch 1' },
        { icon: <RocketIcon className="w-full h-full" />, text: 'Launch 2' },
        { icon: <RocketIcon className="w-full h-full" />, text: 'Launch 3' },
    ]
    return (
        <Command className="relative min-w-[280px] rounded-lg shadow-none">
            <CommandInput onBlur={e => setOpen(false)} onFocus={e => setOpen(true)} className="border-0" placeholder="Search by Treatment or Salon" value={searchText} onInput={({ target }) => setSearchText(target.value)} />
            <CommandList className={`absolute left-0 z-10 w-full mt-3 bg-white rounded-md shadow-none top-full ring-neutral-300 max-h-0 transition-all duration-500 delay-75 ease-linear overflow-hidden ${open && ' max-h-[1000px] ring-1' || ''}`}
                onClick={({ target }) => target.closest('.select-item') && setSearchText(target.closest('.select-item').textContent)}
            >
                <p className="pt-3 ps-3">Popular Treatments</p>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup key={searchText}>
                    {itemList.filter(i => i.text.toLowerCase().includes(searchText.toLowerCase()) && i).map((item, index) => {
                        return (
                            <CommandItem className="cursor-pointer">
                                <span className="w-4 h-4 mr-2">
                                    {item.icon}
                                </span>
                                <text>{item.text}</text>
                            </CommandItem>
                        )
                    })}
                </CommandGroup>
                <CommandSeparator />
            </CommandList>
        </Command>
    )
}

export default SearchInput