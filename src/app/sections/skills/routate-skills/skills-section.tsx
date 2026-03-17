"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { SkillsGrid } from "./skills-grid";
import { motion } from "motion/react";

export interface SkillsSectionProps {
  title: string;
  description: string;
  icons: Array<{ icon: React.ReactNode }>;
  withAnimation?: boolean;
  showSwipeHint?: boolean;
}

export function SkillsSection({
  title,
  description,
  icons,
  withAnimation = false,
  showSwipeHint = false
}: SkillsSectionProps) {
  const content = (
    <div className={`flex flex-col md:flex-row md:justify-center md:items-start md:space-x-8 space-y-8 md:space-y-0 ${withAnimation ? "md:gap-20" : ""}`}>
      <div className="text-start text-xs md:w-1/3 max-w-md md:px-4 space-y-2">
        <AuroraText className="font-bold text-2xl md:text-6xl">
          {title}
        </AuroraText>
        <p className="text-sm md:text-base text-muted-foreground">
          {description}
        </p>
      </div>
      {showSwipeHint && (
        <p className="flex items-end justify-end text-sm text-muted-foreground md:hidden">
          {"Arraste >"}
        </p>
      )}
      <div className="space-y-2">
        <AuroraText className="font-bold text-2xl md:text-6xl">
          HABILIDADES
        </AuroraText>
        <SkillsGrid icons={icons} />
      </div>
    </div>
  );

  if (withAnimation) {
    return (
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
