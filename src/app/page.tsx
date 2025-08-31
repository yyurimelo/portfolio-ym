import About from "./sections/about/page";
import Hero from "./sections/hero/page";
import Portfolio from "./sections/portfolio/page";

import Skills from "./sections/skills/page";
import Works from "./sections/work/page";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Works />
    </main>
  );
}
