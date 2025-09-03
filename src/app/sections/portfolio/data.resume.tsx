import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Globe } from "lucide-react";

export const DATA = {
  projects: [
    {
      title: "Agile - Dashboard",
      href: "https://agile.3code.com.br/",
      dates: "Jan 2025 - Atual",
      active: true,
      resume: "Atualmente desenvolvendo o sistema de tickets da plataforma Agile da 3Code.",
      description: `Projeto em andamento no desenvolvimento do sistema de tickets da plataforma Agile, uma ferramenta inteligente de gerenciamento de tarefas da 3Code. O foco principal é otimizar processos internos, melhorar a eficiência operacional da equipe e garantir que todas as tarefas sejam acompanhadas de forma precisa.

Aspectos técnicos:
- Desenvolvimento contínuo com React e Vite, garantindo performance e escalabilidade.
- Integração com inteligência artificial para automação de tarefas repetitivas.
- Interface minimalista, personalizável e intuitiva para os usuários.
- Monitoramento de métricas de desempenho e progresso das equipes.
- Sistema de agendamento centralizado e notificações inteligentes.

Objetivos do projeto:
- Reduzir retrabalho e atrasos de tarefas.
- Melhorar a produtividade e transparência do gerenciamento de tickets.
- Proporcionar uma experiência de usuário eficiente e confiável.

Resultados esperados:
- Plataforma robusta e escalável, pronta para futuras funcionalidades e integrações.`,
      technologies: [
        "React",
        "Vite",
        "Typescript",
        "TailwindCSS",
        "C#",
        "Dotnet",
        "React Query",
        "React Router DOM",
      ],
      links: [
        {
          type: "Website",
          href: "https://agile.3code.com.br/",
          icon: <Globe />,
        },
      ],
      media: {
        image: null,
        video: "/agile-preview-cut.mp4",
        video2: "/agile-preview.mp4",
        wallpaper: null,
        carousel: null,
      },
    },
    {
      title: "Documentação do Agile",
      href: "https://agile-docs.3code.com.br/",
      dates: "Mai 2025 - Ago 2025",
      active: true,
      resume: "Documentação completa do Agile detalhando funcionalidades e fluxos.",
      description: `Responsável por criar a documentação completa da plataforma Agile, detalhando todos os módulos, fluxos de trabalho e funcionalidades da aplicação. O objetivo foi fornecer uma referência completa para desenvolvedores, novos usuários e equipes de suporte.

Aspectos técnicos:
- Criação de documentação estruturada usando Mintlify e MDX.
- Organização clara para facilitar manutenção futura.
- Inclusão de exemplos de uso, fluxos detalhados e melhores práticas.
- Estrutura visual limpa e consistente para fácil leitura.

Objetivos do projeto:
- Facilitar o onboarding de novos desenvolvedores.
- Garantir consistência na utilização da plataforma.
- Documentar processos críticos para futuras atualizações.

Resultados:
- Documentação acessível e detalhada, permitindo rápida compreensão do sistema por qualquer membro da equipe.`,
      technologies: ["Mintlify", "MDX", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://agile-docs.3code.com.br/",
          icon: <Globe className="size-3" />,
        },
      ],
      media: {
        image: null,
        video: "/agile-docs-preview.mp4",
        video2: null,
        wallpaper: null,
        carousel: null,
      },
    },
    {
      title: "Landing page Agile",
      href: "https://agile.3code.com.br/",
      dates: "Jul 2025 - Ago 2025",
      active: true,
      resume: "Desenvolvi a landing page do Agile com interface intuitiva e design responsivo.",
      description: `Desenvolvimento da landing page da plataforma Agile, com foco em experiência do usuário, clareza na apresentação de informações e performance em múltiplos dispositivos.

Aspectos técnicos:
- Layout responsivo com TailwindCSS, adaptável a smartphones, tablets e desktops.
- Utilização de Next.js e React para renderização otimizada e SEO.
- Integração de animações sutis e componentes Shadcn UI.
- Otimização de imagens e vídeos para carregamento rápido.

Objetivos:
- Apresentar a plataforma Agile de forma clara e profissional.
- Melhorar conversão de visitantes em usuários.
- Garantir consistência visual e navegabilidade em todos os dispositivos.

Resultados:
- Landing page rápida, elegante e funcional, refletindo a qualidade da plataforma Agile.`,
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn",
        "Magicui",
      ],
      links: [
        {
          type: "Website",
          href: "https://agile.3code.com.br/",
          icon: <Globe className="size-3" />,
        },
      ],
      media: {
        image: null,
        video: "/landing-page-agile-preview.mp4",
        video2: null,
        wallpaper: null,
        carousel: null,
      },
    },
    {
      title: "E-commerce Estudantil",
      href: "",
      dates: "Fev 2024 - Jan 2025",
      active: true,
      resume: "Plataforma de e-commerce para o Grêmio Estudantil.",
      description: `Projeto de TCC desenvolvido no CEFET com o objetivo de criar uma plataforma de e-commerce para o Grêmio Estudantil, permitindo que estudantes comprem uniformes e produtos escolares de maneira digital e organizada. O projeto surgiu como uma solução para substituir o processo totalmente manual, que era feito à mão e com planilhas, e também serviu como uma oportunidade de aprendizado prático em Next.js, framework que eu estava estudando no momento.

Aspectos técnicos:
- Front-end desenvolvido com Next.js e TailwindCSS, garantindo responsividade, usabilidade e experiência intuitiva para os alunos.
- Back-end implementado em NestJS com MongoDB, oferecendo escalabilidade, confiabilidade e gerenciamento robusto de dados.
- Sistema completo de gerenciamento de pedidos, produtos e encomendas, facilitando o controle do Grêmio Estudantil.
- Funcionalidades de autenticação e controle de usuários, garantindo segurança e organização.
- Integração entre front-end e back-end para uma experiência fluida e confiável.

Objetivos:
- Digitalizar a venda de uniformes e produtos escolares, substituindo métodos manuais.
- Simplificar o processo de gestão do Grêmio Estudantil, tornando-o mais organizado e eficiente.
- Proporcionar uma experiência prática e intuitiva para os alunos, incentivando o uso da plataforma.

Resultados:
- Plataforma ativa e em uso pelos estudantes da escola, que agora realizam suas compras e encomendas de forma segura e organizada.
- Experiência prática significativa para meu desenvolvimento como desenvolvedor fullstack.
- Consolidação de habilidades em Next.js, NestJS e MongoDB, com visão completa de um projeto de e-commerce real.`,
      technologies: ["React", "Next.js", "Javascript", "TailwindCSS", "MongoDB", "Nest.js"],
      links: [
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/posts/yyurimelo_para-concluir-meu-curso-no-cefet-e-finalmente-activity-7333888670950658048-TeNv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFd2HhYBH2JIxcWjOSWC_80nF8elcoqKbbQ",
          icon: <LinkedInLogoIcon />,
        },
      ],
      media: {
        image: null,
        video: "/project-gremio-preview.mp4",
        video2: null,
        wallpaper: null,
        carousel: null,
      },
    },
    {
      title: "MOBI",
      href: "",
      dates: "Fev 2023 - Dez 2023",
      active: true,
      resume: "Aplicativo mobile para registrar itinerários de estudantes do CEFET/RJ - NI.",
      description: `Desenvolvimento do aplicativo MOBI, destinado a registrar itinerários de estudantes do CEFET/RJ - NI. O projeto buscou otimizar o mapeamento de rotas, permitindo que alunos visualizassem trajetos e horários de forma eficiente.

Aspectos técnicos:
- Aplicativo mobile desenvolvido com React Native e Expo.
- Integração com API de geolocalização OpenStreetMap para captura de latitude e longitude.
- Backend em Java Spring Boot com API RESTful.
- Estilização e layout responsivo utilizando TailwindCSS.
- Testes realizados em Android Studio para validação de funcionalidades.

Objetivos:
- Facilitar o registro e acompanhamento de itinerários de estudantes.
- Fornecer informações precisas sobre rotas e horários.
- Reduzir erros e otimizar a logística de transporte escolar.

Resultados:
- Aplicativo funcional, eficiente e utilizado pelos estudantes.
- Conquista do 1º lugar na SEPEX e apresentações em eventos de tecnologia como FECTI.`,
      technologies: [
        "React Native",
        "Expo",
        "TailwindCSS",
        "Java Spring Boot",
        "OpenStreetMap API",
      ],
      links: [
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/posts/yyurimelo_quero-compartilhar-com-voc%C3%AAs-um-dos-meus-activity-7354866599155187712-spBa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFd2HhYBH2JIxcWjOSWC_80nF8elcoqKbbQ",
          icon: <LinkedInLogoIcon />,
        },
      ],
      media: {
        image: null,
        video: null,
        video2: null,
        wallpaper: "/mobi-wallpaper.jpeg",
        carousel: [
          "/mobi-sign-in.jpeg",
          "/mobi-dashboard.jpeg",
          "/mobi-form.jpeg",
          "/mobi-router.jpeg",
        ],
      },
    },
  ],
};