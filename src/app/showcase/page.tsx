import { Section } from "@/components/ui/section";
import { DATA } from "../sections/portfolio/DATA";
import { ShowcaseClient } from "./showcase-client";

export default function Showcase() {
  return (
    <Section className="relative overflow-hidden pb-16 sm:pb-20 md:pb-24">
      <ShowcaseClient projects={DATA.projects} />
    </Section>
  );
}
