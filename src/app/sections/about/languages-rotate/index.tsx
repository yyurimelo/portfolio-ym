import { WordRotate } from "@/components/magicui/word-rotate";

import { FaReact, FaGitAlt, FaJava } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import {
  SiNextdotjs,
  SiVite,
  SiDotnet,
  SiSpringboot
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

const languagesIcons = [
  {
    icon: <BiLogoTypescript className="text-[#3178C6] size-50" />
  },
  {
    icon: <IoLogoJavascript className="text-[#F7DF1E] size-50" />
  },
  {
    icon: <FaReact className="text-[#61DAFB] size-50" />
  },
  {
    icon: <SiNextdotjs className="size-50" />
  },
  {
    icon: <SiVite className="text-[#9135FF] size-50" />
  },
  {
    icon: <RiTailwindCssFill className="text-[#06B6D4] size-50" />
  },
  {
    icon: <SiDotnet className="text-[#512BD4] size-50" />
  },
  {
    icon: <FaGitAlt className="text-[#F05032] size-50" />
  },
  {
    icon: <IoLogoVercel className="size-50" />
  },
  {
    icon: <FaJava className="text-[#E0234E] size-50" />
  },
  {
    icon: <SiSpringboot className="text-[#6DB33F] size-50" />
  },
];

export function LanguagesRotate() {
  return (
    <div>
      <WordRotate
        words={languagesIcons.map((language, index) => (
          <div key={index} className="flex items-center space-x-1">
            {language.icon}
          </div>
        ))}
      />
    </div>
  );
}
