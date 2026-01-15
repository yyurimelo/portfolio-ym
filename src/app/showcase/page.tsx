import { Section } from "@/components/ui/section";
import { DATA } from "../sections/portfolio/DATA";
import { ShowcaseClient } from "./showcase-client";

export default function Showcase() {
  return (
    <Section className="relative overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <ShowcaseClient projects={DATA.projects} />
    </Section>
  );
}
