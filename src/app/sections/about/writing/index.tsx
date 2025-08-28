import { AuroraText } from "@/components/magicui/aurora-text";

export function Writing() {
  const nowYear = new Date().getFullYear();
  const birthYear = 2006;
  const age = nowYear - birthYear;

  return (
    <div>
      <p className="leading-relaxed text-muted-foreground md:text-sm text-xs p-4 text-center md:text-start">
        <AuroraText className="font-bold text-4xl md:text-6xl mb-4">
          Sobre
        </AuroraText>
        <br></br>
        Meu nome é Yuri Melo, tenho {age} anos e desde pequeno sempre fui
        fascinado por tecnologia. Minha jornada na programação começou em 2022,
        quando ingressei no curso de Informática no CEFET/RJ, campus Nova
        Iguaçu. Lá, dei meus primeiros passos aprendendo a programar com C e
        desenvolvendo interfaces simples com HTML, CSS e JavaScript. Logo me
        apaixonei pelo front-end e comecei a estudar por conta própria,
        aprofundando meus conhecimentos e expandindo minhas habilidades.
        <br />
        <br />
        Em 2023, tive a oportunidade de ser bolsista em um projeto de extensão,
        onde desenvolvi um aplicativo mobile para a escola usando React Native.
        Esse desafio me proporcionou um grande aprendizado e reforçou minha
        paixão por criar aplicações que fazem a diferença. No ano seguinte, em
        2024, realizei meu Trabalho de Conclusão de Curso (TCC), um projeto
        especial: uma loja virtual para o Grêmio Estudantil da minha escola,
        oferecendo uma plataforma completa para a gestão de produtos e vendas.
        <br />
        <br />
        Hoje, tenho experiência sólida como desenvolvedor full stack, trabalhando
        com tecnologias modernas como React, TypeScript, Tailwind, ShadCN UI e
        C#. Continuo estudando e me aperfeiçoando, sempre buscando criar
        soluções inovadoras e eficientes. A programação não é só minha
        profissão, mas também uma paixão que me impulsiona a aprender e evoluir
        a cada dia.
      </p>
    </div>
  );
}
