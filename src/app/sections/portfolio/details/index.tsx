"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Dispatch } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Globe } from "lucide-react";
import Link from "next/link";
import { CarouselProject } from "../carousel-project";


type Props = {
  open: boolean;
  setOpen: Dispatch<boolean>;
  title: string;
  href?: string;
  description: string;
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
};

export function DetailsProject({
  open,
  setOpen,
  title,
  description,
  dates,
  tags,
  href,
  media,
  links,
}: Props) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-7xl h-screen p-0 bg-background flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="border-b">
          <SheetHeader className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <SheetTitle>{title}</SheetTitle>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{dates}</span>
                </div>
              </div>
            </div>

            {/* Tags no header */}
            <div className="flex flex-wrap gap-1">
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
          </SheetHeader>
        </div>

        {/* Conteúdo principal com scroll */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Seção de mídia */}
            {(media.video || media.image || media.carousel) && (
              <div className="mb-8">
                <div className="rounded-xl overflow-hidden shadow-lg border">
                  {media.video || media.video2 ? (
                    <video
                      src={media.video2 || media.video!}
                      controls
                      autoPlay
                      loop
                      className="w-full h-auto max-h-[80vh] rounded-xl"
                    />
                  ) : media.image ? (
                    <div className="relative">
                      <img
                        src={media.image}
                        alt={title}
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  ) : media.carousel ? (
                    <div className="flex justify-center items-center">
                      <CarouselProject carousel={media.carousel} />
                    </div>
                  ) : null}
                </div>
              </div>
            )}

            {/* Descrição */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                Descrição do projeto
              </h3>
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-line text-muted-foreground text-xs md:text-base leading-relaxed rounded-lg p-4 border">
                  {description}
                </div>
              </div>
            </div>

            {/* Links externos */}
            {links && links.length > 0 && (
              <div className="mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {links.map((l, index) => (
                    <Link href={l.href} key={index} target="_blank">
                      <Button
                        className="flex gap-2 px-2 py-1 bg-secondary-foreground hover:bg-secondary-foreground/80 cursor-pointer"
                      >
                        {l.icon}
                        {l.type}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Separator className="my-8" />

            {/* Footer com ações */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Projeto desenvolvido em {dates}
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}