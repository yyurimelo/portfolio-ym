import { AuroraText } from "@/components/magicui/aurora-text";

export function Writing() {
  const nowYear = new Date().getFullYear();
  const birthYear = 2006;
  const age = nowYear - birthYear;

  return (
    <div className="flex flex-col justify-start text-center md:text-left ">
      <AuroraText className="font-bold w-full text-5xl md:text-6xl mb-4">
        Sobre
      </AuroraText>
      <p className="leading-relaxed text-muted-foreground md:text-sm text-xs py-4 text-justify" style={{ textAlign: 'justify' }}>
        Sou Yuri Melo, desenvolvedor fullstack com {age} anos e mais de 3 anos de experiência prática. Desde pequeno sempre fui fascinado por tecnologia, e minha jornada na programação começou em 2022, quando ingressei no curso de Informática no CEFET/RJ, campus Nova Iguaçu. Lá, dei meus primeiros passos aprendendo a programar com C e desenvolvendo interfaces com HTML, CSS e JavaScript. Logo me aprofundei no ecossistema front-end, estudando por conta própria e expandindo minhas habilidades continuamente.
        <br />
        <br />
        Em 2023, atuei como bolsista em um projeto de extensão, onde desenvolvi um aplicativo mobile para a escola utilizando React Native — uma experiência que reforçou minha paixão por construir aplicações que geram impacto real. No ano seguinte, em 2024, desenvolvi meu TCC: meu primeiro projeto fullstack completo, uma plataforma de e-commerce para o Grêmio Estudantil da escola, cobrindo gestão de produtos e vendas do zero ao deploy.
        <br />
        <br />
        Hoje atuo profissionalmente como desenvolvedor fullstack, trabalhando de ponta a ponta — da interface com React e seus frameworks ao back-end com Node.js, C# .NET e Java Spring Boot. Sou movido pela curiosidade e pelo compromisso com código limpo, boas práticas e soluções que geram impacto real.
      </p>
    </div>
  );
}
