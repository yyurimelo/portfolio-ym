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
          icon: <Globe className="size-3" />,
        },
      ],
      image: "",
      video: "/agile-preview-cut.mp4",
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
      image: "",
      video: "/agile-docs-preview.mp4",
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
      image: "",
      video: "/landing-page-agile-preview.mp4",
    },
    {
      title: "E-commerce Estudantil",
      href: "",
      dates: "Fev 2024 - Jan 2025",
      active: true,
      resume: "Plataforma de e-commerce para o Grêmio Estudantil.",
      description: `Desenvolvimento de uma plataforma de e-commerce voltada para o Grêmio Estudantil, permitindo que estudantes comprem uniformes e produtos escolares de maneira digital e organizada.

Aspectos técnicos:
- Front-end desenvolvido com Next.js e TailwindCSS para responsividade e usabilidade.
- Back-end em NestJS com MongoDB, garantindo escalabilidade e confiabilidade.
- Sistema de gerenciamento de pedidos, produtos e encomendas.
- Implementação de funcionalidades de autenticação e controle de usuários.

Objetivos:
- Digitalizar a venda de uniformes e produtos escolares.
- Simplificar o processo de gerenciamento pelo Grêmio Estudantil.
- Proporcionar experiência prática e intuitiva para os alunos.

Resultados:
- Plataforma ativa, utilizada por estudantes para realizar compras e encomendas de forma organizada e segura.`,
      technologies: ["React", "Next.js", "Javascript", "TailwindCSS", "MongoDB", "Nest.js"],
      links: [],
      image: "",
      video: "/project-gremio-preview.mp4",
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
      image: "/mobi-login.jpg",
      video: "",
      links: [],
    },
  ],
};
