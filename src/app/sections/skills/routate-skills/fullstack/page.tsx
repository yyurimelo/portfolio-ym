import { SkillsSection } from "../skills-section";
import { skillsData } from "../skills-data";

export default function FullStackSkills() {
  return (
    <SkillsSection
      title={skillsData.fullstack.title}
      description={skillsData.fullstack.description}
      icons={skillsData.fullstack.icons}
      withAnimation={true}
      showSwipeHint={true}
    />
  );
}
