import Image from "next/image";
import { ShineBorder } from "@/components/magicui/shine-border";

export function CardsFrontEnd() {
  const slugs = [
    "html5",
    "css",
    "javascript",
    "react",
    "androidstudio",
    "typescript",
    "nextdotjs",
    "vite",
    "tailwindcss",
    "shadcnui",
    "reactquery",
    "zod",
    "figma",
  ];

  const images = slugs.map(
    (slug) =>
      `https://cdn.simpleicons.org/${slug.toLowerCase()}/${slug.toLowerCase()}`
  );

  return (
    <div>
      <div className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-4 gap-2 p-1">
        {slugs.map((slug, index) => (
          <div
            key={slug}
            className="group relative overflow-hidden rounded-md bg-muted-foreground/4 p-4 shadow-md flex justify-center items-center cursor-pointer
                       transition-transform duration-200 ease-in-out md:hover:scale-105"
          >
            <div className="absolute inset-0 rounded-md transition-opacity duration-200 opacity-0 md:group-hover:opacity-100">
              <ShineBorder shineColor={["#ab0fff", "#8833ff", "#3aa3ff"]} />
            </div>

            <div className="relative z-10">
              <Image
                src={images[index]}
                alt={`Ícone de ${slug}`}
                width={40}
                height={40}
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
