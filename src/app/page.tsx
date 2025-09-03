import Nav from "./components/nav";
import About from "./sections/about/page";
import Hero from "./sections/hero/page";


import Portfolio from "./sections/portfolio/page";

import Skills from "./sections/skills/page";
import Contact from "./sections/contact/page";
import FooterSection from "./sections/footer/default";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <FooterSection />
    </main>
  );
}
