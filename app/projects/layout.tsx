export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full max-w-8xl flex-col items-center justify-start py-32 px-6 lg:px-8 bg-white dark:bg-black sm:items-start gap-16 gap-x-8">
      {children}
    </main>
  );
}
