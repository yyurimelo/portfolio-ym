import { ShineBorder } from "@/components/magicui/shine-border";
import { ReactNode } from "react";

export interface SkillIcon {
  icon: ReactNode;
}

interface SkillsGridProps {
  icons: SkillIcon[];
}

export function SkillsGrid({ icons }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-4 gap-2 p-1">
      {icons.map((skill, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-md bg-muted-foreground/4 p-4 shadow-md flex justify-center items-center cursor-pointer
                     transition-transform duration-200 ease-in-out md:hover:scale-105"
        >
          <div className="absolute inset-0 rounded-md transition-opacity duration-200 opacity-0 md:group-hover:opacity-100">
            <ShineBorder shineColor={["#ab0fff", "#8833ff", "#3aa3ff"]} />
          </div>

          <div className="relative z-10">
            {skill.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
