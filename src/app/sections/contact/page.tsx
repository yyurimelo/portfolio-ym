import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <Section
      id="contact"
      className="overflow-hidden py-16 sm:py-20 mt-20"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-12 px-6 sm:px-8">

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-6xl md:leading-tight max-w-full">
            Contato
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl">
            Entre em contato comigo!
          </p>
        </div>


        <div className="flex flex-col sm:flex-row justify-between items-center gap-12">

          <div className="flex flex-col gap-6 w-full sm:w-1/2">
            <div className="flex items-start gap-3">
              <Phone className="text-primary w-6 h-6 mt-1" />
              <div>
                <p className="font-medium">(21) 97667-6575</p>
                <p className="text-sm text-muted-foreground">(WhatsApp)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-primary w-6 h-6 mt-1" />
              <p className="font-medium">yuri.devsy@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-4 w-full sm:w-1/2">
            <span className="uppercase tracking-wide font-semibold text-muted-foreground">
              Entre em contato comigo
            </span>
            <a  href="https://wa.me/5521976676575?text=Ol%C3%A1%20Yuri%2C%20tudo%20bem%3F%20Encontrei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20oportunidades%20ou%20colabora%C3%A7%C3%B5es%20profissionais." target="_blank">
              <Button size={"lg"} variant={"default"} className="text-white cursor-pointer">
                Enviar via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
