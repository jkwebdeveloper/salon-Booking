import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { v4 } from "uuid";
import {
  RiArrowDownSLine,
  RiPlayCircleFill,
} from "react-icons/ri";
import Link from "next/link";

import Image from "next/image";


const menuItems = {
  Massage: [
    {
      name: "Analytics",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
  ],
  Nail: [
    {
      name: "Analytics",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
  ],
  "Brows & lashes": [
    {
      name: "Analytics",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
  ],
  "Hair removal": [
    {
      name: "Analytics",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
    {
      name: "Engagement",
      href: "#",
    },
  ],
  Hair: {
    href: "#",
    icon: RiPlayCircleFill,
  },
  'Why Us': {
    href: "/why-us",
    icon: RiPlayCircleFill,
  },
  'Terms & Conditions': {
    href: "/terms-conditions",
    icon: RiPlayCircleFill,
  },
  "Tax Strategy": {
    href: "/tax-strategy",
    icon: RiPlayCircleFill,
  },
  "Refer Friend": {
    href: "/refer-friend",
    icon: RiPlayCircleFill,
  },
  "Contact Us": {
    href: "/contact-us",
    icon: RiPlayCircleFill,
  },
};

export default function DesktopMenu({ theme, themeMode }) {
  const [openMenu, setOpen] = useState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.closest(".menu")) return;
      setOpen(null);
    });
    const topMenu = document.querySelector('#topMenu');
    topMenu.addEventListener("mouseover", (e) => {
      setOpen(null);
    });
  }, []);

  return (
    <header className={`dark:bg-zinc-800 bg-white container rounded-md`}>
      <nav
        className="flex items-center justify-center mx-auto"
        aria-label="Global"
      >
        {Object.keys(menuItems).map((navItem, index) => {
          return (
            (Array.isArray(menuItems[navItem]) && (
              <Popover.Group
                key={v4()}
                className="hidden lg:flex"
                onMouseLeave={() => setOpen(null)}
              >
                <Popover className="relative menu">
                  <Popover.Button
                    className={`flex items-center text-md leading-6 font-medium group/navitem shadow-none outline-none py-3 px-3 hover:bg-primary hover:text-white ${(index == open && "text-primary_color") ||
                      "text-neutral-800"
                      }`}
                    style={{ boxShadow: 'none' }}
                    onMouseOver={() => setOpen(index)}
                  >
                    {navItem}
                    <RiArrowDownSLine
                      className={`h-5 w-5 flex-none text-gray-600 dark:text-gray-100 group-hover/navitem:text-white`}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    show={openMenu == index}
                    as={Fragment}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Popover.Panel
                      onMouseLeave={e => close()}
                      static className="absolute flex z-10 w-max overflow-hidden bg-white rounded-lg shadow-lg max-w-[35rem] -left-8 top-full dark:bg-zinc-800 ring-1 ring-gray-900/5">
                      <div className="grid items-start flex-1 grid-cols-3 p-4 gap-x-6 gap-y-3">
                        {menuItems[navItem].map((item, index) => (
                          <div
                            key={v4()}
                            className="relative flex items-center text-sm leading-6 rounded-lg group/submenu gap-x-6"
                            onClick={e => setOpen(null)}
                          >
                            <div className="flex-auto">
                              <Link
                                href={item.href}
                                className="block font-medium text-gray-900 hover:text-primary"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </Link>
                              <p className="mt-1 text-gray-600 dark:text-white">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Image src="/static/images/images.png" alt="megamenu image" className="max-w-[30%] object-cover" width={500} height={400} />
                    </Popover.Panel>
                  </Transition>
                </Popover>
              </Popover.Group>
            )) || (
              <Link
                href={menuItems[navItem].href}
                className="px-3 py-3 font-medium hover:text-white hover:bg-primary"
                key={v4()}
              >
                {navItem}
              </Link>
            )
          );
        })}
      </nav>
    </header>
  );
}
