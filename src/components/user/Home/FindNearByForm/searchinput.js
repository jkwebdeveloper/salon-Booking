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
    const [open, setOpen] = React.useState(false);
    const searchRef = React.useRef(null);
    const formCat = mainCat?.data?.filter(i => formItems?.categories?.includes(i.id) && i)[0]?.title || formItems?.search_terms || '';
    return (
        <div className='relative flex items-center w-full gap-2 comboBox z-[5]'>
            <DropdownMenu open={open} modal={false}>
                <DropdownMenuTrigger>
                    <div className='flex items-center gap-2 leading-0'>
                        <MagnifyingGlassIcon className='text-3xl' />
                        <input type="text" className=' text-sm min-w-[230px] z-30 pointer-events-auto focus:outline-none' placeholder="Select a treatment"
                            defaultValue={formItems?.search_terms || formCat || ''}
                            onInput={({ target }) => {
                                setFormItems(prev => ({ ...formItems, search_terms: target.value, categories: [] }));
                            }}
                            ref={searchRef}
                            onClick={e => { setOpen(true); setTimeout(() => e.target.focus(), 100) }} />
                    </div>
                </DropdownMenuTrigger>
                {!mainCat?.loading && mainCat?.data?.length ? <DropdownMenuContent onInteractOutside={({ target }) => !target.closest('.comboBox') && setOpen(!open)} className="w-56 px-2 py-3 mt-3 bg-white ring-1 ring-neutral-200">
                    <label className="font-semibold text-md ps-3">Popular Treatments</label>
                    <DropdownMenuGroup className='px-0 mt-2'>
                        {mainCat?.data.filter(i => i.title.toLowerCase().includes(formCat.toLowerCase()) && i).map((item, index) => {
                            return (
                                <DropdownMenuItem
                                    key={v4()}
                                    className="flex items-center gap-2 px-3 cursor-pointer hover:bg-primary hover:text-white"
                                    onSelect={({ target }) => {
                                        searchRef.current.value = target.textContent;
                                        setOpen(false);
                                        setFormItems(prev => ({ ...formItems, search_terms: '', categories: [...formItems?.categories || [], item.id] }));
                                    }}
                                >
                                    {item.icon ? <span className='text-xl'>{item.icon}</span> : null}
                                    {item.title}
                                </DropdownMenuItem>
                            )
                        })}
                        {mainCat?.data.filter(i => i.title.toLowerCase().includes(formCat.toLowerCase()) && i).length == 0 && <p className='ps-3'>No Result Found</p>}
                    </DropdownMenuGroup>
                </DropdownMenuContent> : null}
            </DropdownMenu>
        </div>
    )
}

export default SearchInput