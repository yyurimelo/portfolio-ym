import About from "./sections/about/page";
import Hero from "./sections/hero/page";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Hero />
      <About />
    </main>
  );
}
