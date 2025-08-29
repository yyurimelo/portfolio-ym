import { AuroraText } from "@/components/magicui/aurora-text";
import { CardsBackEnd } from "./cards-back-end";

export default function BacktEndSkills() {
  return (
    <div className="flex flex-col md:flex-row md:justify-center md:items-start md:space-x-8 space-y-8 md:space-y-0">
      <div className="text-start text-xs md:w-1/3 max-w-md md:px-4">
        <AuroraText className="font-bold text-2xl md:text-6xl">
          BACK-END
        </AuroraText>
        <p className="text-sm md:text-base text-muted-foreground">
          No back-end, atuo com C#, Node.js e NestJS, desenvolvendo APIs
          robustas e escaláveis. Trabalho com bancos de dados relacionais e não
          relacionais, como MySQL e MongoDB, além de utilizar ORMs para
          facilitar o gerenciamento de dados. Tenho também vivência em
          autenticação, arquitetura RESTful e integração de APIs, garantindo a
          segurança e a performance das aplicações.
        </p>
      </div>
      <div>
        <AuroraText className="font-bold text-2xl md:text-6xl">
          HABILIDADES
        </AuroraText>
        <CardsBackEnd />
      </div>
    </div>
  );
}
