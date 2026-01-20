import Sidebar from "@/ui/layout/Sidebar";

export default function CorporateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-between lg:flex-row min-h-screen w-full max-w-8xl py-32 px-6 lg:px-8 bg-white dark:bg-black sm:items-start gap-x-8">
      {/* content */}
      <main className="grow flex flex-col items-center justify-between sm:items-start gap-32 gap-x-8 sm:basis-full md:basis-4/5 overflow-x-clip">
        {children}
      </main>
      {/* sidebar */}
      <div className="shrink grow mx-auto sm:w-96 sm:basis-full md:basis-1/5">
        <Sidebar />
      </div>
    </div>
  );
}
