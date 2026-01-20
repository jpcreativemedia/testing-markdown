import Link from "next/link";
import { primaryMenu } from "@/data/menus";
import { socials } from "@/data/socials";

export default function Foooter() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {primaryMenu.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.path}
                className="text-primary hover:text-accent"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          {socials.map((item) => {
            return (
              <a
                key={item.id}
                href={item.href}
                className="text-gray-600 hover:text-gray-800"
              >
                <span className="sr-only">{item.label}</span>
                {item.icon ? (
                  <item.icon className="size-6 hover:fill-accent" />
                ) : null}
              </a>
            );
          })}
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-600">
          &copy; 2026 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
