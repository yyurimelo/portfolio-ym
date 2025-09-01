"use client";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Showcase } from "./showcase";

export function Projects() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const videos = document.querySelectorAll("video");
      videos.forEach((video) => video.pause());
    }
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="bg-secondary-foreground hover:bg-secondary-foreground/80 cursor-pointer">
          Saiba mais
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full sm:max-w-full h-screen p-0 bg-background flex-1 overflow-y-auto"
      >
        <SheetTitle />
        <div>
          <Showcase />
        </div>
      </SheetContent>
    </Sheet>
  );
}
