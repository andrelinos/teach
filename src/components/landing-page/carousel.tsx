'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { NavArrowLeft, NavArrowRight } from 'iconoir-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

const slides = [
  {
    text: 'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.',
    name: 'Marie Poirot',
    company: 'Bigapp',
    imageUrl: '/marie-poirot.png',
  },
  {
    text: 'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.',
    name: 'Marie Poirot',
    company: 'Bigapp',
    imageUrl: '/marie-poirot.png',
  },
  {
    text: 'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.',
    name: 'Marie Poirot',
    company: 'Bigapp',
    imageUrl: '/marie-poirot.png',
  },
  {
    text: 'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.',
    name: 'Antony Poirot',
    company: 'AppMaker',
    imageUrl: '/marie-poirot.png',
  },
  {
    text: 'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.',
    name: 'Antony Poirot',
    company: 'AppMaker',
    imageUrl: '/marie-poirot.png',
  },
]

export function CarouselCases() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return

    try {
      setScrollSnaps(emblaApi.scrollSnapList())
      setSelectedIndex(emblaApi.selectedScrollSnap())

      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
      }

      emblaApi.on('select', onSelect)

      return () => {
        emblaApi.off('select', onSelect)
      }
    } catch (error) {
      console.error('Embla error', error)
    }
  }, [emblaApi])

  return (
    <section
      id="carousel-cases"
      aria-label="Carousel Cases"
      className="relative mt-16 flex min-h-[565px] w-full justify-center overflow-hidden bg-accent-yellow md:min-h-[1050px] lg:max-h-[575px] lg:min-h-auto lg:overflow-visible"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4">
        {/* Elemento decorativo de fundo */}
        <div className="absolute top-[406px] right-8 z-0 h-72 w-80 rotate-[-30deg] rounded-[50px] bg-black md:right-17 md:h-[500px] md:w-[634px] lg:top-4 lg:right-30 lg:h-[573px] lg:w-[496px]" />

        {/* Imagem decorativa */}
        <div className="pointer-events-none absolute bottom-4 left-12 z-20 h-[155px] w-[155px] md:bottom-[9.5rem] md:left-22 lg:right-[27rem] lg:bottom-[2.5rem] lg:left-auto">
          <Image
            src="/decoration-photo-carousel.png"
            alt="Decoração"
            width={155}
            height={155}
            className="object-cover"
          />
        </div>

        {/* Ícone de chat */}
        <div className="absolute right-9 bottom-[20.625rem] z-20 h-12 w-12 md:top-[18rem] md:right-[9rem] lg:top-[7px] lg:right-[10rem]">
          <Image
            src="/chat-icon.svg"
            alt="Chat ícone"
            width={48}
            height={48}
            className="object-cover"
          />
        </div>

        {/* Container do carousel */}
        <div
          className="mx-auto my-8 w-full max-w-[1136px] overflow-hidden"
          aria-label="Carousel Cases"
        >
          <div ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <div
                  key={String(index)}
                  className="relative mt-2 flex min-w-full justify-center px-4 py-8"
                >
                  <div className="z-10 flex w-full flex-col justify-between text-accent-deep-blue lg:flex-row">
                    {/* Área de texto */}
                    <div className="max-w-xl pb-20 lg:pt-6 lg:pr-8 lg:pb-0">
                      <p className="text-xl leading-relaxed lg:text-2xl">
                        {slide.text}
                      </p>
                      <div className="mt-4 flex flex-col text-lg lg:text-2xl">
                        <span>{slide.name},</span>
                        <span className="font-bold">{slide.company}</span>
                      </div>
                    </div>
                    {/* Imagem do slide */}
                    <div className="w-full md:h-[500px] md:w-[634px] lg:w-1/2">
                      <Image
                        src={slide.imageUrl}
                        alt="Imagem do slide"
                        width={528}
                        height={415}
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Setas de navegação */}
          <div className="-translate-y-1/2 absolute top-1/2 left-2 z-20 hidden lg:flex">
            <button type="button" onClick={scrollPrev} className="p-2">
              <NavArrowLeft className="h-8 w-8 text-white" />
            </button>
          </div>
          <div className="-translate-y-1/2 absolute top-1/2 right-2 z-20 hidden lg:flex">
            <button type="button" onClick={scrollNext} className="p-2">
              <NavArrowRight className="h-8 w-8 text-white" />
            </button>
          </div>

          {/* Indicadores da navegação */}
          {scrollSnaps.length > 0 && (
            <div className="absolute bottom-[22rem] left-8 z-20 flex transform gap-2 transition-all duration-500 ease-in-out md:bottom-[37rem] md:left-[2rem] lg:bottom-[7.5rem] lg:left-[5.510rem]">
              {scrollSnaps.map((_, index) => (
                <button
                  key={String(index)}
                  onClick={() => scrollTo(index)}
                  type="button"
                  aria-label={`Slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    index === selectedIndex ? 'w-8 bg-black' : 'w-2 bg-white'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
