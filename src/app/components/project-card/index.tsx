"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import { ProjectCardDetails } from "./project-card-details";
import { cn } from "@/lib/utils";

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
  const canOpenDetails = Boolean(isOpen);

  const openDetails = () => {
    if (!canOpenDetails) return;
    setOpen(true);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest("a")) return;
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openDetails();
  };

  const stopCardClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <Card
        className={cn(
          "flex h-full flex-col overflow-hidden border bg-background transition-all duration-300 ease-out hover:bg-muted/10 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
          canOpenDetails && "cursor-pointer",
          className
        )}
        onClick={openDetails}
        onKeyDown={handleKeyDown}
        role={canOpenDetails ? "button" : undefined}
        aria-label={canOpenDetails ? `Abrir detalhes do projeto ${title}` : undefined}
        tabIndex={canOpenDetails ? 0 : undefined}
      >
        <ProjectCardPreview title={title} media={media} />

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
                <Link href={link?.href} key={idx} target="_blank" onClick={stopCardClick}>
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

function ProjectCardPreview({
  title,
  media,
}: {
  title: string;
  media: Props["media"];
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [videoUnavailable, setVideoUnavailable] = useState(false);

  const fallbackImage = media.wallpaper || media.image || media.carousel?.[0] || null;
  const hasVideo = Boolean(media.video && !videoUnavailable);

  const playPreview = () => {
    const video = videoRef.current;
    if (!video || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    setIsPreviewing(true);
    video.play().catch(() => {
      setIsPreviewing(false);
    });
  };

  const stopPreview = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    setIsPreviewing(false);
  };

  if (!fallbackImage && !hasVideo) {
    return (
      <div className="flex h-40 w-full items-center justify-center bg-muted text-xs text-muted-foreground">
        Prévia indisponível
      </div>
    );
  }

  return (
    <div
      className="group relative h-40 w-full overflow-hidden bg-muted"
      onMouseEnter={playPreview}
      onMouseLeave={stopPreview}
    >
      {fallbackImage && (
        <Image
          src={fallbackImage}
          alt={title}
          width={700}
          height={420}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
        />
      )}

      {hasVideo && (
        <video
          ref={videoRef}
          src={media.video!}
          className={cn(
            "h-full w-full object-cover object-top",
            fallbackImage && "absolute inset-0 transition-opacity duration-300",
            fallbackImage && (isPreviewing ? "opacity-100" : "opacity-0")
          )}
          preload="metadata"
          muted
          loop
          playsInline
          onError={() => setVideoUnavailable(true)}
        />
      )}

      {fallbackImage && hasVideo && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-linear-to-t from-black/75 to-transparent opacity-90" />
      )}
    </div>
  );
}
