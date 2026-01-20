"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="relative flex flex-col justify-center isolate overflow-hidden h-screen bg-gray-300 ">
        <Image
          alt=""
          src="/images/beach.jpg"
          width={1920}
          height={1080}
          priority
          className="absolute inset-0 -z-20 size-full object-cover mix-blend-multiply"
        />
        <div className="absolute top-0 size-full overlay bg-primary opacity-10 mix-blend-overlay -z-10"></div>
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-200 text- ring-1 ring-info/90 hover:ring-info/50">
                A place for a special announcement &nbsp;
                <Link
                  href="/corporate/about"
                  prefetch={true}
                  className="font-semibold text-white hover:text-accent"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                Your Company Tagline Goes Here
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8 max-w-xl ml-auto mr-auto ">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/news"
                  prefetch={true}
                  className="btn btn-primary offset-2"
                >
                  Latest News
                </Link>
                <Link
                  href="/corporate/about"
                  prefetch={true}
                  className="text-sm/6 font-semibold text-white hover:text-accent"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
