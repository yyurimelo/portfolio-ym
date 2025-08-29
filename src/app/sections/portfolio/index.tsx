import { ProjectCard } from "./project-card";

export default function Portfolio() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
      <ProjectCard
        title="Chat Collect"
        description="With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage."
        video="/gremio.mp4"
        dates="Fev 2024 - Jan 2025"
        tags={["nextjs"]}
      />
      <ProjectCard
        title="E-commerce CEFET/RJ"
        description="teste"
        video="/gremio.mp4"
        dates="Fev 2024 - Jan 2025"
        tags={["nextjs", "typescript", "mongodb", "nestjs", "react"]}
      />
    </div>
  )
}