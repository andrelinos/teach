'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'iconoir-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

interface Slide {
  name: string
  occupation: string
  text: string
  img: string
}

const slides: Slide[] = [
  {
    name: 'Hellen Jummy',
    occupation: 'Financial Counselor',
    text: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.',
    img: '/hellen-jummy.png',
  },
  {
    name: 'Ralph Edwards',
    occupation: 'Math Teacher',
    text: 'Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.',
    img: '/ralph-edwards.png',
  },
  {
    name: 'Hellena John',
    occupation: 'Psychology Student',
    text: 'Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.',
    img: '/hellena-jonh.png',
  },
  {
    name: 'David Oshodi',
    occupation: 'Manager',
    text: 'Sapien, sollicitudin et vitae id et laoreet sapien consectetur. Felis egestas egestas amet aliquam sit euismod. Pellentesque neque, sed ut volutpat. Ullamcorper in at nulla dignissim.',
    img: '/david-oshodi.png',
  },
]
export function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [isFirstSlide, setIsFirstSlide] = useState(true)
  const [isLastSlide, setIsLastSlide] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return

    setIsFirstSlide(!emblaApi.canScrollPrev())
    setIsLastSlide(!emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()

    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section
      id="ready-for-your-next-project"
      aria-label="Ready For Your Next Project"
      className="mt-6 flex h-[614px] w-full justify-center p-1 sm:p-8"
    >
      <div className="relative mx-auto flex w-full flex-col justify-center gap-11 text-white">
        <h2 className="text-center font-extrabold text-2xl text-text-primary leading-6 sm:text-left lg:px-6 lg:text-6xl lg:leading-18 xl:text-[56px]">
          What everyone says
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex transition-transform duration-300 ease-out">
            {slides.map((slide, index) => (
              <div key={String(index)} className="h-[390px] p-2 sm:p-6">
                <div className="flex h-[309px] w-[323px] flex-col justify-between rounded-lg border-2 border-gray-100 bg-white p-4 shadow-xl sm:h-[305px] sm:w-[412px] sm:p-6 ">
                  <p className="text-content-body text-lg">{slide.text}</p>
                  <div className="flex items-center gap-4">
                    <Image
                      width={64}
                      height={64}
                      src={slide.img}
                      alt={slide.name}
                      className="mb-4 h-16 w-16 rounded-full"
                    />

                    <div className="flex flex-col text-content-body">
                      <h3 className="text-lg">{slide.name}</h3>
                      <p className="mb-2 text-accent-slate-blue">
                        {slide.occupation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-8 right-4 hidden w-32 space-x-2 md:flex">
          <Button
            variant="outline"
            onClick={scrollPrev}
            className="flex size-12 items-center justify-center rounded-full border-2 border-accent-orange p-0 text-accent-orange focus:outline-none"
            aria-label="Anterior"
            disabled={isFirstSlide}
          >
            <ArrowLeft />
          </Button>
          <Button
            variant="outline"
            onClick={scrollNext}
            className="flex size-12 items-center justify-center rounded-full border-2 border-accent-orange p-0 text-accent-orange focus:outline-none"
            aria-label="Próximo"
            disabled={isLastSlide}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
