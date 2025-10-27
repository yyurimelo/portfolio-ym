import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ProjectCardDetails } from "./project-card-details";

interface Props {
  title: string;
  href?: string;
  description: string;
  resume?: string;
  dates: string;
  tags: readonly string[];
  media: {
    image: string | null;
    video: string | null;
    video2: string | null;
    wallpaper: string | null;
    carousel: string[] | null;
  };
  links?: readonly {
    icon: React.ReactNode | null;
    type: string;
    href: string;
  }[];
  className?: string;
  isOpen?: boolean;
}

export function ProjectCard({
  title,
  href,
  description,
  resume,
  dates,
  tags,
  media,
  links,
  className,
  isOpen
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        className={
          "flex flex-col overflow-hidden border hover:shadow-lg hover:bg-muted/10 transition-all duration-300 ease-out h-full bg-background cursor-pointer"
        }
        onClick={() => setOpen(true)}
      >
        {media.video && (
          <video
            src={media.video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {(media.image || media.wallpaper) && (
          <Image
            src={media.wallpaper || media.image!}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
        <CardHeader className="px-2">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <time className="font-sans text-xs">{dates}</time>
            <div className="hidden font-sans text-xs underline print:visible">
              {href?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
            <p className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {resume}
            </p>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col px-2">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags?.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="px-2 pb-2">
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {links?.map((link, idx) => (
                <Link href={link?.href} key={idx} target="_blank">
                  <Badge key={idx} className="flex items-center gap-1 px-2 py-1 text-[10px] bg-secondary-foreground h-6">
                    <span className="flex items-center justify-center w-3 h-3">
                      {link.icon}
                    </span>
                    {link.type === "Website" && (
                      link.type
                    )}
                  </Badge>
                </Link>
              ))}

            </div>
          )}
        </CardFooter>
      </Card>

      {isOpen && (
        <ProjectCardDetails
          open={open}
          setOpen={setOpen}
          title={title}
          description={description}
          dates={dates}
          tags={tags}
          href={href}
          media={media}
          links={links}
          className={className}
        />
      )}
    </>
  );
}