"use client"

import { BoxReveal } from "@/components/magicui/box-reveal";
import { Particles } from "@/components/magicui/particles";
import { Section } from "@/components/ui/section";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactButton } from "./contact-details";
import Me from "./me/page";

import {
  FaHtml5,
  FaReact,
  FaGithub,
  FaJava,
  FaNodeJs
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiMysql,
  SiDotnet,
  SiNestjs,
  SiSpringboot,
  SiExpress,
  SiAndroidstudio,
  SiTypescript
} from "react-icons/si";
import { FaFigma } from "react-icons/fa6";


const icons = [
  { component: <IoLogoJavascript className="text-[#F7DF1E] dark:text-white size-7" /> },
  { component: <SiTypescript className="text-[#3178C6] dark:text-white size-6" /> },
  { component: <FaReact className="text-[#61DAFB] dark:text-white size-7" /> },
  { component: <SiNextdotjs className="dark:text-white size-7" /> },
  { component: <SiVite className="text-[#9135FF] dark:text-white size-7" /> },
  { component: <SiAndroidstudio className="text-[#4FC08F] dark:text-white size-7" /> },
  { component: <FaHtml5 className="text-[#E34F26] dark:text-white size-7" /> },
  { component: <IoLogoCss3 className="text-[#3366CC] dark:text-white size-7" /> },
  { component: <FaGithub className="dark:text-white size-7" /> },
  { component: <FaFigma className="text-[#F24E1E] dark:text-white size-7" /> },
  { component: <SiTailwindcss className="text-[#06B6D4] dark:text-white size-7" /> },
  { component: <SiMysql className="text-[#4479A1] dark:text-white size-7" /> },
  { component: <SiDotnet className="text-[#512BD4] dark:text-white size-7" /> },
  { component: <FaNodeJs className="text-[#5FA04E] dark:text-white size-7" /> },
  { component: <SiNestjs className="text-[#E0234E] dark:text-white size-7" /> },
  { component: <FaJava className="text-[#E0234E] dark:text-white size-7" /> },
  { component: <SiSpringboot className="text-[#6DB33F] dark:text-white size-7" /> },
  { component: <SiExpress className="dark:text-white size-7" /> },
];

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
                    {"<"}Desenvolvedor full-stack{" "}
                    <span className="text-primary"> | UX DESIGNER {"/>"}</span>
                  </h2>
                </div>
              </BoxReveal>

              <BoxReveal boxColor={"#ab0fff"} duration={0.5}>
                <div className="mt-2 text-xs md:text-[1rem]">
                  <p className="text-left">
                    Olá, me chamo Yuri Melo, tenho {age} anos e atualmente trabalho
                    como full-stack. <br />
                  </p>
                  <div className="flex flex-wrap gap-2 text-[0.9rem] mt-2 items-center">
                    {icons.map((icon, index) => (
                      <div key={index} className="flex items-center justify-center">
                        {icon.component}
                      </div>
                    ))}
                  </div>
                </div>
              </BoxReveal>

              <BoxReveal boxColor={"#ab0fff"} duration={0.5}>
                <div className="flex items-center mt-[1.6rem] gap-2 h-9">
                  <ContactButton />
                  <Button asChild className="rounded-full h-full" variant="outline">
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