"use client"

import { useState } from "react";

// icons
import { Mail, Phone } from "lucide-react";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

// components
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger
} from "@/components/ui/responsive-dialog";
import { Separator } from "@/components/ui/separator";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export function ContactButton() {
  const [open, setOpen] = useState(false);
  return (
    <ResponsiveDialog open={open} onOpenChange={setOpen}>
      <ResponsiveDialogTrigger asChild>
        <InteractiveHoverButton
          className="bg-primary"
          onClick={() => setOpen(true)}
        >
          Contato
        </InteractiveHoverButton>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent className="md:max-h-full max-h-[350px]">
        <ResponsiveDialogHeader>
          <ResponsiveDialogTitle>Vamos trabalhar juntos?</ResponsiveDialogTitle>
        </ResponsiveDialogHeader>
        <section className="space-y-3">
          <Separator />
          <div className="flex gap-2 justify-between items-center">
            <Mail className="size-5" />
            <a href="mailto:yuri.devsy@gmail.com" className="underline">
              yuri.devsy@gmail.com
            </a>
          </div>
          <Separator />
          <div className="flex gap-2 justify-between items-center">
            <LinkedInLogoIcon className="size-5" />
            <a href="https://www.linkedin.com/in/yyurimelo/">yyurimelo</a>
          </div>
          <Separator />
          <div className="flex gap-2 justify-between items-center">
            <GitHubLogoIcon className="size-5" />
            <a href="https://github.com/yyurimelo">yyurimelo</a>
          </div>
          <Separator />
          <div className="flex gap-2 justify-between items-center">
            <InstagramLogoIcon className="size-5" />
            <a href="https://www.instagram.com/yyurimelo/">@yyurimelo</a>
          </div>
          <Separator />
          <div className="flex gap-2 justify-between items-center">
            <Phone className="size-5" />
            <a href="https://wa.me/5521976676575?text=Ol%C3%A1%20Yuri%2C%20tudo%20bem%3F%20Encontrei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20oportunidades%20ou%20colabora%C3%A7%C3%B5es%20profissionais." target="_blank">
              +55 (21) 97667-6575
            </a>
          </div>
        </section>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
