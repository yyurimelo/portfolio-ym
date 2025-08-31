import { AuroraText } from "@/components/magicui/aurora-text";
import { CardsFrontEnd } from "./cards-front-end";

export default function FrontEndSkills() {
  return (
    <div className="flex flex-col md:flex-row md:justify-center md:items-start md:space-x-8 space-y-8 md:space-y-0">
      <div className="text-start text-xs md:w-1/3 max-w-md md:px-4">
        <AuroraText className="font-bold text-2xl md:text-6xl">
          FRONT-END
        </AuroraText>
        <p className="text-sm md:text-base text-muted-foreground">
          Atuo no desenvolvimento front-end utilizando HTML, CSS, JavaScript,
          TypeScript, React, Next.js e React Native. Além disso, tenho
          experiência com Figma, criando protótipos e designs colaborativos.
          Aliado a ferramentas como Tailwind CSS e ShadCN/UI, crio interfaces
          responsivas e de alto desempenho, garantindo uma experiência de
          usuário fluida e agradável.
        </p>
      </div>
      <div>
        <AuroraText className="font-bold text-2xl md:text-6xl">
          HABILIDADES
        </AuroraText>
        <CardsFrontEnd />
      </div>
    </div>
  );
}
