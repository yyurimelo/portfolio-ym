import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

type Props = {
  carousel: string[]
}

export function CarouselProject({ carousel }: Props) {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {carousel.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center ">
                  <Image
                    src={img}
                    alt={`Slide ${index}`}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  )
}
