"use client"

import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import YmIcon from "@/components/logos/ym-icon";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "@/components/ui/footer";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

interface FooterLink {
  label: string;
  href?: string;
  id?: string;
  icon?: ReactNode;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
  socialLinks?: FooterLink[];
}

export default function FooterSection({
  logo = <YmIcon className="size-12" />,
  columns = [
    {
      title: "Links rápidos",
      links: [
        { label: "Início", id: "start" },
        { label: "Stacks", id: "skills" },
        { label: "Projetos", id: "portfolio" },
        { label: "Contato", id: "contact" },
      ],
    },
  ],
  copyright = "© Yuri Melo 2025 - Todos os direitos reservados.",
  socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/yyurimelo/",
      icon: <InstagramLogoIcon className="h-5 w-5" />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yyurimelo/",
      icon: <LinkedInLogoIcon className="h-5 w-5" />,
    },
    {
      label: "GitHub",
      href: "https://github.com/yyurimelo/portfolio-ym",
      icon: <GitHubLogoIcon className="h-5 w-5" />,
    },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className={cn(
        "bg-background w-full px-4 border-t border-primary",
        className
      )}
    >
      <div className="max-w-container mx-auto md:mx-50">
        <Footer>
          <FooterContent>

            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center justify-center md:justify-start gap-2">
                {logo}
              </div>
            </FooterColumn>


            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                <div className="flex gap-4 flex-wrap w-[300px]">
                  {column.links.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleScrollTo(link.id!)}
                      className="text-muted-foreground text-sm cursor-pointer hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </FooterColumn>
            ))}
          </FooterContent>

          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">

              {socialLinks.length > 0 && (
                <div className="flex items-center gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-80"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              )}

              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
