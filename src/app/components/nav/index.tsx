"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#start" },
    { label: "Stacks", href: "#skills" },
    { label: "Projetos", href: "#portfolio" },
    { label: "Contato", href: "#contact" },
  ];


  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 px-4 pb-4 transition-transform duration-300",
        showHeader ? "translate-y-0" : "-translate-y-[50rem]"
      )}

    >
      <div className="max-w-container relative mx-auto flex justify-center items-center">
        <nav className="flex gap-6 mt-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-secondary-foreground/50 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
