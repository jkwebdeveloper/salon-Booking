import React from 'react'
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    CalendarIcon,
    FaceIcon,
    RocketIcon,
} from "@radix-ui/react-icons"
import { v4 } from 'uuid';

function SearchInput() {
    const [searchText, setSearchText] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const searchRef = React.useRef(null);
    const itemList = [
        { icon: <CalendarIcon className="w-full h-full" />, text: 'Calendar' },
        { icon: <FaceIcon className="w-full h-full" />, text: 'Search Emoji' },
        { icon: <RocketIcon className="w-full h-full" />, text: 'Launch 1' },
        { icon: <RocketIcon className="w-full h-full" />, text: 'Launch 2' },
        { icon: <RocketIcon className="w-full h-full" />, text: 'Launch 3' },
    ]
    return (
        <div className='relative flex items-center gap-2 comboBox'>
            <DropdownMenu open={open} modal={false}>
                <DropdownMenuTrigger>
                    <div className='flex items-center gap-2 leading-0'>
                        <MagnifyingGlassIcon className='text-2xl' />
                        <input type="text" className=' text-sm min-w-[230px] z-30 pointer-events-auto focus:outline-none' placeholder="Search by Treatment or Salon"
                            defaultValue={searchText && searchText || ''}
                            onInput={({ target }) => setSearchText(target.value)}
                            ref={searchRef}
                            onClick={e => { setOpen(true); setTimeout(() => e.target.focus(), 1000) }} />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent onInteractOutside={({ target }) => !target.closest('.comboBox') && setOpen(!open)} className="w-56 px-2 py-3 mt-3 bg-white ring-1 ring-neutral-200">
                    <label className="font-semibold text-md ps-3">Popular Treatments</label>
                    <DropdownMenuGroup className='px-0 mt-2'>
                        {itemList.filter(i => i.text.toLowerCase().includes(searchText.toLowerCase()) && i).map((item, index) => {
                            return (
                                <DropdownMenuItem key={v4()} className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white" onSelect={({ target }) => { searchRef.current.value = target.textContent; setOpen(false) }}>
                                    <span className='text-xl'>{item.icon}</span>
                                    {item.text}
                                </DropdownMenuItem>
                            )
                        })}
                        {itemList.filter(i => i.text.toLowerCase().includes(searchText.toLowerCase()) && i).length == 0 && <p className='ps-3'>No Result Found</p>}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default SearchInput