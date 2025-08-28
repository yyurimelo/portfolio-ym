"use client";

import { cn } from "@/lib/utils";
import LanguagesRotate from "./languages-rotate/page";
import Writing from "./writing/page";
// import { DotPattern } from "@/components/magicui/dot-pattern";
import { motion } from "motion/react";
import { Section } from "@/components/ui/section";

export default function About() {
  return (
    <Section className="flex min-h-screen items-center justify-center relative border-primary bg-[url('/spiral-background.png')] lg:bg-contain bg-cover bg-no-repeat lg:bg-center">
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          <div className="absolute inset-0 -z-10">
            {/* <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
              "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)]"
            )}
          /> */}
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center justify-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:w-1/3 w-full"
            >
              <Writing />
            </motion.div>
            <div className="md:w-1/3 w-full flex justify-center mb-8 md:mb-0 items-center">
              <LanguagesRotate />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
