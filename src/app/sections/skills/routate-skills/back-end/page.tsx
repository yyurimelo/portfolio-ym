import { SkillsSection } from "../skills-section";
import { skillsData } from "../skills-data";

export default function BackEndSkills() {
  return (
    <SkillsSection
      title={skillsData.backend.title}
      description={skillsData.backend.description}
      icons={skillsData.backend.icons}
    />
  );
}
