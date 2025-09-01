"use client"
import { ProjectCard } from "../project-card";
import { DATA } from "../data.resume";
import { Section } from "@/components/ui/section";

export default function Showcase() {

  return (
    <Section className=" overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 max-w-[1050px] mx-auto">
        {DATA.projects.map((project, id) => (
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
    </Section >
  )
}