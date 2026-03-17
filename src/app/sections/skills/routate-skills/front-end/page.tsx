import { SkillsSection } from "../skills-section";
import { skillsData } from "../skills-data";

export default function FrontEndSkills() {
  return (
    <SkillsSection
      title={skillsData.frontend.title}
      description={skillsData.frontend.description}
      icons={skillsData.frontend.icons}
    />
  );
}
