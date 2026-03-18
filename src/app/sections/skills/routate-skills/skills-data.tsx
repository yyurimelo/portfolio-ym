import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaGithub
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import {
  SiZod,
  SiNextdotjs,
  SiShadcnui,
  SiReactquery,
  SiVite,
  SiDotnet,
  SiNestjs,
  SiExpress,
  SiPrisma,
  SiMysql,
  SiSpringboot,
  SiReactrouter,
  SiRailway
} from "react-icons/si";
import {
  BiLogoTypescript,
  BiLogoMongodb,
  BiLogoPostgresql
} from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa6";
import { SkillIcon } from "./skills-grid";

export const skillsData = {
  frontend: {
    title: "FRONT-END",
    description: (
      <>
        No front-end, construo interfaces modernas, responsivas e de alto desempenho utilizando React, Next.js e TypeScript como base, aliados a Tailwind CSS e ShadCN/UI para composição visual eficiente. <br /> <br />Para gerenciamento de estado e dados assíncronos, utilizo React Query e TanStack Router. Para validação e formulários, trabalho com Zod e React Hook Form. Em projetos mobile, atuo com React Native e Expo. Também utilizo Figma para prototipação e colaboração no design.
      </>
    ),
    icons: [
      { icon: <FaHtml5 className="text-[#E34F26] size-12" /> },
      { icon: <IoLogoCss3 className="text-[#3366CC] size-12" /> },
      { icon: <IoLogoJavascript className="text-[#F7DF1E] size-12" /> },
      { icon: <FaReact className="text-[#61DAFB] size-12" /> },
      { icon: <BiLogoTypescript className="text-[#3178C6] size-12" /> },
      { icon: <SiNextdotjs className="size-12" /> },
      { icon: <SiVite className="text-[#9135FF] size-12" /> },
      { icon: <RiTailwindCssFill className="text-[#06B6D4] size-12" /> },
      { icon: <SiShadcnui className="size-12" /> },
      { icon: <SiReactquery className="text-[#FF4154] size-12" /> },
      { icon: <SiZod className="text-[#408AFF] size-12" /> },
      { icon: <SiReactrouter className="text-[#CA4245] size-12" /> },
      { icon: <FaFigma className="text-[#F24E1E] size-12" /> },
      { icon: <IoLogoVercel className="size-12" /> },
    ] as SkillIcon[]
  },
  backend: {
    title: "BACK-END",
    description: (
      <>
        No back-end, desenvolvo APIs robustas e escaláveis com Node.js, NestJS, Express, C# .NET e Java Spring Boot, seguindo princípios de arquitetura limpa, SOLID e DDD. <br /> <br />Para persistência de dados, trabalho com PostgreSQL e MongoDB, utilizando ORMs como Prisma, Entity Framework e Mongoose. Tenho experiência com autenticação via OAuth 2.0, comunicação em tempo real com SignalR, integração com Supabase e arquitetura RESTful — garantindo segurança, performance e manutenibilidade nas aplicações.
      </>
    ),
    icons: [
      { icon: <SiDotnet className="text-[#512BD4] size-12" /> },
      { icon: <FaNodeJs className="text-[#5FA04E] size-12" /> },
      { icon: <SiNestjs className="text-[#E0234E] size-12" /> },
      { icon: <FaJava className="text-[#E0234E] size-12" /> },
      { icon: <SiSpringboot className="text-[#6DB33F] size-12" /> },
      { icon: <SiExpress className="size-12" /> },
      { icon: <BiLogoMongodb className="text-[#47A248] size-12" /> },
      { icon: <SiPrisma className="text-[#2D3748] size-12" /> },
      { icon: <BiLogoPostgresql className="text-[#4169E1] size-12" /> },
      { icon: <SiMysql className="text-[#4479A1] size-12" /> },
      { icon: <FaDocker className="text-[#2496ED] size-12" /> },
    ] as SkillIcon[]
  },
  fullstack: {
    title: "FULL STACK",
    description: (
      <>
        Atuo como desenvolvedor full stack, cobrindo todo o ciclo de uma aplicação — da interface ao servidor, do banco de dados ao deploy em produção. <br /> <br />No front-end, trabalho com React, Next.js, TypeScript, Tailwind CSS e ShadCN/UI, construindo interfaces responsivas, performáticas e com foco em experiência do usuário. No back-end, desenvolvo APIs robustas com Node.js, NestJS, C# .NET e Java Spring Boot, integradas a bancos de dados relacionais e não relacionais como PostgreSQL e MongoDB. <br /> <br />Minha stack me permite construir aplicações completas com foco em escalabilidade, arquitetura limpa, boas práticas e entrega de valor real — do zero ao deploy.
      </>
    ),
    icons: [
      { icon: <FaHtml5 className="text-[#E34F26] size-12" /> },
      { icon: <IoLogoCss3 className="text-[#3366CC] size-12" /> },
      { icon: <IoLogoJavascript className="text-[#F7DF1E] size-12" /> },
      { icon: <FaReact className="text-[#61DAFB] size-12" /> },
      { icon: <BiLogoTypescript className="text-[#3178C6] size-15" /> },
      { icon: <SiNextdotjs className="size-12" /> },
      { icon: <SiVite className="text-[#9135FF] size-12" /> },
      { icon: <RiTailwindCssFill className="text-[#06B6D4] size-12" /> },
      { icon: <SiShadcnui className="size-12" /> },
      { icon: <SiReactquery className="text-[#FF4154] size-12" /> },
      { icon: <SiZod className="text-[#408AFF] size-12" /> },
      { icon: <SiReactrouter className="text-[#CA4245] size-12" /> },
      { icon: <FaFigma className="text-[#F24E1E] size-12" /> },
      { icon: <SiDotnet className="text-[#512BD4] size-12" /> },
      { icon: <FaNodeJs className="text-[#5FA04E] size-12" /> },
      { icon: <SiNestjs className="text-[#E0234E] size-12" /> },
      { icon: <FaJava className="text-[#E0234E] size-12" /> },
      { icon: <SiSpringboot className="text-[#6DB33F] size-12" /> },
      { icon: <SiExpress className="size-12" /> },
      { icon: <BiLogoMongodb className="text-[#47A248] size-12" /> },
      { icon: <SiPrisma className="text-[#2D3748] size-12" /> },
      { icon: <BiLogoPostgresql className="text-[#4169E1] size-12" /> },
      { icon: <SiMysql className="text-[#4479A1] size-12" /> },
      { icon: <FaDocker className="text-[#2496ED] size-12" /> },
      { icon: <FaGithub className="size-12" /> },
      { icon: <IoLogoVercel className="size-12" /> },
      { icon: <SiRailway className="size-12" /> },
    ] as SkillIcon[]
  }
} as const;

export type SkillsCategory = keyof typeof skillsData;
