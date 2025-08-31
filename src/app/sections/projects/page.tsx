"use client"
import { ProjectCard } from "../portfolio/project-card";
import { DATA } from "../portfolio/data.resume";
import { Section } from "@/components/ui/section";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function Projects() {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  const BLUR_FADE_DELAY = 0.04;

  return (
    <Section className=" overflow-hidden pb-0 sm:pb-0 md:pb-0">

      <div className="max-w-container mx-auto flex flex-col gap-12 pt-12 sm:gap-16">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-4 px-4 sm:px-0">
          <Button variant={"ghost"} onClick={handleGoBack} className="cursor-pointer">
            <ChevronLeft className="size-4" />
            Voltar
          </Button>
          <h1 className="from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-6xl md:leading-tight max-w-full">
            Confira alguns dos meus trabalhos
          </h1>

          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[100%] sm:max-w-[740px] font-medium text-balance  delay-100 sm:text-xl">
            Aqui você encontra alguns dos projetos que desenvolvi, mostrando um pouco das minhas habilidades, experiências e forma de trabalhar.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 max-w-[1050px] mx-auto mt-10">
        {DATA.projects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 1 + id * 0.05}
          >

            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project?.links ?? []}
            />
          </BlurFade>
        ))}
      </div>
    </Section >
  )
}