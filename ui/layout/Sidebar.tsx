"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryMenu } from "@/data/menus";

export default function Sidebar() {
  const pathname = usePathname();

  // Find the current parent menu item based on pathname
  const currentParent = primaryMenu.find((item) =>
    pathname.startsWith(item.path),
  );

  // If no parent found or no submenu, don't render sidebar
  if (!currentParent || !currentParent.submenu) {
    return null;
  }

  return (
    <aside className="shrink w-full grow-0 basis-1/5 bg-primary text-primary-content rounded-box shadow-md">
      <div className="p-6">
        {/* parent menu title */}
        <h2 className="text-md font-semibold text-primary-content uppercase tracking-wider mb-4">
          {currentParent.label}
        </h2>

        {/* submenu links */}
        <nav className="space-y-1">
          {currentParent.submenu.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.id}
                href={item.path}
                className={`
                    block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                    ${
                      isActive
                        ? "bg-accent text-primary-content"
                        : "text-primary-content hover:bg-accent"
                    }
                  `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
