import React from 'react';
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { v4 } from 'uuid';
import { useCategory } from '@/hooks';

function SearchInput({ formItems, setFormItems }) {
    const mainCat = useCategory();
    const [searchText, setSearchText] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const searchRef = React.useRef(null);
    return (
        <div className='relative flex items-center gap-2 comboBox'>
            <DropdownMenu open={open} modal={false}>
                <DropdownMenuTrigger>
                    <div className='flex items-center gap-2 leading-0'>
                        <MagnifyingGlassIcon className='text-2xl' />
                        <input type="text" className=' text-sm min-w-[230px] z-30 pointer-events-auto focus:outline-none' placeholder="Select a treatment"
                            defaultValue={searchText && searchText || ''}
                            onInput={({ target }) => {
                                setSearchText(target.value);
                                setFormItems({ ...formItems, search: target.value });
                            }}
                            ref={searchRef}
                            onClick={e => { setOpen(true); setTimeout(() => e.target.focus(), 100) }} />
                    </div>
                </DropdownMenuTrigger>
                {!mainCat?.loading && mainCat?.data?.length ? <DropdownMenuContent onInteractOutside={({ target }) => !target.closest('.comboBox') && setOpen(!open)} className="w-56 px-2 py-3 mt-3 bg-white ring-1 ring-neutral-200">
                    <label className="font-semibold text-md ps-3">Popular Treatments</label>
                    <DropdownMenuGroup className='px-0 mt-2'>
                        {mainCat?.data.filter(i => i.title.toLowerCase().includes(searchText.toLowerCase()) && i).map((item, index) => {
                            return (
                                <DropdownMenuItem
                                    key={v4()}
                                    className="flex items-center gap-2 px-3 cursor-pointer hover:bg-primary hover:text-white"
                                    onSelect={({ target }) => {
                                        searchRef.current.value = target.textContent;
                                        setOpen(false);
                                        setFormItems({ ...formItems, categories: item.id });
                                        setFormItems({ ...formItems, search: item.title });
                                    }}
                                >
                                    {item.icon ? <span className='text-xl'>{item.icon}</span> : null}
                                    {item.title}
                                </DropdownMenuItem>
                            )
                        })}
                        {mainCat?.data.filter(i => i.title.toLowerCase().includes(searchText.toLowerCase()) && i).length == 0 && <p className='ps-3'>No Result Found</p>}
                    </DropdownMenuGroup>
                </DropdownMenuContent> : null}
            </DropdownMenu>
        </div>
    )
}

export default SearchInput