"use client";

import { Section } from "@/components/ui/section";
import { BlurFade } from "@/components/magicui/blur-fade";
import { DATA } from "../sections/portfolio/data.resume";
import { ProjectCard } from "../sections/portfolio/project-card";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const BLUR_FADE_DELAY = 0.01;

export default function Showcase() {
  const router = useRouter();

  return (
    <Section className="relative overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => router.push("/#portfolio")}
        className="absolute top-4 right-6 p-2 rounded-full hover:bg-muted transition cursor-pointer"
      >
        <X className="h-6 w-6" />
      </Button>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 max-w-[1050px] mx-auto mt-12">
        {DATA.projects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
          >
            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              resume={project.resume}
              dates={project.dates}
              tags={project.technologies}
              media={project.media}
              links={project.links}
              isOpen
            />
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}