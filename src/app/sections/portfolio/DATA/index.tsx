import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Globe, Sparkles } from "lucide-react";

export const DATA = {
  projects: [
    {
      title: "Flock",
      href: "https://www.flock.cam/",
      dates: "Mai 2026 - Atual",
      active: true,
      resume: "Plataforma de memórias de eventos: convidados enviam fotos e vídeos por um QR code e o anfitrião recebe um Wrapped curado por IA no fim da festa.",
      description: `O Flock é um produto real, em produção, que junta as fotos e os vídeos de todos os convidados de um evento — casamentos, festas de 15 anos, aniversários e confraternizações — por um único QR code. O convidado não baixa aplicativo, não cria conta e não paga nada: aponta a câmera, abre no navegador e envia. Depois da festa, o anfitrião recebe o Wrapped: a noite contada pelos olhos de quem estava lá.

Faço parte do time que constrói o Flock, atuando como full-stack com foco no Wrapped, no painel do anfitrião, na landing e no painel administrativo.

O Wrapped — o diferencial do produto:
Coletar fotos é commodity; o que o Flock entrega é a curadoria. Cada mídia enviada passa por uma fila de classificação com IA que identifica o momento da festa (Retratos, Cerimonial, Pista de dança, Parabéns...) e descarta conteúdo impróprio. O resultado é uma página pronta: capa com o nome do evento, um replay em formato de stories com os números da noite, a galeria organizada por momento, curtidas e comentários, fotolivro em PDF, modo para projetar na festa e um card para compartilhar nos stories. No exemplo do vídeo, o XV da Ana Flor: 356 memórias enviadas por 122 câmeras, separadas em 14 momentos.

Aspectos técnicos — Web (site, criação de evento, painel e Wrapped):
- Next.js com React e TypeScript, organizado por features (rotas só orquestram; lógica em src/features).
- Animações com GSAP e Motion, respeitando prefers-reduced-motion.
- Replay estilo stories, lightbox de foto e vídeo com marca d'água e navegação por gestos (@use-gesture).
- Fotolivro interativo com page-flip e exportação para PDF com jsPDF, idêntico ao preview na tela.
- Painel do anfitrião com QR code personalizável, gerenciamento de mídias e métricas com Recharts.
- Painel administrativo com abas, métricas de venda e listas paginadas.
- Paywall visual por plano e fluxo de checkout com Pix.

Aspectos técnicos — App do convidado:
- Expo (React Native Web) publicado como web app, com câmera, galeria, upload e visor do evento.
- Rolo de câmera "descartável", curtidas e comentários no visor da galeria.

Aspectos técnicos — Back-end:
- Convex como backend reativo: schema, queries, mutations, actions e crons em TypeScript.
- Classificação de momentos por IA com o GPT-5.6 Luna, executada em Workpool com retry exponencial, controle de concorrência e teto de custo por evento.
- Guardrail de conteúdo: mídias impróprias são removidas do banco e do storage automaticamente.
- Armazenamento de mídia no Cloudflare R2 com upload direto por URL assinada.
- Pagamento único via Pix com Abacate Pay e webhooks, incluindo reembolso e lembretes de checkout abandonado.
- E-mails transacionais com Resend, rate limiting e agregações para contadores.

Qualidade & DevOps:
- Monorepo com npm workspaces (apps/web, apps/expo, packages/backend, packages/shared).
- Testes unitários com Vitest e Jest ao lado do código, e smoke tests E2E com Playwright.
- CI com lint, typecheck, knip e jscpd bloqueando código morto e duplicado; deploy do Convex a cada push na main.
- Deploy na Vercel, observabilidade com Sentry e analytics de produto com PostHog.

Resultados:
- Produto em produção com eventos reais já realizados.
- Wrapped que transforma centenas de arquivos soltos em uma experiência curada e compartilhável.
- Experiência prática com produto de verdade: pagamento, IA em fila, storage, métricas e trabalho em time.`,
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Expo",
        "React Native Web",
        "TailwindCSS",
        "GSAP",
        "Motion",
        "Convex",
        "GPT-5.6 Luna",
        "Cloudflare R2",
        "Pix (Abacate Pay)",
        "Resend",
        "Vitest",
        "Playwright",
        "Sentry",
        "PostHog",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.flock.cam/",
          icon: <Globe />,
        },
        {
          type: "Wrapped de exemplo",
          href: "https://www.flock.cam/wrapped/xv-da-ana-flor",
          icon: <Sparkles />,
        },
      ],
      media: {
        image: null,
        video: "/flock-wrapped-preview.mp4",
        video2: null,
        wallpaper: "/flock-wallpaper.png",
        carousel: [
          "/flock-wrapped-cover.png",
          "/flock-wrapped-replay.png",
          "/flock-wrapped-momentos.png",
          "/flock-wrapped-share.png",
        ],
      },
    },
    {
      title: "Flow",
      href: "https://github.com/yyurimelo/flow",
      dates: "Mai 2026 - Jun 2026",
      active: true,
      resume: "Sistema de notificações em tempo real com pipeline assíncrono real: HTTP → RabbitMQ → Redis Pub/Sub → Socket.IO → cliente.",
      description: `Desenvolvi o Flow para estudar sistemas distribuídos na prática. Muitas vezes estudamos conceitos como filas, mensageria, workers e comunicação em tempo real apenas pela teoria — o Flow foi o ambiente onde entendi como tudo isso funciona de verdade.

O objetivo não era apenas criar uma aplicação funcional, mas construir um sistema onde eu pudesse experimentar arquiteturas utilizadas em produtos modernos e entender como essas tecnologias se conectam na prática.

Pipeline de notificações — como funciona:
O frontend envia uma ação para a API. A API, desenvolvida com Express e TypeScript, não processa diretamente a notificação — publica uma mensagem em uma fila do RabbitMQ, desacoplando produtor e consumidor. Um Worker especializado, executando em container Docker separado, consome essa fila e executa o processamento. Após isso, publica um evento via Redis Pub/Sub. O servidor WebSocket está inscrito nesses eventos e distribui as notificações para os clientes conectados. No frontend, os eventos recebidos são aplicados diretamente no cache do TanStack Query, atualizando a interface instantaneamente sem novas requisições.

Aspectos técnicos — Front-end:
- Aplicação desenvolvida com React 19 e Vite, utilizando TypeScript.
- Estilização com Tailwind CSS 4 e ShadCN UI, com suporte a tema claro e escuro.
- Roteamento file-based com TanStack Router.
- Gerenciamento de dados assíncronos com TanStack Query, com atualização de cache em tempo real via WebSocket — sem chamadas extras ao backend após o carregamento inicial.
- Comunicação em tempo real via Socket.IO: novas notificações aparecem no sino e no histórico instantaneamente.
- Validação de formulários com Zod, compartilhado com o backend via pacote interno @flow/shared.
- Arquitetura organizada por features, com hooks personalizados, interceptors Axios e Auth Provider.
- Conteúdo rich-text com sanitização de HTML.

Aspectos técnicos — Back-end:
- API desenvolvida com Express 5 e TypeScript, organizada em camadas: rotas → serviços → repositórios → Prisma.
- Pipeline de notificações assíncrono: API publica no RabbitMQ, worker consome e publica no Redis Pub/Sub, servidor entrega via Socket.IO.
- Socket.IO com Redis Adapter para suporte a múltiplas instâncias.
- MongoDB como banco de dados, acessado via Prisma ORM.
- Schemas e tipos TypeScript compartilhados entre backend e frontend via pacote interno (@flow/shared com Zod).
- Tratamento de erros com classes de exceção tipadas e middleware centralizado.

Autenticação:
- Autenticação por credenciais com JWT Bearer Token.
- Controle de acesso por papel (USER / ADMIN): admins enviam broadcasts de sistema, usuários enviam notificações pessoais.
- Proteção de rotas no frontend via beforeLoad do TanStack Router.

DevOps & Infra:
- Monorepo com npm workspaces (backend, frontend, packages/shared).
- Infraestrutura local via Docker Compose: Redis e RabbitMQ.
- Worker containerizado com suporte a hostnames internos Docker.

Conceitos consolidados na prática:
- Desacoplamento entre serviços e arquitetura orientada a eventos
- Comunicação assíncrona com produtores e consumidores
- Escalabilidade horizontal via workers consumidores
- Containerização de serviços com Docker
- Distribuição de eventos em tempo real
- Gerenciamento eficiente de estado e cache no frontend

Resultados:
- MVP completo e funcional cobrindo backend, frontend, mensageria, tempo real e autenticação.
- Pipeline assíncrono real: HTTP → RabbitMQ → Redis Pub/Sub → Socket.IO → cliente.
- Cache otimista no frontend: socket escreve direto no TanStack Query sem round-trip HTTP.`,
      technologies: [
        "React 19",
        "Vite",
        "TypeScript",
        "TailwindCSS 4",
        "ShadCN UI",
        "TanStack Router",
        "TanStack Query",
        "Socket.IO",
        "Zod",
        "Axios",
        "Node.js",
        "Express 5",
        "RabbitMQ",
        "Redis",
        "MongoDB",
        "Prisma",
        "JWT",
        "Docker",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/yyurimelo/flow",
          icon: <GitHubLogoIcon />,
        },
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/posts/yyurimelo_nodejs-typescript-express-ugcPost-7470469320708358145-1VnD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFd2HhYBH2JIxcWjOSWC_80nF8elcoqKbbQ",
          icon: <LinkedInLogoIcon />,
        },
      ],
      media: {
        image: null,
        video: "/flow-preview.mp4",
        video2: null,
        wallpaper: "/flow-home-page.png",
        carousel: ["/flow-home-page.png", "/flow-notification-detail.png"],
      },
    },
    {
      title: "Lyra Chat",
      href: "https://lyra-chat-five.vercel.app/",
      dates: "2025",
      active: true,
      resume: "Aplicação de chat em tempo real entre amigos, desenvolvida full-stack do zero com C# e React.",
      description: `Lyra Chat é um projeto pessoal desenvolvido com o objetivo de consolidar meus conhecimentos como desenvolvedor full-stack, unindo aprendizados do mercado de trabalho com estudos independentes ao longo de 2025.

Mesmo já atuando profissionalmente como full-stack, este foi meu primeiro projeto full-stack em C# construído completamente do zero — do backend ao deploy em produção. Finalizar o MVP e colocá-lo no ar foi uma grande conquista pessoal e técnica.

Aspectos técnicos — Front-end:
- Aplicação desenvolvida com React e Vite, utilizando TypeScript.
- Estilização com Tailwind CSS e ShadCN UI, garantindo consistência visual e ótima experiência do usuário.
- Suporte a múltiplos idiomas (i18n).
- Arquitetura organizada com hooks personalizados, Auth Context e Session Components.
- Validação de formulários com Zod.
- Gerenciamento de estado e dados assíncronos com React Query (TanStack Query), incluindo Infinite Query.
- Roteamento com TanStack Router.
- Integração completa com o backend.
- Comunicação em tempo real via SignalR.
- Interface totalmente responsiva, com personalização de tema, troca de cores e paginação integrada ao backend.

Aspectos técnicos — Back-end:
- Backend desenvolvido em .NET 8.0 com C#.
- Arquitetura baseada em DDD (Domain Driven Design).
- Comunicação em tempo real com SignalR.
- Entity Framework para acesso a dados.
- Integração com Supabase para armazenamento de imagens e arquivos.
- Banco de dados PostgreSQL utilizando Neon.

Autenticação:
- Login com Google OAuth 2.0.
- Autenticação por credenciais.
- Usuários com múltiplos providers vinculados.

DevOps & Deploy:
- Front-end hospedado na Vercel.
- Back-end hospedado na Railway.
- Configuração completa de ambientes, variáveis e integrações em produção.

Colaborações:
- Identidade visual e logo desenvolvidas por Paulo Vinicius Leonardo de Souza, elevando significativamente a qualidade visual do projeto.

Resultados:
- MVP finalizado e publicado em produção.
- Projeto completo, funcional e escalável, cobrindo front-end, back-end, autenticação, tempo real e deploy.
- Consolidação prática de conhecimentos em React, .NET, SignalR e arquitetura full-stack.`,
      technologies: [
        "React",
        "Vite",
        "TypeScript",
        "TailwindCSS",
        "ShadCN UI",
        "Zod",
        "TanStack Query",
        "TanStack Router",
        "SignalR",
        "C#",
        ".NET 8",
        "Entity Framework",
        "PostgreSQL",
        "Supabase",
        "Google OAuth",
        "Vercel",
        "Railway",
      ],
      links: [
        {
          type: "Website",
          href: "https://lyra-chat-five.vercel.app/",
          icon: <Globe />,
        },
        {
          type: "Github",
          href: "https://github.com/yyurimelo/LyraWeb",
          icon: <GitHubLogoIcon />,
        },
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/posts/yyurimelo_full-stack-dotnet-react-activity-7419048473020424192-anjg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFd2HhYBH2JIxcWjOSWC_80nF8elcoqKbbQ",
          icon: <LinkedInLogoIcon />,
        },
      ],
      media: {
        image: null,
        video: "/Lyra-Chat-Flow-Preview.mp4",
        video2: null,
        wallpaper: "/lyra-chat-wallpaper.png",
        carousel: null,
      },
    },
    {
      title: "iPrazos - Site",
      href: "https://www.iprazos.adv.br/",
      dates: "Ago 2025 - Mar 2026",
      active: true,
      resume: "Desenvolvimento do site oficial do iPrazos, uma plataforma jurídica focada em automação e simplificação de prazos processuais.",
      description: `O projeto consistiu na criação do site institucional do iPrazos — uma plataforma jurídica que automatiza e simplifica o controle de prazos processuais. 
O foco foi entregar uma experiência fluida, moderna e totalmente otimizada para captação de leads e apresentação do produto.

Aspectos técnicos:
- Construído com Next.js, utilizando Server Actions para integração server-side com a API.
- Captação de leads diretamente pelo site, com formulários validados via React Hook Form e Zod.
- Estilização feita com Tailwind CSS e shadcn/ui, garantindo uma interface moderna e consistente.
- Componentes reutilizáveis e bem estruturados, focando em escalabilidade e manutenção.
- Responsividade total, oferecendo uma navegação fluida em qualquer dispositivo.
- Manipulação otimizada de SVGs e uso do Next Image para performance visual.

Colaborações:
- Ideias de design desenvolvidas em conjunto com @paulodsz_, utilizando Figma para prototipação e refinamento visual.

Resultados:
- Site leve, performático e com foco em conversão, reforçando a identidade visual e a presença digital do iPrazos.`,
      technologies: [
        "Next.js",
        "React Hook Form",
        "Zod",
        "TailwindCSS",
        "shadcn/ui",
        "Server Actions",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.iprazos.adv.br/",
          icon: <Globe />,
        },
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/posts/yyurimelo_nextjs-tailwind-frontend-activity-7388587623952502784-0Vo2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFd2HhYBH2JIxcWjOSWC_80nF8elcoqKbbQ",
          icon: <LinkedInLogoIcon />,
        },
      ],
      media: {
        image: null,
        video: "/iprazos-site-video.mp4",
        video2: "/iprazos-site-video.mp4",
        wallpaper: "/iprazos-wallpaper.png",
        carousel: null,
      },
    },

    {
      title: "Agile",
      href: "https://agile.3code.com.br/",
      dates: "Jan 2025 - Abril 2026",
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
        wallpaper: "/agile-wallpaper.png",
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
        wallpaper: "/agile-wallpaper.png",
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
        wallpaper: "/agile-wallpaper.png",
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
- Experiência prática significativa para meu desenvolvimento como desenvolvedor full-stack.
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