import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import type { menuItems } from "@/types";

export function SubMenu({ submenuItems }: { submenuItems: menuItems[] }) {
  return (
    <Popover className="relative">
      <PopoverButton>Solutions</PopoverButton>
      <PopoverPanel anchor="bottom" className="flex flex-col">
        {submenuItems.map((item) => (
          <a key={item.id} href={item.path}>
            {item.label}
          </a>
        ))}
      </PopoverPanel>
    </Popover>
  );
}
