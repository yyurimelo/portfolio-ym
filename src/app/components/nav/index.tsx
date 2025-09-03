"use client";

import { ModeToggle } from "@/components/ui/mode-toggle";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Nav() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setShowHeader(true);
      else setShowHeader(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", id: "start" },
    { label: "Stacks", id: "skills" },
    { label: "Projetos", id: "portfolio" },
    { label: "Contato", id: "contact" },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 px-4 pb-4 transition-transform duration-300",
        showHeader ? "translate-y-0" : "-translate-y-[50rem]"
      )}
    >
      <div className="max-w-container relative mx-auto flex justify-center items-center">
        <nav className="flex gap-6 mt-4 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className="text-sm font-medium hover:text-secondary-foreground/50 transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
