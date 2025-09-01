import { Section } from "@/components/ui/section";
import { ProjectCard } from "./project-card";
import { DATA } from "./data.resume";
import { Projects } from "./projects/page";


export default function Portfolio() {
  return (
    <Section className=" overflow-hidden pb-0 sm:pb-0 md:pb-0 border-t">
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-12 sm:gap-16">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-4 px-4 sm:px-0">

          <h1 className="from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-6xl md:leading-tight max-w-full">
            Confira alguns dos meus trabalhos
          </h1>

          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[100%] sm:max-w-[740px] font-medium text-balance  delay-100 sm:text-xl">
            Aqui você encontra alguns dos projetos que desenvolvi, mostrando um pouco das minhas habilidades, experiências e forma de trabalhar.
          </p>
        </div>
        <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[600px] mx-auto fade-bottom-md lg:fade-bottom-lg">
          {DATA.projects.slice(0, 4).map((project) => (
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
          ))}
        </div>

        <div className="relative -mt-50 z-20 flex justify-center">
          <Projects />
        </div>
      </div>
    </Section >
  )
}