// app/showcase/showcase-client.tsx
"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "../components/project-card";


export function ShowcaseClient({ projects }: { projects: any[] }) {
  const router = useRouter();

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => router.push("/#portfolio")}
        className="absolute top-4 right-6 p-2 rounded-full hover:bg-muted transition cursor-pointer"
      >
        <X className="h-6 w-6" />
      </Button>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 max-w-[1050px] mx-auto mt-12">
        {projects.map((project, id) => (
          <ProjectCard
            key={id}
            href={project.href}
            title={project.title}
            description={project.description}
            resume={project.resume}
            dates={project.dates}
            tags={project.technologies}
            media={project.media}
            links={project.links}
            isOpen
          />
        ))}
      </div>
    </>
  );
}
