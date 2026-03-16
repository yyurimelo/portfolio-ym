import { ShineBorder } from "@/components/magicui/shine-border";

import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaGithub 
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import {
  SiZod,
  SiNextdotjs,
  SiShadcnui,
  SiReactquery,
  SiVite,
  SiDotnet,
  SiNestjs,
  SiExpress,
  SiPrisma,
  SiMysql,
  SiSpringboot,
  SiReactrouter,
  SiRailway
} from "react-icons/si";
import {
  BiLogoTypescript,
  BiLogoMongodb,
  BiLogoPostgresql
} from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa6";

export function CardsFullstack() {

  const fullstackIcons = [
    {
      icons: <FaHtml5 className="text-[#E34F26] size-12" />
    },
    {
      icons: <IoLogoCss3 className="text-[#3366CC] size-12" />
    },
    {
      icons: <IoLogoJavascript className="text-[#F7DF1E] size-12" />
    },
    {
      icons: <FaReact className="text-[#61DAFB] size-12" />
    },
    {
      icons: <BiLogoTypescript className="text-[#3178C6] size-15" />
    },
    {
      icons: <SiNextdotjs className="size-12" />
    },
    {
      icons: <SiVite className="text-[#9135FF] size-12" />
    },
    {
      icons: <RiTailwindCssFill className="text-[#06B6D4] size-12" />
    },
    {
      icons: <SiShadcnui className="size-12" />
    },
    {
      icons: <SiReactquery className="text-[#FF4154] size-12" />
    },
    {
      icons: <SiZod className="text-[#408AFF] size-12" />
    },
    {
      icons: <SiReactrouter className="text-[#CA4245] size-12" />
    },
    {
      icons: <FaFigma className="text-[#F24E1E] size-12" />
    },
    {
      icons: <SiDotnet className="text-[#512BD4] size-12" />
    },
    {
      icons: <FaNodeJs className="text-[#5FA04E] size-12" />
    },
    {
      icons: <SiNestjs className="text-[#E0234E] size-12" />
    },
    {
      icons: <FaJava className="text-[#E0234E] size-12" />
    },
    {
      icons: <SiSpringboot className="text-[#6DB33F] size-12" />
    },
    {
      icons: <SiExpress className="size-12" />
    },
    {
      icons: <BiLogoMongodb className="text-[#47A248] size-12" />
    },
    {
      icons: <SiPrisma className="text-[#2D3748] size-12" />
    },
    {
      icons: <BiLogoPostgresql className="text-[#4169E1] size-12" />
    },
    {
      icons: <SiMysql className="text-[#4479A1] size-12" />
    },
    {
      icons: <FaDocker className="text-[#2496ED] size-12" />
    },
    {
      icons: <FaGithub className="size-12" />
    },
    {
      icons: <IoLogoVercel className="size-12" />
    },
    {
      icons: <SiRailway className="size-12" />
    },
  ]

  return (
    <div>
      <div className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-4 gap-2 p-1">
        {fullstackIcons.map((fullstack, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-md bg-muted-foreground/4 p-4 shadow-md flex justify-center items-center cursor-pointer
                       transition-transform duration-200 ease-in-out md:hover:scale-105"
          >
            <div className="absolute inset-0 rounded-md transition-opacity duration-200 opacity-0 md:group-hover:opacity-100">
              <ShineBorder shineColor={["#ab0fff", "#8833ff", "#3aa3ff"]} />
            </div>

            <div className="relative z-10">
              {fullstack.icons}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
