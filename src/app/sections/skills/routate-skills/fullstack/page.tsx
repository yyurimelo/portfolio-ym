"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { CardsFullstack } from "./cards-fullstack";
import { useIsMobile } from "@/app/hooks/use-mobile";

import { motion } from "motion/react";

export default function FullStackSkills() {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col md:flex-row md:justify-center md:items-start md:space-x-8 space-y-8 md:space-y-0 md:gap-20"
    >
      <div className="text-start text-xs md:w-1/3 max-w-md md:px-4">
        <AuroraText className="font-bold text-2xl md:text-6xl">
          FULL STACK
        </AuroraText>
        <p className="text-sm md:text-base text-muted-foreground">
          Atuo como desenvolvedor full stack, com domínio em tecnologias de
          front-end como HTML, CSS, JavaScript, TypeScript, React e Next.js,
          aliadas a ferramentas modernas como Tailwind CSS e ShadCN UI para
          construção de interfaces responsivas e performáticas. No back-end,
          tenho experiência com Node.js, NestJS, .NET com C#, e bancos de dados
          relacionais e não relacionais como MySQL e MongoDB. <br></br>
          <br></br> Também trabalho com ORMs, autenticação, arquitetura RESTful,
          e integração de APIs. Minha stack me permite desenvolver aplicações
          completas — da concepção visual até a estrutura de dados e lógica de
          negócio no servidor — com foco em escalabilidade, performance e boas
          práticas de desenvolvimento.
        </p>
      </div>
      <p className="flex items-end justify-end text-sm text-muted-foreground md:hidden">
        {"Arraste >"}
      </p>
      <div>
        <AuroraText className="font-bold text-2xl md:text-6xl">
          HABILIDADES
        </AuroraText>
        <CardsFullstack />
      </div>
    </motion.div>
  );
}
