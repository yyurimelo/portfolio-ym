"use client"

import { BoxReveal } from "@/components/magicui/box-reveal";
import { Particles } from "@/components/magicui/particles";
import { Section } from "@/components/ui/section";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ContactButton } from "./contact-details";
import Me from "./me/page";


const slugs = [
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "vite",
  "androidstudio",
  "html5",
  // "css3",
  // "docker",
  "github",
  "figma",
  "tailwindcss",
  "mysql",
  "dotnet",
  "nestjs"
];

const images = slugs.map(
  (slug) =>
    `https://cdn.simpleicons.org/${slug.toLowerCase()}/${slug.toLowerCase()}/white`
);


export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const nowYear = new Date().getFullYear();
  const birthYear = 2006;
  const age = nowYear - birthYear;

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <Section id="start" className="flex min-h-screen items-center justify-center relative ">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <div className="max-w-container mx-auto flex flex-col gap-12 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          <div className="flex flex-col-reverse md:flex-row gap-10 items-center md:items-start">
            <div>
              <BoxReveal boxColor={"#ab0fff"} duration={0.5}>
                <p className="md:text-[3rem] text-2xl font-semibold">
                  Yuri Melo<span className="text-primary">.</span>
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#ab0fff"} duration={0.5}>
                <div className="md:flex flex md:items-center text-left text-xs md:text-[1rem]">
                  <h2>
                    {"<"}Desenvolvedor Full stack{" "}
                    <span className="text-primary"> | UX DESIGNER {"/>"}</span>
                  </h2>
                </div>
              </BoxReveal>

              <BoxReveal boxColor={"#ab0fff"} duration={0.5}>
                <div className="mt-2 text-xs md:text-[1rem]">
                  <p className="text-left">
                    Olá, me chamo Yuri Melo, tenho {age} anos e atualmente trabalho
                    como Full stack. <br />
                  </p>
                  <div className="flex flex-wrap gap-2 text-[0.9rem] mt-2">
                    {slugs.map((slug, index) => (
                      <div key={slug} className="flex items-center space-x-1">
                        <Image
                          src={images[index]}
                          alt={`Ícone de ${slug}`}
                          width={20}
                          height={20}
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </BoxReveal>

              <BoxReveal boxColor={"#ab0fff"} duration={0.5}>
                <div className="flex  items-center mt-[1.6rem] gap-2">
                  <ContactButton />
                  <Button asChild className="rounded-full " variant="outline">
                    <a href="Yuri_Melo_dos_Santos.pdf" download>
                      Download CV
                    </a>
                  </Button>
                </div>
              </BoxReveal>
            </div>
            <div>
              <Me />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}