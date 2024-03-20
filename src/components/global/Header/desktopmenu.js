import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'

import {
    RiArrowDownSLine,
    RiPlayCircleFill,
    RiPhoneFill,
    RiBarChartGroupedLine,
    RiFingerprintLine
} from "react-icons/ri";
import Link from 'next/link';


const menuItems = {
    Massage: [
        {
            name: 'Analytics',
            description: 'Get a better understanding of where your traffic is coming from.',
            href: '#',
            icon: RiBarChartGroupedLine,
        },
        {
            name: 'Engagement',
            description: 'Speak directly to your customers in a more meaningful way.',
            href: '#',
            icon: RiFingerprintLine,
        },
    ],
    Nail: [
        {
            name: 'Community',
            description: 'Learn from the experts and get advice from your peers.',
            href: '#',
            icon: RiPlayCircleFill,
        },
        {
            name: 'Support',
            description: 'Keep track of what\'s happening with your data, user behavior, and more.',
            href: '#',
            icon: RiPhoneFill,
        },
    ],
    "Brows & lashes": [
        {
            name: 'Community',
            description: 'Learn from the experts and get advice from your peers.',
            href: '#',
            icon: RiPlayCircleFill,
        },
        {
            name: 'Support',
            description: 'Keep track of what\'s happening with your data, user behavior, and more.',
            href: '#',
            icon: RiPhoneFill,
        },
    ],
    "Hair removal": [
        {
            name: 'Community',
            description: 'Learn from the experts and get advice from your peers.',
            href: '#',
            icon: RiPlayCircleFill,
        },
        {
            name: 'Support',
            description: 'Keep track of what\'s happening with your data, user behavior, and more.',
            href: '#',
            icon: RiPhoneFill,
        },
    ],
    "Hair": {
        href: '#',
        icon: RiPlayCircleFill,
    },
    "Beauty": {
        href: '#',
        icon: RiPlayCircleFill,
    },
    "Body": {
        href: '#',
        icon: RiPlayCircleFill,
    },
    "Short breaks": {
        href: '#',
        icon: RiPlayCircleFill,
    },
    "Spa days": {
        href: '#',
        icon: RiPlayCircleFill,
    },
    "Mobile services": {
        href: '#',
        icon: RiPlayCircleFill,
    }
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DesktopMenu({ theme, themeMode }) {
    const [open, setOpen] = useState();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const updateMenu = ({ state, index }) => {
        setOpen(prev => [...prev, prev[index] = state])
    }
    return (
        <header className={`dark:bg-zinc-800 bg-white container rounded-md`}>
            <nav className="flex items-center justify-center gap-5 mx-auto" aria-label="Global">
                {Object.keys(menuItems).map((navItem, index) => {
                    return (
                        Array.isArray(menuItems[navItem]) && <Popover.Group
                            onMouseEnter={() => setOpen(index)}
                            onMouseLeave={() => setOpen(null)}
                            className="hidden py-3 lg:flex lg:gap-x-12">
                            <Popover className="relative menu">
                                <Popover.Button className={`flex items-center gap-x-1 text-md leading-6 font-medium group/navitem ${index == open && 'text-primary_color' || 'text-neutral-800'}`}>
                                    {navItem}
                                    <RiArrowDownSLine className={`h-5 w-5 flex-none text-gray-600 dark:text-gray-100 group-hover/navitem:text-${theme}-500`} aria-hidden="true" />
                                </Popover.Button>

                                <Transition
                                    show={open == index ? true : false}
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl dark:bg-zinc-800 ring-1 ring-gray-900/5">
                                        <div className="p-4">
                                            {menuItems[navItem].map((item) => (
                                                <div
                                                    key={item.name}
                                                    className="relative flex items-center p-4 text-sm leading-6 rounded-lg group/submenu gap-x-6 hover:bg-gray-50 dark:hover:bg-zinc-700">
                                                    <div className="flex items-center justify-center flex-none bg-gray-100 rounded-lg h-11 w-11 dark:bg-gray-200 ring-1 ring-gray-200 group-hover/submenu:bg-white">
                                                        <item.icon className={`h-6 w-6 text-gray-600 group-hover/submenu:text-${theme}-500`} aria-hidden="true" />
                                                    </div>
                                                    <div className="flex-auto">
                                                        <a href={item.href} className="block font-semibold text-gray-900 dark:text-white">
                                                            {item.name}
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                        <p className="mt-1 text-gray-600 dark:text-white">{item.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </Popover>
                        </Popover.Group>
                        || <Link href={menuItems[navItem].href} className='font-medium hover:text-primary_color'>{navItem}</Link>
                    )
                })}
            </nav>
        </header>
    )
}