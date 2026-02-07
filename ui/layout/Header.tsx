"use client";

import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryMenu } from "@/data/menus";
import { useScrollPosition } from "@/utils/useScrollPosition";

export default function Header() {
  /**
   * mobile menu state
   */
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  /**
   * scrolling state - used for hiding header on scroll
   */
  const { isScrolled, isVisible } = useScrollPosition();

  /**
   * home page specific check
   */
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      className={`${
        isScrolled
          ? "bg-white shadow-sm"
          : isHomePage
            ? "bg-transparent"
            : "bg-white"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}
        fixed w-full top-0 z-40 transition-all duration-300`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8"
      >
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <Image
            alt=""
            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            width={100}
            height={100}
            className="h-8 w-auto"
          />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`${isHomePage ? (isScrolled ? "text-primary" : "text-white") : "text-primary"} -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {primaryMenu.map((item) => {
            if (item.submenu && item.submenu.length > 0) {
              return (
                <Popover
                  key={item.id}
                  className="relative focus-visible:outline-1 focus-visible:outline-primary focus-visible:p-2"
                >
                  <PopoverButton
                    key={item.id}
                    className="focus-visible:outline-0 cursor-pointer"
                  >
                    <p
                      className={`${
                        isScrolled
                          ? "text-primary"
                          : isHomePage
                            ? "text-white"
                            : "text-primary"
                      } text-lg/6 font-semibold hover:text-accent transition-colors duration-300`}
                      defaultChecked={item.id === primaryMenu[0].id}
                    >
                      {item.label}
                    </p>
                  </PopoverButton>
                  {item.submenu && (
                    <PopoverPanel
                      anchor="bottom start"
                      className="flex flex-col gap-2 p-3 bg-white rounded-box shadow-sm z-50"
                    >
                      {item.submenu.map((submenuItem) => (
                        <a
                          key={submenuItem.id}
                          href={submenuItem.path}
                          className="text-primary text-sm/6 font-semibold hover:text-accent transition-colors duration-300"
                        >
                          {submenuItem.label}
                        </a>
                      ))}
                    </PopoverPanel>
                  )}
                </Popover>
              );
            } else {
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  className={`${
                    isScrolled
                      ? "text-primary"
                      : isHomePage
                        ? "text-white"
                        : "text-primary"
                  } text-lg/6 font-semibold hover:text-secondary transition-colors duration-300`}
                >
                  {item.label}
                </Link>
              );
            }
          })}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                width={100}
                height={100}
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-secondary"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <ul className="menu w-full">
                  {primaryMenu.map((item) => {
                    if (item.submenu && item.submenu.length > 0) {
                      return (
                        <li key={item.id}>
                          <details open={false} className="text-primary">
                            <summary className="menu-active-secondary">
                              <a
                                href={item.path}
                                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-primary hover:text-accent menu-dropdown-toggle menu-dropdown-show"
                              >
                                {item.label}
                              </a>
                            </summary>
                            {item.submenu.map((subitem) => (
                              <li key={subitem.id}>
                                <a
                                  href={subitem.path}
                                  className="mx-3 block rounded-lg px-6 py-2 text-base/7 font-semibold text-primary hover:text-accent"
                                >
                                  {subitem.label}
                                </a>
                              </li>
                            ))}
                          </details>
                        </li>
                      );
                    } else {
                      return (
                        <li key={item.id} className="px-3">
                          <a
                            href={item.path}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-primary hover:text-accent"
                          >
                            {item.label}
                          </a>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
