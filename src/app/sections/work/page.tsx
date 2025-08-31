import { Section } from "@/components/ui/section";

export default function Works() {
  return (
    <Section className=" overflow-hidden pb-0 sm:pb-0 md:pb-0">

      <div className="max-w-container mx-auto flex flex-col gap-12 pt-12 sm:gap-16">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-4 px-4 sm:px-0">

          <h1 className="from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-6xl md:leading-tight max-w-full">
            Works
          </h1>

          {/* <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[100%] sm:max-w-[740px] font-medium text-balance  delay-100 sm:text-xl">
            Aqui você encontra alguns dos projetos que desenvolvi, mostrando um pouco das minhas habilidades, experiências e forma de trabalhar.
          </p> */}
        </div>
      </div>
    </Section >
  )
}