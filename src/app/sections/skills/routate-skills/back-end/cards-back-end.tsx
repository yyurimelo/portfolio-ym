import { ShineBorder } from "@/components/magicui/shine-border";

import {
  FaNodeJs,
  FaJava,
  FaDocker
} from "react-icons/fa";
import {
  SiDotnet,
  SiNestjs,
  SiSpringboot,
  SiExpress,
  SiPrisma,
  SiMysql
} from "react-icons/si";
import {
  BiLogoMongodb,
  BiLogoPostgresql
} from "react-icons/bi";

export function CardsBackEnd() {
  const backendIcons = [
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
  ]

  return (
    <div>
      <div className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-4 gap-2 p-1">
        {backendIcons.map((backend, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-md bg-muted-foreground/4 p-4 shadow-md flex justify-center items-center cursor-pointer
                       transition-transform duration-200 ease-in-out md:hover:scale-105"
          >
            <div className="absolute inset-0 rounded-md transition-opacity duration-200 opacity-0 md:group-hover:opacity-100">
              <ShineBorder shineColor={["#ab0fff", "#8833ff", "#3aa3ff"]} />
            </div>

            <div className="relative z-10">
              {backend.icons}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
