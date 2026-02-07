import Cta from "@/ui/home/Cta";
import Hero from "@/ui/home/Hero";
import Welcome from "@/ui/home/Welcome";
import LatestNews from "@/ui/news/LatestNews";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex min-h-screen w-full max-w-8xl flex-col items-center justify-between py-32 px-6 lg:px-8 bg-white   sm:items-start gap-32">
        <Welcome />
        <LatestNews />
      </main>
      <Cta />
    </>
  );
}
