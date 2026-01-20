import Image from "next/image";
import Link from "next/link";

export default function Cta() {
  return (
    <div className="bg-white w-screen">
      <div className="mx-auto w-full">
        <div className="relative isolate overflow-hidden bg-gray-400 text-center">
          <Image
            alt=""
            src="/images/pendennis-point-falmouth.jpg"
            fill
            className="absolute inset-0 -z-20 size-full object-cover mix-blend-multiply saturate-0"
          />
          <div className="absolute top-0 size-full overlay bg-primary opacity-20 mix-blend-soft-light -z-10" />
          <div className="p-24">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              Subscribe to our newsletter
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300">
              Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
              anim id veniam aliqua proident excepteur commodo do ea.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                type="button"
                className="rounded-field btn btn-primary text-sm font-semibold shadow-xs "
              >
                <Link href="/contact" className="text-white">
                  Subscribe
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
